import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

import { mediaArticles } from "./mediaData";
import styles from "./Media.module.css";

export const metadata: Metadata = {
  title: "Media & News",
  description: "News, stories and festival updates from Ananda Utsav.",
};

export default function MediaPage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.heroPattern} aria-hidden="true">সংবাদ</div>
        <div className={styles.heroContent}>
          
          <h1>News &amp; Stories</h1>
          <div className={styles.divider}><span /><i>◆</i><span /></div>
          <p className={styles.bengaliTitle}>আনন্দ উৎসবের খবর ও গল্প</p>
          <p>Stay connected with the celebrations, traditions and community moments that make Ananda Utsav special.</p>
        </div>
      </section>

      <section className={styles.newsSection}>
        <div className={styles.intro}>
          
          <h2>Stories Worth Sharing</h2>
          <p>Browse announcements, festival highlights and the people-powered moments behind our celebration.</p>
        </div>

        <div className={styles.grid}>
          {mediaArticles.map((article) => (
            <article className={styles.card} key={article.id}>
              <div className={styles.imageWrap}>
                <Image src={article.image} alt="" fill sizes="(max-width: 680px) 92vw, (max-width: 1050px) 46vw, 30vw" className={styles.image} />
                <span className={styles.category}>{article.category}</span>
              </div>
              <div className={styles.cardContent}>
                <time>{article.date}</time>
                <h3>{article.title}</h3>
                <p>{article.excerpt}</p>
                <Link href="/contact" className={styles.readMore}>Read more <FaArrowRightLong /></Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
