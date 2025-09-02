import React from "react";

export default function Testimonials() {
  const testimonial = {
    text: "Quando decidi procurar uma solução para a queda de cabelo, confiei no Diogo para realizar o tratamento de micropigmentação capilar. Desde o primeiro contacto, senti profissionalismo, cuidado e uma enorme dedicação em cada detalhe. O resultado final superou todas as minhas expectativas: natural, discreto e transformador. Hoje, olho-me ao espelho com confiança renovada e uma autoestima que já não sentia há anos. Foi, sem dúvida, uma das melhores decisões que tomei na minha vida.",
    author: "Joaquim Dias",
  };

  return (
    <section id="depoimentos" className="py-16 px-4 bg-[#F9F9F9]">
      <div className="max-w-7xl mx-auto text-center">
        <small className="tracking-wide text-gray-500 uppercase">Depoimentos</small>
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mt-2">
          O que dizem os nossos clientes
        </h3>

        <div className="mt-12 flex justify-center">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 max-w-3xl">
            <p className="text-lg text-gray-700 italic leading-relaxed">
              "{testimonial.text}"
            </p>
            <p className="mt-6 font-semibold text-gray-800">— {testimonial.author}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
