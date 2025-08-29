import React, { useEffect, useRef, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo_rebello_r from "../assets/logo_rebello_h.svg";
import bgUrl from "../assets/image_8.png";

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // refs para cálculo do progresso de scroll dentro do hero
  const heroRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop;
      setScrolled(y > 8);

      if (!heroRef.current || !textRef.current) return;

      // progresso do scroll APENAS dentro do hero (0 → 1)
      const heroTop = heroRef.current.offsetTop;
      const heroH = heroRef.current.offsetHeight;
      const vh = window.innerHeight;
      const scrollInside = Math.min(
        Math.max(y - heroTop, 0),
        heroH - vh
      );
      const progress = scrollInside / (heroH - vh); // 0..1

      // Posição do texto: começa centrado e sobe até ao topo (com margem)
      const startY = vh * 0.5;     // centro
      const endY = 72;             // “encostado” ao topo com ~72px de respiro
      const currentY = startY + (endY - startY) * progress; // interp

      // Coloca o bloco de texto nessa Y absoluta (em px) dentro do viewport
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
      {/* CAMADA DE FUNDO FIXA (a imagem fica parada) */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgUrl})` }}
        aria-hidden="true"
      />

      {/* overlays/efeitos opcionais */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-black/40" aria-hidden="true" />

      {/* NAVBAR */}
      <nav
        className={[
          "fixed top-0 left-0 right-0 z-30 transition-all duration-300",
          scrolled ? "bg-black/80 backdrop-blur" : "bg-transparent",
        ].join(" ")}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className={`flex items-center justify-between ${scrolled ? "h-16 py-0" : "h-24 py-3"}`}>
            <div className="flex w-full items-center justify-between lg:justify-start">
              <a href="/" className="flex items-center gap-3">
                <img
                  src={logo_rebello_r}
                  alt="Logo Rebello"
                  className={`w-auto object-contain transition-all duration-300 ${
                    scrolled ? "h-10" : "h-20"
                  }`}
                />
              </a>
              <button
                aria-label="Abrir menu"
                className="lg:hidden inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
                onClick={() => setMobileOpen((v) => !v)}
              >
                {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <NavLink href="#servicos">Serviços</NavLink>
              <NavLink href="#gallery">Galeria</NavLink>
              <NavLink href="#sobre"><span className="whitespace-nowrap">Sobre nós</span></NavLink>
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

        {mobileOpen && (
          <div className="lg:hidden border-t border-white/10 bg-black/90">
            {/* …links mobile… */}
          </div>
        )}
      </nav>

      {/* HERO “CENA”: 200vh para haver espaço de scroll; sticky mantém o viewport */}
      <section ref={heroRef} className="relative h-[200vh]">
        <div className="sticky top-0 h-screen">
          {/* container para centralização horizontal */}
          <div className="relative mx-auto max-w-5xl px-6">
            {/* bloco de texto que se move (apenas ele rola) */}
            {/* bloco de texto que se move */}
<div
  ref={textRef}
  className="absolute text-center will-change-transform w-full max-w-3xl px-4"
  style={{
    left: "50%",
    transform: "translateX(-50%) translateY(50vh)", // começa centrado
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


            {/* indicador de scroll (fixo no viewport) */}
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
