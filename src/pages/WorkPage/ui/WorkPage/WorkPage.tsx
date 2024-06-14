import { classNames } from '@/helpers/classNames/classNames';

import cls from './WorkPage.module.scss';

interface WorkPageProps {
   className?: string;
}

const WorkPage = (props: WorkPageProps) => {
   const { className } = props;
   return (
      <div className={classNames(cls.WorkPage, {}, [className])}>
         <h1>WORK</h1>
      </div>
   );
};

WorkPage.displayName = 'WorkPage';
export default WorkPage;
