import type { Metadata } from "next";
import Link from "next/link";
import {
  FaBuildingColumns,
  FaCircleCheck,
  FaHandHoldingHeart,
  FaHandshake,
  FaArrowRightLong,
} from "react-icons/fa6";

import styles from "./Donate.module.css";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support Ananda Utsav through a personal contribution or corporate partnership.",
};

const bankDetails = [
  ["Account Name", "Add account name"],
  ["Bank Name", "Add bank name"],
  ["Account Number", "Add account number"],
  ["IFSC Code", "Add IFSC code"],
];

export default function DonatePage() {
  return (
    <main>

      {/* =========================
          HERO
      ========================= */}

      {/* <section className={styles.hero}>
        <div className={styles.content}>

         

          <h1>
            Help Keep Our
            <br />
            Traditions Alive
          </h1>

          <div className={styles.heroDivider}>
            <span />
            <i>◆</i>
            <span />
          </div>

          <p>
            Every contribution helps us celebrate our traditions,
            preserve our culture and keep the spirit of community alive.
          </p>

        </div>
      </section> */}


      {/* =========================
          SUPPORT OPTIONS
      ========================= */}

      <section className={styles.donationSection}>
        <div className={styles.container}>

          <div className={styles.sectionHeading}>

            

            <h2>
              Your Support
              <br />
              Makes A Difference
            </h2>

            <div className={styles.headingDivider}>
              <span />
              <i>◆</i>
              <span />
            </div>

            <p>
              Whether you would like to contribute personally or
              support Ananda Utsav as an organisation, every form
              of support helps us continue our celebrations and
              community initiatives.
            </p>

          </div>


          <div className={styles.donationOptions}>

            {/* PERSONAL */}

            <article className={styles.donationCard}>

              <div className={styles.iconWrap}>
                <FaHandHoldingHeart />
              </div>

              <span>
                INDIVIDUAL CONTRIBUTION
              </span>

              <h3>
                Donate Personally
              </h3>

              <p>
                Make a personal contribution towards our Durga Puja,
                cultural programmes and community activities. Every
                contribution, big or small, is deeply appreciated.
              </p>

              <a
                href="#bank-details"
                className={styles.primaryButton}
              >
                <span>Donate Personally</span>
                <FaArrowRightLong />
              </a>

            </article>


            {/* CORPORATE */}

            <article className={styles.donationCard}>

              <div className={styles.iconWrap}>
                <FaHandshake />
              </div>

              <span>
                ORGANISATION PARTNERSHIP
              </span>

              <h3>
                Become A Corporate Sponsor
              </h3>

              <p>
                Partner with Ananda Utsav and support a women-led
                celebration that brings Bengali culture, community
                and meaningful initiatives to Mumbai.
              </p>

              <Link
                href="/contact?interest=corporate-sponsor#contact-form"
                className={styles.secondaryButton}
              >
                <span>Become A Sponsor</span>
                <FaArrowRightLong />
              </Link>

            </article>

          </div>

        </div>
      </section>


      {/* =========================
          BANK DETAILS
      ========================= */}

      <section
        className={styles.bankSection}
        id="bank-details"
      >

        <div className={styles.bankContainer}>

          {/* LEFT */}

          <div className={styles.bankIntro}>

          
            <h2>
              Support The
              <br />
              Celebration
            </h2>

            <div className={styles.bankDivider}>
              <span />
              <i>◆</i>
              <span />
            </div>

            <p>
              Your contribution helps us continue the traditions,
              rituals and cultural celebrations that bring our
              community together every year.
            </p>

            <p>
              To make a contribution, you can transfer your chosen
              amount directly to the Ananda Utsav bank account using
              the details provided here.
            </p>

            <Link
              href="/contact?interest=general#contact-form"
              className={styles.contactLink}
            >
              Need assistance?
              <span>Contact us</span>
              <FaArrowRightLong />
            </Link>

          </div>


          {/* RIGHT */}

          <div className={styles.bankCard}>

            <div className={styles.bankCardHeader}>

              <div className={styles.bankIcon}>
                <FaBuildingColumns />
              </div>

              <div>
                <span>
                  BANK TRANSFER
                </span>

                <h3>
                  Ananda Utsav
                </h3>
              </div>

            </div>


            <div className={styles.bankCardBody}>

              <dl className={styles.bankDetails}>

                {bankDetails.map(([label, value]) => (
                  <div key={label}>

                    <dt>
                      {label}
                    </dt>

                    <dd>
                      {value}
                    </dd>

                  </div>
                ))}

              </dl>


              <div className={styles.bankNote}>

                <div className={styles.noteIcon}>
                  <FaCircleCheck />
                </div>

                <div>
                  <strong>
                    After your transfer
                  </strong>

                  <p>
                    Please keep your payment confirmation and
                    share your name, mobile number and transaction
                    details with the Ananda Utsav team so that
                    we can acknowledge your contribution.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          CLOSING MESSAGE
      ========================= */}

      {/* <section className={styles.closingSection}>

        <div className={styles.closingInner}>

          <span>
            ঐতিহ্য • সংস্কৃতি • সেবা
          </span>

          <h2>
            Together, We Keep
            <br />
            <em>The Tradition Alive.</em>
          </h2>

          <p>
            Thank you for being a part of Ananda Utsav.
          </p>

        </div>

      </section> */}

    </main>
  );
}