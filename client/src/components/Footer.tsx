/*
 * FOOTER – Avv. Giulia Giacinti
 * Design: Minimalismo Nordico Istituzionale – sfondo navy, testo bianco caldo
 */

import { Link } from "wouter";
import { MapPin, Mail, Phone, Scale } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[var(--navy)] text-[var(--warm-white)]">
      <div className="container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Scale size={18} className="text-[var(--gold)]" />
              <span className="font-['Cormorant_Garamond'] text-xl font-semibold tracking-wide">
                Avv. Giulia Giacinti
              </span>
            </div>
            <p className="text-xs tracking-[0.15em] uppercase text-[var(--gold)] mb-5 font-['DM_Sans']">
              Studio Legale · Frosinone
            </p>
            <p className="text-sm text-white/60 leading-relaxed font-['DM_Sans']">
              Oltre 15 anni di esperienza nella difesa dei diritti delle persone.
              Professionalità, competenza e ascolto.
            </p>
          </div>

          {/* Navigazione */}
          <div>
            <h4 className="font-['Cormorant_Garamond'] text-base font-semibold tracking-wide mb-5 text-white/90">
              Navigazione
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "Chi Sono", href: "/chi-sono" },
                { label: "Aree di Attività", href: "/aree-di-attivita" },
                { label: "Codice Rosso", href: "/codice-rosso" },
                { label: "Diritto di Famiglia", href: "/diritto-di-famiglia" },
                { label: "Casi e Approccio", href: "/casi-e-approccio" },
                { label: "Credenziali", href: "/credenziali" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>
                    <span className="text-sm text-white/60 hover:text-[var(--gold)] transition-colors font-['DM_Sans'] tracking-wide cursor-pointer">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Aree di pratica */}
          <div>
            <h4 className="font-['Cormorant_Garamond'] text-base font-semibold tracking-wide mb-5 text-white/90">
              Aree Principali
            </h4>
            <ul className="space-y-3">
              {[
                "Diritto Penale",
                "Codice Rosso",
                "Diritto di Famiglia",
                "Separazione e Divorzio",
                "Tutela dei Minori",
                "Diritto Civile",
                "Gratuito Patrocinio",
              ].map((area) => (
                <li key={area}>
                  <span className="text-sm text-white/60 font-['DM_Sans'] tracking-wide">
                    {area}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contatti */}
          <div>
            <h4 className="font-['Cormorant_Garamond'] text-base font-semibold tracking-wide mb-5 text-white/90">
              Contatti
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-[var(--gold)] mt-0.5 shrink-0" />
                <span className="text-sm text-white/60 font-['DM_Sans'] leading-relaxed">
                  Via Tiburtina 203<br />
                  03100 Frosinone (FR)
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-[var(--gold)] shrink-0" />
                <Link href="/contatti">
                  <span className="text-sm text-white/60 hover:text-[var(--gold)] transition-colors font-['DM_Sans'] cursor-pointer">
                    Scrivici
                  </span>
                </Link>
              </li>
            </ul>

            <div className="mt-8">
              <Link href="/contatti">
                <span className="btn-gold text-xs py-2.5 px-5 inline-flex">
                  Prenota Consulenza
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs text-white/40 font-['DM_Sans'] tracking-wide">
            © {new Date().getFullYear()} Avv. Giulia Giacinti · Iscritta all'Ordine degli Avvocati di Frosinone
          </p>
          <p className="text-xs text-white/40 font-['DM_Sans'] tracking-wide">
            P.IVA · Studio Legale Grieco · Via Tiburtina 203, Frosinone
          </p>
        </div>
      </div>
    </footer>
  );
}
