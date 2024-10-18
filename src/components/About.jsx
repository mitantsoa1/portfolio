import React from "react";
import DownloadCVButton from "./DownloadCVButton";

const About = () => {
  return (
    <section id="profil" className="my-16">
      <h2 className="mb-4 text-3xl font-bold text-primary">Profil</h2>
      <div className="p-6 bg-white border-l-4 rounded-lg shadow-md border-secondary">
        <p className="mb-4 text-lg">
          Bonjour 👋, Je suis un développeur web junior passionné par la
          technologie et l'innovation. Je suis motivé par l'envie d'apprendre en
          continu et de maîtriser de nouvelles compétences dans le domaine du
          développement.
          <br /> Polyvalent, je maîtrise plusieurs technologies telles que PHP
          (Symfony/Laravel), JavaScript, et les bases de données MySQL et
          PostgreSQL.
        </p>
        <DownloadCVButton />
      </div>

      {/* Expériences */}
      <section id="experience" className="my-16">
        <h2 className="mb-4 text-3xl font-bold text-primary">
          Expériences et Formations
        </h2>
        <div className="p-6 bg-white border-l-4 rounded-lg shadow-md border-secondary">
          <ul className="space-y-4">
            <li>
              <strong>Développeur Web</strong> - SIPEM Banque <br />
              <span className="text-sm text-gray-600">
                Oct. 2021 - Juin 2024
              </span>
            </li>
            <li>
              <strong>Stagiaire en Informatique</strong> - CEFOR <br />
              <span className="text-sm text-gray-600">
                Mars 2021 - Oct. 2023
              </span>
            </li>
            <li>
              <strong>Développement Web + Stage</strong> - Nir'Info <br />
              <span className="text-sm text-gray-600">
                Nov. 2020 - Mars 2021
              </span>
            </li>
          </ul>
        </div>
      </section>
    </section>
  );
};

export default About;
