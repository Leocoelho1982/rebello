import React from "react";
import Header from "../components/Header";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import Why from "../components/Why";
import About from "../components/About";
import Faq from "../components/Faq";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Homepage(){
    return(
        <div className="px-4">
        <Header />
        <Services />
        <Gallery />
        <About />
        <Why />
        <Faq />
        <Contact />
        <Footer />
        </div>
    )
}