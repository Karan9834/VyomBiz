import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Phone, Mail, MessageCircle, Menu, ChevronDown, X } from "lucide-react";
import Logo from "../../common/Logo";
import MegaMenu from "./MegaMenu";
import ContactPopup from "./ContactPopup";
import { NAV_LINKS, SIDEBAR_LINKS, MEGA_MENU_DATA } from "../../../constants/navigation";

export default function Navbar() {
    const [activeTop, setActiveTop] = useState(null);
    const [activeSub, setActiveSub] = useState("");
    const [hamburger, setHamburger] = useState(false);
    const [contact, setContact] = useState(false);
    const [expandedSubs, setExpandedSubs] = useState([]); // State for mobile sub-category expansion
    const ref = useRef();
    const navigate = useNavigate();

    // Mapping states for each main category to their default sub-category
    useEffect(() => {
        if (activeTop === "Startup") setActiveSub("Business Registration");
        if (activeTop === "IP & Trademark ®") setActiveSub("Trademarks India");
        if (activeTop === "Lawyers Services") setActiveSub("Lawyers Specialization");
        if (activeTop === "Compliance") setActiveSub("Secretarial");
        if (activeTop === "Regulatory") setActiveSub("RBI");
        if (activeTop === "Environmental") setActiveSub("Pollution NOC");
        if (activeTop === "Company") setActiveSub("Overview");
    }, [activeTop]);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                setActiveTop(null);
                setHamburger(false);
                setContact(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Lock body scroll when hamburger is open (Mobile Only)
    useEffect(() => {
        const isMobile = window.innerWidth < 1280; // xl breakpoint
        if (hamburger && isMobile) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [hamburger]);

    return (
        <nav ref={ref} className="sticky top-0 z-[100] font-sans">
            {/* Header Content Wrapper with Ruler & Shadow */}
            <div className="bg-white border-b border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.35)] relative z-20">
                <div className="max-w-[1440px] mx-auto h-16 px-4 md:px-6 flex justify-between items-center gap-2">

                    {/* Logo Section */}
                    <Link to="/" onClick={() => { setActiveTop(null); setHamburger(false); }} className="shrink-0">
                        <Logo />
                    </Link>

                    {/* Desktop Nav Links (Hidden on Mobile) */}
                    <ul className="hidden xl:flex items-center h-full gap-2">
                        {NAV_LINKS.map(item => (
                            <li key={item.name}
                                onClick={() => setActiveTop(activeTop === item.name ? null : item.name)}
                                className={`px-3 h-full flex items-center gap-1 text-[16px] font-semibold tracking-tighter cursor-pointer transition-all border-b-2 border-transparent ${activeTop === item.name ? "text-[#f1a134] border-[#f1a134]" : "text-slate-700 hover:text-blue-600"}`}>
                                {item.name} <ChevronDown size={14} className={`mt-0.5 transition-transform ${activeTop === item.name ? "rotate-180" : ""}`} />
                            </li>
                        ))}
                    </ul>

                    {/* Action Icons Section */}
                    <div className="flex items-center gap-2 md:gap-4">
                        {/* Mobile Specific Icons (Visible on Mobile, semi-hidden/integrated on Desktop) */}
                        <div className="flex items-center gap-3 mr-1 lg:hidden">
                            <a href="https://wa.me/yournumber" target="_blank" rel="noreferrer">
                                <div className="w-10 h-10 bg-[#25D366]/10 rounded-full flex items-center justify-center text-[#25D366]">
                                    <MessageCircle size={20} fill="currentColor" strokeWidth={0} />
                                </div>
                            </a>
                            <a href="tel:+919121230280">
                                <div className="w-10 h-10 bg-[#072b47]/10 rounded-full flex items-center justify-center text-[#072b47]">
                                    <Phone size={20} fill="currentColor" strokeWidth={0} />
                                </div>
                            </a>
                        </div>

                        {/* Desktop Only Icons */}
                        <div className="hidden lg:flex items-center gap-5 border border-slate-200 bg-slate-50/50 rounded-full px-5 py-2.5 ml-2">
                            <Phone size={20} className="text-[#f1a134] cursor-pointer hover:scale-110 transition-transform" onClick={() => setContact(!contact)} />
                            <Mail size={20} className="text-blue-500 cursor-pointer hover:scale-110 transition-transform" onClick={() => setContact(!contact)} />
                            <MessageCircle size={20} className="text-green-500 cursor-pointer hover:scale-110 transition-transform" onClick={() => setContact(!contact)} />
                        </div>

                        {/* Mobile & Tablet Hamburger (Opens Sidebar/Mobile Menu) */}
                        <div className="xl:hidden p-2 hover:bg-slate-100 rounded-lg cursor-pointer transition-colors" onClick={() => setHamburger(!hamburger)}>
                            {hamburger ? <X size={28} strokeWidth={3} /> : <Menu size={28} strokeWidth={3} className="text-slate-700" />}
                        </div>

                        {/* Desktop Hamburger (Opens Dropdown) */}
                        <div className="hidden xl:block p-2 hover:bg-slate-100 rounded-lg cursor-pointer transition-colors"
                            onClick={() => setHamburger(!hamburger)}>
                            <Menu size={28} strokeWidth={3} className={`transition-colors ${hamburger ? "text-blue-600" : "text-slate-700"}`} />
                        </div>
                    </div>
                </div>
            </div>

            {/* --- MOBILE FIXED MENU --- */}
            {hamburger && (
                <div className="xl:hidden bg-white fixed inset-0 top-16 w-screen h-[calc(100vh-64px)] overflow-y-auto shadow-2xl z-[100] animate-in slide-in-from-top-5 duration-300">
                    <div className="flex flex-col py-4">
                        {/* Main Categories Accordion */}
                        {NAV_LINKS.map(item => (
                            <div key={item.name} className="border-b border-slate-50">
                                <div
                                    className="flex justify-between items-center px-6 py-4 cursor-pointer hover:bg-slate-50"
                                    onClick={() => setActiveTop(activeTop === item.name ? null : item.name)}
                                >
                                    <span className="text-lg font-bold text-slate-800 tracking-tight">{item.name}</span>
                                    <ChevronDown size={18} className={`text-slate-400 transition-transform ${activeTop === item.name ? "rotate-180 text-blue-600" : ""}`} />
                                </div>

                                {activeTop === item.name && MEGA_MENU_DATA[item.name] && (
                                    <div className="bg-slate-50/50 pb-4">
                                        {MEGA_MENU_DATA[item.name].left.map(sub => (
                                            <div key={sub} className="px-10 py-3">
                                                <p className="text-sm font-black text-[#072b47] uppercase tracking-widest mb-2 border-b border-slate-200 pb-1">{sub}</p>
                                                <div className="space-y-2">
                                                    {(MEGA_MENU_DATA[item.name].right[sub] || [])
                                                        .slice(0, expandedSubs.includes(`${item.name}-${sub}`) ? undefined : 5)
                                                        .map(link => {
                                                            const getMobileLink = (btnLink) => {
                                                                const map = {
                                                                    "Company Registration": "/company-registration",
                                                                    "LLP Registration": "/llp-registration",
                                                                    "Public Limited Company Registration": "/public-limited-registration",
                                                                    "One Person Company Registration": "/one-person-company-registration",
                                                                    "Partnership Firm Registration": "/partnership-firm-registration",
                                                                    "Sole Proprietorship Registration": "/sole-proprietorship-registration",
                                                                    "Nidhi Company Registration": "/nidhi-company-registration",
                                                                    "Producer Company Registration": "/producer-company-registration",
                                                                    "Indian Subsidiary Company Registration": "/indian-subsidiary-company-registration",
                                                                    "Clinical Establishment Registration": "/clinical-establishment-registration",
                                                                    "Carbon Black Manufacturing": "/carbon-black-manufacturing-business-setup",
                                                                    "Green Hydrogen Plant": "/green-hydrogen-plant-setup",
                                                                    "Green Ammonia Plant": "/green-ammonia-plant-setup",
                                                                    "Synthetic Rubber Business": "/synthetic-rubber-business-setup",
                                                                    "Paper and Paperboard Packaging Industry": "/paper-and-paperboard-packaging-industry",
                                                                    "Fermentation Industry": "/fermentation-industry-setup",
                                                                    "Renewable energy business": "/renewable-energy-business-setup",
                                                                    "Fire Equipment Plant Setup": "/fire-equipment-plant-setup",
                                                                    "Virtual Office Space": "/virtual-office-space-setup",

                                                                    // FSSAI & Eating House
                                                                    "FSSAI License": "/fssai-license",
                                                                    "FSSAI License Renewal": "/fssai-license-renewal",
                                                                    "FSSAI State License": "/fssai-state-license",
                                                                    "Eating House License": "/eating-house-license",
                                                                    "Central FSSAI License": "/central-fssai-license",
                                                                    "FSSAI Annual Return": "/fssai-annual-return",
                                                                    "FSSAI Product Approval": "/fssai-product-approval",
                                                                    "Food Recycling License": "/food-recycling-license",
                                                                    "FPO Mark Certification": "/fpo-mark-certification",

                                                                    // Company
                                                                    "Career": "/career",
                                                                    "vyomBiz Reviews": "/reviews",
                                                                    "Work at vyomBiz": "/work-at-vyombiz"
                                                                };
                                                                return map[btnLink] || item.path;
                                                            };
                                                            return (
                                                                <Link
                                                                    key={link}
                                                                    to={getMobileLink(link)}
                                                                    onClick={() => setHamburger(false)}
                                                                    className="block text-[15px] font-semibold text-slate-600 hover:text-blue-600 transition-colors"
                                                                >
                                                                    {link}
                                                                </Link>
                                                            );
                                                        })}
                                                    {(MEGA_MENU_DATA[item.name].right[sub] || []).length > 5 && (
                                                        <button
                                                            onClick={() => setExpandedSubs(prev =>
                                                                prev.includes(`${item.name}-${sub}`)
                                                                    ? prev.filter(s => s !== `${item.name}-${sub}`)
                                                                    : [...prev, `${item.name}-${sub}`]
                                                            )}
                                                            className="text-blue-600 text-sm font-bold hover:underline py-1 mt-1 block"
                                                        >
                                                            {expandedSubs.includes(`${item.name}-${sub}`) ? "- View Less" : `+ View More (${(MEGA_MENU_DATA[item.name].right[sub] || []).length - 5} more)`}
                                                        </button>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* Company Section Accordion */}
                        <div className="border-b border-slate-50">
                            <div
                                className="flex justify-between items-center px-6 py-4 cursor-pointer hover:bg-slate-50"
                                onClick={() => setActiveTop(activeTop === "Company" ? null : "Company")}
                            >
                                <span className="text-lg font-bold text-slate-800 tracking-tight">Company</span>
                                <ChevronDown size={18} className={`text-slate-400 transition-transform ${activeTop === "Company" ? "rotate-180 text-blue-600" : ""}`} />
                            </div>
                            {activeTop === "Company" && (
                                <div className="bg-white flex flex-col pl-4">
                                    {SIDEBAR_LINKS.map(sublink => (
                                        <Link
                                            key={sublink.name}
                                            to={sublink.path}
                                            onClick={() => setHamburger(false)}
                                            className={`px-6 py-3.5 text-base font-semibold transition-all border-l-4 border-transparent hover:border-blue-600 hover:bg-blue-50/30 ${sublink.name === 'Newsletter' ? 'text-[#072b47] font-black' : 'text-slate-600'}`}
                                        >
                                            {sublink.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Safe Area Spacer */}
                        <div className="h-20 w-full" />
                    </div>
                </div>
            )}

            {/* --- DESKTOP MEGA MENU --- */}
            <MegaMenu
                data={activeTop ? MEGA_MENU_DATA[activeTop] : null}
                categoryPath={NAV_LINKS.find(l => l.name === activeTop)?.path}
                activeSub={activeSub}
                setActiveSub={setActiveSub}
                onItemClick={() => setActiveTop(null)}
            />

            {/* --- CONTACT POPUP (Desktop) --- */}
            <ContactPopup isOpen={contact} />

            {/* --- DESKTOP SIDEBAR --- */}
            {hamburger && (
                <div className="hidden xl:block absolute right-4 top-[74px] bg-white border border-slate-100 rounded-xl w-64 shadow-xl py-2 z-[110] space-y-[1px]">
                    {SIDEBAR_LINKS.map(i => (
                        <Link
                            key={i.name}
                            to={i.path}
                            onClick={() => setHamburger(false)}
                            className="block px-6 py-2.5 text-slate-600 hover:bg-slate-50 hover:text-blue-600 font-semibold transition-colors"
                        >
                            {i.name}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
}