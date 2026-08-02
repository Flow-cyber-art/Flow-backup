import { COLORS } from "../theme.js";

/**
 * Znak graficzny FLOWTEX Polska — cztery warstwy o rosnącej "dojrzałości"
 * koloru, nawiązujące do przekroju posadzki (motyw przewodni całej strony).
 * Górna, najwęższa warstwa zawsze przyjmuje aktywny kolor akcentu z theme.js
 * — dzięki temu logo automatycznie dopasowuje się do zmiany palety.
 *
 * Ten sam znak jest dostępny jako samodzielny plik do pobrania:
 * /public/logo-mark.svg (favicon / użycie poza stroną)
 */
export default function LogoMark({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <rect x="10" y="44" width="44" height="8" rx="1.5" fill="#475569" />
      <rect x="15" y="33" width="34" height="8" rx="1.5" fill="#64748B" />
      <rect x="20" y="22" width="24" height="8" rx="1.5" fill="#94A3B8" />
      <rect x="25" y="11" width="14" height="8" rx="1.5" fill={COLORS.accent} />
    </svg>
  );
}
