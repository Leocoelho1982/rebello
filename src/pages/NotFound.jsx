import React from "react";
import { Link } from "react-router-dom";
import bgImage from "../assets/image_8.png"; // 👉 ajusta o caminho conforme tua pasta

export default function NotFound() {
  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen text-center text-white"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Conteúdo */}
      <div className="relative z-10">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="mt-4 text-xl">Página não encontrada</p>
        <Link
          to="/"
          className="mt-6 inline-block px-6 py-3 bg-yellow-500 hover:bg-sky-600 rounded-lg font-semibold transition"
        >
          Voltar para a página inicial
        </Link>
      </div>
    </div>
  );
}
