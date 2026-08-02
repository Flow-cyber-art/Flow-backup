/**
 * KONFIGURACJA KOLORÓW — FLOWTEX Polska
 * ---------------------------------------------------
 * Wszystkie kolory strony w jednym miejscu. Żeby zmienić
 * paletę całej witryny, edytuj obiekt COLORS poniżej —
 * nie trzeba szukać kolorów po komponentach.
 *
 * Dostępne palety: PALETTE_AMBER (bursztynowa), PALETTE_BLUE (grafit/błękit),
 * PALETTE_ACME (granat/biel — wzorowana na acme-polska.pl).
 * Żeby przełączyć, podmień prawą stronę w linii
 * `export const COLORS = ...;` na dole tego pliku.
 * ---------------------------------------------------
 */

// Poprzednia paleta (przemysłowa / bursztyn-żywica) — zachowana do łatwego przywrócenia
const PALETTE_AMBER = {
  darkBg: "#1B1B1D", // główne ciemne tło (nav, stopka, sekcje na ciemno)
  darkBgSecondary: "#111214", // pasek kontaktowy nad nawigacją
  darkBorder: "#33343A", // linie/przerywniki na ciemnym tle
  accent: "#E2A73B", // kolor akcentu — przyciski, ikony, linki
  ctaBorder: "#4A5560", // obrys przycisku-widmo na ciemnym tle
  white: "#F0EEE7", // główny tekst na ciemnym tle
  mutedOnDark: "#B9B7AE", // stonowany tekst na ciemnym tle (akapity)
  mutedOnDarkSecondary: "#8A8D91", // jeszcze bardziej stonowany (stopka)
  lightBg: "#ECEAE4", // tło jasnych sekcji
  textOnLight: "#3A3B3D", // główny tekst na jasnym tle
  mutedOnLight: "#58636D", // etykiety / stonowany tekst na jasnym tle (przyciemniony dla kontrastu WCAG AA — audyt PageSpeed wykazał 3.6:1, poniżej wymaganych 4.5:1)
  borderOnLight: "#D8D6CE", // linie/obramowania na jasnym tle
  accentText: "#3A3B3D", // kolor tekstu na przycisku accent — ciemny, bo accent (bursztyn) jest jasny
};

// Nowa paleta (grafit / granat / niebieski akcent)
const PALETTE_BLUE = {
  darkBg: "#1F2937", // Grafit — główne ciemne tło (nav, stopka, sekcje na ciemno)
  darkBgSecondary: "#0F3D56", // Ciemny granat — pasek kontaktowy nad nawigacją
  darkBorder: "#24455C", // linie/przerywniki na ciemnym tle
  accent: "#0EA5E9", // Niebieski akcent — przyciski, ikony, linki
  ctaBorder: "#334155", // obrys przycisku-widmo na ciemnym tle
  white: "#FFFFFF", // Biały — główny tekst na ciemnym tle
  mutedOnDark: "#CBD5E1", // stonowany tekst na ciemnym tle (akapity)
  mutedOnDarkSecondary: "#94A3B8", // jeszcze bardziej stonowany (stopka)
  lightBg: "#F8FAFC", // Jasne tło — tło jasnych sekcji
  textOnLight: "#1F2937", // główny tekst na jasnym tle (Grafit)
  mutedOnLight: "#64748B", // etykiety / stonowany tekst na jasnym tle
  borderOnLight: "#E2E8F0", // linie/obramowania na jasnym tle
  accentText: "#1F2937", // kolor tekstu na przycisku accent — ciemny, bo accent (błękit) jest jasny
};

// Paleta ACME (granat / biel) — odwzorowana ze zrzutu ekranu
// acme-polska.pl (nawigacja, stopka i przyciski w jednym odcieniu
// głębokiego granatu, na białym tle, minimalna liczba akcentów).
const PALETTE_ACME = {
  darkBg: "#203876", // główny granat — nav, stopka, przyciski, nagłówki na jasnym tle
  darkBgSecondary: "#182C5E", // nieco ciemniejszy granat — pasek kontaktowy nad nawigacją
  darkBorder: "#34467F", // linie/przerywniki na ciemnym tle
  accent: "#203876", // ten sam granat pełni funkcję akcentu (brak osobnego koloru akcentowego na źródłowej stronie)
  ctaBorder: "#3B4F91", // obrys przycisku-widmo na ciemnym tle
  white: "#FFFFFF", // biały — główny tekst na ciemnym tle
  mutedOnDark: "#AEB8D6", // stonowany tekst na ciemnym tle (akapity)
  mutedOnDarkSecondary: "#7C89B3", // jeszcze bardziej stonowany (stopka)
  lightBg: "#FFFFFF", // tło jasnych sekcji — czysta biel jak na źródłowej stronie
  textOnLight: "#203876", // główny tekst / nagłówki na jasnym tle — ten sam granat
  mutedOnLight: "#6B7280", // etykiety / placeholdery na jasnym tle
  borderOnLight: "#C3C9DA", // obramowania pól formularza na jasnym tle
  accentText: "#FFFFFF", // kolor tekstu na przycisku accent — biały, bo accent (granat) jest ciemny (jak na acme-polska.pl)
};

// ---------------------------------------------------
// AKTYWNA PALETA — to jest jedyna linia, którą trzeba
// zmienić, żeby przełączyć kolorystykę całej strony.
// Dostępne: PALETTE_AMBER, PALETTE_BLUE, PALETTE_ACME
// ---------------------------------------------------
export const COLORS = PALETTE_AMBER;

// Kolor tekstu na przyciskach/akcentach — każda paleta sama definiuje,
// czy potrzebuje jasnego czy ciemnego tekstu na swoim kolorze accent
// (np. ciemny tekst na jasnym bursztynie, ale biały tekst na ciemnym granacie ACME)
export const ACCENT_TEXT = COLORS.accentText;

// Kolory diagramu warstw posadzki (LayerStack) — CELOWO niezależne od
// palety UI. Bursztyn/szarości odwzorowują realny wygląd żywicy
// epoksydowej i podłoża, więc zostają bez zmian nawet po zmianie
// kolorystyki reszty strony.
export const LAYER_COLORS = {
  substrate: "#4A5560",
  primer: "#6E7B87",
  leveling: "#9C9C96",
  resin: "#E2A73B",
  topcoat: "#F0D9A8",
};
