import React from "react";
import { FloatingDockDemo } from "./FloatingDockDemo";

const Footer = () => {
  return (
    <footer className="bg-[#010208] text-white px-4 py-10 border-t border-white">
      <div className="max-w-6xl mx-auto">
        {/* Contact Section */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            LET’S TALK!
          </h2>
          <a
            href="mailto=Surajmaurya1335@gmail.com"
            className="text-sm sm:text-base underline hover:text-cyan-400 transition duration-300"
          >
            Surajmaurya1335@gmail.com
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 text-sm text-gray-100">
          <p className="text-base font-bold text-center md:text-left">
            © SURAJ MAURYA – 2025
          </p>

          <div className="flex justify-center md:justify-end sm:justify-start">
            <FloatingDockDemo />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
