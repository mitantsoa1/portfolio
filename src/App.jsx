import React, { useState, useEffect } from "react";
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
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for user's preference in localStorage
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("darkMode", !darkMode);
  };

  return (
    <div className="min-h-screen transition-colors duration-300 bg-background text-text ">
      <Headers darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="container px-2 py-4 mx-auto lg:px-24 md:px-16 sm:px-8 ">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
