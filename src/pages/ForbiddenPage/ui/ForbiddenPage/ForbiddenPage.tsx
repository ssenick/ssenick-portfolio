import { classNames } from '@/helpers/classNames/classNames';

import cls from './ForbiddenPage.module.scss';

interface ForbiddenPageProps {
   className?: string;
}

const ForbiddenPage = (props: ForbiddenPageProps) => {
   const { className } = props;
   return <div className={classNames(cls.ForbiddenPage, {}, [className])}>ForbiddenPage</div>;
};

ForbiddenPage.displayName = 'ForbiddenPage';
export default ForbiddenPage;
