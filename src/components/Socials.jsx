import React from "react";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

function Socials() {
  return (
    <div className="flex items-center space-x-3 text-sm text-gray-200  md:flex md:items-center md:space-x-3 sm:grid sm:grid-cols-2 sm:gap-2 sm:w-auto sm:justify-between sm:items-start xsm:text-xs xsm:grid xsm:grid-cols-2 xsm:gap-2 xsm:w-auto xsm:justify-between xsm:items-start">
      <span className="inline-flex items-center p-2 rounded-2xl bg-social w-auto xsm:px-1 xsm:py-3 sm:px-2 sm:py-3">
        <Mail className="inline-block w-6 h-6 mr-2 xsm:hidden sm:block" />
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
      <span className="inline-flex items-center p-2 xsm:py-1 rounded-2xl bg-social">
        <Linkedin className="inline-block w-6 h-6 mr-2" />
        <span className="inline-block">mitantsoa rakotomalala</span>
      </span>
    </div>
  );
}

export default Socials;
