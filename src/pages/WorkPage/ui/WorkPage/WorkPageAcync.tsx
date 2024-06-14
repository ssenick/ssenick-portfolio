import { lazy } from 'react';

export const WorkPageAsync = lazy(async () => await import('./WorkPage'));
