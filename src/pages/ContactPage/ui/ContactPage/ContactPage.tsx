import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

import { Page } from '@/components/Page/Page';
import { classNames } from '@/helpers/classNames/classNames';

import cls from './ContactPage.module.scss';
interface AboutPageProps {
   className?: string;
}

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
               color: '#131314',
            },
         ],
      },
      {
         featureType: 'water',
         stylers: [
            {
               color: '#131313',
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
const markers = [
   {
      id: 1,
      position: {
         lat: 50.4501,
         lng: 30.5234,
      },
   },
   { id: 2, position: { lat: 50.4547, lng: 30.5238 } },
   { id: 3, position: { lat: 50.4454, lng: 30.5186 } },
   // Добавьте больше маркеров по вашему усмотрению
   // AIzaSyC_daRW6ywQVYKdYMBU5J9Tt8KW8-UK4zE
];
const ContactPage = (props: AboutPageProps) => {
   const { className } = props;

   const { isLoaded } = useJsApiLoader({
      googleMapsApiKey: 'AIzaSyC_daRW6ywQVYKdYMBU5J9Tt8KW8-UK4zE',
   });

   if (!isLoaded) {
      return (
         <Page className={classNames(cls.ContactPage, {}, [className])}>
            <div className={cls.header}>
               <div className={cls.map} style={{ backgroundColor: '#000' }}></div>s
               <div className={cls.title}>
                  <i>L</i>
                  <i>E</i>
                  <i className={cls.apostrophe}>T</i>
                  <i>S</i>
                  <i>W</i>
                  <i>O</i>
                  <i>R</i>
                  <i className={cls.mark}>K</i>
                  <i>T</i>
                  <i>O</i>
                  <i>G</i>
                  <i>E</i>
                  <i>T</i>
                  <i>H</i>
                  <i>E</i>
                  <i>R</i>
               </div>
            </div>

            <div className={cls.wrapper}>
               <h1>CONTACT</h1>

               <div style={{ height: '100vh' }}></div>
            </div>
         </Page>
      );
   }

   return (
      <Page className={classNames(cls.ContactPage, {}, [className])}>
         <div className={cls.header}>
            <GoogleMap mapContainerClassName={cls.map} center={center} zoom={5} options={options}>
               {markers.map((marker) => (
                  <Marker key={marker.id} position={marker.position} />
               ))}
            </GoogleMap>

            <div className={cls.title}>
               <i>L</i>
               <i>E</i>
               <i className={cls.apostrophe}>T</i>
               <i>S</i>
               <i>W</i>
               <i>O</i>
               <i>R</i>
               <i className={cls.mark}>K</i>
               <i>T</i>
               <i>O</i>
               <i>G</i>
               <i>E</i>
               <i>T</i>
               <i>H</i>
               <i>E</i>
               <i>R</i>
            </div>
         </div>

         <div className={cls.wrapper}>
            <h1>CONTACT</h1>

            <div style={{ height: '100vh' }}></div>
         </div>
      </Page>
   );
};

ContactPage.displayName = 'ContactPage';
export default ContactPage;
