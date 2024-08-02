import '@/app/styles/index.scss';
import '@/config/i18n/i18n';

import { ReactLenis } from '@studio-freight/react-lenis';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from '@/app/App.tsx';
import { LanguageProvider } from '@/poviders/LanguageProvider';
import { MediaQueryProvider } from '@/poviders/MediaQueryProvider';
const container = document.getElementById('root');
if (!container) throw new Error('Failed to mount the application, check the container!');

const root = createRoot(container);

root.render(
   <StrictMode>
      <LanguageProvider>
         <MediaQueryProvider>
            <BrowserRouter>
               <ReactLenis root>
                  <App />
               </ReactLenis>
            </BrowserRouter>
         </MediaQueryProvider>
      </LanguageProvider>
   </StrictMode>,
);
