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
                  src="/real/about2.jpeg"
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
  Ananda Utsav is a celebration of devotion, culture and community — a
  place where the spirit of Durga Puja comes alive in the heart of Mumbai.
  What began as a shared desire to celebrate our traditions together has
  grown into an occasion that families look forward to every year.
</p>

<p>
  At the heart of Ananda Utsav is a dedicated community of women who bring
  the celebration together with creativity, commitment and care. From the
  preparations and sacred rituals to cultural programmes and festive
  experiences, every detail is shaped by collective effort and a deep
  respect for our traditions.
</p>

<p>
  Each year, the celebration brings together generations through the
  familiar rhythms of the dhak, the joy of offering anjali, shared meals,
  music, performances and festive gatherings. For some, it brings back
  cherished memories of Bengal; for others, especially younger
  generations, it becomes a beautiful introduction to their cultural
  heritage.
</p>

<p>
  More than an annual festival, Ananda Utsav is about creating meaningful
  connections. It is a space to celebrate our roots, welcome new friendships
  and share the richness of Bengali culture with the wider community —
  carrying forward the values of devotion, togetherness and service.
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
           

            <h2>The Spirit of Durga Puja</h2>

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