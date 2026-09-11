import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRightLong,
  FaImages,
} from "react-icons/fa6";

import styles from "./Gallery.module.css";

const galleryImages = [
  {
    src: "/real/durgapuja.jpeg",
    alt: "Durga Puja at Ananda Utsav",
    title: "Durga Puja",
    category: "Devotion",
  },
  {
    src: "/real/bhog2.jpeg",
    alt: "Bhog at Ananda Utsav",
    title: "Bhog",
    category: "Tradition",
  },
  {
    src: "/real/cultural2.jpeg",
    alt: "Cultural evening at Ananda Utsav",
    title: "Cultural Evening",
    category: "Celebration",
  },
  {
    src: "/real/sandhipuja2.jpeg",
    alt: "Sandhi Puja at Ananda Utsav",
    title: "Sandhi Puja",
    category: "Devotion",
  },
  {
    src: "/real/philanthropy1.jpeg",
    alt: "Philanthropy at Ananda Utsav",
    title: "Philanthropy",
    category: "Community Outreach",
  },
];

export default function Gallery() {
  return (
    <section className={styles.gallery} id="gallery">
      <div className={styles.leftDecoration} aria-hidden="true">
        ✦
      </div>

      <div className={styles.rightDecoration} aria-hidden="true">
        ✦
      </div>

      <div className={styles.container}>
        {/* HEADING */}

        <div className={styles.heading}>
         

          <div className={styles.titleRow}>
            <span className={styles.line} />
            <span className={styles.ornament}>◆</span>

            <h2>Gallery</h2>

            <span className={styles.ornament}>◆</span>
            <span className={styles.line} />
          </div>

          <p className={styles.bengali}>
            স্মৃতির ঝলক
          </p>

          <p className={styles.description}>
            A glimpse into the devotion, colours, culture and
            togetherness that make every Ananda Utsav memorable.
          </p>
        </div>

        {/* GALLERY GRID */}

        <div className={styles.galleryGrid}>
          {galleryImages.map((image, index) => (
            <div
              className={`${styles.imageCard} ${
                index === 0 ? styles.featured : ""
              }`}
              key={image.src}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes={
                  index === 0
                    ? "(max-width: 700px) 90vw, 50vw"
                    : "(max-width: 700px) 45vw, 25vw"
                }
                className={styles.image}
              />

              <div className={styles.overlay} />

              <div className={styles.imageContent}>
                <span>{image.category}</span>

                <h3>{image.title}</h3>
              </div>

              <div className={styles.imageIcon}>
                <FaImages />
              </div>
            </div>
          ))}
        </div>

        {/* VIEW ALL */}

        <div className={styles.viewAll}>
          <p>
            Every celebration leaves behind a story worth remembering.
          </p>

          <Link href="/gallery" className={styles.galleryButton}>
            <span>View Full Gallery</span>
            <FaArrowRightLong />
          </Link>
        </div>
      </div>
    </section>
  );
}