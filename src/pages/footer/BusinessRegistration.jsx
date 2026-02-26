import React from 'react';
import { useNavigate } from 'react-router-dom';
import Testimonials from '../../components/myHome/Testimonials';
import { CheckCircle, Search, Star, MapPin, ArrowRight, Rocket, Smile, PieChart, Shield } from 'lucide-react';

const stats = [
    {
        id: 1,
        value: "8+",
        text: "Years of Experience",
        bgColor: "bg-yellow-400",
        textColor: "text-yellow-500",
    },
    {
        id: 2,
        value: "500+",
        text: "Startup Consultants",
        bgColor: "bg-red-500",
        textColor: "text-red-500",
    },
    {
        id: 3,
        value: "20+",
        text: "Countries",
        bgColor: "bg-green-500",
        textColor: "text-green-500",
    },
    {
        id: 4,
        value: "25k+",
        text: "Startups Registered",
        bgColor: "bg-indigo-500",
        textColor: "text-indigo-500",
    },
];

const BusinessRegistration = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-white min-h-screen font-sans">
            {/* 1. HERO SECTION */}
            <section className="relative h-screen min-h-[700px] bg-white flex items-center pt-20 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-12 mb-20">
                    {/* Left Content */}
                    <div className="w-full lg:w-[60%]">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-[#005a9c] text-sm font-bold uppercase tracking-wider mb-8">
                            <Rocket size={16} />
                            <span>Business Registration</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#072b47] leading-[1.1] mb-8">
                            Make Your Business Ready to <br className="hidden md:block" />
                            <span className="text-[#dead01]">Scale</span> with Us
                        </h1>
                        <p className="text-xl text-slate-600 mb-12 max-w-2xl leading-relaxed font-medium">
                            Join 50,000+ successful start-ups that have scaled new heights with our expert registration and compliance services. Our network of 250+ professionals ensures your global expansion is seamless and secure.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-6 mb-12">
                            <button className="w-full sm:w-auto bg-[#005a9c] text-white px-12 py-5 rounded-2xl font-bold text-xl hover:bg-blue-700 shadow-2xl shadow-blue-900/20 active:scale-95 transition-all">
                                Get Started Now
                            </button>
                            <div className="flex items-center gap-4">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden shadow-sm">
                                            <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                                        </div>
                                    ))}
                                </div>
                                <div className="text-left">
                                    <div className="flex gap-0.5 mb-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-[#dead01] text-[#dead01]" />
                                        ))}
                                    </div>
                                    <p className="text-sm font-bold text-slate-500">30k+ Happy Customers</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="w-full lg:w-[40%] relative">
                        <div className="absolute inset-0 bg-blue-400/10 blur-[120px] rounded-full scale-150 animate-pulse"></div>
                        <img
                            src="/Footer-pages/business-registration/hero-image.avif"
                            alt="Business Registration"
                            className="relative z-10 w-full h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700"
                            onError={(e) => {
                                e.target.src = "https://illustrations.popsy.co/amber/startup.svg"
                            }}
                        />
                    </div>
                </div>
            </section>


            {/* 2. TRUST METRICS STRIP */}
            <section className="bg-[#FEF9C3] py-20 relative z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Card 1 */}
                        <div className="bg-white rounded-[2rem] p-10 flex flex-col shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                            <div className="w-16 h-16 rounded-2xl bg-indigo-50 flex items-center justify-center mb-8">
                                <Rocket className="w-8 h-8 text-[#005a9c]" fill="currentColor" fillOpacity={0.2} />
                            </div>
                            <h3 className="text-xl font-bold text-[#072b47] mb-4">50,000+ Start-ups</h3>
                            <p className="text-slate-600 text-[15px] leading-relaxed font-medium">
                                We have helped 50,000+ start-ups all around the world and help them to reached new heights in minimal time.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white rounded-[2rem] p-10 flex flex-col shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                            <div className="w-16 h-16 rounded-2xl bg-indigo-50 flex items-center justify-center mb-8">
                                <div className="relative">
                                    <Smile className="w-8 h-8 text-[#005a9c]" />
                                    <div className="absolute top-1 right-1 w-2 h-2 bg-orange-400 rounded-full"></div>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-[#072b47] mb-4">8+ Years of Experience</h3>
                            <p className="text-slate-600 text-[15px] leading-relaxed font-medium">
                                We are experts in our field, our team has over 8 years of experience.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white rounded-[2rem] p-10 flex flex-col shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                            <div className="w-16 h-16 rounded-2xl bg-indigo-50 flex items-center justify-center mb-8">
                                <MapPin className="w-8 h-8 text-[#005a9c]" fill="currentColor" fillOpacity={0.2} />
                            </div>
                            <h3 className="text-xl font-bold text-[#072b47] mb-4">250+ Locations</h3>
                            <p className="text-slate-600 text-[15px] leading-relaxed font-medium">
                                We are located in 250+ different locations in India.
                            </p>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-white rounded-[2rem] p-10 flex flex-col shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                            <div className="w-16 h-16 rounded-2xl bg-indigo-50 flex items-center justify-center mb-8">
                                <div className="relative">
                                    <PieChart className="w-8 h-8 text-[#005a9c]" />
                                    <div className="absolute top-0 right-0 w-4 h-4 rounded-full border-2 border-white bg-orange-400"></div>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-[#072b47] mb-4">Privacy & Security</h3>
                            <p className="text-slate-600 text-[15px] leading-relaxed font-medium">
                                Privacy & Security of a Customer is paramount. We ensure your payment, company & personal details are protected at the highest level.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. SERVICES WE OFFER */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#072b47] mb-4">
                            Services We Offer
                        </h2>
                        <div className="w-24 h-1 bg-[#dead01] shadow-[0_0_8px_rgba(255,233,10,0.6)] mx-auto rounded mb-6"></div>
                        <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto">
                            We make business registration and compliance effortless.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Map through services */}
                        {[
                            {
                                title: "Company Registration",
                                desc: "Register your company in India with expert guidance. Save time, avoid errors, and launch faster with complete compliance support.",
                                link: "/company-registration"
                            },
                            {
                                title: "LLP Registration",
                                desc: "Register your Limited Liability Partnership within 1 week with end-to-end legal and documentation assistance.",
                                link: "/llp-registration"
                            },
                            {
                                title: "Public Limited Company Registration",
                                desc: "Professional services to register a public limited company smoothly with up to 50% savings on expert fees.",
                                link: "/public-limited-registration"
                            },
                            {
                                title: "One Person Company Registration",
                                desc: "Ideal for solopreneurs. Get seamless OPC registration with expert handling of legal formalities.",
                                link: "/one-person-company-registration"
                            },
                            {
                                title: "Partnership Firm Registration",
                                desc: "Quick and hassle-free partnership firm registration with complete compliance coverage.",
                                link: "/partnership-firm-registration"
                            },
                            {
                                title: "Sole Proprietorship Registration",
                                desc: "Start your business today with fast and reliable sole proprietorship registration services.",
                                link: "/sole-proprietorship-registration"
                            },
                            {
                                title: "Nidhi Company Registration",
                                desc: "Launch your Nidhi Company with a structured compliance roadmap guided by experienced professionals.",
                                link: "/nidhi-company-registration"
                            },
                            {
                                title: "Producer Company Registration",
                                desc: "Convert your farmer group into a legally recognized producer company with expert assistance.",
                                link: "/producer-company-registration"
                            },
                            {
                                title: "Indian Subsidiary Company Registration",
                                desc: "Set up your Indian subsidiary without compliance stress, supported by experienced legal experts.",
                                link: "/indian-subsidiary-company-registration"
                            }
                        ].map((service, index) => (
                            <div key={index} className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl hover:border-[#FFE90A]/40 hover:-translate-y-2 transition-all duration-500 flex flex-col h-full group relative">
                                {/* Thinner Integrated Yellow Accent Top Bar */}
                                <div className="absolute top-0 left-0 w-full h-[3px] bg-[#FFE90A]"></div>

                                <div className="p-8 flex flex-col h-full pt-10">
                                    <h3 className="text-xl font-bold text-[#072b47] mb-4 group-hover:text-[#005a9c] transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-slate-600 text-[15px] leading-relaxed mb-10 flex-grow font-medium">
                                        {service.desc}
                                    </p>

                                    <div className="mt-auto pt-6">
                                        <div className="flex flex-col mb-6">
                                            <span className="text-[11px] uppercase tracking-widest font-black text-slate-400 mb-1">Starting at</span>
                                            <span className="text-[#dead01] text-3xl font-black drop-shadow-sm leading-none">₹499</span>
                                        </div>

                                        <div className="flex items-center justify-between gap-4">
                                            <button
                                                onClick={() => navigate(service.link)}
                                                className="flex-1 bg-[#005a9c] hover:bg-[#072b47] text-white px-5 py-3.5 rounded-xl text-sm font-bold transition-all shadow-md hover:shadow-lg active:scale-[0.97]">
                                                Get Started
                                            </button>
                                            <button
                                                onClick={() => navigate(service.link)}
                                                className="text-[#005a9c] font-bold text-sm flex items-center gap-1.5 group/read relative py-1">
                                                <span>Read More</span>
                                                <ArrowRight className="w-4 h-4 group-hover/read:translate-x-1.5 transition-transform duration-300" />
                                                <div className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#FFE90A] group-hover/read:w-full transition-all duration-300 rounded-full"></div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. AN OVERVIEW OF START-UPS */}
            <section className="py-20 bg-[#FEF9C3]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#072b47] mb-6">
                                An Overview of Start-ups
                            </h2>
                            <div className="w-16 h-1 bg-[#072b47] rounded mb-8 shadow-sm"></div>
                            <div className="space-y-6 text-[#072b47]/90 text-lg leading-relaxed font-medium">
                                <p>
                                    Start-ups are ventures built around a single product or service designed to solve real-world problems. These businesses often begin with limited capital and evolving business models.
                                </p>
                                <p>
                                    In the early stages, founders typically self-fund operations before seeking investments from family, friends, angel investors, or venture capitalists. While innovation fuels start-ups, long-term success depends on scalability, compliance, and execution.
                                </p>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 flex justify-center">
                            <img
                                src="/Footer-pages/business-registration/startup-overview.jpg"
                                alt="Startup Overview"
                                className="w-full max-w-lg h-auto object-contain rounded-2xl shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. PROS & CONS OF START-UPS */}
            <section className="py-24 bg-slate-50/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-black text-[#072b47] mb-4">
                            Pros & Cons of Start-ups
                        </h2>
                        <div className="w-24 h-1.5 bg-[#dead01] mx-auto rounded-full shadow-sm"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 max-w-5xl mx-auto">
                        {/* Pros Card */}
                        <div className="bg-white rounded-3xl p-10 lg:p-12 border border-slate-200 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative group">
                            <div className="absolute -top-5 left-10 bg-[#005a9c] text-[#dead01] px-10 py-2.5 rounded-2xl font-black text-xs tracking-[0.2em] shadow-xl border-2 border-white uppercase">
                                PROS
                            </div>
                            <ul className="space-y-6 mt-8">
                                {[
                                    "Greater learning opportunities",
                                    "Flexible work culture",
                                    "Encourages innovation",
                                    "Increased responsibility"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4 text-slate-700 font-bold text-lg leading-snug group/item">
                                        <div className="mt-1.5 w-2.5 h-2.5 rounded-full bg-[#dead01] shrink-0 shadow-[0_0_10px_rgba(222,173,1,0.5)] group-hover/item:scale-125 transition-transform"></div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Cons Card */}
                        <div className="bg-white rounded-3xl p-10 lg:p-12 border border-slate-200 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative group">
                            <div className="absolute -top-5 left-10 bg-[#072b47] text-white px-10 py-2.5 rounded-2xl font-black text-xs tracking-[0.2em] shadow-xl border-2 border-white uppercase opacity-90">
                                CONS
                            </div>
                            <ul className="space-y-6 mt-8">
                                {[
                                    "Risk of failure",
                                    "High stress environment",
                                    "Fundraising challenges",
                                    "Competitive market pressure"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4 text-slate-700 font-bold text-lg leading-snug group/item">
                                        <div className="mt-1.5 w-2.5 h-2.5 rounded-full bg-slate-300 shrink-0 group-hover/item:bg-[#dead01] transition-colors"></div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. HOW TO START A START-UP */}
            <section className="py-24 bg-[#FEF9C3] relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-black text-[#072b47] mb-4">
                            How to Start a Start-up
                        </h2>
                        <div className="w-24 h-1.5 bg-[#dead01] mx-auto rounded-full shadow-sm"></div>
                        <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto mt-6">
                            Follow these 5 essential steps to build a strong foundation for your business.
                        </p>
                    </div>

                    <div className="relative">
                        {/* Desktop Connecting Line */}
                        <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-slate-100 z-0">
                            <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-[#dead01]/20 to-transparent"></div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-4">
                            {[
                                {
                                    num: "1",
                                    title: "Idea Validation",
                                    desc: "Start with a strong idea backed by thorough market research."
                                },
                                {
                                    num: "2",
                                    title: "Business Planning",
                                    desc: "Define your business structure, goals, mission, and roadmap."
                                },
                                {
                                    num: "3",
                                    title: "Funding",
                                    desc: "Raise capital through savings, investors, family, or loans."
                                },
                                {
                                    num: "4",
                                    title: "Legal Registration",
                                    desc: "Register your business and obtain required licenses and permits."
                                },
                                {
                                    num: "5",
                                    title: "Operational Setup",
                                    desc: "Establish location, hire talent, and execute your growth strategy."
                                }
                            ].map((step, index) => (
                                <div key={index} className="flex flex-row lg:flex-col items-start lg:items-center relative group z-10">
                                    {/* Mobile Vertical Line */}
                                    {index !== 4 && (
                                        <div className="lg:hidden absolute left-10 top-20 w-0.5 h-12 bg-slate-100"></div>
                                    )}

                                    <div className="flex-shrink-0 relative">
                                        <div className="w-20 h-20 bg-[#072b47] rounded-full flex items-center justify-center text-[#dead01] font-black text-2xl shadow-xl border-4 border-white group-hover:scale-110 group-hover:bg-[#005a9c] group-hover:shadow-[0_0_25px_rgba(222,173,1,0.25)] transition-all duration-500 z-20">
                                            {step.num}
                                        </div>
                                    </div>

                                    <div className="ml-8 lg:ml-0 lg:mt-10 text-left lg:text-center">
                                        <h4 className="text-xl font-black text-[#072b47] mb-3 group-hover:text-[#005a9c] transition-colors">{step.title}</h4>
                                        <p className="text-slate-600 leading-relaxed font-medium text-[15px] max-w-[240px] lg:mx-auto">
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. WHY CHOOSE US */}
            <section className="py-24 bg-white border-t border-slate-100 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#072b47] mb-6">
                            Why Choose <span className="text-[#dead01]">Us</span>
                        </h2>
                        <div className="w-24 h-1.5 bg-[#dead01] mx-auto rounded-full shadow-sm"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                        {[
                            {
                                title: "Better Business Models",
                                desc: "Our teams have built or worked with start-ups for 5+ years, enabling scalable and innovative business models."
                            },
                            {
                                title: "Worldwide Reach",
                                desc: "Over 8+ years, we’ve delivered innovation outcomes across 80+ countries with a strong global network."
                            },
                            {
                                title: "On-Time Results",
                                desc: "We focus on solving real problems while ensuring timely delivery and measurable outcomes."
                            }
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="relative p-10 rounded-[2.5rem] border border-slate-200 bg-white shadow-sm hover:shadow-2xl hover:border-[#dead01]/30 hover:-translate-y-2 transition-all duration-500 group flex flex-col h-full"
                            >
                                <div className="mb-8 relative">
                                    <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:scale-110 group-hover:bg-[#dead01]/10 transition-all duration-500">
                                        <CheckCircle
                                            className="w-8 h-8 text-[#dead01] drop-shadow-sm group-hover:drop-shadow-[0_0_10px_rgba(222,173,1,0.5)] transition-all"
                                        />
                                    </div>
                                </div>

                                <h3 className="text-xl font-black text-[#072b47] mb-4 leading-tight group-hover:text-[#005a9c] transition-colors">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed font-medium text-[15px] flex-grow">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section >

            {/* 8. STATS SECTION */}
            <div className="w-full  py-12">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((item) => (
                            <div
                                key={item.id}
                                className="relative bg-white rounded-xl border border-gray-200 shadow-sm py-8 px-6 flex flex-col items-center justify-center text-center"
                            >
                                {/* Circle Icon */}
                                <div
                                    className={`absolute -top-6 w-14 h-14 rounded-full flex items-center justify-center ${item.bgColor}`}
                                >
                                    <Rocket className="text-white" size={22} />
                                </div>

                                {/* Content */}
                                <div className="mt-6">
                                    <span
                                        className={`font-semibold text-lg ${item.textColor}`}
                                    >
                                        {item.value}
                                    </span>{" "}
                                    <span className="text-gray-700 text-lg font-medium">
                                        {item.text}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 9. TESTIMONIALS SECTION */}
            <Testimonials />
        </div >
    );
};

export default BusinessRegistration;
