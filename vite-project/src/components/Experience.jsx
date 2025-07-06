import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import expertise from "../assets/expertise.png";

const expertiseData = [
  {
    title: "🚀 Full Stack Web Development",
    description:
      "I craft secure and scalable full-stack applications using technologies like React, Node.js, Express, and MongoDB. From user authentication to dynamic data rendering, my focus is on building efficient web systems.",
  },
  {
    title: "🔧 Microservices & Backend Architecture",
    description:
      "At TerraGrid Tech, I designed modular microservices with features like OAuth2 authentication, JSON schema validation, and PDF receipt generation. I also implemented a custom API Gateway using Express Gateway.",
  },
  {
    title: "🤖 AI & Robotics Training",
    description:
      "At Nirman Lab, I led hands-on AI and robotics workshops for school students, teaching ML basics, electronics, and robotics with real-world problem solving.",
  },
  {
    title: "📱 Real-time Health Monitoring",
    description:
      "I developed 'Cikitsam', a wearable health app using React, Firebase, and Python ML for live heart rate, BPM, and RR interval monitoring with secure auth.",
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
          Experiences
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
