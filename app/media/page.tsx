import type { Metadata } from "next";
import fs from "fs";
import path from "path";

import { uniqueMediaArticles } from "./mediaData";
import MediaGallery from "./MediaGallery";
import styles from "./Media.module.css";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Media & News",
  description:
    "Ananda Utsav in the media — stories, features and coverage of our women-led Durga Puja and Bengali cultural celebrations in Mumbai.",
};

/*
 * Automatically read every image
 * inside public/media.
 */
function getMediaGalleryImages() {
  const mediaDirectory = path.join(
    process.cwd(),
    "public",
    "media"
  );

  /*
   * If folder does not exist,
   * return an empty array instead
   * of breaking the page.
   */
  if (!fs.existsSync(mediaDirectory)) {
    return [];
  }

  const allowedExtensions = [
    ".jpg",
    ".jpeg",
    ".png",
    ".webp",
    ".avif",
  ];

  return fs
    .readdirSync(mediaDirectory)
    .filter((fileName) => {
      const extension = path
        .extname(fileName)
        .toLowerCase();

      return allowedExtensions.includes(extension);
    })
    .sort((a, b) =>
      a.localeCompare(b, undefined, {
        numeric: true,
        sensitivity: "base",
      })
    )
    .map((fileName) => ({
      src: `/media/${fileName}`,
      name: fileName,
    }));
}

export default function MediaPage() {
  const mediaGalleryImages =
    getMediaGalleryImages();

  return (
    <main className={styles.page}>
      {/* =====================================
          PAGE INTRO
      ===================================== */}

      <section className={styles.introSection}>
        <div className={styles.intro}>
          <h1>Our Pujo, In The News</h1>

          <div
            className={styles.introDivider}
            aria-hidden="true"
          >
            <span />
            <i>◆</i>
            <span />
          </div>

          <p className={styles.introText}>
            Our women-led Durga Puja has been
            bringing a little slice of Bengal to
            Mumbai for years — and our journey has
            been featured across leading media
            platforms.
          </p>

          <p className={styles.mediaNames}>
            <span>Featured in</span>{" "}
            <strong>Times of India</strong>
            <b> • </b>
            <strong>Economic Times</strong>
            <b> • </b>
            <strong>Bombay Times</strong>
            <b> • </b>
            <strong>Mumbai Mirror</strong>
          </p>
        </div>
      </section>

      {/* =====================================
          REAL MEDIA ARTICLES
      ===================================== */}

      {uniqueMediaArticles.length > 0 && (
        <section className={styles.newsSection}>
          <div className={styles.sectionHeading}>
            <h2>Featured Stories</h2>

            <div
              className={styles.sectionDivider}
              aria-hidden="true"
            >
              <span />
              <i>◆</i>
              <span />
            </div>

            <p>
              Read some of the stories and features
              covering Ananda Utsav and our
              celebrations.
            </p>
          </div>

          <div className={styles.grid}>
            {uniqueMediaArticles.map(
              (article) => (
                <article
                  className={styles.card}
                  key={article.id}
                >
                  {/* IMAGE */}

                  <div
                    className={styles.imageWrap}
                  >
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      sizes="
                        (max-width: 680px) 92vw,
                        (max-width: 1050px) 46vw,
                        560px
                      "
                      className={styles.image}
                    />

                    <span
                      className={styles.category}
                    >
                      {article.category}
                    </span>
                  </div>

                  {/* CONTENT */}

                  <div
                    className={
                      styles.cardContent
                    }
                  >
                    <div
                      className={
                        styles.articleMeta
                      }
                    >
                      <span
                        className={
                          styles.publication
                        }
                      >
                        {article.publication}
                      </span>

                      <span
                        className={styles.date}
                      >
                        {article.date}
                      </span>
                    </div>

                    <h3>{article.title}</h3>

                    <p>{article.excerpt}</p>

                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.readMore}
                    >
                      <span>
                        Read Full Article
                      </span>

                      <FaArrowRightLong
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </article>
              )
            )}
          </div>
        </section>
      )}

      {/* =====================================
          MEDIA IMAGE GALLERY
      ===================================== */}

      {mediaGalleryImages.length > 0 && (
        <section
          className={
            styles.mediaGallerySection
          }
        >
          <div
            className={styles.galleryHeading}
          >
            <h2>Media Gallery</h2>

            <div
              className={styles.sectionDivider}
              aria-hidden="true"
            >
              <span />
              <i>◆</i>
              <span />
            </div>

            <p>
              A collection of newspaper features,
              press coverage, stories and media
              moments from Ananda Utsav.
            </p>
          </div>

          <MediaGallery
            images={mediaGalleryImages}
          />
        </section>
      )}
    </main>
  );
}