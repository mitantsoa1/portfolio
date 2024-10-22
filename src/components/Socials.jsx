import React from "react";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

function Socials() {
  return (
    <div className="flex items-center space-x-3 text-sm text-gray-200">
      <span className="inline-flex items-center p-2 rounded-2xl bg-social">
        <Mail className="inline-block w-6 h-6 mr-2" />
        <span className="inline-block">ainamitantso@gmail.com</span>
      </span>
      <span className="inline-flex items-center p-2 rounded-2xl bg-social">
        <Phone className="inline-block w-6 h-6 mr-2" />
        <span className="inline-block">+261 34 62 115 20</span>
      </span>
      <span className="inline-flex items-center p-2 rounded-2xl bg-social">
        <Github className="inline-block w-6 h-6 mr-2" />
        <span className="inline-block">mitantsoa1</span>
      </span>
      <span className="inline-flex items-center p-2 rounded-2xl bg-social">
        <Linkedin className="inline-block w-6 h-6 mr-2" />
        <span className="inline-block">mitantsoa rakotomalala</span>
      </span>
    </div>
  );
}

export default Socials;
