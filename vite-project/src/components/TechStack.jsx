
import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import htmlLogo from "../assets/html.png";
import cssLogo from "../assets/css.png";
import jsLogo from "../assets/javascript.png";
import nodeLogo from "../assets/node.png";
import reactLogo from "../assets/react.png";
import mongodbLogo from "../assets/mongodb.png";
import tailwindcsslogo from "../assets/tailwindcss.png";
import postgreslogo from "../assets/postgres.png";
import awslogo from "../assets/aws.png";
import apilogo from "../assets/api.png";
import githublogo from "../assets/github.png";
import gitlogo from "../assets/git.png";

const techStack = [
  { name: "HTML", logo: htmlLogo },
  { name: "CSS", logo: cssLogo },
  { name: "JavaScript", logo: jsLogo },
  { name: "Node.js", logo: nodeLogo },
  { name: "React", logo: reactLogo },
  { name: "mongodb", logo: mongodbLogo },
  { name: "tailwindcss", logo: tailwindcsslogo },
  { name: "postgres", logo: postgreslogo },
  { name: "aws", logo: awslogo },
  { name: "api", logo: apilogo },
  { name: "github", logo: githublogo },
  { name: "git", logo: gitlogo },
];

const TechStack = () => {
  return (
    <section className="bg-[#010208] text-white py-15 px-4 md:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-xl md:text-2xl text-gray-300 mb-8">
          Tech Stack I Use To Build Projects
        </h2>

        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-16 animate-slide-track"
            animate={{
              x: ["0%", "-100%"],
            }}
            transition={{
              ease: "linear",
              duration: 15,
              repeat: Infinity,
            }}
          >
            {[...techStack, ...techStack].map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-2 min-w-[100px]"
              >
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="h-18 w-auto object-contain"
                />
                <span className="text-sm text-gray-400">{tech.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
