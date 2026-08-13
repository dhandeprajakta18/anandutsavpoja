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
    title: "Food Distribution",
    bengali: "খাদ্য বিতরণ",
    description:
      "Sharing meals with families and individuals in need, bringing our community together through compassion and care.",
    image: "/images/random1.png",
    year: "2025",
  },
  {
    id: 2,
    title: "Educational Support",
    bengali: "শিক্ষা সহায়তা",
    description:
      "Supporting children with educational resources, learning materials and opportunities to help build a brighter future.",
    image: "/images/random2.png",
    year: "2025",
  },
  {
    id: 3,
    title: "Clothing Donation",
    bengali: "বস্ত্র বিতরণ",
    description:
      "Providing essential clothing to families and individuals who need support throughout our wider community.",
    image: "/images/random3.png",
    year: "2025",
  },
  {
    id: 4,
    title: "Health & Wellness",
    bengali: "স্বাস্থ্য ও সুস্থতা",
    description:
      "Community health initiatives focused on awareness, wellbeing and helping people access essential support.",
    image: "/images/random1.png",
    year: "2025",
  },
  {
    id: 5,
    title: "Community Support",
    bengali: "সম্প্রদায় সহায়তা",
    description:
      "Standing beside our community during difficult times and extending meaningful support wherever it is needed.",
    image: "/images/random2.png",
    year: "2025",
  },
  {
    id: 6,
    title: "Volunteer Initiatives",
    bengali: "স্বেচ্ছাসেবী উদ্যোগ",
    description:
      "Bringing volunteers together to create positive change through service, kindness and collective responsibility.",
    image: "/images/random3.png",
    year: "2025",
  },
];

const galleryImages = [
  "/images/random1.png",
  "/images/random2.png",
  "/images/random3.png",
  "/images/random1.png",
  "/images/random2.png",
  "/images/random3.png",
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

        {/* Background Bengali decoration */}
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

        {/* Decorative icons */}

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

        {/* Hero content */}

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

          <div className={styles.heroOrnament}>
            <span />

            <i>✦</i>

            <span />
          </div>

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
          INTRODUCTION
      ========================= */}

      <section className={styles.intro}>

        <div className={styles.container}>

          <div className={styles.sectionHeading}>

            <h2>
              Beyond The Celebration
            </h2>

            <p className={styles.bengali}>
              উৎসবের বাইরেও আমাদের পথচলা
            </p>

            <div className={styles.divider}>
              <span />
              <i>◆</i>
              <span />
            </div>

          </div>

          <p className={styles.introText}>
            At Ananda Utsav, our celebration is rooted in
            togetherness. Beyond the festivities, we believe in
            standing beside our community and contributing to
            causes that make a meaningful difference in
            people&apos;s lives.
          </p>

        </div>

      </section>


      {/* =========================
          ACTIVITIES
      ========================= */}

      <section className={styles.activitiesSection}>

        <div className={styles.container}>

          <div className={styles.activitiesGrid}>

            {activities.map((activity) => (

              <article
                className={styles.activityCard}
                key={activity.id}
              >

                <div className={styles.imageWrapper}>

                  <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    sizes="(max-width: 700px) 100vw, 50vw"
                    className={styles.activityImage}
                  />

                  <div className={styles.imageOverlay} />

                  <span className={styles.year}>
                    {activity.year}
                  </span>

                </div>

                <div className={styles.cardContent}>

                  <h3>
                    {activity.title}
                  </h3>

                  <p className={styles.cardBengali}>
                    {activity.bengali}
                  </p>

                  <span className={styles.cardLine} />

                  <p className={styles.cardDescription}>
                    {activity.description}
                  </p>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =========================
          FEATURED SECTION
      ========================= */}

      <section className={styles.featured}>

        <div className={styles.container}>

          <div className={styles.featuredInner}>

            <div className={styles.featuredImage}>

              <Image
                src="/images/featured.png"
                alt="Community social activity"
                fill
                sizes="(max-width: 800px) 100vw, 50vw"
              />

              <div className={styles.featuredImageBorder} />

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

            <h2>
              Together, We Make A Difference
            </h2>

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
          GALLERY
      ========================= */}

      <section className={styles.gallerySection}>

        <div className={styles.container}>

          <div className={styles.sectionHeading}>

            <h2>
              Social Activities Gallery
            </h2>

            <p className={styles.bengali}>
              সেবার কিছু মুহূর্ত
            </p>

            <div className={styles.divider}>
              <span />
              <i>◆</i>
              <span />
            </div>

          </div>

          <div className={styles.gallery}>

            {galleryImages.map((image, index) => (

              <div
                className={`${styles.galleryItem} ${
                  index === 0 || index === 5
                    ? styles.galleryLarge
                    : ""
                }`}
                key={`${image}-${index}`}
              >

                <Image
                  src={image}
                  alt={`Social activity ${index + 1}`}
                  fill
                  sizes="(max-width: 600px) 100vw, 33vw"
                  className={styles.galleryImage}
                />

                <div className={styles.galleryOverlay} />

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =========================
          CTA
      ========================= */}

      <section className={styles.cta}>

        <div className={styles.ctaDecoration}>
          ✦
        </div>

        <div className={styles.ctaContent}>

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