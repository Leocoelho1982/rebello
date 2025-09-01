import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from "lucide-react";
import Container from "./Container"; 

import GalleryImage from "../assets/gallery1.jpeg";
import GalleryImage1 from "../assets/gallery2.jpeg";
import GalleryImage2 from "../assets/gallery3.jpeg";

const galleryItems = [
  { id: 1, image: GalleryImage, title: "Micro pigmentação", description: "Com agulha diodo" },
  { id: 2, image: GalleryImage1, title: "Serviço 2", description: "Detalhes do serviço 2" },
  { id: 3, image: GalleryImage2, title: "Serviço 3", description: "Detalhes do serviço 3" },
  { id: 4, image: GalleryImage, title: "Serviço 4", description: "Detalhes do serviço 4" },
  { id: 5, image: GalleryImage1, title: "Serviço 5", description: "Detalhes do serviço 5" },
  { id: 6, image: GalleryImage2, title: "Serviço 6", description: "Detalhes do serviço 6" },
];

export default function Gallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);


  return (
    <section id="galeria" className="py-16 bg-[#F9F9F9]">
      <Container>
        <div className="text-center">
          <h1 className="text-2xl md:text-4xl  text-gray-800 font-bold">
            Galeria de Trabalhos
          </h1>
          <p className="mt-3 text-xs md:text-sm text-gray-400  max-w-2xl mx-auto">
            Cada resultado é único e personalizado. Aqui pode ver alguns dos trabalhos realizados, que demonstram a naturalidade e a precisão da micropigmentação capilar. O nosso compromisso é devolver confiança e autoestima através de técnicas seguras e modernas.
          </p>
        </div>
      </Container>

      <div className="relative mt-12">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {galleryItems.map((item) => (
              <div key={item.id} className="flex-grow-0 flex-shrink-0 w-3/4 sm:w-2/5 md:w-1/4 lg:w-1/5 p-2">
                <div className="relative overflow-hidden rounded-xl shadow-lg group h-full">
                  <img 
                    src={item.image} 
                    alt={item.title} 
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

        <button 
          onClick={scrollPrev} 
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow-md z-10 cursor-pointer"
        >
          <ChevronLeft className="text-gray-800" size={24} />
        </button>

        <button 
          onClick={scrollNext} 
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow-md z-10 cursor-pointer"
        >
          <ChevronRight className="text-gray-800" size={24} />
        </button>
      </div>
    </section>
  );
}