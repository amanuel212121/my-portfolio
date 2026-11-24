import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Management from "@/components/Management";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Certificates from "@/components/Certificates";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import InstallApp from "@/components/InstallApp";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white">
        <Hero />

        <About />

        <Management />

        <Services />

        <Skills />

        <Projects />

        <Education />

        <Certificates />

        <Experience />

        <Contact />
      </main>

      <Footer />
      <InstallApp />
    </>
  );
}
