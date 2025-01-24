import React from "react";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

function Socials() {
  return (
    <div className="grid grid-cols-1 gap-2 text-sm text-gray-200 sm:grid-cols-2 sm:gap-3 md:flex md:justify-between md:gap-4">
      {/* Email */}
      <span className="flex items-center p-2 space-x-2 rounded-lg bg-social md:w-auto">
        <Mail className="w-5 h-5" />
        <span className="text-xs sm:text-sm">ainamitantso@gmail.com</span>
      </span>

      {/* Phone */}
      <span className="flex items-center p-2 space-x-2 rounded-lg bg-social md:w-auto">
        <Phone className="w-5 h-5" />
        <span className="text-xs sm:text-sm">+261 34 62 115 20</span>
      </span>

      {/* GitHub */}
      <span className="flex items-center p-2 space-x-2 rounded-lg bg-social md:w-auto">
        <Github className="w-5 h-5" />
        <span className="text-xs sm:text-sm">mitantsoa1</span>
      </span>

      {/* LinkedIn */}
      <span className="flex items-center p-2 space-x-2 rounded-lg bg-social md:w-auto">
        <Linkedin className="w-5 h-5" />
        <span className="text-xs sm:text-sm">mitantsoa rakotomalala</span>
      </span>
    </div>
  );
}

export default Socials;
