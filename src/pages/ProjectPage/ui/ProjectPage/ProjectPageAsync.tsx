import { lazy } from 'react';

export const ProjectPageAsync = lazy(async () => await import('./ProjectPage'));
