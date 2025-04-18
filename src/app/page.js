"use client";
import { useEffect, useRef } from "react";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import ShortDetails from "@/components/ShortDetails";
import Skills from "@/components/Skills";
import TextMarque from "@/components/TextMarque";
import WhoAmI from "@/components/WhoAmI";
import "./globals.css";
import { initCursor } from "@/lib/utils";

import { ReactLenis, useLenis } from "lenis/react";

export default function Home() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const skillsRef = useRef(null);

  useEffect(() => {
    initCursor();
  }, []);

  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });

  return (
    <div>
      <ReactLenis root>
        <div className="">
          <ShortDetails />
        </div>
        <Navbar
          aboutRef={aboutRef}
          projectsRef={projectsRef}
          contactRef={contactRef}
        />
        <Hero contactRef={contactRef} />
        <div className="px-6">
          <div className="border-b pt-10 max-w-[1320px] mx-auto "></div>
        </div>
        <WhoAmI ref={aboutRef} />
        <Skills ref={skillsRef} />
        <Projects ref={projectsRef} />
        <TextMarque />
        <Contact ref={contactRef} />
        <Footer skillsRef={skillsRef} />
        <div
          id="cursor"
          className="fixed w-4 h-4 bg-primary rounded-full pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
        >
          <p className="seeLive text-black text-[42px] text-center leading-none">
            SEE LIVE
          </p>
        </div>
      </ReactLenis>
    </div>
  );
}
