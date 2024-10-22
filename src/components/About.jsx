import React from "react";
import DownloadCVButton from "./DownloadCVButton";
import Socials from "./Socials";

const About = () => {
  return (
    <section id="profil" className="my-16">
      <h2 className="mb-4 text-3xl font-bold text-text">Profil</h2>
      <div className="p-6 border-l-8 card">
        <p className="mb-4 text-lg text-text leading-10">
          Bonjour 👋, Je suis un{" "}
          <span className="effect-3d">développeur</span> web junior
          passionné par la technologie et l'innovation. Je suis motivé par
          l'envie d'apprendre en continu et de maîtriser de nouvelles{" "}
          <span>compétences</span> dans le domaine du développement.
        </p>
        <Socials />
        {/* <DownloadCVButton /> */}
      </div>

      {/* Expériences */}
      <section id="experience" className="my-16">
        <h2 className="mb-4 text-2xl text-text">Expériences et Formations</h2>
        <div className="p-6 border-r-2 card ">
          <ul className="space-y-4">
            <li>
              <strong className="text-text">Développeur Web</strong> - SIPEM
              Banque <br />
              <span className="text-sm text-secondary">
                Oct. 2021 - Juin 2024
              </span>
            </li>
            <li>
              <strong className="text-text">Stagiaire en Informatique</strong> -
              CEFOR <br />
              <span className="text-sm text-secondary">
                Mars 2021 - Oct. 2023
              </span>
            </li>
            <li>
              <strong className="text-text">Développement Web + Stage</strong> -
              Nir'Info <br />
              <span className="text-sm text-secondary">
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
