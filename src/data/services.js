import { Droplets, ShieldAlert, Ruler, Layers, Waves, Building2 } from "lucide-react";

/*
  Każdy wpis = jedna usługa = jedna podstrona pod adresem /{slug}.
  Treści są przykładowe (placeholder) — podmień na rzeczywiste opisy,
  zdjęcia realizacji i dokładne parametry techniczne.
*/
export const SERVICES = [
  {
    slug: "posadzki-zywiczne",
    icon: Droplets,
    title: "Posadzki żywiczne",
    shortDesc: "Bezspoinowe posadzki epoksydowe i poliuretanowe dla hal produkcyjnych i magazynów.",
    metaDescription:
      "Posadzki żywiczne FLOWTEX Polska — epoksydowe i poliuretanowe posadzki przemysłowe dla zakładów produkcyjnych, spożywczych i farmaceutycznych.",
    intro:
      "Posadzki żywiczne to bezspoinowe, odporne chemicznie i mechanicznie nawierzchnie stosowane tam, gdzie liczy się higiena, wytrzymałość i estetyka. Wykonujemy systemy epoksydowe i poliuretanowe dopasowane do obciążeń i specyfiki procesowej obiektu.",
    sections: [
      {
        heading: "Rodzaje posadzek żywicznych",
        body: "Posadzki epoksydowe sprawdzają się tam, gdzie liczy się odporność na obciążenia mechaniczne i chemikalia — w magazynach, halach produkcyjnych i laboratoriach. Tworzą twardą, szczelną powłokę łatwą w utrzymaniu czystości. Posadzki poliuretanowe są bardziej elastyczne i lepiej znoszą wahania temperatury, dlatego stosuje się je w chłodniach, magazynach spożywczych i pomieszczeniach o zmiennych warunkach cieplnych. Dobieramy system żywiczny indywidualnie, na podstawie obciążeń, chemii procesowej i wymagań higienicznych konkretnego obiektu.",
      },
      {
        heading: "Zastosowanie w różnych branżach",
        body: "Dzięki odporności na wodę, oleje i smary posadzki żywiczne dobrze sprawdzają się w halach produkcyjnych, warsztatach i magazynach — a krótki czas instalacji ogranicza przestoje zakładu. W wersjach antystatycznych (ESD) stosujemy je w halach elektroniki i pomieszczeniach czystych. Osobną grupę stanowią realizacje dla przemysłu spożywczego i farmaceutycznego, gdzie kluczowa jest odporność na tłuszcze, kwasy, wysoką temperaturę mycia parowego oraz zgodność z wymogami GMP i HACCP.",
      },
      {
        heading: "Korzyści i utrzymanie",
        body: "Bezspoinowa, gładka powierzchnia ogranicza gromadzenie się brudu i ułatwia utrzymanie higieny — to istotne w miejscach takich jak zakłady spożywcze czy pomieszczenia produkcyjne o podwyższonych wymaganiach czystości. Ewentualne uszkodzenia posadzki żywicznej można naprawiać punktowo, bez konieczności wymiany całej nawierzchni, co obniża koszty eksploatacji w dłuższej perspektywie.",
      },
    ],
    highlights: [
      "Systemy epoksydowe o grubości od 0,5 mm do kilku milimetrów, w zależności od obciążeń",
      "Warianty antystatyczne (ESD) dla hal elektroniki i pomieszczeń czystych",
      "Posadzki odporne na tłuszcze, kwasy i wysokie temperatury mycia parowego — dla przemysłu spożywczego",
      "Wykończenia matowe, półpołysk i połysk, w szerokiej palecie kolorów RAL",
      "Możliwość realizacji w ruchu ciągłym zakładu (etapowanie prac)",
    ],
    closing:
      "Każdy projekt zaczynamy od analizy podłoża i obciążeń, a kończymy na warstwie ochronnej dobranej do warunków eksploatacji.",
  },
  {
    slug: "systemy-odbojowe",
    icon: ShieldAlert,
    title: "Systemy odbojowe i ochrona ścian",
    shortDesc: "Odboje, narożniki i okładziny ochronne zabezpieczające konstrukcję przed uszkodzeniami.",
    metaDescription:
      "Systemy odbojowe i ochrona ścian FLOWTEX Polska — zabezpieczenie hal przemysłowych przed uszkodzeniami mechanicznymi w strefach transportu.",
    intro:
      "W strefach ruchu wózków widłowych i transportu wewnętrznego ściany oraz słupy konstrukcyjne narażone są na uszkodzenia mechaniczne. Montujemy systemy odbojowe, narożniki i okładziny ścienne ograniczające koszty napraw i przestoje.",
    sections: [
      {
        heading: "Rodzaje zabezpieczeń",
        body: "W ofercie mamy odboje najazdowe montowane wzdłuż tras transportu wewnętrznego, barierki oddzielające ciągi piesze od ruchu wózków widłowych, osłony narożników i słupów konstrukcyjnych w strefach manewrowych oraz panele ścienne odporne na uderzenia, które w halach spożywczych dodatkowo można myć pod ciśnieniem.",
      },
      {
        heading: "Gdzie stosować",
        body: "Największe ryzyko uszkodzeń występuje przy dokach załadunkowych, na skrzyżowaniach ciągów transportowych, przy wjazdach do magazynów wysokiego składowania oraz w wąskich korytarzach między regałami. To właśnie w tych miejscach zabezpieczenia najszybciej się zwracają, ograniczając koszty napraw konstrukcji i przestojów.",
      },
      {
        heading: "Korzyści",
        body: "Dobrze zaprojektowany system odbojowy zmniejsza ryzyko uszkodzeń ścian, słupów i instalacji, a tym samym ogranicza kosztowne naprawy i przestoje produkcyjne. Dodatkowo kolorystyka odbojów może być zgodna z systemem oznakowania BHP obowiązującym w zakładzie, co poprawia czytelność stref ruchu.",
      },
    ],
    highlights: [
      "Odboje najazdowe i barierki oddzielające ciągi piesze od transportu wewnętrznego",
      "Ochrona narożników i słupów w strefach manewrowych",
      "Panele ścienne odporne na uderzenia, myte pod ciśnieniem w halach spożywczych",
      "Kolorystyka zgodna z systemem oznakowania BHP zakładu",
    ],
    closing:
      "Rozmieszczenie zabezpieczeń projektujemy na podstawie realnych tras transportu wewnętrznego w obiekcie.",
  },
  {
    slug: "technika-diamentowa",
    icon: Ruler,
    title: "Technika diamentowa",
    shortDesc: "Cięcie i wiercenie w betonie, naprawa posadzek przemysłowych.",
    metaDescription:
      "Technika diamentowa FLOWTEX Polska — cięcie i wiercenie w betonie, wycinanie dylatacji, naprawy posadzek przemysłowych.",
    intro:
      "Precyzyjne cięcie i wiercenie diamentowe wykorzystujemy zarówno przy nowych realizacjach, jak i przy naprawach istniejących posadzek — od wycinania dylatacji, przez otwory instalacyjne, po demontaż uszkodzonych fragmentów.",
    sections: [
      {
        heading: "Zakres usług",
        body: "Wykonujemy cięcie dylatacji konstrukcyjnych i pozornych zarówno w świeżym, jak i istniejącym betonie, wiercenie otworów instalacyjnych o różnych średnicach oraz punktowe wycinanie i wymianę uszkodzonych fragmentów posadzki bez remontu całej powierzchni.",
      },
      {
        heading: "Zastosowania",
        body: "Technika diamentowa towarzyszy nam przy wykonywaniu nowych dylatacji w świeżo wylanym betonie, przy przewiertach pod instalacje elektryczne i sanitarne, a także przy naprawach — gdy trzeba precyzyjnie usunąć uszkodzony fragment posadzki, nie naruszając otaczającej nawierzchni.",
      },
      {
        heading: "Dlaczego metoda diamentowa",
        body: "Cięcie i wiercenie diamentowe daje dużą precyzję cięcia przy minimalnych drganiach i pękaniu krawędzi. Prace prowadzimy metodą mokrą, ograniczającą pylenie, dzięki czemu można je bezpiecznie wykonywać w czynnych halach produkcyjnych, bez konieczności wstrzymywania pracy całego zakładu.",
      },
    ],
    highlights: [
      "Cięcie dylatacji konstrukcyjnych i pozornych w świeżym oraz istniejącym betonie",
      "Wiercenie otworów instalacyjnych o różnych średnicach",
      "Wycinanie i wymiana lokalnych uszkodzeń posadzki bez konieczności remontu całej powierzchni",
      "Prace realizowane z ograniczeniem pyłu (metoda mokra) — bezpieczne w czynnych halach",
    ],
    closing:
      "Technikę diamentową łączymy najczęściej z naprawą punktową posadzek żywicznych i betonowych.",
  },
  {
    slug: "betonowe-posadzki-przemyslowe",
    icon: Layers,
    title: "Betonowe posadzki przemysłowe",
    shortDesc: "Posadzki betonowe utwardzane powierzchniowo — podstawa pod magazyny i hale produkcyjne.",
    metaDescription:
      "Betonowe posadzki przemysłowe FLOWTEX Polska — posadzki utwardzane powierzchniowo, zbrojone włóknami, dla magazynów i hal produkcyjnych.",
    intro:
      "Betonowa posadzka przemysłowa to podstawa większości hal magazynowych i produkcyjnych. Wykonujemy posadzki utwardzane powierzchniowo (posypka lub zacierka), zbrojone tradycyjnie lub włóknami stalowymi bądź syntetycznymi.",
    sections: [
      {
        heading: "Warianty wykonania",
        body: "Powierzchnię betonu utwardzamy posypką mineralną lub kwarcową, co zwiększa odporność na ścieranie w strefach ruchu wózków widłowych. Zbrojenie dobieramy do obciążeń — rozproszone włóknami stalowymi lub polipropylenowymi albo tradycyjne, prętowe, przy większych rozpiętościach i obciążeniach punktowych.",
      },
      {
        heading: "Zastosowania",
        body: "Betonowe posadzki przemysłowe sprawdzają się przede wszystkim w halach magazynowych wysokiego składowania, na placach manewrowych i w strefach produkcyjnych, gdzie kluczowa jest nośność i odporność na obciążenia od regałów oraz wózków widłowych.",
      },
      {
        heading: "Dylatacje i wykończenie",
        body: "Dylatacje konstrukcyjne i pozorne wykonujemy zgodnie z projektem technologicznym obiektu, co ogranicza ryzyko niekontrolowanego pękania płyty. Taka posadzka może funkcjonować samodzielnie albo posłużyć jako podłoże pod docelową warstwę żywiczną, jeśli w przyszłości zajdzie taka potrzeba.",
      },
    ],
    highlights: [
      "Utwardzanie powierzchniowe posypką mineralną lub kwarcową",
      "Zbrojenie rozproszone włóknami stalowymi lub polipropylenowymi",
      "Dylatacje konstrukcyjne i pozorne wykonywane zgodnie z projektem technologicznym",
      "Możliwość późniejszego wykończenia warstwą żywiczną",
    ],
    closing:
      "To rozwiązanie sprawdza się jako samodzielna nawierzchnia magazynowa lub jako podłoże pod docelową posadzkę żywiczną.",
  },
  {
    slug: "serwis-posadzek-i-kanalizacji",
    icon: Waves,
    title: "Serwis posadzek i kanalizacji",
    shortDesc: "Naprawy, renowacja betonu i udrażnianie instalacji kanalizacyjnych w zakładach przemysłowych.",
    metaDescription:
      "Serwis posadzek i kanalizacji FLOWTEX Polska — naprawa uszkodzeń betonu i żywicy, kamerowanie oraz udrażnianie ciągów kanalizacyjnych.",
    intro:
      "Poza wykonawstwem nowych nawierzchni prowadzimy również serwis istniejących posadzek i instalacji kanalizacyjnych — od drobnych napraw punktowych, przez renowację uszkodzonego betonu, po kamerowanie i udrażnianie rur.",
    sections: [
      {
        heading: "Naprawy posadzek i renowacja betonu",
        body: "Usuwamy odpryski, ubytki mechaniczne oraz uszkodzenia dylatacji, a przy poważniejszych zniszczeniach przeprowadzamy renowację podłoża — w tym naprawę odspojonej lub spękanej warstwy żywicznej i betonowej. Zamiast wymiany całej powierzchni, punktowo wzmacniamy i uzupełniamy uszkodzone miejsca, co pozwala ograniczyć koszty i czas przestoju.",
      },
      {
        heading: "Serwis kanalizacji",
        body: "Wykonujemy kamerowanie ciągów kanalizacyjnych, dzięki czemu można precyzyjnie zdiagnozować przyczynę niedrożności lub nieszczelności przed podjęciem prac naprawczych. Udrażnianie rur prowadzimy metodą mechaniczną lub chemiczną, dobraną do charakteru osadu, tak aby efekt był trwały, a nie tylko doraźny.",
      },
      {
        heading: "Dylatacje i cokoły",
        body: "Uzupełniamy i naprawiamy dylatacje ograniczające niekontrolowane pękanie posadzki, a także naprawiamy lub wymieniamy uszkodzone cokoły w strefach narażonych na uderzenia i wilgoć. Prace prowadzimy tak, aby jak najmniej zakłócać bieżącą pracę zakładu.",
      },
    ],
    highlights: [
      "Naprawa ubytków, odprysków i uszkodzeń mechanicznych posadzki",
      "Renowacja odspojonej żywicy i spękanego betonu",
      "Kamerowanie i udrażnianie ciągów kanalizacyjnych",
      "Naprawa i uzupełnianie dylatacji, naprawa lub wymiana cokołów",
    ],
    closing:
      "Serwis planujemy tak, by przygotować strefy produkcyjne do audytów i ograniczyć ryzyko nieplanowanych przestojów.",
  },
  {
    slug: "fitout",
    icon: Building2,
    title: "Fitout obiektów przemysłowych",
    shortDesc: "Remonty i wykończenia przestrzeni komercyjnych i produkcyjnych pod klucz.",
    metaDescription:
      "Fitout FLOWTEX Polska — remonty i wykończenia obiektów komercyjnych i produkcyjnych: ścianki działowe, podłogi, instalacje elektryczne i sanitarne.",
    intro:
      "Podejmujemy się remontów i wykończeń wnętrz komercyjnych oraz produkcyjnych dla sektora prywatnego i publicznego — od ścianek działowych i przeszkleń, przez podłogi i wyposażenie, po instalacje elektryczne i sanitarne.",
    sections: [
      {
        heading: "Zakres prac",
        body: "Projekty fitoutowe mogą obejmować montaż ścianek działowych i przeszkleń, wykonanie posadzek, dobór i montaż wyposażenia oraz elementów dekoracyjnych, a także prace elektryczne i hydrauliczne. Zakres każdorazowo dopasowujemy do funkcji docelowej pomieszczeń.",
      },
      {
        heading: "Indywidualne podejście",
        body: "Każdy projekt zaczynamy od wizji lokalnej — rozpoznajemy specyfikę obiektu, wymagania techniczne i harmonogram funkcjonowania firmy. Dzięki temu możemy precyzyjnie zaplanować kolejność prac i zminimalizować zakłócenia w bieżącej działalności klienta.",
      },
      {
        heading: "Realizacja pod klucz",
        body: "Koordynujemy wszystkie etapy prac — od demontażu i przygotowania powierzchni, przez roboty budowlane i instalacyjne, po wykończenie i sprzątanie obiektu — tak, aby klient otrzymał gotową do użytku przestrzeń bez konieczności angażowania kilku niezależnych wykonawców.",
      },
    ],
    highlights: [
      "Ścianki działowe, przeszklenia i zabudowy wewnętrzne",
      "Posadzki, wyposażenie i wykończenia dekoracyjne",
      "Instalacje elektryczne i sanitarne",
      "Jeden wykonawca koordynujący cały zakres prac",
    ],
    closing:
      "Realizację planujemy tak, aby ograniczyć przestoje i dostarczyć gotową przestrzeń zgodnie z ustalonym harmonogramem.",
  },
];

export function getServiceBySlug(slug) {
  return SERVICES.find((s) => s.slug === slug);
}
