export interface projectsImageSizes {
   small: string;
   big: string;
}

export interface projectDevicesImages {
   laptop: projectsImageSizes;
   mobile: projectsImageSizes[];
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
