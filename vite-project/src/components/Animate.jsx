import React from "react";
import imag1 from "../assets/imag1.png";
import imag2 from "../assets/imag2.png";
import imag3 from "../assets/imag3.png";
import imag4 from "../assets/imag4.png";
import imag5 from "../assets/imag5.png";
import imag6 from "../assets/imag6.png";
import imag7 from "../assets/imag7.png";
import imag8 from "../assets/imag8.png";
import imag9 from "../assets/imag9.png";
import imag10 from "../assets/imag10.png";

const Animate = () => {
  return (
    <div className="w-full bg-[#010208] text-white">
      <div className="w-full px-4 h-full">
        <div className="flex items-center justify-between h-full py-12 gap-8">
          <div className="flex-1">
            <div className="logo-marquee overflow-hidden">
              <div className="flex items-center gap-22 animate-marquee whitespace-nowrap sm:overflow-hidden">
                {[
                  imag1,
                  imag2,
                  imag3,
                  imag4,
                  imag5,
                  imag6,
                  imag6,
                  imag7,
                  imag8,
                  imag9,
                  imag10,
                ].map((logo, index) => (
                  <img
                    key={index}
                    src={logo}
                    alt={`logo-${index}`}
                    className="h-18 w-auto object-contain flex-shrink-0 sm:overflow-hidden"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border border-[#424264] w-full "></div>
    </div>
  );
};

export default Animate;
