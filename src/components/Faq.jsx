import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Container from "./Container"; 

const faqData = [
  {
    id: 1,
    question: "O que é a micropigmentação capilar?",
    answer:
      "A micropigmentação capilar é um procedimento estético não cirúrgico que utiliza pigmentos para simular a aparência de folículos capilares no couro cabeludo, criando a ilusão de maior densidade capilar ou de uma cabeça rapada com cabelo a crescer.",
  },
  {
    id: 2,
    question: "Quanto tempo demora o procedimento?",
    answer:
      "Cada sessão dura tipicamente entre 1 a 3 horas, dependendo da área a ser tratada. O tratamento completo geralmente requer 2 a 3 sessões para alcançar o resultado final desejado.",
  },
  {
    id: 3,
    question: "O procedimento é doloroso?",
    answer:
      "A maioria dos clientes relata um desconforto mínimo, comparável a uma picada leve. Utilizamos técnicas e, se necessário, anestésicos tópicos para garantir que a experiência seja o mais confortável possível.",
  },
  {
    id: 4,
    question: "Os resultados parecem naturais?",
    answer:
      "Sim. Quando realizado por um profissional qualificado como o Diogo, os pigmentos, a profundidade da agulha e a técnica são escolhidos para corresponder à cor e padrão do seu cabelo natural, resultando numa aparência extremamente realista.",
  },
  {
    id: 5,
    question: "Quanto tempo duram os resultados?",
    answer:
      "Os resultados da micropigmentação capilar são semipermanentes e podem durar vários anos (tipicamente 3 a 5 anos) antes de necessitarem de um retoque para reavivar a cor.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-gray-50">
      <Container className="max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-gray-800 font-bold">
            Perguntas frequentes
            <span className="block text-xl mt-1">(FAQ)</span>
          </h2>
          <p className="mt-4 text-sm text-gray-500 font-normal">
            Tudo o que você precisa de saber sobre os procedimentos de micropigmentação
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={item.id} className="bg-white rounded-lg shadow border border-gray-100 overflow-hidden">
              <button
                onClick={() => handleToggle(index)}
                className="w-full flex justify-between items-center text-left p-4 md:p-5 cursor-pointer"
              >
                <p className="text-sm md:text-base font-light text-gray-700">{item.question}</p>
                <ChevronDown
                  className={`transform transition-transform duration-300 text-gray-400 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  size={20}
                />
              </button>

              <div
                className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-4 pb-4 md:px-5 md:pb-5">
                  <p className="text-sm font-light text-gray-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}