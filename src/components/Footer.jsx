import React from "react";

import logoRebello from "../assets/logo_rebello_h.svg";

import {
  FiInstagram,
  FiFacebook,
  FiPhone,
  FiMail,
  FiMapPin,
  FiArrowUpRight,
} from "react-icons/fi";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative text-white">
      {/* textura/overlay suave opcional */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background:
            "radial-gradient(1200px 400px at 50% -200px, rgba(255,255,255,.25), transparent 60%)",
        }}
      />

      {/* bloco principal */}
      <div
        className="relative"
        style={{ backgroundColor: "#B29146" }}
      >
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {/* Marca */}
            <div>
              <a href="/" className="inline-flex items-center gap-3">
                {/* LOGO SVG */}
                <img
                  src={logoRebello}
                  alt="Rebello"
                  className="h-18 w-auto brightness-0 invert" 
                />
              </a>
              <p className="mt-4 text-white/90 leading-relaxed">
                Micropigmentação capilar com resultados naturais e
                personalizados. Experiência, rigor e confidencialidade.
              </p>

              {/* sociais */}
              <div className="mt-6 flex items-center gap-4">
                <a
                  href="https://www.instagram.com/rebello_smp/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram Rebello"
                  className="rounded-full p-2 ring-1 ring-white/50 hover:ring-white transition"
                >
                  <FiInstagram size={20} />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook Rebello"
                  className="rounded-full p-2 ring-1 ring-white/50 hover:ring-white transition"
                >
                  <FiFacebook size={20} />
                </a>
              </div>
            </div>

            {/* Serviços */}
            <div>
              <h4 className="text-lg font-semibold">Serviços</h4>
              <ul className="mt-4 space-y-3">
                <li>
                  <a href="/servicos#tricopigmentacao" className="group inline-flex items-center gap-1 hover:underline">
                    Tricopigmentação
                    <FiArrowUpRight className="opacity-0 group-hover:opacity-100 transition" />
                  </a>
                </li>
                <li>
                  <a href="/servicos#correcao" className="group inline-flex items-center gap-1 hover:underline">
                    Correção/Retouch
                    <FiArrowUpRight className="opacity-0 group-hover:opacity-100 transition" />
                  </a>
                </li>
                <li>
                  <a href="/servicos#consultoria" className="group inline-flex items-center gap-1 hover:underline">
                    Consulta & Avaliação
                    <FiArrowUpRight className="opacity-0 group-hover:opacity-100 transition" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Navegação */}
            <div>
              <h4 className="text-lg font-semibold">Navegação</h4>
              <ul className="mt-4 space-y-3">
                <li><a href="/galeria" className="hover:underline">Galeria</a></li>
                <li><a href="/sobre" className="hover:underline">Sobre nós</a></li>
                <li><a href="/faq" className="hover:underline">FAQ</a></li>
                <li><a href="/politica-privacidade" className="hover:underline">Política de Privacidade</a></li>
              </ul>
            </div>

            {/* Contactos */}
            <div>
              <h4 className="text-lg font-semibold">Contactos</h4>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-3">
                  <FiMapPin className="mt-1 shrink-0" />
                  <span>Estúdio Rebello, Aveiro — Portugal</span>
                </li>
                <li className="flex items-center gap-3">
                  <FiPhone className="shrink-0" />
                  <a href="tel:+351000000000" className="hover:underline">+351 000 000 000</a>
                </li>
                <li className="flex items-center gap-3">
                  <FiMail className="shrink-0" />
                  <a href="mailto:contacto@rebello.pt" className="hover:underline">contacto@rebello.pt</a>
                </li>
              </ul>

              <a
                href="/contacto"
                className="mt-6 inline-flex items-center justify-center rounded-xl bg-black/30 px-5 py-3 font-medium ring-1 ring-white/40 hover:bg-black/40 transition"
              >
                Marcar consulta
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* faixa de créditos */}
      <div className="relative bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 py-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/80">
            © {year} Rebello. Todos os direitos reservados.
          </p>
          <p className="text-sm">
            Criado por{" "}
            <a
              href="https://codi-creative.example"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline decoration-white/50 hover:decoration-white"
              aria-label="CoDi Creative (abre nova aba)"
            >
              CoDi Creative
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
