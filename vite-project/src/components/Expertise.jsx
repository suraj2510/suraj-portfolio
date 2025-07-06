import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import expertise from "../assets/expertise.png";

const expertiseData = [
  {
    title: "🚀 Branding & Development",
    description:
      "I build fast, scalable, and secure web applications with a strong emphasis on performance and usability. Leveraging tools like React, Node.js, Webflow, and AWS, I avoid generic templates and craft custom experiences tailored to your brand.",
  },
  {
    title: "🎨 UI Design",
    description:
      "I design clean, modern, and responsive interfaces using Tailwind CSS, React, and Figma. Every design is performance-driven and built to adapt seamlessly across devices.",
  },
  {
    title: "🧩 Microservices & Backend Architecture",
    description:
      "I specialize in building modular, scalable backend systems using Node.js, Express.js, and MongoDB. At TGT, I designed production-ready microservices with OAuth2 auth, API Gateways, rate limiting, and PDF generation. My solutions are structured, versioned, and ready for real-world traffic.",
  },
  {
    title: "Development",
    description:
      "I create user-friendly, adapting, and engaging websites. No cookie-cutters. I employ top-notch techniques to build custom, secure, and scalable solutions.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const Expertise = () => {
  return (
    <section className="bg-[#010208] text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3">
          <img src={expertise} alt="expertise-icon" className="w-8 h-8" />
          Expertise
        </h2>

        <div className="grid sm:grid-cols-2 gap-8">
          {expertiseData.map((item, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="bg-[#0f1117] rounded-xl p-6 border border-[#2a2b32] hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
