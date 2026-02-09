import React from "react";

const categories = [
  "AD Code Registration",
  "AERB Approval",
  "APEDA",
  "Barcode",
  "BEE Registration",
  "BIS Certification",
  "BIS CRS Registration",
  "BIS ISI Mark",
  "CDSCO Registration",
  "CE Certification",
  "Company Registration",
  "Copyright Registration",
  "Drug License",
  "EPR Registration",
  "FSSAI Registration",
  "GST Registration",
  "IEC Registration",
  "ISO Certification",
];

const tags = [
  "GST Registration",
  "Trademark Registration",
  "Environmental Clearance",
  "Company Registration",
  "FSSAI License",
  "BIS Certification",
  "Marriage Registration",
  "FSSAI Registration",
  "Companies Act 2013",
  "Succession Certificate",
  "Caveat Petition",
  "Will Registration",
  "ITR Filing",
  "Lease Agreement",
  "Power Of Attorney",
  "NBFC Registration",
  "Copyright",
  "Income Tax",
  "Startup India",
  "MSME Registration",
];

export default function BlogLeftSection() {
  return (
    <div className="w-100 space-y-8 mx-[-150px]">
      {/* ================= CATEGORIES ================= */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Categories</h3>

        <div className="border rounded-md h-96 overflow-y-auto">
          {categories.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between px-4 py-3 border-b text-sm hover:bg-gray-50 cursor-pointer"
            >
              <span className="flex items-center gap-2">
                <span className="text-red-500 font-bold text-24">+</span>
                {item}
              </span>
              <span className="text-gray-500">›</span>
            </div>
          ))}
        </div>
      </div>

      {/* ================= SEARCH WITH TAGS ================= */}
      <div>
        <h3 className="text-lg font-semibold mb-3">
          <span className="bg-green-600 text-white px-2 py-1 rounded text-sm mr-2">
            Search
          </span>
          With Tags
        </h3>

        <div className="flex flex-wrap gap-3">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="px-4 py-2 border rounded-md text-sm text-gray-700 hover:bg-blue-50 hover:border-blue-400 cursor-pointer"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
