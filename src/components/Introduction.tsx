// src/components/Introduction.tsx
"use client";
import styles from "@/styles/Introduction.module.css";

export default function Introduction() {
  return (
    <section className={styles.intro}>
      <div className={styles.wrapper}>
        <p className={styles.label}>The Vision</p>

        <h2 className={styles.text}>
          A curated collection of digital art for your daily environment. From
          minimal aesthetics to complex visual layers — designed to transform{" "}
          <span className={styles.highlight}>static spaces</span> into
          <span className={styles.highlight}> inspiring experiences</span>.
        </h2>

        <div className={styles.details}>
          <div className={styles.detailBlock}>
            <h3>Physical</h3>
            <p>High-quality poster designs ready for print.</p>
          </div>
          <div className={styles.detailBlock}>
            <h3>Digital</h3>
            <p>High-resolution wallpapers for every screen.</p>
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <p className={styles.label}>Pure Creation</p>

        <h2 className={styles.text}>
          Every pixel and every line is
          <span className={styles.highlight}> crafted by hand</span>. I believe
          in the power of human intuition and deliberate design — strictly{" "}
          <span className={styles.noAi}>no AI generation</span> involved.
        </h2>

        <div className={styles.details}>
          <div className={styles.detailBlock}>
            <h3>Original Art</h3>
            <p>
              Each poster starts with a blank canvas and a unique concept,
              developed from scratch.
            </p>
          </div>
          <div className={styles.detailBlock}>
            <h3>Digital Clarity</h3>
            <p>
              Wallpaper designs optimized for high-end displays, ensuring crisp
              quality and intentional composition.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
