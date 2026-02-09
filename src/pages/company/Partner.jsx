

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
      <h2 className="text-[48px] leading-[46px] font-extrabold text-[#222] mb-10">
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
  className="w-300 h-80 bg-cover bg-center mx-65 rounded-t-2xl bg-no-repeat"
  style={{
    backgroundImage:
      "url('https://corpbiz.io/img/growing-partner-banner.png')",
  }}
>
  <div className="max-w-[1400px] mx-10 px-6 py-20">
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
              "url('https://corpbiz.io/admin/style/images/news/20240222022937_Projected%20For%20Climate%20Tech%20Sector%20In%20India%20And%20Southeast%20Asia%20By%202030.png')",
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
              "url('https://corpbiz.io/admin/style/images/news/20240222031222_Projected%20For%20Climate%20Tech%20Sector%20In%20India%20And%20Southeast%20Asia%20By-2030.png')",
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
              "url('https://corpbiz.io/admin/style/images/news/20240201105607_Investing-In-The-Indian-Market-Unlocking-Prospects-For-International-Manufacturers.png')",
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