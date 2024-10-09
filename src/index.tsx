import '@/app/styles/index.scss';
import '@/config/i18n/i18n';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from '@/app/App.tsx';
import { LanguageProvider } from '@/poviders/LanguageProvider';
import { MediaQueryProvider } from '@/poviders/MediaQueryProvider';

import { ErrorBoundary } from './poviders/ErrorBoundary';

const container = document.getElementById('root');

if (!container) throw new Error('Failed to mount the application, check the container!');

const root = createRoot(container);

root.render(
   <StrictMode>
      <ErrorBoundary>
         <LanguageProvider>
            <MediaQueryProvider>
               <BrowserRouter>
                  <App />
               </BrowserRouter>
            </MediaQueryProvider>
         </LanguageProvider>
      </ErrorBoundary>
   </StrictMode>,
);
