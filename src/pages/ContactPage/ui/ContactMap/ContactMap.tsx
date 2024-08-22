import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { memo } from 'react';

import { classNames } from '@/helpers/classNames/classNames';

import cls from './ContactMap.module.scss';

interface ContactMapProps {
   className?: string;
}

const colorMain = getComputedStyle(document.documentElement).getPropertyValue('--color-map') ?? '#131314';
const center = {
   lat: 50.4501,
   lng: 30.5234,
};

const options = {
   disableDefaultUI: true, // Отключить все стандартные элементы управления
   draggable: true, // Оставить возможность перетаскивания
   zoomControl: false, // Отключить управление масштабированием
   scrollwheel: false, // Отключить прокрутку мышью
   disableDoubleClickZoom: true, // Отключить масштабирование двойным щелчком
   mapTypeControl: false, // Отключить выбор типа карты (спутник, гибрид, и т.д.)
   streetViewControl: false, // Отключить просмотр улиц
   fullscreenControl: false, // Отключить полноэкранный режим
   keyboardShortcuts: false,
   styles: [
      {
         stylers: [
            {
               visibility: 'simplified',
            },
         ],
      },
      {
         stylers: [
            {
               color: colorMain,
            },
         ],
      },
      {
         featureType: 'water',
         stylers: [
            {
               color: colorMain,
            },
            {
               lightness: 7,
            },
         ],
      },
      {
         elementType: 'labels.text.fill',
         stylers: [
            {
               visibility: 'on',
            },
            {
               lightness: 25,
            },
         ],
      },
   ],
};

const ContactMap = memo((props: ContactMapProps) => {
   const { className } = props;

   const { isLoaded } = useJsApiLoader({
      googleMapsApiKey: import.meta.env.VITE_MAP_API_KEY,
   });

   if (!isLoaded)
      return (
         <div
            className={classNames(cls.ContactMap, {}, [className])}
            style={{ backgroundColor: colorMain }}
         />
      );

   return (
      <GoogleMap
         mapContainerClassName={classNames(cls.ContactMap, {}, [className])}
         center={center}
         zoom={5}
         options={options}
      ></GoogleMap>
   );
});

ContactMap.displayName = 'ContactMap';
export { ContactMap };
