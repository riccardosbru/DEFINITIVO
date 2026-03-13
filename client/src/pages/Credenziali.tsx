/*
 * CREDENZIALI – Avv. Giulia Giacinti
 * Design: Minimalismo Nordico Istituzionale
 */

import { Link } from "wouter";
import { ArrowRight, GraduationCap, Briefcase, Award, BookOpen, Mic } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const TRIBUNALE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663427002880/njcmPJh3CSxViANAxVByxY/frosinone-tribunale-Ekx8zZMDcJYdGGCFqfksnZ.webp";

function FadeSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(18px)",
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

const timeline = [
  {
    year: "La Sapienza",
    period: "Formazione accademica",
    title: "Laurea in Giurisprudenza",
    org: "Università degli Studi di Roma La Sapienza",
    detail: "Voto: 108/110. Percorso di studi con specializzazione in diritto penale e civile.",
    icon: <GraduationCap size={18} />,
  },
  {
    year: "2015 – oggi",
    period: "Attività professionale",
    title: "Avvocato Senior",
    org: "Studio Legale Grieco, Frosinone",
    detail: "Responsabile delle pratiche di diritto penale con specializzazione in reati di genere e procedimenti Codice Rosso. Numerosi procedimenti patrocinati sia per vittime che per imputati.",
    icon: <Briefcase size={18} />,
  },
  {
    year: "2022 – 2025",
    period: "Ruolo istituzionale",
    title: "Consigliere dell'Ordine degli Avvocati",
    org: "Consiglio dell'Ordine degli Avvocati di Frosinone",
    detail: "Membro delle Commissioni Gratuito Patrocinio e Penale. Contributo attivo alla gestione dell'Ordine e alla tutela dei diritti dei professionisti e dei cittadini.",
    icon: <Award size={18} />,
  },
  {
    year: "In corso",
    period: "Ruolo associativo",
    title: "Segretario del Consiglio Direttivo",
    org: "Camera Penale di Frosinone \"F. Pagliei\" – UCPI",
    detail: "Responsabile della scuola di formazione. Impegno nella formazione continua dei giovani avvocati penalisti e nella promozione della cultura del giusto processo.",
    icon: <BookOpen size={18} />,
  },
];

const formazione = [
  {
    title: "Corso Difensore d'Ufficio",
    ente: "Consiglio dell'Ordine degli Avvocati di Frosinone",
    desc: "Abilitazione all'esercizio della difesa d'ufficio nei procedimenti penali.",
  },
  {
    title: "Master in Gestione, Sviluppo e Amministrazione delle Risorse Umane",
    ente: "Alma Laboris Business School",
    desc: "Formazione avanzata in gestione delle risorse umane e organizzazione aziendale.",
  },
  {
    title: "Mediatore Civile e Commerciale",
    ente: "ImMediata ADR",
    desc: "Abilitazione alla mediazione civile e commerciale come strumento alternativo di risoluzione delle controversie.",
  },
];

export default function Credenziali() {
  return (
    <main>
      {/* Header con immagine */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={TRIBUNALE_IMG}
            alt="Tribunale di Frosinone"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[var(--navy)]/85" />
        </div>
        <div className="relative container">
          <span className="section-number text-[var(--gold)]">Credenziali</span>
          <h1 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-semibold text-white leading-tight max-w-2xl mb-4">
            Un profilo professionale costruito negli anni, riconosciuto dal territorio.
          </h1>
          <p className="text-white/65 font-['DM_Sans'] max-w-xl">
            Formazione accademica d'eccellenza, esperienza professionale consolidata,
            ruoli istituzionali di rilievo.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <FadeSection className="mb-14">
            <span className="section-number">I · Percorso</span>
            <div className="gold-line" />
            <h2 className="section-title max-w-xl">
              Esperienza e ruoli istituzionali
            </h2>
          </FadeSection>

          <div className="max-w-3xl">
            {timeline.map((item, i) => (
              <FadeSection key={item.title} delay={i * 0.1}>
                <div className="flex gap-6 mb-10 last:mb-0">
                  {/* Linea verticale */}
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 border border-[var(--gold)] flex items-center justify-center text-[var(--gold)] shrink-0">
                      {item.icon}
                    </div>
                    {i < timeline.length - 1 && (
                      <div className="w-px flex-1 bg-[var(--border)] mt-3" />
                    )}
                  </div>
                  {/* Contenuto */}
                  <div className="pb-10 last:pb-0">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="badge-gold">{item.year}</span>
                      <span className="text-xs text-[var(--navy)]/40 font-['DM_Sans'] tracking-wide">
                        {item.period}
                      </span>
                    </div>
                    <h3 className="font-['Cormorant_Garamond'] text-xl font-semibold text-[var(--navy)] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[var(--gold-dark)] font-['DM_Sans'] font-medium mb-2">
                      {item.org}
                    </p>
                    <p className="text-sm text-[var(--navy)]/60 font-['DM_Sans'] leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* Formazione */}
      <section className="py-20 md:py-24 section-warm">
        <div className="container">
          <FadeSection className="mb-12">
            <span className="section-number">II · Formazione</span>
            <div className="gold-line" />
            <h2 className="section-title max-w-xl">
              Formazione e specializzazioni
            </h2>
          </FadeSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {formazione.map((f, i) => (
              <FadeSection key={f.title} delay={i * 0.1}>
                <div className="practice-card h-full">
                  <div className="text-[var(--gold)] mb-4">
                    <GraduationCap size={22} />
                  </div>
                  <h3 className="font-['Cormorant_Garamond'] text-lg font-semibold text-[var(--navy)] mb-2">
                    {f.title}
                  </h3>
                  <p className="text-xs text-[var(--gold-dark)] font-['DM_Sans'] font-medium mb-3 tracking-wide">
                    {f.ente}
                  </p>
                  <p className="text-sm text-[var(--navy)]/60 font-['DM_Sans'] leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* Attività divulgativa */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container">
          <FadeSection className="mb-10">
            <span className="section-number">III · Divulgazione</span>
            <div className="gold-line" />
            <h2 className="section-title max-w-xl">
              Attività accademica e divulgativa
            </h2>
          </FadeSection>

          <div className="max-w-3xl">
            <FadeSection>
              <p className="text-[var(--navy)]/70 leading-relaxed mb-8 font-['DM_Sans']">
                L'Avv. Giacinti è relatrice in convegni dedicati alla violenza di genere e alle
                novità legislative sul Codice Rosso. Il suo impegno divulgativo riflette la
                convinzione che la conoscenza della legge sia uno strumento di protezione
                per tutti i cittadini.
              </p>

              <div className="border border-[var(--border)] p-8 relative">
                <div className="absolute top-0 left-8 transform -translate-y-1/2">
                  <span className="badge-gold">Convegno</span>
                </div>
                <div className="flex items-start gap-4">
                  <Mic size={20} className="text-[var(--gold)] mt-1 shrink-0" />
                  <div>
                    <h3 className="font-['Cormorant_Garamond'] text-xl font-semibold text-[var(--navy)] mb-2">
                      "La violenza sulle donne nella storia"
                    </h3>
                    <p className="text-sm text-[var(--gold-dark)] font-['DM_Sans'] font-medium mb-3">
                      Salone di Rappresentanza della Provincia di Frosinone
                    </p>
                    <p className="text-sm text-[var(--navy)]/65 font-['DM_Sans'] leading-relaxed">
                      Convegno dedicato all'analisi storica e giuridica della violenza di genere.
                      L'Avv. Giacinti ha partecipato come relatrice, portando la propria
                      esperienza professionale nei procedimenti per violenza domestica e
                      illustrando le novità introdotte dalla Legge 69/2019 (Codice Rosso).
                    </p>
                  </div>
                </div>
              </div>
            </FadeSection>
          </div>
        </div>
      </section>

      {/* Iscrizione ordine */}
      <section className="py-14 section-warm">
        <div className="container">
          <FadeSection>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-8 border border-[var(--border)] bg-white">
              <div>
                <p className="text-xs font-['DM_Sans'] tracking-widest uppercase text-[var(--gold-dark)] mb-1">
                  Iscrizione professionale
                </p>
                <h3 className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[var(--navy)]">
                  Ordine degli Avvocati di Frosinone
                </h3>
                <p className="text-sm text-[var(--navy)]/60 font-['DM_Sans'] mt-1">
                  Iscritta all'Albo degli Avvocati · Studio Legale Grieco · Via Tiburtina 203, Frosinone
                </p>
              </div>
              <Link href="/contatti">
                <span className="btn-outline shrink-0">
                  Contatta lo Studio
                  <ArrowRight size={15} />
                </span>
              </Link>
            </div>
          </FadeSection>
        </div>
      </section>
    </main>
  );
}
