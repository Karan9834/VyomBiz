import React, { useState } from 'react';
import {
    CheckCircle, ArrowRight, Star, Search, Quote,
    FileText, CreditCard, UserCheck, Mail, Shield, Building2, Droplets, Zap,
    Settings, PlayCircle, HardDrive, RefreshCcw, Leaf, FileCheck, Globe
} from 'lucide-react';

const EWasteManagement = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const services = [
        {
            title: "EPR Registration",
            desc: "EPR Registration in India Free Consultation for EPR Certificate -VyomBiz® Expert Heyy PIBOs! Are you facing challenges during EPR registration in India? If yes, you are at the right..",
            price: "499.00",
            icon: <FileCheck className="w-8 h-8 text-[#005a9c]" />
        },
        {
            title: "Refurbisher Authorization and License",
            desc: "Ready to obtain your refurbisher authorization and license? Ensure compliance, build trust, and drive sustainable business growth with VyomBiz expert..",
            price: "499.00",
            icon: <RefreshCcw className="w-8 h-8 text-[#005a9c]" />
        },
        {
            title: "PRO Authorization",
            desc: "PRO Authorization Certificate- File Application in 5 Min With 200+ approvals and 99% success rate, VyomBiz delivers PRO authorization certificate within 4 to 8 weeks through ex..",
            price: "499.00",
            icon: <Shield className="w-8 h-8 text-[#005a9c]" />
        },
        {
            title: "Plastic Waste Authorization",
            desc: "Plastic Waste Authorization in India Get 50% off on Professional Services Today Unmanaged plastic waste can harm your brand’s reputation! Secure your plastic waste authoriza..",
            price: "499.00",
            icon: <Droplets className="w-8 h-8 text-[#005a9c]" />
        },
        {
            title: "E-Waste Recycling Authorization",
            desc: "Ready to get your e-waste recycling authorization? Let VyomBiz guide you in taking the first step towards sustainable e-waste management for a gree..",
            price: "499.00",
            icon: <Leaf className="w-8 h-8 text-[#005a9c]" />
        },
        {
            title: "EPR Authorization for E-waste",
            desc: "Get EPR Authorization for E-Waste management effortlessly. Ensure compliance with extended producer responsibility regulations with VyomBiz expert's guidance..",
            price: "499.00",
            icon: <Settings className="w-8 h-8 text-[#005a9c]" />
        },
        {
            title: "EPR Post Compliance (E-Waste)",
            desc: "Not sure how to meet the needs of EPR post compliance for e-waste? Let VyomBiz experts help you drive positive changes in the electronics recycling..",
            price: "499.00",
            icon: <CheckCircle className="w-8 h-8 text-[#005a9c]" />
        },
        {
            title: "Authorization for Export of E-waste",
            desc: "Authorization for Export of E-waste Get 50% off on Professional Services Today Don’t risk penalties while exporting e-waste! Get your authorization for export of e-waste w..",
            price: "499.00",
            icon: <Building2 className="w-8 h-8 text-[#005a9c]" />
        },
        {
            title: "EPR Target Fulfilment",
            desc: "EPR Target Fulfilment - Apply in 5 Minutes Close your EPR gap before it costs you crores. Struggling with CPCB EPR shortfall notices? Achieve 100% EPR target fulfilment with VyomBiz. Now,..",
            price: "499.00",
            icon: <Star className="w-8 h-8 text-[#005a9c]" />
        },
        {
            title: "EPR Authorization For Battery Waste",
            desc: "Obtain EPR Authorization for Battery Waste management with VyomBiz experts support. Ensure eco-friendly operations and compliance with government regul..",
            price: "499.00",
            icon: <Zap className="w-8 h-8 text-[#005a9c]" />
        },
        {
            title: "EPR Credits From Plastic Waste Recyclers",
            desc: "EPR Credits From Plastic Waste Recyclers VyomBiz offers brand partners information about plastic collection in the form of EPR Credits. What’s included? 10+ Ye..",
            price: "499.00",
            icon: <Droplets className="w-8 h-8 text-[#005a9c]" />,
            hasVideo: true
        },
        {
            title: "EPR for Importers",
            desc: "EPR Certificate for Importers Are you an importer looking to reduce the environmental impact of products? If yes, get EPR Certificate for importers with experts at VyomBiz at the desired..",
            price: "499.00",
            icon: <Globe className="w-8 h-8 text-[#005a9c]" />
        },
        {
            title: "EPR Credits",
            desc: "Get verified EPR credits for e-waste compliance. Connect with certified recyclers, trade credits legally, and meet your CPCB EPR obligations efficiently.",
            price: "499.00",
            icon: <FileText className="w-8 h-8 text-[#005a9c]" />,
            hasVideo: true
        },
        {
            title: "E-waste Recycling license",
            desc: "With the help of VyomBiz, get assistance in the entire process of obtaining an E-waste recycling license right from the beginning to the end. What’s i..",
            price: "499.00",
            icon: <Leaf className="w-8 h-8 text-[#005a9c]" />
        },
        {
            title: "EPR Registration for Producers and Brand Owners",
            desc: "Get the EPR Registration for Producers and Brand Owners with the help of VyomBiz and also get compliance assistance.",
            price: "499.00",
            icon: <Building2 className="w-8 h-8 text-[#005a9c]" />
        },
        {
            title: "EPR Fulfillment in E-Waste Management",
            desc: "EPR Compliance for E-Waste Management Achieve effortless EPR compliance for E-Waste management with VyomBiz. Let experts at VyomBiz guide you towards a greener and more sustainable future!",
            price: "499.00",
            icon: <Settings className="w-8 h-8 text-[#005a9c]" />
        },
        {
            title: "EPR Compliance",
            desc: "EPR Compliance in India- Get 365-Day Roadmap in 1 Day Fear heavy CPCB penalties for not meeting the needs of EPR compliance in India? Stay 100% EPR compliant with VyomBiz. We ensure compl..",
            price: "499.00",
            icon: <Shield className="w-8 h-8 text-[#005a9c]" />
        }
    ];

    const filteredServices = services.filter(service =>
        service.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="bg-white min-h-screen font-sans">
            {/* HERO SECTION */}
            <section className="relative bg-white pt-28 pb-20 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-12">
                    <div className="w-full lg:w-[60%]">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#072b47] leading-[1.2] mb-6">
                            EPR Compliance Solutions for <span className="text-[#dead01]">E-waste Management</span>
                        </h1>
                        <p className="text-xl text-slate-600 mb-8 max-w-2xl leading-relaxed font-medium">
                            EPR Compliance for E-waste Management has now become easy with VyomBiz, drop a call to learn more about the compliance structure
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
                            <div className="relative w-full sm:w-[400px]">
                                <input
                                    type="text"
                                    placeholder="Search Your Services"
                                    className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-slate-200 focus:border-[#005a9c] focus:outline-none text-lg font-medium"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                            </div>
                            <button className="w-full sm:w-auto bg-[#005a9c] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 shadow-xl shadow-blue-900/20 active:scale-95 transition-all flex items-center justify-center gap-2">
                                <Search size={20} />
                                Search
                            </button>
                        </div>

                        <div className="flex items-center gap-2 text-slate-600 font-semibold bg-slate-50 inline-block px-4 py-2 rounded-lg border border-slate-100">
                            <div className="flex text-yellow-500">
                                <Star fill="currentColor" size={20} />
                                <Star fill="currentColor" size={20} />
                                <Star fill="currentColor" size={20} />
                                <Star fill="currentColor" size={20} />
                                <Star fill="currentColor" size={20} />
                            </div>
                            <span>Rated at 4.9 By 30000 + Customers Globally</span>
                        </div>
                    </div>
                    <div className="w-full lg:w-[40%] relative">
                        <div className="absolute inset-0 bg-blue-400/10 blur-[120px] rounded-full scale-150 animate-pulse"></div>
                        <img
                            src="/Footer-pages/e-waste/hero-image.avif"
                            alt="E-Waste Management"
                            className="relative z-10 w-full h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700"
                            onError={(e) => { e.target.src = "https://illustrations.popsy.co/amber/digital-nomad.svg" }}
                        />
                    </div>
                </div>
            </section>

            {/* ABOUT CORBPIZ BANNER */}
            <section className="bg-[#005a9c] py-12 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h2 className="text-3xl font-bold text-white mb-2">About VyomBiz</h2>
                    <p className="text-xl text-blue-100 font-medium">1 Lakh+ Global Brands That Trust Us!</p>
                </div>
            </section>

            {/* SERVICES OFFERED */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#072b47] mb-4">Services We Offered</h2>
                        <div className="w-24 h-1 bg-[#dead01] shadow-[0_0_8px_rgba(255,233,10,0.6)] mx-auto rounded mb-6"></div>
                        <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto">
                            (We make technical compliance certifications effortless and convenient.)
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredServices.map((service, index) => (
                            <div key={index} className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl hover:border-[#FFE90A]/40 hover:-translate-y-2 transition-all duration-500 flex flex-col h-full group relative">
                                <div className="absolute top-0 left-0 w-full h-[3px] bg-[#FFE90A]"></div>
                                <div className="p-8 flex flex-col h-full pt-10">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:scale-110 group-hover:bg-[#dead01]/10 transition-all duration-500">
                                            {service.icon}
                                        </div>
                                        {service.hasVideo && (
                                            <button className="flex items-center gap-1.5 text-rose-500 bg-rose-50 px-3 py-1.5 rounded-full text-xs font-bold hover:bg-rose-100 transition-colors">
                                                <PlayCircle size={14} />
                                                <span>Watch video</span>
                                            </button>
                                        )}
                                    </div>
                                    <h3 className="text-xl font-bold text-[#072b47] mb-4 group-hover:text-[#005a9c] transition-colors line-clamp-2">{service.title}</h3>
                                    <p className="text-slate-600 text-[15px] leading-relaxed mb-8 flex-grow font-medium line-clamp-3">{service.desc}</p>

                                    <div className="mt-auto pt-6 border-t border-slate-100">
                                        <div className="flex items-end gap-2 mb-6">
                                            <span className="text-[12px] uppercase tracking-widest font-black text-slate-400 mb-1">Starting</span>
                                            <span className="text-[#dead01] text-2xl font-black drop-shadow-sm leading-none">₹{service.price}</span>
                                        </div>
                                        <div className="flex flex-wrap lg:flex-nowrap items-center justify-between gap-4">
                                            <button className="w-full lg:w-auto flex-1 bg-[#005a9c] hover:bg-[#072b47] text-white px-5 py-3 rounded-xl text-sm font-bold transition-all shadow-md active:scale-[0.97] whitespace-nowrap">
                                                Get Started Free
                                            </button>
                                            <button className="text-[#005a9c] font-bold text-sm flex items-center gap-1.5 group/read transition-all hover:text-[#072b47] whitespace-nowrap">
                                                <span>Read more</span>
                                                <ArrowRight className="w-4 h-4 group-hover/read:translate-x-1" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {filteredServices.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-xl text-slate-500 font-medium">No services found for "{searchTerm}"</p>
                        </div>
                    )}
                </div>
            </section>

                        {/* WORKING PROCESS */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-[#010101] mb-6">Our Working Process</h2>
                        <div className="w-24 h-1 bg-[#f1a129] mx-auto mb-12"></div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: <FileText className="w-12 h-12 text-white mb-4" strokeWidth={1.5} />, title: "Fill Up Application Form", bg: "bg-[#0b5387]" },
                            { icon: <CreditCard className="w-12 h-12 text-white mb-4" strokeWidth={1.5} />, title: "Make Online Payment", bg: "bg-[#efa036]" },
                            { icon: <UserCheck className="w-12 h-12 text-white mb-4" strokeWidth={1.5} />, title: "Executive will process Application", bg: "bg-[#0b5387]" },
                            { icon: <Mail className="w-12 h-12 text-white mb-4" strokeWidth={1.5} />, title: "Get Confirmation on Mail", bg: "bg-[#efa036]" },
                        ].map((process, i) => (
                            <div key={i} className={`${process.bg} rounded-lg p-8 flex flex-col items-center justify-center text-center shadow-lg hover:-translate-y-2 transition-transform duration-300 min-h-[220px]`}>
                                {process.icon}
                                <h3 className="text-lg font-bold text-white leading-tight px-2">{process.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS */}
            <section className="py-24 bg-[#FEF9C3]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-[#072b47] mb-6">Testimonials</h2>
                        <div className="w-24 h-1.5 bg-[#072b47] mx-auto rounded-full shadow-sm mb-6"></div>
                        <p className="text-lg text-slate-700 font-medium">Updated testimonials from our customers</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {[
                            { name: "Rahul Sharma", role: "Electronics Importer", text: "VyomBiz simplified our entire EPR compliance process for E-waste. They handled the registration and documentation seamlessly.", rating: 5 },
                            { name: "Priya Das", role: "E-waste Recycler", text: "Excellent support for obtaining our E-Waste Recycling Authorization. Their team guided us through every technical requirement.", rating: 5 },
                            { name: "Vikram Reddy", role: "Brand Owner", text: "The EPR target fulfillment service is a lifesaver. Kept us fully compliant with CPCB guidelines without any headaches.", rating: 4 },
                        ].map((rev, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-3xl shadow-lg relative border border-[#dead01]/20">
                                <Quote className="absolute top-6 right-6 w-10 h-10 text-[#dead01]/20" />
                                <div className="flex text-yellow-400 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} fill={i < rev.rating ? "currentColor" : "none"} strokeWidth={i < rev.rating ? 0 : 2} size={18} />
                                    ))}
                                </div>
                                <p className="text-slate-600 font-medium leading-relaxed mb-6">"{rev.text}"</p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-[#005a9c] font-bold text-xl">
                                        {rev.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#072b47]">{rev.name}</h4>
                                        <p className="text-sm text-slate-500">{rev.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <button className="bg-white border-2 border-[#005a9c] text-[#005a9c] hover:bg-[#005a9c] hover:text-white px-8 py-3 rounded-xl font-bold transition-colors shadow-md">
                            View More Reviews
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EWasteManagement;
