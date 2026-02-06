// LegalFeatures.jsx
import React from "react";

// Left side cards data with your images
const cards = [
  {
    img: "https://Vyombiz.io/img/icon-corpiz.png",
    title: "Quick Response",
    desc: "We make sure to answer every query on time. Moreover, none of our emails or calls go unanswered.",
  },
  {
    img: "https://Vyombiz.io/img/national-top-10.svg",
    title: "Advanced Technology",
    desc: "Our high-tech platform with customer empowerment tools enables customers to get the best. You can connect with our experts with just a single click.",
  },
  {
    img: "https://Vyombiz.io/img/client-satisfaction.svg",
    title: "Hassle-free Registration",
    desc: "Vyombiz has made the registration process easy. You can leave the hassle of registration to us and focus on other important works that might require your immediate attention.",
  },
  {
    img: "https://Vyombiz.io/img/excellent-advisory-service.png",
    title: "Expert Guidance",
    desc: "Our experienced team of professionals provides insightful advice on your business execution related to compliance, rules, taxation, registration, etc., which will help you select the best approach based on thorough research and inspection.",
  },
];

// Right side points
const points = [
  "Quick Response: We make sure to answer every query on time. Moreover, none of our emails or calls go unanswered.",
  "Advanced Technology: Our high-tech platform with customer empowerment tools enables customers to get the best. You can connect with our experts with just a single click.",
  "Hassle-free Registration: Vyombiz has made the registration process easy. You can leave the hassle of registration to us and focus on other important works that might require your immediate attention.",
  "Expert Guidance: Our experienced team of professionals provides insightful advice on your business execution related to compliance, rules, taxation, registration, etc., which will help you select the best approach based on thorough research and inspection.",
  "Global Network: With our extensive global network of experts with years of experience, we also assist you in obtaining global certifications and approvals without complications.",
];

const LegalFeatures = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-12">
        {/* Left Side Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:w-1/2">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white border rounded-lg p-6 flex flex-col items-start transition-all duration-300 hover:bg-blue-500 hover:text-white cursor-pointer"
            >
              <div className="mb-4">
                <img src={card.img} alt={card.title} className="w-12 h-12 object-contain" />
              </div>
              <h4 className="font-bold text-black mb-2">{card.title}</h4>
              <p className="text-black text-sm">{card.desc}</p>
            </div>
          ))}
        </div>

        {/* Right Side Content */}
        <div className="lg:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Features of Our Legal Service</h2>
          <p className="text-gray-700 mb-6">
            Vyombiz is a tech-driven platform committed to delivering professional services all over India. We deliver exceptional services to our clients, and our dedication and commitment can be seen in the following ways:
          </p>

          <ul className="list-disc list-inside space-y-3 text-gray-700">
            {points.map((point, idx) => (
              <li key={idx} className="text-sm">{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default LegalFeatures;
