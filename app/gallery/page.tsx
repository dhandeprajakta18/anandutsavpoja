import fs from "fs";
import path from "path";

import styles from "./Gallery.module.css";
import GalleryGrid from "./GalleryGrid";

export type GalleryImage = string;

export type GalleryCategory = {
  id: "durga-puja" | "members";
  label: string;
  images: GalleryImage[];
};

/* =====================================
   ALLOWED IMAGE TYPES
===================================== */

const allowedExtensions = [
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".avif",
];

/* =====================================
   READ IMAGES FROM PUBLIC FOLDER
===================================== */

function getImagesFromFolder(
  folderName: string
): GalleryImage[] {
  const directory = path.join(
    process.cwd(),
    "public",
    folderName
  );

  /*
   * If folder does not exist,
   * return empty array instead of
   * breaking the page.
   */
  if (!fs.existsSync(directory)) {
    return [];
  }

  return fs
    .readdirSync(directory)
    .filter((fileName) => {
      const extension = path
        .extname(fileName)
        .toLowerCase();

      return allowedExtensions.includes(
        extension
      );
    })

    /*
     * Keep files ordered naturally.
     *
     * Example:
     * image 1
     * image 2
     * image 10
     *
     * instead of:
     * image 1
     * image 10
     * image 2
     */
    .sort((a, b) =>
      a.localeCompare(b, undefined, {
        numeric: true,
        sensitivity: "base",
      })
    )

    /*
     * Convert:
     *
     * public/gallery/photo.jpeg
     *
     * into:
     *
     * /gallery/photo.jpeg
     */
    .map(
      (fileName) =>
        `/${folderName}/${fileName}`
    );
}

/* =====================================
   PAGE
===================================== */

export default function GalleryPage() {
  /*
   * Automatically read all images
   * from public/gallery
   */
  const galleryImages =
    getImagesFromFolder("gallery");

  /*
   * Automatically read all images
   * from public/member
   */
  const memberImages =
    getImagesFromFolder("member");

  const galleryCategories: GalleryCategory[] =
    [
      {
        id: "durga-puja",
        label: "Durga Puja",
        images: galleryImages,
      },

      {
        id: "members",
        label: "Members",
        images: memberImages,
      },
    ];

  return (
    <main className={styles.page}>
      {/* =====================================
          INTRO
      ===================================== */}

      <section className={styles.intro}>
        <div
          className={styles.introPattern}
          aria-hidden="true"
        >
          ✦
        </div>

        <div className={styles.container}>
          <h1>Our Gallery</h1>

          <div
            className={styles.titleDivider}
            aria-hidden="true"
          >
            <span />

            <i>◆</i>

            <span />
          </div>

          <p className={styles.bengaliTitle}>
            আনন্দ • উৎসব • স্মৃতি
          </p>

          <p className={styles.description}>
            A collection of moments filled with
            devotion, colour, culture, laughter
            and togetherness.
          </p>
        </div>
      </section>

      {/* =====================================
          GALLERY
      ===================================== */}

      <section
        className={styles.gallerySection}
        aria-label="Gallery"
      >
        <div
          className={styles.galleryContainer}
        >
          <GalleryGrid
            categories={galleryCategories}
          />
        </div>
      </section>
    </main>
  );
}