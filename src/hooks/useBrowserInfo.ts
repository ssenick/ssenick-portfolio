// src/hooks/useBrowserInfo.ts
import { useEffect, useState } from 'react';

interface BrowserInfo {
   name: string;
   version: string;
}

export const useBrowserInfo = () => {
   const [browserInfo, setBrowserInfo] = useState<BrowserInfo | null>(null);

   useEffect(() => {
      const userAgent = navigator.userAgent;

      let name = 'Unknown';
      let version = '';

      if (/chrome|crios|crmo/i.test(userAgent)) {
         name = 'Chrome';
         version = userAgent.match(/(?:chrome|crios|crmo)\/(\d+)/i)?.[1] ?? '';
      } else if (/firefox|fxios/i.test(userAgent)) {
         name = 'Firefox';
         version = userAgent.match(/(?:firefox|fxios)\/(\d+)/i)?.[1] ?? '';
      } else if (/safari/i.test(userAgent)) {
         name = 'Safari';
         version = userAgent.match(/version\/(\d+)/i)?.[1] ?? '';
      } else if (/msie|trident/i.test(userAgent)) {
         name = 'IE';
         version = userAgent.match(/(?:msie |rv:)(\d+)/i)?.[1] ?? '';
      } else if (/edg/i.test(userAgent)) {
         name = 'Edge';
         version = userAgent.match(/edg\/(\d+)/i)?.[1] ?? '';
      } else if (/opera|opr/i.test(userAgent)) {
         name = 'Opera';
         version = userAgent.match(/(?:opera|opr)\/(\d+)/i)?.[1] ?? '';
      }

      setBrowserInfo({ name, version });
   }, []);

   return browserInfo;
};
