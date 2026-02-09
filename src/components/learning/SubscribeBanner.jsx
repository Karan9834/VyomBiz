import React from "react";

export default function SubscribeBanner() {
  return (
    <div className="w-full bg-[rgb(11,79,124)] py-20 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT CONTENT */}
        <div className="text-white">
          <h2 className="text-4xl font-bold leading-snug">
            Bring back the joy of <br />
            reading newsletters & blogs
          </h2>

          <p className="text-yellow-400 text-lg font-semibold mt-4">
            Subscribe and be ready for an amazing experience
          </p>

          {/* POINTS */}
          <ul className="mt-6 space-y-4">
            <li className="flex items-start gap-3 text-base">
              <span className="text-white">✔</span>
              <span>Subscribe and be ready for an amazing experience</span>
            </li>
            <li className="flex items-start gap-3 text-base">
              <span className="text-white">✔</span>
              <span>Organize your newsletter feed according to your interests.</span>
            </li>
            <li className="flex items-start gap-3 text-base">
              <span className="text-white">✔</span>
              <span>Forget about newsletters emails and focus only in reading.</span>
            </li>
          </ul>

          {/* BUTTON */}
          <button className="mt-8 bg-[#f5ad3a] hover:bg-[#e39a28] text-white font-semibold px-10 py-4 rounded-full transition">
            Subscribe
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end">
          <img
            src="https://corpbiz.io/img/blog-slides.png"
            alt="Newsletter Illustration"
            className="max-w-md w-full"
          />
        </div>
      </div>
    </div>
  );
}
