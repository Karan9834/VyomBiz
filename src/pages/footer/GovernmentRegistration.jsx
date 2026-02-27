import React from 'react';
import { useNavigate } from 'react-router-dom';
import Testimonials from '../../components/myHome/Testimonials';
import { CheckCircle, Star, MapPin, ArrowRight, Rocket, Smile, FileText, Shield, FileSignature } from 'lucide-react';

const stats = [
    {
        id: 1,
        value: "4.9/5",
        text: "Rated By 30,000+ Customers Globally",
        bgColor: "bg-yellow-400",
        textColor: "text-yellow-500",
    },
    {
        id: 2,
        value: "1 Lakh+",
        text: "Global Brands That Trust Us!",
        bgColor: "bg-red-500",
        textColor: "text-red-500",
    },
    {
        id: 3,
        value: "99%",
        text: "Application Approval Rate",
        bgColor: "bg-green-500",
        textColor: "text-green-500",
    },
    {
        id: 4,
        value: "50+",
        text: "Government Agencies Handled",
        bgColor: "bg-indigo-500",
        textColor: "text-indigo-500",
    },
];

const GovernmentRegistration = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-white min-h-screen font-sans">
            {/* 1. HERO SECTION */}
            <section className="relative h-screen min-h-[700px] bg-white flex items-center pt-20 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-12 mb-20">
                    {/* Left Content */}
                    <div className="w-full lg:w-[60%]">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-[#005a9c] text-sm font-bold uppercase tracking-wider mb-8">
                            <FileSignature size={16} />
                            <span>Government Registration</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#072b47] leading-[1.1] mb-8">
                            Simplified Government <br className="hidden md:block" />
                            <span className="text-[#dead01]">Registration</span> Solutions!
                        </h1>
                        <p className="text-xl text-slate-600 mb-12 max-w-2xl leading-relaxed font-medium">
                            Here at Vyombiz, you can get tailored solutions for all government mapping and certifications in a quick interval without much trouble.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-6 mb-12">
                            <button onClick={() => navigate('/#free-consultation')} className="w-full sm:w-auto bg-[#005a9c] text-white px-12 py-5 rounded-2xl font-bold text-xl hover:bg-blue-700 shadow-2xl shadow-blue-900/20 active:scale-95 transition-all">
                                Get Started Now
                            </button>
                            <div className="flex items-center gap-4">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden shadow-sm">
                                            <img src={`https://i.pravatar.cc/100?img=${i + 40}`} alt="User" />
                                        </div>
                                    ))}
                                </div>
                                <div className="text-left">
                                    <div className="flex gap-0.5 mb-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-[#dead01] text-[#dead01]" />
                                        ))}
                                    </div>
                                    <p className="text-sm font-bold text-slate-500">Rated 4.9 By 30,000+ Customers</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="w-full lg:w-[40%] relative">
                        <div className="absolute inset-0 bg-blue-400/10 blur-[120px] rounded-full scale-150 animate-pulse"></div>
                        <img
                            src="/Footer-pages/government-registration/hero-image.avif"
                            alt="Government Registration"
                            className="relative z-10 w-full h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700"
                            onError={(e) => {
                                e.target.src = "https://illustrations.popsy.co/amber/taking-notes.svg"
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
                                <Smile className="w-8 h-8 text-[#005a9c]" fill="currentColor" fillOpacity={0.2} />
                            </div>
                            <h3 className="text-xl font-bold text-[#072b47] mb-4">30,000+ Customers</h3>
                            <p className="text-slate-600 text-[15px] leading-relaxed font-medium">
                                Trusted by thousands for securing mandatory municipal, state, and central government registrations easily.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white rounded-[2rem] p-10 flex flex-col shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                            <div className="w-16 h-16 rounded-2xl bg-indigo-50 flex items-center justify-center mb-8">
                                <Star className="w-8 h-8 text-[#005a9c]" fill="currentColor" fillOpacity={0.2} />
                            </div>
                            <h3 className="text-xl font-bold text-[#072b47] mb-4">1 Lakh+ Brands</h3>
                            <p className="text-slate-600 text-[15px] leading-relaxed font-medium">
                                Global and local enterprises rely on us for seamless and continuous business compliance globally.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white rounded-[2rem] p-10 flex flex-col shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                            <div className="w-16 h-16 rounded-2xl bg-indigo-50 flex items-center justify-center mb-8">
                                <FileText className="w-8 h-8 text-[#005a9c]" fill="currentColor" fillOpacity={0.2} />
                            </div>
                            <h3 className="text-xl font-bold text-[#072b47] mb-4">Paperless Processing</h3>
                            <p className="text-slate-600 text-[15px] leading-relaxed font-medium">
                                We digitize the lengthy traditional documentation process allowing for faster government approvals online.
                            </p>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-white rounded-[2rem] p-10 flex flex-col shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                            <div className="w-16 h-16 rounded-2xl bg-indigo-50 flex items-center justify-center mb-8">
                                <div className="relative">
                                    <Shield className="w-8 h-8 text-[#005a9c]" />
                                    <div className="absolute top-0 right-0 w-4 h-4 rounded-full border-2 border-white bg-orange-400"></div>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-[#072b47] mb-4">Legal Certainty</h3>
                            <p className="text-slate-600 text-[15px] leading-relaxed font-medium">
                                Comprehensive evaluations ensure that all granted licenses legally cover your precise business scaling needs.
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
                            Services We Offered
                        </h2>
                        <div className="w-24 h-1 bg-[#dead01] shadow-[0_0_8px_rgba(255,233,10,0.6)] mx-auto rounded mb-6"></div>
                        <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto">
                            We make technical compliance and government approval certifications effortless and convenient.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Map through services */}
                        {[
                            { title: "MSME Registration", desc: "Looking to grow your business and access government schemes and subsidies? Get your MSME Registration easily.", link: "/msme-registration" },
                            { title: "IEC Registration", desc: "Are you looking to scale up your business outside India? Manage your import-export needs effortlessly through DGFT IEC.", link: "/iec-registration" },
                            { title: "EPF Registration", desc: "Facing delays in EPF registration? Our experts ensure flawless and cost-effective employee provident fund registrations.", link: "/epf-registration" },
                            { title: "RERA Registration", desc: "Struggling with the RERA registration process? Choose us to streamline your journey to be compliant.", link: "/rera-registration" },
                            { title: "NSIC Registration", desc: "Looking for government grants and to participate in tenders? Get your hassle-free NSIC registration done today.", link: "/nsic-registration" },
                            { title: "ESI Registration", desc: "Ensure your workers strictly fall under the safe protection compliance setup governed directly by the GOI.", link: "/esi-registration" }
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

            {/* 4. AN OVERVIEW */}
            < section className="py-20 bg-[#FEF9C3]" >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#072b47] mb-6">
                                The Safest Way to Register Your Business Legally
                            </h2>
                            <div className="w-16 h-1 bg-[#072b47] rounded mb-8 shadow-sm"></div>
                            <div className="space-y-6 text-[#072b47]/90 text-lg leading-relaxed font-medium">
                                <p>
                                    Acquiring regulatory permits and federal registrations is the most critical hurdle faced by entrepreneurs. We simplify the entire procedure by undertaking the strenuous departmental follow-ups for you accurately.
                                </p>
                                <p>
                                    Whether you're exporting pharmaceuticals, operating a hospitality venture, or running a highly technical telecommunications branch, our team guarantees that not a single operational roadblock occurs due to negligent compliance or mismatched licenses. Focus securely on scaling your business; we will handle the permits.
                                </p>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 flex justify-center">
                            <img
                                src="/Footer-pages/government-registration/overview.jpg"
                                alt="Registration Overview"
                                className="w-full max-w-lg h-auto object-contain rounded-2xl shadow-lg"
                                onError={(e) => {
                                    e.target.src = "https://illustrations.popsy.co/amber/ideation.svg"
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section >

            {/* 5. HOW IT WORKS */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-black text-[#072b47] mb-4">
                            Our Working Process
                        </h2>
                        <div className="w-24 h-1.5 bg-[#dead01] mx-auto rounded-full shadow-sm"></div>
                        <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto mt-6">
                            Follow these well-crafted steps to bypass bureaucratic hurdles and attain your registrations simply.
                        </p>
                    </div>

                    <div className="relative">
                        {/* Desktop Connecting Line */}
                        <div className="hidden lg:block absolute top-10 left-[12%] right-[12%] h-0.5 bg-slate-200 z-0">
                            <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-[#dead01]/20 to-transparent"></div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-4 justify-center">
                            {[
                                {
                                    num: "1",
                                    title: "Determine Need",
                                    desc: "Our advisors ensure your exact business model perfectly aligns with the required statutory registration type."
                                },
                                {
                                    num: "2",
                                    title: "Collation of Proofs",
                                    desc: "We securely analyze state laws and seamlessly gather all personal and corporate KYC documentation carefully."
                                },
                                {
                                    num: "3",
                                    title: "Application Handling",
                                    desc: "Strict filing and constant follow-ups securely directly with relevant state sub-division bodies directly."
                                },
                                {
                                    num: "4",
                                    title: "Get Confirmation",
                                    desc: "Final delivery of authorized regulatory proofs, certifications and legal letters directly delivered digitally over email."
                                }
                            ].map((step, index) => (
                                <div key={index} className="flex flex-row lg:flex-col items-start lg:items-center relative group z-10">
                                    {/* Mobile Vertical Line */}
                                    {index !== 3 && (
                                        <div className="lg:hidden absolute left-10 top-20 w-0.5 h-12 bg-slate-200"></div>
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

            {/* 6. WHY CHOOSE US */}
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
                                title: "Extensive Networks",
                                desc: "Our firm connections strictly within multiple state organizations cleanly ensure applications almost rarely face blockades."
                            },
                            {
                                title: "Quick Processing",
                                desc: "Your licensing and corporate registration forms are securely filed quickly ensuring absolutely zero interruptions currently."
                            },
                            {
                                title: "Complete Coverage",
                                desc: "Whether large commercial building compliance rules or localized export certifications we cover everything seamlessly."
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

            {/* 7. STATS SECTION */}
            <div className="w-full py-12">
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

            {/* 8. TESTIMONIALS SECTION */}
            <Testimonials />
        </div>
    );
};

export default GovernmentRegistration;
