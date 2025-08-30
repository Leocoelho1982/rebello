import React from "react";
// Importa o ícone que vamos usar da biblioteca lucide-react
import { ShieldCheck, Zap, Smile } from "lucide-react";

// Array com os dados para cada card. Fica fácil adicionar, remover ou editar!
const reasons = [
  {
    id: 1,
    icon: <ShieldCheck size={32} />,
    title: "Segurança em primeiro",
    description:
      "A sua segurança é a nossa prioridade máxima. Utilizamos apenas materiais esterilizados e técnicas comprovadas para garantir um processo seguro e sem complicações.",
  },
  {
    id: 2,
    icon: <Zap size={32} />,
    title: "Tecnologia de Ponta",
    description:
      "Investimos nos equipamentos mais avançados do mercado para oferecer resultados precisos, naturais e duradouros com o mínimo de desconforto.",
  },
  {
    id: 3,
    icon: <Smile size={32} />,
    title: "Garantia de Satisfação",
    description:
      "A Rebello garante o resultado. Se não ficar totalmente satisfeito com o processo inicial, trabalhamos consigo para refazer e alcançar a sua visão.",
  },
  // Podes adicionar mais 3 objetos aqui para ter 6 cards
  {
    id: 4,
    icon: <ShieldCheck size={32} />,
    title: "Segurança em primeiro",
    description:
      "A sua segurança é a nossa prioridade máxima. Utilizamos apenas materiais esterilizados e técnicas comprovadas para garantir um processo seguro e sem complicações.",
  },
  {
    id: 5,
    icon: <Zap size={32} />,
    title: "Tecnologia de Ponta",
    description:
      "Investimos nos equipamentos mais avançados do mercado para oferecer resultados precisos, naturais e duradouros com o mínimo de desconforto.",
  },
  {
    id: 6,
    icon: <Smile size={32} />,
    title: "Garantia de Satisfação",
    description:
      "A Rebello garante o resultado. Se não ficar totalmente satisfeito com o processo inicial, trabalhamos consigo para refazer e alcançar a sua visão.",
  },
];

export default function Why() {
  return (
    <section id="why-us" className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        {/* Título da Secção */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-gray-800 font-light">
            Porquê escolher a Rebello?
          </h2>
        </div>

        {/* Grid Responsivo para os Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.id}
              className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm text-center flex flex-col items-center transition-transform transform hover:-translate-y-2"
            >
              {/* Círculo Amarelo para o Ícone */}
              <div className="bg-yellow-400 text-white rounded-full p-4 mb-6 inline-block">
                {reason.icon}
              </div>

              {/* Título do Card */}
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {reason.title}
              </h3>

              {/* Descrição do Card */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}