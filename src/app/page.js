import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import TextMarque from "@/components/TextMarque";
import WhoAmI from "@/components/WhoAmI";

export default function Home() {
  return (
    <div>
      <Navbar />
      {/* <Hero /> */}
      <WhoAmI />
      <TextMarque />
      <Footer />
    </div>
  );
}
