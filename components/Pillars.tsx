import {
  FaHandsPraying,
  FaMasksTheater,
  FaHandHoldingHeart,
} from "react-icons/fa6";

import styles from "./Pillars.module.css";

const pillars = [
  {
    number: "01",
    icon: FaHandsPraying,
    title: "Pooja",
    bengali: "পূজা ও আরাধনা",
    subtitle: "Devotion",
    description:
      "Sacred rituals, prayers and traditions form the spiritual heart of Ananda Utsav, bringing our community together in devotion to Maa Durga.",
  },
  {
    number: "02",
    icon: FaMasksTheater,
    title: "Festivities",
    bengali: "সংস্কৃতি ও উৎসব",
    subtitle: "Culture",
    description:
      "Music, dance, performances and community celebrations create a vibrant platform to preserve and share our rich Bengali heritage.",
  },
  {
    number: "03",
    icon: FaHandHoldingHeart,
    title: "CSR",
    bengali: "সমাজের প্রতি দায়বদ্ধতা",
    subtitle: "Compassion",
    description:
  "Through community services and social initiatives, we come together to support those in need, extend a helping hand and contribute to the well-being of our wider community.",
 },
];

export default function Pillars() {
  return (
    <section className={styles.section} id="pillars">
      <div className={styles.container}>

        {/* HEADING */}
        <div className={styles.heading}>
         

          <div className={styles.titleRow}>
            <span />
            <i>◆</i>

            <h2>Our Three Pillars</h2>

            <i>◆</i>
            <span />
          </div>

          <p className={styles.bengaliHeading}>
            তিন স্তম্ভ, এক বন্ধন
          </p>

          <p className={styles.intro}>
            Rooted in devotion, enriched by culture and driven by
            compassion — these are the values that define Ananda Utsav.
          </p>
        </div>

        {/* FOUNDATION */}
        <div className={styles.foundation}>

          {/* TOP BEAM */}
          <div className={styles.topBeam}>
            <span />
            <p>Tradition • Culture • Compassion</p>
            <span />
          </div>

          {/* PILLARS */}
          <div className={styles.pillars}>
            {pillars.map((pillar) => {
              const Icon = pillar.icon;

              return (
                <article
                  className={styles.pillar}
                  key={pillar.title}
                >
                  {/* TOP */}
                  <div className={styles.pillarTop}>
                    <span />

                    <div className={styles.icon}>
                      <Icon />
                    </div>

                    <span />
                  </div>

                  {/* CONTENT */}
                  <div className={styles.content}>
                  

                    <span className={styles.subtitle}>
                      {pillar.subtitle}
                    </span>

                    <h3>{pillar.title}</h3>

                    <p className={styles.bengali}>
                      {pillar.bengali}
                    </p>

                    <div className={styles.divider}>
                      <span />
                      <i>◆</i>
                      <span />
                    </div>

                    <p className={styles.description}>
                      {pillar.description}
                    </p>
                  </div>

                  {/* BASE */}
                  <div className={styles.pillarBase}>
                    <span />
                    <span />
                  </div>
                </article>
              );
            })}
          </div>

          {/* SHARED FOUNDATION */}
          <div className={styles.bottomFoundation}>
            <span>ঐতিহ্য</span>
            <i>✦</i>
            <span>সংস্কৃতি</span>
            <i>✦</i>
            <span>সেবা</span>
          </div>
        </div>
      </div>
    </section>
  );
}