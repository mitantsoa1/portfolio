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
      threshold: 0.3, // Ajusté pour une meilleure détection
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
      className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
        isScrolled
          ? "bg-white bg-opacity-90 shadow-lg"
          : "bg-gris bg-opacity-80 shadow-[0px_2px_10px_1px_#00000024]"
      }`}
    >
      <div className="container flex items-center justify-between px-4 mx-auto">
        <h1 className="text-2xl font-bold">Mitantsoa Hanja</h1>
        <nav>
          <ul className="flex space-x-10">
            {["profil", "compétences", "projets", "contact"].map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  onClick={() => handleLinkClick(section)}
                  className={`relative hover:text-hover transition-colors ${
                    activeSection === section ? "text-secondary" : ""
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
