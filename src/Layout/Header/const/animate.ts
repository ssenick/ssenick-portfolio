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
export const opacity = {
   initial: { opacity: 0 },
   animate: { opacity: 1 },
   exit: { opacity: 0 },
};

export const scale = {
   open: { scale: 1, transition: { duration: 0.3 } },
   closed: { scale: 0, transition: { duration: 0.4 } },
};
