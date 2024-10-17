import React from "react";
import DownloadCVButton from "./DownloadCVButton";
const About = () => {
  return (
    <section id="profil" className="my-16">
      <h2 className="mb-4 text-3xl font-bold text-primary">A propos de moi</h2>
      <div className="p-6 bg-white border-l-4 rounded-lg shadow-md border-secondary">
        <p className="mb-4 text-lg">
          Bonjour, Je suis un développeur web junior passionné par la
          technologie et l'innovation. Je suis motivé par l'envie d'apprendre en
          continu et de maîtriser de nouvelles compétences dans le domaine du
          développement.
          <br /> Polyvalent, je maîtrise plusieurs technologies telles que PHP
          (Symfony/Laravel), JavaScript, et les bases de données MySQL et
          PostgreSQL.
        </p>
        <DownloadCVButton />
      </div>
    </section>
  );
};

export default About;
