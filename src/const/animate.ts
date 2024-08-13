export const menuSlide = {
   initial: { x: 'calc(100% + 100px)' },
   animate: { x: '0', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
   exit: { x: 'calc(100% + 100px)', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
};

export const slide = {
   initial: { x: 80 },
   animate: (i: number) => ({
      x: 0,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.07 * i },
   }),
   exit: (i: number) => ({ x: 80, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.07 * i } }),
};

export const textMaskAnimation = {
   initial: { y: '100%' },

   animate: (i: number) => ({
      y: '0',
      transition: { duration: 0.3, ease: [0.33, 1, 0.68, 1], delay: 0.03 * i },
   }),
};

export const textAnimation = (delay: number) => ({
   initial: { y: '100%', opacity: 0 },

   animate: {
      y: '0',
      opacity: 1,
      transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1], delay: delay * 0.1 },
   },
});

export const textAnimationOpacity = (delay: number) => ({
   initial: { opacity: 0 },

   animate: {
      opacity: 1,
      transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1], delay: delay * 0.1 },
   },
});

export const textAnimationFromLeft = (delay: number) => ({
   initial: { x: '-15%', opacity: 0 },

   animate: {
      x: '0',
      opacity: 1,
      transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1], delay: delay * 0.1 },
   },
});
export const lineWidth = (delay: number) => ({
   initial: { width: 0 },

   animate: {
      width: '100%',
      transition: { duration: 1, ease: [0.33, 1, 0.68, 1], delay: delay * 0.2 },
   },
});

export const opacity = {
   initial: { opacity: 0 },
   animate: { opacity: 1 },
   exit: { opacity: 0, transition: { delay: 0.5 } },
};

export const opacityWithDelay = {
   initial: { opacity: 0 },
   animate: (i: number) => ({
      opacity: 1,
      transition: { duration: 0.3, delay: 0.1 * i },
   }),
};

export const scale = {
   initial: { scale: 0, transition: { duration: 0.5, delay: 0, ease: [0.76, 0, 0.24, 1] } },
   animate: { scale: 1, transition: { duration: 0.5, delay: 0, ease: [0.76, 0, 0.24, 1] } },
   exit: { scale: 0, transition: { duration: 0.5, delay: 0, ease: [0.76, 0, 0.24, 1] } },
};
export const scaleNoExit = {
   initial: { scale: 0, transition: { duration: 0.5, delay: 0, ease: [0.76, 0, 0.24, 1] } },
   animate: { scale: 1, transition: { duration: 0.5, delay: 0, ease: [0.76, 0, 0.24, 1] } },
};
export const text = {
   initial: {
      opacity: 1,
   },
   animate: {
      opacity: 0,
      top: 0,
      transition: { duration: 0.75, delay: 0.35, ease: [0.645, 0.045, 0.355, 1] },
      transitionEnd: { top: '50%', opacity: 0 },
   },
   exit: {
      opacity: 0,
      top: '50%',
      transition: { duration: 0.5, delay: 0.4, ease: [0.33, 1, 0.68, 1] },
   },
};
export const fade = {
   initial: {
      opacity: 0,
   },
   animate: {
      opacity: 1,
      transition: { duration: 0.3, delay: 0.1 },
   },
};
export const moveToTop = {
   initial: {
      opacity: 0,
      y: '10%',
   },
   animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
   },
   exit: { opacity: 0, y: '10%' },
};

export const pageEaseOut = {
   initial: { y: '50vh', opacity: 0 },
   animate: { y: 0, opacity: 1, transition: { duration: 1, ease: 'easeOut' } },
};

export const scaleAnimation = {
   initial: { scale: 0, x: '-50%', y: '-50%' },

   enter: { scale: 1, x: '-50%', y: '-50%', transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } },

   closed: { scale: 0, x: '-50%', y: '-50%', transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] } },
};

export const pathAnimation = {
   initial: { pathLength: 0 },
   animate: { pathLength: 1, transition: { duration: 2.2, delay: 1.2, ease: 'easeInOut' } },
};
