import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    id: 1,
    question: "O que é a micropigmentação capilar?",
    answer:
      "A micropigmentação capilar é um procedimento estético inovador e não cirúrgico que utiliza pigmentos específicos aplicados no couro cabeludo através de microagulhas de alta precisão. O objetivo é reproduzir a aparência de folículos capilares, criando a ilusão de densidade em áreas com rarefação ou de um cabelo rapado com crescimento uniforme. É uma solução segura, indicada para homens e mulheres que desejam melhorar a sua imagem e autoestima sem recorrer a cirurgias ou produtos químicos agressivos.",
  },
  {
    id: 2,
    question: "Quanto tempo demora o procedimento?",
    answer:
      "Cada sessão dura, em média, entre 1 a 3 horas, dependendo do tamanho da área a ser tratada e do tipo de resultado pretendido. O tratamento completo é normalmente realizado em 2 a 3 sessões, com um intervalo de algumas semanas entre elas, para garantir a fixação adequada do pigmento e um resultado natural e progressivo. Esta abordagem gradual permite ajustes finos na cor e densidade, assegurando que o resultado final esteja perfeitamente adaptado ao cliente.",
  },
  {
    id: 3,
    question: "O procedimento é doloroso?",
    answer:
      "A grande maioria dos clientes descreve apenas um leve desconforto durante a micropigmentação, semelhante a pequenas picadas superficiais. A sensibilidade pode variar de pessoa para pessoa, mas técnicas modernas e equipamentos de última geração reduzem significativamente a sensação de dor. Além disso, sempre que necessário, recorremos a anestésicos tópicos para tornar a experiência o mais confortável e tranquila possível.",
  },
  {
    id: 4,
    question: "Os resultados parecem naturais?",
    answer:
      "Sim, absolutamente. A naturalidade é um dos principais diferenciais da micropigmentação capilar quando realizada por profissionais qualificados. O Diogo analisa cuidadosamente o tom da pele, a cor natural do cabelo e o padrão de crescimento capilar antes de iniciar o tratamento. A escolha do pigmento, a profundidade da aplicação e a técnica de distribuição dos pontos são criteriosamente ajustadas, garantindo um resultado extremamente realista, discreto e harmonioso.",
  },
  {
    id: 5,
    question: "Quanto tempo duram os resultados?",
    answer:
      "Os resultados da micropigmentação capilar são semipermanentes e podem durar, em média, entre 3 a 5 anos. Com o tempo, o pigmento vai sofrendo um desvanecimento natural, que pode variar de acordo com fatores como exposição solar, tipo de pele, cuidados pessoais e estilo de vida. Sessões de retoque são recomendadas para manter a cor intensa e o aspeto natural, prolongando os benefícios do tratamento a longo prazo.",
  },
];


export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto ">

        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
            Perguntas frequentes
            <span className="block text-xl mt-1">(FAQ)</span>
          </h3>
          <p className="mt-4 text-sm text-gray-500 font-normal">
            Tudo o que você precisa de saber sobre os procedimentos de micropigmentação
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={item.id} className="bg-white rounded-lg shadow border border-gray-100 overflow-hidden">
              
              {/* Padding ajustado para ser mais pequeno em mobile */}
              <button
                onClick={() => handleToggle(index)}
                className="w-full flex justify-between items-center text-left p-4 md:p-5"
              >
                {/* Tamanho da fonte agora é responsivo: text-sm em mobile, text-base em desktop */}
                <p className="text-sm font-semibold text-gray-700">{item.question}</p>
                <ChevronDown
                  className={`transform transition-transform duration-300 text-gray-400 ${openIndex === index ? 'rotate-180' : ''}`}
                  size={20}
                />
              </button>

              <div
                className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                {/* Padding da resposta também ajustado para consistência */}
                <div className="px-4 pb-4 md:px-5 md:pb-5">
                  <p className="text-sm font-light text-gray-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}