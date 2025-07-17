import React from "react";
import { FaLinkedin, FaTwitter, FaGithub, FaHome } from "react-icons/fa";
import { SiPeerlist } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-[#010208] text-white px-4 py-10 border-t border-white">
      <div className="max-w-6xl mx-auto">
        {/* ───────── Contact ───────── */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            LET’S TALK!
          </h2>
          <a
            href="mailto:Surajmaurya1335@gmail.com"
            className="text-sm sm:text-base underline hover:text-cyan-400 transition duration-300"
          >
            Surajmaurya1335@gmail.com
          </a>
        </div>

        {/* ───────── Copyright + Social ───────── */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 text-sm text-gray-100">
          <p className="text-base text-center md:text-left">
            © Suraj Maurya.All rights reserved.
          </p>

          <div className="flex justify-center md:justify-end sm:justify-start">
            <div className="flex justify-center gap-6 flex-wrap">
              <a
                href="#"
                className="hover:scale-110 transition-transform duration-300"
              >
                <FaHome className="text-3xl text-pink-500 hover:text-pink-300" />
              </a>

              <a
                href="https://github.com/suraj2510"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-300"
              >
                <FaGithub className="text-3xl text-gray-400 hover:text-white" />
              </a>

              <a
                href="https://x.com/surajxcode"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-300"
              >
                <FaTwitter className="text-3xl text-sky-400 hover:text-sky-200" />
              </a>

              <a
                href="https://www.linkedin.com/in/surajmaurya252101101/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-300"
              >
                <FaLinkedin className="text-3xl text-blue-500 hover:text-blue-300" />
              </a>

              <a
                href="https://peerlist.io/surajmaurya1659"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-300"
              >
                <SiPeerlist className="text-3xl text-yellow-400 hover:text-yellow-200" />
              </a>
            </div>
          </div>
        </div>

        {/* ───────── Visitor Counter Badge (All-Time) ───────── */}
        <div className="text-center mt-6">
          <img
            className="w-30 m-auto"
            src="https://api.visitorbadge.io/api/total?path=https%3A%2F%2Fsuraj-live.netlify.app%2F&label=Visitor&labelColor=%23155DFC&countColor=%23010258&labelStyle=upper"
            alt="Visitor badge showing total number of visitors"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
