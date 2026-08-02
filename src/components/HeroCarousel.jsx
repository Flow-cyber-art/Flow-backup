import React, { useEffect, useMemo, useState } from "react";
import { COLORS } from "../theme.js";

// Automatyczne wczytanie WSZYSTKICH zdjęć z folderu src/assets/hero-carousel/.
// Wystarczy wrzucić tam nowe pliki (.jpg/.jpeg/.png/.webp) — nie trzeba nic
// zmieniać w kodzie. Kolejność wyświetlania = kolejność alfabetyczna nazw
// plików (patrz README.txt w tym folderze).
const modules = import.meta.glob("../assets/hero-carousel/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}", {
  eager: true,
  import: "default",
});

const SLIDES = Object.keys(modules)
  .sort()
  .map((path) => modules[path]);

const INTERVAL_MS = 6000;

export function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const count = SLIDES.length;

  useEffect(() => {
    if (count < 2) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, [count]);

  // Dwie warstwy nakładki:
  // 1) ciemny scrim w kolorze darkBg (dominujący) — gwarantuje czytelność
  //    białego tekstu niezależnie od jasności zdjęcia.
  // 2) cieńszy "wash" w kolorze accent danej palety — to dzięki niemu
  //    nakładka zmienia barwę razem z paletą (złota w bursztynowej,
  //    błękitna w niebieskiej, granatowa w ACME).
  const scrimStyle = useMemo(() => ({ backgroundColor: COLORS.darkBg, opacity: 0.62 }), []);
  const tintStyle = useMemo(() => ({ backgroundColor: COLORS.accent, opacity: 0.28 }), []);

  // Brak zdjęć w folderze — nie renderujemy nic, hero zostaje na jednolitym
  // tle darkBg tak jak wcześniej (patrz Home.jsx: div ma ustawiony backgroundColor).
  if (count === 0) return null;

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {SLIDES.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          width="1920"
          height="1080"
          // Pierwszy slajd (i === 0) to zwykle LCP tej strony — ładujemy go
          // od razu z wysokim priorytetem. Pozostałe slajdy są i tak w DOM
          // (potrzebne do płynnego przejścia opacity), ale przeglądarka
          // pobiera je z niższym priorytetem / leniwie, więc nie konkurują
          // o pasmo z pierwszym, widocznym obrazem.
          loading={i === 0 ? "eager" : "lazy"}
          fetchpriority={i === 0 ? "high" : "low"}
          decoding={i === 0 ? "sync" : "async"}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
          style={{ opacity: i === index ? 1 : 0 }}
        />
      ))}
      {/* Nakładka: ciemny scrim (czytelność) + wash w kolorze accent (barwa palety) */}
      <div className="absolute inset-0" style={scrimStyle} />
      <div className="absolute inset-0" style={tintStyle} />

      {count > 1 && (
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Slajd ${i + 1}`}
              onClick={() => setIndex(i)}
              className="w-2 h-2 rounded-full transition-opacity"
              style={{
                backgroundColor: COLORS.white,
                opacity: i === index ? 1 : 0.4,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
