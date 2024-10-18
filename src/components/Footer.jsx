import React from "react";

const Footer = () => {
  return (
    <footer className="relative py-0 text-center bg-gray-200">
      <div className="footer-content">
        <p className="pt-4 text-sm"> All rights reserved © H. Mitantsoa 2024</p>
        <p className="mt-2 text-gray-700">&nbsp;</p>
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none footer-wave">
        <svg
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
          className="w-full h-20"
        >
          <path
            d="M0,0 C600,100 600,100 1200,0 L1200,100 L0,100 Z"
            className="fill-dark"
          ></path>
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
