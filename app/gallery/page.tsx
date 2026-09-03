//app/gallery/page.tsx
import styles from "./Gallery.module.css";
import GalleryGrid from "./GalleryGrid";
import { galleryCategories, galleryImages } from "./galleryData";

export default function GalleryPage() {
  return (
    <main className={styles.page}>
      <section className={styles.intro}>
        <div className={styles.introPattern} aria-hidden="true">
          ✦
        </div>

        <div className={styles.container}>
          <h1>Our Gallery</h1>

          <div className={styles.titleDivider} aria-hidden="true">
            <span />
            <i>◆</i>
            <span />
          </div>

          <p className={styles.bengaliTitle}>আনন্দ • উৎসব • স্মৃতি</p>

          <p className={styles.description}>
            A collection of moments filled with devotion, colour, culture,
            laughter and togetherness.
          </p>
        </div>
      </section>

      <section className={styles.gallerySection} aria-label="Gallery">
        <div className={styles.galleryContainer}>
          <div className={styles.galleryHeading}>
            {/* <p className={styles.galleryEyebrow}>Ananda Utsav memories</p>
            <h2 id="gallery-heading">Every frame tells a story</h2> */}
            {/* <p>
              {galleryImages.length} photographs celebrating the spirit of
              Ananda Utsav.
            </p> */}
          </div>

          <GalleryGrid images={galleryImages} categories={galleryCategories} />
        </div>
      </section>
    </main>
  );
}
