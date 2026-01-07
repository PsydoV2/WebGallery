"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "@/styles/Gallery.module.css";
import galleryData from "@/data/gallery.json";
import { FaDownload } from "react-icons/fa6";

export default function Gallery() {
  const [filterType, setFilterType] = useState("all");
  const [filterOri, setFilterOri] = useState("all");

  const baseURL = "https://www.sfalter.de/FileHosting/Gallery/";

  const filteredItems = galleryData.filter((item) => {
    const typeMatch = filterType === "all" || item.type === filterType;
    const oriMatch = filterOri === "all" || item.orientation === filterOri;
    return typeMatch && oriMatch;
  });

  return (
    <section className={styles.section} id="gallery">
      {/* Filter Bar */}
      <div className={styles.filterBar}>
        <div className={styles.filterGroup}>
          {["all", "poster", "wallpaper"].map((type) => (
            <button
              key={type}
              onClick={() => setFilterType(type)}
              className={filterType === type ? styles.active : ""}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        <div className={styles.filterGroup}>
          {["all", "vertical", "horizontal"].map((ori) => (
            <button
              key={ori}
              onClick={() => setFilterOri(ori)}
              className={filterOri === ori ? styles.active : ""}
            >
              {ori.charAt(0).toUpperCase() + ori.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Animiertes Grid */}
      <motion.div layout className={styles.grid}>
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{
                duration: 0.4,
                ease: [0.23, 1, 0.32, 1], // Custom Cubic Bezier für smoothes Feeling
              }}
              className={styles.card}
            >
              <div className={styles.imageWrapper}>
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  src={`${baseURL}${item.filename}.png`}
                  alt={item.title}
                  loading="lazy"
                />
              </div>

              <div className={styles.info}>
                <h3>{item.title}</h3>
                <span>
                  {item.type} • {item.orientation}
                </span>
              </div>

              <div className={styles.downloadLinks}>
                <a
                  href={`${baseURL}${item.filename}.pdf`}
                  download
                  target="_blank"
                >
                  <FaDownload /> PDF
                </a>
                <a
                  href={`${baseURL}${item.filename}.png`}
                  download
                  target="_blank"
                >
                  <FaDownload /> PNG
                </a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
