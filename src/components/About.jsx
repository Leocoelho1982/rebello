import React from "react";
import DiogoImage from "../assets/diogo-martins.jpeg";

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
    // AQUI ESTÃO AS PRINCIPAIS MUDANÇAS:
    // 1. `relative z-10`: Coloca esta secção numa camada superior.
    // 2. `-mt-[100vh]`: Puxa esta secção para cima, fazendo-a sobrepor-se ao final do Hero.
    // 3. `rounded-t-3xl`: Arredonda os cantos superiores para um deslize suave.
    // 4. `shadow-2xl`: Adiciona uma sombra forte para dar profundidade.
    <section 
      id="sobre" 
      className="relative z-10 -mt-[100vh] rounded-t-3xl lg:rounded-t-[40px] shadow-2xl overflow-hidden"
    >
      <div className="bg-[#F9F9F9] py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-gray-800 font-light">
              Sobre nós
            </h2>
         
          </div>

          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
            <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
              <img 
                src={DiogoImage} 
                alt="Diogo Rebello a realizar um procedimento"
                className="rounded-3xl object-cover w-full max-w-sm" // Sombra removida da imagem, já está no container
              />
            </div>

            <div className="w-full lg:w-3/5 text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
                Diogo Rebello
              </h3>
              <p className="mt-4 text-base text-gray-600 font-light leading-relaxed">
                Profissional dedicado à Micropigmentação Capilar, o Diogo alia formação especializada a um acompanhamento próximo e atento. Com paixão pela estética e pelo detalhe, procura oferecer resultados naturais e seguros, aplicando sempre as técnicas mais atuais do setor.
              </p>

              <div className="mt-10">
                <h4 className="text-xl font-semibold text-gray-800">
                  Certificados e Conquistas
                </h4>
                <div className="mt-4 flex flex-wrap justify-center lg:justify-start gap-3">
                  {certificates.map((cert, index) => (
                    <span key={index} className="bg-gray-200 text-gray-800 text-sm font-medium px-4 py-2 rounded-full">
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}