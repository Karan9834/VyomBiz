import React, { useState } from 'react';
import { 
    CheckCircle, ArrowRight, Star, Search, Quote, 
    FileText, CreditCard, UserCheck, Mail, Shield, Building2, Droplets, Zap,
    Settings, PlayCircle, HardDrive, RefreshCcw, Leaf, FileCheck, Globe,
    Factory, ClipboardCheck
} from 'lucide-react';

const EIA = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const services = [
        { title: "State Pollution Control Board (SPCB) - NOC", desc: "State Pollution Control Board (SPCB) - NOC Industries are required to obtain the NOC from the Pollution control department before starting their business. Contact VyomBiz and get assista..", price: "499.00", icon: <Shield className="w-8 h-8 text-[#005a9c]" /> },
        { title: "Environmental Auditing", desc: "Environmental Auditing Big Savings Alert: 50% off on Professional Services Today Embrace sustainability to reduce carbon footprints with hassle-free & seamless environmental aud..", price: "499.00", icon: <FileCheck className="w-8 h-8 text-[#005a9c]" /> },
        { title: "Environmental Clearance", desc: "Environmental Clearance Certificate Slash Costs with Up to 50% off on Professional Services Today Still didn’t receive the environmental clearance certificate? Our expert con..", price: "499.00", icon: <FileCheck className="w-8 h-8 text-[#005a9c]" /> },
        { title: "Environmental Impact Assessment (EIA)", desc: "Environmental Impact Assessment Is your project ready for a sustainable future? Start your Environmental Impact Assessment today and ensure your impact on the environment is positive!", price: "499.00", icon: <Globe className="w-8 h-8 text-[#005a9c]" /> },
        { title: "Hydrogeological survey report", desc: "Hydrogeological Survey Report Need a comprehensive Hydrogeological Survey Report for your project? Get accurate groundwater analysis and VyomBiz expert guidance to ensure compliance.", price: "499.00", icon: <FileText className="w-8 h-8 text-[#005a9c]" /> },
        { title: "Half-Yearly Environmental Compliance", desc: "Half-Yearly Environmental Compliance To comply with environmental legislation and approvals and to maintain business accreditation, get your environmental compliance report with the assi..", price: "499.00", icon: <Settings className="w-8 h-8 text-[#005a9c]" /> },
        { title: "Social Impact Assessment", desc: "Social Impact Assessment Special Offer: 50% off on Professional Services Today Facing budget constraints for a detailed social impact assessment? At VyomBiz, we ensure a cost-ef..", price: "499.00", icon: <Star className="w-8 h-8 text-[#005a9c]" /> },
        { title: "Wildlife Conservation Plan", desc: "Wildlife Conservation Plan Choose VyomBiz for transparent Wildlife Conservation Planning and streamline your Environment Clearance and other approval processes for your project.", price: "499.00", icon: <Leaf className="w-8 h-8 text-[#005a9c]" /> },
        { title: "Environmental Management Plan Report", desc: "Environmental Management Plan Report- Get First Draft in 24 Hours Ready to enhance your project's sustainability? Contact VyomBiz to prepare an environmental management..", price: "499.00", icon: <FileText className="w-8 h-8 text-[#005a9c]" /> },
        { title: "Consent for Operation (CFO)", desc: "Consent for Operation (CFO) For Consent for Operation for your company, get your Pollution NOC with the assistance of VyomBiz.", price: "499.00", icon: <Shield className="w-8 h-8 text-[#005a9c]" /> },
        { title: "Soil Testing", desc: "Soil Testing- Get up to 20% OFF on Professional Fees Worried about soil fertility and productivity? Talk to our seasoned environmental consultants for soil testing servi..", price: "499.00", icon: <CheckCircle className="w-8 h-8 text-[#005a9c]" /> },
        { title: "CDP Reporting", desc: "CDP Reporting Looking to enhance your sustainability credentials? Connect with VyomBiz to simplify your CDP reporting, which helps businesses align with global sustainability standards, m..", price: "499.00", icon: <FileText className="w-8 h-8 text-[#005a9c]" /> }
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
                            Get your EIA done with the <span className="text-[#dead01]">Expert Assistance of VyomBiz!</span>
                        </h1>
                        <p className="text-xl text-slate-600 mb-8 max-w-2xl leading-relaxed font-medium">
                            VyomBiz provides a one-stop solution for environmental clearance for your development project. VyomBiz is a platform of seasoned professionals with over 100+ NABET Qualified EIA and ESG Consultants. Call us right away to get your EIA started!
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
                        
                        <button className="mt-8 flex items-center gap-2 text-[#005a9c] font-bold text-lg hover:text-[#072b47]">
                            <PlayCircle size={24} /> Video See How It Works
                        </button>
                    </div>
                    <div className="w-full lg:w-[40%] relative">
                        <div className="absolute inset-0 bg-teal-400/10 blur-[120px] rounded-full scale-150 animate-pulse"></div>
                        <img
                            src="/Footer-pages/service-banners/EIA.avif"
                            alt="EIA"
                            className="relative z-10 w-full h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700"
                            onError={(e) => { e.target.src = "https://illustrations.popsy.co/amber/success.svg" }}
                        />
                    </div>
                </div>
            </section>

            {/* ABOUT VyomBiz STATS */}
            <section className="bg-[#005a9c] py-16 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center text-white">
                            <h3 className="text-4xl font-black mb-2">120+</h3>
                            <p className="font-bold mb-2">EIA Projects</p>
                            <p className="text-sm text-blue-100">We have done 500+ EIA-related projects all over India.</p>
                        </div>
                        <div className="text-center text-white">
                            <h3 className="text-4xl font-black mb-2">2000+</h3>
                            <p className="font-bold mb-2">Happy Clients</p>
                            <p className="text-sm text-blue-100">We have helped 2000+ clients in obtaining Environmental Clearance in minimal time.</p>
                        </div>
                        <div className="text-center text-white">
                            <h3 className="text-4xl font-black mb-2">250+</h3>
                            <p className="font-bold mb-2">Locations</p>
                            <p className="text-sm text-blue-100">We are located in 250+ different locations in India</p>
                        </div>
                        <div className="text-center text-white">
                            <h3 className="text-4xl font-black mb-2">70%</h3>
                            <p className="font-bold mb-2">Market Share</p>
                            <p className="text-sm text-blue-100">In this industry, we have covered 70% of the Market Share, which is higher than any other competitors.</p>
                        </div>
                    </div>
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
                </div>
            </section>

            {/* ADDITIONAL CONTENT */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                    <div>
                        <h2 className="text-2xl font-bold text-[#072b47] mb-4">What is Environment Impact Assessment?</h2>
                        <p className="text-slate-600 leading-relaxed font-medium">
                            EIA is usually required for Schedule I projects as per EIA Notification, 2006. EIA is a procedure that evaluates a proposed or existing project's environmental implications before its development. It assesses the environmental impacts of a planned project or development activity, considering the positive-negative and inter-related socioeconomic, cultural, and human-health aspects. Environment Impact Assessment is used to estimate the environmental implications of a project during the planning stage to take necessary actions to mitigate the negative impacts. The Government of India makes EIA mandatory for Environment Clearance for over 39 listed projects in the schedule as per EIA Notification 2006.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-[#072b47] mb-4">What is Environmental Auditing?</h2>
                        <p className="text-slate-600 leading-relaxed font-medium">
                            Environmental Auditing procedure is a practical management tool that helps an industry or organisation verify compliance with environmental norms or requirements, evaluate the effectiveness of the environmental management system, assess risks, and identify and correct environmental hazards. There have been several cases in India where the Environmental Audit has helped reduce risks and pollution from the project sector. Contact VyomBiz for hassle–free assistance for Environmental Auditing to increase investors' confidence and respond to other stakeholder demands with ease anywhere across India.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-[#072b47] mb-4">What is Wildlife Conservation Plan?</h2>
                        <p className="text-slate-600 leading-relaxed font-medium">
                            The WCP uses sustainable and scientific management of the area's natural wealth to provide safeguarding measures and wildlife protection from unsavoury elements and carry out developmental activities without affecting these resources. Therefore, biodiversity conservation and management plans are formulated in a way that can provide need-based, site-specific, and participatory eco-development inputs to local stakeholders for reducing their resource dependency on forests and for eliciting their support towards conservation in the area. Indian Government has initiated projects for wildlife conservation to check human encroachment. Choose VyomBiz for transparent Wildlife Conservation Planning and streamline your Environment Clearance and other approval processes for your project.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-[#072b47] mb-4">What is Half Yearly Environmental Compliance (EC) / Compliance Report?</h2>
                        <p className="text-slate-600 leading-relaxed font-medium">
                            Half-Yearly Environmental Compliance Reports are routinely delivered by the first of June and the first of December of each year to the regional office of the MoEF&CC and the other concerned regulatory authorities. The State Environment Impact Assessment Authority may issue a show-cause notice to project proponents who are found to violate the restrictions. The State authorities also have the power to suspend environmental clearances or revoke them in the event of infractions. To comply with such strict environmental legislations and applicable post-compliance and maintain business accreditation, get your half-yearly environmental compliance report prepared with VyomBiz
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-[#072b47] mb-6">Why Choose VyomBiz for EIA in India?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                <h3 className="text-lg font-bold text-[#005a9c] mb-2">Get Expert Team Support</h3>
                                <p className="text-slate-600 text-sm">The EIA support team at VyomBiz consists of NABET qualified consultants who are available for 24*7 assistance. We ensure quick and precise issues resolution with proactive assistance.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                <h3 className="text-lg font-bold text-[#005a9c] mb-2">Follow-ups with Concerned Authorities</h3>
                                <p className="text-slate-600 text-sm">Our experts will ensure proper coordination with every agency involved in the clearance process and liaison with all stakeholder to develop a solid EIA report.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                <h3 className="text-lg font-bold text-[#005a9c] mb-2">Help you in developing Mitigation Strategies</h3>
                                <p className="text-slate-600 text-sm">Our experts will help you develop and implement mitigation strategies and EMP as per the requirements of your project.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                <h3 className="text-lg font-bold text-[#005a9c] mb-2">Leader in Environmental Consultancy Services</h3>
                                <p className="text-slate-600 text-sm">We offer unparalleled Environmental Licencing and Compliance Services in all segments- from domestic MSMEs to internationally–renowned companies.</p>
                            </div>
                        </div>
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
                            { name: "Suresh Kumar", role: "Manufacturer", text: "VyomBiz simplified our entire compliance process. They handled the registration and documentation seamlessly.", rating: 5 },
                            { name: "Anjali Gupta", role: "Brand Owner", text: "Excellent support for obtaining our Authorization. Their team guided us through every technical requirement swiftly.", rating: 5 },
                            { name: "Rahul Verma", role: "Recycler", text: "The team is extremely professional. Kept us fully compliant with CPCB guidelines without any headaches.", rating: 4 },
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

export default EIA;
