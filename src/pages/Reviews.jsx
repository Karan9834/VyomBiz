import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { BsArrowRight, BsChevronLeft, BsChevronRight } from "react-icons/bs";

const categories = [
    "All",
    "Private Limited Company",
    "Public Limited Company",
    "Limited Liability Partnership",
    "One Person Company",
    "Partnership Firm",
    "Proprietorship Firm",
];

const reviewsData = [
    {
        name: "Rozi Khan",
        tag: "Taxation Income Tax Return",
        category: "Private Limited Company",
        text: "One of the best platforms for Income Tax Return filing is Vyombiz. Their structured approach and expert guidance made the entire process seamless. They saved me valuable time and ensured error-free filing.",
    },
    {
        name: "Shubham Singh",
        tag: "Income Tax Return",
        category: "Public Limited Company",
        text: "Very satisfied with the Income Tax Return filing service. The team is knowledgeable, polite, and responsive. They answered all my queries patiently.",
    },
    {
        name: "Prakesh Ranjan Singh",
        tag: "Delhi",
        category: "Limited Liability Partnership",
        text: "Outstanding support for my Income Tax Return filing. Documentation was handled smoothly and process was transparent and stress-free.",
    },
    {
        name: "Munna Singh",
        tag: "Verified Customer",
        category: "One Person Company",
        text: "Excellent experience. Highly professional team and process was completed accurately and on time.",
    },
    {
        name: "Neha Kapoor – Healthcare Startup Founder, Gurugram",
        tag: "Verified User",
        category: "Partnership Firm",
        text: "Clear guidance on CDSCO requirements. The team was supportive and ensured smooth completion.",
    },
    {
        name: "Dr. Suresh Iyer – Cosmetic Product Manufacturer, Chennai",
        tag: "Verified User",
        category: "Proprietorship Firm",
        text: "Excellent support for cosmetic registration. Reliable and stress-free process.",
    },
];

const Reviews = () => {
    const [active, setActive] = useState("All");

    const filteredReviews =
        active === "All"
            ? reviewsData
            : reviewsData.filter((r) => r.category === active);

    return (
        <>
            {/* ===================== SECTION 1 : BANNER ===================== */}
            <section className="w-full bg-[#FFF9F1] py-16 px-6 lg:px-20">
                <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">

                    {/* LEFT CONTENT */}
                    <div className="max-w-xl">
                        <h2 className="text-4xl lg:text-5xl font-bold">
                            Vyombiz <span className="text-[#1E3A8A]">Reviews</span>
                        </h2>

                        <p className="mt-4 text-gray-700 text-lg">
                            Still in Two Minds? The Proof is in Numbers! 42800+ genuine
                            reviews with a rating of 4.9/5.
                        </p>

                        <button className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full flex items-center gap-2 font-medium transition">
                            Write a Review
                            <BsArrowRight />
                        </button>

                        {/* Platforms */}
                        <div className="flex items-center gap-8 mt-8">

                            <div className="flex items-center gap-3">
                                <FcGoogle size={28} />
                                <div>
                                    <p className="text-sm font-medium">Google Reviews</p>
                                    <div className="flex items-center gap-1 text-orange-500">
                                        <span className="text-black font-semibold text-sm">
                                            4.8
                                        </span>
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar key={i} />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div>
                                <p className="text-sm font-medium">Trustpilot</p>
                                <div className="flex gap-1 mt-1">
                                    {[...Array(5)].map((_, i) => (
                                        <div
                                            key={i}
                                            className="w-4 h-4 bg-green-500 rounded-sm"
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
                            <div>
                                <h4 className="text-2xl font-bold">100000+</h4>
                                <p className="text-gray-600 text-sm">Happy Clients</p>
                            </div>
                            <div>
                                <h4 className="text-2xl font-bold">3500+</h4>
                                <p className="text-gray-600 text-sm">Expert Advisors</p>
                            </div>
                            <div>
                                <h4 className="text-2xl font-bold">50+</h4>
                                <p className="text-gray-600 text-sm">Branch Offices</p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="mt-12 lg:mt-0 lg:w-1/2 flex justify-end">
                        <img
                            src="/images/review-banner.png"
                            alt="reviews"
                            className="max-w-lg"
                        />
                    </div>
                </div>
            </section>

            {/* ===================== SECTION 2 : REVIEWS LIST ===================== */}
            <section className="bg-white py-20 px-6 lg:px-20">

                <div className="text-center max-w-4xl mx-auto">
                    <h2 className="text-2xl lg:text-3xl font-bold text-[#1E3A8A]">
                        Your Feedback Matters- Join The 98% Of Happy Customers!
                    </h2>

                    <p className="text-sm text-gray-600 mt-4">
                        If you face any issues, contact us at{" "}
                        <span className="text-blue-600 font-medium">
                            help@Vyombiz.io
                        </span>.
                    </p>
                </div>

                {/* FILTER NAV */}
                <div className="flex items-center justify-center gap-3 mt-10 flex-wrap">
                    <BsChevronLeft className="text-orange-400 cursor-pointer" />

                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActive(cat)}
                            className={`px-5 py-2 rounded-full text-sm border transition ${active === cat
                                ? "bg-orange-400 text-white border-orange-400"
                                : "bg-white text-gray-700 border-gray-300 hover:bg-orange-50"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}

                    <BsChevronRight className="text-orange-400 cursor-pointer" />
                </div>

                {/* REVIEW CARDS */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
                    {filteredReviews.map((review, index) => (
                        <div
                            key={index}
                            className="bg-[#F3F6FF] p-8 rounded-xl shadow-sm hover:shadow-md transition"
                        >
                            <h3 className="text-lg font-bold text-center">
                                {review.name}
                            </h3>

                            <p className="text-xs text-gray-500 text-center mt-1">
                                Verified Customer - {review.tag}
                            </p>

                            <p className="text-sm text-gray-600 text-center mt-4">
                                {review.text}
                            </p>

                            <div className="flex justify-center gap-2 mt-6 text-blue-600">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* REVIEW ALL BUTTON */}
                <div className="flex justify-center mt-12">
                    <button
                        onClick={() => setActive("All")}
                        className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-medium transition duration-300 shadow-md"
                    >
                        Review All
                    </button>
                </div>

            </section>
        </>
    );
};

export default Reviews;
