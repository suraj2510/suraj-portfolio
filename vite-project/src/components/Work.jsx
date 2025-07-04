import React from "react";
import expertise from "../assets/expertise.png";
import work from "../assets/work1.png";
import work2 from "../assets/work2.png";
import work3 from "../assets/work3.png";

const works = [
  {
    title: "My Portfolio",
    description:
      "A fully featured UI design for showcasing skills, projects, and contact information.",
    detail: "",
    image: work,
    github: "https://github.com/SurajTGT/my-portfolio", // Update with actual repo
    live: "https://surajtgt.vercel.app", // Update with your deployed portfolio link
  },
  {
    title: "Cikitsām",
    description:
      "Cikitsām - Integrative Chrono-Bio-Medical Device for Real-Time Health Monitoring.",
    detail: "",
    image: work2,
    github: "https://github.com/suraj2510/cikitsam", // Replace if repo is private or different
    live: "https://cikitsam.com", // Replace with actual deployed link
  },
  {
    title: "TGT by TerraGrid TECH",
    description: "Digital Receipts for a Sustainable Future.",
    detail:
      "TGT by TerraGrid TECH is a digital receipt platform that aims to reduce paper waste and promote sustainability. It allows users to receive, store, and manage their receipts digitally, making it easier to track expenses and reduce environmental impact.",
    image: work3,
    github: "https://github.com/TerraGridTech/POS-API", // Actual microservice repo
    live: "https://github.com/TerraGridTech/POS-API", // Replace with actual live domain if hosted
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
                  <p className="text-sm text-gray-300 mb-4">
                    {work.description}
                  </p>
                  <p className="text-sm">{work.detail}</p>
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
