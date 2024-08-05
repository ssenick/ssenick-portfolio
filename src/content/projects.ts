import AdminPreview from '@/assets/projects/admin/admin-small.jpg';
import BlogPreview from '@/assets/projects/blog/blog-small.jpg';
import GreenShopPreview from '@/assets/projects/greenshop/greenshop-small.jpg';
import type { projectType } from '@/types/projectsItems';

export const projects: projectType[] = [
   {
      id: 1,
      name: 'Blog',
      year: '2024',
      src: 'https://dulcet-pudding-009166.netlify.app',
      path: 'blog',
      images: { preview: BlogPreview },
   },
   {
      id: 2,
      name: 'Admin-panel',
      year: '2024',
      src: 'https://web-react-admin.ssenick.fun',
      path: 'admin-panel',
      images: { preview: AdminPreview },
   },
   {
      id: 3,
      name: 'Green-shop',
      year: '2023',
      src: 'https://greenshop.ssenick.fun/',
      path: 'green-shop',
      images: { preview: GreenShopPreview },
   },
];
