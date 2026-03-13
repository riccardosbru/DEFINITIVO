/*
 * NAVBAR – Avv. Giulia Giacinti
 * Design: Minimalismo Nordico Istituzionale
 * Navigazione orizzontale fissa, ultra-sottile, sfondo bianco con bordo inferiore sottile
 */

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Chi Sono", href: "/chi-sono" },
  { label: "Aree di Attività", href: "/aree-di-attivita" },
  { label: "Codice Rosso", href: "/codice-rosso" },
  { label: "Diritto di Famiglia", href: "/diritto-di-famiglia" },
  { label: "Casi e Approccio", href: "/casi-e-approccio" },
  { label: "Credenziali", href: "/credenziali" },
  { label: "Contatti", href: "/contatti" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      {/* Top bar */}
      <div className="bg-[var(--navy)] text-[var(--warm-white)] text-xs py-2 hidden md:block">
        <div className="container flex justify-between items-center">
          <span className="opacity-70 tracking-wide">
            Studio Legale · Via Tiburtina 203, Frosinone (FR)
          </span>
          <a
            href="/contatti"
            className="flex items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity"
          >
            <Phone size={11} />
            <span className="tracking-wide">Richiedi una consulenza</span>
          </a>
        </div>
      </div>

      {/* Main navbar */}
      <header
        className={`sticky top-0 z-50 bg-[var(--warm-white)] transition-all duration-300 ${
          scrolled ? "shadow-[0_1px_20px_oklch(0.18_0.055_255/0.08)]" : "border-b border-[var(--border)]"
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/">
              <div className="flex flex-col cursor-pointer group">
                <span
                  className="font-['Cormorant_Garamond'] text-lg md:text-xl font-semibold tracking-wide text-[var(--navy)] leading-tight group-hover:text-[var(--navy-light)] transition-colors whitespace-nowrap"
                >
                  Avv. Giulia Giacinti
                </span>
                <span className="text-[0.58rem] tracking-[0.16em] uppercase text-[var(--gold)] font-['DM_Sans'] font-medium whitespace-nowrap">
                  Studio Legale · Frosinone
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <span
                    className={`nav-link text-[0.72rem] whitespace-nowrap ${location === item.href ? "active" : ""}`}
                  >
                    {item.label}
                  </span>
                </Link>
              ))}
            </nav>

            {/* CTA desktop */}
            <div className="hidden lg:block">
              <Link href="/contatti">
                <span className="btn-primary text-xs py-2.5 px-5">
                  Consulenza
                </span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 text-[var(--navy)]"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-[var(--border)] bg-[var(--warm-white)]">
            <div className="container py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <span
                    className={`block py-3 px-2 text-sm font-['DM_Sans'] font-medium tracking-wide text-[var(--navy)] border-b border-[var(--border)] last:border-0 ${
                      location === item.href ? "text-[var(--gold-dark)]" : ""
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              ))}
              <div className="pt-4">
                <Link href="/contatti">
                  <span className="btn-primary w-full justify-center text-xs">
                    Richiedi una Consulenza
                  </span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
