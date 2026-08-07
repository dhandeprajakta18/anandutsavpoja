"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Media", href: "/media" },
  { label: "Social Activities", href: "/social-activities" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  useEffect(() => {
  let lastScrollY = window.scrollY;

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // Always show at the top
    if (currentScrollY < 20) {
      setShowNavbar(true);
    }
    // Hide while scrolling down
    else if (currentScrollY > lastScrollY) {
      setShowNavbar(false);
    }
    // Show while scrolling up
    else {
      setShowNavbar(true);
    }

    lastScrollY = currentScrollY;
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
<header
  className={`${styles.header} ${
    showNavbar ? styles.headerVisible : styles.headerHidden
  }`}
>
      <div className={styles.navbar}>
        {/* LOGO */}
        <Link href="/" className={styles.logo}>
          <Image
            src="/images/logo1.png"
            alt="Ananda Utsav Pooja"
            width={110}
            height={110}
            priority
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className={styles.desktopNav}>
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className={styles.navLink}>
              {link.label}
            </Link>
          ))}
        </nav>

        {/* RIGHT SIDE */}
        <div className={styles.actions}>
          <Link href="/donate" className={styles.donateButton}>
            Donate
          </Link>

          {/* <button className={styles.languageButton} type="button">
            বাংলা
          </button> */}

          {/* MOBILE MENU BUTTON */}
          <button
            className={`${styles.menuButton} ${
              menuOpen ? styles.menuButtonActive : ""
            }`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            type="button"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* MOBILE NAVIGATION */}
      <div
        id="mobile-navigation"
        className={`${styles.mobileMenu} ${
          menuOpen ? styles.mobileMenuOpen : ""
        }`}
        aria-hidden={!menuOpen}
      >
        <nav className={styles.mobileNav}>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/donate"
            className={styles.mobileDonate}
            onClick={() => setMenuOpen(false)}
          >
            Donate
          </Link>

          {/* <button type="button" className={styles.mobileLanguage}>
            বাংলা
          </button> */}
        </nav>
      </div>
    </header>
  );
}
