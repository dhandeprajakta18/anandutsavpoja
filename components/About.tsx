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

          <h3>ঐতিহ্য • সংস্কৃতি • সেবা</h3>

<p>
  Founded and run by women, Ananda Utsav is a celebration born from a
  shared love for Maa Durga, our traditions and the spirit of community.
  What began with a simple vision has grown into a space where women come
  together to lead, create and keep the beautiful traditions of Durga Puja
  alive.
</p>

<p>
  From Puja rituals and decorations to cultural programmes, celebrations
  and community initiatives, every part of Ananda Utsav carries the warmth,
  strength and creativity of the women who make it happen.
</p>

<p>
  At Ananda Utsav, you will find a little slice of Pujo in Mumbai — a
  glimpse of Bengal brought to life through dhak, devotion, food, culture
  and the joy of coming together. It is our way of keeping Bengal close to
  our hearts, wherever we are.
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