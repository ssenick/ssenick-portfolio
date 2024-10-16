import { motion } from 'framer-motion';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

// import DownloadIcon from '@/assets/icons/download.svg?react';
import { BlockWithTitle } from '@/components/BlockWithTitle/BlockWithTitle';
// import { AppButton } from '@/components/UI/AppButton/AppButton.tsx';
import { pathAnimation } from '@/const/animate';
import { classNames } from '@/helpers/classNames/classNames';
import { animatePattern } from '@/helpers/func/animatePattern';

import cls from './Biography.module.scss';

interface BiographyProps {
   className?: string;
}
/* eslint-disable max-len */
const Biography = memo((props: BiographyProps) => {
   const { className } = props;
   const { t } = useTranslation('about');
   return (
      <BlockWithTitle className={classNames(cls.Biography, {}, [className])} title={t('titleBiography')}>
         <div className={cls.description}>
            <p>{t('firstDescriptionBiography')}</p>
            <p>{t('secondDescriptionBiography')}</p>
            <p>{t('thirdDescriptionBiography')}</p>
            <p className={cls.phrase}>{t('phraseBiography')}</p>
         </div>

         <div className={cls.signature}>
            {/*<AppButton variant={'linkOpposite'} className={cls.resume}>*/}
            {/*   <a href={Resume} download>*/}
            {/*      <span className={cls.resumeBtn}>*/}
            {/*         <span>{t('Download RP')}</span>*/}
            {/*         <DownloadIcon />*/}
            {/*      </span>*/}
            {/*   </a>*/}
            {/*</AppButton>*/}
            <svg className={cls.svg} viewBox="0 0 384 264" fill="none" xmlns="http://www.w3.org/2000/svg">
               <motion.path
                  d="M110.205 2C110.061 10.7853 109.092 19.6767 107.368 28.252C102.763 51.1457 96.5859 73.8011 90.0278 96.1111C81.2493 125.975 72.6301 155.874 63.37 185.574C56.5279 207.518 49.4172 229.401 42.2469 251.185C41.1653 254.471 39.8436 257.729 38.3586 260.825C36.996 263.665 37.0283 260.693 37.2026 258.881C38.6249 244.099 49.1687 229.005 61.6536 223.523C73.2917 218.413 85.6416 215.623 97.5243 211.33C108.579 207.337 118.71 200.55 127.93 192.889C142.71 180.609 150.337 164.823 149.789 144.195C149.147 120.019 129.956 100.577 111.186 90.6244C90.2324 79.5139 65.4681 81.8585 43.543 87.7287C28.7366 91.693 14.3135 97.1233 7.53222 113.104C0.890443 128.757 0.790384 148.777 4.27443 165.304C7.09526 178.684 15.0823 192.957 24.7319 201.805C33.314 209.674 44.3625 213.314 55.138 215.865C72.2037 219.904 88.8654 222.443 106.352 222.075C123.442 221.716 146.478 222.115 156.094 203.939C160.087 196.391 161.497 180.825 150.665 179.325C145.261 178.577 139.492 179.369 136.548 184.964C133.115 191.485 133.117 197.969 136.793 204.282C140.973 211.46 147.308 215.753 154.903 217.579C168.679 220.891 187.199 221.403 200.092 214.226C205.931 210.976 207.543 205.07 207.869 198.338C208.072 194.128 208.678 186.538 205.277 183.516C199.844 178.69 185.473 187.228 188.532 195.175C196.012 214.611 224.126 213.681 239.291 208.968C245.946 206.9 251.644 204.119 253.828 196.623C254.476 194.399 258.419 182.923 254.038 183.059C250.373 183.173 243.922 185.513 242.618 189.765C241.033 194.94 245.017 200.77 248.994 202.948C257.061 207.367 267.522 207.769 276.212 205.806C280.619 204.81 288.429 203.361 290.855 198.49C292.883 194.418 290.737 188.313 288.998 184.583C284.329 174.57 278.26 185.858 278.804 192.47C280.848 217.293 311.068 206.362 322.767 198.223C338.83 187.049 341.031 164.554 346.728 146.443C353.885 123.689 364.347 102.501 370.828 79.4226C375.105 64.1951 381.244 47.6796 381.933 31.5669C382.04 29.0517 382.02 30.6722 381.863 31.7574C381.301 35.6268 380.018 39.437 379.13 43.226C375.69 57.9156 372.82 72.6224 368.656 87.1191C360.049 117.087 350.809 146.88 342.664 177.001C338.572 192.136 334.07 207.148 330.053 222.304C328.268 229.04 327.741 235.459 327.741 242.421C327.741 244.936 327.741 247.451 327.741 249.966C327.741 251.746 327.317 255.176 327.846 251.337C331.548 224.5 354.486 207.669 373.14 193.346"
                  stroke="black"
                  strokeWidth="3"
                  strokeLinecap="round"
                  {...animatePattern(pathAnimation)}
               />
            </svg>
         </div>
      </BlockWithTitle>
   );
});

Biography.displayName = 'Biography';
export { Biography };
