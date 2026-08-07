import type { Metadata } from "next";

import SponsorCTA from "@/components/SponsorCTA";
import styles from "./Donate.module.css";

export const metadata: Metadata = {
  title: "Donate",
  description: "Support Ananda Utsav and help preserve tradition, culture and community.",
};

export default function DonatePage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.content}>
          
          <h1>Help Keep Our Traditions Alive</h1>
          <div><i>◆</i></div>
          <p>Every contribution helps strengthen a celebration built on devotion, culture and togetherness.</p>
        </div>
      </section>
      <SponsorCTA />
    </main>
  );
}
