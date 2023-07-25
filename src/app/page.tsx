"use client";

import { useWindowSize } from "rooks";
import { DesktopPage } from "@/components/desktopIntro";
import { MobilePage } from "@/components/mobileIntro";

export default function Home() {
  const { innerWidth } = useWindowSize();
  return (
    <main>
      {innerWidth !== null && innerWidth > 768 ? (
        <DesktopPage />
      ) : (
        <MobilePage />
      )}
    </main>
  );
}
