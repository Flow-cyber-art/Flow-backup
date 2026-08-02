import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * React Router nie przewija strony automatycznie przy zmianie trasy
 * (w przeciwieństwie do klasycznej nawigacji przeglądarki). Ten komponent
 * naprawia to zachowanie — przy każdej zmianie ścieżki (np. kliknięciu
 * kafelka usługi) strona wraca na sam initial górę.
 *
 * Wyjątek: jeśli w URL jest hash (#kontakt, #oferta...), zostawiamy
 * przewijanie do tej sekcji zamiast na górę.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        });
      });
    } else {
      // Podwójny requestAnimationFrame gwarantuje, że przeglądarka zdążyła
      // już przeliczyć layout nowej strony (bez tego "scroll anchoring"
      // przeglądarki potrafi przywrócić pozycję względem STAREJ, dłuższej
      // strony i wylądować "w środku" zamiast na górze).
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        });
      });
    }
  }, [pathname, hash]);

  return null;
}
