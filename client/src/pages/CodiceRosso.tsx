/*
 * CODICE ROSSO – Avv. Giulia Giacinti
 * Design: Minimalismo Nordico Istituzionale
 */

import { Link } from "wouter";
import { ArrowRight, Shield, AlertCircle, CheckCircle, Heart } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const CODICE_ROSSO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663427002880/njcmPJh3CSxViANAxVByxY/codice-rosso-bg-jtVKwgXRq6yGjV3Yg7HWgF.webp";

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

const reati = [
  { title: "Stalking", desc: "Atti persecutori ripetuti che causano paura, ansia o alterazione delle abitudini di vita (art. 612-bis c.p.)." },
  { title: "Maltrattamenti in Famiglia", desc: "Violenza fisica, psicologica o economica all'interno del nucleo familiare o convivente (art. 572 c.p.)." },
  { title: "Violenza Sessuale", desc: "Costrizione ad atti sessuali mediante violenza, minaccia o abuso di autorità (art. 609-bis c.p.)." },
  { title: "Revenge Porn", desc: "Diffusione illecita di immagini o video sessualmente espliciti senza consenso (art. 612-ter c.p.)." },
  { title: "Doxxing", desc: "Pubblicazione non consensuale di dati personali con finalità persecutorie o di molestia." },
  { title: "Cyberbullismo", desc: "Atti di bullismo e molestia perpetrati attraverso strumenti digitali e social media." },
  { title: "Deepfake", desc: "Utilizzo di tecnologie di intelligenza artificiale per creare contenuti falsi e lesivi della dignità altrui." },
  { title: "Omesso Mantenimento", desc: "Inadempimento all'obbligo di mantenimento del coniuge o dei figli (art. 570 c.p.)." },
];

export default function CodiceRosso() {
  return (
    <main>
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={CODICE_ROSSO_IMG}
            alt="Codice Rosso"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[var(--navy)]/90" />
        </div>
        <div className="relative container">
          <div className="max-w-2xl">
            <span className="section-number text-[var(--gold)]">Specializzazione</span>
            <h1 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
              Codice Rosso:<br />
              <em className="font-normal text-[var(--gold-light)]">protezione, difesa, giustizia.</em>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed font-['DM_Sans'] max-w-xl">
              La Legge 69/2019, nota come "Codice Rosso", ha introdotto misure urgenti per
              la tutela delle vittime di violenza domestica e di genere. L'Avv. Giacinti
              è tra i professionisti più esperti in questo ambito nel territorio di Frosinone.
            </p>
          </div>
        </div>
      </section>

      {/* Cosa è il Codice Rosso */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <FadeSection>
              <span className="section-number">I · La Legge</span>
              <div className="gold-line" />
              <h2 className="section-title mb-6">
                Cos'è il Codice Rosso
              </h2>
              <p className="text-[var(--navy)]/70 leading-relaxed mb-5 font-['DM_Sans']">
                Il Codice Rosso (Legge 19 luglio 2019, n. 69) è una normativa che ha introdotto
                modifiche significative al codice penale e al codice di procedura penale per
                rafforzare la tutela delle vittime di violenza domestica e di genere.
              </p>
              <p className="text-[var(--navy)]/70 leading-relaxed mb-5 font-['DM_Sans']">
                La legge prevede tempi accelerati per le indagini, l'obbligo per il pubblico
                ministero di sentire la persona offesa entro tre giorni dalla notizia di reato,
                e l'introduzione di nuove fattispecie di reato come il revenge porn e il
                codice deontologico per i professionisti del settore.
              </p>
              <div className="quote-gold">
                "Conoscere la legge non basta. Bisogna sapere come applicarla nel momento
                in cui ogni ora conta."
              </div>
            </FadeSection>

            <FadeSection delay={0.15}>
              <div className="space-y-5">
                <div className="p-6 bg-[var(--warm-gray)] border-l-2 border-[var(--gold)]">
                  <div className="flex items-start gap-3">
                    <Shield size={18} className="text-[var(--gold)] mt-0.5 shrink-0" />
                    <div>
                      <h3 className="font-['Cormorant_Garamond'] text-lg font-semibold text-[var(--navy)] mb-2">
                        Assistenza alle Vittime
                      </h3>
                      <p className="text-sm text-[var(--navy)]/65 font-['DM_Sans'] leading-relaxed">
                        L'Avv. Giacinti accompagna le vittime in ogni fase del procedimento:
                        dalla denuncia alla costituzione di parte civile, dalla richiesta di
                        misure cautelari al giudizio. Un supporto legale che è anche umano.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-[var(--warm-gray)] border-l-2 border-[var(--navy)]/30">
                  <div className="flex items-start gap-3">
                    <AlertCircle size={18} className="text-[var(--navy)]/50 mt-0.5 shrink-0" />
                    <div>
                      <h3 className="font-['Cormorant_Garamond'] text-lg font-semibold text-[var(--navy)] mb-2">
                        Difesa degli Imputati
                      </h3>
                      <p className="text-sm text-[var(--navy)]/65 font-['DM_Sans'] leading-relaxed">
                        Anche chi è accusato ha diritto a una difesa tecnica qualificata.
                        La conoscenza approfondita dei meccanismi del Codice Rosso permette
                        di costruire strategie difensive efficaci e rispettose del giusto processo.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-[var(--warm-gray)] border-l-2 border-[var(--gold)]/50">
                  <div className="flex items-start gap-3">
                    <Heart size={18} className="text-[var(--gold)] mt-0.5 shrink-0" />
                    <div>
                      <h3 className="font-['Cormorant_Garamond'] text-lg font-semibold text-[var(--navy)] mb-2">
                        Gratuito Patrocinio
                      </h3>
                      <p className="text-sm text-[var(--navy)]/65 font-['DM_Sans'] leading-relaxed">
                        Lo studio presta assistenza anche in regime di gratuito patrocinio,
                        garantendo che nessuna vittima di violenza rimanga senza difesa
                        per ragioni economiche.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeSection>
          </div>
        </div>
      </section>

      {/* Reati trattati */}
      <section className="py-20 md:py-24 section-warm">
        <div className="container">
          <FadeSection className="mb-14">
            <span className="section-number">II · Reati</span>
            <div className="gold-line" />
            <h2 className="section-title max-w-xl">
              I reati più trattati
            </h2>
            <p className="text-[var(--navy)]/60 mt-3 font-['DM_Sans'] max-w-xl">
              Una panoramica delle principali fattispecie penali in cui lo studio
              vanta una consolidata esperienza difensiva.
            </p>
          </FadeSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {reati.map((reato, i) => (
              <FadeSection key={reato.title} delay={(i % 4) * 0.08}>
                <div className="practice-card flex items-start gap-4">
                  <CheckCircle size={16} className="text-[var(--gold)] mt-1 shrink-0" />
                  <div>
                    <h3 className="font-['Cormorant_Garamond'] text-lg font-semibold text-[var(--navy)] mb-1">
                      {reato.title}
                    </h3>
                    <p className="text-sm text-[var(--navy)]/60 font-['DM_Sans'] leading-relaxed">
                      {reato.desc}
                    </p>
                  </div>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* Doppia prospettiva */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container max-w-3xl">
          <FadeSection>
            <span className="section-number">III · Vantaggio Strategico</span>
            <div className="gold-line" />
            <h2 className="section-title mb-6">
              La doppia prospettiva: un valore unico
            </h2>
            <p className="text-[var(--navy)]/70 leading-relaxed mb-5 font-['DM_Sans']">
              L'Avv. Giacinti ha maturato la propria esperienza assistendo sia le vittime
              di reato sia le persone indagate o imputate. Questa posizione privilegiata
              le consente di comprendere a fondo le dinamiche processuali da entrambi i lati,
              anticipando le mosse della controparte e costruendo strategie difensive
              più efficaci.
            </p>
            <p className="text-[var(--navy)]/70 leading-relaxed mb-8 font-['DM_Sans']">
              Nel contesto del Codice Rosso, dove le misure cautelari possono essere adottate
              in tempi brevissimi e le conseguenze per la vita delle persone sono immediate,
              questa competenza trasversale rappresenta un vantaggio strategico determinante.
            </p>
            <div className="quote-gold">
              "Aver difeso entrambi i lati mi ha insegnato dove si nascondono le debolezze
              di ogni accusa e dove si trovano le forze di ogni difesa."
            </div>
          </FadeSection>
        </div>
      </section>

      {/* CTA urgente */}
      <section className="py-16 bg-[var(--navy)]">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <FadeSection>
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 border border-[var(--gold)]/30 text-[var(--gold)] text-xs font-['DM_Sans'] tracking-widest uppercase">
                <Shield size={12} />
                Assistenza Urgente Disponibile
              </div>
              <h2 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl font-semibold text-white mb-4">
                Hai bisogno di assistenza immediata?
              </h2>
              <p className="text-white/60 mb-8 font-['DM_Sans'] leading-relaxed">
                Nei procedimenti legati al Codice Rosso, ogni ora può fare la differenza.
                Contatta lo studio per una consulenza urgente e riservata.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contatti">
                  <span className="btn-gold">
                    Richiedi Assistenza Urgente
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
    </main>
  );
}
