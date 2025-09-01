import React from "react";
import ReactCompareImage from "react-compare-image";
import Container from "./Container"; 

// Imgs
import ImagemAntes from "../assets/antes.jpg"; 
import ImagemDepois from "../assets/depois.jpg"; 

export default function Services() {
  return (
    <section id="servicos" className="py-16 bg-white"> 
      <Container>
        <div className="text-center">
          <h2 className="text-gray-800 font-bold">
            Os nossos Serviços
          </h2>
        </div>

        <div className="mt-12 flex flex-col items-center lg:flex-row lg:items-start lg:justify-center lg:gap-16">

          <div className="w-full max-w-md lg:w-1/2">
            <ReactCompareImage
              leftImage={ImagemAntes}
              rightImage={ImagemDepois}
              leftImageLabel="Antes"
              rightImageLabel="Depois"
              className="rounded-lg shadow-xl"
            />
          </div>

          <div className="
            mt-12 w-full max-w-md p-6 bg-white rounded-lg shadow-lg border border-gray-200 
            lg:mt-0 lg:w-1/2 lg:text-left lg:p-0 lg:bg-transparent lg:shadow-none lg:border-none
          ">
            
            <h3 className="text-base font-semibold text-gray-800">
              Micropigmentação Capilar
            </h3>
            <p className="mt-2 text-xs text-gray-600">
              Através do nosso processo indolor, devolvemos a densidade e a confiança ao seu cabelo.
            </p>

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
              <button className="bg-[#B29146] cursor-pointer text-white font-semibold py-2 px-5 rounded-lg hover:bg-[#a9936e] transition-colors duration-300 shadow-md w-full sm:w-auto">
                Marcar Consulta
              </button>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}