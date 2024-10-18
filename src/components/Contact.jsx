import React from "react";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="my-16">
      <h3 className="mb-4 text-3xl font-bold text-primary">Contact</h3>
      <div className="p-6 border-l-4 rounded-lg shadow-md bg-gradient-to-r from-white to-gray-50 border-secondary">
        {/* Appeler Hanja */}
        <p className="flex items-center mb-4">
          <a
            aria-label="Appeler Hanja"
            href="tel:+261346211520"
            data-position="top"
            data-tooltip="Appeler Hanja"
            className="inline-block p-4 mr-4 bg-gray-200 rounded-full hover:bg-light btn-floating btn-large waves-effect waves-light "
          >
            <Phone className="w-6 h-6" />
          </a>
          <a
            aria-label="Appeler Hanja"
            href="tel:+261346211520"
            className="text-lg font-semibold hover:underline"
          >
            +261 34 62 115 20
          </a>
        </p>

        {/* Email Hanja */}
        <p className="flex items-center mb-4">
          <a
            aria-label="Email Hanja"
            href="mailto:ainamitantso@gmail.com"
            data-position="top"
            data-tooltip="Email Aina"
            className="inline-block p-4 mr-4 bg-gray-200 rounded-full btn-floating btn-large waves-effect waves-light hover:bg-light"
          >
            <Mail className="w-6 h-6" />
          </a>
          <a
            aria-label="Email Hanja"
            href="mailto:ainamitantso@gmail.com"
            className="text-lg font-semibold hover:underline"
          >
            ainamitantso@gmail.com
          </a>
        </p>

        {/* GitHub Hanja */}
        <p className="flex items-center mb-4">
          <a
            aria-label="Regarder Hanja sur GitHub"
            href="https://github.com/mitantsoa1"
            target="_blank"
            rel="noopener noreferrer"
            data-position="top"
            data-tooltip="Regarder Hanja sur GitHub"
            className="inline-block p-4 mr-4 bg-gray-200 rounded-full btn-floating btn-large waves-effect waves-light hover:bg-light"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            aria-label="Regarder Hanja sur GitHub"
            href="https://github.com/mitantsoa1"
            className="text-lg font-semibold hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/mitantsoa1
          </a>
        </p>

        {/* LinkedIn Hanja */}
        <p className="flex items-center mb-4">
          <a
            aria-label="Regarder Hanja sur LinkedIn"
            href="https://www.linkedin.com/in/mitantsoa-rakotomalala-60a122186/"
            target="_blank"
            rel="noopener noreferrer"
            data-position="top"
            data-tooltip="Regarder Hanja sur LinkedIn"
            className="inline-block p-4 mr-4 bg-gray-200 rounded-full btn-floating btn-large waves-effect waves-light hover:bg-light"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            aria-label="Regarder Hanja sur LinkedIn"
            href="https://www.linkedin.com/in/mitantsoa-rakotomalala-60a122186/"
            className="text-lg font-semibold hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/mitantsoa-rakotomalala-60a122186
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
