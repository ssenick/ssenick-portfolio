import { Languages } from '@/app/poviders/LanguageProvider/model/types';
import IconEN from '@/assets/flag_en.svg?react';
import IconRU from '@/assets/flag_ru.svg?react';
import IconSK from '@/assets/flag_sk.svg?react';
import IconUA from '@/assets/flag_ua.svg?react';
import type { ListBoxItem } from '@/UI/ListBox/ListBox';

export const languages: ListBoxItem<Languages>[] = [
   { value: Languages.EN, content: { text: 'EN', icon: <IconEN /> } },
   { value: Languages.RU, content: { text: 'RU', icon: <IconRU /> } },
   { value: Languages.UA, content: { text: 'UA', icon: <IconUA /> } },
   { value: Languages.SK, content: { text: 'SK', icon: <IconSK /> } },
];
