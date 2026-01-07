/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
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
      <div className={styles.filterBar}>
        <div className={styles.filterGroup}>
          <button
            onClick={() => setFilterType("all")}
            className={filterType === "all" ? styles.active : ""}
          >
            All
          </button>
          <button
            onClick={() => setFilterType("poster")}
            className={filterType === "poster" ? styles.active : ""}
          >
            Posters
          </button>
          <button
            onClick={() => setFilterType("wallpaper")}
            className={filterType === "wallpaper" ? styles.active : ""}
          >
            Wallpapers
          </button>
        </div>

        <div className={styles.filterGroup}>
          <button
            onClick={() => setFilterOri("all")}
            className={filterOri === "all" ? styles.active : ""}
          >
            All
          </button>
          <button
            onClick={() => setFilterOri("vertical")}
            className={filterOri === "vertical" ? styles.active : ""}
          >
            Vertical
          </button>
          <button
            onClick={() => setFilterOri("horizontal")}
            className={filterOri === "horizontal" ? styles.active : ""}
          >
            Horizontal
          </button>
        </div>
      </div>

      <div className={styles.grid}>
        {filteredItems.map((item) => (
          <div key={item.id} className={styles.card}>
            <div className={styles.imageWrapper}>
              <img
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
              <a href={`${baseURL}${item.filename}.pdf`} download>
                <FaDownload /> PDF
              </a>
              <a href={`${baseURL}${item.filename}.png`} download>
                <FaDownload /> PNG
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
