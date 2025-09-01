import React from "react";
// Importa o ícone que vamos usar da biblioteca lucide-react
import { ShieldCheck, Zap, Smile, Clock, Edit3, RefreshCw } from "lucide-react";
import Container from "./Container"; // Passo 1: Importar o nosso novo componente

// Array com os dados para cada card
const reasons = [
  {
    id: 1,
    icon: <ShieldCheck size={32} />,
    title: "Segurança em Primeiro",
    description:
      "Todos os procedimentos são realizados com materiais descartáveis e normas de higiene rigorosas, garantindo total segurança.",
  },
  {
    id: 2,
    icon: <Zap size={32} />,
    title: "Tecnologia Avançada",
    description:
      "Equipamentos modernos e pigmentos de alta qualidade asseguram resultados naturais, realistas e de longa duração.",
  },
  {
    id: 3,
    icon: <Smile size={32} />,
    title: "Aumento da Autoestima",
    description:
      "Recupere a confiança com um look renovado, discreto e harmonioso que valoriza a sua imagem pessoal.",
  },
  {
    id: 4,
    icon: <Clock size={32} />,
    title: "Recuperação Rápida",
    description:
      "Procedimento minimamente invasivo que permite retomar a sua rotina em pouco tempo, sem complicações.",
  },
  {
    id: 5,
    icon: <Edit3 size={32} />,
    title: "Disfarce de Cicatrizes",
    description:
      "Camuflagem eficaz de cicatrizes e falhas capilares, proporcionando um aspeto uniforme e natural.",
  },
  {
    id: 6,
    icon: <RefreshCw size={32} />,
    title: "Manutenção Garantida",
    description:
      "Oferecemos acompanhamento contínuo para ajustes e retoques, assegurando a durabilidade do resultado ao longo dos anos.",
  },
];

export default function Why() {
  return (
    <section id="porque" className="py-16 bg-gray-50"> 
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-gray-800 font-bold">
            Porquê escolher a Rebello?
          </h2>
        </div>

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
      </Container>
    </section>
  );
}