import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { supabase } from '../supabaseClient';

const AnalyticsTracker = () => {
  const location = useLocation();
  const startTime = useRef<number>(Date.now());
  const currentSessionId = useRef<string | null>(null);

  // --- Helper: Get Detailed GPU Info ---
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
    currentSessionId.current = null; // Reset session ID for new page

    const logVisit = async () => {
      try {
        // 1. Fetch IP & Location (Using a free API)
        const res = await fetch('https://ipapi.co/json/');
        const ipData = await res.json();

        // 2. Prepare System Info
        const systemInfo = {
          screen: `${window.screen.width}x${window.screen.height}`,
          gpu: getGPU(),
          cpu_cores: navigator.hardwareConcurrency,
          // @ts-ignore
          ram: navigator.deviceMemory ? `~${navigator.deviceMemory} GB` : 'Unknown',
          ua: navigator.userAgent,
          platform: navigator.platform
        };

        // 3. INSERT into Supabase
        const { data, error } = await supabase
          .from('analytics')
          .insert([
            {
              ip: ipData.ip,
              city: ipData.city,
              country: ipData.country_name,
              isp: ipData.org,
              device_info: systemInfo,
              page: currentPath,
            }
          ])
          .select() // vital to get the ID back
          .single();

        if (error) throw error;
        
        // Save the ID so we can update this row when the user leaves
        if (data) {
            currentSessionId.current = data.id;
            console.log(`[Analytics] Tracking started. ID: ${data.id}`);
        }

      } catch (err) {
        console.error("Analytics Error:", err);
      }
    };

    logVisit();

    // --- CLEANUP (Runs when user leaves the page) ---
    return () => {
      const timeSpent = Math.round((Date.now() - startTime.current) / 1000);
      
      console.log(`[Analytics] Left ${currentPath}. Duration: ${timeSpent}s`);

      // Update the row with the time spent
      if (currentSessionId.current) {
        supabase
          .from('analytics')
          .update({ duration_seconds: timeSpent })
          .eq('id', currentSessionId.current)
          .then(({ error }) => {
             if (error) console.error("Failed to update duration", error);
          });
      }
    };
  }, [location]); // Re-run this effect when the route changes

  return null;
};

export default AnalyticsTracker;