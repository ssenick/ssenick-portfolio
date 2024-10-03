import type { ISourceOptions } from '@tsparticles/engine';
import { type Container } from '@tsparticles/engine';
import { loadPolygonMaskPlugin } from '@tsparticles/plugin-polygon-mask';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { useEffect, useMemo, useState } from 'react';

import arrow from '@/assets/icons/arrow.svg';

import cls from './AboutParticleImage.module.scss';
const AboutParticleImage = () => {
   const [init, setInit] = useState(false);

   useEffect(() => {
      initParticlesEngine(async (engine) => {
         await loadSlim(engine);
         await loadPolygonMaskPlugin(engine);
      }).then(() => {
         setInit(true);
      });
   }, []);

   const particlesLoaded = async (container?: Container): Promise<void> => {
      console.log(container);
   };

   const options: ISourceOptions = useMemo(
      () => ({
         background: {
            color: {
               value: 'transparent',
            },
         },
         fpsLimit: 120,
         fullScreen: {
            enable: false,
         },
         interactivity: {
            events: {
               onClick: {
                  enable: false,
                  mode: 'push',
               },
               onHover: {
                  enable: true,
                  mode: 'bubble',
                  parallax: {
                     enable: false,
                     force: 2,
                     smooth: 10,
                  },
               },
            },
            modes: {
               bubble: {
                  distance: 40,
                  duration: 2,
                  opacity: 8,
                  size: 6,
               },
               connect: {
                  distance: 80,
                  links: {
                     opacity: 0.5,
                  },
                  radius: 60,
               },
               grab: {
                  distance: 200,
                  links: {
                     opacity: 1,
                  },
               },
               push: {
                  quantity: 4,
               },
               remove: {
                  quantity: 2,
               },
               repulse: {
                  distance: 200,
                  duration: 0.4,
               },
               slow: {
                  active: false,
                  radius: 0,
                  factor: 1,
               },
            },
         },
         particles: {
            color: {
               value: '#000',
            },
            links: {
               color: '#000',
               distance: 80,
               enable: true,
               opacity: 0.5,
               width: 1,
               consent: false,
            },
            move: {
               enable: true,
               outModes: 'bounce',
               speed: 1,
            },
            number: {
               density: {
                  enable: true,
               },
               value: 200,
            },
            opacity: {
               value: 0.5,
            },
            shape: {
               type: 'circle',
            },
            size: {
               value: { min: 1, max: 5 },
            },
         },
         polygon: {
            draw: {
               enable: true,
               lineColor: '#000',
               lineWidth: 1,
            },
            enable: true,
            move: {
               radius: 10,
            },
            inline: {
               arrangement: 'equidistant',
            },
            scale: 1,
            type: 'inline',
            url: arrow,
         },
         detectRetina: true,
      }),
      [],
   );

   if (init) {
      return (
         <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={options}
            className={cls.particle}
         />
      );
   }

   return <></>;
};

AboutParticleImage.displayName = 'AboutParticleImage';
export { AboutParticleImage };
