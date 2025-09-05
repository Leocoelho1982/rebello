import React from "react";
import { ImgComparisonSlider } from "@img-comparison-slider/react";
import ImagemAntes from "../assets/antes.jpg";
import ImagemDepois from "../assets/depois.jpg";

export default function Services() {
  const whatsappHref = "https://wa.me/351912023400";
  return (

    <>

      <style>{`
        .ril__label {
          background-color: transparent !important;
          backdrop-filter: none !important;
          color: #bda67f !important; /* Cor dourada */
          font-family: 'Montserrat', sans-serif !important;
          font-weight: 600 !important; /* semibold */
          font-size: 14px !important;
          text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4); /* Sombra para legibilidade */
          
          /* Posicionamento no topo */
          top: 1rem !important; 
          bottom: auto !important;
        }
      `}</style>




    <section id="servicos" className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto ">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
          
          {/* Coluna Texto (maior) */}
          <div className="w-full lg:w-8/12 text-center lg:text-left">
            <small className="tracking-wide text-gray-500">
              OS SERVIÇOS DA REBELLO
            </small>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
              Micropigmentação Capilar
            </h3>
            <p className="mt-4 text-base text-gray-600 font-light leading-relaxed">
              Através do nosso processo indolor, devolvemos a densidade e a confiança ao seu cabelo.
            </p>

            {/* Miniaturas */}
            <div className="flex justify-center lg:justify-start gap-4 mt-6 ">
              <div className="text-center">
                <img
                  src={ImagemAntes}
                  alt="Antes da micropigmentação"
                  className="w-24 h-24 object-cover rounded-lg shadow-md mx-auto"
                />
                <p className="mt-2 text-xs font-normal text-gray-500">Antes</p>
              </div>
              <div className="text-center">
                <img
                  src={ImagemDepois}
                  alt="Depois da micropigmentação"
                  className="w-24 h-24 object-cover rounded-lg shadow-md mx-auto"
                />
                <p className="mt-2 text-xs font-normal text-gray-500">Depois</p>
              </div>
            </div>

            <hr className="my-6 border-gray-200" />

            <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 lg:justify-start">
              <p className="text-xs text-gray-700">
                <strong>Duração:</strong> Dependente do número de sessões necessárias
              </p>
              <a
        href={whatsappHref}
        target="_blank"
        rel="noreferrer">
              <button className="bg-[#B29146] cursor-pointer text-white border-white border-1 font-semibold py-2 px-5 rounded-lg hover:bg-[#a9936e] transition-colors duration-300 shadow-md w-full sm:w-auto">
                Marcar Consulta
              </button>
              </a>
            </div>
          </div>
        
          <div className="w-full lg:w-4/12 flex justify-center">
            <ImgComparisonSlider className="rounded-3xl shadow-xl focus:outline-none">
              <img slot="first" src={ImagemAntes} alt="Antes do tratamento" />
              <img slot="second" src={ImagemDepois} alt="Depois do tratamento" />
              <span slot="first" className="absolute top-4 left-4 z-10 py-1 px-3 text-[#bda67f] text-sm font-semibold rounded-md" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.4)'}}>
                Antes
              </span>
              <span slot="second" className="absolute top-4 right-4 z-10 py-1 px-3 text-[#bda67f] text-sm font-semibold rounded-md" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.4)'}}>
                Depois
              </span>
              
            </ImgComparisonSlider>
          </div>
        </div>
      </div>
    </section>

    </>
  );
}