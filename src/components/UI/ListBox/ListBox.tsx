import { Listbox as HListbox } from '@headlessui/react';
import { AnimatePresence, motion } from 'framer-motion';
import type { ReactNode } from 'react';

import { moveToTop, opacityWithDelay } from '@/const/animate';
import { classNames } from '@/helpers/classNames/classNames';
import { FramerMagnetic } from '@/helpers/components/FramerMagnetic/FramerMagnetic';
import { animatePattern } from '@/helpers/func/animatePattern';

import cls from './ListBox.module.scss';

interface ListBoxItemContent {
   text: string;
   icon: ReactNode;
}

export interface ListBoxItem<T extends string> {
   value: T;
   content: ListBoxItemContent;
   disabled?: boolean;
}

interface ListBoxProps<T extends string> {
   className?: string;
   items: ListBoxItem<T>[];
   value: T;
   onChange: (value: T) => void;
}

const ListBox = <T extends string>(props: ListBoxProps<T>) => {
   const { className, items, value, onChange } = props;

   const foundItem = items.find((item) => item.value === value);
   const foundItemContent = foundItem ? foundItem.content : { text: value, icon: null };

   return (
      <HListbox
         className={classNames(cls.ListBox, {}, [className])}
         value={value}
         onChange={onChange}
         as="div"
      >
         {({ open }) => (
            <>
               <FramerMagnetic>
                  <HListbox.Button className={cls.button}>
                     <span className={cls.dot}></span>
                     {foundItemContent.text}
                     {foundItemContent.icon}
                  </HListbox.Button>
               </FramerMagnetic>
               <AnimatePresence>
                  {open && (
                     <HListbox.Options static>
                        <motion.ul {...animatePattern(moveToTop)} className={cls.list}>
                           {items?.map((item, i) => (
                              <HListbox.Option key={item.value} value={item.value} as="li">
                                 {({ active, selected }) => (
                                    <motion.div
                                       custom={i}
                                       {...animatePattern(opacityWithDelay)}
                                       className={classNames(
                                          cls.item,
                                          {
                                             [cls.active]: active,
                                             [cls.selected]: selected,
                                             [cls.disabled]: item.disabled,
                                          },
                                          [],
                                       )}
                                    >
                                       {item.content.text}
                                       {item.content.icon}
                                    </motion.div>
                                 )}
                              </HListbox.Option>
                           ))}
                        </motion.ul>
                     </HListbox.Options>
                  )}
               </AnimatePresence>
            </>
         )}
      </HListbox>
   );
};
ListBox.displayName = 'ListBox';
export { ListBox };
