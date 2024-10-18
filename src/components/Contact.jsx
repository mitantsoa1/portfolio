import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="my-16">
      <h2 className="mb-4 text-3xl font-bold text-primary">
        Entrons en contact
      </h2>
      <div className="p-6 border-l-4 rounded-lg shadow-md bg-gradient-to-r from-white to-gray-50 border-secondary">
        <p className="mb-6 text-lg text-gray-700">
          Vous avez un projet, une idée ou une opportunité intéressante à
          discuter ? Je suis toujours disponible pour échanger et explorer de
          nouvelles collaborations. N'hésitez pas à me joindre via les
          plateformes suivantes :
        </p>
        <div className="flex flex-row justify-center space-x-6">
          <a
            href="mailto:ainamitantso@gmail.com"
            className="flex items-center text-gray-700 transition-transform transform hover:text-secondary hover:scale-110"
          >
            <Mail className="w-8 h-8 mr-2" />
            <span className="text-lg font-semibold">Email</span>
          </a>
          <a
            href="https://github.com/mitantsoa1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-700 transition-transform transform hover:text-secondary hover:scale-110"
          >
            <Github className="w-8 h-8 mr-2" />
            <span className="text-lg font-semibold">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/mitantsoa-rakotomalala-60a122186/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-700 transition-transform transform hover:text-secondary hover:scale-110"
          >
            <Linkedin className="w-8 h-8 mr-2" />
            <span className="text-lg font-semibold">LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
