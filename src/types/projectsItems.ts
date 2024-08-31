interface projectImages {
   preview: string;
}

export interface projectType {
   id: number;
   name: string;
   year: string;
   src: string;
   path: string;
   images: projectImages;
   technologies: string;
}
