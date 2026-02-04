import React from "react";

const services = [
  {
    title: "Startup Registration",
    desc: "Corpbiz will assist in incorporating your company from basics till the end while providing startup recognition...",
  },
  {
    title: "Tax and Auditing",
    desc: "Get your tax and auditing work done in a hassle-free manner with us...",
  },
  {
    title: "Environmental Consultancy",
    desc: "Elevate the environmental initiatives of your business and meet regulatory standards towards a sustainable future with Corpbiz...",
  },
  {
    title: "Advisory and Consultancy",
    desc: "Our team of experts are dedicated to providing you with advisory and consultancy for any of your business-related requirements...",
  },
  {
    title: "Regulatory (BIS, CDSCO, ISO)",
    desc: "We have a team of professionals who will guide you through the process of regulatory compliance, such as BIS, CDSCO, ISO, etc...",
  },
  {
    title: "Licensing",
    desc: "There are various laws in India that a company is required to comply with; Corpbiz helps you complete all the licensing requirements...",
  },
  {
    title: "On Demand CA/CS Services",
    desc: "If you need the assistance of CA or CS for any of your business requirements, our professionals are there to provide business support...",
  },
  {
    title: "Free Business Templates",
    desc: "Writing your own business plan can be complicated and time-consuming, we have got 500+ business templates for you...",
  },
];

const PremiumPlatform = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-16">

        {/* LEFT CONTENT */}
        <div className="lg:col-span-1">
          <h2 className="text-4xl font-extrabold text-[#0B2C4D] leading-tight">
            Premium Business <br /> Management Platform
          </h2>

          <p className="mt-6 text-gray-600 text-sm leading-relaxed">
            At Corpbiz, we are not just a platform; we are your partner who
            guides you in the business world. As India's leading legal service
            provider and tech-enabled platform, we connect startups and
            enterprises with more than 10,000+ professionals including lawyers,
            chartered accountants, company secretaries, and 1,500 engineers.
            Our commitment to integrity is steadfast, providing unbiased advice
            through our vast network of experts.
          </p>

          <p className="mt-4 text-gray-600 text-sm leading-relaxed">
            Join Corpbiz for top-notch legal solutions where your dreams can be
            fulfilled. Let's initiate your entrepreneurial journey with us.
          </p>

          <button className="mt-8 bg-[#0B5ED7] text-white px-6 py-3 rounded-md font-medium hover:bg-[#084298] transition">
            Learn more
          </button>
        </div>

        {/* RIGHT SERVICES */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((item, index) => (
            <div key={index} className="flex gap-4">
              {/* Icon */}
              <div className="w-10 h-10 flex items-center justify-center bg-orange-100 text-orange-500 rounded">
                ★
              </div>

              {/* Text */}
              <div>
                <h4 className="font-semibold text-[#0B2C4D]">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                  {item.desc}
                  <span className="text-blue-600 cursor-pointer"> read more</span>
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PremiumPlatform;
