import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const MegaMenu = ({ data, activeSub, setActiveSub, onItemClick, categoryPath }) => {
    if (!data) return null;

    return (
        <div
            className="hidden xl:block absolute top-[68px] left-1/2 -translate-x-1/2 w-[90%] max-w-[1280px] bg-white rounded-2xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200 border border-slate-200 z-30 shadow-[0_20px_40px_-15px_rgba(34,197,94,0.25)]"
        >
            <div className="grid grid-cols-[330px_1fr] h-[500px]">
                {/* Left Sidebar Category List */}
                <div className="bg-white p-6 border-r border-slate-100 overflow-y-auto h-full custom-scrollbar">
                    {data.left.map(sub => (
                        <div key={sub}
                            onMouseEnter={() => setActiveSub(sub)}
                            className={`flex justify-between items-center px-5 py-3 mb-1.5 rounded-lg text-[15px] font-semibold cursor-pointer transition-all ${activeSub === sub
                                ? "bg-[#f1a134] text-white shadow-lg shadow-orange-100"
                                : "text-slate-600 hover:bg-slate-50 hover:text-[#072b47]"
                                }`}>
                            {sub} <ChevronRight size={16} className={`${activeSub === sub ? "text-white" : "text-slate-400"}`} />
                        </div>
                    ))}
                </div>

                {/* Right Side Content Grid */}
                <div className="p-12 bg-slate-50/40 h-full overflow-y-auto custom-scrollbar">
                    <h3 className="text-2xl font-black mb-8 text-[#072b47] tracking-tight">
                        {activeSub}
                    </h3>
                    <div className="grid grid-cols-2 gap-x-12 gap-y-3.5">
                        {(data.right[activeSub] || []).map(link => (
                            <Link
                                key={link}
                                to={link === "Company Registration" ? "/company-registration" : link === "LLP Registration" ? "/llp-registration" : link === "Public Limited Company Registration" ? "/public-limited-registration" : link === "One Person Company Registration" ? "/one-person-company-registration" : link === "Trust Registration" ? "/trust-registration" : link === "Society Registration" ? "/society-registration" : link === "Section 8 Company" ? "/section-8-company" : link === "80G & 12A Registration" ? "/80g-12a-registration" : link === "CSR-1 Registration" ? "/csr-1-registration" : link === "DARPAN Registration" ? "/darpan-registration" : link === "Partnership Firm Registration" ? "/partnership-firm-registration" : link === "Sole Proprietorship Registration" ? "/sole-proprietorship-registration" : (categoryPath || "/")}
                                onClick={onItemClick}
                                className="group cursor-pointer block"
                            >
                                <span className="text-[15.5px] text-slate-500 group-hover:text-[#f1a134] font-medium transition-colors">
                                    {link}
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MegaMenu;
