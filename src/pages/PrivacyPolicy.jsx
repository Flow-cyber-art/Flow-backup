import React from "react";
import { COLORS } from "../theme.js";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft } from "lucide-react";

const SECTIONS = [
  {
    heading: "1. Administrator danych osobowych",
    body: "Administratorem danych osobowych przetwarzanych w związku z korzystaniem z formularza kontaktowego na stronie www.flowtex.pl jest FLOWTEX Polska Paweł Najduk, z siedzibą w Ciółkowie Małym (Ciółkowo Małe 32, 07-215 Ciółkowo Małe), NIP: 7621744781. Kontakt z administratorem możliwy jest pod adresem e-mail kontakt@flowtex.pl lub telefonicznie pod numerem +48 507 394 552.",
  },
  {
    heading: "2. Cel i podstawa prawna przetwarzania",
    body: "Dane osobowe podane w formularzu kontaktowym (imię i nazwisko, nazwa firmy, adres e-mail, numer telefonu, treść wiadomości) przetwarzane są w celu udzielenia odpowiedzi na przesłane zapytanie drogą telefoniczną lub mailową. Podstawą prawną przetwarzania jest art. 6 ust. 1 lit. a RODO (zgoda osoby, której dane dotyczą) oraz art. 6 ust. 1 lit. f RODO (prawnie uzasadniony interes administratora polegający na prowadzeniu korespondencji handlowej).",
  },
  {
    heading: "3. Dobrowolność podania danych",
    body: "Podanie danych osobowych jest dobrowolne, jednak niezbędne do udzielenia odpowiedzi na przesłane zapytanie. Niepodanie danych uniemożliwi kontakt zwrotny.",
  },
  {
    heading: "4. Okres przechowywania danych",
    body: "Dane osobowe przechowywane są przez okres niezbędny do udzielenia odpowiedzi na zapytanie oraz przez czas prowadzenia ewentualnej dalszej korespondencji handlowej, nie dłużej jednak niż przez okres 3 lat od ostatniego kontaktu, chyba że dłuższy okres przechowywania wynika z przepisów prawa.",
  },
  {
    heading: "5. Odbiorcy danych",
    body: "Dane osobowe mogą być powierzane podmiotom świadczącym na rzecz administratora usługi techniczne, w tym usługi hostingu strony internetowej oraz obsługi poczty elektronicznej wykorzystywanej do przesyłania wiadomości z formularza kontaktowego. Dane nie są przekazywane do państw trzecich ani organizacji międzynarodowych, chyba że wynika to z lokalizacji dostawcy usługi poczty elektronicznej — w takim przypadku transfer odbywa się z zapewnieniem odpowiedniego poziomu ochrony danych zgodnie z wymogami RODO.",
  },
  {
    heading: "6. Prawa osoby, której dane dotyczą",
    body: "Osobie, której dane dotyczą, przysługuje prawo dostępu do swoich danych, ich sprostowania, usunięcia, ograniczenia przetwarzania, przenoszenia danych, wniesienia sprzeciwu wobec przetwarzania, a także prawo do cofnięcia zgody w dowolnym momencie bez wpływu na zgodność z prawem przetwarzania dokonanego przed jej cofnięciem. W celu realizacji powyższych praw należy skontaktować się z administratorem pod adresem kontakt@flowtex.pl.",
  },
  {
    heading: "7. Prawo wniesienia skargi",
    body: "Osobie, której dane dotyczą, przysługuje prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych (ul. Stawki 2, 00-193 Warszawa), jeżeli uzna, że przetwarzanie jej danych osobowych narusza przepisy RODO.",
  },
  {
    heading: "8. Pliki cookies",
    body: "Zasady wykorzystywania plików cookies na stronie www.flowtex.pl opisane są odrębnie w Polityce Cookies, dostępnej pod adresem www.flowtex.pl/polityka-cookies.",
  },
];

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Polityka Prywatności | FLOWTEX Polska</title>
        <meta
          name="description"
          content="Polityka prywatności FLOWTEX Polska — informacje o przetwarzaniu danych osobowych podanych w formularzu kontaktowym."
        />
        <link rel="canonical" href="https://www.flowtex.pl/polityka-prywatnosci" />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div style={{ backgroundColor: COLORS.darkBg }}>
        <div className="max-w-4xl mx-auto px-5 md:px-8 py-4 ft-mono text-xs" style={{ color: COLORS.mutedOnDarkSecondary }}>
          <Link to="/" className="hover:opacity-80" style={{ color: COLORS.mutedOnDarkSecondary }}>
            Strona główna
          </Link>{" "}
          <span className="mx-2">/</span>
          <span style={{ color: COLORS.accent }}>Polityka Prywatności</span>
        </div>
      </div>

      <section style={{ backgroundColor: COLORS.darkBg }}>
        <div className="max-w-4xl mx-auto px-5 md:px-8 pb-14 md:pb-16">
          <h1
            className="ft-display mt-4"
            style={{ color: COLORS.white, fontSize: "clamp(2rem, 4.5vw, 3rem)", fontWeight: 800 }}
          >
            Polityka Prywatności
          </h1>
          <p className="mt-4 max-w-2xl text-base" style={{ color: COLORS.mutedOnDark }}>
            Informacje o przetwarzaniu danych osobowych osób korzystających z formularza kontaktowego
            na stronie FLOWTEX Polska.
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
