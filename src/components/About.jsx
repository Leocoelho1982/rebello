import React from "react";
import DiogoImage from "../assets/diogo-martins.png"; // Atualiza para o caminho da tua imagem

// Array para os certificados, para ser mais fácil de gerir
const certificates = [
  "500 clientes satisfeitos",
  "Ciência avançada",
  "Certificado pela micro",
  "Ciência avançada",
  "500 clientes satisfeitos",
];

export default function About() {
  return (
    <section id="about" className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Secção de Títulos - Centralizada */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-gray-800 font-light">
            Sobre nós
          </h2>
          <p className="mt-4 text-sm md:text-base text-gray-500 font-normal max-w-2xl mx-auto">
            Uma empresa fundada pelo Diogo, desde 2007 a fazer clientes felizes, lá ele. Trabalhamos com agulhas top market.
          </p>
          <p className="mt-8 text-lg md:text-xl text-gray-700 font-normal">
            Conhece os nossos experts neste processo,<br />
            Conhece os nossos experts, Diogo.
          </p>
        </div>

        {/* Container Principal - Layout de 2 colunas em desktop */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
          
          {/* Coluna da Esquerda: Imagem */}
          <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
            <img 
              src={DiogoImage} 
              alt="Diogo Martins a realizar um procedimento"
              className="rounded-3xl object-cover w-full max-w-sm shadow-xl"
            />
          </div>

          {/* Coluna da Direita: Texto e Certificados */}
          <div className="w-full lg:w-3/5 text-center lg:text-left">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
              Diogo Martins
            </h3>
            <p className="mt-4 text-base text-gray-600 font-light leading-relaxed">
              Com mais de 5 anos de experiência no ramo da micro, o Diogo já realizou mais de 300 cirurgias. A sua dedicação à excelência e ao detalhe garante resultados naturais e a satisfação total dos seus clientes. Especialista em técnicas avançadas, continua a inovar para oferecer os melhores tratamentos do mercado.
            </p>

            <div className="mt-10">
              <h4 className="text-xl font-semibold text-gray-800">
                Certificados e Conquistas
              </h4>
              <div className="mt-4 flex flex-wrap justify-center lg:justify-start gap-3">
                {certificates.map((cert, index) => (
                  <span key={index} className="bg-gray-100 text-gray-700 text-sm font-medium px-4 py-2 rounded-full">
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}