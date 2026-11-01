import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"; // react-icons

// Novos trabalhos recebidos do cliente
import Caso01 from "../assets/caso-micropigmentacao-01.jpeg";
import Caso02 from "../assets/caso-micropigmentacao-02.jpeg";
import Caso03 from "../assets/caso-micropigmentacao-03.jpeg";
import Caso04 from "../assets/caso-micropigmentacao-04.jpeg";
import Caso05 from "../assets/caso-micropigmentacao-05.jpeg";
import Caso06 from "../assets/caso-micropigmentacao-06.jpeg";
import Caso07 from "../assets/caso-micropigmentacao-07.jpeg";
import Caso08 from "../assets/caso-micropigmentacao-08.jpeg";
import Caso09 from "../assets/caso-micropigmentacao-09.jpeg";
import Caso10 from "../assets/caso-micropigmentacao-10.jpeg";
import Caso11 from "../assets/caso-micropigmentacao-11.jpeg";
import Caso12 from "../assets/caso-micropigmentacao-12.jpeg";
import Caso13 from "../assets/caso-micropigmentacao-13.jpeg";
import Caso14 from "../assets/caso-micropigmentacao-14.jpeg";
import Caso15 from "../assets/caso-micropigmentacao-15.jpeg";

// Lista final da galeria
const galleryItems = [
  { id: 1, image: Caso01, title: "Resultado REBELLO" },
  { id: 2, image: Caso02, title: "Resultado REBELLO" },
  { id: 3, image: Caso03, title: "Resultado REBELLO" },
  { id: 4, image: Caso04, title: "Resultado REBELLO" },
  { id: 5, image: Caso05, title: "Resultado REBELLO" },
  { id: 6, image: Caso06, title: "Resultado REBELLO" },
  { id: 7, image: Caso07, title: "Resultado REBELLO" },
  { id: 8, image: Caso08, title: "Resultado REBELLO" },
  { id: 9, image: Caso09, title: "Resultado REBELLO" },
  { id: 10, image: Caso10, title: "Resultado REBELLO" },
  { id: 11, image: Caso11, title: "Resultado REBELLO" },
  { id: 12, image: Caso12, title: "Resultado REBELLO" },
  { id: 13, image: Caso13, title: "Resultado REBELLO" },
  { id: 14, image: Caso14, title: "Resultado REBELLO" },
  { id: 15, image: Caso15, title: "Resultado REBELLO" },
];


export default function Gallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setPrevBtnDisabled(!emblaApi.canScrollPrev());
      setNextBtnDisabled(!emblaApi.canScrollNext());
    };
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    onSelect();
  }, [emblaApi]);

  return (
    <section id="galeria" className="py-16 bg-[#F9F9F9]">
      <div className="max-w-7xl mx-auto text-center px-4">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
          Galeria de Fotos
        </h3>
        <p className="mt-3 text-gray-400 max-w-7xl mx-auto">
          Cada resultado é único e personalizado.
        </p>
        <p className="mt-3 text-gray-400 max-w-7xl mx-auto">
          Veja alguns registos reais do trabalho realizado, focado em naturalidade e precisão.
        </p>
      </div>

      <div className="relative mt-12">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="flex-grow-0 flex-shrink-0 w-3/4 sm:w-2/5 md:w-1/4 lg:w-1/5 p-2"
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg group h-full">
                  <img
                    src={item.image}
                    alt={`Galeria - ${item.title} ${item.id}`}
                    className="w-full h-72 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                  <div
                    className="
                      absolute inset-0 bg-black/40
                      flex flex-col justify-center items-center text-center p-4
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300
                    "
                  >
                    <h3 className="text-white text-lg font-semibold">
                      {item.title}
                    </h3>
                    <p className="text-gray-200 text-sm mt-1">
                      Serviço: Micropigmentação
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Botão anterior */}
        <button
          onClick={scrollPrev}
          className="absolute top-1/2 left-0 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow-md z-10 disabled:opacity-30"
          disabled={prevBtnDisabled}
        >
          <FiChevronLeft className="text-gray-800" size={24} />
        </button>

        {/* Botão seguinte */}
        <button
          onClick={scrollNext}
          className="absolute top-1/2 right-0 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow-md z-10 disabled:opacity-30"
          disabled={nextBtnDisabled}
        >
          <FiChevronRight className="text-gray-800" size={24} />
        </button>
      </div>
    </section>
  );
}
