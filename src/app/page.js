import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import TextMarque from "@/components/TextMarque";
import WhoAmI from "@/components/WhoAmI";

export default function Home() {
  return (
    <div>
      <Navbar />
      {/* <Hero /> */}
      <WhoAmI />
      <Skills />
      <Projects />
      <TextMarque />
      <Contact />
      <Footer />
    </div>
  );
}
