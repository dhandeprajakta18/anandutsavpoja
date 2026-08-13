import type { Metadata } from "next";
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
    title: "Ananda Utsav",
    text: "Add association address here, City, State, India",
  },
  // {
  //   icon: FaPhone,
  //   label: "Call Us",
  //   title: "+91 00000 00000",
  //   href: "tel:+910000000000",
  //   text: "For general enquiries & participation",
  // },
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
      {/* =========================
          PAGE HERO
      ========================= */}
{/* 
      <section className={styles.hero}>
        <div className={styles.heroPattern} aria-hidden="true">
          যোগাযোগ
        </div>

        <div className={styles.heroContent}>
         

          <h1>Contact Us</h1>

          <div className={styles.titleDivider}>
            <span />
            <i>◆</i>
            <span />
          </div>

          <p className={styles.bengaliTitle}>
            আমাদের সঙ্গে যোগাযোগ করুন
          </p>

          <p className={styles.heroDescription}>
            Whether you wish to participate, collaborate, support or simply
            learn more about Ananda Utsav, our doors are always open.
          </p>
        </div>
      </section> */}

      {/* =========================
          CONTACT SECTION
      ========================= */}

      <section className={styles.contactSection}>
        <div className={styles.container}>
          {/* LEFT SIDE */}

          <div className={styles.infoSide}>
            

            <h2>
              Let&apos;s Stay
              <br />
              <em>Connected.</em>
            </h2>

            <div className={styles.divider}>
              <span />
              <i>◆</i>
              <span />
            </div>

            <p className={styles.intro}>
              Ananda Utsav grows through the participation, support and
              togetherness of our community.
            </p>

            <p className={styles.description}>
              Reach out to us for festival enquiries, cultural participation,
              volunteering, sponsorship opportunities, CSR initiatives or any
              other information about Ananda Utsav.
            </p>

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

            {/* CONTACT DETAILS */}

            <div className={styles.contactList}>
              {contactDetails.map((item) => {
                const Icon = item.icon;

                return (
                  <div className={styles.contactItem} key={item.label}>
                    <div className={styles.iconCircle}>
                      <Icon />
                    </div>

                    <div>
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

            {/* SOCIAL */}

            <div className={styles.socialSection}>
              <span>FOLLOW OUR CELEBRATIONS</span>

              <div className={styles.socials}>
                <a href="#" aria-label="Facebook">
                  <FaFacebookF />
                </a>

                <a href="#" aria-label="Instagram">
                  <FaInstagram />
                </a>

                <a href="#" aria-label="YouTube">
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE — FORM */}

          <div className={styles.formWrapper} id="contact-form">
            <div className={styles.formTop}>
              <span>✦</span>

              <div>
                <small>SEND US A MESSAGE</small>
                <h3>How Can We Help?</h3>
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
                  />
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="email">
                  Email Address <span>*</span>
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="yourname@email.com"
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
                  <option value="" disabled>
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

              <div className={styles.field}>
                <label htmlFor="message">
                  Your Message <span>*</span>
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  placeholder="Tell us how we can help..."
                  required
                />
              </div>

              <button type="submit" className={styles.submitButton}>
                <span>Send Message</span>
                <FaPaperPlane />
              </button>
            </form>

            <div className={styles.formBottom}>
              <span />
              <i>◆</i>
              <p>আপনাদের সহযোগিতাই আমাদের শক্তি</p>
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
            <em>Be Part Of The Tradition.</em>
          </h2>

          <p>
            উৎসব শুধু একটি অনুষ্ঠান নয় — এটি আমাদের সকলের মিলন।
          </p>
        </div>
      </section>
    </main>
  );
}
