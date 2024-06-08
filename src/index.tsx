import './app/styles/index.scss';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from '@/app/App.tsx';
import { MediaQueryProvider } from '@/app/povaiders/MediaQueryProvaider';

const container = document.getElementById('root');
if (!container) throw new Error('Failed to mount the application, check the container!');

const root = createRoot(container);

root.render(
   <StrictMode>
      <BrowserRouter>
         <MediaQueryProvider>
            <App />
         </MediaQueryProvider>
      </BrowserRouter>
   </StrictMode>,
);
