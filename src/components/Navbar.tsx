"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <div>
        <Image src="/icon.svg" width={50} height={50} alt="Icon"></Image>
        <h1>gallery</h1>
      </div>
      <a href="#gallery" className="navLink">
        Gallery
      </a>
    </nav>
  );
}
