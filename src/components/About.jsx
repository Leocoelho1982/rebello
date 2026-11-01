import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowUpRight, X } from "lucide-react";
import AnaImage from "../assets/ana-rebello-apresentacao.jpeg";
import DiogoImage from "../assets/diogo-rebello-atendimento.jpeg";
import BastidoresVideo from "../assets/bastidores-atendimento.mp4";

export default function About() {
  const [isStoryOpen, setIsStoryOpen] = useState(false);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!isStoryOpen) return undefined;

    closeButtonRef.current?.focus();
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsStoryOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isStoryOpen]);

  return (
    <section
      id="sobre"
      className="relative z-10 -mt-[100vh] overflow-hidden rounded-t-3xl shadow-2xl lg:rounded-t-[40px]"
    >
      <div className="border-t border-black/5 bg-[#F9F9F9] px-4 py-16 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
            <div className="grid grid-cols-[1.08fr_0.92fr] items-end gap-3 sm:gap-5">
              <figure className="relative cursor-pointer overflow-hidden rounded-[30px] bg-black shadow-2xl sm:rounded-[38px]">
                <img src={AnaImage} alt="Ana Rebello" className="h-[26rem] w-full object-cover object-center sm:h-[38rem]" />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-5 pb-5 pt-16 text-white sm:px-7 sm:pb-7">
                  <strong className="block text-lg sm:text-xl">Ana Rebello</strong>
                  <span className="text-xs uppercase tracking-[0.16em] text-white/75">Equipa REBELLO</span>
                </figcaption>
              </figure>

              <figure className="relative cursor-pointer overflow-hidden rounded-[30px] bg-black shadow-2xl sm:rounded-[38px]">
                <img src={DiogoImage} alt="Diogo Rebello durante um procedimento de micropigmentação capilar" className="h-[26rem] w-full object-cover object-center sm:h-[38rem]" />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-4 pb-4 pt-14 text-white sm:px-6 sm:pb-6">
                  <strong className="block text-base sm:text-lg">Diogo Rebello</strong>
                  <span className="text-[10px] uppercase tracking-[0.16em] text-white/75 sm:text-xs">Micropigmentação capilar</span>
                </figcaption>
              </figure>

              <figure className="relative col-span-2 overflow-hidden rounded-[30px] bg-black shadow-2xl sm:rounded-[38px]">
                <video
                  src={BastidoresVideo}
                  controls
                  muted
                  playsInline
                  preload="metadata"
                  className="h-56 w-full object-cover sm:h-72"
                  aria-label="Bastidores de um atendimento de micropigmentação capilar"
                />
                <figcaption className="pointer-events-none absolute bottom-12 left-4 text-xs font-semibold uppercase tracking-[0.16em] text-white drop-shadow sm:left-6">
                  Bastidores REBELLO
                </figcaption>
              </figure>
            </div>

            <div className="max-w-xl text-center lg:text-left">
              <small className="font-semibold tracking-[0.18em] text-[#B29146]">A HISTÓRIA DA REBELLO</small>
              <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-5xl">Pessoas por trás de uma nova confiança.</h2>
              <p className="mt-6 text-lg font-light leading-8 text-gray-600">Uma marca de família, criada para transformar histórias através da micropigmentação capilar.</p>
              <button type="button" onClick={() => setIsStoryOpen(true)} className="mt-8 inline-flex cursor-pointer items-center gap-3 rounded-full bg-[#B29146] px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-[#967537] focus:outline-none focus:ring-2 focus:ring-[#B29146] focus:ring-offset-2">
                Conheça a nossa história
                <ArrowUpRight size={18} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {isStoryOpen && createPortal(
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setIsStoryOpen(false); }}>
          <div className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-[#F9F9F9] p-6 shadow-2xl sm:p-10" role="dialog" aria-modal="true" aria-labelledby="historia-rebello-titulo">
            <button ref={closeButtonRef} type="button" onClick={() => setIsStoryOpen(false)} aria-label="Fechar história da REBELLO" className="absolute right-4 top-4 cursor-pointer rounded-full p-2 text-gray-500 transition hover:bg-black/5 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#B29146]"><X size={22} /></button>
            <small className="font-semibold tracking-[0.18em] text-[#B29146]">A HISTÓRIA DA REBELLO</small>
            <h2 id="historia-rebello-titulo" className="mt-3 pr-8 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">Mais do que recuperar cabelo, é recuperar confiança.</h2>
            <div className="mt-8 space-y-6 text-[15px] font-light leading-8 text-gray-600 sm:text-base">
              <p className="text-lg leading-8 text-gray-700">A REBELLO nasceu da união entre a identidade, a família e o desejo de transformar vidas.</p>
              <p>O nome carrega uma história muito pessoal: Rebelo, um nome de família. Um nome que representa as minhas raízes, a minha história e aquilo que quero deixar como legado. Foi desse nome que surgiu a REBELLO, uma marca com identidade própria, criada para dar um novo significado à beleza, à confiança e à autoestima.</p>
              <p>Mas a REBELLO é também uma ideia, uma mensagem e uma promessa de renovação.</p>
              <p>A REBELLO nasce de voltar a ser belo. De voltar a olhar ao espelho e reconhecer-se. De recuperar a segurança, a tranquilidade e a confiança que, tantas vezes, se perdem com a queda de cabelo e com o aparecimento de falhas no couro cabeludo.</p>
              <p>Sabemos que a perda de cabelo vai muito além da aparência. Pode afetar a forma como nos vemos, como nos sentimos e como nos apresentamos ao mundo. Por isso, acreditamos que cada pessoa merece uma solução que a ajude a sentir-se novamente confiante.</p>
              <p>É aqui que entra a micropigmentação capilar: uma técnica que permite criar a aparência de folículos capilares, proporcionando um efeito visual de cabelo rapado e ajudando a disfarçar falhas e zonas de menor densidade, de acordo com cada caso.</p>
              <p>Na REBELLO, cada avaliação é o primeiro passo de um processo personalizado. Ouvimos, analisamos e procuramos a solução mais adequada para cada pessoa, com profissionalismo, atenção ao detalhe e respeito pela sua individualidade.</p>
              <blockquote className="border-l-2 border-[#B29146] py-2 pl-5 text-left text-lg font-medium leading-8 text-gray-900 sm:text-xl">Porque não se trata apenas de cabelo. Trata-se de autoestima. De identidade. De voltar a sentir-se bem na própria pele.</blockquote>
              <p>A REBELLO é o encontro entre as minhas raízes e o meu propósito: transformar histórias, valorizar pessoas e devolver confiança, uma pessoa de cada vez.</p>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
