import React, { useState, useEffect, useCallback } from "react";
// 1. Importar o hook da nova biblioteca
import useEmblaCarousel from 'embla-carousel-react';
// Importar ícones para as setas
import { ChevronLeft, ChevronRight } from "lucide-react";

import GalleryImage from "../assets/gallery1.jpeg"; // Exemplo de imagem, importa mais se tiveres
import GalleryImage1 from "../assets/gallery2.jpeg"; // Exemplo de imagem, importa mais se tiveres
import GalleryImage2 from "../assets/gallery3.jpeg"; // Exemplo de imagem, importa mais se tiveres


const galleryItems = [
  { id: 2, image: GalleryImage1, title: "Serviço 2", description: "Detalhes do serviço 2" },
  { id: 3, image: GalleryImage2, title: "Serviço 3", description: "Detalhes do serviço 3" },
  { id: 1, image: GalleryImage, title: "Micro pigmentação", description: "Com agulha diodo" },
  { id: 4, image: GalleryImage, title: "Serviço 4", description: "Detalhes do serviço 4" },
  { id: 5, image: GalleryImage, title: "Serviço 5", description: "Detalhes do serviço 5" },
  { id: 6, image: GalleryImage, title: "Serviço 6", description: "Detalhes do serviço 6" },
  { id: 7, image: GalleryImage, title: "Serviço 7", description: "Detalhes do serviço 7" },
  { id: 8, image: GalleryImage, title: "Serviço 8", description: "Detalhes do serviço 8" },
];

export default function Gallery() {
  // 2. Configurar o hook do Embla Carousel
  // O objeto { loop: true } faz com que o carrossel seja infinito
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  // Estado para saber se os botões podem ser clicados
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  // Funções para navegar para o slide anterior e seguinte
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  // useEffect para atualizar o estado dos botões (ativado/desativado)
  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setPrevBtnDisabled(!emblaApi.canScrollPrev());
      setNextBtnDisabled(!emblaApi.canScrollNext());
    };
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    onSelect(); // Define o estado inicial
  }, [emblaApi]);

  return (
    <section id="galeria" className="py-16 bg-[#F9F9F9]" >
      <div className="max-w-7xl mx-auto text-center px-4">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
          Galeria de Trabalhos
        </h3>
        <p className="mt-3  text-gray-400 max-w-7xl mx-auto">
          Cada resultado é único e personalizado. 
          </p>
          <p className="mt-3  text-gray-400 max-w-7xl mx-auto">
          Aqui pode ver alguns dos trabalhos realizados, que demonstram a naturalidade e a precisão da micropigmentação capilar.<br/> O nosso compromisso é devolver confiança e autoestima através de técnicas seguras e modernas.
        </p>
      </div>

      {/* 3. Nova estrutura do carrossel com botões */}
      <div className="relative mt-12">
        {/* Viewport do carrossel (a área visível) */}
        <div className="overflow-hidden" ref={emblaRef}>
          {/* Container que desliza */}
          <div className="flex">
            {galleryItems.map((item) => (
              // Cada item é um "slide"
              <div key={item.id} className="flex-grow-0 flex-shrink-0 w-3/4 sm:w-2/5 md:w-1/4 lg:w-1/5 p-2">
                <div className="relative overflow-hidden rounded-xl shadow-lg group h-full">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    // Altura e largura das fotos reduzidas
                    className="w-full h-72 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                  <div className="
                    absolute inset-0 bg-black bg-opacity-40 
                    flex flex-col justify-center items-center 
                    text-center p-4
                    opacity-0 group-hover:opacity-100 
                    transition-opacity duration-300
                  ">
                    <h3 className="text-white text-lg font-semibold">
                      {item.title}
                    </h3>
                    <p className="text-gray-200 text-xs mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Botão Anterior */}
        <button 
          onClick={scrollPrev} 
          // A seta fica desativada se não houver slide anterior (se não tiver loop)
          // disabled={prevBtnDisabled} 
          className="absolute top-1/2 left-0 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow-md z-10 disabled:opacity-30"
        >
          <ChevronLeft className="text-gray-800" size={24} />
        </button>

        {/* Botão Seguinte */}
        <button 
          onClick={scrollNext} 
          // disabled={nextBtnDisabled}
          className="absolute top-1/2 right-0 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow-md z-10 disabled:opacity-30"
        >
          <ChevronRight className="text-gray-800" size={24} />
        </button>
      </div>
    </section>
  );
}