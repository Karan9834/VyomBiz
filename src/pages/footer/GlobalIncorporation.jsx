import React from 'react';
import { useNavigate } from 'react-router-dom';
import Testimonials from '../../components/myHome/Testimonials';
import { CheckCircle, Star, MapPin, ArrowRight, Rocket, Smile, PieChart, Shield, Globe } from 'lucide-react';

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
        value: "80+",
        text: "Countries Served",
        bgColor: "bg-green-500",
        textColor: "text-green-500",
    },
    {
        id: 4,
        value: "99%",
        text: "Client Satisfaction",
        bgColor: "bg-indigo-500",
        textColor: "text-indigo-500",
    },
];

const GlobalIncorporation = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-white min-h-screen font-sans">
            {/* 1. HERO SECTION */}
            <section className="relative h-screen min-h-[700px] bg-white flex items-center pt-20 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-12 mb-20">
                    {/* Left Content */}
                    <div className="w-full lg:w-[60%]">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-[#005a9c] text-sm font-bold uppercase tracking-wider mb-8">
                            <Globe size={16} />
                            <span>Global Incorporation</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#072b47] leading-[1.1] mb-8">
                            Global Company <br className="hidden md:block" />
                            <span className="text-[#dead01]">Incorporation</span> Services!
                        </h1>
                        <p className="text-xl text-slate-600 mb-12 max-w-2xl leading-relaxed font-medium">
                            We offer global incorporation services with expert guidance on company setup, legal requirements, and compliance across international jurisdictions worldwide.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-6 mb-12">
                            <button className="w-full sm:w-auto bg-[#005a9c] text-white px-12 py-5 rounded-2xl font-bold text-xl hover:bg-blue-700 shadow-2xl shadow-blue-900/20 active:scale-95 transition-all">
                                Get Started Now
                            </button>
                            <div className="flex items-center gap-4">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden shadow-sm">
                                            <img src={`https://i.pravatar.cc/100?img=${i + 20}`} alt="User" />
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
                            src="/Footer-pages/global-incorp/hero-image.avif"
                            alt="Global Company Incorporation"
                            className="relative z-10 w-full h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700"
                            onError={(e) => {
                                e.target.src = "https://illustrations.popsy.co/amber/business-deal.svg"
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
                                Rated at 4.9 by 30,000+ customers globally who successfully launched businesses.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white rounded-[2rem] p-10 flex flex-col shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                            <div className="w-16 h-16 rounded-2xl bg-indigo-50 flex items-center justify-center mb-8">
                                <Star className="w-8 h-8 text-[#005a9c]" fill="currentColor" fillOpacity={0.2} />
                            </div>
                            <h3 className="text-xl font-bold text-[#072b47] mb-4">1 Lakh+ Global Brands</h3>
                            <p className="text-slate-600 text-[15px] leading-relaxed font-medium">
                                1 Lakh+ global brands trust us with their critical corporate formations.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white rounded-[2rem] p-10 flex flex-col shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                            <div className="w-16 h-16 rounded-2xl bg-indigo-50 flex items-center justify-center mb-8">
                                <MapPin className="w-8 h-8 text-[#005a9c]" fill="currentColor" fillOpacity={0.2} />
                            </div>
                            <h3 className="text-xl font-bold text-[#072b47] mb-4">Worldwide Network</h3>
                            <p className="text-slate-600 text-[15px] leading-relaxed font-medium">
                                Robust international legal capabilities throughout 80+ international jurisdictions.
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
                            <h3 className="text-xl font-bold text-[#072b47] mb-4">Secure & Confidential</h3>
                            <p className="text-slate-600 text-[15px] leading-relaxed font-medium">
                                Privacy and absolute confidentiality for corporate structures around the globe.
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
                            We make technical compliance and global certifications effortless and convenient.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Map through services */}
                        {[
                            { title: "Company Registration USA", desc: "Are you seeking company registration in USA but facing hurdles? Join over 4,000 global entrepreneurs who’ve successfully stepped into the US market.", link: "/usa-incorporation" },
                            { title: "Company Registration Mauritius", desc: "Are you an entrepreneur looking to register your business in Mauritius? Get expert assistance for company registration in Mauritius and beyond.", link: "/company-registration-mauritius" },
                            { title: "Company Registration Dubai", desc: "Tired of tedious and complex process? At our gateway, we provide stress-free company formation services with minimum bureaucratic steps.", link: "/dubai-company-setup" },
                            { title: "Company Registration France", desc: "Set up a strong business presence in the 7th largest economy of the world. Join 3000+ happy clients with company registration in France.", link: "/france-incorporation" },
                            { title: "Company Registration Singapore", desc: "Looking to start a business in Singapore? We provide stress-free company registration at the lowest cost with top-tier professional guidance.", link: "/singapore-incorporation" },
                            { title: "Company Registration Hong Kong", desc: "Are you seeking company registration in Hong Kong? We have successfully assisted in 1000+ business registration in Hong Kong. Let our experts handle the rest.", link: "/hong-kong-incorporation" },
                            { title: "Company Registration UK", desc: "Connect with us to set up your business in the UK, which is ranked 6th in the World Bank Ease of Doing Business index.", link: "/uk-incorporation" },
                            { title: "Company Registration Poland", desc: "Looking for a business setup in Poland? Simplify your process of company registration in Poland, a central location offering exceptional growth.", link: "/poland-incorporation" },
                            { title: "Company Registration Germany", desc: "Are you planning for a business setup in Germany? Partner with us for easy, quick, and affordable company registration in Germany.", link: "/germany-incorporation" },
                            { title: "Company Registration Japan", desc: "Looking for expert guidance for company registration in Japan? Book an appointment with consultants having 10+ years of experience.", link: "/japan-incorporation" },
                            { title: "Company Registration Canada", desc: "Are you planning to register your dream business in Canada? Our experts will help you with company registration in Canada quickly.", link: "/canada-incorporation" },
                            { title: "Company Registration Russia", desc: "Simplify your business setup in the strategically located destination between Europe and Asia through seamless company registration in Russia.", link: "/russia-incorporation" },
                            { title: "Company Registration Australia", desc: "Thinking of starting your journey in Australia? With its stable economy and business-friendly environment, Australia is the perfect location.", link: "/australia-incorporation" },
                            { title: "Company Registration New Zealand", desc: "Are you ready for company registration in New Zealand? We will help you register your company, file your taxes, and reduce compliance burdens.", link: "/new-zealand-incorporation" },
                            { title: "Company Registration South Africa", desc: "Do you wish to register and grow your business in South Africa, but are unsure about challenges? Let us be your dedicated compliance partner.", link: "/south-africa-incorporation" }
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
                                Easiest way to mining your Business globally
                            </h2>
                            <div className="w-16 h-1 bg-[#072b47] rounded mb-8 shadow-sm"></div>
                            <div className="space-y-6 text-[#072b47]/90 text-lg leading-relaxed font-medium">
                                <p>
                                    We are highly focused on business services globally and want to lead positively worldwide.
                                    Global corporation setups bring unparalleled legitimacy to a brand and facilitate faster connections with international customer networks.
                                </p>
                                <p>
                                    Whether it is setting up an offshore corporate entity, seeking banking support overseas, or understanding tax rules in a foreign regime, our team provides 360-degree consulting and regulatory guidance to secure your worldwide corporate footprints seamlessly.
                                </p>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 flex justify-center">
                            <img
                                src="/Footer-pages/global-incorp/overview.jpg"
                                alt="Global Overview"
                                className="w-full max-w-lg h-auto object-contain rounded-2xl shadow-lg"
                                onError={(e) => {
                                    e.target.src = "https://illustrations.popsy.co/amber/keynote-presentation.svg"
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
                            Follow these simple steps to ensure your global branches are correctly formed without any legal hassle.
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
                                    title: "Find Suitable Entity",
                                    desc: "Our advisors evaluate your business model to pick the most favorable legal entity overseas."
                                },
                                {
                                    num: "2",
                                    title: "Document Collation",
                                    desc: "Provide standard KYC materials and relevant business descriptions quickly."
                                },
                                {
                                    num: "3",
                                    title: "Filing and Registration",
                                    desc: "We submit applications to the local commercial registries and handle queries."
                                },
                                {
                                    num: "4",
                                    title: "Get Confirmation",
                                    desc: "Receive incorporation certificates and business setup approval directly to your mail."
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
                                title: "Verified Experts",
                                desc: "Our teams have successfully executed thousands of international formations and licenses."
                            },
                            {
                                title: "Worldwide Reach",
                                desc: "No boundaries constraint our network. We enable 1 Lakh brands locally and abroad."
                            },
                            {
                                title: "Legal Safety",
                                desc: "We focus heavily on shielding clients from foreign market vulnerabilities or legal loopholes."
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

export default GlobalIncorporation;
