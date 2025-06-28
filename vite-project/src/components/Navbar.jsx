import React from "react";
import logoImg from "../assets/logo.png";
import heroimg1 from "../assets/heroimg1.png";
import heroimg2 from "../assets/heroimg2.png";
import imag1 from "../assets/imag1.png";
import imag2 from "../assets/imag2.png";
import imag3 from "../assets/imag3.png";
import Expertise from "./Expertise";

const Navbar = () => {
  return (
    <>
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
          animation: marquee 20s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Navbar */}
      <div className="bg-[#010208] w-full px-4 py-3 text-white">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div>
            <img src={logoImg} alt="logo" className="h-8" />
          </div>
          <div className="flex justify-between gap-5 text-sm md:text-base">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Project</a>
            <a href="#">Contact</a>
          </div>
          <button className="border border-white px-4 py-1 rounded-full hover:bg-white hover:text-black transition">
            Hire me
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-[#010208] min-h-[50vh] flex items-center justify-center px-4 pt-20 pb-4 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-black text-xl leading-10 md:text-2xl md:leading-[54px] lg:text-7xl lg:leading-[88px] tracking-wide uppercase text-white">
            I AM A{" "}
            <img
              src={heroimg1}
              alt="design"
              className="w-12 h-8 md:w-16 md:h-10 lg:w-24 lg:h-14 align-middle mx-2 object-contain inline"
            />{" "}
            FREELANCER
            <br />
            DESIGNER{" "}
            <img
              src={heroimg2}
              alt="computer"
              className="w-12 h-8 md:w-16 md:h-10 lg:w-24 lg:h-14 align-middle mx-2 object-contain inline"
            />{" "}
            FROM
            <br />
            SAN FRANCISCO
          </h1>
        </div>
      </div>
      <div className="w-full bg-[#010208] min-h-[32vh] text-white">
        <div className="container mx-auto px-4 h-full">
          <div className="flex items-center justify-between h-full py-12 gap-8">
            {/* Left: Marquee logos */}
            <div className="flex-1 max-w-2xl">
              <div className="logo-marquee overflow-hidden">
                <div className="flex items-center gap-16 animate-marquee whitespace-nowrap">
                  {[imag1, imag2, imag3, imag1, imag2, imag3, imag2, imag1].map(
                    (logo, index) => (
                      <img
                        key={index}
                        src={logo}
                        alt={`logo-${index}`}
                        className="h-8 w-auto object-contain flex-shrink-0"
                      />
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Right side - Description text */}
            <div className="flex-1 max-w-md text-gray-300 leading-relaxed">
              Welcome to my portfolio. Here, artistry meets functionality. Dive
              into a curated showcase of distinctive branding and web designs,
              each crafted to captivate and inspire.
            </div>
          </div>
        </div>
      </div>
      <Expertise />
    </>
  );
};

export default Navbar;
