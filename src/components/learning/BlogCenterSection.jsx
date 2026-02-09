import React from "react";

const featuredBlogs = [
  {
    category: "Trademark",
    title:
      "Difference Between Trademark and Registered Trademark: Legal Protection, Benefits, and Practical Guide (2026)",
    date: "Feb 06, 2026 | timeReading Time: 6 Minutes",
    image:
      "data:image/jpeg;base64,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",
    description:
      "Understand the key differences between trademark and registered trademark, including legal protection, benefits, and practical implications in 2026.",
  },
  {
    category: "Legal Metrology",
    title:
      "Legal Metrology (General) Amendment Rules, 2026: Complete Guide",
    date: "Feb 05, 2026 | timeReading Time: 5 Minutes",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMtXUiBoK52GKFMhDtHfk28umWro3CpzxFTg&s",
    description:
      "A complete overview of the Legal Metrology (General) Amendment Rules, 2026 and their impact on businesses and compliance.",
  },

 {
    category: "CDSCO",
    title: "CDSCO Releases Risk Classification List for Oncology Medical Devices",
    date: "Feb 04, 2026 | timeReading Time: 5 Minutes",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMtXUiBoK52GKFMhDtHfk28umWro3CpzxFTg&s",
    description: "The Central Drugs Standard Control Organization (CDSCO) is India's principal regulatory body. This organization mon..."
 },
 {
    category: "Finance & Accounting",
    title: "Union Budget 2026: Key Tax Changes, Schemes, and Fund Allocations Explained",
    date: "Feb 03, 2026 | timeReading Time: 7 Minutes",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMtXUiBoK52GKFMhDtHfk28umWro3CpzxFTg&s",
    description: "Finance Minister Nirmala Sitharaman announced the Union Budget FY2026-27 on February 1, 2026. The government has gi...",
 },
 {
    category: "CDSCO",
    title: "Penalties for Selling Products without CDSCO Approval in India: Legal Risks, Fines, and Compliance Guide",
    date: "dateFeb 02, 2026 | timeReading Time: 13 Minutes",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMtXUiBoK52GKFMhDtHfk28umWro3CpzxFTg&s",
    description: "The lack of proper CDSCO compliance for medical products in India can result in severe repercussions. This blog wil..."
 },
 {
    category: "FSSAI License",
    title: "FSSAI Introduced a Scientific Format for Food Safety Risk Assessments from 2026",
    date: "dateFeb 02, 2026 | timeReading Time: 5 Minutes",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMtXUiBoK52GKFMhDtHfk28umWro3CpzxFTg&s",
    description: "Food Safety and Standards Authority of India (FSSAI) is India's primary food safety regulatory body. Its main funct..."
 },
 {
    category: "Income Tax",
    title: "Union Budget 2026 for Real Estate: Policy Expectations Across Housing, Tax, and Infrastructure",
    date: "dateJan 31, 2026 | timeReading Time: 5 Minutes",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMtXUiBoK52GKFMhDtHfk28umWro3CpzxFTg&s",
    description: "The Union Budget 2026 has a major effect on the real estate market. Currently, it contributes 8% to the national GD..."
 },
 {
    category: "Spices board registration",
    title: "How to Apply for Spice Board Registration in India in 2026?",
    date: "dateJan 29, 2026 | timeReading Time: 7 Minutes",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMtXUiBoK52GKFMhDtHfk28umWro3CpzxFTg&s",
    description: "India has been one of the world's largest spice producers for many years. Indian black pepper, cardamom, chili pepp..."
 },
 {
    category: "Trademark",
    title: "Logo vs Wordmark Confusion: Which Trademark Should You Register?",
    date: "dateJan 28, 2026 | timeReading Time: 4 Minutes",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMtXUiBoK52GKFMhDtHfk28umWro3CpzxFTg&s",
    description: "New startups, D2C brands, and online businesses are starting up in India every day. A name can become known very qu..."
 },
 {
    category: "Taxation",
    title: "Union Budget 2026 EV Expectations: What is the Electric Vehicle Industry Looking for?",
    date: "dateJan 23, 2026 | timeReading Time: 6 Minutes",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMtXUiBoK52GKFMhDtHfk28umWro3CpzxFTg&s",
    description: "The Union Finance Minister Nirmala Sitharaman will present the Union Budget 2026-27 on Sunday, February 1, 2026. Th..."
 },
 {
    category: "Labour Laws",
    title: "India’s New Labour Codes 2025: Transforming India’s Labour Landscape in 2026",
    date: "dateJan 23, 2026 | timeReading Time: 16 Minutes",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMtXUiBoK52GKFMhDtHfk28umWro3CpzxFTg&s",
    description: "The new Labour codes in India were introduced in November 2025. The law framework consolidates 29 former laws into..."
 },
 {
    category: "Coffee Board License",
    title: "Coffee Board Launches INDICOFS Certification to Promote Sustainable Coffee in India",
    date: "dateJan 22, 2026 | timeReading Time: 6 Minutes",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMtXUiBoK52GKFMhDtHfk28umWro3CpzxFTg&s",
    description: "The sustainable farming practices in India's coffee industry are growing. The Coffee Board of India has launched th..."
 },
];

export default function BlogCenterSection() {
  return (
    <div className="w-160">
      {/* HEADING */}
      <h2 className="text-xl font-semibold mb-6">
        Featured This Month
      </h2>

      {/* BLOG LIST */}
      <div className="space-y-10">
        {featuredBlogs.map((blog, index) => (
          <div key={index} className="border-b pb-8">
            {/* IMAGE */}
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-[320px] object-cover rounded-lg"
            />

            {/* CONTENT */}
            <div className="mt-4">
              {/* CATEGORY */}
              <span className="text-sm bg-blue-600 text-white font-medium p-2 rounded-xl">
                {blog.category}
              </span>

              {/* TITLE */}
              <h3 className="text-[24px] font-semibold mt-2 leading-snug  cursor-pointer">
                {blog.title}
              </h3>

              {/* DATE */}
              <p className="text-sm text-gray-500 mt-1">
                {blog.date}
              </p>

              {/* DESCRIPTION */}
              <p className="text-sm text-gray-700 mt-3 leading-relaxed">
                {blog.description}
              </p>

              {/* READ MORE */}
              <button className="mt-4 inline-block text-blue-600 font-medium hover:underline">
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>


{/* PAGINATION */}
<div className="flex items-center justify-center gap-2 mt-12">
  {/* PAGE 1 – ACTIVE */}
  <button className="px-4 py-2 border rounded-md bg-blue-600 text-white font-semibold">
    1
  </button>

  {/* OTHER PAGES */}
  <button className="px-4 py-2 border rounded-md hover:bg-gray-100">
    2
  </button>

  <button className="px-4 py-2 border rounded-md hover:bg-gray-100">
    3
  </button>

  {/* DOTS */}
  <span className="px-2 text-gray-500">...</span>

  {/* LAST PAGE */}
  <button className="px-4 py-2 border rounded-md hover:bg-gray-100">
    322
  </button>

  {/* NEXT BUTTON */}
  <button className="px-4 py-2 border rounded-md hover:bg-blue-600 hover:text-white">
    Next →
  </button>
</div>



    </div>
  );
}
