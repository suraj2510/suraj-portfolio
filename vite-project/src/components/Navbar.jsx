import React from "react";
import logoImg from "../assets/logo.png";
import Expertise from "./Expertise";
import Work from "./Work";
import Experience from "./Experience";
import TechStack from "./TechStack";
import Faq from "./Faq";
import Animate from "./Animate";
import Footer from "./Footer";
import { Cover } from "./ui/cover";

const Navbar = () => {
  return (
    <div className="overflow-x-hidden bg-[#010208] text-white">
      {/* Keyframe animation style */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Navbar */}
      <div className="w-full px-4 py-3">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto gap-4 md:gap-0">
          <img
            src={logoImg}
            alt="logo"
            className="h-8 w-auto max-w-full object-contain"
          />
          <div className="flex flex-wrap justify-center md:justify-between gap-3 text-sm md:text-base">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Project</a>
            <a href="#">Contact</a>
          </div>
          <a
            href="/SurajResumeNew.pdf"
            download
            rel="noopener noreferrer"
            className="px-4 py-1 border border-white rounded-full hover:bg-white hover:text-black transition text-xs sm:text-sm font-semibold whitespace-nowrap"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <div className="flex items-center justify-center pt-4 text-white text-center">
        <div className="max-w-6xl mx-auto px-4 py-10 sm:py-20 text-center">
          <p className="text-lg sm:text-xl md:text-2xl tracking-widest text-gray-400 mb-2">
            Hi, my name is{" "}
            <span className="text-blue-600 font-bold">Suraj Maurya</span>
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase leading-tight space-y-2">
            <div>I am a</div>

            <div className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text">
              <Cover className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl">
                Full Stack Developer
              </Cover>
            </div>

            <div className="text-base sm:text-lg md:text-xl tracking-wide text-gray-300">
              Based in India, building web products that matter.
            </div>
          </h1>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="w-full">
        <TechStack />
      </div>

      {/* Other Sections */}
      <Expertise />
      <Work />
      <Experience />
      <Faq />
      <Animate />
      <Footer />
    </div>
  );
};

export default Navbar;
