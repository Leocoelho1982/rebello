import React from "react";
import GalleryImage from "../assets/gallery1.jpeg"; // Exemplo de imagem, importa mais se tiveres

// Array de dados para as imagens da galeria
// Podes expandir este array com mais imagens, títulos e descrições
const galleryItems = [
  {
    id: 1,
    image: GalleryImage, // Usa a mesma imagem para demonstração
    title: "Micro pigmentação",
    description: "Com agulha diodo",
  },
  {
    id: 2,
    image: GalleryImage,
    title: "Serviço 2",
    description: "Detalhes do serviço 2",
  },
  {
    id: 3,
    image: GalleryImage,
    title: "Serviço 3",
    description: "Detalhes do serviço 3",
  },
  {
    id: 4,
    image: GalleryImage,
    title: "Serviço 4",
    description: "Detalhes do serviço 4",
  },
  {
    id: 5,
    image: GalleryImage,
    title: "Serviço 5",
    description: "Detalhes do serviço 5",
  },
  {
    id: 6,
    image: GalleryImage,
    title: "Serviço 6",
    description: "Detalhes do serviço 6",
  },
  {
    id: 7,
    image: GalleryImage,
    title: "Serviço 7",
    description: "Detalhes do serviço 7",
  },
  {
    id: 8,
    image: GalleryImage,
    title: "Serviço 8",
    description: "Detalhes do serviço 8",
  },
  {
    id: 9,
    image: GalleryImage,
    title: "Serviço 9",
    description: "Detalhes do serviço 9",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 px-4" style={{ backgroundColor: '#F9F9F9' }}>
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Título e Subtítulo da Galeria */}
        <h2 className="text-2xl md:text-3xl text-gray-800 font-light">
          Galeria
        </h2>
        <p className="mt-3 text-xs md:text-sm text-gray-400 font-thin">
          Uma empresa fundada pelo Diogo desde 2007 a fazer clientes felizes, lá ele.
          Trabalhamos com agulhas top market.
        </p>

        {/* Grid da Galeria */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <div key={item.id} className="relative overflow-hidden rounded-xl shadow-lg group">
              {/* Imagem com efeito de zoom no hover */}
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-72 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
              
              {/* Overlay com opacidade e texto no hover */}
              <div className="
                absolute inset-0 bg-black bg-opacity-20 
                flex flex-col justify-center items-center 
                opacity-0 group-hover:opacity-50 
                transition-opacity duration-300
              ">
                <h3 className="text-white text-xl font-semibold text-center">
                  {item.title}
                </h3>
                <p className="text-gray-200 text-sm mt-2 text-center">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}