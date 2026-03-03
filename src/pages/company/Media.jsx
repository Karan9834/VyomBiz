


import React from "react";
import MediaCard from "../../components/common/MediaCard";
import mediaData from "../../data/mediaData";

import PageTemplate from "../../components/common/PageTemplate";
function Media() {
  return (
    <PageTemplate title="Latest News & Events">
      {/* Your existing Media content */}
      <section
        className="w-full h-[400px] flex justify-center items-center"
        style={{
          backgroundImage:
            "url('https://VyomBiz.io/img/our-media-banner.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "left",
        }}
      >
        <div className="w-full max-w-7xl px-4 md:px-6 ml-[-200px]">
          {/* H1 */}
          <h1
            className="text-white"
            style={{
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: 800,
              fontSize: "44px",
              lineHeight: "50px",
              letterSpacing: "-0.4px",
            }}
          >
            Latest News & Events
          </h1>

          {/* Paragraph */}
          <p
            className="text-white max-w-xl"
            style={{
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "26px",
              marginTop: "26px",
              position: "relative",
            }}
          >
            We serve many customers, ranging from small businesses, medium
            entrepreneurs, to world-renowned companies.
          </p>

          {/* Orange underline */}
          <div className="w-14 h-1 bg-orange-500 mt-6"></div>
        </div>
      </section>


      {/* PDF Section Heading */}
      <section className="bg-[#e6e9edb6] py-12">
        <div className="max-w-7xl mx-20 px-[-10px] flex items-center gap-3">
          <img
            src="https://VyomBiz.io/learning/wp-content/themes/VyomBiz2022/img/pdf-icon.svg"
            alt="pdf"
            className="w-6 h-6"
          />
          <h3
            style={{
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: 300,
              fontSize: "18px",
              lineHeight: "20px",
              // fontFeatureSettings: "'salt' on, 'liga' off",
              color: "#034D82",
              marginBottom: 0,
            }}
          >
            Premium videos Available for our subscribers
          </h3>
        </div>
      </section>



      <section className="bg-[#f5f7fa] py-14">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mediaData.map((card, index) => (
              <MediaCard key={index} card={card} />
            ))}
          </div>
        </div>
      </section>




    </PageTemplate>

  );
}
export default Media;
