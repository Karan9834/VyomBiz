import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const MegaMenu = ({ data, activeSub, setActiveSub, onItemClick, categoryPath }) => {
    if (!data) return null;

    return (
        <div
            className="hidden xl:block absolute top-[64px] left-1/2 -translate-x-1/2 w-[90%] max-w-[1280px] bg-white shadow-2xl rounded-2xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200 border border-slate-100"
        >
            <div className="grid grid-cols-[330px_1fr] min-h-[500px]">
                {/* Left Sidebar Category List */}
                <div className="bg-white p-6 border-r border-slate-100 overflow-y-auto max-h-[80vh]">
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
                <div className="p-12 bg-slate-50/40">
                    <h3 className="text-2xl font-black mb-8 text-[#072b47] tracking-tight">
                        {activeSub}
                    </h3>
                    <div className="grid grid-cols-2 gap-x-12 gap-y-3.5">
                        {(data.right[activeSub] || []).map(link => (
                            <Link
                                key={link}
                                to={categoryPath || "/"}
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
