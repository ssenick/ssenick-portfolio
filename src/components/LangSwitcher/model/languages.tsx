import IconEN from '@/assets/icons/flag_en.svg?react';
import IconRU from '@/assets/icons/flag_ru.svg?react';
import IconSK from '@/assets/icons/flag_sk.svg?react';
import IconUA from '@/assets/icons/flag_ua.svg?react';
import type { ListBoxItem } from '@/components/UI/ListBox/ListBox';
import { Languages } from '@/poviders/LanguageProvider/model/types';

export const languages: ListBoxItem<Languages>[] = [
   { value: Languages.EN, content: { text: 'EN', icon: <IconEN /> } },
   { value: Languages.RU, content: { text: 'RU', icon: <IconRU /> } },
   { value: Languages.UA, content: { text: 'UA', icon: <IconUA /> } },
   { value: Languages.SK, content: { text: 'SK', icon: <IconSK /> } },
];
