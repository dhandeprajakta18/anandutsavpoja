// app/gallery/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";

import styles from "./Gallery.module.css";
import { galleryByYear } from "./galleryData";

const years = [2026, 2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018];

export default function GalleryPage() {
  const [selectedYear, setSelectedYear] = useState(2026);

  const images = galleryByYear[selectedYear] ?? [];

  return (
    <main>
      {/* HERO - Fixed with proper wrapper */}
      <section className={styles.hero}>
        <div className={styles.heroPattern}>✦</div>
        <div className={styles.heroContent}>
          

          <h1>
            Our <br />
            Gallery
          </h1>

          <div className={styles.titleDivider}>
            <span />
            <i>◆</i>
            <span />
          </div>

          <p className={styles.bengaliTitle}>
            আনন্দ • উৎসব • স্মৃতি • ২০১৮ — ২০২৬
          </p>

          <p className={styles.heroDescription}>
            Explore cherished moments from every Ananda Utsav celebration.
            From cultural performances and devotional gatherings to joyful
            community memories, each year tells a unique story. Browse the
            gallery below and relive the spirit of Ananda Utsav through the
            years.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className={styles.intro}>
        <div className={styles.container}>
          

          <h2>Celebrating Every Year Together</h2>

          <div className={styles.divider}>
            <span />
            <i>◆</i>
            <span />
          </div>

          <p>
            Select a year below to explore memories from that
            year&apos;s Ananda Utsav celebration.
          </p>
        </div>
      </section>

      {/* YEAR BAR */}
      <section className={styles.yearSection}>
        <div className={styles.yearBar}>
          {years.map((year) => (
            <button
              key={year}
              type="button"
              onClick={() => setSelectedYear(year)}
              aria-pressed={selectedYear === year}
              className={`${styles.yearButton} ${
                selectedYear === year ? styles.activeYear : ""
              }`}
            >
              {year}
            </button>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className={styles.gallerySection}>
        <div className={styles.galleryGrid}>
          {images.length > 0 ? (
            images.map((image, index) => (
              <article key={image} className={styles.card}>
                <div className={styles.imageWrap}>
                  <Image
                    src={image}
                    alt={`Ananda Utsav ${selectedYear} memory ${index + 1}`}
                    fill
                    className={styles.image}
                    sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 25vw"
                  />
                </div>
              </article>
            ))
          ) : (
            <div className={styles.noImages}>
              <p>No images available for {selectedYear}</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}