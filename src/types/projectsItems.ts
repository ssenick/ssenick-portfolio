interface projectImages {
   preview: string;
}

export interface projectType {
   id: number;
   name: string;
   year: string;
   location: string;
   role: string;
   projectPath: string;
   path: string;
   images: projectImages;
   technologies: string;
}
