import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import expertise from "../assets/expertise.png"

const faqs = [
  {
    question: "Where and when did you complete your education?",
    answer:
      "I completed my B.Tech in Electronics and Communication Engineering from UIET, Kurukshetra University, spanning the academic years 2021 to 2025.",
  },
  {
    question: "Have you completed any certifications?",
    answer:
      "Yes. I successfully completed an 8-month certification in Java Data Structures and Algorithms from Coding Ninjas, which strengthened my problem-solving and algorithmic thinking. Additionally, I earned a 4-month certification in Ethical Hacking from Internshala, gaining practical skills in penetration testing, network security, and vulnerability assessment.",
  },
  {
    question: "What are your hobbies and interests?",
    answer:
      "Outside of work, I enjoy playing badminton and kabaddi. I also have a strong passion for continuous learning, especially in solving real-world technical problems and exploring new technologies.",
  },
];

export default function Faq() {
  return (
    <div className="w-full px-2 py-12 bg-[#010208] text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <span><img src={expertise} alt="" /></span> Frequently asked questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <Disclosure key={idx}>
              {({ open }) => (
                <div className="bg-[#1D1D1F] rounded-md">
                  <Disclosure.Button className="flex w-full justify-between items-center px-4 py-3 text-left text-base font-medium text-white focus:outline-none">
                    {faq.question}
                    <ChevronUpIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-white`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pb-4 pt-0 text-sm text-gray-300">
                    {faq.answer}
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </div>
  );
}
