export interface projectsImageSizes {
   small: string;
   big: string;
}

export interface projectDevicesImages {
   laptop: projectsImageSizes;
   tablet: projectsImageSizes;
   mobile: projectsImageSizes[];
}
export interface projectsSlidersImages {
   first: [string, string, string, string];
   second: [string, string, string, string];
}
interface projectImages {
   preview: string;
   sliders: projectsSlidersImages;
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
