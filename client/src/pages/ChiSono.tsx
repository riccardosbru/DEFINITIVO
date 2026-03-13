/*
 * CHI SONO – Avv. Giulia Giacinti
 * Design: Minimalismo Nordico Istituzionale
 */

import { Link } from "wouter";
import { ArrowRight, GraduationCap, Briefcase, Award } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const PORTRAIT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663427002880/njcmPJh3CSxViANAxVByxY/avvocata-portrait-XsmjxfAZbbxy63PB4eUeJC.webp";

function FadeSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
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
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

export default function ChiSono() {
  return (
    <main>
      {/* Page header */}
      <section className="py-16 md:py-20 bg-[var(--navy)]">
        <div className="container">
          <span className="section-number text-[var(--gold)]">Chi Sono</span>
          <h1 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-semibold text-white leading-tight max-w-2xl">
            Un percorso costruito sulla competenza e sull'impegno verso i clienti.
          </h1>
        </div>
      </section>

      {/* Profilo */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <FadeSection>
              <div className="relative sticky top-28">
                <img
                  src={PORTRAIT_IMG}
                  alt="Avv. Giulia Giacinti"
                  className="w-full max-w-sm object-cover"
                  style={{ aspectRatio: "3/4" }}
                />
                <div className="mt-6 p-6 bg-[var(--warm-gray)] border-l-2 border-[var(--gold)]">
                  <p className="font-['Cormorant_Garamond'] text-lg font-semibold text-[var(--navy)] mb-1">
                    Avv. Giulia Giacinti
                  </p>
                  <p className="text-sm text-[var(--navy)]/60 font-['DM_Sans']">
                    Iscritta all'Ordine degli Avvocati di Frosinone
                  </p>
                  <div className="mt-4 pt-4 border-t border-[var(--border)] space-y-2">
                    <div className="flex justify-between text-sm font-['DM_Sans']">
                      <span className="text-[var(--navy)]/50">Esperienza</span>
                      <span className="font-medium text-[var(--navy)]">Oltre 15 anni</span>
                    </div>
                    <div className="flex justify-between text-sm font-['DM_Sans']">
                      <span className="text-[var(--navy)]/50">Laurea</span>
                      <span className="font-medium text-[var(--navy)]">108/110 – La Sapienza</span>
                    </div>
                    <div className="flex justify-between text-sm font-['DM_Sans']">
                      <span className="text-[var(--navy)]/50">Sede</span>
                      <span className="font-medium text-[var(--navy)]">Frosinone (FR)</span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeSection>

            <FadeSection delay={0.15}>
              <span className="section-number">I · Profilo</span>
              <div className="gold-line" />
              <h2 className="section-title mb-6">
                Chi è l'Avv.<br />Giulia Giacinti
              </h2>
              <p className="text-[var(--navy)]/70 leading-relaxed mb-5 font-['DM_Sans']">
                L'Avv. Giulia Giacinti esercita la professione forense da oltre 15 anni, operando
                principalmente nell'ambito del diritto penale, civile e di famiglia. Dopo la laurea
                con il voto di 108/110 presso l'Università degli Studi di Roma La Sapienza, ha
                intrapreso un percorso professionale che l'ha portata a diventare uno dei riferimenti
                più riconosciuti del foro di Frosinone.
              </p>
              <p className="text-[var(--navy)]/70 leading-relaxed mb-5 font-['DM_Sans']">
                Dal 2015 opera come avvocato senior presso lo Studio Legale Grieco, dove si occupa
                prevalentemente di reati di genere e di procedimenti penali legati al Codice Rosso.
                Ha patrocinato numerosi procedimenti sia per la difesa delle persone offese sia per
                la difesa degli imputati, acquisendo una prospettiva completa e strategicamente
                preziosa.
              </p>
              <p className="text-[var(--navy)]/70 leading-relaxed mb-8 font-['DM_Sans']">
                Dal 2022 al 2025 ha ricoperto il ruolo di Consigliere presso il Consiglio dell'Ordine
                degli Avvocati di Frosinone, con incarichi nelle Commissioni Gratuito Patrocinio e
                Penale. È inoltre Segretario del Consiglio Direttivo della Camera Penale di Frosinone
                "F. Pagliei", aderente all'UCPI, e Responsabile della scuola di formazione.
              </p>

              <div className="quote-gold mb-8">
                "La mia formazione accademica e la mia esperienza sul campo mi hanno insegnato
                che ogni caso richiede un approccio unico, costruito sulla comprensione profonda
                della persona prima ancora che della norma."
              </div>

              <Link href="/credenziali">
                <span className="btn-outline">
                  Vedi le credenziali complete
                  <ArrowRight size={15} />
                </span>
              </Link>
            </FadeSection>
          </div>
        </div>
      </section>

      {/* Formazione */}
      <section className="py-20 md:py-24 section-warm">
        <div className="container">
          <FadeSection className="mb-14">
            <span className="section-number">II · Formazione</span>
            <div className="gold-line" />
            <h2 className="section-title max-w-lg">
              Un percorso formativo di eccellenza
            </h2>
          </FadeSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <GraduationCap size={22} />,
                label: "Laurea in Giurisprudenza",
                detail: "Università degli Studi di Roma La Sapienza",
                note: "Voto: 108/110",
              },
              {
                icon: <Award size={22} />,
                label: "Master in Gestione Risorse Umane",
                detail: "Alma Laboris Business School",
                note: "Sviluppo e Amministrazione delle Risorse Umane",
              },
              {
                icon: <Briefcase size={22} />,
                label: "Mediatore Civile e Commerciale",
                detail: "ImMediata ADR",
                note: "Abilitazione alla mediazione professionale",
              },
            ].map((item, i) => (
              <FadeSection key={item.label} delay={i * 0.1}>
                <div className="practice-card h-full">
                  <div className="text-[var(--gold)] mb-4">{item.icon}</div>
                  <h3 className="font-['Cormorant_Garamond'] text-xl font-semibold text-[var(--navy)] mb-2">
                    {item.label}
                  </h3>
                  <p className="text-sm text-[var(--navy)]/70 font-['DM_Sans'] mb-1">{item.detail}</p>
                  <p className="text-xs text-[var(--navy)]/45 font-['DM_Sans'] italic">{item.note}</p>
                </div>
              </FadeSection>
            ))}
          </div>

          <FadeSection delay={0.3} className="mt-8">
            <div className="practice-card">
              <h3 className="font-['Cormorant_Garamond'] text-xl font-semibold text-[var(--navy)] mb-2">
                Corso Difensore d'Ufficio
              </h3>
              <p className="text-sm text-[var(--navy)]/70 font-['DM_Sans']">
                Consiglio dell'Ordine degli Avvocati di Frosinone — Abilitazione all'esercizio della difesa d'ufficio.
              </p>
            </div>
          </FadeSection>
        </div>
      </section>

      {/* Attività divulgativa */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container max-w-3xl">
          <FadeSection>
            <span className="section-number">III · Divulgazione</span>
            <div className="gold-line" />
            <h2 className="section-title mb-6">Impegno oltre l'aula</h2>
            <p className="text-[var(--navy)]/70 leading-relaxed mb-6 font-['DM_Sans']">
              L'Avv. Giacinti non limita il suo impegno alla sola attività forense. È relatrice
              in convegni dedicati alla violenza di genere e alle novità legislative sul Codice Rosso,
              contribuendo attivamente alla formazione e alla sensibilizzazione pubblica su temi
              di grande rilevanza sociale.
            </p>
            <div className="border border-[var(--border)] p-6 relative">
              <div className="absolute top-0 left-6 transform -translate-y-1/2">
                <span className="badge-gold">Evento</span>
              </div>
              <h3 className="font-['Cormorant_Garamond'] text-xl font-semibold text-[var(--navy)] mb-2">
                "La violenza sulle donne nella storia"
              </h3>
              <p className="text-sm text-[var(--navy)]/65 font-['DM_Sans']">
                Convegno tenutosi presso il Salone di Rappresentanza della Provincia di Frosinone.
                L'Avv. Giacinti ha partecipato come relatrice, portando la propria esperienza
                professionale nel campo dei procedimenti per violenza di genere.
              </p>
            </div>
          </FadeSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[var(--navy)]">
        <div className="container text-center">
          <FadeSection>
            <h2 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl font-semibold text-white mb-4">
              Hai bisogno di assistenza legale?
            </h2>
            <p className="text-white/60 mb-8 font-['DM_Sans'] max-w-lg mx-auto">
              Contatta lo studio per una prima consulenza riservata.
            </p>
            <Link href="/contatti">
              <span className="btn-gold">
                Prenota un Appuntamento
                <ArrowRight size={15} />
              </span>
            </Link>
          </FadeSection>
        </div>
      </section>
    </main>
  );
}
