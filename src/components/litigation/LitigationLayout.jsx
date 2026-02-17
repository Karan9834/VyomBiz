import React, { useState, useEffect, useRef } from 'react';
import {
    Check,
    Star,
    ChevronRight,
    ShieldCheck,
    MessageCircle,
    ChevronDown,
    MapPin,
    Globe,
    Briefcase,
    ArrowRight
} from 'lucide-react';

const LitigationLayout = ({ content }) => {
    const [activeTab, setActiveTab] = useState('overview');
    const [scrolled, setScrolled] = useState(false);
    const [openFaq, setOpenFaq] = useState(null);
    const sectionRefs = {
        overview: useRef(null),
        types: useRef(null),
        'when-to-file': useRef(null),
        process: useRef(null),
        'why-choose': useRef(null),
        faqs: useRef(null)
    };

    useEffect(() => {
        const handleScroll = () => {
            // Update sticky state
            setScrolled(window.scrollY > 600);

            // Update active tab based on scroll position
            const scrollPosition = window.scrollY + 140;
            const currentSection = Object.entries(sectionRefs).find(([id, ref]) => {
                if (ref.current) {
                    const top = ref.current.offsetTop;
                    const bottom = top + ref.current.offsetHeight;
                    return scrollPosition >= top && scrollPosition < bottom;
                }
                return false;
            });

            if (currentSection) {
                setActiveTab(currentSection[0]);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 128;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    const { title, hero, tabs, sections } = content;

    return (
        <div className="bg-white min-h-screen font-sans text-slate-900">
            {/* 1. Hero Section */}
            <section className="relative pt-6 pb-16 lg:pt-10 lg:pb-24 overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url('/lawyer-service-hero-section-img/hero-section-bg-img.png')" }}
                />
                {/* Background Pattern (Subtle stripes) */}
                <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none overflow-hidden">
                    <div className="absolute top-0 right-0 w-full h-full rotate-45 transform translate-x-1/2 -translate-y-1/2">
                        {[...Array(20)].map((_, i) => (
                            <div key={i} className="h-4 w-[200%] bg-slate-200 my-4" />
                        ))}
                    </div>
                </div>

                <div className="max-w-[1440px] mx-auto px-4 md:px-6 relative z-10">
                    {/* Breadcrumb */}
                    <nav className="flex items-center gap-2 text-[13px] font-normal text-slate-500 mb-8">
                        <a href="/" className="hover:text-[#005a9c] underline underline-offset-4">Home</a>
                        <span>&gt;</span>
                        <span className="text-slate-600">{title}</span>
                    </nav>

                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
                        {/* Left Content */}
                        <div className="w-full lg:w-[60%] space-y-10">
                            {/* ISO Badge */}
                            <div className="inline-flex items-center gap-2 bg-[#f0f7ff] border border-blue-100 rounded-full px-4 py-2 shadow-sm">
                                <div className="bg-[#005a9c] p-1 rounded-full text-white">
                                    <ShieldCheck size={14} />
                                </div>
                                <span className="text-[13px] font-bold text-[#072b47]">
                                    Only ISO 27001 Certified Platform in 🇮🇳
                                </span>
                            </div>

                            <h1 className="text-4xl lg:text-5.5xl font-semibold text-[#072b47] leading-[1.2] tracking-tight max-w-2xl">
                                {hero.mainTitle}
                            </h1>

                            <ul className="space-y-6">
                                {hero.bulletPoints.map((point, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <div className="shrink-0 mt-1 bg-white p-0.5">
                                            <Check size={18} className="text-[#005a9c] stroke-[3]" />
                                        </div>
                                        <span className="text-[17px] text-slate-700 font-medium leading-relaxed">
                                            {point}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {/* Testimonial Card */}
                            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm max-w-lg mt-12">
                                <p className="text-[15px] text-slate-600 italic leading-relaxed mb-6">
                                    "{hero.testimonial.text} <span className="text-[#005a9c] font-bold cursor-pointer hover:underline">see more...</span>"
                                </p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <img src={hero.testimonial.avatar} alt={hero.testimonial.author} className="w-10 h-10 rounded-full bg-slate-100" />
                                        <div>
                                            <h4 className="text-[15px] font-bold text-[#072b47]">{hero.testimonial.author}</h4>
                                        </div>
                                    </div>
                                    {hero.testimonial.verified && (
                                        <div className="flex items-center gap-1.5 bg-green-50 px-3 py-1 rounded-full border border-green-100">
                                            <Check size={12} className="text-green-600 stroke-[3]" />
                                            <span className="text-[11px] font-bold text-green-700 uppercase tracking-widest">Verified</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Right Form Card */}
                        <div className="w-full lg:w-[35%] relative">
                            {/* Offer Banner */}
                            <div className="absolute -top-4 -left-4 z-20 overflow-visible">
                                <div className="bg-[#072b47] text-white rounded-lg p-3 shadow-xl transform -rotate-1 relative group cursor-pointer hover:rotate-0 transition-all duration-300">
                                    <div className="text-[14px] font-bold tracking-tight px-4 leading-tight">
                                        February <br />
                                        <span className="text-[12px] font-medium text-yellow-400">Offer Sale</span>
                                    </div>
                                    {/* Small floating icons like in image */}
                                    <div className="absolute -top-2 -right-2 text-yellow-400">
                                        <div className="w-4 h-4 rounded-full bg-yellow-400 opacity-20 blur-sm" />
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.12)] border border-slate-100 p-8 pt-10">
                                <h3 className="text-2xl font-semibold text-[#072b47] mb-8 leading-tight text-center">
                                    Get Started
                                </h3>

                                <form className="space-y-5">
                                    <div className="relative">
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            className="w-full px-5 py-4 rounded-xl border border-slate-300 bg-slate-50 focus:border-blue-500 focus:bg-white outline-none transition-all placeholder:text-slate-400 text-slate-700 font-medium"
                                        />
                                    </div>
                                    <div className="relative">
                                        <input
                                            type="tel"
                                            placeholder="Mobile Number"
                                            className="w-full px-5 py-4 rounded-xl border border-slate-300 bg-slate-50 focus:border-blue-500 focus:bg-white outline-none transition-all placeholder:text-slate-400 text-slate-700 font-medium"
                                        />
                                    </div>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder="City/Pincode"
                                            className="w-full px-5 py-4 rounded-xl border border-slate-300 bg-slate-50 focus:border-blue-500 focus:bg-white outline-none transition-all placeholder:text-slate-400 text-slate-700 font-medium"
                                        />
                                    </div>
                                    <div className="relative group">
                                        <select
                                            className="w-full appearance-none bg-slate-50 border border-slate-300 px-5 py-4 rounded-xl text-slate-700 text-[14px] font-medium outline-none transition-all focus:border-blue-500"
                                        >
                                            <option value="">Language</option>
                                            <option value="English">English</option>
                                            <option value="Hindi">Hindi</option>
                                            <option value="Tamil">Tamil</option>
                                        </select>
                                        <ChevronDown size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                                    </div>

                                    <div className="flex items-center justify-between py-2 border-t border-slate-50 mt-4">
                                        <span className="text-[13px] font-medium text-slate-500 flex items-center gap-2">
                                            Get easy updates through <MessageCircle size={16} className="text-green-500 fill-green-500" /> WhatsApp
                                        </span>
                                        <div className="relative inline-flex items-center cursor-pointer">
                                            <input type="checkbox" className="sr-only peer" defaultChecked />
                                            <div className="w-11 h-6 bg-slate-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-[#072b47] text-white font-semibold text-[17px] py-4 rounded-xl hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 active:scale-95 mt-4"
                                    >
                                        Book An Appointment Now
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Sticky Tab Navigation */}
            <div className={`sticky top-16 z-50 bg-white border-b border-slate-100 shadow-sm transition-all duration-300`}>
                <div className="max-w-[1440px] mx-auto px-4 md:px-6">
                    <div className="flex items-center gap-8 overflow-x-auto no-scrollbar py-2">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => scrollToSection(tab.id)}
                                className={`whitespace-nowrap py-4 px-2 text-[15px] font-semibold transition-all relative ${activeTab === tab.id ? 'text-[#005a9c]' : 'text-slate-500 hover:text-slate-800'
                                    }`}
                            >
                                {tab.label}
                                {activeTab === tab.id && (
                                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#f1a134] rounded-full" />
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* 3. Content Sections */}
            <div className="py-20 bg-white">
                <div className="max-w-[1440px] mx-auto px-4 md:px-6">
                    <div className="flex flex-col lg:flex-row gap-16 items-start">
                        {/* Main Content Area */}
                        <div className="w-full space-y-32">
                            {/* Overview Section */}
                            <section id="overview" ref={sectionRefs.overview} className="space-y-10 scroll-mt-32">
                                <div className="space-y-8 animate-fadeIn">
                                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] tracking-tight border-l-4 border-[#f1a134] pl-6">
                                        {sections.overview.title}
                                    </h2>
                                    <div className="flex flex-col lg:flex-row gap-12 items-start justify-between">
                                        <div className="flex-1 space-y-6">
                                            {sections.overview.content.map((p, i) => (
                                                <p key={i} className="text-[17px] text-slate-600 leading-[1.8] font-normal">
                                                    {p}
                                                </p>
                                            ))}
                                        </div>
                                        {sections.overview.image && (
                                            <div className="lg:w-[450px] w-full shrink-0">
                                                <div className="rounded-3xl overflow-hidden">
                                                    <img
                                                        src={sections.overview.image}
                                                        alt={sections.overview.title}
                                                        className="w-full h-auto object-cover"
                                                    />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </section>

                            {/* Types Section */}
                            {sections.types && (
                                <section id="types" ref={sectionRefs.types} className="space-y-10 scroll-mt-32">
                                    <div className="space-y-8 animate-fadeIn">
                                        <div className="flex flex-col lg:flex-row gap-12 items-start justify-between mb-4">
                                            <div className="flex-1 space-y-10">
                                                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] tracking-tight border-l-4 border-[#f1a134] pl-6">
                                                    {sections.types.title}
                                                </h2>
                                                {sections.types.introduction && (
                                                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                                                        {sections.types.introduction}
                                                    </p>
                                                )}
                                            </div>
                                            {sections.types.image && (
                                                <div className="lg:w-[300px] w-full shrink-0 mt-2">
                                                    <div className="rounded-2xl overflow-hidden">
                                                        <img
                                                            src={sections.types.image}
                                                            alt={sections.types.title}
                                                            className="w-full h-auto object-cover"
                                                        />
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            {sections.types.items.map((item, i) => (
                                                <div key={i} className="group p-8 bg-white rounded-3xl border border-slate-100 hover:shadow-xl hover:shadow-[#005a9c]/5 transition-all duration-300">
                                                    <div className="mb-6 bg-[#f0f7ff] w-12 h-12 rounded-2xl flex items-center justify-center text-[#005a9c] group-hover:bg-[#005a9c] group-hover:text-white transition-colors duration-300">
                                                        <ShieldCheck size={24} />
                                                    </div>
                                                    <h4 className="text-xl font-bold text-[#072b47] mb-3">{item.title}</h4>
                                                    <p className="text-slate-600 leading-relaxed text-[15px] underline underline-offset-4 decoration-blue-100 decoration-1">{item.description}</p>
                                                    {item.example && (
                                                        <div className="mt-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                                                            <span className="text-[13px] font-bold text-[#005a9c] uppercase tracking-wider block mb-1">Example:</span>
                                                            <p className="text-[14px] text-slate-500 italic">{item.example}</p>
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </section>
                            )}

                            {/* When to File Section */}
                            {sections.whenToFile && (
                                <section id="when-to-file" ref={sectionRefs['when-to-file']} className="space-y-10 scroll-mt-32">
                                    <div className="space-y-8 animate-fadeIn">
                                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] tracking-tight border-l-4 border-[#f1a134] pl-6">
                                            {sections.whenToFile.title}
                                        </h2>
                                        <div className="flex flex-col lg:flex-row gap-12 items-start justify-between">
                                            <div className="flex-1 space-y-8">
                                                <p className="text-[17px] text-slate-600 leading-[1.8]">
                                                    {sections.whenToFile.content}
                                                </p>
                                                <div className="grid grid-cols-1 gap-6">
                                                    {sections.whenToFile.parameters.map((param, i) => (
                                                        <div key={i} className="flex gap-6 p-6 bg-slate-50 rounded-2xl border border-slate-100 items-start">
                                                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm border border-slate-50">
                                                                <Check className="text-[#005a9c]" size={20} />
                                                            </div>
                                                            <div>
                                                                <h4 className="text-lg font-bold text-[#072b47] mb-1">{param.title}</h4>
                                                                <p className="text-slate-600">{param.desc}</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            {sections.whenToFile.image && (
                                                <div className="lg:w-[450px] w-full shrink-0">
                                                    <div className="rounded-3xl overflow-hidden">
                                                        <img
                                                            src={sections.whenToFile.image}
                                                            alt={sections.whenToFile.title}
                                                            className="w-full h-auto object-cover"
                                                        />
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </section>
                            )}

                            {/* Process Section */}
                            <section id="process" ref={sectionRefs.process} className="space-y-10 scroll-mt-32">
                                <div className="space-y-10 animate-fadeIn">
                                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] tracking-tight border-l-4 border-[#f1a134] pl-6">
                                        {sections.process.title}
                                    </h2>
                                    {sections.process.introduction && (
                                        <p className="text-[17px] text-slate-600 leading-relaxed">
                                            {sections.process.introduction}
                                        </p>
                                    )}
                                    <div className="space-y-6 relative before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-0.5 before:bg-blue-100">
                                        {sections.process.steps.map((step, i) => (
                                            <div key={i} className="relative pl-14 group">
                                                <div className="absolute left-0 top-0 w-10 h-10 bg-white border-2 border-[#f0f7ff] rounded-full flex items-center justify-center text-[#005a9c] font-bold text-sm group-hover:bg-[#005a9c] group-hover:text-white group-hover:border-[#005a9c] transition-all duration-300 z-10">
                                                    {i + 1}
                                                </div>
                                                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 group-hover:bg-white group-hover:shadow-md transition-all duration-300">
                                                    <h4 className="text-xl font-bold text-[#072b47] mb-2">{step.title}</h4>
                                                    <p className="text-slate-600 leading-relaxed text-[15px]">{step.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>

                            {/* CTA Section */}
                            <div className="relative overflow-hidden rounded-[2.5rem] bg-[#072b47] p-10 lg:p-16 text-white text-center">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

                                <div className="relative z-10 space-y-8 max-w-3xl mx-auto">
                                    <h3 className="text-3xl lg:text-4xl font-bold leading-tight">
                                        Ready to Protect Your Reputation?
                                    </h3>
                                    <p className="text-blue-100 text-lg opacity-90">
                                        Contact our expert defamation lawyers today for a confidential evaluation of your case.
                                    </p>
                                    <div className="flex flex-wrap justify-center gap-4">
                                        <button className="bg-white text-[#072b47] px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all active:scale-95 flex items-center gap-2">
                                            Get Free Consultation <ArrowRight size={20} />
                                        </button>
                                        <button className="bg-transparent border-2 border-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all">
                                            View Pricing
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Why Choose Section */}
                            <section id="why-choose" ref={sectionRefs['why-choose']} className="space-y-10 scroll-mt-32">
                                <div className="space-y-8 animate-fadeIn">
                                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] tracking-tight border-l-4 border-[#f1a134] pl-6">
                                        {sections.whyChoose.title}
                                    </h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {sections.whyChoose.reasons.map((reason, i) => (
                                            <div key={i} className="flex items-start gap-4 p-6 bg-blue-50/50 rounded-2xl border border-blue-100/50">
                                                <div className="shrink-0 mt-1 bg-[#005a9c] rounded-full p-1">
                                                    <Check size={14} className="text-white" />
                                                </div>
                                                <p className="text-[17px] text-slate-700 font-medium leading-relaxed">{reason}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>

                            {/* FAQs Section */}
                            <section id="faqs" ref={sectionRefs.faqs} className="space-y-12 scroll-mt-32">
                                <div className="flex flex-col lg:flex-row gap-12 items-start">
                                    {/* Sticky Left Image and Title */}
                                    <div className="w-full lg:w-[40%] sticky top-32 space-y-8">
                                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] tracking-tight border-l-4 border-[#f1a134] pl-6">
                                            {sections.faqs.title}
                                        </h2>
                                        <div className="relative rounded-3xl overflow-hidden">
                                            <img
                                                src={sections.overview.image || "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"}
                                                alt="Legal Support"
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#072b47]/80 to-transparent flex flex-col justify-end p-8">
                                                <p className="text-white/90 text-[15px] font-medium italic">
                                                    "Providing expert legal representation for high-stakes cases nationwide."
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Questions (Accordion) */}
                                    <div className="w-full lg:w-[60%] space-y-4">
                                        {sections.faqs.items.map((item, i) => (
                                            <div
                                                key={i}
                                                className={`group border rounded-3xl overflow-hidden transition-all duration-300 ${openFaq === i ? 'border-[#f1a134]/50 bg-[#f1a134]/5' : 'border-slate-200 bg-white hover:border-[#f1a134]/30'}`}
                                            >
                                                <button
                                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                                    className="w-full p-6 lg:p-8 flex justify-between items-center text-left"
                                                >
                                                    <span className={`font-bold text-lg transition-colors ${openFaq === i ? 'text-[#005a9c]' : 'text-[#072b47]'}`}>
                                                        {item.question}
                                                    </span>
                                                    <ChevronDown className={`text-slate-400 transition-transform duration-300 ${openFaq === i ? 'rotate-180 text-[#005a9c]' : 'group-hover:text-[#005a9c]'}`} />
                                                </button>
                                                <div
                                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === i ? 'max-h-[500px]' : 'max-h-0'}`}
                                                >
                                                    <div className="px-8 pb-8 text-slate-600 leading-relaxed text-[16px] border-t border-slate-100 mt-2 pt-6">
                                                        {item.answer}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default LitigationLayout;
