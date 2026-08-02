import React, { useState, useEffect } from "react";
import { COLORS, ACCENT_TEXT } from "../theme.js";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight } from "lucide-react";
import { LayerStack, LAYERS } from "../components/LayerStack.jsx";
import { HeroCarousel } from "../components/HeroCarousel.jsx";
import { useReveal } from "../hooks/useReveal.js";
import { SERVICES } from "../data/services.js";
import certIcon1 from "../assets/certyfikaty/cert-1.webp";
import certIcon2 from "../assets/certyfikaty/cert-2.webp";
import certIcon3 from "../assets/certyfikaty/cert-3.webp";
import certIcon4 from "../assets/certyfikaty/cert-4.webp";
import pawelPhoto from "../assets/team/pawel-najduk.webp";

const FAQ = [
  {
    q: "Po czym poznać dobrą firmę wykonującą posadzki przemysłowe?",
    a: "Dobra firma wykonawcza prowadzi klienta przez cały proces, a nie tylko układa warstwę żywicy. Kluczowe elementy to: rzetelne badanie i przygotowanie podłoża (wilgotność, wytrzymałość i czystość betonu — to najczęstsza przyczyna reklamacji przy tańszych wykonawcach), dobór systemu posadzkowego dopasowanego do realnych warunków eksploatacji (obciążenia, chemia procesowa, wymogi higieniczne), wykonawstwo własnym, doświadczonym zespołem, udokumentowane certyfikaty i zgodność z normami (ISO, GMP, HACCP) oraz gwarancja i opieka serwisowa po zakończeniu inwestycji. Najlepszym dowodem takiego doświadczenia jest portfolio zrealizowanych obiektów, a nie same deklaracje.",
  },
  {
    q: "Jakie są rodzaje posadzek przemysłowych?",
    a: "Najczęściej stosuje się posadzki żywiczne (epoksydowe i poliuretanowe), posadzki betonowe utwardzane powierzchniowo oraz posadzki specjalistyczne dla przemysłu spożywczego i farmaceutycznego. Dobór technologii zależy od obciążeń, chemii procesowej i wymogów higienicznych obiektu.",
  },
  {
    q: "Ile trwa wykonanie posadzki żywicznej?",
    a: "Czas realizacji zależy od metrażu i liczby warstw, zwykle od kilku dni do kilku tygodni. Uwzględniamy czas na przygotowanie podłoża, gruntowanie, aplikację warstwy żywicznej oraz jej utwardzanie.",
  },
  {
    q: "Czy FLOWTEX Polska realizuje projekty w całej Polsce?",
    a: "Tak, realizujemy projekty na terenie całej Polski, a nasze doświadczenie obejmuje również realizacje międzynarodowe.",
  },
  {
    q: "Jakie certyfikaty i normy spełniają Wasze posadzki?",
    a: "Nasze realizacje spełniają wymogi norm jakościowych i higienicznych stawianych obiektom przemysłowym, w tym standardy zgodne z ISO oraz wymogi GMP i HACCP dla branży spożywczej i farmaceutycznej.",
  },
  {
    q: "Jak wygląda proces wyceny posadzki przemysłowej?",
    a: "Proces zaczyna się od oględzin obiektu lub analizy dokumentacji, następnie przygotowujemy indywidualną wycenę uwzględniającą metraż, wymagany system posadzkowy i harmonogram prac. Wycenę można zamówić przez formularz kontaktowy na stronie.",
  },
  {
    q: "Kto odpowiada za stronę techniczną realizacji w FLOWTEX Polska?",
    a: "Za stroną techniczną każdej realizacji osobiście odpowiada Paweł Najduk, właściciel FLOWTEX Polska z ponad 20-letnim doświadczeniem w branży posadzek przemysłowych i żywicznych oraz setkami zrealizowanych inwestycji w Polsce i za granicą.",
  },
  {
    q: "Jakie doświadczenie ma zespół FLOWTEX Polska?",
    a: "Zespół FLOWTEX Polska dysponuje ponad 20-letnim doświadczeniem w branży, na koncie ma setki zrealizowanych inwestycji o łącznej powierzchni ponad 2,4 mln m² w 7 krajach, dla ponad 180 zakładów przemysłowych, produkcyjnych, spożywczych i farmaceutycznych.",
  },
];

const CERT_ICONS = [certIcon1, certIcon2, certIcon3, certIcon4];

const STATS = [
  { value: "2,4 mln m²", label: "wykonanych posadzek" },
  { value: "20 lat", label: "doświadczenia" },
  { value: "180+", label: "obsłużonych zakładów" },
  { value: "7 krajów", label: "zasięgu realizacji" },
];

// Diagram warstw posadzki w sekcji hero (animowana kolumna po prawej).
// Ustaw na false, żeby całkowicie go ukryć — układ hero automatycznie
// przechodzi wtedy na jedną, wyśrodkowaną kolumnę.
const SHOW_LAYER_DIAGRAM = false;

export default function Home() {
  const [activeLayer, setActiveLayer] = useState(null);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
    consent: false,
    website: "", // honeypot — pole niewidoczne dla ludzi, wypełniane tylko przez boty
  });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState("");
  const [certIconIndex, setCertIconIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCertIconIndex((i) => (i + 1) % CERT_ICONS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const [aboutRef, aboutVisible] = useReveal();
  const [statsRef, statsVisible] = useReveal();
  const [offerRef, offerVisible] = useReveal();
  const offerRemainder = SERVICES.length % 3;
  const offerCtaSpan = offerRemainder === 0 ? 0 : 3 - offerRemainder;
  const [certRef, certVisible] = useReveal();
  const [faqRef, faqVisible] = useReveal();
  const [contactRef, contactVisible] = useReveal();

  useEffect(() => {
    if (!SHOW_LAYER_DIAGRAM) return;
    const id = setInterval(() => {
      setActiveLayer((prev) => (prev === null ? 0 : (prev + 1) % LAYERS.length));
    }, 1800);
    return () => clearInterval(id);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot: jeśli to pole jest wypełnione, to najpewniej bot — udajemy sukces i nic nie wysyłamy.
    if (form.website) {
      setSent(true);
      return;
    }

    if (!form.consent) {
      setSendError("Zaznacz zgodę na przetwarzanie danych osobowych, aby wysłać wiadomość.");
      return;
    }

    setSending(true);
    setSendError("");

    const templateParams = {
      name: form.name,
      company: form.company,
      email: form.email,
      phone: form.phone,
      message: form.message,
    };

    try {
      // @emailjs/browser jest potrzebny wyłącznie w momencie wysyłki
      // formularza — ładujemy go dynamicznie zamiast dołączać do
      // głównego bundla (mniej nieużywanego JS na starcie strony).
      const { default: emailjs } = await import("@emailjs/browser");
      await Promise.all([
        emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ADMIN_ID,
          templateParams,
          { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
        ),
        emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_CLIENT_ID,
          templateParams,
          { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
        ),
      ]);
      setSent(true);
    } catch (err) {
      console.error("Błąd wysyłki formularza kontaktowego:", err);
      setSendError("Nie udało się wysłać wiadomości. Spróbuj ponownie lub napisz na kontakt@flowtex.pl.");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>FLOWTEX Polska | Posadzki przemysłowe i żywiczne – projektowanie i wykonawstwo</title>
        <meta
          name="description"
          content="FLOWTEX Polska projektuje i wykonuje posadzki żywiczne oraz przemysłowe dla zakładów produkcyjnych, spożywczych i farmaceutycznych. Cięcie diamentowe, serwis i naprawa posadzek w całej Polsce."
        />
        <link rel="canonical" href="https://www.flowtex.pl/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQ.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.a,
              },
            })),
          })}
        </script>
      </Helmet>

      {/* HERO */}
      <section className="relative overflow-hidden" style={{ backgroundColor: COLORS.darkBg }}>
        <HeroCarousel />
        <div
          className={`max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24 items-center relative z-10 ${
            SHOW_LAYER_DIAGRAM
              ? "grid md:grid-cols-2 gap-10 md:gap-6"
              : "text-center max-w-3xl"
          }`}
        >
          <div>
            <div className="ft-mono text-xs ft-tracking-wide uppercase mb-5" style={{ color: COLORS.white }}>
              Posadzki przemysłowe — warstwa po warstwie
            </div>
            <h1
              className="ft-display ft-hero-heading tracking-tight"
              style={{
                color: COLORS.white,
                fontSize: "clamp(1.9rem, 3.4vw, 2.75rem)",
                fontWeight: 800,
                textShadow: `0 2px 16px ${COLORS.darkBg}99`,
              }}
            >
              TRWAŁOŚĆ, KTÓRĄ WIDAĆ.
              <br />
              JAKOŚĆ, KTÓRA ZOSTAJE NA LATA.
            </h1>
            <p
              className={`mt-6 text-base md:text-lg ${SHOW_LAYER_DIAGRAM ? "max-w-md" : "max-w-2xl mx-auto"}`}
              style={{ color: COLORS.mutedOnDark }}
            >
              Projektujemy i wykonujemy posadzki żywiczne i przemysłowe dla zakładów
              produkcyjnych, spożywczych i farmaceutycznych — od podłoża po warstwę ochronną.
            </p>
            <div className={`mt-8 flex flex-wrap gap-4 ${SHOW_LAYER_DIAGRAM ? "" : "justify-center"}`}>
              <a
                href="#kontakt"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-sm ft-mono text-xs tracking-wider uppercase hover:opacity-90 transition"
                style={{ backgroundColor: COLORS.accent, color: ACCENT_TEXT, fontWeight: 600 }}
              >
                Wycena projektu <ArrowRight size={15} />
              </a>
              <a
                href="#oferta"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-sm ft-mono text-xs tracking-wider uppercase border ft-outline-btn transition"
                style={{ borderColor: COLORS.ctaBorder, color: COLORS.white }}
              >
                Zobacz ofertę
              </a>
            </div>
          </div>

          {SHOW_LAYER_DIAGRAM && (
            <div className="ft-hero-visual rounded-sm overflow-hidden border" style={{ borderColor: COLORS.darkBorder }}>
              <LayerStack variant="hero" active={activeLayer} />
            </div>
          )}
        </div>
        <div className="relative z-10">
          <LayerStack variant="divider" />
        </div>
      </section>

      {/* STATS */}
      <section ref={statsRef} className="border-b" style={{ borderColor: COLORS.borderOnLight }}>
        <div
          className={`max-w-7xl mx-auto px-5 md:px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 reveal ${
            statsVisible ? "visible" : ""
          }`}
        >
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="ft-display" style={{ fontSize: "2.2rem", fontWeight: 700, color: COLORS.darkBg }}>
                {s.value}
              </div>
              <div className="ft-mono text-xs uppercase tracking-wide mt-1" style={{ color: COLORS.mutedOnLight }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* O NAS */}
      <section id="o-nas" ref={aboutRef} className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28">
        <div className={`grid md:grid-cols-12 gap-10 reveal ${aboutVisible ? "visible" : ""}`}>
          <div className="md:col-span-4">
            <div className="ft-mono text-xs ft-tracking-wide uppercase mb-3" style={{ color: COLORS.accent }}>
              O firmie
            </div>
            <h2 className="ft-display text-3xl md:text-4xl" style={{ fontWeight: 700 }}>
              Ponad 20 lat doświadczenia. Nowy rozdział tej samej historii.
            </h2>
          </div>
          <div className="md:col-span-8 space-y-5 text-base md:text-lg" style={{ color: COLORS.textOnLight }}>
            <p>
              FLOWTEX Polska powstała z przekonania, że najwyższa jakość rodzi się z doświadczenia,
              odpowiedzialności i bliskiej współpracy z klientem. Choć marka jest nowa, stoi za nią
              ponad dwudziestoletnie doświadczenie zdobywane podczas realizacji setek tysięcy metrów
              kwadratowych posadzek przemysłowych w Polsce i za granicą.
            </p>
            <p>
              Specjalizujemy się w projektowaniu i wykonywaniu posadzek żywicznych dla zakładów
              produkcyjnych, magazynów, centrów logistycznych oraz obiektów przemysłu spożywczego,
              farmaceutycznego i chemicznego. Każdą realizację rozpoczynamy od dokładnej analizy
              potrzeb inwestora i warunków pracy posadzki. Dzięki temu dobieramy rozwiązania, które
              nie tylko spełniają wymagania techniczne, ale przede wszystkim zapewniają wieloletnią
              trwałość.
            </p>
            <p>
              W FLOWTEX Polska wierzymy, że najlepszą reklamą są realizacje, które po wielu latach
              nadal spełniają swoją funkcję. To właśnie dlatego nasi klienci wracają do nas przy
              kolejnych inwestycjach i polecają nas dalej.
            </p>
            <p style={{ fontWeight: 600 }}>
              FLOWTEX Polska. Ponad 20 lat doświadczenia. Rodzinna odpowiedzialność. Nowoczesne
              rozwiązania dla przemysłu.
            </p>
          </div>
        </div>

        <div
          className="mt-12 md:mt-16 flex flex-col sm:flex-row overflow-hidden"
          style={{ backgroundColor: COLORS.lightBg, border: `1px solid ${COLORS.borderOnLight}` }}
        >
          <div className="sm:w-64 md:w-80 flex-shrink-0">
            <img
              src={pawelPhoto}
              alt="Paweł Najduk, właściciel i dyrektor techniczny FLOWTEX Polska"
              width="700"
              height="875"
              loading="lazy"
              decoding="async"
              className="w-full h-72 sm:h-full object-cover"
              style={{ objectPosition: "50% 15%" }}
            />
          </div>
          <div className="p-6 md:p-8 flex flex-col justify-center">
            <div className="ft-display text-xl md:text-2xl" style={{ fontWeight: 700 }}>
              Paweł Najduk
            </div>
            <div className="ft-mono text-xs uppercase ft-tracking-wide mb-3" style={{ color: COLORS.textOnLight }}>
              Właściciel i dyrektor techniczny
            </div>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: COLORS.mutedOnLight }}>
              Osobiście nadzoruje techniczną stronę każdej realizacji FLOWTEX Polska — od doboru
              systemu posadzkowego, przez przygotowanie podłoża, po odbiór końcowy inwestycji.
              Doświadczenie budował m.in. jako współwłaściciel firmy ACME Polska, odpowiedzialny za
              stronę techniczną realizowanych tam projektów. Rozpoznawalna postać w branży, ceniona
              za rzetelne doradztwo techniczne przy doborze systemów posadzkowych.
            </p>
          </div>
        </div>
      </section>

      {/* OFERTA — kafelki linkujące do podstron usług */}
      <section id="oferta" ref={offerRef} style={{ backgroundColor: COLORS.darkBg }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28">
          <div className={`mb-12 reveal ${offerVisible ? "visible" : ""}`}>
            <div className="ft-mono text-xs ft-tracking-wide uppercase mb-3" style={{ color: COLORS.white }}>
              Nasza oferta
            </div>
            <h2 className="ft-display text-3xl md:text-4xl" style={{ color: COLORS.white, fontWeight: 700 }}>
              Od cięcia betonu po gotową posadzkę
            </h2>
          </div>
          <div
            className={`grid md:grid-cols-3 gap-px reveal ${offerVisible ? "visible" : ""}`}
            style={{ backgroundColor: COLORS.darkBorder }}
          >
            {SERVICES.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.slug}
                  to={`/${s.slug}`}
                  className="p-7 md:p-8 group ft-tile transition block"
                  style={{ backgroundColor: COLORS.darkBg }}
                >
                  <Icon size={26} style={{ color: COLORS.white }} />
                  <h3 className="ft-display text-xl mt-4 mb-2" style={{ color: COLORS.white, fontWeight: 700 }}>
                    {s.title}
                  </h3>
                  <p className="text-sm mb-3" style={{ color: COLORS.mutedOnDark }}>
                    {s.shortDesc}
                  </p>
                  <span
                    className="ft-mono text-xs uppercase tracking-wide inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                    style={{ color: COLORS.white }}
                  >
                    Dowiedz się więcej <ArrowRight size={13} />
                  </span>
                </Link>
              );
            })}
            {offerCtaSpan > 0 && (
              <a
                href="#kontakt"
                className={`p-7 md:p-8 group ft-tile transition flex ${offerCtaSpan === 3 ? "flex-row items-center gap-5" : "flex-col justify-center"}`}
                style={{ backgroundColor: COLORS.accent, gridColumn: `span ${offerCtaSpan} / span ${offerCtaSpan}` }}
              >
                <ArrowRight size={26} className="shrink-0" style={{ color: ACCENT_TEXT }} />
                <div>
                  <h3 className="ft-display text-xl mb-2" style={{ color: ACCENT_TEXT, fontWeight: 700 }}>
                    Nie wiesz, czego potrzebujesz?
                  </h3>
                  <p className="text-sm" style={{ color: ACCENT_TEXT, opacity: 0.85 }}>
                    Umów bezpłatną wycenę i doradztwo techniczne.
                  </p>
                </div>
              </a>
            )}
          </div>
        </div>
      </section>

      {/* CERTYFIKATY / DYSTRYBUCJA */}
      <section id="certyfikaty" ref={certRef} className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28">
        <div className={`grid md:grid-cols-2 gap-12 reveal ${certVisible ? "visible" : ""}`}>
          <div>
            <div className="ft-mono text-xs ft-tracking-wide uppercase mb-3" style={{ color: COLORS.accent }}>
              Certyfikaty
            </div>
            <h2 className="ft-display text-3xl mb-4" style={{ fontWeight: 700 }}>
              Zgodność z normami branżowymi
            </h2>
            <p className="text-base" style={{ color: COLORS.textOnLight }}>
              Nasze realizacje spełniają wymogi jakościowe i higieniczne stawiane obiektom
              przemysłowym, spożywczym i farmaceutycznym.
            </p>
          </div>
          <div className="flex items-center gap-6 md:gap-8">
            <div className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-[300px] md:h-[300px] flex-shrink-0">
              {CERT_ICONS.map((icon, i) => (
                <img
                  key={icon}
                  src={icon}
                  alt="Certyfikat autoryzowanego wykonawcy"
                  width="300"
                  height="300"
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-contain transition-opacity duration-700 ease-in-out"
                  style={{ opacity: certIconIndex === i ? 1 : 0 }}
                />
              ))}
            </div>
            <div>
              <div className="ft-mono text-xs ft-tracking-wide uppercase mb-3" style={{ color: COLORS.accent }}>
                Certyfikacja
              </div>
              <h2 className="ft-display text-3xl mb-4" style={{ fontWeight: 700 }}>
                Autoryzowany wykonawca
              </h2>
              <p className="text-base" style={{ color: COLORS.textOnLight }}>
                FLOWTEX Polska jest autoryzowanym wykonawcą systemów posadzkowych
                w technologiach: Flowcrete, Sika, Sto, Aco, Polysto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" ref={faqRef} className="max-w-4xl mx-auto px-5 md:px-8 py-20 md:py-28">
        <div className={`reveal ${faqVisible ? "visible" : ""}`}>
          <div className="ft-mono text-xs ft-tracking-wide uppercase mb-3" style={{ color: COLORS.accent }}>
            FAQ
          </div>
          <h2 className="ft-display text-3xl md:text-4xl mb-8" style={{ fontWeight: 700 }}>
            Najczęściej zadawane pytania
          </h2>
          <div className="divide-y" style={{ borderColor: COLORS.borderOnLight }}>
            {FAQ.map((item) => (
              <details key={item.q} className="group py-5">
                <summary className="flex items-center justify-between cursor-pointer list-none font-medium text-base md:text-lg">
                  <span>{item.q}</span>
                  <span
                    className="ft-mono text-lg transition-transform group-open:rotate-45"
                    style={{ color: COLORS.accent }}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm md:text-base" style={{ color: COLORS.textOnLight }}>
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* KONTAKT */}
      <section id="kontakt" ref={contactRef} style={{ backgroundColor: COLORS.darkBg }}>
        <div
          className={`max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28 grid md:grid-cols-2 gap-12 reveal ${
            contactVisible ? "visible" : ""
          }`}
        >
          <div>
            <div className="ft-mono text-xs ft-tracking-wide uppercase mb-3" style={{ color: COLORS.white }}>
              Kontakt
            </div>
            <h2 className="ft-display text-3xl md:text-4xl mb-6" style={{ fontWeight: 700, color: COLORS.white }}>
              Porozmawiajmy o Twoim projekcie
            </h2>
            <div className="space-y-4 ft-mono text-sm" style={{ color: COLORS.mutedOnDark }}>
              <div className="flex items-center gap-3">FLOWTEX Polska</div>
              <div className="flex items-center gap-3">Paweł Najduk</div>
              <div className="flex items-center gap-3">NIP: 7621744781</div>
              <div className="flex items-center gap-3">Ciółkowo Małe 32, 07-215 Ciółkowo Małe</div>
              <div className="flex items-center gap-3">tel. +48 507 394 552</div>
              <div className="flex items-center gap-3">kontakt@flowtex.pl</div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-sm p-6 md:p-8 space-y-4">
            {sent ? (
              <div className="py-10 text-center">
                <div className="ft-display text-2xl mb-2" style={{ fontWeight: 700 }}>
                  Dziękujemy!
                </div>
                <p className="text-sm" style={{ color: COLORS.mutedOnLight }}>
                  Wiadomość została wysłana. Odezwiemy się wkrótce.
                </p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    required
                    placeholder="Imię i nazwisko"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="border px-3 py-2 text-sm rounded-sm outline-none focus:ring-2"
                    style={{ borderColor: COLORS.borderOnLight }}
                  />
                  <input
                    placeholder="Nazwa firmy"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="border px-3 py-2 text-sm rounded-sm outline-none focus:ring-2"
                    style={{ borderColor: COLORS.borderOnLight }}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    required
                    type="email"
                    placeholder="E-mail"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="border px-3 py-2 text-sm rounded-sm outline-none focus:ring-2"
                    style={{ borderColor: COLORS.borderOnLight }}
                  />
                  <input
                    placeholder="Telefon"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="border px-3 py-2 text-sm rounded-sm outline-none focus:ring-2"
                    style={{ borderColor: COLORS.borderOnLight }}
                  />
                </div>
                <textarea
                  required
                  placeholder="Wiadomość"
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full border px-3 py-2 text-sm rounded-sm outline-none focus:ring-2"
                  style={{ borderColor: COLORS.borderOnLight }}
                />

                {/* Honeypot — pole ukryte przed ludźmi (CSS + tabIndex), boty często je wypełniają */}
                <input
                  type="text"
                  name="website"
                  value={form.website}
                  onChange={(e) => setForm({ ...form, website: e.target.value })}
                  tabIndex={-1}
                  autoComplete="off"
                  style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
                  aria-hidden="true"
                />

                <label className="flex items-start gap-3 text-xs" style={{ color: COLORS.mutedOnLight }}>
                  <input
                    type="checkbox"
                    required
                    checked={form.consent}
                    onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                    className="mt-0.5 flex-shrink-0"
                  />
                  <span>
                    Wyrażam zgodę na przetwarzanie moich danych osobowych podanych w formularzu
                    kontaktowym przez FLOWTEX Polska Paweł Najduk z siedzibą w Ciółkowie Małym,
                    w celu udzielenia odpowiedzi na moje zapytanie drogą telefoniczną lub mailową. Mam
                    świadomość, że podanie danych jest dobrowolne, ale niezbędne do realizacji
                    powyższego celu. Więcej informacji na temat przetwarzania danych osobowych, w tym
                    przysługujących mi praw, znajduje się w{" "}
                    <a
                      href="https://www.flowtex.pl/polityka-prywatnosci"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                      style={{ color: COLORS.ctaBorder }}
                    >
                      Polityce Prywatności.
                    </a>{" "}
                    (wymagane)
                  </span>
                </label>

                {sendError && (
                  <p className="text-sm" style={{ color: "#B91C1C" }}>
                    {sendError}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full py-3 rounded-sm ft-mono text-xs tracking-wider uppercase disabled:opacity-60"
                  style={{ backgroundColor: COLORS.accent, color: ACCENT_TEXT, fontWeight: 600 }}
                >
                  {sending ? "Wysyłanie..." : "Wyślij wiadomość"}
                </button>
              </>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
