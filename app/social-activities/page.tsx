"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaHeart,
  FaHandsHolding,
  FaPeopleGroup,
} from "react-icons/fa6";

import styles from "./SocialActivities.module.css";

const activities = [
  {
    id: 1,
    image: "/csr/WhatsApp Image 2026-08-30 at 9.28.28 PM.jpeg",
  },
  {
    id: 2,
    image: "/csr/WhatsApp Image 2026-08-30 at 9.29.36 PM.jpeg",
  },
  {
    id: 3,
    image: "/csr/WhatsApp Image 2026-08-31 at 5.40.52 PM.jpeg",
  },
  {
    id: 4,
    image: "/csr/WhatsApp Image 2026-08-31 at 6.00.23 PM.jpeg",
  },
  {
    id: 5,
    image: "/csr/WhatsApp Image 2026-09-01 at 4.36.21 PM.jpeg",
  },
  {
    id: 6,
    image: "/csr/WhatsApp Image 2026-09-01 at 5.52.19 PM.jpeg",
  },
];

function CountUp({ end }: { end: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;

    const duration = 4000;
    const increment = Math.ceil(end / 60);

    const timer = setInterval(() => {
      current += increment;

      if (current >= end) {
        current = end;
        clearInterval(timer);
      }

      setCount(current);
    }, duration / 60);

    return () => clearInterval(timer);
  }, [end]);

  return <>{count}</>;
}

export default function SocialActivitiesPage() {
  return (
    <main className={styles.page}>
      {/* =========================
          HERO
      ========================= */}

      <section className={styles.hero}>
        <div
          className={styles.heroPattern}
          aria-hidden="true"
        >
          <span className={styles.patternLeft}>
            সেবা
          </span>

          <span className={styles.patternRight}>
            সহযোগিতা
          </span>
        </div>

        <div
          className={styles.heroIconLeft}
          aria-hidden="true"
        >
          <FaHandsHolding />
        </div>

        <div
          className={styles.heroIconRight}
          aria-hidden="true"
        >
          <FaHeart />
        </div>

        <div
          className={styles.heroPeopleIcon}
          aria-hidden="true"
        >
          <FaPeopleGroup />
        </div>

        <div className={styles.heroContent}>
          <div className={styles.titleRow}>
            <span />

            <i>◆</i>

            <h1>Social Activities</h1>

            <i>◆</i>

            <span />
          </div>

          <p className={styles.bengaliTitle}>
            সামাজিক উদ্যোগ
          </p>

          <p className={styles.heroDescription}>
            Celebration becomes more meaningful when it brings
            people together, inspires kindness and creates a
            positive difference within our community.
          </p>

          <div className={styles.heroMessage}>
            <FaHeart />

            <span>
              সবার পাশে, সবার জন্য
            </span>

            <FaHeart />
          </div>
        </div>
      </section>

      {/* =========================
          BIG INTRO PARAGRAPH
      ========================= */}

      <section className={styles.intro}>
        <div className={styles.container}>
          <div className={styles.introDecoration}>
            <span />
            <i>✦</i>
            <span />
          </div>

          <p className={styles.introText}>
            At Ananda Utsav, we believe that the spirit of
            celebration should extend far beyond the festive
            days themselves. Our social initiatives are built
            around compassion, community and collective
            responsibility — supporting people through food
            distribution, educational assistance, wellbeing
            initiatives, clothing donations and volunteer-led
            efforts. Through every activity, our aim is to stand
            beside those who need support, create meaningful
            connections and carry the values of kindness and
            togetherness throughout the year.
          </p>

          <div className={styles.introDecorationBottom}>
            <span />
            <i>◆</i>
            <span />
          </div>
        </div>
      </section>

      {/* =========================
          ACTIVITIES / IMAGES
      ========================= */}

<section className={styles.activitiesSection}>
  <div className={styles.container}>
    <div className={styles.activitiesGrid}>
      {activities.map((activity, index) => (
        <div
          className={styles.activityCard}
          key={activity.id}
        >
          <div className={styles.imageWrapper}>
            <Image
              src={activity.image}
              alt={`Ananda Utsav social activity ${index + 1}`}
              fill
              sizes="
                (max-width: 700px) 100vw,
                (max-width: 1000px) 50vw,
                33vw
              "
              className={styles.activityImage}
            />
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
      {/* =========================
          FEATURED
      ========================= */}

      <section className={styles.featured}>
        <div className={styles.container}>
          <div className={styles.featuredInner}>
            <div className={styles.featuredImage}>
              <Image
                src="/csr/WhatsApp Image 2026-09-01 at 6.00.13 PM.jpeg"
                alt="Community social activity"
                fill
                sizes="(max-width: 800px) 100vw, 50vw"
              />

              <div className={styles.featuredImageBorder} />
            </div>

            <div className={styles.featuredContent}>
              {/* <span className={styles.smallTitle}>
                Community & Care
              </span> */}

              <h2>
                Small Acts. Meaningful Change.
              </h2>

              <p className={styles.featuredBengali}>
                একসাথে আমরা পরিবর্তন আনতে পারি
              </p>

              <div className={styles.goldLine} />

              <p>
                Every initiative begins with a simple belief —
                when people come together with compassion, even a
                small contribution can have a lasting impact.
              </p>

              <p>
                Our members and volunteers work together to
                support our community, reach those who need
                assistance and carry the spirit of togetherness
                far beyond our celebrations.
              </p>

              <Link
                href="/contact?interest=volunteer#contact-form"
                className={styles.textLink}
              >
                Get Involved

                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          IMPACT
      ========================= */}

      <section className={styles.impact}>
        <div className={styles.container}>
          <div className={styles.impactHeading}>
            <span>Our Impact</span>

            <h2>
              Together, We Make A Difference
            </h2>

            <p>
              Every contribution, every volunteer and every
              initiative helps us reach more people and create
              meaningful change.
            </p>
          </div>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <strong>
                <CountUp end={500} />+
              </strong>

              <span>
                People Reached
              </span>
            </div>

            <div className={styles.statDivider} />

            <div className={styles.stat}>
              <strong>
                <CountUp end={200} />+
              </strong>

              <span>
                Families Supported
              </span>
            </div>

            <div className={styles.statDivider} />

            <div className={styles.stat}>
              <strong>
                <CountUp end={50} />+
              </strong>

              <span>
                Volunteers
              </span>
            </div>

            <div className={styles.statDivider} />

            <div className={styles.stat}>
              <strong>
                <CountUp end={10} />+
              </strong>

              <span>
                Community Initiatives
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          CTA
      ========================= */}

      <section className={styles.cta}>
        <div
          className={styles.ctaBackgroundText}
          aria-hidden="true"
        >
          সেবা
        </div>

        <div className={styles.ctaContent}>
          <div className={styles.ctaDecoration}>
            ✦
          </div>

          <h2>
            Together, We Can Make A Difference
          </h2>

          <p className={styles.ctaBengali}>
            আসুন, একসাথে পাশে দাঁড়াই
          </p>

          <p className={styles.ctaText}>
            Join us in supporting our community and spreading
            kindness beyond the celebration.
          </p>

          <div className={styles.ctaButtons}>
            <Link
              href="/contact?interest=volunteer#contact-form"
              className={styles.primaryButton}
            >
              Get Involved
            </Link>

            <Link
              href="/donate"
              className={styles.secondaryButton}
            >
              Donate
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}