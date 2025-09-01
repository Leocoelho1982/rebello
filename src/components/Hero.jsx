import React, { useEffect, useRef, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo_rebello_r from "../assets/logo_rebello_h.svg";
import bgUrl from "../assets/image_8.png";

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const heroRef = useRef(null);
  const textRef = useRef(null);

  // Bloquear scroll do body quando o menu mobile está aberto
  useEffect(() => {
    if (mobileOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [mobileOpen]);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop;
      setScrolled(y > 8);

      if (!heroRef.current || !textRef.current) return;

      const heroTop = heroRef.current.offsetTop;
      const heroH = heroRef.current.offsetHeight;
      const vh = window.innerHeight;
      const scrollInside = Math.min(Math.max(y - heroTop, 0), heroH - vh);
      const progress = scrollInside / (heroH - vh);

      const startY = vh * 0.5;
      const endY = 72;
      const currentY = startY + (endY - startY) * progress;

      textRef.current.style.transform = `translateX(-50%) translateY(${currentY}px)`;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const NavLink = ({ href, children }) => (
    <a
      href={href}
      className="px-3 py-2 text-sm font-medium tracking-wide hover:opacity-100 opacity-90 transition"
    >
      {children}
    </a>
  );

  return (
    <header className="relative w-full text-white">
      {/* FUNDO */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgUrl})` }}
        aria-hidden="true"
      />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-black/40" aria-hidden="true" />

      {/* NAVBAR */}
      <nav
        className={[
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          scrolled ? "bg-black/80 backdrop-blur" : "bg-transparent",
        ].join(" ")}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className={`flex items-center justify-between ${scrolled ? "h-16 py-0" : "h-24 py-3"}`}>
            <a href="/" className="flex items-center gap-3">
              <img
                src={logo_rebello_r}
                alt="Logo Rebello"
                className={`w-auto object-contain transition-all duration-300 ${
                  scrolled ? "h-10" : "h-16"
                }`}
              />
            </a>

            {/* Botão Mobile */}
            <button
              aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
              className="lg:hidden inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>

            {/* Links Desktop */}
            <div className="hidden lg:flex items-center gap-4">
              <NavLink href="#sobre">
                <span className="whitespace-nowrap">Sobre nós</span>
              </NavLink>
              <NavLink href="#servicos">Serviços</NavLink>
              <NavLink href="#galeria">Galeria</NavLink>
              <NavLink href="#porque">Porquê a Rebello?</NavLink>
              <NavLink href="#faq">FAQ</NavLink>
              <a
                href="#contacto"
                className="ml-3 inline-flex items-center rounded-xl border border-white/40 bg-[#B29146] px-4 py-2 text-sm font-semibold hover:bg-white hover:text-black transition"
              >
                Contactar
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* MENU MOBILE */}
      {/* Overlay escuro */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-black/60 transition-opacity duration-300 ${
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMobileOpen(false)}
        aria-hidden={!mobileOpen}
      />

      {/* Painel */}
      <aside
        className={`lg:hidden fixed inset-y-0 left-0 right-0 z-50 bg-[#000] text-white transition-transform duration-300 ${
          mobileOpen ? "translate-y-0" : "-translate-y-full"
        } rounded-b-2xl shadow-2xl`}
        role="dialog"
        aria-modal="true"
      >
        <div className="mx-auto max-w-7xl px-6 pt-6 pb-10">
          {/* Topo do painel */}
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-3">
              <img src={logo_rebello_r} alt="Logo Rebello" className="h-10 w-auto" />
            </a>
            <button
              aria-label="Fechar menu"
              className="inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
              onClick={() => setMobileOpen(false)}
            >
              <FiX size={24} />
            </button>
          </div>

          {/* Lista de links mobile */}
          <nav className="mt-8 space-y-6 text-lg">
            <a href="#sobre" className="block hover:text-white/90" onClick={() => setMobileOpen(false)}>
              Sobre nós
            </a>
            <a href="#servicos" className="block hover:text-white/90" onClick={() => setMobileOpen(false)}>
              Serviços
            </a>
            <a href="#galeria" className="block hover:text-white/90" onClick={() => setMobileOpen(false)}>
              Galeria
            </a>
            <a href="#porque" className="block hover:text-white/90" onClick={() => setMobileOpen(false)}>
              Porquê a Rebello?
            </a>
            <a href="#faq" className="block hover:text-white/90" onClick={() => setMobileOpen(false)}>
              FAQ
            </a>

            <hr className="my-6 border-white/10" />

            <a
              href="#contacto"
              className="block hover:text-white/90 font-semibold"
              onClick={() => setMobileOpen(false)}
            >
              Contactar
            </a>
          </nav>
        </div>
      </aside>

      {/* HERO */}
      <section ref={heroRef} className="relative h-[200vh]">
        <div className="sticky top-0 h-screen">
          <div className="relative mx-auto max-w-5xl px-6">
            <div
              ref={textRef}
              className="absolute text-center will-change-transform w-full max-w-3xl px-4"
              style={{
                left: "50%",
                transform: "translateX(-50%) translateY(50vh)",
              }}
            >
              <small className="text-[#B29146]">MICROPIGMENTAÇÃO</small>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight drop-shadow-lg">
                Redescubra a sua{" "}
                <span className="underline decoration-yellow-400/60">confiança</span>
              </h1>
              <p className="mt-4 text-base sm:text-lg md:text-xl text-white/85">
                A micropigmentação capilar recria a aparência de folículos capilares,
                oferecendo um visual natural e moderno para quem sofre de queda de cabelo
                ou calvície.
              </p>
            </div>

            <a
              href="#conteudo"
              className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 hover:text-white transition-opacity"
            >
              <div className="flex flex-col items-center gap-2">
                <span className="text-xs tracking-wide">scroll</span>
                <span className="h-8 w-[2px] bg-white/60 animate-pulse" />
              </div>
            </a>
          </div>
        </div>
      </section>
    </header>
  );
}
