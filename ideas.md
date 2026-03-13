# Ideas – Sito Web Avv. Giulia Giacinti

## Contesto
Sito istituzionale per studio legale a Frosinone. Specializzazione: diritto penale, civile, famiglia, Codice Rosso.
Obiettivo: autorevolezza, fiducia, conversione visitatori in clienti.

---

<response>
<text>
## Approccio 1 – "Architettura della Legge"

**Design Movement**: Brutalismo Istituzionale Raffinato (ispirato all'architettura giudiziaria italiana)

**Core Principles**:
1. Asimmetria strutturata: colonne di testo sfalsate, titoli che "sfondano" i margini
2. Peso tipografico come gerarchia visiva primaria
3. Spazio bianco come silenzio autorevole
4. Contrasto netto tra blocchi di colore pieno e spazio vuoto

**Color Philosophy**:
- Blu notte profondo `#0D1B2A` come colore dominante (potere, stabilità)
- Bianco puro `#FAFAFA` per respiro e chiarezza
- Oro antico `#B8960C` come accento rarissimo (solo per elementi di massima importanza)
- Grigio caldo `#F2F0ED` per sfondi secondari

**Layout Paradigm**:
- Layout a colonne asimmetriche (70/30 o 60/40)
- Navigazione verticale a sinistra su desktop
- Sezioni con bordi sinistri in oro come separatori
- Testo che occupa tutta la larghezza su mobile

**Signature Elements**:
1. Linea orizzontale sottilissima in oro che attraversa l'intera pagina come separatore
2. Numeri di sezione in stile romano (I, II, III) in grigio chiaro, molto grandi, in background
3. Iniziali "GG" come monogramma stilizzato nel logo

**Interaction Philosophy**:
Ogni hover rivela un sottile spostamento verso sinistra. Le CTA si riempiono di colore dal basso verso l'alto.

**Animation**:
- Entrata dei testi con fade-in dal basso, 0.3s ease-out
- Linea oro che si disegna da sinistra a destra su scroll
- Nessuna animazione decorativa, solo transizioni funzionali

**Typography System**:
- Titoli: Playfair Display (serif elegante, autorevolezza classica)
- Corpo: Source Sans 3 (leggibilità moderna)
- Peso titoli: 700-900, corpo: 400-500
</text>
<probability>0.08</probability>
</response>

---

<response>
<text>
## Approccio 2 – "Minimalismo Nordico Istituzionale" ← SCELTO

**Design Movement**: Minimalismo Scandinavo applicato al diritto italiano

**Core Principles**:
1. Ogni elemento guadagna il suo spazio o viene eliminato
2. La tipografia è il design: gerarchia visiva costruita solo con font e spaziatura
3. Il colore è usato con parsimonia chirurgica: massimo 3 valori cromatici attivi
4. La struttura della pagina riflette la struttura del ragionamento giuridico: ordine, chiarezza, progressione

**Color Philosophy**:
- Sfondo: bianco caldo `oklch(0.98 0.005 85)` – non freddo, non sterile
- Testo primario: blu notte `oklch(0.18 0.04 255)` – profondità e autorità
- Accento oro: `oklch(0.72 0.12 85)` – usato solo per bordi, sottolineature, icone chiave
- Grigio tenue `oklch(0.94 0.005 85)` per sfondi di sezioni alternate

**Layout Paradigm**:
- Layout a colonna singola larga con margini generosi (max-width 900px per testo)
- Sezioni alternate: sfondo bianco / sfondo grigio tenue
- Hero: testo a sinistra, immagine a destra (split layout)
- Navigazione orizzontale fissa in alto, ultra-sottile

**Signature Elements**:
1. Bordo sinistro in oro su citazioni e punti chiave (blockquote style)
2. Separatori orizzontali sottilissimi in oro tra sezioni
3. Numeri di sezione piccoli in oro sopra ogni titolo principale

**Interaction Philosophy**:
Hover su link: sottolineatura che scorre da sinistra. CTA: bordo oro che appare, sfondo si riempie lentamente.

**Animation**:
- Scroll-triggered fade-in per ogni sezione (Framer Motion)
- Nessun parallax, nessuna animazione decorativa
- Transizioni di pagina: fade 200ms

**Typography System**:
- Titoli: Cormorant Garamond (serif classico italiano, eleganza senza ostentazione)
- Corpo: DM Sans (sans-serif moderno, leggibile, professionale)
- Gerarchia: H1 56px/700, H2 36px/600, H3 24px/500, body 17px/400
- Letter-spacing titoli: 0.02em
</text>
<probability>0.09</probability>
</response>

---

<response>
<text>
## Approccio 3 – "Diritto come Architettura"

**Design Movement**: Razionalismo italiano contemporaneo

**Core Principles**:
1. Griglia modulare rigida ma con rotture intenzionali
2. Fotografia come elemento strutturale, non decorativo
3. Testo e immagine in dialogo costante
4. Densità informativa alta ma mai caotica

**Color Philosophy**:
- Bianco assoluto `#FFFFFF` come base
- Blu cobalto `#1B3A6B` per header e sezioni chiave
- Grigio ardesia `#4A5568` per testo secondario
- Oro pallido `#D4AF37` per accenti

**Layout Paradigm**:
- Grid a 12 colonne con sezioni che occupano 8-10 colonne
- Immagini che "escono" dal loro contenitore
- Sidebar di navigazione su desktop per pagine interne

**Signature Elements**:
1. Fotografie in bianco e nero con overlay blu al hover
2. Citazioni legali in grande, ruotate di 90° come elementi decorativi
3. Timeline verticale per la sezione credenziali

**Interaction Philosophy**:
Interazioni pesanti ma significative. Ogni click ha feedback visivo immediato.

**Animation**:
- Parallax leggero sulle immagini hero
- Contatori animati per le statistiche
- Slide-in laterale per le sezioni

**Typography System**:
- Titoli: Libre Baskerville (serif robusto)
- Corpo: Nunito Sans (amichevole ma professionale)
</text>
<probability>0.07</probability>
</response>

---

## Scelta Finale: Approccio 2 – "Minimalismo Nordico Istituzionale"

Motivazione: massima coerenza con il brief (minimalista, istituzionale, elegante, autorevole).
Il font Cormorant Garamond evoca la tradizione giuridica italiana senza essere pesante.
Il layout pulito con accenti oro discreti trasmette esattamente il messaggio richiesto.
