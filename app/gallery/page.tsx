// app/gallery/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";

import styles from "./Gallery.module.css";
import { galleryByYear } from "./galleryData";

const years = [2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018];

export default function GalleryPage() {
  const [selectedYear, setSelectedYear] = useState(2025);

  const images = galleryByYear[selectedYear] ?? [];

  return (
    <main className={styles.page}>
      {/* INTRO */}
      <section className={styles.intro}>
        <div className={styles.introPattern} aria-hidden="true">
          ✦
        </div>

        <div className={styles.container}>
          {/* <span className={styles.eyebrow}>
            ANANDA UTSAV MEMORIES
          </span> */}

          <h1>Our Gallery</h1>

          <div className={styles.titleDivider}>
            <span />
            <i>◆</i>
            <span />
          </div>

          <p className={styles.bengaliTitle}>
            আনন্দ • উৎসব • স্মৃতি
          </p>

          <p className={styles.description}>
            A collection of moments from our Pujo celebrations through the
            years — memories of devotion, culture, laughter and togetherness.
          </p>
        </div>
      </section>

      {/* YEAR SELECTOR */}
      <section className={styles.yearSection}>
        <div className={styles.yearContainer}>
          <div className={styles.yearHeading}>
            <span>EXPLORE BY YEAR</span>
          </div>

          <div className={styles.yearBar}>
            {years.map((year) => (
              <button
                key={year}
                type="button"
                onClick={() => setSelectedYear(year)}
                aria-pressed={selectedYear === year}
                className={`${styles.yearButton} ${
                  selectedYear === year
                    ? styles.activeYear
                    : ""
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className={styles.gallerySection}>
        <div className={styles.galleryContainer}>
          <div className={styles.galleryHeading}>
            <h2>{selectedYear}</h2>

            <p>
              Memories from our {selectedYear} Ananda Utsav celebration.
            </p>
          </div>

          <div className={styles.galleryGrid}>
            {images.length > 0 ? (
              images.map((image, index) => (
                <article
                  key={image}
                  className={styles.card}
                >
                  <div className={styles.imageWrap}>
                    <Image
                      src={image}
                      alt={`Ananda Utsav ${selectedYear} memory ${
                        index + 1
                      }`}
                      fill
                      className={styles.image}
                      sizes="
                        (max-width: 600px) 92vw,
                        (max-width: 900px) 46vw,
                        30vw
                      "
                    />
                  </div>
                </article>
              ))
            ) : (
              <div className={styles.noImages}>
                <p>
                  No images available for {selectedYear}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}