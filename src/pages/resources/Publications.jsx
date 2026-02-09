

import React from "react";
import PdfCards from "../../components/common/PdfCards";
import publicationsData from "../../data/publicationsData";
import PageTemplate from "../../components/common/PageTemplate";



const Publications = () => {
  return (
    <PageTemplate title="Publications">
      {/* Banner */}
      <section className="w-full h-[400px] flex justify-center items-center" style={{
        backgroundImage:
          "url('https://corpbiz.io/learning/wp-content/themes/corpbiz2022/img/our-newsletter-banner.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "left",
      }}>
        <div className="w-full max-w-7xl px-4 md:px-6 ml-[-200px]">
          <h1 className="text-white" style={{ fontFamily: "Inter", fontWeight: 800, fontSize: "44px", lineHeight: "50px", letterSpacing: "-0.4px" }}>
            Publications
          </h1>
          <p className="text-white max-w-xl" style={{ fontFamily: "Inter", fontWeight: 400, fontSize: "18px", lineHeight: "26px", marginTop: "26px" }}>
            <span className="text-orange-300">Learning</span> / Publications
          </p>
          <div className="w-14 h-1 bg-orange-500 mt-6"></div>
        </div>
      </section>

      {/* PDF Section Heading */}
      <section className="bg-[#e6e9edb6] py-12">
        <div className="max-w-7xl mx-20 px-[-10px] flex items-center gap-3">
          <img
            src="https://corpbiz.io/learning/wp-content/themes/corpbiz2022/img/pdf-icon.svg"
            alt="pdf"
            className="w-6 h-6"
          />
          <h3 style={{ fontFamily: "Inter", fontWeight: 300, fontSize: "18px", color: "#034D82", marginBottom: 0 }}>
            PDF Files Available for our Publications
          </h3>
        </div>
      </section>

      {/* Cards */}
      <section className="bg-[#f5f7fa] py-12">
        <div className="max-w-[1600px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {publicationsData.map((card, index) => (
            <PdfCards key={index} card={card} />
          ))}
        </div>
      </section>
    </PageTemplate>
  );
};

export default Publications;