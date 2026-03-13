/*
 * DIRITTO DI FAMIGLIA – Avv. Giulia Giacinti
 * Design: Minimalismo Nordico Istituzionale
 */

import { Link } from "wouter";
import { ArrowRight, Users, Heart, Scale, FileText, CheckCircle } from "lucide-react";
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

const servizi = [
  {
    icon: <Scale size={22} />,
    title: "Separazione Legale",
    desc: "Assistenza nella separazione consensuale e giudiziale. Analisi degli aspetti economici, patrimoniali e della tutela degli interessi del cliente. Attenzione alle novità della riforma Cartabia.",
  },
  {
    icon: <FileText size={22} />,
    title: "Divorzio",
    desc: "Gestione della procedura di divorzio in tutte le sue forme: congiunto, contenzioso, con o senza figli. Tutela degli accordi patrimoniali e del mantenimento.",
  },
  {
    icon: <Users size={22} />,
    title: "Affidamento dei Figli",
    desc: "Difesa degli interessi dei minori nelle procedure di affidamento e collocamento. Regolamentazione del diritto di visita del genitore non collocatario.",
  },
  {
    icon: <Heart size={22} />,
    title: "Tutela dei Minori",
    desc: "Protezione giuridica dei minori in situazioni di vulnerabilità. Procedure di adozione, affidamento familiare e tutela legale.",
  },
  {
    icon: <Scale size={22} />,
    title: "Unioni Civili",
    desc: "Costituzione e scioglimento di unioni civili tra persone dello stesso sesso. Regolamentazione dei diritti e doveri reciproci.",
  },
  {
    icon: <FileText size={22} />,
    title: "Adozioni",
    desc: "Assistenza nelle procedure di adozione nazionale e internazionale. Supporto legale in tutte le fasi del percorso adottivo.",
  },
];

export default function DirittoDiFamiglia() {
  return (
    <main>
      {/* Header */}
      <section className="py-16 md:py-20 bg-[var(--navy)]">
        <div className="container">
          <span className="section-number text-[var(--gold)]">Diritto di Famiglia</span>
          <h1 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-semibold text-white leading-tight max-w-2xl">
            Nei momenti più difficili della vita, la competenza legale fa la differenza.
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <FadeSection>
              <span className="section-number">I · Approccio</span>
              <div className="gold-line" />
              <h2 className="section-title mb-6">
                Una difesa che mette al centro le persone
              </h2>
              <p className="text-[var(--navy)]/70 leading-relaxed mb-5 font-['DM_Sans']">
                Le controversie familiari sono tra le più delicate che un avvocato possa affrontare.
                Coinvolgono emozioni profonde, relazioni complesse e, spesso, il futuro dei figli.
                L'Avv. Giacinti affronta queste situazioni con la competenza tecnica necessaria
                e la sensibilità umana che ogni caso richiede.
              </p>
              <p className="text-[var(--navy)]/70 leading-relaxed mb-8 font-['DM_Sans']">
                Nelle cause di separazione, l'Avv. Giacinti analizza con grande attenzione
                gli aspetti economici e patrimoniali, tutelando gli interessi del cliente
                in modo strategico e lungimirante. Tiene conto delle novità introdotte dalla
                <strong className="text-[var(--navy)]"> riforma Cartabia</strong>, che ha
                profondamente modificato i procedimenti di diritto di famiglia.
              </p>
              <div className="quote-gold">
                "In una separazione, non si tratta solo di dividere beni. Si tratta di
                costruire un futuro dignitoso per tutte le persone coinvolte, soprattutto
                per i figli."
              </div>
            </FadeSection>

            <FadeSection delay={0.15}>
              <div className="bg-[var(--warm-gray)] p-8 h-full">
                <h3 className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[var(--navy)] mb-6">
                  La riforma Cartabia nel diritto di famiglia
                </h3>
                <div className="space-y-4">
                  {[
                    "Unificazione dei riti processuali in materia di famiglia",
                    "Nuovo procedimento unitario per separazione, divorzio e figli",
                    "Rafforzamento della tutela dei minori nelle procedure",
                    "Nuove disposizioni sull'ascolto del minore",
                    "Modifiche al regime dell'affidamento condiviso",
                    "Potenziamento degli strumenti di mediazione familiare",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle size={15} className="text-[var(--gold)] mt-0.5 shrink-0" />
                      <p className="text-sm text-[var(--navy)]/70 font-['DM_Sans']">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-[var(--border)]">
                  <p className="text-xs text-[var(--navy)]/45 font-['DM_Sans'] italic">
                    D.Lgs. 10 ottobre 2022, n. 149 – Riforma Cartabia
                  </p>
                </div>
              </div>
            </FadeSection>
          </div>
        </div>
      </section>

      {/* Servizi */}
      <section className="py-20 md:py-24 section-warm">
        <div className="container">
          <FadeSection className="mb-14">
            <span className="section-number">II · Servizi</span>
            <div className="gold-line" />
            <h2 className="section-title max-w-xl">
              Cosa possiamo fare per te
            </h2>
          </FadeSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servizi.map((s, i) => (
              <FadeSection key={s.title} delay={(i % 3) * 0.1}>
                <div className="practice-card h-full">
                  <div className="text-[var(--gold)] mb-4">{s.icon}</div>
                  <h3 className="font-['Cormorant_Garamond'] text-xl font-semibold text-[var(--navy)] mb-3">
                    {s.title}
                  </h3>
                  <p className="text-sm text-[var(--navy)]/60 font-['DM_Sans'] leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* Aspetti economici */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container max-w-3xl">
          <FadeSection>
            <span className="section-number">III · Aspetti Patrimoniali</span>
            <div className="gold-line" />
            <h2 className="section-title mb-6">
              La tutela economica e patrimoniale
            </h2>
            <p className="text-[var(--navy)]/70 leading-relaxed mb-5 font-['DM_Sans']">
              Uno degli aspetti più critici nelle separazioni è la tutela degli interessi
              economici e patrimoniali. L'Avv. Giacinti analizza con grande attenzione
              ogni aspetto della situazione finanziaria del cliente: dalla divisione dei beni
              comuni all'assegno di mantenimento, dalla casa coniugale agli investimenti,
              dai debiti condivisi alle pensioni future.
            </p>
            <p className="text-[var(--navy)]/70 leading-relaxed mb-8 font-['DM_Sans']">
              Una valutazione patrimoniale accurata, condotta fin dalle prime fasi del
              procedimento, può fare la differenza tra un accordo equo e uno svantaggioso.
              L'obiettivo è sempre quello di tutelare il cliente nel lungo periodo,
              non solo nell'immediato.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Divisione dei beni comuni",
                "Assegno di mantenimento coniuge",
                "Mantenimento dei figli",
                "Assegnazione della casa coniugale",
                "Divisione di investimenti e risparmi",
                "Gestione dei debiti condivisi",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 p-3 border border-[var(--border)]">
                  <CheckCircle size={14} className="text-[var(--gold)] shrink-0" />
                  <span className="text-sm text-[var(--navy)]/70 font-['DM_Sans']">{item}</span>
                </div>
              ))}
            </div>
          </FadeSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[var(--navy)]">
        <div className="container text-center">
          <FadeSection>
            <h2 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl font-semibold text-white mb-4">
              Stai attraversando una separazione?
            </h2>
            <p className="text-white/60 mb-8 font-['DM_Sans'] max-w-lg mx-auto">
              Non affrontarla da solo. Una consulenza legale tempestiva può
              proteggere i tuoi diritti e quelli dei tuoi figli.
            </p>
            <Link href="/contatti">
              <span className="btn-gold">
                Prenota una Consulenza Riservata
                <ArrowRight size={15} />
              </span>
            </Link>
          </FadeSection>
        </div>
      </section>
    </main>
  );
}
