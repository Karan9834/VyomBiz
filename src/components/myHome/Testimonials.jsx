// Testimonials.jsx
import React from "react";

const testimonials = [
  {
    heading: "Ms Seema Singh",
    title: "CFO - Online food Delivery App",
    description:
      "We would recommend Corpbiz incorporation services to any founder without a second doubt. The process was beyond efficient and shows Corpbiz founder's commitment and vision to truly help entrepreneurs and early stage startups to get them incorporated with ease.",
  },
  {
    heading: "Mr. Vinay Arora",
    title: "MD, India",
    description:
      "Really thankful to Corpbiz. Our experience with its expert was tremendous. Strong professional approach towards clients. My Company Registration was filed in a very less time, thanks to Corpbiz experts.",
  },
  {
    heading: "Priti Singh",
    title: "MD, India",
    description:
      "I was searching for a company for assistance in the incorporation services. Then one of my friend tell me about Corpbiz and definitely the Corpbiz team is really efficient and has an experienced staff to guide us through the entire process of Company Incorporation.",
  },
  {
    heading: "Arjun Mehta, Startup Founder, Chennai",
    title: "Verified User",
    description:
      "Corpbiz is very reliable and efficient. They managed all paperwork, resolved my queries, and completed my GST registration much quicker than I expected.",
  },
  {
    heading: "Lavanya Singh, Startup Founder, Greater Noida",
    title: "Verified User",
    description:
      "Setting up our Bio Medical Waste Recycling Plant was a huge project. Mukul managed the entire compliance framework seamlessly from start to finish.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-yellow-500">Testimonials</h2>
        <p className="text-black text-lg mt-2">
          Updated testimonials from our customers
        </p>
      </div>

      {/* Slider */}
      <div className="overflow-hidden">
        <div className="flex gap-6 animate-marquee">
          {testimonials.concat(testimonials).map((t, index) => (
            <div
              key={index}
              className="w-64 bg-gray-100 rounded-lg p-6 shrink-0 shadow-lg"
            >
              <h3 className="text-center font-bold text-lg mb-2">{t.heading}</h3>
              <h4 className="text-center font-semibold text-md mb-2">{t.title}</h4>
              <p className="text-center text-gray-700 text-sm">{t.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* View More Reviews Button */}
      <div className="text-center mt-8">
        <button className="bg-yellow-500 text-white font-semibold px-6 py-3 rounded hover:bg-yellow-600 transition">
          View More Reviews
        </button>
      </div>

      {/* Tailwind Animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
