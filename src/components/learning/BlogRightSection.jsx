import React from "react";

const trendingBlogs = [
  {
    category: "Trademark",
    title:
      "Difference Between Trademark and Registe...",
    date: "Feb 06, 2026",
    image: "https://corpbiz.io/learning/wp-content/uploads/2026/02/Difference-Between-Trademark-and-Registered-Trademark-Legal-Protection-Benefits-and-Practical-Guide-2026-2.webp",
    badgeColor: "bg-yellow-400",
  },
  {
    category: "Legal Metrology",
    title:
      "Legal Metrology (General) Amendment Rule...",
    date: "Feb 05, 2026",
    image: "https://corpbiz.io/learning/wp-content/uploads/2026/02/Legal-Metrology-General-Amendment-Rules-2026-Complete-Guide-to-Testing-of-Blood-Pressure-Devices.webp",
    badgeColor: "bg-yellow-400",
  },
  {
    category: "CDSCO",
    title:
      "CDSCO Releases Risk Classification List...",
    date: "Feb 04, 2026",
    image: "https://corpbiz.io/learning/wp-content/uploads/2026/02/CDSCO-Releases-Risk-Classification-List-for-Oncology-Medical-Devices.webp",
    badgeColor: "bg-yellow-400",
  },
   {
    category: "Finance & Accounting",
    title:
      "Union Budget 2026: Key Tax Changes, Sche...",
    date: "Feb 02, 2026",
    image: "https://corpbiz.io/learning/wp-content/uploads/2026/02/Union-Budget-2026-Key-Tax-Changes-Schemes-and-Fund-Allocations-Explained-1.jpg",
    badgeColor: "bg-green-600",
  },
   {
    category: "CDSCO",
    title:
      "Penalties for Selling Products without C...",
    date: "Feb 02, 2026",
    image: "https://corpbiz.io/learning/wp-content/uploads/2026/02/Penalties-for-Selling-Products-without-CDSCO-Approval-in-India-Legal-Risks-Fines-and-Compliance-Guide-1.webp",
    badgeColor: "bg-yellow-400",
  },
   {
    category: "FSSAI License",
    title:
      "FSSAI Introduced a Scientific Format for...",
    date: "Feb 02, 2026",
    image: "https://corpbiz.io/learning/wp-content/uploads/2026/02/FSSAI-Introduced-a-Scientific-Format-for-Food-Safety-Risk-Assessments-from-2026-1.webp",
    badgeColor: "bg-yellow-400",
  },
   {
    category: "Income Tax",
    title:
      "Union Budget 2026 for Real Estate: Polic...",
    date: "Feb 02, 2026",
    image: "https://corpbiz.io/learning/wp-content/uploads/2026/01/Union-Budget-2026-for-Real-Estate-Policy-Expectations-Across-Housing-Tax-and-Infrastructure.jpg",
    badgeColor: "bg-yellow-400",
  },
   {
    category: "Spices board registration",
    title:
      "How to Apply for Spice Board Registratio...",
    date: "Feb 02, 2026",
    image: "https://corpbiz.io/learning/wp-content/uploads/2026/01/How-to-Apply-for-Spice-Board-Registration-in-India-in-2026-1.webp",
    badgeColor: "bg-yellow-400",
  },
   {
    category: "Trademark",
    title:
      "Logo vs Wordmark Confusion: Which Tradem...",
    date: "Feb 02, 2026",
    image: "https://corpbiz.io/learning/wp-content/uploads/2026/01/Logo-vs-Wordmark-Confusion-Which-Trademark-Should-You-Register.webp",
    badgeColor: "bg-yellow-400",
  },
   {
    category: "Taxation",
    title:
      "Union Budget 2026 EV Expectations: What...",
    date: "Feb 02, 2026",
    image: "https://corpbiz.io/learning/wp-content/uploads/2026/01/Union-Budget-2026-EV-Expectations-What-is-the-Electric-Vehicle-Industry-Looking-for.webp",
    badgeColor: "bg-yellow-400",
  },
];

export default function BlogRightSection() {
  return (
    <div className="w-90 space-y-10 mx-20">
    <div>
      <h3 className="text-lg font-semibold mb-4">Top Trending</h3>

      <div className="space-y-5">
        {trendingBlogs.map((blog, index) => (
          <div key={index} className="flex gap-4">
            {/* IMAGE */}
            <img
              src={blog.image}
              alt={blog.category}
              className="w-20 h-20 object-cover rounded-md"
            />

            {/* CONTENT */}
            <div>
              <span
                className={`${blog.badgeColor} text-white text-xs px-2 py-1 rounded`}
              >
                {blog.category}
              </span>

              <p className="text-sm font-semibold text-gray-800 mt-2 leading-snug hover:text-blue-600 cursor-pointer">
                {blog.title}
              </p>

              <p className="text-xs text-gray-500 mt-1">
                {blog.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>

 {/* TODAY'S UPDATE */}
      <div>
        <h3 className="text-[24px] font-semibold mb-4 flex"><h3 className="bg-orange-500 text-white"> Today’s </h3>  Update</h3>

        <div className="grid grid-cols-2 gap-4">
          {/* CARD 1 */}
          <div className="bg-blue-500 text-white rounded-lg p-5 text-center">
            <h2 className="text-2xl font-bold">1</h2>
            <p className="text-sm mt-1">New Posts</p>
          </div>

          {/* CARD 2 */}
          <div className="bg-red-500 text-white rounded-lg p-5 text-center">
            <h2 className="text-2xl font-bold">1</h2>
            <p className="text-sm mt-1">Today Views</p>
          </div>

          {/* CARD 3 */}
          <div className="bg-green-500 text-white rounded-lg p-5 text-center">
            <h2 className="text-2xl font-bold">4.50K+</h2>
            <p className="text-sm mt-1">Total Posts</p>
          </div>

          {/* CARD 4 */}
          <div className="bg-yellow-400 text-white rounded-lg p-5 text-center">
            <h2 className="text-2xl font-bold">3.36M+</h2>
            <p className="text-sm mt-1">Total Views</p>
          </div>
        </div>
      </div>

</div>
  );
}
