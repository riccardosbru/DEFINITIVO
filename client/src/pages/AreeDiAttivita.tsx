/*
 * AREE DI ATTIVITÀ – Avv. Giulia Giacinti
 * Design: Minimalismo Nordico Istituzionale
 */

import { Link } from "wouter";
import { ArrowRight, Scale, Shield, Users, Home, Car, Briefcase, FileText, Building, Heart, Gavel } from "lucide-react";
import { useEffect, useRef, useState } from "react";

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

const areePrincipali = [
  {
    icon: <Scale size={24} />,
    title: "Diritto Penale",
    desc: "Assistenza e difesa in ogni fase del procedimento penale: dalle indagini preliminari all'udienza preliminare, dal dibattimento di primo grado fino ai giudizi di impugnazione e alla Cassazione. Reati contro la persona, contro il patrimonio, sostanze stupefacenti, diritto penitenziario.",
    tags: ["Difesa penale", "Indagini preliminari", "Cassazione", "Diritto penitenziario"],
    href: "/aree-di-attivita",
  },
  {
    icon: <Shield size={24} />,
    title: "Codice Rosso",
    desc: "Specializzazione nei procedimenti per violenza di genere e domestica. Assistenza a vittime e imputati in procedimenti per stalking, maltrattamenti, violenza sessuale, revenge porn, doxxing, cyberbullismo, deepfake e omesso mantenimento.",
    tags: ["Stalking", "Maltrattamenti", "Violenza sessuale", "Revenge porn"],
    href: "/codice-rosso",
  },
  {
    icon: <Users size={24} />,
    title: "Diritto di Famiglia",
    desc: "Separazioni e divorzi, affidamento e collocamento dei figli, diritto di visita del genitore non collocatario, tutela dei minori, unioni civili, adozioni. Analisi approfondita degli aspetti economici e patrimoniali, con attenzione alle novità della riforma Cartabia.",
    tags: ["Separazione", "Divorzio", "Affidamento figli", "Tutela minori"],
    href: "/diritto-di-famiglia",
  },
];

const areeSecondarie = [
  { icon: <FileText size={18} />, title: "Diritto Civile", desc: "Contratti, risarcimento danni, responsabilità civile." },
  { icon: <Briefcase size={18} />, title: "Recupero Crediti", desc: "Procedure di recupero stragiudiziale e giudiziale." },
  { icon: <Car size={18} />, title: "Incidenti Stradali", desc: "Risarcimento danni da sinistri stradali." },
  { icon: <Scale size={18} />, title: "Mediazione", desc: "Mediatore civile e commerciale abilitato." },
  { icon: <Home size={18} />, title: "Eredità e Successioni", desc: "Testamenti, divisioni ereditarie, impugnazioni." },
  { icon: <Shield size={18} />, title: "Diritto Assicurativo", desc: "Controversie con compagnie assicurative." },
  { icon: <Building size={18} />, title: "Diritto Condominiale", desc: "Controversie condominiali e assemblee." },
  { icon: <Home size={18} />, title: "Locazioni e Sfratti", desc: "Contratti di locazione, morosità, sfratti." },
  { icon: <Briefcase size={18} />, title: "Diritto del Lavoro", desc: "Licenziamenti, mobbing, controversie lavorative." },
  { icon: <Gavel size={18} />, title: "Ricorso TAR", desc: "Ricorsi al Tribunale Amministrativo Regionale." },
  { icon: <Scale size={18} />, title: "Aste Giudiziarie", desc: "Assistenza nelle procedure di asta giudiziaria." },
  { icon: <FileText size={18} />, title: "Pignoramenti", desc: "Procedure esecutive e opposizioni." },
  { icon: <Heart size={18} />, title: "Tutela Anziani", desc: "Amministrazione di sostegno e tutela." },
  { icon: <Users size={18} />, title: "Unioni Civili", desc: "Costituzione e scioglimento di unioni civili." },
  { icon: <Scale size={18} />, title: "Cassazione", desc: "Ricorsi in Corte di Cassazione." },
];

export default function AreeDiAttivita() {
  return (
    <main>
      {/* Header */}
      <section className="py-16 md:py-20 bg-[var(--navy)]">
        <div className="container">
          <span className="section-number text-[var(--gold)]">Aree di Attività</span>
          <h1 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-semibold text-white leading-tight max-w-2xl">
            Un'assistenza legale completa, costruita sull'esperienza.
          </h1>
        </div>
      </section>

      {/* Aree principali */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <FadeSection className="mb-14">
            <span className="section-number">I · Specializzazioni</span>
            <div className="gold-line" />
            <h2 className="section-title max-w-xl">Le aree di maggiore specializzazione</h2>
          </FadeSection>

          <div className="space-y-8">
            {areePrincipali.map((area, i) => (
              <FadeSection key={area.title} delay={i * 0.1}>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-[var(--border)] overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                  <div className="bg-[var(--navy)] p-8 flex flex-col justify-between">
                    <div>
                      <div className="text-[var(--gold)] mb-4">{area.icon}</div>
                      <h3 className="font-['Cormorant_Garamond'] text-2xl font-semibold text-white mb-3">
                        {area.title}
                      </h3>
                    </div>
                    <Link href={area.href}>
                      <span className="text-xs font-['DM_Sans'] font-medium tracking-widest uppercase text-[var(--gold)] flex items-center gap-1 mt-4 cursor-pointer">
                        Approfondisci <ArrowRight size={11} />
                      </span>
                    </Link>
                  </div>
                  <div className="lg:col-span-2 p-8 bg-white">
                    <p className="text-[var(--navy)]/70 leading-relaxed font-['DM_Sans'] mb-5">
                      {area.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {area.tags.map((tag) => (
                        <span key={tag} className="badge-gold">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* Aree secondarie */}
      <section className="py-20 md:py-24 section-warm">
        <div className="container">
          <FadeSection className="mb-12">
            <span className="section-number">II · Ulteriori Ambiti</span>
            <div className="gold-line" />
            <h2 className="section-title max-w-lg">
              Ulteriori aree di pratica
            </h2>
            <p className="text-[var(--navy)]/60 mt-3 font-['DM_Sans'] max-w-xl">
              Lo studio offre assistenza legale in un'ampia gamma di materie, garantendo
              un supporto professionale completo per ogni esigenza.
            </p>
          </FadeSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {areeSecondarie.map((area, i) => (
              <FadeSection key={area.title} delay={(i % 6) * 0.06}>
                <div className="practice-card flex items-start gap-4">
                  <div className="text-[var(--gold)] mt-0.5 shrink-0">{area.icon}</div>
                  <div>
                    <h3 className="font-['Cormorant_Garamond'] text-lg font-semibold text-[var(--navy)] mb-1">
                      {area.title}
                    </h3>
                    <p className="text-sm text-[var(--navy)]/60 font-['DM_Sans']">{area.desc}</p>
                  </div>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* Gratuito patrocinio */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container max-w-3xl">
          <FadeSection>
            <div className="border-l-2 border-[var(--gold)] pl-8">
              <span className="section-number">III · Accessibilità</span>
              <h2 className="font-['Cormorant_Garamond'] text-3xl font-semibold text-[var(--navy)] mb-4">
                Gratuito Patrocinio
              </h2>
              <p className="text-[var(--navy)]/70 leading-relaxed font-['DM_Sans'] mb-4">
                Lo studio presta assistenza anche in regime di <strong>gratuito patrocinio</strong>,
                garantendo l'accesso alla giustizia anche a chi non dispone dei mezzi economici
                necessari per sostenere le spese legali. L'Avv. Giacinti ha maturato specifica
                esperienza in questo ambito, avendo ricoperto il ruolo di Consigliere nella
                Commissione Gratuito Patrocinio dell'Ordine degli Avvocati di Frosinone.
              </p>
              <p className="text-sm text-[var(--navy)]/55 font-['DM_Sans']">
                Per verificare i requisiti di ammissione al gratuito patrocinio, contattare lo studio.
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
              Non trovi la tua situazione?
            </h2>
            <p className="text-white/60 mb-8 font-['DM_Sans'] max-w-lg mx-auto">
              Contattaci per una prima valutazione. Analizzeremo il tuo caso
              e ti indicheremo il percorso più adatto.
            </p>
            <Link href="/contatti">
              <span className="btn-gold">
                Contatta lo Studio
                <ArrowRight size={15} />
              </span>
            </Link>
          </FadeSection>
        </div>
      </section>
    </main>
  );
}
