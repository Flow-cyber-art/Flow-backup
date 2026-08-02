Wrzuć tu zdjęcia do karuzeli w tle sekcji hero (góra strony głównej).

WYMIARY:
- Zalecane: 1920 x 1080 px (proporcja 16:9), poziome zdjęcia.
- Minimum: 1600 x 900 px — mniejsze będą się rozciągać i tracić ostrość.
- Format: .jpg lub .webp, każde zdjęcie max ok. 300-500 KB (skompresowane, np. przez squoosh.app), żeby strona ładowała się szybko.
- Zdjęcia są automatycznie przycinane do wypełnienia sekcji (object-fit: cover), więc najważniejszy element kadru (np. maszyna, hala) powinien być blisko środka zdjęcia — górne/dolne krawędzie mogą zostać przycięte na wąskich ekranach.

KOLEJNOŚĆ WYŚWIETLANIA:
Zdjęcia wyświetlają się w kolejności alfabetycznej nazw plików. Żeby mieć pełną kontrolę nad kolejnością, nazywaj pliki z numerem na początku, np.:
  01-hala-produkcyjna.jpg
  02-posadzka-epoksydowa.jpg
  03-ekipa-na-budowie.jpg

Nie trzeba nic zmieniać w kodzie — każde zdjęcie wrzucone do tego folderu (src/assets/hero-carousel/) pojawi się automatycznie w karuzeli po następnym uruchomieniu `npm run dev` / `npm run build`.
