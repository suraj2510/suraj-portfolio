import React from "react";
import expertise from "../assets/expertise.png";
import work from "../assets/work1.png";
import work2 from "../assets/work2.png";
import work3 from "../assets/work3.png";
import work4 from "../assets/work4.png";

const works = [
  {
    title: "My Portfolio",
    description:
      "A fully featured UI design for showcasing skills, projects, and contact information.",
    detail: "",
    image: work,
    github: "https://github.com/suraj2510/suraj-portfolio",
    live: "https://suraj-live.netlify.app/",
  },
  {
    title: "Cikitsām",
    description:
      "A real-time health monitoring web app integrated with a wearable device, analyzing heart rate, BPM, and RR intervals using live sensor data and ML models.",
    detail:
      "Cikitsām is a medical-grade health monitoring system combining a wearable hardware device and a full-stack web app to deliver real-time physiological insights. The frontend is built using React.js and Tailwind CSS, with Firebase for user authentication and data storage. Sensor data is streamed live from the wearable to the cloud and visualized on the dashboard. \n\nThe RR Interval Monitoring Device is built using a MAX30102 pulse oximeter sensor and ESP32 microcontroller, programmed via the Arduino IDE. It transmits heart-related signals including heart rate, BPM, and RR intervals to the app, where Python-based ML models analyze patterns for healthcare tracking and early anomaly detection.\n\nKey Features:\n• Real-time heart rate and RR interval monitoring\n• Secure user login via Firebase\n• Wearable device integration using ESP32 + MAX30102\n• Data streaming and visualization\n• Machine learning-based signal analysis",
    image: work2,
    github: "https://github.com/suraj2510/cikitsam",
    live: "https://cikitsam.com",
  },

  {
    title: "GT by TerraGrid TECH",
    description:
      "A scalable digital receipt platform using microservices to eliminate paper waste and simplify expense management across POS systems.",
    detail:
      "GT by TerraGrid TECH is an eco-conscious digital receipt platform designed to help businesses and consumers transition away from paper receipts. Built with a modern microservices architecture, the platform enables users to receive, store, and manage receipts digitally, reducing environmental impact and improving record-keeping. The system is designed for high scalability, modularity, and seamless integration with existing Point of Sale (POS) systems.\n\nThe platform uses 9 purpose-built microservices to handle core functionalities including receipt ingestion, generation, storage, QR-code access, and analytics. It supports CRM/ERP sync, OAuth-based authentication, PDF rendering, and secure cloud storage. An admin panel is included for managing receipts, clients, and tracking system activity.",
    image: work3,
    github: "https://github.com/TerraGridTech/POS-API", // Update with actual
    live: "https://github.com/TerraGridTech/POS-API", // Update with actual
  },
  {
    title: "SURAJ@WORLD",
    description:
      "A modern React app displaying comprehensive data of 200+ countries using REST API.",
    detail:
      "This project visualizes detailed information about countries worldwide such as native names, population, region, sub-region, capital, top-level domain, and currency. Built using React 19 with routing support via React Router DOM, and data fetching handled by Axios. The application presents data in a clean UI with responsive layouts, icons for better readability (via React Icons), and a seamless SPA experience.",
    image: work4,
    github: "https://github.com/suraj2510/Suraj-World",
    live: "https://suraj-world.netlify.app/",
  },
];

const Works = () => {
  return (
    <section className="bg-[#010208] text-white px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-2">
            <span className="text-l">
              <img src={expertise} alt="works icon" />
            </span>{" "}
            Works
          </h2>
          <a href="#" className="text-sm text-gray-300 hover:underline">
            View all
          </a>
        </div>

        <div className="space-y-8">
          {works.map((work, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl overflow-hidden flex flex-col md:flex-row"
            >
              <img
                src={work.image}
                alt={work.title}
                className="w-full md:w-1/2 h-auto object-cover"
              />
              <div className="p-6 flex flex-col justify-between md:w-1/2">
                <div>
                  <h3 className="text-lg font-semibold mb-2">{work.title}</h3>
                  <p className="text-md text-gray-300 mb-4">
                    {work.description}
                  </p>
                  <p className="text-sm whitespace-pre-line">{work.detail}</p>
                </div>
                <div className="flex gap-3 mt-4">
                  <a
                    href={work.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-white text-white rounded-full px-4 py-1 text-sm w-fit hover:bg-white hover:text-black transition"
                  >
                    GitHub
                  </a>
                  <a
                    href={work.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-white text-white rounded-full px-4 py-1 text-sm w-fit hover:bg-white hover:text-black transition"
                  >
                    Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
