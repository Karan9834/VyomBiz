import React from 'react';
import PageTemplate from '../../components/common/PageTemplate';
import AppDownload from "../../components/learning/AppDownload";
import BlogCenterSection from "../../components/learning/BlogCenterSection";
import BlogLeftSection from "../../components/learning/BlogLeftSection";
import BlogRightSection from "../../components/learning/BlogRightSection";
import SubscribeBanner from "../../components/learning/SubscribeBanner";

const Learning = () => {
  return (
  <PageTemplate title='Learning'>



    <div className="w-full bg-white">
      {/* ================= TOP HEADER ================= */}
      <div className="bg-[#0b4f7c] py-10 h-60">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">

          {/* LEFT TITLE */}
          <div>
            <h1 className="text-white text-[42px] font-extrabold flex items-center gap-3">
              📘 Blogs & Articles
            </h1>

            <div className="w-24 h-[3px] bg-[#f4a62a] mt-3 rounded"></div>

            <p className="text-white mt-5 text-xl font-semibold">
              Learning
            </p>
          </div>

          {/* RIGHT SEARCH */}
          
          <div className="pr-10 w-[520px]">
      <p className="text-white mb-2 text-2xl font-semibold">
        Search
      </p>

      <div className="flex items-center bg-white rounded-md shadow-md overflow-hidden w-132">
        {/* <input
          type="text"
          placeholder="Search your related blogs.."
          className="px-5 py-4 w-full outline-none text-[16px] text-gray-700"
        /> */}
<div className="relative w-full">
  {/* Search Icon */}
  <img
    src="https://corpbiz.io/img/search-blog.png"
    alt="search"
    className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5"
  />

  {/* Pipe */}
  <span className="absolute left-12 top-1/2 -translate-y-1/2 text-gray-400">
    |
  </span>

  {/* Input */}
  <input
    type="text"
    placeholder="Search your related blogs.."
    className="w-full py-4 pl-16 pr-5 outline-none text-[16px] text-gray-700 rounded-md"
  />
</div>
        <button className="bg-[#f4a62a] px-4 mr-2 py-2 text-white text-lg font-bold">
          🔍
        </button>
      </div>
    </div>

        </div>
      </div>

      {/* ================= BELOW SECTION ================= */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-12 gap-10">

          {/* LEFT */}
          <div className="col-span-12 lg:col-span-3">
            <BlogLeftSection />
          </div>

          {/* CENTER */}
          <div className="col-span-12 lg:col-span-6">
            <BlogCenterSection />
          </div>

          {/* RIGHT */}
          <div className="col-span-12 lg:col-span-3">
            <BlogRightSection />
          </div>

        </div>
      </div>



        {/* ================= APP DOWNLOAD ================= */}
        <AppDownload />

        {/* ================= SUBSCRIBE BANNER ================= */}
        <SubscribeBanner />
    </div>
  

    </PageTemplate>
  )
};

export default Learning;
