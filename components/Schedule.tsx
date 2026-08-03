import {
  FaHandsPraying,
  FaLeaf,
  FaOm,
  FaFireFlameCurved,
  FaDharmachakra,
} from "react-icons/fa6";

import styles from "./Schedule.module.css";

const scheduleItems = [
  {
    icon: FaHandsPraying,
    day: "Day 01",
    bengali: "ষষ্ঠী",
    title: "Maha Shashthi",
    description:
      "Bodhon, Amantran & Adhivas — welcoming Maa Durga and beginning the festivities.",
  },
  {
    icon: FaLeaf,
    day: "Day 02",
    bengali: "সপ্তমী",
    title: "Maha Saptami",
    description:
      "Nabapatrika rituals, morning Puja, Anjali and the beginning of the main worship.",
  },
  {
    icon: FaOm,
    day: "Day 03",
    bengali: "অষ্টমী",
    title: "Maha Ashtami",
    description:
      "Pushpanjali, special Puja, Sandhi Puja and a day filled with devotion and celebration.",
  },
  {
    icon: FaFireFlameCurved,
    day: "Day 04",
    bengali: "নবমী",
    title: "Maha Navami",
    description:
      "Navami Puja, Aarti, Bhog and cultural celebrations with the entire community.",
  },
  {
    icon: FaDharmachakra,
    day: "Day 05",
    bengali: "দশমী",
    title: "Vijaya Dashami",
    description:
      "Sindoor Utsav, Devi Baran, Vijaya greetings and an emotional farewell to Maa Durga.",
  },
];

export default function Schedule() {
  return (
    <section className={styles.schedule} id="schedule">
      <div className={styles.container}>

        <div className={styles.heading}>
          <div className={styles.titleRow}>
            <span className={styles.line} />
            <span className={styles.ornament}>✦</span>

            <h2>Five Days of Celebration</h2>

            <span className={styles.ornament}>✦</span>
            <span className={styles.line} />
          </div>

          <p>পাঁচ দিনের দুর্গোৎসব</p>
        </div>

        <div className={styles.scheduleGrid}>
          {scheduleItems.map((item) => {
            const Icon = item.icon;

            return (
              <article className={styles.card} key={item.title}>
                <div className={styles.arch} />

                <div className={styles.icon}>
                  <Icon />
                </div>

                <span className={styles.time}>
                  {item.day}
                </span>

                <div className={styles.smallDivider} />

                <h3>{item.title}</h3>

                <span className={styles.bengaliDay}>
                  {item.bengali}
                </span>

                <p>{item.description}</p>
              </article>
            );
          })}
        </div>

        <div className={styles.brochure}>
          <p>
            Explore the complete Puja timings, rituals, cultural programmes
            and celebration details in our festival brochure.
          </p>

          <a
            href="/brochures/ananda-utsav-brochure.pdf"
            download
            className={styles.downloadButton}
          >
            <span className={styles.downloadIcon}>↓</span>

            <span>Download Full Schedule</span>

            <span className={styles.flower}>✦</span>
          </a>
        </div>
      </div>

      <div className={styles.leftDecoration}>❀</div>
      <div className={styles.rightDecoration}>❀</div>
    </section>
  );
}