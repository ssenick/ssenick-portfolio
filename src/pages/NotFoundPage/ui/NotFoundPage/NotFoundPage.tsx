import { useTranslation } from 'react-i18next';

import { Page } from '@/components/Page/Page.tsx';
import { ShimmeringText } from '@/components/ShimmeringText/ShimmeringText.tsx';
import { classNames } from '@/helpers/classNames/classNames';

import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
   className?: string;
}

const NotFoundPage = (props: NotFoundPageProps) => {
   const { className } = props;
   const { t } = useTranslation('notfound');

   return (
      <Page className={classNames(cls.NotFoundPage, {}, [className])}>
         <div className={cls.wrapper}>
            <ShimmeringText title={t('notfound')} subtitle={'404'} />
         </div>
      </Page>
   );
};

NotFoundPage.displayName = 'NotFoundPage';
export default NotFoundPage;
