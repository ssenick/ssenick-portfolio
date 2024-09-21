export type parallaxImages = [...parallaxImagesSlider, ...parallaxImagesSlider];

export type parallaxImagesSlider = [
   projectsImageSizes,
   projectsImageSizes,
   projectsImageSizes,
   projectsImageSizes,
];

export interface projectsImageSizes {
   small: string;
   big: string;
}

export interface projectDevicesImages {
   laptop: projectsImageSizes;
   tablet: projectsImageSizes;
   mobile: projectsImageSizes[];
}
interface projectImages {
   preview: string;
   sliders: parallaxImages;
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
