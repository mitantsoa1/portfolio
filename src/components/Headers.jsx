import React, { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react"; // Assurez-vous d'avoir ces icônes
import { Menu, X } from "lucide-react"; // Icônes pour le menu

const Headers = ({ darkMode, toggleDarkMode }) => {
  const [activeSection, setActiveSection] = useState("profil");
  const [isScrolled, setIsScrolled] = useState(false);
  const [manuallySelected, setManuallySelected] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // État pour gérer la sidebar

  useEffect(() => {
    const observerOptions = { root: null, rootMargin: "0px", threshold: 1 };

    const observerCallback = (entries) => {
      if (!manuallySelected) {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      }
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, [manuallySelected]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (section) => {
    setActiveSection(section);
    setManuallySelected(true);
    setIsSidebarOpen(false); // Ferme la sidebar après un clic
    setTimeout(() => setManuallySelected(false), 1000);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 bg-background text-text p-4 ${
        isScrolled
          ? "bg-opacity-90 shadow-lg"
          : "bg-opacity-80 shadow-[-1px_3px_13px_10px_#1a202c]"
      }`}
    >
      <div className="container flex items-center justify-between px-1 lg:px-4 md:px-4  mx-auto">
        <h1 className="font-bold lg:text-2xl md:text-2xl sm:text-xl text-text w-1/3">
          {isScrolled ? "Hanja" : "Mitantsoa Hanja"}
        </h1>

        {/* Bouton pour afficher/masquer la sidebar */}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="sm:block md:hidden lg:hidden p-2 transition-colors duration-300 rounded-full text-text"
        >
          {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Navigation pour les écrans md et plus */}
        <nav className="hidden md:block">
          <ul className="flex space-x-10">
            {["profil", "compétences", "projets", "contact"].map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  onClick={() => handleLinkClick(section)}
                  className={`relative hover:text-hover transition-colors ${
                    activeSection === section
                      ? "text-primary font-bold"
                      : "text-text"
                  } underline-animation`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bouton pour le mode sombre/clair */}
        <button
          onClick={toggleDarkMode}
          className="p-2 transition-colors duration-300 rounded-full border-text border-2 text-text hover:bg-secondary"
          aria-label={
            darkMode ? "Activer le mode clair" : "Activer le mode sombre"
          }
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        {/* Sidebar responsive */}
        <div
          className={`fixed top-0 left-0 w-64 h-full bg-background shadow-lg transform transition-transform duration-300 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } sm:block md:hidden lg:hidden z-50`}
        >
          <div className="p-4 ">
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="absolute top-4 right-4 p-2"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="p-4 ">
            <ul className="space-y-4">
              {["profil", "compétences", "projets", "contact"].map(
                (section) => (
                  <li key={section}>
                    <a
                      href={`#${section}`}
                      onClick={() => handleLinkClick(section)}
                      className={`block text-lg hover:text-hover transition-colors ${
                        activeSection === section
                          ? "text-primary font-bold"
                          : "text-text"
                      }`}
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </a>
                  </li>
                )
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Headers;
