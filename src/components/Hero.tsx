"use client";
import styles from "@/styles/Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          <span className={styles.line}>
            Poster <span className={styles.amp}>&</span>
          </span>
          <span className={styles.line}>Wallpaper</span>
        </h1>

        <div className={styles.scrollBadge}>Scroll to explore</div>
      </div>
    </section>
  );
}
