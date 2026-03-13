/*
 * HOME PAGE – Avv. Giulia Giacinti
 * Design: Minimalismo Nordico Istituzionale
 * Sezioni: Hero, Presentazione, Aree, Perché scegliere, Codice Rosso, Caso reale, Recensione, CTA, Contatti rapidi
 */

import { Link } from "wouter";
import { ArrowRight, Shield, Users, BookOpen, Scale, CheckCircle, Star, MapPin, Phone, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663427002880/njcmPJh3CSxViANAxVByxY/hero-studio-legale-nUkyBCgDwBvyzzV2xTSVKZ.webp";
const PORTRAIT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663427002880/njcmPJh3CSxViANAxVByxY/avvocata-portrait-XsmjxfAZbbxy63PB4eUeJC.webp";
const CODICE_ROSSO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663427002880/njcmPJh3CSxViANAxVByxY/codice-rosso-bg-jtVKwgXRq6yGjV3Yg7HWgF.webp";
const SCALES_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663427002880/njcmPJh3CSxViANAxVByxY/giustizia-scales-QhtThB9stsYwCEgDK6wmWF.webp";

function useIntersectionObserver(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function FadeSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, visible } = useIntersectionObserver();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

const aree = [
  {
    icon: <Scale size={22} />,
    title: "Diritto Penale",
    desc: "Difesa penale in ogni fase del procedimento, dalla fase delle indagini preliminari al giudizio di Cassazione.",
    href: "/aree-di-attivita",
  },
  {
    icon: <Shield size={22} />,
    title: "Codice Rosso",
    desc: "Assistenza specializzata a vittime e imputati nei procedimenti per violenza di genere, stalking e reati familiari.",
    href: "/codice-rosso",
  },
  {
    icon: <Users size={22} />,
    title: "Diritto di Famiglia",
    desc: "Separazioni, divorzi, affidamento dei minori e tutela degli interessi economici e patrimoniali del cliente.",
    href: "/diritto-di-famiglia",
  },
  {
    icon: <BookOpen size={22} />,
    title: "Diritto Civile",
    desc: "Recupero crediti, contratti, risarcimento danni, successioni, locazioni e tutela dei diritti patrimoniali.",
    href: "/aree-di-attivita",
  },
];

const perche = [
  {
    num: "01",
    title: "Esperienza Comprovata",
    desc: "Oltre 15 anni di attività professionale e centinaia di procedimenti patrocinati, sia per la difesa delle vittime sia per quella degli imputati.",
  },
  {
    num: "02",
    title: "Doppia Prospettiva Difensiva",
    desc: "La conoscenza approfondita di entrambi i lati del procedimento – vittima e imputato – costituisce un vantaggio strategico unico nella costruzione della difesa.",
  },
  {
    num: "03",
    title: "Ruolo Istituzionale",
    desc: "Consigliere dell'Ordine degli Avvocati di Frosinone dal 2022 al 2025, Segretario della Camera Penale di Frosinone. Un profilo di assoluta affidabilità.",
  },
  {
    num: "04",
    title: "Ascolto e Chiarezza",
    desc: "Ogni cliente riceve un'analisi chiara della propria situazione, senza tecnicismi incomprensibili. Perché difendersi bene inizia dall'essere compresi.",
  },
];

export default function Home() {
  return (
    <main>
      {/* ─── HERO ─── */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={HERO_IMG}
            alt="Studio Legale Avv. Giulia Giacinti"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[var(--navy)]/75" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--navy)]/90 via-[var(--navy)]/70 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative container py-20">
          <div className="max-w-2xl">
            <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <span className="section-number text-[var(--gold)]">
                Studio Legale · Frosinone
              </span>
            </div>
            <h1
              className="font-['Cormorant_Garamond'] text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-[1.1] mb-6 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              La difesa dei tuoi diritti<br />
              <em className="font-normal text-[var(--gold-light)]">è la nostra priorità.</em>
            </h1>
            <p
              className="text-white/75 text-lg leading-relaxed mb-10 font-['DM_Sans'] max-w-xl animate-fade-in-up"
              style={{ animationDelay: "0.35s" }}
            >
              Avv. Giulia Giacinti — oltre 15 anni di esperienza in diritto penale,
              civile e di famiglia. Iscritta all'Ordine degli Avvocati di Frosinone.
              Specializzata in Codice Rosso e violenza di genere.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
              style={{ animationDelay: "0.5s" }}
            >
              <Link href="/contatti">
                <span className="btn-gold">
                  Richiedi una Consulenza
                  <ArrowRight size={15} />
                </span>
              </Link>
              <Link href="/chi-sono">
                <span className="btn-outline border-white/40 text-white hover:bg-white hover:text-[var(--navy)]">
                  Chi Sono
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-sm border-t border-white/10">
          <div className="container py-5">
            <div className="grid grid-cols-3 gap-4 text-center">
              {[
                { val: "15+", label: "Anni di Esperienza" },
                { val: "Codice Rosso", label: "Specializzazione" },
                { val: "Frosinone", label: "Sede dello Studio" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-['Cormorant_Garamond'] text-xl md:text-2xl font-semibold text-white">
                    {s.val}
                  </div>
                  <div className="text-[0.65rem] tracking-widest uppercase text-white/50 font-['DM_Sans'] mt-0.5">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── PRESENTAZIONE ─── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Immagine */}
            <FadeSection>
              <div className="relative">
                <img
                  src={PORTRAIT_IMG}
                  alt="Avv. Giulia Giacinti"
                  className="w-full max-w-sm mx-auto lg:mx-0 object-cover"
                  style={{ aspectRatio: "3/4" }}
                />
                {/* Decorazione oro */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-[var(--gold)]/30 hidden lg:block" />
                <div className="absolute -top-4 -left-4 w-16 h-16 border border-[var(--gold)]/20 hidden lg:block" />
              </div>
            </FadeSection>

            {/* Testo */}
            <FadeSection delay={0.15}>
              <span className="section-number">I · Presentazione</span>
              <div className="gold-line" />
              <h2 className="section-title mb-6">
                Un'avvocata al tuo fianco,<br />
                <em className="font-normal">non solo in aula.</em>
              </h2>
              <p className="text-[var(--navy)]/70 leading-relaxed mb-5 font-['DM_Sans']">
                L'Avv. Giulia Giacinti esercita la professione forense da oltre 15 anni presso lo
                Studio Legale Grieco di Frosinone. Laureata con 108/110 presso l'Università La Sapienza
                di Roma, ha costruito nel tempo una solida reputazione nel diritto penale, civile e di famiglia.
              </p>
              <p className="text-[var(--navy)]/70 leading-relaxed mb-8 font-['DM_Sans']">
                La sua specializzazione nei procedimenti legati al Codice Rosso — la legge che tutela
                le vittime di violenza domestica e di genere — la rende un punto di riferimento
                riconosciuto nel territorio di Frosinone e provincia.
              </p>
              <div className="quote-gold mb-8">
                "Ogni caso è una storia di vita reale. Il mio compito è comprenderla a fondo
                e difenderla con la massima competenza."
              </div>
              <Link href="/chi-sono">
                <span className="btn-outline">
                  Scopri il mio percorso
                  <ChevronRight size={15} />
                </span>
              </Link>
            </FadeSection>
          </div>
        </div>
      </section>

      {/* ─── AREE DI ATTIVITÀ ─── */}
      <section className="py-20 md:py-28 section-warm">
        <div className="container">
          <FadeSection className="text-center mb-14">
            <span className="section-number">II · Competenze</span>
            <div className="gold-line mx-auto" />
            <h2 className="section-title mb-4">Aree di Attività</h2>
            <p className="text-[var(--navy)]/60 max-w-xl mx-auto font-['DM_Sans']">
              Un'assistenza legale completa, costruita su anni di esperienza pratica
              e aggiornamento costante della normativa.
            </p>
          </FadeSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aree.map((area, i) => (
              <FadeSection key={area.title} delay={i * 0.1}>
                <Link href={area.href}>
                  <div className="practice-card h-full cursor-pointer">
                    <div className="text-[var(--gold)] mb-4">{area.icon}</div>
                    <h3 className="font-['Cormorant_Garamond'] text-xl font-semibold text-[var(--navy)] mb-3">
                      {area.title}
                    </h3>
                    <p className="text-sm text-[var(--navy)]/60 leading-relaxed font-['DM_Sans'] mb-4">
                      {area.desc}
                    </p>
                    <span className="text-xs font-['DM_Sans'] font-medium tracking-widest uppercase text-[var(--gold-dark)] flex items-center gap-1">
                      Approfondisci <ArrowRight size={11} />
                    </span>
                  </div>
                </Link>
              </FadeSection>
            ))}
          </div>

          <FadeSection className="text-center mt-10">
            <Link href="/aree-di-attivita">
              <span className="btn-outline">
                Tutte le Aree di Pratica
                <ArrowRight size={15} />
              </span>
            </Link>
          </FadeSection>
        </div>
      </section>

      {/* ─── PERCHÉ SCEGLIERE ─── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Titolo */}
            <FadeSection>
              <span className="section-number">III · Valore</span>
              <div className="gold-line" />
              <h2 className="section-title mb-6">
                Perché scegliere<br />
                questo studio
              </h2>
              <p className="text-[var(--navy)]/70 leading-relaxed font-['DM_Sans'] mb-8">
                Scegliere il proprio avvocato è una delle decisioni più importanti che si possano
                prendere. Ecco cosa distingue lo studio dell'Avv. Giacinti.
              </p>
              <img
                src={SCALES_IMG}
                alt="Giustizia"
                className="w-full max-w-xs object-cover"
                style={{ aspectRatio: "1/1" }}
              />
            </FadeSection>

            {/* Lista */}
            <FadeSection delay={0.15}>
              <div className="space-y-8 pt-4">
                {perche.map((item) => (
                  <div key={item.num} className="flex gap-5">
                    <span className="font-['Cormorant_Garamond'] text-3xl font-light text-[var(--gold)]/40 leading-none shrink-0 w-10">
                      {item.num}
                    </span>
                    <div>
                      <h3 className="font-['Cormorant_Garamond'] text-xl font-semibold text-[var(--navy)] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[var(--navy)]/65 leading-relaxed font-['DM_Sans']">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeSection>
          </div>
        </div>
      </section>

      {/* ─── CODICE ROSSO ─── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={CODICE_ROSSO_IMG}
            alt="Codice Rosso"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[var(--navy)]/88" />
        </div>
        <div className="relative container">
          <div className="max-w-2xl">
            <FadeSection>
              <span className="section-number text-[var(--gold)]">IV · Specializzazione</span>
              <div className="gold-line" />
              <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-semibold text-white mb-6 leading-tight">
                Codice Rosso:<br />
                <em className="font-normal text-[var(--gold-light)]">una difesa che conosce entrambi i lati.</em>
              </h2>
              <p className="text-white/70 leading-relaxed mb-6 font-['DM_Sans']">
                L'Avv. Giacinti ha maturato una significativa esperienza nei procedimenti legati
                al Codice Rosso (L. 69/2019), assistendo sia le vittime di reato sia le persone
                indagate o imputate. Questa doppia prospettiva costituisce un vantaggio strategico
                unico nella costruzione della difesa.
              </p>
              <p className="text-white/70 leading-relaxed mb-8 font-['DM_Sans']">
                I reati più trattati includono: stalking, maltrattamenti in famiglia, violenza
                sessuale, revenge porn, doxxing, cyberbullismo, deepfake e omesso mantenimento.
                Lo studio presta assistenza anche con <strong className="text-white/90">gratuito patrocinio</strong>.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {["Stalking", "Maltrattamenti", "Violenza Sessuale", "Revenge Porn", "Cyberbullismo", "Deepfake", "Omesso Mantenimento"].map((tag) => (
                  <span key={tag} className="text-xs font-['DM_Sans'] tracking-wide px-3 py-1.5 border border-white/20 text-white/60">
                    {tag}
                  </span>
                ))}
              </div>
              <Link href="/codice-rosso">
                <span className="btn-gold">
                  Approfondisci il Codice Rosso
                  <ArrowRight size={15} />
                </span>
              </Link>
            </FadeSection>
          </div>
        </div>
      </section>

      {/* ─── CASO REALE ─── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <FadeSection className="text-center mb-12">
              <span className="section-number">V · Esperienza</span>
              <div className="gold-line mx-auto" />
              <h2 className="section-title">Un caso, un risultato.</h2>
            </FadeSection>

            <FadeSection>
              <div className="border border-[var(--border)] p-8 md:p-12 relative">
                <div className="absolute top-0 left-8 transform -translate-y-1/2">
                  <span className="badge-gold">Caso Seguito</span>
                </div>
                <div className="flex items-start gap-4 mb-6">
                  <CheckCircle size={20} className="text-[var(--gold)] mt-1 shrink-0" />
                  <div>
                    <h3 className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[var(--navy)] mb-3">
                      Procedimento per maltrattamenti e violenza domestica
                    </h3>
                    <p className="text-[var(--navy)]/70 leading-relaxed font-['DM_Sans']">
                      Il cliente si trovava sottoposto alla misura cautelare del divieto di avvicinamento
                      con braccialetto elettronico, in un procedimento penale per maltrattamenti in famiglia.
                      Attraverso un'attività difensiva mirata, l'Avv. Giacinti ha ottenuto la
                      <strong className="text-[var(--navy)]"> revoca della misura cautelare</strong>,
                      restituendo al cliente la propria libertà di movimento in attesa del giudizio.
                    </p>
                  </div>
                </div>
                <div className="pl-9">
                  <p className="text-xs font-['DM_Sans'] tracking-widest uppercase text-[var(--gold-dark)]">
                    Risultato ottenuto: Revoca del braccialetto elettronico
                  </p>
                </div>
              </div>
            </FadeSection>

            <FadeSection delay={0.15} className="mt-6 text-center">
              <Link href="/casi-e-approccio">
                <span className="btn-outline">
                  Scopri l'approccio difensivo
                  <ArrowRight size={15} />
                </span>
              </Link>
            </FadeSection>
          </div>
        </div>
      </section>

      {/* ─── RECENSIONE ─── */}
      <section className="py-20 md:py-24 section-warm">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <FadeSection>
              <span className="section-number">VI · Testimonianza</span>
              <div className="gold-line mx-auto" />
              <div className="flex justify-center gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={16} className="fill-[var(--gold)] text-[var(--gold)]" />
                ))}
              </div>
              <blockquote className="font-['Cormorant_Garamond'] text-2xl md:text-3xl font-medium text-[var(--navy)] italic leading-relaxed mb-6">
                "Professionalità, serietà e competenze. Super consigliata."
              </blockquote>
              <p className="text-sm font-['DM_Sans'] font-medium tracking-widest uppercase text-[var(--gold-dark)]">
                — Stefano Droghei
              </p>
            </FadeSection>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 md:py-28 bg-[var(--navy)]">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <FadeSection>
              <span className="section-number text-[var(--gold)]">VII · Contatto</span>
              <div className="gold-line mx-auto" />
              <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-semibold text-white mb-6 leading-tight">
                Hai bisogno di assistenza legale?
              </h2>
              <p className="text-white/65 leading-relaxed mb-10 font-['DM_Sans']">
                Il primo passo è il più importante. Contatta lo studio per una consulenza riservata:
                analizzeremo insieme la tua situazione e ti indicheremo il percorso migliore.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contatti">
                  <span className="btn-gold">
                    Prenota un Appuntamento
                    <ArrowRight size={15} />
                  </span>
                </Link>
                <Link href="/contatti">
                  <span className="btn-outline border-white/30 text-white hover:bg-white hover:text-[var(--navy)]">
                    Contatta lo Studio
                  </span>
                </Link>
              </div>
            </FadeSection>
          </div>
        </div>
      </section>

      {/* ─── CONTATTI RAPIDI ─── */}
      <section className="py-14 bg-white border-t border-[var(--border)]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <FadeSection>
              <div className="flex flex-col items-center gap-3">
                <MapPin size={20} className="text-[var(--gold)]" />
                <div>
                  <p className="font-['Cormorant_Garamond'] text-lg font-semibold text-[var(--navy)]">Sede</p>
                  <p className="text-sm text-[var(--navy)]/60 font-['DM_Sans']">Via Tiburtina 203, Frosinone (FR)</p>
                </div>
              </div>
            </FadeSection>
            <FadeSection delay={0.1}>
              <div className="flex flex-col items-center gap-3">
                <Scale size={20} className="text-[var(--gold)]" />
                <div>
                  <p className="font-['Cormorant_Garamond'] text-lg font-semibold text-[var(--navy)]">Ordine</p>
                  <p className="text-sm text-[var(--navy)]/60 font-['DM_Sans']">Ordine degli Avvocati di Frosinone</p>
                </div>
              </div>
            </FadeSection>
            <FadeSection delay={0.2}>
              <div className="flex flex-col items-center gap-3">
                <Phone size={20} className="text-[var(--gold)]" />
                <div>
                  <p className="font-['Cormorant_Garamond'] text-lg font-semibold text-[var(--navy)]">Consulenza</p>
                  <Link href="/contatti">
                    <span className="text-sm text-[var(--gold-dark)] font-['DM_Sans'] font-medium cursor-pointer hover:underline">
                      Richiedi un appuntamento →
                    </span>
                  </Link>
                </div>
              </div>
            </FadeSection>
          </div>
        </div>
      </section>
    </main>
  );
}
