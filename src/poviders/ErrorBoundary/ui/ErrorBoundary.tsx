import type { ErrorInfo, PropsWithChildren } from 'react';
import { Suspense } from 'react';
import { Component } from 'react';

import { ErrorPage } from '@/pages/ErrorPage';

interface ErrorBoundaryState {
   hasError: boolean;
}

export class ErrorBoundary extends Component<PropsWithChildren, ErrorBoundaryState> {
   constructor(props: PropsWithChildren) {
      super(props);
      this.state = { hasError: false };
   }
   static getDerivedStateFromError(error: Error): ErrorBoundaryState {
      console.log(error);
      return { hasError: true };
   }

   componentDidCatch(error: Error, errorInfo: ErrorInfo) {
      console.log(error, errorInfo);
   }

   render() {
      const { hasError } = this.state;
      const children = this.props.children;
      if (hasError) {
         return (
            <Suspense fallback={<div>Loading...</div>}>
               <ErrorPage />
            </Suspense>
         );
      }
      return children;
   }
}
