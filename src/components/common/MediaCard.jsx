import React from "react";
import { MoreVertical, Play } from "lucide-react";

const MediaCard = ({ card }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition max-w-[1400px]">
      {/* Thumbnail */}
      <div className="relative">
        <img
          src={card.image}
          alt={card.title}
          className="w-full h-[230px] object-cover"
        />

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center">
            <Play className="text-white ml-1" fill="white" />
          </div>
        </div>

        {/* Channel icon */}
        <div className="absolute top-3 left-3 w-8 h-8 bg-orange-600 text-white flex items-center justify-center rounded-full font-bold">
          C
        </div>

        {/* More icon */}
        <div className="absolute top-3 right-3 bg-black/40 p-1 rounded-full">
          <MoreVertical className="text-white" size={18} />
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <span className="inline-block bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded mb-3">
          Latest
        </span>

        <h3 className="font-semibold text-[16px] leading-snug mb-2">
          {card.title}
        </h3>

        <p className="text-gray-600 text-sm mb-4">
          {card.shortDesc}
        </p>

        <div className="flex justify-between text-sm text-gray-500 border-t pt-3">
          <span>
            Published By -{" "}
            <span className="text-blue-600 font-medium">
              VyomBiz
            </span>
          </span>
          <span>{card.date}</span>
        </div>
      </div>
    </div>
  );
};

export default MediaCard;