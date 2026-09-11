// app/gallery/page.tsx

import fs from "fs";
import path from "path";

import styles from "./Gallery.module.css";
import GalleryGrid from "./GalleryGrid";

/* =====================================
   TYPES
===================================== */

export type GalleryImage = string;

export type GalleryCategory = {
  id: "durga-puja" | "members";
  label: string;
  images: GalleryImage[];
};

/* =====================================
   ALWAYS READ CURRENT FOLDER
===================================== */

export const dynamic = "force-dynamic";

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
   NORMAL GALLERY IMAGES
===================================== */

function getGalleryImages(
  folderName: string
): GalleryImage[] {
  const directory = path.join(
    process.cwd(),
    "public",
    folderName
  );

  if (!fs.existsSync(directory)) {
    return [];
  }

  const files = fs
    .readdirSync(directory)
    .filter((fileName) => {
      const extension = path
        .extname(fileName)
        .toLowerCase();

      return allowedExtensions.includes(
        extension
      );
    })
    .sort((a, b) =>
      a.localeCompare(b, undefined, {
        numeric: true,
        sensitivity: "base",
      })
    );

  /*
   * Remove duplicate file names
   */
  const uniqueFiles = [
    ...new Set(files),
  ];

  return uniqueFiles.map(
    (fileName) =>
      `/${folderName}/${fileName}`
  );
}

/* =====================================
   MEMBERS IMAGES
===================================== */

function getMemberImages(): GalleryImage[] {
  const folderName = "member";

  const directory = path.join(
    process.cwd(),
    "public",
    folderName
  );

  if (!fs.existsSync(directory)) {
    return [];
  }

  /*
   * We ONLY accept member images
   * following this naming format:
   *
   * row1.1.jpeg
   * row1.2.jpeg
   * row1.3.jpeg
   * row1.4.jpeg
   *
   * row2.1.jpeg
   * row2.2.jpeg
   * ...
   */

  const rowImagePattern =
    /^row(\d+)\.(\d+)\.(jpg|jpeg|png|webp|avif)$/i;

  const files = fs
    .readdirSync(directory)

    /*
     * Only allow rowX.X images.
     *
     * This prevents old WhatsApp images
     * or previous files in /member
     * from showing again.
     */
    .filter((fileName) =>
      rowImagePattern.test(fileName)
    )

    /*
     * Sort by:
     *
     * row1.1
     * row1.2
     * row1.3
     * row1.4
     *
     * row2.1
     * row2.2
     * row2.3
     * row2.4
     */
    .sort((a, b) => {
      const aMatch =
        a.match(rowImagePattern);

      const bMatch =
        b.match(rowImagePattern);

      if (!aMatch || !bMatch) {
        return 0;
      }

      const aRow = Number(aMatch[1]);
      const aColumn = Number(aMatch[2]);

      const bRow = Number(bMatch[1]);
      const bColumn = Number(bMatch[2]);

      /*
       * First sort by row.
       */
      if (aRow !== bRow) {
        return aRow - bRow;
      }

      /*
       * Then sort by position
       * inside that row.
       */
      return aColumn - bColumn;
    });

  /*
   * Extra duplicate protection
   */
  const uniqueFiles = [
    ...new Set(files),
  ];

  return uniqueFiles.map(
    (fileName) =>
      `/member/${fileName}`
  );
}

/* =====================================
   PAGE
===================================== */

export default function GalleryPage() {
  /*
   * DURGA PUJA
   *
   * Reads every supported image
   * inside public/gallery
   */
  const galleryImages =
    getGalleryImages("gallery");

  /*
   * MEMBERS
   *
   * Only reads files named:
   *
   * row1.1.jpeg
   * row1.2.jpeg
   * row2.1.jpeg
   * etc.
   */
  const memberImages =
    getMemberImages();

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
            A collection of moments filled
            with devotion, colour, culture,
            laughter and togetherness.
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
            categories={
              galleryCategories
            }
          />
        </div>
      </section>
    </main>
  );
}