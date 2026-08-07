export type GalleryByYear = Record<number, string[]>;

// Add new image paths inside the matching year array.
// Example: "/images/gallery/2024/durga-puja-01.jpg"
export const galleryByYear: GalleryByYear = {
  2026: [
    "/images/durga-puja.png",
    "/images/sindoor-utsav.png",
    "/images/celebration.png",
  ],

  2025: [
    "/images/about-ananda-utsav.png",
  ],

  2024: [],
  2023: [],
  2022: [],
  2021: [],
  2020: [],
  2019: [],
  2018: [],
};
