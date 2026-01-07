"use client";
import { motion, useScroll, useTransform, easeOut } from "framer-motion";
import styles from "@/styles/Hero.module.css";

export default function Hero() {
  // Verfolgt den Scroll-Fortschritt
  const { scrollY } = useScroll();

  // Parallax-Effekte: Text bewegt sich beim Scrollen leicht nach oben
  const y1 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Varianten für den ersten Lade-Effekt
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: easeOut },
    },
  };

  return (
    <section className={styles.hero}>
      <motion.div
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ y: y1, opacity }} // Scroll-Verknüpfung
      >
        <motion.h1 className={styles.title}>
          <motion.span variants={itemVariants} className={styles.line}>
            Poster <span className={styles.amp}>&</span>
          </motion.span>
          <motion.span variants={itemVariants} className={styles.line}>
            Wallpaper
          </motion.span>
        </motion.h1>

        <motion.div
          className={styles.scrollBadge}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          Scroll to explore
        </motion.div>
      </motion.div>
    </section>
  );
}
