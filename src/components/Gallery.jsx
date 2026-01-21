import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"; // react-icons

// IMPORTAÇÕES DAS FOTOS SELECCIONADAS
import Img0002 from "../assets/IMG-20251126-WA0002.jpg";
import Img0003 from "../assets/IMG-20251126-WA0003.jpg";
import Img0004 from "../assets/IMG-20251126-WA0004.jpg";
import Img0005 from "../assets/IMG-20251126-WA0005.jpg";
import Img0006 from "../assets/IMG-20251126-WA0006.jpg";
import Img0007 from "../assets/IMG-20251126-WA0007.jpg";

import Img0012 from "../assets/IMG-20250902-WA0012.jpg";
import Img0013 from "../assets/IMG-20250902-WA0013.jpg";
import Img0014 from "../assets/IMG-20250902-WA0014.jpg";

import Img0016 from "../assets/IMG-20250902-WA0016.jpg";
import Img0017 from "../assets/IMG-20250902-WA0017.jpg";
import Img0018 from "../assets/IMG-20250902-WA0018.jpg";
import Img0019 from "../assets/IMG-20250902-WA0019.jpeg";
import Img0020 from "../assets/IMG-20250902-WA0020.jpeg";
import Img0021 from "../assets/IMG-20250902-WA0021.jpeg";
import Img0022 from "../assets/IMG-20250902-WA0022.jpeg";
import Gallery2 from "../assets/gallery2.jpeg";
import Gallery3 from "../assets/gallery3.jpeg";

// Lista final da galeria
const galleryItems = [
  // 🔹 Novas fotos primeiro
  { id: 1, image: Img0002, title: "Foto" },
  { id: 2, image: Img0003, title: "Foto" },
  { id: 3, image: Img0004, title: "Foto" },
  { id: 4, image: Img0005, title: "Foto" },
  { id: 5, image: Img0006, title: "Foto" },
  { id: 6, image: Img0007, title: "Foto" },

  // 🔹 Fotos antigas
  { id: 7,  image: Img0012, title: "Foto" },
  { id: 8,  image: Img0013, title: "Foto" },
  { id: 9,  image: Img0014, title: "Foto" },
  
  { id: 11, image: Img0016, title: "Foto" },
  { id: 12, image: Img0017, title: "Foto" },
  { id: 13, image: Img0018, title: "Foto" },
  { id: 14, image: Img0019, title: "Foto" },
  { id: 15, image: Img0020, title: "Foto" },
  { id: 16, image: Img0021, title: "Foto" },
  { id: 17, image: Img0022, title: "Foto" },
  

  // 🔹 Outras da galeria
  { id: 114, image: Gallery2, title: "Foto" },
  { id: 115, image: Gallery3, title: "Foto" },
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
