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
      transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1], delay: 0.003 * i },
   }),
};

export const opacity = {
   initial: { opacity: 0 },
   animate: { opacity: 1 },
   exit: { opacity: 0, transition: { delay: 0.5 } },
};

export const scale = {
   initial: { scale: 0, transition: { duration: 0.5, delay: 0, ease: [0.76, 0, 0.24, 1] } },
   animate: { scale: 1, transition: { duration: 0.5, delay: 0, ease: [0.76, 0, 0.24, 1] } },
   exit: { scale: 0, transition: { duration: 0.5, delay: 0, ease: [0.76, 0, 0.24, 1] } },
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
export const pageEaseOut = {
   initial: { top: '50vh', opacity: 0 },
   animate: { top: 0, opacity: 1, transition: { duration: 1, ease: 'easeOut' } },
};
export const pageEaseOut100 = {
   initial: { top: '100vh', opacity: 0 },
   animate: { top: 0, opacity: 1, transition: { duration: 1, ease: 'easeOut' } },
};

export const scaleAnimation = {
   initial: { scale: 0, x: '-50%', y: '-50%' },

   enter: { scale: 1, x: '-50%', y: '-50%', transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } },

   closed: { scale: 0, x: '-50%', y: '-50%', transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] } },
};
