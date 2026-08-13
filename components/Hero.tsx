"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Hero.module.css";

const slides = [
  {
    image: "/real/sindorutsav.jpeg",
    bengali: "সিঁদুর উৎসব",
    title: "Sindoor Utsav",
    year: "2026",
    description:
      "A celebration of devotion, tradition and the eternal spirit of Shakti.",
    buttonText: "Discover The Celebration",
    buttonLink: "/about",
  },
  {
    image: "/real/anandutsav.jpeg",
    bengali: "শক্তির আরাধনা",
    title: "Ananda Utsav",
    year: "2026",
    description:
      "Where devotion meets celebration and generations come together.",
    buttonText: "Explore Ananda Utsav",
    buttonLink: "/about",
  },
  {
    image: "/real/celebration.jpeg",
    bengali: "ঐতিহ্য • আনন্দ • একতা",
    title: "Celebrating Together",
    year: "2026",
    description:
      "Experience the colours, culture and joyous traditions of our community.",
    buttonText: "Join The Celebration",
    buttonLink: "/about",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const previousSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className={styles.hero}>
      {/* BACKGROUND SLIDES */}
      {slides.map((slide, index) => (
        <div
          key={slide.title}
          className={`${styles.slide} ${
            index === currentSlide ? styles.activeSlide : ""
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
          }}
        />
      ))}

      {/* DARK RED OVERLAY */}
      <div className={styles.overlay} />

      {/* DECORATIVE GLOW */}
      <div className={styles.redGlow} />

      {/* CONTENT */}
      <div className={styles.container}>
        <div
          key={currentSlide}
          className={styles.content}
        >
          <div className={styles.bengali}>
            {slides[currentSlide].bengali}
          </div>

          <div className={styles.decorativeLine}>
            <span />
            <div className={styles.diamond}>◆</div>
            <span />
          </div>

          <h1>
            {slides[currentSlide].title}
          </h1>

          {/* <div className={styles.year}>
            {slides[currentSlide].year}
          </div> */}

          <p>
            {slides[currentSlide].description}
          </p>

          <Link
            href={slides[currentSlide].buttonLink}
            className={styles.cta}
          >
            {slides[currentSlide].buttonText}

            <span>✦</span>
          </Link>
        </div>
      </div>

      {/* LEFT ARROW */}
      <button
        className={`${styles.arrow} ${styles.leftArrow}`}
        onClick={previousSlide}
        aria-label="Previous slide"
      >
        ‹
      </button>

      {/* RIGHT ARROW */}
      <button
        className={`${styles.arrow} ${styles.rightArrow}`}
        onClick={nextSlide}
        aria-label="Next slide"
      >
        ›
      </button>

      {/* SLIDER DOTS */}
      <div className={styles.dots}>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`${styles.dot} ${
              currentSlide === index ? styles.activeDot : ""
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* BOTTOM DECORATION */}
      <div className={styles.bottomDecoration}>
        <span />
        <div>✦</div>
        <span />
      </div>
    </section>
  );
}
