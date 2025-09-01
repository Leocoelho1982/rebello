import React from "react";
import ReactCompareImage from "react-compare-image";

// Imgs
import ImagemAntes from "../assets/antes.jpg"; 
import ImagemDepois from "../assets/depois.jpg"; 

export default function Services() {
  return (
    <>
      {/* SOLUÇÃO PARA AS LABELS:
        Adicionamos um bloco de <style> para sobrepor diretamente os estilos da biblioteca.
        Isto garante que as nossas personalizações são aplicadas.
      */}
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
        <div className="max-w-7xl mx-auto text-center">
          
          {/* Títulos com tamanho reduzido */}
          <h2 className="text-2xl md:text-3xl text-gray-800 font-light">
            Os serviços da Rebello
          </h2>

          {/* Container Flexbox para o layout lado a lado */}
          <div className="mt-12 flex flex-col items-center lg:flex-row lg:items-center lg:justify-center lg:gap-16 ">

            {/* Coluna da Esquerda: Slider de Comparação */}
            <div className="w-full max-w-md lg:w-1/2">
              <ReactCompareImage
                leftImage={ImagemAntes}
                rightImage={ImagemDepois}
                // Voltamos a usar as props de texto simples. A magia acontece no CSS acima.
                leftImageLabel="Antes"
                rightImageLabel="Depois"
                className="rounded-lg shadow-xl"
              />
            </div>

            {/* Coluna da Direita: Informações (SEM CARD em desktop) */}
            <div className="
              mt-12 w-full max-w-md p-6 bg-white rounded-lg shadow-lg border border-gray-200 
              lg:mt-0 lg:w-1/2 lg:text-left lg:p-0 lg:bg-transparent lg:shadow-none lg:border-none
            ">
              
              <h3 className="text-base font-semibold text-gray-800">
                Micropigmentação capilar
              </h3>
              <p className="mt-2 text-xs text-gray-600">
                Através do nosso processo indolor, devolvemos a densidade e a confiança ao seu cabelo.
              </p>

              {/* Miniaturas com tamanho reduzido */}
              <div className="flex justify-center lg:justify-start gap-4 mt-6">
                <div className="text-center">
                  <img src={ImagemAntes} alt="Antes da micropigmentação" className="w-24 h-24 object-cover rounded-lg shadow-md mx-auto" />
                  <p className="mt-2 text-xs font-normal text-gray-500">
                    Antes
                  </p>
                </div>
                <div className="text-center">
                  <img src={ImagemDepois} alt="Depois da micropigmentação" className="w-24 h-24 object-cover rounded-lg shadow-md mx-auto" />
                  <p className="mt-2 text-xs font-normal text-gray-500">
                    Depois
                  </p>
                </div>
              </div>
              
              <hr className="my-6 border-gray-200" />

              <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 lg:justify-start">
                <p className="text-xs text-gray-700">
                  <strong>Duração:</strong> Dependente do número de sessões necessárias
                </p>
                <button className="bg-[#B29146] cursor-pointer text-white border-white border-1 font-semibold py-2 px-5 rounded-lg hover:bg-[#a9936e] transition-colors duration-300 shadow-md w-full sm:w-auto">
                  Marcar Consulta
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}