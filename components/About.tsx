import Image from "next/image";
import Link from "next/link";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.about} id="about">
      {/* Decorative background */}
      <div className={styles.leftPattern} aria-hidden="true">
        ॐ
      </div>

      <div className={styles.rightDecoration} aria-hidden="true">
        <span className={styles.eye}>◡</span>
        <span className={styles.trishul}>♢</span>
      </div>

      <div className={styles.container}>
        {/* LEFT CONTENT */}
        <div className={styles.content}>
        

          <h2>About Ananda Utsav</h2>

          <div className={styles.divider}>
            <span className={styles.line} />
            <span className={styles.ornament}>✦</span>
            <span className={styles.line} />
          </div>

          <h3>ঐতিহ্য • সংস্কৃতি • সম্প্রীতি</h3>

          <p>
            Ananda Utsav is a community-driven cultural association dedicated
            to celebrating our traditions, preserving our cultural heritage,
            and bringing people together through devotion and festivities.
          </p>

          <p>
            From organizing Durga Puja and traditional rituals to cultural
            programs, festive celebrations and social initiatives, we create
            meaningful experiences where families and generations can come
            together as one community.
          </p>

          <p>
            Beyond celebrations, our association believes in giving back to
            society through community support and social activities, carrying
            forward the true spirit of togetherness and compassion.
          </p>

          <Link href="/about" className={styles.button}>
            <span>Discover Our Story</span>
            <span className={styles.buttonIcon}>✿</span>
          </Link>
        </div>

        {/* RIGHT IMAGE */}
        <div className={styles.imageSide}>
          <div className={styles.imageFrame}>
            <div className={styles.imageInner}>
              <Image
                src="/real/about.jpeg"
                alt="Ananda Utsav community celebration"
                fill
                sizes="(max-width: 850px) 90vw, 50vw"
                className={styles.image}
              />
            </div>

            <span
              className={`${styles.frameDiamond} ${styles.topDiamond}`}
            />

            <span
              className={`${styles.frameDiamond} ${styles.bottomDiamond}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}