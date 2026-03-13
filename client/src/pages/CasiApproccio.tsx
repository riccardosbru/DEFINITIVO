/*
 * CASI E APPROCCIO DIFENSIVO – Avv. Giulia Giacinti
 * Design: Minimalismo Nordico Istituzionale
 */

import { Link } from "wouter";
import { ArrowRight, CheckCircle, Search, FileText, Shield, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const SCALES_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663427002880/njcmPJh3CSxViANAxVByxY/giustizia-scales-QhtThB9stsYwCEgDK6wmWF.webp";

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

const fasi = [
  {
    num: "01",
    icon: <Search size={20} />,
    title: "Analisi del caso",
    desc: "Ogni difesa inizia da un'analisi approfondita della situazione: raccolta dei fatti, esame della documentazione, valutazione delle prove disponibili e identificazione dei punti di forza e di debolezza.",
  },
  {
    num: "02",
    icon: <FileText size={20} />,
    title: "Strategia difensiva",
    desc: "Sulla base dell'analisi, viene costruita una strategia difensiva personalizzata. Ogni caso è unico: non esistono soluzioni preconfezionate, ma percorsi costruiti sulle specificità di ogni situazione.",
  },
  {
    num: "03",
    icon: <Users size={20} />,
    title: "Comunicazione con il cliente",
    desc: "Il cliente viene informato in modo chiaro e costante sull'andamento del procedimento. Nessun tecnicismo incomprensibile: solo informazioni utili, fornite con trasparenza.",
  },
  {
    num: "04",
    icon: <Shield size={20} />,
    title: "Difesa in aula",
    desc: "La preparazione meticolosa si traduce in una difesa efficace nelle sedi giudiziarie. Ogni udienza è preparata nei minimi dettagli, anticipando le mosse della controparte.",
  },
];

export default function CasiApproccio() {
  return (
    <main>
      {/* Header */}
      <section className="py-16 md:py-20 bg-[var(--navy)]">
        <div className="container">
          <span className="section-number text-[var(--gold)]">Casi e Approccio</span>
          <h1 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-semibold text-white leading-tight max-w-2xl">
            Ogni caso è una storia. Ogni difesa è un impegno personale.
          </h1>
        </div>
      </section>

      {/* Filosofia difensiva */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeSection>
              <span className="section-number">I · Filosofia</span>
              <div className="gold-line" />
              <h2 className="section-title mb-6">
                L'approccio difensivo dell'Avv. Giacinti
              </h2>
              <p className="text-[var(--navy)]/70 leading-relaxed mb-5 font-['DM_Sans']">
                La difesa legale non è solo una questione di norme e procedure. È, prima di tutto,
                una questione di persone. L'Avv. Giacinti ha costruito il proprio approccio
                professionale su un principio fondamentale: comprendere a fondo la storia
                di ogni cliente prima di costruire qualsiasi strategia difensiva.
              </p>
              <p className="text-[var(--navy)]/70 leading-relaxed mb-8 font-['DM_Sans']">
                Questa filosofia si traduce in un metodo di lavoro rigoroso, che parte dall'ascolto
                attento del cliente, passa per un'analisi tecnica approfondita del caso e arriva
                a una difesa costruita su misura, capace di anticipare le mosse della controparte
                e di valorizzare ogni elemento favorevole.
              </p>
              <div className="quote-gold">
                "Non difendo casi. Difendo persone. E ogni persona merita una difesa
                costruita sulla sua storia specifica, non su schemi preconfezionati."
              </div>
            </FadeSection>

            <FadeSection delay={0.15}>
              <img
                src={SCALES_IMG}
                alt="Giustizia e equilibrio"
                className="w-full max-w-sm mx-auto object-cover"
                style={{ aspectRatio: "1/1" }}
              />
            </FadeSection>
          </div>
        </div>
      </section>

      {/* Metodo */}
      <section className="py-20 md:py-24 section-warm">
        <div className="container">
          <FadeSection className="mb-14">
            <span className="section-number">II · Metodo</span>
            <div className="gold-line" />
            <h2 className="section-title max-w-xl">
              Il metodo di lavoro
            </h2>
          </FadeSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {fasi.map((fase, i) => (
              <FadeSection key={fase.num} delay={i * 0.1}>
                <div className="practice-card h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <span className="font-['Cormorant_Garamond'] text-3xl font-light text-[var(--gold)]/40 leading-none shrink-0">
                      {fase.num}
                    </span>
                    <div className="text-[var(--gold)] mt-1">{fase.icon}</div>
                  </div>
                  <h3 className="font-['Cormorant_Garamond'] text-xl font-semibold text-[var(--navy)] mb-3">
                    {fase.title}
                  </h3>
                  <p className="text-sm text-[var(--navy)]/60 font-['DM_Sans'] leading-relaxed">
                    {fase.desc}
                  </p>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* Caso reale */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container max-w-3xl">
          <FadeSection>
            <span className="section-number">III · Caso Seguito</span>
            <div className="gold-line" />
            <h2 className="section-title mb-8">
              Un risultato concreto
            </h2>

            <div className="border border-[var(--border)] p-8 md:p-10 relative">
              <div className="absolute top-0 left-8 transform -translate-y-1/2">
                <span className="badge-gold">Procedimento Penale</span>
              </div>

              <div className="mb-6">
                <h3 className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[var(--navy)] mb-4">
                  Maltrattamenti e violenza domestica: revoca della misura cautelare
                </h3>
                <p className="text-[var(--navy)]/70 leading-relaxed font-['DM_Sans'] mb-4">
                  Il caso riguardava un procedimento penale per maltrattamenti in famiglia.
                  Il cliente si trovava sottoposto alla misura cautelare del divieto di
                  avvicinamento con braccialetto elettronico — una misura che limitava
                  significativamente la sua libertà di movimento e la sua vita quotidiana.
                </p>
                <p className="text-[var(--navy)]/70 leading-relaxed font-['DM_Sans'] mb-6">
                  Attraverso un'attività difensiva mirata, che ha incluso l'analisi approfondita
                  degli elementi probatori, la raccolta di documentazione a discarico e la
                  presentazione di una memoria difensiva articolata, l'Avv. Giacinti ha ottenuto
                  la <strong className="text-[var(--navy)]">revoca della misura cautelare</strong>,
                  restituendo al cliente la propria libertà di movimento in attesa del giudizio.
                </p>
              </div>

              <div className="pt-6 border-t border-[var(--border)]">
                <div className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-[var(--gold)]" />
                  <div>
                    <p className="text-xs font-['DM_Sans'] tracking-widest uppercase text-[var(--gold-dark)] font-medium">
                      Risultato ottenuto
                    </p>
                    <p className="text-[var(--navy)] font-['Cormorant_Garamond'] text-lg font-semibold">
                      Revoca del divieto di avvicinamento con braccialetto elettronico
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-5 bg-[var(--warm-gray)] text-xs text-[var(--navy)]/45 font-['DM_Sans'] italic">
              I dati identificativi del caso sono stati omessi per ragioni di riservatezza professionale.
              Il caso è presentato a scopo illustrativo dell'approccio difensivo dello studio.
            </div>
          </FadeSection>
        </div>
      </section>

      {/* Valori */}
      <section className="py-16 md:py-20 section-warm">
        <div className="container">
          <FadeSection className="mb-10">
            <span className="section-number">IV · Valori</span>
            <div className="gold-line" />
            <h2 className="section-title max-w-lg">I valori che guidano la difesa</h2>
          </FadeSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: "Riservatezza", desc: "Ogni informazione condivisa dal cliente è trattata con la massima discrezione professionale." },
              { title: "Trasparenza", desc: "Il cliente è sempre informato sull'andamento del caso, senza sorprese e senza tecnicismi." },
              { title: "Preparazione", desc: "Ogni udienza è preparata nei minimi dettagli. La meticolosità è una forma di rispetto verso il cliente." },
              { title: "Impegno", desc: "Ogni caso riceve la stessa attenzione e dedizione, indipendentemente dalla sua complessità." },
            ].map((v, i) => (
              <FadeSection key={v.title} delay={i * 0.08}>
                <div className="text-center p-6">
                  <div className="w-10 h-px bg-[var(--gold)] mx-auto mb-4" />
                  <h3 className="font-['Cormorant_Garamond'] text-xl font-semibold text-[var(--navy)] mb-2">
                    {v.title}
                  </h3>
                  <p className="text-sm text-[var(--navy)]/60 font-['DM_Sans'] leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[var(--navy)]">
        <div className="container text-center">
          <FadeSection>
            <h2 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl font-semibold text-white mb-4">
              Hai bisogno di una difesa efficace?
            </h2>
            <p className="text-white/60 mb-8 font-['DM_Sans'] max-w-lg mx-auto">
              Contatta lo studio per discutere il tuo caso in modo riservato.
            </p>
            <Link href="/contatti">
              <span className="btn-gold">
                Richiedi una Consulenza
                <ArrowRight size={15} />
              </span>
            </Link>
          </FadeSection>
        </div>
      </section>
    </main>
  );
}
