import { Page } from '@/components/Page/Page';
import { classNames } from '@/helpers/classNames/classNames';

import cls from './ForbiddenPage.module.scss';

interface ForbiddenPageProps {
   className?: string;
}

const ForbiddenPage = (props: ForbiddenPageProps) => {
   const { className } = props;
   return <Page className={classNames(cls.ForbiddenPage, {}, [className])}>ForbiddenPage</Page>;
};

ForbiddenPage.displayName = 'ForbiddenPage';
export default ForbiddenPage;
