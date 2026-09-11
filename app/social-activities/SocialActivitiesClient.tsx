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

type SocialActivitiesClientProps = {
  activities: string[];
};

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

export default function SocialActivitiesClient({
  activities,
}: SocialActivitiesClientProps) {
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

            <h1>Community Outreach</h1>

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
          INTRO
      ========================= */}

      <section className={styles.intro}>
        <div className={styles.container}>
          <div className={styles.introContent}>
            <p className={styles.introText}>
              Community Outreach &amp; Philanthropy at
              Ananda Utsav
            </p>

            <p className={styles.introText}>
              উদযাপনের মূলে, সহানুভূতির চালিকাশক্তি
            </p>

            <p className={styles.introText}>
              At Ananda Utsav Cultural Association, we
              believe that true celebration goes beyond
              cultural festivities—it lives in the joy we
              share and the lives we touch. Alongside
              preserving our rich traditions and fostering
              community spirit, we are deeply committed to
              driving meaningful social change.
            </p>

            <p className={styles.introText}>
              Over the years, Ananda Utsav has proudly
              partnered with several established, grassroots,
              and mission-driven non-governmental
              organizations (NGOs) that share our deep
              commitment to social welfare.
            </p>

            <p className={styles.introText}>
              Some of the esteemed social sector organizations
              we have closely collaborated with include:
            </p>

            <p className={styles.introText}>
              Grammangal, Sneha Sagar Society, Apnalaya —
              and several other committed grassroots agencies.
            </p>
          </div>
        </div>
      </section>

      {/* =========================
          AUTOMATIC CSR GALLERY
      ========================= */}

      <section className={styles.activitiesSection}>
        <div className={styles.container}>
          {activities.length > 0 ? (
            <div className={styles.activitiesGrid}>
              {activities.map((image, index) => (
                <div
                  className={styles.activityCard}
                  key={image}
                >
                  <div className={styles.imageWrapper}>
                    <Image
                      src={image}
                      alt={`Ananda Utsav social activity ${
                        index + 1
                      }`}
                      fill
                      sizes="
                        (max-width: 700px) 100vw,
                        (max-width: 1000px) 50vw,
                        33vw
                      "
                      className={styles.activityImage}
                      priority={index < 3}
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className={styles.introText}>
              No social activity images available.
            </p>
          )}
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
  src="/real/csr.jpeg"
  alt="Ananda Utsav community outreach"
  fill
  sizes="(max-width: 800px) 100vw, 50vw"
  className={styles.activityImage}
/>

              <div
                className={styles.featuredImageBorder}
              />
            </div>

            <div className={styles.featuredContent}>
              <h2>
                Small Acts. Meaningful Change.
              </h2>

              <p className={styles.featuredBengali}>
                একসাথে আমরা পরিবর্তন আনতে পারি
              </p>

              <div className={styles.goldLine} />

              <p>
                Every initiative begins with a simple belief —
                when people come together with compassion, even
                a small contribution can have a lasting impact.
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