import React, { useState, useEffect } from "react";

const Headers = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [manuallySelected, setManuallySelected] = useState(false); // Gérer les sélections manuelles

  useEffect(() => {
    // Observer pour suivre la section active
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 1, // Ajusté pour une meilleure détection
    };

    const observerCallback = (entries) => {
      if (!manuallySelected) {
        // Ne change pas la section si elle est sélectionnée manuellement
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

    // Clean up
    return () => sections.forEach((section) => observer.unobserve(section));
  }, [manuallySelected]);

  useEffect(() => {
    // Écouteur pour détecter le défilement et changer le style du header
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (section) => {
    setActiveSection(section);
    setManuallySelected(true); // Indique qu'une section a été sélectionnée manuellement
    setTimeout(() => setManuallySelected(false), 1000); // Réinitialise après un court délai
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 bg-dark text-light p-4 ${
        isScrolled
          ? " bg-opacity-90 shadow-lg"
          : " bg-opacity-80 shadow-[-1px_3px_13px_10px_#1a202c]"
      }`}
    >
      <div className="container flex items-center justify-between px-4 mx-auto">
        <h1 className="font-bold lg:text-2xl md:text-2xl sm:text-xl text-light">
          Mitantsoa Hanja
        </h1>
        <nav>
          <ul className="flex space-x-10">
            {["profil", "compétences", "projets", "contact"].map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  onClick={() => handleLinkClick(section)}
                  className={`relative hover:text-hover transition-colors ${
                    activeSection === section ? "text-light/60 font-bold" : ""
                  } underline-animation`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Headers;
