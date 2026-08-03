import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

import styles from "./About.module.css";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Discover Ananda Utsav, our celebration of Durga Puja, Bengali heritage, culture, devotion and community togetherness.",
};

export default function AboutPage() {
  return (
    <main>
      {/* PAGE INTRO */}
      <section className={styles.hero}>
        <div className={styles.heroPattern} aria-hidden="true">
          শুভ
        </div>

        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>OUR STORY</span>

          <h1>About Ananda Utsav</h1>

          <div className={styles.titleDivider}>
            <span />
            <i>◆</i>
            <span />
          </div>

          <p className={styles.bengaliTitle}>
            ঐতিহ্য • সংস্কৃতি • সম্প্রীতি
          </p>

          <p className={styles.heroDescription}>
            A celebration where devotion meets culture and a community
            comes together as one.
          </p>
        </div>
      </section>

      {/* MAIN STORY */}
      <section className={styles.story}>
        <div className={styles.container}>
          {/* IMAGE SIDE */}
          <div className={styles.imageSide}>
            <div className={styles.imageFrame}>
              <div className={styles.imageInner}>
                <Image
                  src="/images/about-ananda-utsav.png"
                  alt="Durga Puja celebration at Ananda Utsav"
                  fill
                  priority
                  sizes="(max-width: 800px) 90vw, 45vw"
                  className={styles.image}
                />
              </div>

              <span className={styles.cornerTop} />
              <span className={styles.cornerBottom} />
            </div>

            <div className={styles.imageCaption}>
              <span>✦</span>

              <div>
                <small>A CELEBRATION OF</small>
                <p>Faith • Heritage • Togetherness</p>
              </div>
            </div>
          </div>

          {/* CONTENT SIDE */}
          <div className={styles.content}>
            <span className={styles.sectionLabel}>
              WHO WE ARE
            </span>

            <h2>
              More Than A Festival,
              <br />
              <em>A Celebration Of Belonging.</em>
            </h2>

            <div className={styles.divider}>
              <span />
              <i>◆</i>
              <span />
            </div>

            <p className={styles.lead}>
              Ananda Utsav is a celebration rooted in devotion, Bengali
              heritage and the joy of coming together as a community.
            </p>

            <p>
              At its heart is the spirit of Durga Puja — a time when families,
              friends and communities gather to worship Maa Durga and celebrate
              the values of strength, compassion and the triumph of good over
              evil.
            </p>

            <p>
              Through traditional rituals, cultural programmes, music, dance,
              festivities and community participation, Ananda Utsav creates a
              space where generations can come together and remain connected
              to the traditions that have shaped Bengali culture.
            </p>

            <p>
              Our celebration extends beyond the days of Puja. Through social
              responsibility and community initiatives, we aspire to carry the
              spirit of togetherness beyond the festival and contribute
              meaningfully to the society around us.
            </p>

            <Link href="/gallery" className={styles.button}>
              <span>Explore Our Celebrations</span>
              <FaArrowRightLong />
            </Link>
          </div>
        </div>
      </section>

      {/* DURGA PUJA */}
      <section className={styles.durga}>
        <div className={styles.durgaContainer}>
          <div className={styles.durgaHeading}>
            <span className={styles.sectionLabel}>
              THE SOUL OF THE CELEBRATION
            </span>

            <h2>Durga Puja In Bengal</h2>

            <p className={styles.bengaliSubtitle}>
              দুর্গোৎসব — বাঙালির আবেগ
            </p>
          </div>

          <div className={styles.durgaContent}>
            <p className={styles.largeLetter}>
              <span>D</span>
              urga Puja is far more than a religious festival in Bengal.
              It is an emotion woven into Bengali life — a celebration of
              faith, art, culture, family and community.
            </p>

            <p>
              The arrival of Maa Durga is traditionally celebrated as the
              homecoming of the Goddess with her children. Across the festive
              days, communities gather for worship, anjali, dhak, bhog,
              cultural programmes and countless moments of togetherness.
            </p>

            <p>
              From the anticipation of Mahalaya and the principal days of
              Shashthi, Saptami, Ashtami and Navami to the emotional farewell
              of Vijaya Dashami, Durga Puja carries a unique rhythm of
              devotion and celebration.
            </p>

            <p>
              On Dashami, traditions such as Devi Baran and Sindoor Khela mark
              the farewell to Maa Durga before immersion, accompanied by the
              hope of welcoming her again the following year.
            </p>
          </div>

          <div className={styles.quote}>
            <span>“</span>

            <div>
              <p>আসছে বছর আবার হবে</p>
              <small>Until we welcome Maa again.</small>
            </div>

            <span>”</span>
          </div>
        </div>
      </section>
    </main>
  );
}