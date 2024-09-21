import { adminPanel } from '@/content/projects/adminPanel.ts';
import { backMyMoney } from '@/content/projects/backMyMoney.ts';
import { blog } from '@/content/projects/blog.ts';
import { eurotex } from '@/content/projects/eurotex.ts';
import { familyDoctor } from '@/content/projects/familyDoctor.ts';
import { foodRate } from '@/content/projects/foodrate.ts';
import { gameSportBet } from '@/content/projects/gamesportbet.ts';
import { gart } from '@/content/projects/gart.ts';
import { greenShop } from '@/content/projects/greenShop.ts';
import { help } from '@/content/projects/help.ts';
import { honey } from '@/content/projects/honey.ts';
import { pizza } from '@/content/projects/pizza.ts';
import { portfolio } from '@/content/projects/portfolio.ts';
import { statika } from '@/content/projects/statika.ts';
import { vignette } from '@/content/projects/vignette.ts';
import { weather } from '@/content/projects/weather.ts';
import type { projectType } from '@/types/projectsItems.ts';

export const projects: projectType[] = [
   { ...blog, id: 1 },
   { ...adminPanel, id: 2 },
   { ...greenShop, id: 3 },
   { ...pizza, id: 4 },
   { ...weather, id: 5 },
   { ...portfolio, id: 6 },
   { ...gameSportBet, id: 7 },
   { ...foodRate, id: 8 },
   { ...backMyMoney, id: 9 },
   { ...eurotex, id: 10 },
   { ...statika, id: 11 },
   { ...gart, id: 12 },
   { ...help, id: 13 },
   { ...familyDoctor, id: 14 },
   { ...honey, id: 15 },
   { ...vignette, id: 15 },
];
