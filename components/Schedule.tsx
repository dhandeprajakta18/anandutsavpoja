// components/Schedule.tsx
import { FaHandsPraying, FaFireFlameCurved } from "react-icons/fa6";

import styles from "./Schedule.module.css";

const scheduleItems = [
  {
    type: "hands",
    day: "Day 01",
    bengali: "ষষ্ঠী",
    title: "Maha Shashthi",
    description:
      "Bodhon, Amantran & Adhivas — welcoming Maa Durga and beginning the festivities.",
  },
  {
    type: "banana",
    day: "Day 02",
    bengali: "সপ্তমী",
    title: "Maha Saptami",
    description:
      "Nabapatrika rituals, morning Puja, Anjali and the beginning of the main worship.",
  },
  {
    type: "dhunuchi",
    day: "Day 03",
    bengali: "অষ্টমী",
    title: "Maha Ashtami",
    description:
      "Pushpanjali, special Puja, Sandhi Puja and a day filled with devotion and celebration.",
  },
  {
    type: "fire",
    day: "Day 04",
    bengali: "নবমী",
    title: "Maha Navami",
    description:
      "Navami Puja, Aarti, Bhog and cultural celebrations with the entire community.",
  },
  {
    type: "tilak",
    day: "Day 05",
    bengali: "দশমী",
    title: "Vijaya Dashami",
    description:
      "Sindoor Utsav, Devi Baran, Vijaya greetings and an emotional farewell to Maa Durga.",
  },
];

function BananaLeafIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      className={styles.customSvg}
      aria-hidden="true"
    >
      <path
        d="
          M8 47
          C14 27, 27 13, 49 11
          C55 10, 59 11, 60 13
          C59 30, 47 46, 25 52
          C18 54, 12 52, 8 47
          Z
        "
        fill="currentColor"
      />

      <path
        d="M8 48 C25 40, 40 28, 57 14"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      <path
        d="M18 42 C25 36, 32 29, 39 23"
        fill="none"
        stroke="#fffaf2"
        strokeWidth="1"
        opacity="0.22"
      />

      <path
        d="M25 47 C34 40, 41 34, 48 26"
        fill="none"
        stroke="#fffaf2"
        strokeWidth="1"
        opacity="0.18"
      />
    </svg>
  );
}

function DhunuchiIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      className={styles.customSvg}
      aria-hidden="true"
    >
      {/* smoke */}
      <path
        d="
          M28 14
          C23 10, 29 7, 26 3
          M36 15
          C41 11, 35 8, 39 4
        "
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* bowl rim */}
      <path
        d="
          M11 20
          Q32 15 53 20
          L50 26
          Q32 30 14 26
          Z
        "
        fill="currentColor"
      />

      {/* bowl body */}
      <path
        d="
          M14 25
          C16 34, 20 40, 26 44
          L38 44
          C44 40, 48 34, 50 25
          Z
        "
        fill="currentColor"
      />

      {/* bottom */}
      <path
        d="
          M26 43
          L38 43
          L42 51
          Q32 55 22 51
          Z
        "
        fill="currentColor"
      />

      {/* small base */}
      <path
        d="
          M20 51
          Q32 47 44 51
          L42 55
          Q32 58 22 55
          Z
        "
        fill="currentColor"
      />

      {/* inner opening */}
      <ellipse
        cx="32"
        cy="22"
        rx="15"
        ry="3"
        fill="#fffaf2"
        opacity="0.28"
      />
    </svg>
  );
}

function TilakIcon() {
  return (
    <svg
      viewBox="0 0 40 64"
      className={styles.customSvg}
      aria-hidden="true"
    >
      <path
        d="
          M20 4
          C15 14, 12 24, 12 35
          C12 49, 15 58, 20 60
          C25 58, 28 49, 28 35
          C28 24, 25 14, 20 4
          Z
        "
        fill="currentColor"
      />

      <path
        d="
          M20 11
          C18 19, 18 28, 18 36
          C18 44, 19 50, 20 53
          C21 50, 22 44, 22 36
          C22 28, 22 19, 20 11
          Z
        "
        fill="#fffaf2"
        opacity="0.18"
      />
    </svg>
  );
}

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
            return (
              <article className={styles.card} key={item.title}>
                <div className={styles.arch} />

                <div className={styles.icon}>
                  {item.type === "hands" && <FaHandsPraying />}

                  {item.type === "banana" && <BananaLeafIcon />}

                  {item.type === "dhunuchi" && <DhunuchiIcon />}

                  {item.type === "fire" && <FaFireFlameCurved />}

                  {item.type === "tilak" && <TilakIcon />}
                </div>

                <span className={styles.time}>{item.day}</span>

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
            href="/brochures/ananda-utsav-brochure.png"
            download
            className={styles.downloadButton}
          >
            <span className={styles.downloadIcon}>↓</span>

            <span>Download Full Schedule 2026</span>

            <span className={styles.flower}>✦</span>
          </a>
        </div>
      </div>

      <div className={styles.leftDecoration}>❀</div>
      <div className={styles.rightDecoration}>❀</div>
    </section>
  );
}