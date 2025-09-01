// pages/Homepage.jsx
import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import Why from "../components/Why";
import About from "../components/About";
import Faq from "../components/Faq";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Homepage(){
  return (
    <>
      <Hero />
      <About />
        <Services />
        <Gallery />
        
        <Why />
        <Faq />
        <Contact />
        <Footer />
      
    </>
  );
}
