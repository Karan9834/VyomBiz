import React from "react";

const Logo = ({ className = "" }) => {
    return (
        <div className={`flex items-center gap-2 cursor-pointer shrink-0 ${className}`}>
            <div className="w-10 h-10 bg-[#072b47] rounded-full flex items-center justify-center">
                <span className="text-white font-black text-2xl italic">V</span>
            </div>
            <div className="text-2xl font-black tracking-tighter text-slate-800">
                vyom<span className="text-blue-600">Biz</span><span className="text-[10px] align-top ml-0.5">®</span>
            </div>
        </div>
    );
};

export default Logo;
