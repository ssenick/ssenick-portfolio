export interface projectDevicesImages {
   laptop: string;
   mobile: string[];
}

interface projectImages {
   preview: string;
   devices: projectDevicesImages;
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
