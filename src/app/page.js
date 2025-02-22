'use client';
import { useEffect } from "react";  
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import ShortDetails from "@/components/ShortDetails";
import Skills from "@/components/Skills";
import TextMarque from "@/components/TextMarque";
import WhoAmI from "@/components/WhoAmI";
import './globals.css'
import { initCursor } from "@/lib/utils";


export default function Home() {

  useEffect(() => {
    initCursor()
  }, [])

  return (
    <div>
      <ShortDetails />
      <Navbar />
      <Hero />
      <div className="px-6">
        <div className="border-b pt-14 max-w-[1320px] mx-auto "></div>
      </div>
      <WhoAmI />
      <Skills />
      <Projects />
      <TextMarque />
      <Contact />
      <Footer />
      <div
        id="cursor"
        className="fixed w-4 h-4 bg-primary rounded-full pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
}
