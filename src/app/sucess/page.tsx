"use client";

import { DesktopSucess } from "@/components/desktopSucess";
import { MobileSucess } from "@/components/mobileSucess";
import { useWindowSize } from "rooks";

export default function Home() {
  const { innerWidth } = useWindowSize();
  return (
    <main>
      {innerWidth !== null && innerWidth > 500 ? (
        <DesktopSucess />
      ) : (
        <MobileSucess />
      )}
    </main>
  );
}
