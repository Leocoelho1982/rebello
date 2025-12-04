import React from "react";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiClock,
} from "react-icons/fi";

export default function Contact() {
  const whatsappHref = "https://wa.me/351912023400";

  return (
    <section id="contacto"
      className="min-h-screen flex flex-col items-center justify-center px-4 py-16 text-center gap-10"
      style={{ backgroundColor: "#000" }}
    >
      {/* Título + descrição */}
      <div  className="max-w-7xl">
        <h1 className="text-4xl md:text-7xl font-bold text-white mb-4">
          Entre em contacto connosco
        </h1>
        <p className="text-lg text-white/80">
          Tire as suas dúvidas ou agende a sua sessão. Responderemos com a maior brevidade.
        </p>
      </div>

      {/* Botão WhatsApp */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-3 rounded-full px-8 py-4 text-lg font-semibold transition
           bg-[#25D366] text-white hover:bg-[#1DA851] focus:outline-none focus:ring-4 focus:ring-white/20"

        aria-label="Falar no WhatsApp"
      >
        <FiPhone size={22} />
        Falar no WhatsApp
      </a>

      {/* Cartões */}
      <div  className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
        {/* Informações de contacto */}
        <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 p-6 md:p-8 backdrop-blur">
          <h2 className="text-white text-lg font-semibold mb-6">
            Informações de contacto
          </h2>

          <ul className="space-y-5 text-white/90">
            <li className="flex items-start gap-3">
              <span className="mt-1 shrink-0">
                <FiMapPin />
              </span>
              <div>
                <p className="text-sm uppercase tracking-wide text-white/60">Localização</p>
                <p>R. Cónego Maio, 101A, 3810-089. Aveiro</p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-1 shrink-0">
                <FiPhone />
              </span>
              <div>
                <p className="text-sm uppercase tracking-wide text-white/60">Nr. de telemóvel</p>
                <a href="tel:+351912023400" className="hover:underline">
                  +351 912 023 400
                </a>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-1 shrink-0">
                <FiMail />
              </span>
              <div>
                <p className="text-sm uppercase tracking-wide text-white/60">Endereço de e-mail</p>
                <a href="mailto:diogorebelo.edu@gmail.com" className="hover:underline">
                  diogorebelo.edu@gmail.com
                </a>
              </div>
            </li>
          </ul>
        </div>

        {/* Horário */}
        <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 p-6 md:p-8 backdrop-blur">
          <h2 className="text-white text-lg font-semibold mb-6">
            Horário de atendimento
          </h2>

          <div className="space-y-5 text-white/90">
            <Row label="Segunda" value="14H30 - 19H30" />
            <Row label="Terça a Sexta" value="9H00 - 19H30" />
            <Row label="Sábado" value="8H00 - 13H00" />
            <Row label="Domingo e Feriados" value="Encerrado" />
          </div>

          <div className="mt-6 inline-flex items-center gap-2 text-white/70">
            <FiClock />
            <span>Atendimento por marcação</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/** linha do horário */
function Row({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-6">
      <span className="font-semibold">{label}</span>
      <span className="tabular-nums text-white/80">{value}</span>
    </div>
  );
}
