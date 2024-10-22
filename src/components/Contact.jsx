import React from "react";
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import Skype from "/images/skype.png";

const Contact = () => {
  return (
    <section id="contact" className="my-16">
      <h3 className="mb-4 text-3xl font-bold text-text">Contact</h3>
      <div className="p-6 border-r-8 card">
        <p className="mb-4 text-lg">
          N'hésitez pas à me contacter par email ou via mes réseaux sociaux
        </p>
        {/* Appeler Hanja */}
        <p className="flex items-center mb-4">
          <a
            aria-label="Appeler Hanja"
            href="tel:+261346211520"
            data-position="top"
            data-tooltip="Appeler Hanja"
            className="inline-block p-4 mr-4 text-white rounded-full bg-contact hover:bg-social btn-floating btn-large waves-effect waves-social "
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
            className="inline-block p-4 mr-4 text-white rounded-full bg-contact btn-floating btn-large waves-effect waves-social hover:bg-social"
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

        {/* LinkedIn Hanja */}
        <p className="flex items-center mb-4">
          <a
            aria-label="Regarder Hanja sur LinkedIn"
            href="https://www.linkedin.com/in/mitantsoa-rakotomalala-60a122186/"
            target="_blank"
            rel="noopener noreferrer"
            data-position="top"
            data-tooltip="Regarder Hanja sur LinkedIn"
            className="inline-block p-4 mr-4 text-white rounded-full bg-contact btn-floating btn-large waves-effect waves-social hover:bg-social"
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
            Mitantsoa Rakotomalala
          </a>
        </p>

        {/* skype Hanja */}
        <p className="flex items-center mb-4">
          <a
            aria-label="Appeler Hanja sur Skype"
            href="skype:live:.cid.a4ba60b3dd512ff6?call"
            target="_blank"
            rel="noopener noreferrer"
            data-position="top"
            data-tooltip="Appeler Hanja sur Skype"
            className="inline-block p-2 mr-4 text-white rounded-full bg-contact btn-floating btn-large waves-effect waves-social hover:bg-social"
          >
            <img
              src="/portfolio/images/skype.png"
              className="w-10 h-10"
              alt="skype"
            />
          </a>
          <a
            aria-label="Appeler Hanja sur Skype"
            href="skype:live:.cid.a4ba60b3dd512ff6?call"
            className="text-lg font-semibold hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Aina Mitantsoa
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
            className="inline-block p-4 mr-4 text-white rounded-full bg-contact btn-floating btn-large waves-effect waves-social hover:bg-social"
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
            mitantsoa1
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
