interface projectImages {
   preview: string;
   images: {
      laptop: string;
   };
}

export interface projectType {
   id: number;
   name: string;
   year: string;
   location: string;
   role: string;
   projectURL: string;
   gitURL?: string;
   path: string;
   images: projectImages;
   technologies: string;
}
