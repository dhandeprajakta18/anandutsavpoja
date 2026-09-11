import type { Metadata } from "next";
import Image from "next/image";
import {
  FaEnvelope,
  FaLocationDot,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPaperPlane,
} from "react-icons/fa6";

import styles from "./Contact.module.css";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Ananda Utsav for festival enquiries, membership, participation, volunteering, sponsorship, partnerships and community activities.",
};

const contactDetails = [
  {
    icon: FaLocationDot,
    label: "Visit Us",
    title: "Ananda Utsav Cultural Association",
    text:
      "Trento Lawns, Shrirang Sabde Marg, Siddharth Nagar, Next to Ozone Swimming Pool. Goregaon West, Mumbai. ",
  },
  {
    icon: FaEnvelope,
    label: "Write To Us",
    title: "info@anandautsav.org",
    href: "mailto:info@anandautsav.org",
    text: "We would love to hear from you",
  },
];

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ interest?: string }>;
}) {
  const { interest } = await searchParams;

  const selectedInterest = [
    "membership",
    "general",
    "participation",
    "cultural",
    "volunteer",
    "personal-sponsor",
    "corporate-sponsor",
    "csr",
  ].includes(interest ?? "")
    ? interest
    : "";

  return (
    <main>
      <section className={styles.contactSection}>
        <div className={styles.container}>
          {/* =========================
              LEFT CONTENT
          ========================= */}

          <div className={styles.infoSide}>
            <h1>
              Let&apos;s Stay
              <br />
              <em>Connected.</em>
            </h1>

            <div className={styles.divider}>
              <span />
              <i>◆</i>
              <span />
            </div>

            {/* =========================
                MEMBERSHIP + SPONSORSHIP
            ========================= */}

            <div className={styles.involvementOptions}>
              <article className={styles.involvementCard}>
                <span>JOIN THE COMMUNITY</span>

                <h3>Become a Member</h3>

                <p>
                  Participate in our celebrations, meet the community and
                  contribute to the traditions we share.
                </p>

                <a href="/contact?interest=membership#contact-form">
                  Enquire about membership
                </a>
              </article>

              <article className={styles.involvementCard}>
                <span>SUPPORT ANANDA UTSAV</span>

                <h3>Become a Sponsor</h3>

                <p>
                  Partner with us to support our festival, cultural programmes
                  and community initiatives.
                </p>

                <a href="/contact?interest=corporate-sponsor#contact-form">
                  Explore sponsorship
                </a>
              </article>
            </div>

            {/* =========================
                CONTACT DETAILS
            ========================= */}

            <div className={styles.contactList}>
              {contactDetails.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    className={styles.contactItem}
                    key={item.label}
                  >
                    <div className={styles.iconCircle}>
                      <Icon />
                    </div>

                    <div className={styles.contactContent}>
                      <span className={styles.contactLabel}>
                        {item.label}
                      </span>

                      {item.href ? (
                        <a
                          href={item.href}
                          className={styles.contactTitle}
                        >
                          {item.title}
                        </a>
                      ) : (
                        <p className={styles.contactTitle}>
                          {item.title}
                        </p>
                      )}

                      <p className={styles.contactText}>
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* =========================
                SOCIAL
            ========================= */}

            <div className={styles.socialSection}>
              <span>FOLLOW OUR CELEBRATIONS</span>

              <div className={styles.socials}>
                <a
                  href="https://www.facebook.com/AnandaUtsavPuja"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </a>

                <a
                  href="https://www.instagram.com/ananda.utsav/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>

                <a
                  href="https://youtube.com/@anandautsav3988?si=fdgd5jvCrwGCWaTq"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>

          {/* =========================
              RIGHT IMAGE
          ========================= */}

          <div className={styles.imageSide}>
            <div className={styles.imageFrame}>
              <div className={styles.imageInner}>
                <Image
                  src="/real/contactus.jpeg"
                  alt="Ananda Utsav community celebration"
                  fill
                  priority
                  sizes="(max-width: 850px) 90vw, 46vw"
                  className={styles.contactImage}
                />
              </div>

              <span className={styles.cornerTop} />
              <span className={styles.cornerBottom} />
            </div>

            <div className={styles.imageCaption}>
              <span>✦</span>

              <div>
                <small>ANANDA UTSAV</small>

                <p>
                  Community • Culture • Togetherness
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* =========================
            CONTACT FORM
        ========================= */}

        <div
          className={styles.formSection}
          id="contact-form"
        >
          <div className={styles.formIntro}>
            <h2>How Can We Help?</h2>

            <p>
              Tell us what you&apos;re interested in and we&apos;ll be happy
              to hear from you.
            </p>
          </div>

          <div className={styles.formWrapper}>
            <div className={styles.formTop}>
              <span>✦</span>

              <div>
                <small>GET IN TOUCH</small>

                <h3>Send Us A Message</h3>
              </div>
            </div>

            <form className={styles.form}>
              <div className={styles.formRow}>
                <div className={styles.field}>
                  <label htmlFor="name">
                    Your Name <span>*</span>
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    autoComplete="name"
                    required
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="phone">
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 00000 00000"
                    autoComplete="tel"
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.field}>
                  <label htmlFor="email">
                    Email Address <span>*</span>
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="yourname@email.com"
                    autoComplete="email"
                    required
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="subject">
                    I&apos;m Interested In
                  </label>

                  <select
                    id="subject"
                    name="subject"
                    defaultValue={selectedInterest}
                  >
                    <option
                      value=""
                      disabled
                    >
                      Select an enquiry
                    </option>

                    <option value="membership">
                      Membership Enquiry
                    </option>

                    <option value="general">
                      General Enquiry
                    </option>

                    <option value="participation">
                      Festival Participation
                    </option>

                    <option value="cultural">
                      Cultural Programme
                    </option>

                    <option value="volunteer">
                      Volunteering
                    </option>

                    <option value="personal-sponsor">
                      Personal Sponsorship
                    </option>

                    <option value="corporate-sponsor">
                      Corporate Sponsorship
                    </option>

                    <option value="csr">
                      CSR / Social Activities
                    </option>
                  </select>
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="message">
                  Your Message <span>*</span>
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us how we can help..."
                  required
                />
              </div>

              <button
                type="submit"
                className={styles.submitButton}
              >
                <span>Send Message</span>
                <FaPaperPlane />
              </button>
            </form>

            <div className={styles.formBottom}>
              <span />
              <i>◆</i>

              <p>
                আপনাদের সহযোগিতাই আমাদের শক্তি
              </p>

              <i>◆</i>
              <span />
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          BOTTOM MESSAGE
      ========================= */}

      <section className={styles.bottomMessage}>
        <div className={styles.bottomInner}>
          <h2>
            Celebrate With Us.
            <br />

            <em>
              Be Part Of The Tradition.
            </em>
          </h2>

          <p>
            উৎসব শুধু একটি অনুষ্ঠান নয় — এটি আমাদের সকলের মিলন।
          </p>
        </div>
      </section>
    </main>
  );
}