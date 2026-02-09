import React from "react";

const PdfCards = ({ card, showLogo = false }) => {
  return (
    <div className="bg-white rounded-md overflow-hidden shadow-sm border flex flex-col">
      {/* Image */}
      <div className="relative">
        {card.image ? (
          <img
            src={card.image}
            alt="pdf"
            className="w-full h-[250px] object-cover border-[3px] border-orange-500"
          />
        ) : (
          <div className="w-full h-[250px] bg-gray-200 border-[3px] border-orange-500" />
        )}

        
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Date */}
        <h3
          style={{
            fontFamily: "Inter",
            fontWeight: 600,
            fontSize: "16px",
            lineHeight: "20px",
            color: "#034D82",
            marginBottom: "8px",
          }}
        >
          {card.date}
        </h3>

        {/* Title */}
        <h3 className="font-semibold text-[18px] leading-snug mb-3">
          {card.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-6">
          {card.desc}
          <span className="text-blue-600 cursor-pointer"> Read More</span>
        </p>

        {/* Button fixed at bottom */}
        <div className="mt-auto">
          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-md flex items-center justify-center gap-2">
            Download
            <span className="text-xs border border-white px-1 rounded">
              PDF
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PdfCards;