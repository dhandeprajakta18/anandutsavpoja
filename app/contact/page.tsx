import type { Metadata } from "next";
import {
  FaEnvelope,
  FaLocationDot,
  FaPhone,
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
  {
    icon: FaPhone,
    label: "Call Us",
    title: "+91 00000 00000",
    href: "tel:+910000000000",
    text: "For general enquiries & participation",
  },
  {
    icon: FaEnvelope,
    label: "Write To Us",
    title: "info@anandautsav.org",
    href: "mailto:info@anandautsav.org",
    text: "We would love to hear from you",
  },
];

export default function ContactPage() {
  return (
    <main>
      {/* =========================
          PAGE HERO
      ========================= */}

      <section className={styles.hero}>
        <div className={styles.heroPattern} aria-hidden="true">
          যোগাযোগ
        </div>

        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>
            WE WOULD LOVE TO HEAR FROM YOU
          </span>

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
      </section>

      {/* =========================
          CONTACT SECTION
      ========================= */}

      <section className={styles.contactSection}>
        <div className={styles.container}>
          {/* LEFT SIDE */}

          <div className={styles.infoSide}>
            <span className={styles.sectionLabel}>
              GET IN TOUCH
            </span>

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
                  defaultValue=""
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
                  rows={5}
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
          MEMBERSHIP
      ========================= */}

      <section className={styles.membershipSection} id="membership">
        <div className={styles.membershipContainer}>
          <div className={styles.membershipHeading}>
            <span className={styles.sectionLabel}>JOIN OUR COMMUNITY</span>

            <h2>Become A Member</h2>

            <div className={styles.membershipDivider}>
              <span />
              <i>◆</i>
              <span />
            </div>

            <p className={styles.membershipBengali}>
              একসাথে উদযাপন, একসাথে পথচলা
            </p>

            <p className={styles.membershipIntro}>
              Membership is an invitation to be more closely connected with
              Ananda Utsav — to participate, contribute and help us carry our
              traditions and community spirit forward.
            </p>
          </div>

          <div className={styles.membershipGrid}>
            <article className={styles.membershipCard}>
              <span className={styles.membershipNumber}>01</span>
              <h3>Festival Participation</h3>
              <p>
                Stay connected with Durga Puja, cultural programmes and other
                Ananda Utsav celebrations throughout the year.
              </p>
            </article>

            <article className={styles.membershipCard}>
              <span className={styles.membershipNumber}>02</span>
              <h3>Community Connection</h3>
              <p>
                Meet families and community members, build lasting connections
                and celebrate Bengali heritage together.
              </p>
            </article>

            <article className={styles.membershipCard}>
              <span className={styles.membershipNumber}>03</span>
              <h3>Volunteer & Contribute</h3>
              <p>
                Take part in festival organisation, cultural initiatives,
                volunteering and social responsibility activities.
              </p>
            </article>
          </div>

          <div className={styles.membershipCta}>
            <div>
              <span>INTERESTED IN MEMBERSHIP?</span>
              <h3>We&apos;d Love To Welcome You.</h3>
              <p>
                Send us your details and our team can share the current
                membership process, eligibility and contribution information.
              </p>
            </div>

            <a href="#contact-form" className={styles.membershipButton}>
              Enquire About Membership
            </a>
          </div>
        </div>
      </section>

      {/* =========================
          BOTTOM MESSAGE
      ========================= */}

      <section className={styles.bottomMessage}>
        <div className={styles.bottomInner}>
          <span className={styles.smallLabel}>
            ANANDA UTSAV
          </span>

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