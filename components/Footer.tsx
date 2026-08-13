import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaPhone,
  FaLocationDot,
  FaHeart,
} from "react-icons/fa6";

import styles from "./Footer.module.css";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Media", href: "/media" },
  { label: "Social Activities", href: "/social-activities" },
  { label: "Contact Us", href: "/contact" },
  {label : "Sponsorship", href : "/donate"},
];

export default function Footer() {
  return (
    <footer className={styles.footer} id="contact">

      {/* Decorative top border */}
      <div className={styles.topBorder}>
        <span />
        <i>◆</i>
        <span />
        <i>✦</i>
        <span />
        <i>◆</i>
        <span />
      </div>

      <div className={styles.container}>

        <div className={styles.footerGrid}>

          {/* =========================
              BRAND
          ========================= */}

          <div className={styles.brand}>

            <Link href="/" className={styles.logo}>
              <div className={styles.logoWrap}>
                <Image
                  src="/images/logonew.png"
                  alt="Ananda Utsav Pooja"
                  width={125}
                  height={125}
                  className={styles.logoImage}
                />
              </div>
            </Link>

            <p className={styles.bengaliBrand}>
              ঐতিহ্য • সংস্কৃতি • সেবা
            </p>

            <p className={styles.brandText}>
              Celebrating devotion, preserving Bengali culture and
              bringing our community together through tradition,
              festivities and service.
            </p>

            {/* SOCIAL */}

            <div className={styles.socials}>

              <a
                href="#"
                aria-label="Facebook"
                className={styles.socialIcon}
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className={styles.socialIcon}
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className={styles.socialIcon}
              >
                <FaYoutube />
              </a>

            </div>

          </div>


          {/* =========================
              QUICK LINKS
          ========================= */}

          <div className={styles.column}>

            <h3>Quick Links</h3>

            <div className={styles.headingLine}>
              <span />
              <i>◆</i>
            </div>

            <nav className={styles.links}>

              {quickLinks.map((link) => (
                <Link
                  href={link.href}
                  key={link.label}
                >
                  <span>›</span>
                  {link.label}
                </Link>
              ))}

            </nav>

          </div>


          {/* =========================
              CONTACT
          ========================= */}

          <div className={styles.contact}>

            <h3>Get In Touch</h3>

            <div className={styles.headingLine}>
              <span />
              <i>◆</i>
            </div>

            <div className={styles.contactList}>

              {/* ADDRESS */}

              <div className={styles.contactItem}>

                <div className={styles.contactIcon}>
                  <FaLocationDot />
                </div>

                <div>
                  <span>Visit Us</span>

                  <p>
                    Add association address here,
                    <br />
                    City, State
                  </p>
                </div>

              </div>


              {/* PHONE */}

              <div className={styles.contactItem}>

                <div className={styles.contactIcon}>
                  <FaPhone />
                </div>

                <div>
                  <span>Call Us</span>

                  <a href="tel:+910000000000">
                    +91 00000 00000
                  </a>
                </div>

              </div>


              {/* EMAIL */}

              <div className={styles.contactItem}>

                <div className={styles.contactIcon}>
                  <FaEnvelope />
                </div>

                <div>
                  <span>Email Us</span>

                  <a href="mailto:info@anandautsav.org">
                    info@anandautsav.org
                  </a>
                </div>

              </div>

            </div>


            {/* DONATE */}

            <Link
              href="/donate"
              className={styles.donateButton}
            >
              <FaHeart />

              <span>
                Support Ananda Utsav
              </span>
            </Link>

          </div>

        </div>


        {/* =========================
            FOOTER QUOTE
        ========================= */}

        <div className={styles.footerMessage}>

          <span />

          <div>
            <i>✦</i>

            <p>
              আসছে বছর আবার হবে
            </p>

            <i>✦</i>
          </div>

          <span />

        </div>

      </div>


      {/* =========================
          COPYRIGHT
      ========================= */}

      <div className={styles.bottom}>

        <div className={styles.bottomInner}>

          <p>
            © {new Date().getFullYear()} Ananda Utsav.
            All Rights Reserved.
          </p>

          <p className={styles.credit}>
            Designed & Developed by{" "}

            <a
              href="https://planetdezign.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Planet Dezign
            </a>
          </p>

          <div className={styles.bottomLinks}>

            <Link href="/privacy-policy">
              Privacy Policy
            </Link>

            <span>•</span>

            <Link href="/terms">
              Terms &amp; Conditions
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}