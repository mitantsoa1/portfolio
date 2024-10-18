import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  FileCode2,
  Database,
  Container,
} from "lucide-react";
import Headers from "./components/Headers";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Headers />
      <main className="container py-8 mx-auto lg:px-24 md:px-16 sm:px-8 ">
        {" "}
        {/* Added mt-16 for top margin */}
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      {/* <footer className="py-4 text-center text-primary bg-gris shadow-[0px_2px_10px_1px_#00000024]">
        <p>&copy; 2024 Junior Web Developer. All rights reserved.</p>
      </footer> */}
      <Footer />
    </div>
  );
}

export default App;
