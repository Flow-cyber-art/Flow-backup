import React from "react";
import { COLORS } from "../theme.js";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft } from "lucide-react";

const SECTIONS = [
  {
    heading: "1. Czym są pliki cookies",
    body: "Pliki cookies (ciasteczka) to niewielkie pliki tekstowe zapisywane przez przeglądarkę internetową na urządzeniu użytkownika podczas odwiedzania strony internetowej. Pozwalają one m.in. rozpoznać urządzenie użytkownika i zapamiętać jego preferencje przy kolejnej wizycie.",
  },
  {
    heading: "2. Administrator",
    body: "Administratorem strony www.flowtex.pl i podmiotem decydującym o wykorzystaniu plików cookies jest FLOWTEX Polska Paweł Najduk, z siedzibą w Ciółkowie Małym (Ciółkowo Małe 32, 07-215 Ciółkowo Małe), NIP: 7621744781. Kontakt: kontakt@flowtex.pl, tel. +48 507 394 552.",
  },
  {
    heading: "3. Jakich plików cookies używamy",
    body: "Strona www.flowtex.pl w chwili obecnej nie wykorzystuje plików cookies analitycznych, statystycznych ani marketingowych i nie prowadzi profilowania użytkowników. Wykorzystywane mogą być wyłącznie pliki niezbędne do prawidłowego działania serwisu (tzw. cookies techniczne/funkcjonalne), na przykład zapamiętujące fakt zapoznania się z niniejszym komunikatem o cookies. Pliki te nie wymagają zgody użytkownika zgodnie z art. 173 ust. 3 ustawy Prawo telekomunikacyjne, ponieważ są niezbędne do świadczenia usługi wyraźnie żądanej przez użytkownika.",
  },
  {
    heading: "4. Czcionki",
    body: "Strona wykorzystuje czcionki (Big Shoulders Display, IBM Plex Sans, IBM Plex Mono) hostowane samodzielnie, na własnym serwerze www.flowtex.pl — pliki czcionek NIE są pobierane z serwerów Google ani żadnego innego podmiotu zewnętrznego. Oznacza to, że wyświetlanie czcionek nie wiąże się z przesyłaniem adresu IP użytkownika do zewnętrznych dostawców.",
  },
  {
    heading: "5. Formularz kontaktowy",
    body: "Wysyłka wiadomości z formularza kontaktowego obsługiwana jest przez zewnętrzny dostawca usługi poczty formularzowej (EmailJS). Usługa ta służy wyłącznie do przekazania treści wiadomości na skrzynkę e-mail administratora i nie zapisuje plików cookies na urządzeniu użytkownika w celach analitycznych ani marketingowych. Zasady przetwarzania danych podanych w formularzu opisane są w Polityce Prywatności.",
  },
  {
    heading: "6. Zmiana ustawień przeglądarki",
    body: "Użytkownik może w każdej chwili samodzielnie zmienić ustawienia dotyczące plików cookies w swojej przeglądarce internetowej — w tym zablokować obsługę cookies lub usunąć już zapisane pliki. Sposób zmiany ustawień zależy od używanej przeglądarki i jest opisany w jej dokumentacji pomocy. Ograniczenie obsługi cookies może wpłynąć na niektóre funkcjonalności strony.",
  },
  {
    heading: "7. Zmiany w Polityce Cookies",
    body: "Jeżeli w przyszłości strona zacznie wykorzystywać dodatkowe pliki cookies (np. narzędzia analityczne lub marketingowe), niniejsza Polityka zostanie odpowiednio zaktualizowana, a w przypadku plików wymagających zgody — użytkownikowi zostanie przedstawiony odpowiedni mechanizm wyrażenia zgody przed ich zapisaniem.",
  },
];

export default function CookiePolicy() {
  return (
    <>
      <Helmet>
        <title>Polityka Cookies | FLOWTEX Polska</title>
        <meta
          name="description"
          content="Polityka plików cookies FLOWTEX Polska — informacje o wykorzystywanych plikach cookies i zasobach zewnętrznych na stronie www.flowtex.pl."
        />
        <link rel="canonical" href="https://www.flowtex.pl/polityka-cookies" />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div style={{ backgroundColor: COLORS.darkBg }}>
        <div className="max-w-4xl mx-auto px-5 md:px-8 py-4 ft-mono text-xs" style={{ color: COLORS.mutedOnDarkSecondary }}>
          <Link to="/" className="hover:opacity-80" style={{ color: COLORS.mutedOnDarkSecondary }}>
            Strona główna
          </Link>{" "}
          <span className="mx-2">/</span>
          <span style={{ color: COLORS.accent }}>Polityka Cookies</span>
        </div>
      </div>

      <section style={{ backgroundColor: COLORS.darkBg }}>
        <div className="max-w-4xl mx-auto px-5 md:px-8 pb-14 md:pb-16">
          <h1
            className="ft-display mt-4"
            style={{ color: COLORS.white, fontSize: "clamp(2rem, 4.5vw, 3rem)", fontWeight: 800 }}
          >
            Polityka Cookies
          </h1>
          <p className="mt-4 max-w-2xl text-base" style={{ color: COLORS.mutedOnDark }}>
            Informacje o plikach cookies i zasobach zewnętrznych wykorzystywanych na stronie FLOWTEX Polska.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <div className="space-y-10">
          {SECTIONS.map((sec) => (
            <div key={sec.heading}>
              <h2 className="ft-display text-xl md:text-2xl mb-3" style={{ fontWeight: 700 }}>
                {sec.heading}
              </h2>
              <p className="text-base leading-relaxed" style={{ color: COLORS.textOnLight }}>
                {sec.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t" style={{ borderColor: COLORS.borderOnLight }}>
          <Link
            to="/"
            className="inline-flex items-center gap-2 ft-mono text-xs uppercase tracking-wide hover:opacity-80"
            style={{ color: COLORS.mutedOnLight }}
          >
            <ArrowLeft size={14} /> Wróć do strony głównej
          </Link>
        </div>
      </section>
    </>
  );
}
