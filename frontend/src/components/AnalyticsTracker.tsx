import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { supabase } from '../supabaseClient';

const AnalyticsTracker = () => {
  const location = useLocation();
  const startTime = useRef<number>(Date.now());
  const currentSessionId = useRef<string | null>(null);
  const cachedIpData = useRef<any>(null);

  // --- Helper: Persistent Visitor ID (The "MAC Address" alternative) ---
  const getVisitorId = () => {
    let vid = localStorage.getItem('visitor_id');
    if (!vid) {
      vid = crypto.randomUUID();
      localStorage.setItem('visitor_id', vid);
    }
    return vid;
  };

  // --- Helper: Connection Info ---
  const getConnectionInfo = () => {
    // @ts-ignore
    const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    if (!conn) return 'Unknown';
    return {
      type: conn.effectiveType, 
      rtt: conn.rtt, 
      downlink: conn.downlink
    };
  };

  // --- Helper: GPU Info ---
  const getGPU = () => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) return 'Unknown GPU';
      // @ts-ignore
      const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
      // @ts-ignore
      return gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
    } catch (e) {
      return 'Unknown GPU';
    }
  };

  useEffect(() => {
    const currentPath = location.pathname;
    startTime.current = Date.now();
    currentSessionId.current = null;

    const logVisit = async () => {
      try {
        // 1. Fetch IP & Location Data (Cached)
        if (!cachedIpData.current) {
          try {
            const res = await fetch('https://ipapi.co/json/');
            cachedIpData.current = await res.json();
          } catch (e) {
            console.warn("IP Fetch failed");
            cachedIpData.current = {};
          }
        }
        
        const ipData = cachedIpData.current;

        // 2. Prepare Detailed System Info
        const systemInfo = {
          screen_res: `${window.screen.width}x${window.screen.height}`,
          window_size: `${window.innerWidth}x${window.innerHeight}`,
          gpu: getGPU(),
          cpu_cores: navigator.hardwareConcurrency,
          // @ts-ignore
          ram: navigator.deviceMemory ? `~${navigator.deviceMemory} GB` : 'Unknown',
          ua: navigator.userAgent,
          platform: navigator.platform,
          language: navigator.language,
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          connection: getConnectionInfo(),
          referrer: document.referrer || 'Direct',
          visitor_id: getVisitorId(),
        };

        // 3. INSERT into Supabase with Lat/Long
        const { data, error } = await supabase
          .from('analytics')
          .insert([
            {
              ip: ipData.ip || 'Unknown',
              city: ipData.city || 'Unknown',
              country: ipData.country_name || 'Unknown',
              isp: ipData.org || 'Unknown',
              latitude: ipData.latitude || 0,   // <--- NEW
              longitude: ipData.longitude || 0, // <--- NEW
              device_info: systemInfo,
              page: currentPath,
            }
          ])
          .select()
          .single();

        if (error) throw error;
        
        if (data) {
            currentSessionId.current = data.id;
        }

      } catch (err) {
        console.error("Analytics Error:", err);
      }
    };

    logVisit();

    // --- CLEANUP ---
    return () => {
      const timeSpent = Math.round((Date.now() - startTime.current) / 1000);
      
      if (currentSessionId.current) {
        supabase
          .from('analytics')
          .update({ duration_seconds: timeSpent })
          .eq('id', currentSessionId.current)
          .then(({ error }) => {
             if (error) console.error("Update Error", error);
          });
      }
    };
  }, [location]);

  return null;
};

export default AnalyticsTracker;