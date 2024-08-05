import { classNames } from '@/helpers/classNames/classNames';

import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
   className?: string;
}

const NotFoundPage = (props: NotFoundPageProps) => {
   const { className } = props;
   return (
      <div className={classNames(cls.NotFoundPage, {}, [className])}>
         <h1>1111111</h1>
      </div>
   );
};

NotFoundPage.displayName = 'NotFoundPage';
export { NotFoundPage };
