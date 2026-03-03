import React, { useRef, useEffect, useCallback } from "react";

/**
 * InsideNavbar – Reusable sticky secondary navigation bar.
 *
 * Props:
 *   tabs        – Array of { id: string, label: string }
 *   activeTab   – Currently active tab id (string)
 *   onTabClick  – Callback (id) => void
 *   topOffset   – px offset from viewport top for sticky positioning (default: 64)
 *   centered    – Whether to center tabs on desktop (default: true)
 *
 * Usage:
 *   <InsideNavbar
 *     tabs={[
 *       { id: "overview",   label: "Overview" },
 *       { id: "documents",  label: "Documents" },
 *       { id: "procedures", label: "Procedures" },
 *       { id: "summary",    label: "Summary" },
 *       { id: "why-us",     label: "Why VyomBiz" },
 *       { id: "faq",        label: "FAQs" },
 *     ]}
 *     activeTab={activeTab}
 *     onTabClick={(id) => scrollToSection(id)}
 *   />
 */
const InsideNavbar = ({
    tabs = [],
    activeTab = "",
    onTabClick,
    topOffset = 64,
    centered = true,
}) => {
    const navRef = useRef(null);

    // Auto-scroll the active tab into view on mobile when activeTab changes
    useEffect(() => {
        if (!navRef.current) return;
        const activeEl = navRef.current.querySelector(`[data-tab-id="${activeTab}"]`);
        if (activeEl) {
            // Only scroll the container horizontally, don't affect page scroll
            const container = navRef.current;
            const scrollLeft = activeEl.offsetLeft - (container.offsetWidth / 2) + (activeEl.offsetWidth / 2);
            container.scrollTo({ left: scrollLeft, behavior: "smooth" });
        }
    }, [activeTab]);

    const handleClick = useCallback((id) => {
        if (onTabClick) onTabClick(id);
    }, [onTabClick]);

    return (
        <div
            className="sticky z-40 bg-white"
            style={{ top: `${topOffset}px` }}
        >
            {/* Bottom border line — gives the bar a refined edge */}
            <div className="border-b border-slate-200 shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
                <div className="max-w-[1440px] mx-auto px-4 md:px-6">
                    {/* Scrollable container on small screens */}
                    <nav
                        ref={navRef}
                        role="tablist"
                        aria-label="Page sections"
                        className={`flex overflow-x-auto no-scrollbar ${centered ? "md:justify-center" : ""}`}
                    >
                        {tabs.map((tab) => {
                            const isActive = activeTab === tab.id;
                            return (
                                <button
                                    key={tab.id}
                                    role="tab"
                                    aria-selected={isActive}
                                    data-tab-id={tab.id}
                                    onClick={() => handleClick(tab.id)}
                                    className={[
                                        // Base styles — always applied
                                        "relative shrink-0 px-5 md:px-7 py-4 md:py-[18px]",
                                        "text-[12px] md:text-[13px] font-bold uppercase tracking-widest",
                                        "transition-all duration-200 ease-out",
                                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#005a9c] focus-visible:ring-inset",
                                        "rounded-sm",               // subtle rounding for the pill feel
                                        "whitespace-nowrap",        // prevent text wrapping

                                        // Active vs Inactive
                                        isActive
                                            ? [
                                                "text-[#072b47]",           // dark navy text
                                                "bg-[#e8f1fb]",             // light-blue fill
                                            ].join(" ")
                                            : [
                                                "text-slate-500",
                                                "hover:text-[#072b47]",
                                                "hover:bg-slate-50",
                                            ].join(" "),
                                    ].join(" ")}
                                >
                                    {tab.label}

                                    {/* Active top border — the defining "active" indicator */}
                                    {isActive && (
                                        <span
                                            className="absolute top-0 left-1 right-1 h-[3px] bg-[#005a9c] rounded-b-full"
                                            aria-hidden="true"
                                        />
                                    )}

                                    {/* Hover underline for inactive tabs */}
                                    {!isActive && (
                                        <span
                                            className="absolute bottom-0 left-3 right-3 h-[2px] bg-slate-200 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"
                                            aria-hidden="true"
                                        />
                                    )}
                                </button>
                            );
                        })}
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default InsideNavbar;
