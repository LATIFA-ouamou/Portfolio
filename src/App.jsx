


import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";

import Projects from "./components/Projects";
import Footer from "./components/Footer";

import Experience from "./components/Experience";
import Contact from "./components/Contact";
export default function App() {
  return (
    <div className="bg-slate-900 text-white font-sans">
      <Navbar />
      <Hero />
    
      <Skills />
      
     <Experience/>
      <Projects />
      <Contact/>
      <Footer />
    </div>
  );
}
