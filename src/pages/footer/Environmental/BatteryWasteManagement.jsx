import React, { useState } from 'react';
import { 
    CheckCircle, ArrowRight, Star, Search, Quote, FileText, CreditCard, UserCheck, Mail, Shield, Building2, Droplets, Zap, Settings, PlayCircle, HardDrive, RefreshCcw, Leaf, FileCheck, Globe, Factory, ClipboardCheck
} from 'lucide-react';

const BatteryWasteManagement = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const services = [
        {
                "title": "New Lead Acid Battery Import License",
                "desc": "New Lead Acid Battery Import License New Lead Acid Battery Import license is necessary to deal in import of lead acid batteries. The importers need to apply to the CPCB for obtaining..",
                "price": "499.00",
                icon: <FileCheck className='w-8 h-8 text-[#005a9c]' />
        },
        {
                "title": "Lithium-Ion Battery Import License",
                "desc": "Lithium-Ion Battery Import License Lithium-ion battery import license is necessary to deal in import of Lithium-ion batteries.",
                "price": "499.00",
                icon: <FileCheck className='w-8 h-8 text-[#005a9c]' />
        },
        {
                "title": "Registration for Lead Acid Battery Recycling",
                "desc": "Registration for Lead Acid Battery Recycling Lead Acid Battery Recycling is necessary to avoid major environmental hazard.",
                "price": "499.00",
                icon: <RefreshCcw className='w-8 h-8 text-[#005a9c]' />
        },
        {
                "title": "Registration for Scrap Battery Import",
                "desc": "Registration for Scrap Battery Import Anyone who wants to deal in scrap battery import must secure registration for such import. Contact VyomBiz to know the registration process for i..",
                "price": "499.00",
                icon: <Zap className='w-8 h-8 text-[#005a9c]' />
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
                            Get Immediate <span className="text-[#dead01]">Battery Waste Management Solutions</span>
                        </h1>
                        <p className="text-xl text-slate-600 mb-8 max-w-2xl leading-relaxed font-medium">
                            Looking for Battery Waste Management Solutions? VyomBiz is the best platform you can approach for tailored solutions
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
                        <div className="absolute inset-0 bg-teal-400/10 blur-[120px] rounded-full scale-150 animate-pulse"></div>
                        <img
                            src="/Footer-pages/service-banners/BatteryWasteManagement.avif"
                            alt="BatteryWasteManagement"
                            className="relative z-10 w-full h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700"
                            onError={(e) => { e.target.src = "https://illustrations.popsy.co/amber/success.svg" }}
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
                                    <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:scale-110 group-hover:bg-[#dead01]/10 transition-all duration-500 mb-6">
                                        {service.icon}
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
                            { name: "Rahul Sharma", role: "Business Owner", text: "VyomBiz simplified our entire compliance process. They handled the registration and documentation seamlessly.", rating: 5 },
                            { name: "Priya Das", role: "Entrepreneur", text: "Excellent support for obtaining our Authorization. Their team guided us through every technical requirement swiftly.", rating: 5 },
                            { name: "Vikram Reddy", role: "Director", text: "The team is extremely professional. Kept us fully compliant with guidelines without any headaches.", rating: 4 },
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

export default BatteryWasteManagement;
