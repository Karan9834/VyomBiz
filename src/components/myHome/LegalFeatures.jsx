import React, { useState } from "react";
import { BarChart3, TrendingUp, Lightbulb, CheckCircle2 } from "lucide-react";

const FeatureCard = ({ title, desc, icon: Icon, color, bgColor, isActive }) => (
  <div className={`p-8 rounded-[2rem] flex flex-col items-center text-center transition-all duration-300 h-full shadow-xl ${isActive
    ? "bg-[#072b47] text-white"
    : "bg-white text-slate-700 border border-slate-100"
    }`}>
    <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 text-2xl font-bold shadow-sm transition-colors duration-300 ${isActive
      ? "bg-white text-[#072b47]"
      : (bgColor || "bg-slate-50")
      }`}>
      {Icon ? <Icon size={28} className={`transition-colors duration-300 ${isActive ? "text-[#072b47]" : (color || "text-slate-500")}`} /> : "V"}
    </div>
    <h3 className={`text-xl font-black mb-4 transition-colors duration-300 ${isActive ? "text-white" : "text-[#072b47]"}`}>{title}</h3>
    <p className={`text-[13px] font-medium leading-relaxed transition-colors duration-300 ${isActive ? "text-slate-300" : "text-slate-500"}`}>
      {desc}
    </p>
  </div>
);

const LegalFeatures = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  const cards = [
    {
      title: "Why VyomBiz?",
      desc: "VyomBiz is a tech-enabled and AI-driven platform where professionals are dedicated to providing legal and financial services to clients.",
    },
    {
      title: "India's Largest Legal Tech Company",
      desc: "VyomBiz is a professional service provider that provides business registration, taxation and licensing services. We have a large network of experienced professionals working with us.",
      icon: BarChart3,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "99.9% Client Satisfaction",
      desc: "In order to ensure client satisfaction, we continuously strive to improve the quality of services offered by the industry experts as per the requirements.",
      icon: TrendingUp,
      color: "text-green-500",
      bgColor: "bg-green-50",
    },
    {
      title: "Excellent Advisory Services",
      desc: "With the largest professional network, we are dedicated to offering the best advisory services so that you don't face any complications in your entrepreneurial journey.",
      icon: Lightbulb,
      color: "text-yellow-500",
      bgColor: "bg-yellow-50",
    },
  ];

  const features = [
    {
      title: "Quick Response",
      desc: "We make sure to answer every query on time. Moreover, none of our emails or calls go unanswered."
    },
    {
      title: "Advanced Technology",
      desc: "Our high-tech platform with customer empowerment tools enables customers to get the best. You can connect with our experts with just a single click."
    },
    {
      title: "Hassle-free Registration",
      desc: "VyomBiz has made the registration process easy. You can leave the hassle of registration to us and focus on other important works that might require your immediate attention."
    },
    {
      title: "Expert Guidance",
      desc: "Our experienced team of professionals provides insightful advice on your business execution related to compliance, rules, taxation, registration, etc., which will help you select the best approach based on thorough research and inspection."
    },
    {
      title: "Global Network",
      desc: "With our extensive global network of experts with years of experience, we also assist you in obtaining global certifications and approvals without complications."
    }
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 flex flex-col lg:flex-row gap-16 items-start">

        {/* Left Side - Grid Cards */}
        <div className="lg:w-[45%] grid grid-cols-1 md:grid-cols-2 gap-6" onMouseLeave={() => setHoveredIndex(0)}>
          {cards.map((card, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              className="h-full"
            >
              <FeatureCard {...card} isActive={hoveredIndex === index} />
            </div>
          ))}
        </div>

        {/* Right Side - Features Content */}
        <div className="lg:w-[55%] pt-4">
          <h2 className="text-4xl font-black text-[#072b47] mb-8">Features of Our Legal Service</h2>
          <p className="text-slate-600 text-lg mb-10 leading-relaxed font-medium">
            VyomBiz is a tech-driven platform committed to delivering professional services all over India. We deliver exceptional services to our clients, and our dedication and commitment can be seen in the following ways:
          </p>

          <div className="space-y-8">
            {features.map((item, index) => (
              <div key={index} className="flex gap-4 items-start group">
                <div className="mt-1 shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                  <CheckCircle2 size={16} className="text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="text-[#072b47] font-bold text-lg mb-1 group-hover:text-blue-600 transition-colors">{item.title}:</h4>
                  <p className="text-slate-500 font-medium leading-relaxed text-[15px]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default LegalFeatures;
