import type { Metadata } from "next";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

import { mediaArticles } from "./mediaData";
import styles from "./Media.module.css";

export const metadata: Metadata = {
  title: "Media & News",
  description:
    "Ananda Utsav in the media — stories, features and coverage of our women-led Durga Puja and Bengali cultural celebrations in Mumbai.",
};

export default function MediaPage() {
  return (
    <main className={styles.page}>
      {/* PAGE INTRO */}
      <section className={styles.introSection}>
        <div className={styles.intro}>
          {/* <span className={styles.eyebrow}>IN THE MEDIA</span> */}

          <h1>Our Pujo, In The News</h1>

          <div className={styles.introDivider}>
            <span />
            <i>◆</i>
            <span />
          </div>

          <p className={styles.introText}>
            Our women-led Durga Puja has been bringing a little slice of
            Bengal to Mumbai for years — and our journey has been featured
            across leading media houses.
          </p>

          <p className={styles.mediaNames}>
            <span>Featured in</span>{" "}
            <strong>Times of India</strong>
            <b>•</b>
            <strong>Economic Times</strong>
            <b>•</b>
            <strong>Bombay Times</strong>
            <b>•</b>
            <strong>Mumbai Mirror</strong>
          </p>
        </div>
      </section>

      {/* ARTICLES */}
      <section className={styles.newsSection}>
        <div className={styles.grid}>
          {mediaArticles.map((article) => (
            <article className={styles.card} key={article.id}>
              <div className={styles.imageWrap}>
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(max-width: 680px) 92vw, (max-width: 1050px) 46vw, 30vw"
                  className={styles.image}
                />

                <span className={styles.category}>
                  {article.category}
                </span>
              </div>

              <div className={styles.cardContent}>
                <div className={styles.articleMeta}>
                  <span className={styles.publication}>
                    {article.publication}
                  </span>

                  <span className={styles.date}>
                    {article.date}
                  </span>
                </div>

                <h2>{article.title}</h2>

                <p>{article.excerpt}</p>

                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.readMore}
                >
                  <span>Read Full Article</span>
                  <FaArrowRightLong />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}