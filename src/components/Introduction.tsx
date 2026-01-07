"use client";
import { motion, cubicBezier } from "framer-motion";
import styles from "@/styles/Introduction.module.css";

export default function Introduction() {
  // Definition der Animations-Varianten
  const fadeInVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: cubicBezier(0.21, 0.47, 0.32, 0.98) },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <section className={styles.intro}>
      <div className={styles.wrapper}>
        {/* Erster Block: Vision */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={staggerContainer}
        >
          <motion.p variants={fadeInVariant} className={styles.label}>
            The Vision
          </motion.p>

          <motion.h2 variants={fadeInVariant} className={styles.text}>
            A curated collection of digital art for your daily environment. From
            minimal aesthetics to complex visual layers — designed to transform{" "}
            <span className={styles.highlight}>static spaces</span> into
            <span className={styles.highlight}> inspiring experiences</span>.
          </motion.h2>

          <motion.div variants={fadeInVariant} className={styles.details}>
            <div className={styles.detailBlock}>
              <h3>Physical</h3>
              <p>High-quality poster designs ready for print.</p>
            </div>
            <div className={styles.detailBlock}>
              <h3>Digital</h3>
              <p>High-resolution wallpapers for every screen.</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Abstandhalter (statt der <br/>-Wand könnte man im CSS margin nutzen) */}
        <div style={{ height: "40vh" }} />

        {/* Zweiter Block: Pure Creation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={staggerContainer}
        >
          <motion.p variants={fadeInVariant} className={styles.label}>
            Pure Creation
          </motion.p>

          <motion.h2 variants={fadeInVariant} className={styles.text}>
            Every pixel and every line is
            <span className={styles.highlight}> crafted by hand</span>. I
            believe in the power of human intuition and deliberate design —
            strictly <span className={styles.noAi}>no AI generation</span>{" "}
            involved.
          </motion.h2>

          <motion.div variants={fadeInVariant} className={styles.details}>
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
                Wallpaper designs optimized for high-end displays, ensuring
                crisp quality and intentional composition.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
