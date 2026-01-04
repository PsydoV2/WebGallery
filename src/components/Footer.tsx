// src/components/Footer.tsx
"use client";
import styles from "@/styles/Footer.module.css";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <span className={styles.logo}>
              <Image src="/icon.svg" width={30} height={30} alt="Icon"></Image>
              sfalter
            </span>
            <p className={styles.tagline}>Visual explorations & digital art.</p>
          </div>

          <div className={styles.links}>
            <div className={styles.linkGroup}>
              <h4>Navigation</h4>
              <a href="#posters">Posters</a>
              <a href="#wallpapers">Wallpapers</a>
            </div>
            <div className={styles.linkGroup}>
              <h4>Connect</h4>
              <a href="https://sfalter.de" target="_blank" rel="noopener">
                Main Website
              </a>
              <a href="mailto:info@sfalter.de">Contact</a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.legal}>
            <span>&copy; {currentYear} Sebastian Falter</span>
            <span className={styles.separator}>|</span>
            <span className={styles.humanMade}>Human Made • No AI</span>
          </div>
          <div className={styles.signature}>
            Designed by <span className={styles.accent}>sfalter</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
