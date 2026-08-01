"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "@/styles/Gallery.module.css";
import galleryData from "@/data/gallery.json";
import { FaDownload, FaXmark } from "react-icons/fa6";

type GalleryItem = (typeof galleryData)[number];

export default function Gallery() {
  const [filterType, setFilterType] = useState("all");
  const [filterOri, setFilterOri] = useState("all");
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>(
    {}
  );
  const [previewItem, setPreviewItem] = useState<GalleryItem | null>(null);

  const baseURL = "https://www.sfalter.de/FileHosting/Gallery/";

  // Schliesst die Preview per Escape und sperrt das Body-Scrolling, solange sie offen ist.
  useEffect(() => {
    if (!previewItem) return;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPreviewItem(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [previewItem]);

  // Erlaubt Deep-Links wie /?type=poster#gallery (z.B. aus dem Footer).
  // Bewusst als Mount-Effect statt Lazy-State: window ist beim SSR/Static-
  // Export nicht verfuegbar, ein Lazy-Initializer wuerde einen Hydration-
  // Mismatch zwischen Server- (immer "all") und Client-Render erzeugen.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const type = params.get("type");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (type === "poster" || type === "wallpaper") setFilterType(type);
  }, []);

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
              aria-pressed={filterType === type}
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
              aria-pressed={filterOri === ori}
            >
              {ori.charAt(0).toUpperCase() + ori.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Animiertes Grid */}
      {filteredItems.length === 0 ? (
        <p className={styles.emptyState}>
          No items match this filter yet — check back soon.
        </p>
      ) : (
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
                <button
                  type="button"
                  className={styles.imageWrapper}
                  onClick={() => setPreviewItem(item)}
                  aria-label={`Preview ${item.title}`}
                >
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    animate={{ opacity: loadedImages[item.id] ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                    src={`${baseURL}${item.filename}.png`}
                    alt={item.title}
                    loading="lazy"
                    onLoad={() =>
                      setLoadedImages((prev) => ({ ...prev, [item.id]: true }))
                    }
                  />
                </button>

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
                    rel="noopener"
                  >
                    <FaDownload /> PDF
                  </a>
                  <a
                    href={`${baseURL}${item.filename}.png`}
                    download
                    target="_blank"
                    rel="noopener"
                  >
                    <FaDownload /> PNG
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}

      <AnimatePresence>
        {previewItem && (
          <motion.div
            className={styles.lightboxOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setPreviewItem(null)}
            role="dialog"
            aria-modal="true"
            aria-label={previewItem.title}
          >
            <motion.div
              className={styles.lightboxContent}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className={styles.lightboxClose}
                onClick={() => setPreviewItem(null)}
                aria-label="Close preview"
              >
                <FaXmark />
              </button>

              <img
                className={styles.lightboxImage}
                src={`${baseURL}${previewItem.filename}.png`}
                alt={previewItem.title}
              />

              <div className={styles.lightboxInfo}>
                <div>
                  <h3>{previewItem.title}</h3>
                  <span>
                    {previewItem.type} • {previewItem.orientation}
                  </span>
                </div>
                <div className={styles.downloadLinks}>
                  <a
                    href={`${baseURL}${previewItem.filename}.pdf`}
                    download
                    target="_blank"
                    rel="noopener"
                  >
                    <FaDownload /> PDF
                  </a>
                  <a
                    href={`${baseURL}${previewItem.filename}.png`}
                    download
                    target="_blank"
                    rel="noopener"
                  >
                    <FaDownload /> PNG
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
