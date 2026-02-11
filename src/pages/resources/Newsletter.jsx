

import React from "react";
import PageTemplate from "../../components/common/PageTemplate";
import pdfCards from "../../data/newsletterData.js";
import PdfCards from "../../components/common/PdfCards";

const Newsletter = () => {
  return (
    <PageTemplate title="Newsletter">
      {/* 🔥 YOUR FULL UI GOES HERE */}

      <section
        className="w-full h-[400px] flex justify-center items-center"
        style={{
          backgroundImage:
            "url('https://VyomBiz.io/learning/wp-content/themes/VyomBiz2022/img/our-newsletter-banner.jpg')",
          backgroundSize: "cover",
        }}
      >
        <div className="w-full max-w-7xl px-6 ml-[-200px]">
          <h1 className="text-white text-[44px] font-extrabold">
            Newsletter
          </h1>
          <p className="text-white mt-6 max-w-xl">
            We serve many customers, ranging from small businesses to
            world-renowned companies.
          </p>
          <div className="w-14 h-1 bg-orange-500 mt-6"></div>
        </div>
      </section>

      <section className="bg-[#f5f7fa] py-10">
        <div className="max-w-[1600px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pdfCards.map((card, index) => (
            <PdfCards key={index} card={card} />
          ))}
        </div>
      </section>

    </PageTemplate>
  );
};

export default Newsletter;