

import React from "react";

import PageTemplate from "../../components/common/PageTemplate";


const brandLogos = [
  "https://corpbiz.io/admin/style/images/builder/20211225023552_marg-logo.png",
  "https://corpbiz.io/admin/style/images/builder/20211225023538_justdial.jpg",
  "https://corpbiz.io/admin/style/images/builder/20211225023524_fia-global.jpg",
  "https://corpbiz.io/admin/style/images/builder/20180628020803_DHFL.jpg",
  "https://corpbiz.io/admin/style/images/builder/20180628020851_ku.jpg",
  "https://corpbiz.io/admin/style/images/builder/20180628020825_foodpanda.jpg",
  "https://corpbiz.io/admin/style/images/builder/20211225023524_fia-global.jpg",
  "https://corpbiz.io/admin/style/images/builder/20180628020904_stripe.jpg",
  "https://corpbiz.io/admin/style/images/builder/20211225023604_milton.jpg",
  "https://corpbiz.io/admin/style/images/builder/20180628020838_30fbric.jpg",
];

const Partner = () => {
  return (
     <PageTemplate title='Partner'>
    
      {/* Breadcrumb */}
      <div className="bg-[#0b4f84] py-3">
        <div className="max-w-[1400px] mx-10 font-bold px-6 text-white text-16px">
          Home / Partner with Us
        </div>
      </div>

      {/* Hero Section */}
      <section
        className="w-full min-h-[520px] flex items-center"
        style={{
          backgroundImage:
            "url('https://corpbiz.io/admin/style/images/content/20230323114210_partner-banner.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-[1400px] mx-10 px-6 grid grid-cols-1 lg:grid-cols-2 items-center">
          
          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-[48px] leading-[52px] font-extrabold text-black">
              <span className="text-[#f5a623]">Partner With Us</span>{" "}
              to Boost Your Business and Brand
            </h1>

            {/* Orange underline */}
            <div className="w-20 h-[3px] bg-[#f5a623] mt-4 mb-6"></div>

            <p className="text-[18px] leading-[26px] text-gray-700 max-w-xl">
              If you are an individual or an organization looking for an
              exemplary partnership with industry experts to set up or assist
              in your business to help it scale new heights, look no further.
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-6">
              <span className="text-yellow-400 text-lg">★</span>
              <span className="font-semibold text-gray-800">
                Rated at 4.9
              </span>
              <span className="text-gray-600">
                By 50000 + Customers Globally
              </span>
            </div>

            {/* Button */}
            <button className="mt-8 bg-[#f5a623] hover:bg-[#e0961d] text-white font-semibold px-8 py-3 rounded-md flex items-center gap-2">
              Become a Partner
              <span className="bg-white text-[#f5a623] rounded-full w-6 h-6 flex items-center justify-center">
                →
              </span>
            </button>
          </div>

          {/* RIGHT SIDE EMPTY (image is in background) */}
          <div></div>
        </div>
      </section>


{/* Benefits Section */}
<section className="bg-white py-16">
  <div className="max-w-[1600px] mx-15 px-6 grid grid-cols-1 lg:grid-cols-2 gap-96 items-start">

    {/* LEFT CONTENT */}
    <div>
      <h2 className="text-[44px] leading-[46px] font-extrabold text-[#222] mb-10">
        Benefits of Partnering <br /> with Corpbiz
      </h2>

      <ul className="space-y-5">
        {[
          "Establish Stellar Reputation",
          "Value for Money.",
          "Customised Solutions",
          "Work with Industry Experts",
          "Cut Down Additional Costs",
          "Always Stay One Step Ahead of the Competition",
          "Get Excellent Exposure",
          "Get Work Done in Minimal Cost",
        ].map((item, index) => (
          <li key={index} className="flex items-start gap-4">
            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#fce7f3] text-[#7c3aed] font-bold">
              ✓
            </span>
            <span className="text-[21px] text-[#222]">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>

    {/* RIGHT FORM */}
    <div className="bg-[#0b4f84] rounded-xl p-8 shadow-lg w-120 relative lg:sticky lg:top-24">
        
        
      <h3 className="text-white text-[22px] font-bold text-center">
        Request Information
      </h3>
      <div className="w-12 h-[2px] bg-[#f5a623] mx-auto mt-2 mb-6"></div>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Full Name*"
          className="w-full px-4 py-3 rounded-md outline-none bg-white"
        />

        <input
          type="email"
          placeholder="Email Id*"
          className="w-full px-4 py-3 rounded-md outline-none bg-white"
        />

        <div className="flex gap-2">
          <span className="flex items-center bg-white px-3 rounded-md">
            🇮🇳 +91
          </span>
          <input
            type="text"
            placeholder="Mobile Number*"
            className="flex-1 px-4 py-3 rounded-md outline-none bg-white"
          />
        </div>

        <input
          type="text"
          placeholder="Company Name*"
          className="w-full px-4 py-3 rounded-md outline-none bg-white"
        />

        <select className="w-full px-4 py-3 rounded-md outline-none text-gray-500 bg-white">
          <option>Select Occupation*</option>
        </select>

        <select className="w-full px-4 py-3 rounded-md outline-none text-gray-500 bg-white">
          <option>Select State*</option>
        </select>

        <div className="flex items-center gap-3">
          <span className="text-white text-sm">
            Are you Human? : (7) + (7) =
          </span>
          <input
            type="text"
            placeholder="Answer"
            className="flex-1 px-3 py-2 rounded-md outline-none bg-white"
          />
        </div>

        <button
          type="button"
          className="w-full bg-[#ff6a00] hover:bg-[#e65c00] text-white font-semibold py-3 rounded-md text-[16px]"
        >
          Schedule a Call
        </button>

        <p className="text-center text-[13px] text-white mt-3">
          Easy Payment Options Available No Spam. <br />
          No Sharing. <span className="text-[#f5a623]">100% Confidentiality</span>
        </p>
      </form>

      {/* WhatsApp Floating Icon */}
     
    </div>
  </div>
</section>



<section className="py-16 bg-white text-center overflow-hidden">
      {/* Heading */}
      <h2 className="text-3xl font-bold mb-18">
        1 Lakh+ Global Brands That Trust Us!
      </h2>

      {/* Marquee Logos */}
      <div className="overflow-hidden relative">
        <div className="flex animate-marquee space-x-12">
          {brandLogos.map((logo, index) => (
            <div key={index} className="shrink-0">
              <img src={logo} alt={`Brand ${index + 1}`} className="h-16 object-contain" />
            </div>
          ))}
          {/* Duplicate for seamless scroll */}
          {brandLogos.map((logo, index) => (
            <div key={index + brandLogos.length} className="shrink-0">
              <img src={logo} alt={`Brand ${index + 1}`} className="h-16 object-contain" />
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind CSS animation */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>




{/* Why Choose VyomBiz */}
{/* Why Choose VyomBiz */}
<section className="bg-[#f9fafb] py-20">
  <div className="max-w-[1600px] mx-10 px-6 grid grid-cols-1 lg:grid-cols-2 gap-26 items-center">

    {/* LEFT CONTENT */}
    <div>
      <h2 className="text-[42px] leading-[48px] font-extrabold text-[#222] mb-12">
        Why Choose <span className="text-[#f5a623]">VyomBiz</span>?
      </h2>

      <div className="space-y-8">

        {[
          "We have a strong team of developers, each having experience with cutting edge technology.",
          "We deliver smart development solutions at the lowest possible price.",
          "Our team members are punctual & that has enabled us to complete tasks before deadline.",
          "We provide 24/7 support to our potential customers.",
          "We are a Company having a set of customized Project Management System.",
        ].map((desc, index) => (
          <div key={index} className="flex gap-5 items-start">

            {/* ICON */}
            <img
              src="https://corpbiz.io/admin/style/images/userfiles/image/market-icon1.png"
              alt="icon"
              className="w-12 h-12 flex-shrink-0"
            />

            {/* DESCRIPTION */}
            <p className="text-[17px] text-black font-medium leading-relaxed">
              {desc}
            </p>
          </div>
        ))}

      </div>
    </div>

    {/* RIGHT IMAGE */}
    <div className="flex justify-center lg:justify-end">
      <img
        src="https://corpbiz.io/admin/style/images/userfiles/image/choose-us-icon.png"
        alt="Why Choose VyomBiz"
        className="max-w-[420px] w-full"
      />
    </div>

  </div>
</section>




{/* Growing Partner Banner */}
<section
  className="w-300 h-80 bg-cover bg-center mx-40 rounded-t-2xl bg-no-repeat"
  style={{
    backgroundImage:
      "url('https://corpbiz.io/img/growing-partner-banner.png')",
  }}
>
  <div className="max-w-[1400px] mx-20 px-6 py-20">
    <div className="max-w-[600px]">

      {/* Heading */}
      <h1 className="text-white text-[32px] leading-[52px] font-extrabold mb-4">
        Become a member of this growing <br />
        business
      </h1>

      {/* Button */}
      <button className="bg-[#f5a623] hover:bg-[#e39a14] text-white font-semibold px-10 py-4 rounded-md transition-all duration-300">
        Become Partner
      </button>

    </div>
  </div>
</section>


{/* Our Media Coverage */}
<section className="bg-white py-20">
  <div className="max-w-[1600px] mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-14">
      <h2 className="text-[42px] font-extrabold text-[#111]">
        Our Media Coverage
      </h2>
      <div className="w-16 h-[3px] bg-[#f5a623] mx-auto mt-4"></div>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* Card 1 */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border">
        <div
          className="relative h-[230px] bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCj8KV0JlduE7lk5mtXdnvOF37jWea5djidQ&s')",
          }}
        >
          {/* Label */}
          <div className="absolute top-0 left-50 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded">
            News Nation
          </div>

          {/* Date */}
          <div className="absolute bottom-3 right-3 bg-[#5b5bff] text-white text-center px-3 py-2 rounded-md text-sm font-semibold">
            21 <br /> Feb
          </div>
        </div>

        <div className="p-6">
          <p className="text-[#f5a623] text-sm mb-2">
            Climate Tech Sector in India
          </p>

          <h3 className="font-bold text-[20px] text-[#111] mb-3">
            $350 Bn Projected For Climate Tech Sector In India And Southeast Asia
            By 2030
          </h3>

          <p className="text-gray-600 text-[18px] mb-4">
            There are immense possibilities for the climate tech sector in India
            and Southeast Asia. Sustainable use of technology is crucial.
          </p>

          <span className="text-blue-600 font-semibold text-sm cursor-pointer">
            Read More
          </span>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border">
        <div
          className="relative h-[230px] bg-cover bg-center"
          style={{
            backgroundImage:
              "url('data:image/jpeg;base64,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')",
          }}
        >
          <div className="absolute top-0 left-50 bg-white text-black text-xs font-bold px-3 py-1 rounded border">
            Mid Day
          </div>

          <div className="absolute bottom-3 right-3 bg-[#5b5bff] text-white text-center px-3 py-2 rounded-md text-sm font-semibold">
            16 <br /> Feb
          </div>
        </div>

        <div className="p-6">
          <p className="text-[#f5a623] text-sm mb-2">
            Startup Revolution
          </p>

          <h3 className="font-bold text-[20px] text-[#111] mb-3">
            Startup Revolution To Weave 5–10% Surge In India’s GDP By 2030
          </h3>

          <p className="text-gray-600 text-[18px] mb-4">
            Amid the flourishing startup ecosystem, India’s GDP is anticipated
            to witness a rise of 5–10% by 2030.
          </p>

          <span className="text-blue-600 font-semibold text-sm cursor-pointer">
            Read More
          </span>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border">
        <div
          className="relative h-[230px] bg-cover bg-center"
          style={{
            backgroundImage:
              "url('data:image/jpeg;base64,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')",
          }}
        >
          <div className="absolute top-0 left-50 bg-white text-black text-xs font-bold px-3 py-1 rounded border">
            Forbes
          </div>

          <div className="absolute bottom-3 right-3 bg-[#5b5bff] text-white text-center px-3 py-2 rounded-md text-sm font-semibold">
            01 <br /> Feb
          </div>
        </div>

        <div className="p-6">
          <p className="text-[#f5a623] text-sm mb-2">
            Investing In The Indian Market
          </p>

          <h3 className="font-bold text-[20px] text-[#111] mb-3">
            Prospects for International Manufacturers: Investing In The Indian
            Market
          </h3>

          <p className="text-gray-600 text-[18px] mb-4">
            India is experiencing substantial growth in its manufacturing
            sector, mirroring increased economic liberalization efforts.
          </p>

          <span className="text-blue-600 font-semibold text-sm cursor-pointer">
            Read More
          </span>
        </div>
      </div>

    </div>
  </div>
</section>

    </PageTemplate>
  );
};

export default Partner;