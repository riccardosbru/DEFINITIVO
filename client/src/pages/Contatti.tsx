/*
 * CONTATTI – Avv. Giulia Giacinti
 * Design: Minimalismo Nordico Istituzionale
 */

import { useState, useEffect, useRef } from "react";
import { MapPin, Clock, Scale, Send, CheckCircle } from "lucide-react";

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

export default function Contatti() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefono: "",
    materia: "",
    messaggio: "",
    privacy: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <main>
      {/* Header */}
      <section className="py-16 md:py-20 bg-[var(--navy)]">
        <div className="container">
          <span className="section-number text-[var(--gold)]">Contatti</span>
          <h1 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-semibold text-white leading-tight max-w-2xl">
            Il primo passo verso la tua difesa inizia qui.
          </h1>
        </div>
      </section>

      {/* Contatti + Form */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

            {/* Info contatti */}
            <FadeSection>
              <span className="section-number">I · Dove Siamo</span>
              <div className="gold-line" />
              <h2 className="section-title mb-8">
                Contatta lo Studio
              </h2>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-[var(--gold)]/30 flex items-center justify-center text-[var(--gold)] shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="font-['Cormorant_Garamond'] text-lg font-semibold text-[var(--navy)] mb-1">
                      Sede dello Studio
                    </p>
                    <p className="text-sm text-[var(--navy)]/65 font-['DM_Sans']">
                      Via Tiburtina 203<br />
                      03100 Frosinone (FR)
                    </p>
                    <p className="text-xs text-[var(--navy)]/40 font-['DM_Sans'] mt-1">
                      Studio Legale Grieco
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-[var(--gold)]/30 flex items-center justify-center text-[var(--gold)] shrink-0">
                    <Clock size={18} />
                  </div>
                  <div>
                    <p className="font-['Cormorant_Garamond'] text-lg font-semibold text-[var(--navy)] mb-1">
                      Orari di Ricevimento
                    </p>
                    <p className="text-sm text-[var(--navy)]/65 font-['DM_Sans']">
                      Lunedì – Venerdì: 9:00 – 18:00<br />
                      Sabato: su appuntamento
                    </p>
                    <p className="text-xs text-[var(--navy)]/40 font-['DM_Sans'] mt-1">
                      Per urgenze legate al Codice Rosso, contattare direttamente lo studio
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-[var(--gold)]/30 flex items-center justify-center text-[var(--gold)] shrink-0">
                    <Scale size={18} />
                  </div>
                  <div>
                    <p className="font-['Cormorant_Garamond'] text-lg font-semibold text-[var(--navy)] mb-1">
                      Ordine Professionale
                    </p>
                    <p className="text-sm text-[var(--navy)]/65 font-['DM_Sans']">
                      Ordine degli Avvocati di Frosinone<br />
                      Iscritta all'Albo
                    </p>
                  </div>
                </div>
              </div>

              {/* Mappa */}
              <div className="border border-[var(--border)] overflow-hidden">
                <iframe
                  title="Studio Legale Avv. Giulia Giacinti - Via Tiburtina 203, Frosinone"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.5!2d13.3429!3d41.6395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13254e3b7c2a1b1f%3A0x1!2sVia+Tiburtina+203%2C+Frosinone!5e0!3m2!1sit!2sit!4v1"
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </FadeSection>

            {/* Form */}
            <FadeSection delay={0.15}>
              <span className="section-number">II · Richiesta</span>
              <div className="gold-line" />
              <h2 className="section-title mb-4">
                Richiedi una Consulenza
              </h2>
              <p className="text-[var(--navy)]/60 font-['DM_Sans'] text-sm mb-8">
                Compila il modulo per richiedere una prima consulenza riservata.
                Risponderemo entro 24 ore lavorative.
              </p>

              {submitted ? (
                <div className="border border-[var(--gold)]/30 bg-[var(--warm-gray)] p-8 text-center">
                  <CheckCircle size={32} className="text-[var(--gold)] mx-auto mb-4" />
                  <h3 className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[var(--navy)] mb-2">
                    Richiesta inviata
                  </h3>
                  <p className="text-sm text-[var(--navy)]/65 font-['DM_Sans']">
                    Grazie per averci contattato. L'Avv. Giacinti la ricontatterà
                    entro 24 ore lavorative per fissare un appuntamento.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-['DM_Sans'] font-medium tracking-widest uppercase text-[var(--navy)]/60 mb-2">
                        Nome e Cognome *
                      </label>
                      <input
                        type="text"
                        name="nome"
                        required
                        value={formData.nome}
                        onChange={handleChange}
                        className="w-full border border-[var(--border)] bg-white px-4 py-3 text-sm font-['DM_Sans'] text-[var(--navy)] focus:outline-none focus:border-[var(--navy)] transition-colors"
                        placeholder="Mario Rossi"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-['DM_Sans'] font-medium tracking-widest uppercase text-[var(--navy)]/60 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border border-[var(--border)] bg-white px-4 py-3 text-sm font-['DM_Sans'] text-[var(--navy)] focus:outline-none focus:border-[var(--navy)] transition-colors"
                        placeholder="mario@email.it"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-['DM_Sans'] font-medium tracking-widest uppercase text-[var(--navy)]/60 mb-2">
                        Telefono
                      </label>
                      <input
                        type="tel"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        className="w-full border border-[var(--border)] bg-white px-4 py-3 text-sm font-['DM_Sans'] text-[var(--navy)] focus:outline-none focus:border-[var(--navy)] transition-colors"
                        placeholder="+39 333 000 0000"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-['DM_Sans'] font-medium tracking-widest uppercase text-[var(--navy)]/60 mb-2">
                        Materia
                      </label>
                      <select
                        name="materia"
                        value={formData.materia}
                        onChange={handleChange}
                        className="w-full border border-[var(--border)] bg-white px-4 py-3 text-sm font-['DM_Sans'] text-[var(--navy)] focus:outline-none focus:border-[var(--navy)] transition-colors"
                      >
                        <option value="">Seleziona...</option>
                        <option value="penale">Diritto Penale</option>
                        <option value="codice-rosso">Codice Rosso</option>
                        <option value="famiglia">Diritto di Famiglia</option>
                        <option value="civile">Diritto Civile</option>
                        <option value="lavoro">Diritto del Lavoro</option>
                        <option value="altro">Altro</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-['DM_Sans'] font-medium tracking-widest uppercase text-[var(--navy)]/60 mb-2">
                      Descrizione del caso *
                    </label>
                    <textarea
                      name="messaggio"
                      required
                      value={formData.messaggio}
                      onChange={handleChange}
                      rows={5}
                      className="w-full border border-[var(--border)] bg-white px-4 py-3 text-sm font-['DM_Sans'] text-[var(--navy)] focus:outline-none focus:border-[var(--navy)] transition-colors resize-none"
                      placeholder="Descriva brevemente la sua situazione..."
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      name="privacy"
                      id="privacy"
                      required
                      checked={formData.privacy}
                      onChange={handleChange}
                      className="mt-1 shrink-0"
                    />
                    <label htmlFor="privacy" className="text-xs text-[var(--navy)]/55 font-['DM_Sans'] leading-relaxed">
                      Ho letto e accetto l'informativa sulla privacy. I dati forniti saranno
                      trattati nel rispetto del GDPR 679/2016 e utilizzati esclusivamente
                      per rispondere alla presente richiesta.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full justify-center"
                  >
                    Invia la Richiesta
                    <Send size={14} />
                  </button>

                  <p className="text-xs text-[var(--navy)]/40 font-['DM_Sans'] text-center">
                    La comunicazione è riservata e protetta dal segreto professionale.
                  </p>
                </form>
              )}
            </FadeSection>
          </div>
        </div>
      </section>

      {/* Note legali */}
      <section className="py-10 section-warm border-t border-[var(--border)]">
        <div className="container">
          <FadeSection>
            <p className="text-xs text-[var(--navy)]/45 font-['DM_Sans'] leading-relaxed max-w-3xl mx-auto text-center">
              Le informazioni contenute in questo sito hanno carattere puramente informativo e non
              costituiscono consulenza legale. Per ricevere assistenza professionale è necessario
              rivolgersi direttamente allo studio. La compilazione del modulo di contatto non
              instaura alcun rapporto professionale tra l'utente e l'Avv. Giacinti.
            </p>
          </FadeSection>
        </div>
      </section>
    </main>
  );
}
