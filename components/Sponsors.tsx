import Image from "next/image";
import styles from "./Sponsors.module.css";

const sponsors = [
  {
    name: "Sponsor One",
    logo: "/images/sponsors/logo3.png",
  },
  {
    name: "Sponsor Two",
    logo: "/images/sponsors/logo2.png",
  },
  {
    name: "Sponsor Three",
    logo: "/images/sponsors/planet-dezign-logo copy.png",
  },
  {
    name: "Sponsor Four",
    logo: "/images/sponsors/ppglogo.png",
  },
  {
    name: "Sponsor Five",
    logo: "/images/sponsors/mountainlogo.png",
  },
  {
    name: "Sponsor Six",
    logo: "/images/sponsors/owl.png",
  },
];

export default function Sponsors() {
  // Duplicate logos for seamless infinite animation
  const sliderItems = [...sponsors, ...sponsors];

  return (
    <section className={styles.section} id="sponsors">
      <div className={styles.container}>
        {/* HEADING */}

        <div className={styles.heading}>
         

          <div className={styles.titleRow}>
            <span className={styles.line} />
            <i>◆</i>

            <h2>Our Sponsors</h2>

            <i>◆</i>
            <span className={styles.line} />
          </div>

          <p className={styles.bengali}>
            আমাদের সহযোগীরা
          </p>

          <p className={styles.description}>
            With heartfelt gratitude to the partners and supporters
            who have helped make our celebrations possible.
          </p>
        </div>

        {/* YEAR */}

        <div className={styles.year}>
          <span />
          <p>Our Valued Sponsors • 2025</p>
          <span />
        </div>

        {/* SLIDER */}

        <div className={styles.slider}>
          <div className={styles.fadeLeft} />
          <div className={styles.fadeRight} />

          <div className={styles.track}>
            {sliderItems.map((sponsor, index) => (
              <div
                className={styles.sponsorCard}
                key={`${sponsor.name}-${index}`}
              >
                <div className={styles.logoBox}>
                  <Image
                    src={sponsor.logo}
                    alt={`${sponsor.name} logo`}
                    width={170}
                    height={90}
                    className={styles.logo}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* THANK YOU */}

        <div className={styles.thankYou}>
          <span />

          <div className={styles.thankContent}>
            <i>✦</i>

            <p>
              Thank you for being a part of our journey.
            </p>

            <i>✦</i>
          </div>

          <span />
        </div>
        {/* DISCLAIMER */}

<div className={styles.disclaimer}>
  The logos displayed above belong to their respective owners and are
  used solely for sponsor recognition and acknowledgement.
</div>
      </div>
    </section>
  );
}