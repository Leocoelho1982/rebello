import React from "react";
import DiogoImage from "../assets/diogo-martins.jpg";

const certificates = [
  "Formação certificada em Micropigmentação Capilar",
  "Atualização constante em técnicas modernas",
  "Atendimento personalizado e próximo",
  "Compromisso com a segurança e higiene",
  "100% clientes satisfeitos",
  "Paixão pela estética e bem-estar",
];

export default function About() {
  return (
    <section
      id="sobre"
      className="relative z-10 -mt-[100vh] rounded-t-3xl lg:rounded-t-[40px] shadow-2xl overflow-hidden"
    >
      <div className="bg-[#F9F9F9] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
            
            {/* Coluna da imagem - menor */}
            <div className="w-full lg:w-3/12 flex justify-center">
              <img
                src={DiogoImage}
                alt="Diogo Rebello a realizar um procedimento"
                className="rounded-3xl object-cover w-full "
              />
            </div>
            <h2 className="text-3xl md:text-4xl text-gray-800 font-light">
            <small>SOBRE NÓS</small>
            </h2>

            {/* Coluna do texto - maior */}
            <div className="w-full lg:w-9/12 text-center lg:text-left">
              <small className="tracking-wide text-gray-500">SOBRE NÓS</small>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                Diogo Rebello
              </h3>
              <p className="mt-4 text-base text-gray-600 font-light leading-relaxed">
                Profissional dedicado à Micropigmentação Capilar, o Diogo alia
                formação especializada a um acompanhamento próximo e atento. Com
                paixão pela estética e pelo detalhe, procura oferecer resultados
                naturais e seguros, aplicando sempre as técnicas mais atuais do
                setor.
              </p>

              <div className="mt-10">
                <h4 className="text-xl font-semibold text-gray-800">
                  Certificados e Conquistas
                </h4>
                <div className="mt-4 flex flex-wrap justify-center lg:justify-start gap-3">
                  {certificates.map((cert, index) => (
                    <span
                      key={index}
                      className="bg-gray-200 text-gray-800 text-sm font-medium px-4 py-2 rounded-full"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
