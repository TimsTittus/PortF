import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const AnalyticsTracker = () => {
  const location = useLocation();
  const startTime = useRef<number>(Date.now());
  const hasFetchedIp = useRef(false);

  // --- Helper: Get GPU Info ---
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

  // --- Helper: Get Connection Info ---
  const getConnectionInfo = () => {
    // @ts-ignore
    const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    return conn ? { type: conn.effectiveType, saveData: conn.saveData } : 'Unknown';
  };

  // --- 1. Gather Static User Data (Hardware/Software) ---
  const getSystemDetails = () => {
    return {
      screen: {
        width: window.screen.width,
        height: window.screen.height,
        colorDepth: window.screen.colorDepth,
        orientation: window.screen.orientation?.type
      },
      hardware: {
        cpuCores: navigator.hardwareConcurrency, // Number of logical processors
        // @ts-ignore
        memory: navigator.deviceMemory ? `${navigator.deviceMemory} GB` : 'Unknown', // RAM (approx)
        gpu: getGPU(),
        platform: navigator.platform,
        vendor: navigator.vendor,
      },
      software: {
        userAgent: navigator.userAgent,
        language: navigator.language,
        cookiesEnabled: navigator.cookieEnabled,
      },
      connection: getConnectionInfo(),
      referrer: document.referrer || 'Direct',
    };
  };

  // --- 2. Track Page Visits & Time ---
  useEffect(() => {
    // This runs every time the route (URL) changes
    const currentPath = location.pathname;
    
    // Log entry time
    startTime.current = Date.now();
    console.log(`[Analytics] Entered: ${currentPath} at ${new Date().toLocaleTimeString()}`);

    // Fetch IP/Location Data (Only once per session to save API calls)
    if (!hasFetchedIp.current) {
      fetch('https://ipapi.co/json/')
        .then(res => res.json())
        .then(data => {
            const fullUserProfile = {
                network: data, // IP, City, ISP, etc.
                system: getSystemDetails(),
                timestamp: new Date().toISOString()
            };
            
            console.log("🚀 FULL USER PROFILE CAPTURED:", fullUserProfile);
            // TODO: SEND 'fullUserProfile' TO YOUR DATABASE HERE (Firebase/Supabase)
            
            hasFetchedIp.current = true;
        })
        .catch(err => console.error("Ad-blocker blocking IP fetch:", err));
    }

    // Cleanup function: Runs when user LEAVES the page
    return () => {
      const timeSpent = (Date.now() - startTime.current) / 1000;
      console.log(`[Analytics] Left: ${currentPath}. Time spent: ${timeSpent}s`);
      
      const pageSessionData = {
          page: currentPath,
          timeSpentSeconds: timeSpent,
          timestamp: new Date().toISOString()
      };

      // TODO: SEND 'pageSessionData' TO YOUR DATABASE HERE
    };
  }, [location]);

  return null;
};

export default AnalyticsTracker;