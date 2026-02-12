import React from "react";
import HeroLayout from "../../components/common/HeroLayout.jsx";

const ComingSoon = ({ title }) => {
    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain={title || "Coming "}
                heroTitleSuffix="Soon"
                heroSubtitle="We are working on something amazing!"
                heroDescription="This page is currently under development. Please check back later for updates."
                showForm={false}
                whatsIncludedList={[]}
                stats={[]}
            />
        </div>
    );
};

export default ComingSoon;
