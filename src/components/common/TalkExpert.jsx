import React from "react";
import {
    Phone,
    MessageCircle,
    ClipboardList,
    Users,
    MonitorCheck
} from "lucide-react";

const TalkExpert = () => {
    return (
        <section className="w-full bg-white py-10 px-6 lg:px-16">

            {/* ================= TITLE ================= */}
            <h2 className="text-2xl font-semibold mb-8 border-l-4 border-yellow-500 pl-3">
                Talk to an Expert
            </h2>

            <div className="flex flex-col lg:flex-row justify-between items-start gap-12">

                {/* ================= LEFT EXPERT CARD ================= */}
                <div className="bg-[#0B4C7C] rounded-xl p-6 w-full lg:w-[480px] text-white shadow-lg">
                    <div className="flex items-center gap-4 mb-4">
                        <img
                            src="/expert.png"
                            alt="Expert"
                            className="w-16 h-16 rounded-full object-cover border-2 border-white"
                        />

                        <div>
                            <h3 className="text-lg font-semibold">
                                Expertise in NGO CSR-1 Filing
                            </h3>

                            <div className="flex items-center gap-1 mt-1">
                                ⭐ ⭐ ⭐ ⭐ ⭐
                                <span className="ml-2 text-sm">(4.8)</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4 mt-6">
                        <button className="flex items-center justify-center gap-2 bg-white text-[#0B4C7C] font-medium px-6 py-3 rounded-md w-full transition hover:scale-105">
                            <Phone size={18} />
                            Call Now
                        </button>

                        <button className="flex items-center justify-center gap-2 bg-green-500 text-white font-medium px-6 py-3 rounded-md w-full transition hover:scale-105">
                            <MessageCircle size={18} />
                            Chat With Us
                        </button>
                    </div>
                </div>

                {/* ================= RIGHT PROCESS ================= */}
                <div className="flex-1 flex items-center justify-between relative">

                    {/* STEP 1 */}
                    <div className="flex flex-col items-center text-center max-w-[220px] relative">
                        <div className="bg-white shadow-md rounded-lg p-4 relative">
                            <ClipboardList className="text-[#0B4C7C]" size={30} />
                            <div className="absolute -top-3 -right-3 bg-[#0B4C7C] text-white text-xs w-6 h-6 flex items-center justify-center rounded-full">
                                01
                            </div>
                        </div>

                        <h4 className="mt-4 text-[#0B4C7C] font-semibold text-lg">
                            Enquiry Form
                        </h4>
                        <p className="text-gray-500 text-sm mt-2">
                            Among Asia Top 100 Consulting Firm
                        </p>
                    </div>

                    {/* CURVED ARROW 1 */}
                    <svg
                        className="hidden lg:block"
                        width="120"
                        height="60"
                        viewBox="0 0 120 60"
                        fill="none"
                    >
                        <path
                            d="M5 50 Q60 5 115 30"
                            stroke="#0B4C7C"
                            strokeWidth="2"
                            strokeDasharray="5,5"
                            fill="transparent"
                        />
                        <polygon
                            points="110,25 120,30 110,35"
                            fill="#0B4C7C"
                        />
                    </svg>

                    {/* STEP 2 */}
                    <div className="flex flex-col items-center text-center max-w-[220px] relative">
                        <div className="bg-white shadow-md rounded-lg p-4 relative">
                            <Users className="text-[#0B4C7C]" size={30} />
                            <div className="absolute -top-3 -right-3 bg-[#0B4C7C] text-white text-xs w-6 h-6 flex items-center justify-center rounded-full">
                                02
                            </div>
                        </div>

                        <h4 className="mt-4 text-[#0B4C7C] font-semibold text-lg">
                            Get Consultation
                        </h4>
                        <p className="text-gray-500 text-sm mt-2">
                            Lowest Fees <br /> 100,000+ Clients.
                        </p>
                    </div>

                    {/* CURVED ARROW 2 */}
                    <svg
                        className="hidden lg:block"
                        width="120"
                        height="60"
                        viewBox="0 0 120 60"
                        fill="none"
                    >
                        <path
                            d="M5 30 Q60 55 115 10"
                            stroke="#0B4C7C"
                            strokeWidth="2"
                            strokeDasharray="5,5"
                            fill="transparent"
                        />
                        <polygon
                            points="110,5 120,10 110,15"
                            fill="#0B4C7C"
                        />
                    </svg>

                    {/* STEP 3 */}
                    <div className="flex flex-col items-center text-center max-w-[220px] relative">
                        <div className="bg-white shadow-md rounded-lg p-4 relative">
                            <MonitorCheck className="text-[#0B4C7C]" size={30} />
                            <div className="absolute -top-3 -right-3 bg-[#0B4C7C] text-white text-xs w-6 h-6 flex items-center justify-center rounded-full">
                                03
                            </div>
                        </div>

                        <h4 className="mt-4 text-[#0B4C7C] font-semibold text-lg">
                            Service Delivery
                        </h4>
                        <p className="text-gray-500 text-sm mt-2">
                            4.9 Customer Rating <br /> 50+ Offices
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default TalkExpert;
