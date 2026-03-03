import React from 'react';
import { CheckCircle, ArrowRight, Rocket, Smile, MapPin, PieChart, Shield } from 'lucide-react';

const services = [
    { title: "E S D D In The Sugar Industry Consultation", desc: "Expert guidance and consultation for obtaining your E S D D In The Sugar Industry smoothly and efficiently.", price: "₹2,999" },
    { title: "Application Preparation", desc: "Complete documentation preparation and application filing for Environmental Industry compliance.", price: "₹4,999" },
    { title: "Follow-up & Liaison", desc: "Regular follow-ups with relevant authorities to ensure faster processing of your application.", price: "₹3,499" },
    { title: "Compliance Audit", desc: "Pre-application audit to ensure your premises/business meets all statutory requirements.", price: "₹5,999" },
    { title: "Renewal Submissions", desc: "Timely submission of renewal applications to prevent lapses in your compliance status.", price: "₹1,999" },
    { title: "Annual Returns Filing", desc: "Preparation and filing of statutory annual returns and compliance reports as mandated.", price: "₹2,499" },
];

const ESDDInTheSugarIndustry = () => {
    return (
        <div className="bg-white min-h-screen font-sans">
            <section className="relative min-h-[90vh] bg-white flex items-center pt-24 pb-12 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-12 mb-20">
                    <div className="w-full lg:w-[60%]">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#005a9c]/10 border border-[#005a9c]/20 rounded-full text-[#005a9c] text-sm font-bold uppercase tracking-wider mb-8">
                            <Shield size={16} /><span>Environmental Industry Services</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#072b47] leading-[1.1] mb-8">
                            E <br className="hidden md:block" />
                            <span className="text-[#dead01]">S D D In The Sugar Industry</span>
                        </h1>
                        <p className="text-xl text-slate-600 mb-12 max-w-2xl leading-relaxed font-medium">
                            End-to-end support for E S D D In The Sugar Industry. We manage the entire lifecycle of compliance to ensure your business operations remain uninterrupted and legally sound.
                        </p>
                        <div className="flex flex-wrap gap-4 mb-8">
                            {["Certification", "Compliance", "Advisory", "Renewals"].map((tag, i) => (
                                <span key={i} className="px-4 py-2 bg-slate-100 text-[#072b47] rounded-full text-sm font-bold">{tag}</span>
                            ))}
                        </div>
                        <button className="bg-[#005a9c] text-white px-12 py-5 rounded-2xl font-bold text-xl hover:bg-blue-700 shadow-2xl shadow-blue-900/20 active:scale-95 transition-all">Get Started Now</button>
                    </div>
                    <div className="w-full lg:w-[40%] relative">
                        <div className="absolute inset-0 bg-[#005a9c]/10 blur-[120px] rounded-full scale-150 animate-pulse"></div>
                        <img src="/environmental/placeholder/hero.avif" alt="E S D D In The Sugar Industry"
                            className="relative z-10 w-full h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700"
                            onError={(e) => { e.target.src = "https://illustrations.popsy.co/amber/plant.svg" }} />
                    </div>
                </div>
            </section>

            <section className="bg-[#FEF9C3] py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: <Rocket className="w-8 h-8 text-[#005a9c]" />, title: "Track Record", desc: "Successfully processed thousands of applications for clients across India." },
                            { icon: <Smile className="w-8 h-8 text-[#005a9c]" />, title: "Domain Expertise", desc: "Deep knowledge of specific regulatory frameworks and compliance timelines." },
                            { icon: <MapPin className="w-8 h-8 text-[#005a9c]" />, title: "Pan-India Reach", desc: "We provide comprehensive regulatory coverage spanning all states and territories." },
                            { icon: <PieChart className="w-8 h-8 text-[#005a9c]" />, title: "Data Security", desc: "Your business secrets, process details, and critical data are held in strict confidence." },
                        ].map((card, i) => (
                            <div key={i} className="bg-white rounded-[2rem] p-10 flex flex-col shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                                <div className="w-16 h-16 rounded-2xl bg-indigo-50 flex items-center justify-center mb-8">{card.icon}</div>
                                <h3 className="text-xl font-bold text-[#072b47] mb-4">{card.title}</h3>
                                <p className="text-slate-600 text-[15px] leading-relaxed font-medium">{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#072b47] mb-4">Services Addressed</h2>
                        <div className="w-24 h-1 bg-[#dead01] shadow-[0_0_8px_rgba(255,233,10,0.6)] mx-auto rounded mb-6"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl hover:border-[#FFE90A]/40 hover:-translate-y-2 transition-all duration-500 flex flex-col h-full group relative">
                                <div className="absolute top-0 left-0 w-full h-[3px] bg-[#FFE90A]"></div>
                                <div className="p-8 flex flex-col h-full pt-10">
                                    <h3 className="text-xl font-bold text-[#072b47] mb-4 group-hover:text-[#005a9c] transition-colors">{service.title}</h3>
                                    <p className="text-slate-600 text-[15px] leading-relaxed mb-10 flex-grow font-medium">{service.desc}</p>
                                    <div className="mt-auto pt-6">
                                        <div className="flex flex-col mb-6">
                                            <span className="text-[11px] uppercase tracking-widest font-black text-slate-400 mb-1">Starting at</span>
                                            <span className="text-[#dead01] text-3xl font-black leading-none">{service.price}</span>
                                        </div>
                                        <div className="flex items-center justify-between gap-4">
                                            <button className="flex-1 bg-[#005a9c] hover:bg-[#072b47] text-white px-5 py-3.5 rounded-xl text-sm font-bold transition-all">Get Started</button>
                                            <button className="text-[#005a9c] font-bold text-sm flex items-center gap-1.5 group/read py-1">
                                                <span>Read More</span><ArrowRight className="w-4 h-4 group-hover/read:translate-x-1.5 transition-transform duration-300" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-[#FEF9C3]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#072b47] mb-6">About E S D D In The Sugar Industry</h2>
                            <div className="w-16 h-1 bg-[#072b47] rounded mb-8"></div>
                            <div className="space-y-6 text-[#072b47]/90 text-lg leading-relaxed font-medium">
                                <p>Ensuring compliance with E S D D In The Sugar Industry is crucial for businesses operating in today's regulated environment under the broader framework of Environmental Industry. Failure to comply can result in severe legal consequences, operational halts, and financial penalties.</p>
                                <p>Our comprehensive assistance covers everything from initial evaluation and strategy formulation to execution and final approval. Whether you are establishing a new entity or operating an existing one, we provide clear roadmaps to maintain unblemished compliance records.</p>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
                                <h3 className="text-xl font-black text-[#072b47] mb-6">Core Requirements</h3>
                                <ul className="space-y-4">
                                    {["Business Incorporation Details", "Authorized Person KYC", "Facility Setup Plans", "List of Machinery/Process Details", "Past Compliance Records (if any)", "Site Clearance Approvals", "Local Body NOCs"].map((doc, i) => (
                                        <li key={i} className="flex items-start gap-3 text-slate-700 font-medium">
                                            <CheckCircle className="w-5 h-5 text-[#005a9c] mt-0.5 shrink-0" />
                                            <span>{doc}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-black text-[#072b47] mb-6">Why Choose <span className="text-[#dead01]">Us</span></h2>
                        <div className="w-24 h-1.5 bg-[#dead01] mx-auto rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Specialized Experts", desc: "Dedicated professionals focused specifically on navigating complex environmental guidelines." },
                            { title: "Assured Approvals", desc: "A robust vetting process of document filings severely limits the chance of application pushback." },
                            { title: "Lifecycle Management", desc: "Beyond simple acquisition, we maintain a proactive posture toward your ongoing compliance schedule." },
                        ].map((item, index) => (
                            <div key={index} className="relative p-10 rounded-[2.5rem] border border-slate-200 bg-white shadow-sm hover:shadow-2xl hover:border-[#dead01]/30 hover:-translate-y-2 transition-all duration-500 group flex flex-col">
                                <div className="mb-8">
                                    <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:bg-[#dead01]/10 transition-all duration-500">
                                        <CheckCircle className="w-8 h-8 text-[#dead01]" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-black text-[#072b47] mb-4 group-hover:text-[#005a9c] transition-colors">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed font-medium text-[15px]">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ESDDInTheSugarIndustry;
