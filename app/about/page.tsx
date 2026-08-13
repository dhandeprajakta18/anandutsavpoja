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
         

          <h1>About AnandaUtsav</h1>

          <div className={styles.titleDivider}>
            <span />
            <i>◆</i>
            <span />
          </div>

          <p className={styles.bengaliTitle}>
            ঐতিহ্য • সংস্কৃতি • সেবা
          </p>

          <p className={styles.heroDescription}>
  A women-founded and women-led celebration bringing a little slice of
  Bengal, the warmth of Pujo and the spirit of community to Mumbai.
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
    <small>OUR SPIRIT</small>
    <p>Heritage • Culture • Service</p>
  </div>
</div>
          </div>

          {/* CONTENT SIDE */}
          <div className={styles.content}>
           

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
  Ananda Utsav was born from a simple feeling — the longing to bring the
  warmth, beauty and emotion of Durga Puja to Mumbai, and to create a
  place that feels a little like home.
</p>

<p>
  Founded and run by women, Ananda Utsav is built on the belief that
  traditions become more meaningful when we come together to keep them
  alive. From planning the Puja and preparing for the rituals to creating
  the celebrations around them, women from our community come together
  with passion, care and a shared love for Maa Durga.
</p>

<p>
  Here, Pujo is not just about the rituals. It is about the sound of the
  dhak, the fragrance of bhog, the colours of the festivities, familiar
  music, cultural performances and those little moments that remind us of
  Bengal. It is a space where children discover their roots, families
  create memories and friends come together year after year.
</p>

<p>
  At Ananda Utsav, you will find a little slice of Pujo in Mumbai — a
  glimpse of Bengal brought to life through devotion, culture, food,
  celebration and togetherness. And beyond the festivities, we hope to
  carry that same spirit of care and service into the wider community.
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
           

            <h2>Durga Puja In Bengal</h2>

            <p className={styles.bengaliSubtitle}>
              দুর্গোৎসব — বাঙালির আবেগ
            </p>
          </div>

          <div className={styles.durgaContent}>
            <p className={styles.largeLetter}>
  <span>D</span>
  urga Puja is more than a festival to us. It is a feeling — the feeling
  of coming home, of familiar sounds, familiar flavours and traditions
  that stay with us wherever life takes us. It is a little piece of Bengal
  that we carry in our hearts.
</p>

<p>
  In Bengal, Pujo transforms everything. Streets come alive, dhaker taal
  fills the air, homes open their doors and people come together to
  celebrate. Maa Durga arrives not simply as a Goddess, but as a much-loved
  daughter returning home. That feeling of homecoming is at the heart of
  what we hope to recreate at Ananda Utsav.
</p>

<p>
  From Mahalaya and the anticipation of Shashthi to the rituals of Saptami,
  the devotion of Ashtami, the celebrations of Navami and the bittersweet
  farewell of Dashami, every day carries its own emotion. Anjali, dhak,
  bhog, sindoor, music and cultural celebrations become memories we look
  forward to making together every year.
</p>

<p>
  And when the time comes to say goodbye on Dashami, there is always the
  same promise in our hearts — Maa will return, and so will the Pujo.
  Until then, we carry its spirit with us and keep the traditions alive,
  wherever we are.
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