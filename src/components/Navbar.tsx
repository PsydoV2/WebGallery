"use client";

import Image from "next/image";

export default function Navbar() {
  return (
    <nav>
      <div>
        <Image src="/icon.svg" width={50} height={50} alt="Icon"></Image>
        <h1>gallery</h1>
      </div>
    </nav>
  );
}
