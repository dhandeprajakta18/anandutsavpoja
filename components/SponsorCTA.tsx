import Link from "next/link";
import {
  FaHandHoldingHeart,
  FaHandshake,
  FaArrowRightLong,
} from "react-icons/fa6";

import styles from "./SponsorCTA.module.css";

const sponsorOptions = [
  {
    icon: FaHandHoldingHeart,
    type: "Personal Sponsor",
    bengali: "ব্যক্তিগত সহযোগিতা",
    description:
      "Be a part of Ananda Utsav personally and help us carry forward our traditions, celebrations and community spirit.",
    button: "Sponsor Personally",
    href: "/sponsor/personal",
  },
  {
    icon: FaHandshake,
    type: "Corporate Sponsor",
    bengali: "প্রাতিষ্ঠানিক সহযোগিতা",
    description:
      "Partner with Ananda Utsav as an organization and support a celebration that brings culture, community and people together.",
    button: "Become a Partner",
    href: "/sponsor/corporate",
  },
];

export default function SponsorCTA() {
  return (
    <section className={styles.section} id="sponsor">
      <div className={styles.container}>
        {/* HEADING */}
        <div className={styles.heading}>
         
          <div className={styles.titleRow}>
            <span className={styles.line} />
            <i>◆</i>

            <h2>This Is Not Possible Without You</h2>

            <i>◆</i>
            <span className={styles.line} />
          </div>

          <p className={styles.bengaliHeading}>
            আপনাদের সহযোগিতাই আমাদের শক্তি
          </p>

          <p className={styles.intro}>
            Every celebration is built on the support of people who believe
            in tradition, culture and togetherness. Join us in making
            Ananda Utsav more meaningful.
          </p>
        </div>

        {/* SPONSOR PANEL */}
        <div className={styles.sponsorPanel}>
          {sponsorOptions.map((option, index) => {
            const Icon = option.icon;

            return (
              <div className={styles.sponsorOption} key={option.type}>
                <div className={styles.iconWrap}>
                  <Icon />
                </div>

                <div className={styles.content}>
                  {/* <span className={styles.optionNumber}>
                    0{index + 1}
                  </span> */}

                  <span className={styles.bengali}>
                    {option.bengali}
                  </span>

                  <h3>{option.type}</h3>

                  <p>{option.description}</p>

                  <Link
                    href={option.href}
                    className={styles.sponsorButton}
                  >
                    <span>{option.button}</span>
                    <FaArrowRightLong />
                  </Link>
                </div>
              </div>
            );
          })}

          {/* CENTER ORNAMENT */}
          <div className={styles.centerDivider}>
            <span />
            <div>✦</div>
            <span />
          </div>
        </div>

        {/* SMALL MESSAGE */}
        <div className={styles.bottomMessage}>
          <span />
          <p>
            Together, we celebrate. Together, we preserve.
          </p>
          <span />
        </div>
      </div>
    </section>
  );
}