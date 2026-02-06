import React from "react";

const services = [
  {
    icon: "📊",
    title: "Startup Registration",
    desc: "Vyombiz will assist in incorporating your company from basics till the end while providing startup recognition...",
  },
  {
    icon: "💰",
    title: "Tax and Auditing",
    desc: "Get your tax and auditing work done in a hassle-free manner with us...",
  },
  {
    icon: "👔",
    title: "Environmental Consultancy",
    desc: "Elevate the environmental initiatives of your business and meet regulatory standards towards a sustainable future with Vyombiz...",
  },
  {
    icon: "📝",
    title: "Advisory and Consultancy",
    desc: "Our team of experts are dedicated to providing you with advisory and consultancy for any of your business-related requirements...",
  },
  {
    icon: "⚖️",
    title: "Regulatory (BIS, CDSCO, ISO)",
    desc: "We have a team of professionals who will guide you through the process of regulatory compliance, such as BIS, CDSCO, ISO, etc...",
  },
  {
    icon: "📋",
    title: "Licensing",
    desc: "There are various laws in India that a company is required to comply with; Vyombiz helps you complete all the licensing requirements...",
  },
  {
    icon: "📞",
    title: "On Demand CA/CS Services",
    desc: "If you need the assistance of CA or CS for any of your business requirements, our professionals are there to provide business support...",
  },
  {
    icon: "📄",
    title: "Free Business Templates",
    desc: "Writing your own business plan can be complicated and time-consuming, we have got 500+ business templates for you...",
  },
];

const PremiumPlatform = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-3 gap-16">

        {/* LEFT CONTENT */}
        <div className="lg:col-span-1">
          <h2 className="text-4xl font-black text-[#072b47] leading-tight">
            Premium Business <br /> Management Platform
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            At Vyombiz, we are not just a platform; we are your partner who
            guides you in the business world. As India's leading legal service
            provider and tech-enabled platform, we connect startups and
            enterprises with more than 10,000+ professionals including lawyers,
            chartered accountants, company secretaries, and 1,500 engineers.
            Our commitment to integrity is steadfast, providing unbiased advice
            through our vast network of experts.
          </p>

          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            Join Vyombiz for top-notch legal solutions where your dreams can be
            fulfilled. Let's initiate your entrepreneurial journey with us.
          </p>

          <button className="mt-8 bg-[#005a9c] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#004a7c] transition">
            Learn more
          </button>
        </div>

        {/* RIGHT SERVICES */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((item, index) => (
            <div key={index} className="flex gap-4">
              {/* Icon */}
              <div className="w-10 h-10 flex items-center justify-center bg-[#fef3c7] text-2xl rounded-lg shrink-0">
                {item.icon}
              </div>

              {/* Text */}
              <div>
                <h4 className="font-black text-[#072b47] text-lg">
                  {item.title}
                </h4>
                <p className="text-base text-gray-600 mt-1 leading-relaxed">
                  {item.desc}
                  <span className="text-blue-600 cursor-pointer ml-1">read more</span>
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
