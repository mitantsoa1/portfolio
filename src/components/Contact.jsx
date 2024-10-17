import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="my-16">
      <h2 className="mb-4 text-3xl font-bold text-primary">Contact</h2>
      <div className="p-6 bg-white border-l-4 rounded-lg shadow-md border-secondary">
        <p className="mb-4 text-lg">
          Je suis toujours ouvert à de nouvelles opportunités et collaborations.
          N'hésitez pas à me contacter via l'un des canaux suivants :
        </p>
        <div className="flex flex-col space-y-4">
          <a
            href="mailto:your.email@example.com"
            className="flex items-center transition-colors text-primary hover:text-secondary"
          >
            <Mail className="w-6 h-6 mr-2" />
            ainamitantso@gmail.com
          </a>
          <a
            href="https://github.com/mitantsoa1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center transition-colors text-primary hover:text-secondary"
          >
            <Github className="w-6 h-6 mr-2" />
            GitHub Profile
          </a>
          <a
            href="https://www.linkedin.com/in/mitantsoa-rakotomalala-60a122186/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center transition-colors text-primary hover:text-secondary"
          >
            <Linkedin className="w-6 h-6 mr-2" />
            LinkedIn Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
