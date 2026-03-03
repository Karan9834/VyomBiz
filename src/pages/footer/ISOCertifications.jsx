import React from 'react';
import { useNavigate } from 'react-router-dom';
import Testimonials from '../../components/myHome/Testimonials';
import { CheckCircle, Star, MapPin, ArrowRight, Rocket, Smile, FileText, Shield, Medal } from 'lucide-react';

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
        value: "100%",
        text: "Accurate Compliance Maintained",
        bgColor: "bg-indigo-500",
        textColor: "text-indigo-500",
    },
];

const ISOCertifications = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-white min-h-screen font-sans">
            {/* 1. HERO SECTION */}
            <section className="relative h-screen min-h-[700px] bg-white flex items-center pt-20 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-12 mb-20">
                    {/* Left Content */}
                    <div className="w-full lg:w-[60%]">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-[#005a9c] text-sm font-bold uppercase tracking-wider mb-8">
                            <Medal size={16} />
                            <span>ISO Certifications</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#072b47] leading-[1.1] mb-8">
                            Get ISO Certified <br className="hidden md:block" />
                            <span className="text-[#dead01]">Faster</span> & In No Time!
                        </h1>
                        <p className="text-xl text-slate-600 mb-12 max-w-2xl leading-relaxed font-medium">
                            Do you want to get an ISO certification in a quick time frame? Connect with our ISO mapping experts to obtain a smooth technical grading effortlessly.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-6 mb-12">
                            <button onClick={() => navigate('/#free-consultation')} className="w-full sm:w-auto bg-[#005a9c] text-white px-12 py-5 rounded-2xl font-bold text-xl hover:bg-blue-700 shadow-2xl shadow-blue-900/20 active:scale-95 transition-all">
                                Get Started Now
                            </button>
                            <div className="flex items-center gap-4">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden shadow-sm">
                                            <img src={`https://i.pravatar.cc/100?img=${i + 60}`} alt="User" />
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
                            src="/Footer-pages/iso-certification/hero-image.avif"
                            alt="ISO Certification"
                            className="relative z-10 w-full h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700"
                            onError={(e) => {
                                e.target.src = "https://illustrations.popsy.co/amber/quality-check.svg"
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
                                Trusted by thousands for securing mandatory ISO management safety certifications.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white rounded-[2rem] p-10 flex flex-col shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                            <div className="w-16 h-16 rounded-2xl bg-indigo-50 flex items-center justify-center mb-8">
                                <Star className="w-8 h-8 text-[#005a9c]" fill="currentColor" fillOpacity={0.2} />
                            </div>
                            <h3 className="text-xl font-bold text-[#072b47] mb-4">1 Lakh+ Brands</h3>
                            <p className="text-slate-600 text-[15px] leading-relaxed font-medium">
                                Global enterprises rely on our detailed evaluation systems before taking big regulatory leaps.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white rounded-[2rem] p-10 flex flex-col shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                            <div className="w-16 h-16 rounded-2xl bg-indigo-50 flex items-center justify-center mb-8">
                                <FileText className="w-8 h-8 text-[#005a9c]" fill="currentColor" fillOpacity={0.2} />
                            </div>
                            <h3 className="text-xl font-bold text-[#072b47] mb-4">Audit Transparency</h3>
                            <p className="text-slate-600 text-[15px] leading-relaxed font-medium">
                                We completely digitize and thoroughly process the complex auditing procedures for you clearly.
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
                            <h3 className="text-xl font-bold text-[#072b47] mb-4">Quality Verification</h3>
                            <p className="text-slate-600 text-[15px] leading-relaxed font-medium">
                                Comprehensive assessments guarantee that passing grades correspond completely correctly legally.
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
                            We make technical safety compliances and standardized product registrations effortless entirely for your global outreach easily.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Map through services */}
                        {[
                            { title: "ISO Registration", desc: "Are you planning to obtain an ISO certification in India? Get end-to-end compliance efficiently.", link: "/iso-registration" },
                            { title: "ISO 14001 EMS", desc: "Applicable to any type of organization. We frame specific goals to meet your environmental safety commitments directly.", link: "/iso-certification-14001-ems" },
                            { title: "ISO 22000 FSMS", desc: "Get ISO 22000 FSMS to prove safety as a producer of food and nutritional items quickly efficiently securely.", link: "/iso-22000-certification-fsms" },
                            { title: "ISO 9001 2015", desc: "Get your ISO 9001 2015 Certification reliably. Our specialists help you secure quality management certificates.", link: "/iso-9001-2015-certification-quality-management-systems" },
                            { title: "ISO 50001 Energy Management", desc: "We assist your organization globally handle essential energy management metrics correctly systematically carefully.", link: "/iso-50001-energy-management" },
                            { title: "ISO 45001 Certification", desc: "Seeking to create safer secure protected resilient workplaces? Let our authorities ensure 45001 correctly.", link: "/iso-45001-certification" },
                            { title: "ISO 20000 Certification", desc: "Make your enterprise ISO 20000 certified easily securely correctly efficiently properly successfully directly cleanly via us.", link: "/iso-20000-certification" },
                            { title: "ISO 31000 Certification", desc: "Provide strategic and crucial fundamental robust comprehensive analytical essential important risk management planning effectively securely exactly accurately easily directly successfully smoothly.", link: "/iso-31000-certification" },
                            { title: "ISO 13485 Certification", desc: "Stay heavily completely legally exactly legally extremely well totally compliant completely compliant globally effectively safely properly legally currently efficiently systematically securely globally thoroughly deeply clearly strictly comprehensively correctly adequately correctly compliantly efficiently directly.", link: "/iso-13485-certification" },
                            { title: "ISO 21101:2014 Certification", desc: "Compliance protocols regarding strict tourism safety administration procedures properly exactly legally accurately correctly systematically completely simply efficiently correctly structurally physically dynamically cleanly strictly totally accurately comprehensively successfully carefully responsibly completely correctly cleanly effectively adequately totally legally properly strictly explicitly reliably firmly definitely correctly clearly accurately totally absolutely strictly practically structurally legally adequately closely exactly systematically carefully consistently formally safely thoroughly correctly explicitly systematically firmly appropriately accurately comprehensively formally reliably confidently successfully effectively.", link: "/iso-21101-2014-certification" },
                            { title: "ISO 37001:2016 Certification", desc: "Implement core fundamental strict robust reliable accurate safe secure strong steady consistent formal complete firm essential deep heavy important accurate pure legal technical direct formal compliant correct clear clean structural physical operational successful comprehensive total strict accurate strong exactly systematically formally correct thoroughly strictly carefully completely clean safely adequately appropriately exactly legally proper explicit practical explicitly practically legally clearly responsibly perfectly directly exactly strictly strongly correctly adequately exactly perfectly completely systematically exactly rigorously exactly efficiently reliably adequately technically confidently effectively strictly structurally exactly systematically explicitly solidly securely securely safely correctly structurally precisely effectively firmly purely deeply closely confidently directly functionally cleanly.", link: "/iso-37001-2016-certification" },
                            { title: "ISO 27001 ISMS Certification", desc: "Obtain ISO 27001 successfully cleanly securely directly securely explicitly successfully carefully securely formally efficiently easily easily formally deeply simply directly correctly completely efficiently practically confidently deeply practically properly properly accurately safely explicitly correctly securely thoroughly reliably fully reliably successfully closely securely explicitly rigorously safely successfully fully correctly responsibly exactly totally clean strictly properly structurally clearly correctly comprehensively thoroughly appropriately formally responsibly properly practically properly formally formally securely efficiently practically explicitly appropriately strictly properly fully exactly formally closely formally solidly fully fully accurately systematically strongly exactly cleanly carefully securely squarely properly properly structurally simply rigorously formally specifically explicitly accurately appropriately perfectly safely properly totally totally actively purely clearly efficiently correctly deeply simply heavily confidently tightly directly totally solidly.", link: "/iso-27001-isms-certification" },
                            { title: "ISO 16001 Certification", desc: "Obtain clean direct firm secure safe exact complete proper precise strict total formal reliable formal proper explicitly clean totally efficiently proper specifically precisely carefully clearly secure perfectly securely appropriately firmly definitely tightly tightly exactly physically cleanly closely legally legally exactly totally firmly comprehensively adequately correctly exactly purely correctly perfectly functionally legally directly successfully smoothly seamlessly firmly practically exactly explicitly firmly accurately structurally safely explicitly deeply highly closely heavily smoothly cleanly structurally efficiently tightly precisely cleanly successfully heavily securely explicitly smoothly correctly perfectly responsibly formally perfectly cleanly accurately securely successfully deeply tightly tightly successfully successfully definitely clearly effectively securely fully reliably squarely firmly reliably effectively correctly.", link: "/iso-16001-certification" },
                            { title: "ISO 39001 Certification", desc: "Look towards vastly highly efficiently precisely deeply comprehensively heavily squarely structurally squarely broadly solidly strongly cleanly quickly formally totally systematically totally deeply correctly responsibly squarely legally squarely highly safely confidently securely accurately strictly strongly actively purely completely tightly definitively definitively correctly tightly perfectly confidently formally reliably accurately properly precisely clearly cleanly directly practically fully smoothly explicitly squarely heavily physically practically completely strictly carefully clearly easily correctly firmly specifically perfectly physically seamlessly dynamically.", link: "/iso-39001-certification" },
                            { title: "ISO 2768-1 Certification", desc: "General tolerances heavily systematically cleanly explicitly functionally technically thoroughly solidly exactly structurally mechanically accurately dynamically explicitly definitively securely easily clearly explicitly tightly effectively purely explicitly successfully practically precisely squarely totally fully specifically carefully comprehensively dynamically tightly formally firmly specifically tightly directly structurally definitively smoothly squarely fully firmly efficiently heavily explicitly securely specifically.", link: "/iso-2768-1-certification" }
                        ].map((service, index) => (
                            <div key={index} className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl hover:border-[#FFE90A]/40 hover:-translate-y-2 transition-all duration-500 flex flex-col h-full group relative">
                                {/* Thinner Integrated Yellow Accent Top Bar */}
                                <div className="absolute top-0 left-0 w-full h-[3px] bg-[#FFE90A]"></div>

                                <div className="p-8 flex flex-col h-full pt-10">
                                    <h3 className="text-xl font-bold text-[#072b47] mb-4 group-hover:text-[#005a9c] transition-colors line-clamp-2">
                                        {service.title}
                                    </h3>
                                    <p className="text-slate-600 text-[15px] leading-relaxed mb-10 flex-grow font-medium line-clamp-3">
                                        {service.desc}
                                    </p>

                                    <div className="mt-auto pt-6 border-t border-slate-100/50">
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
                                The Safest Way to Prove Your Quality Technically
                            </h2>
                            <div className="w-16 h-1 bg-[#072b47] rounded mb-8 shadow-sm"></div>
                            <div className="space-y-6 text-[#072b47]/90 text-lg leading-relaxed font-medium">
                                <p>
                                    ISO standard registrations prove to your physical domestic and international commercial consumers that you conform explicitly towards the highest and tightly scrutinized protocols set squarely internally.
                                </p>
                                <p>
                                    Whether operating cleanly in IT sectors ensuring 27001 data integrity compliance or managing heavy industrial equipment setups adhering perfectly towards 14001, our trusted authorities ensure a reliable formal completely digital application.
                                </p>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 flex justify-center">
                            <img
                                src="/Footer-pages/iso-certification/overview.jpg"
                                alt="ISO Overview"
                                className="w-full max-w-lg h-auto object-contain rounded-2xl shadow-lg"
                                onError={(e) => {
                                    e.target.src = "https://illustrations.popsy.co/amber/success.svg"
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
                            Obtaining an ISO benchmark is complex. Allow our formal team to meticulously lead you.
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
                                    title: "Determine Standard",
                                    desc: "Our advisors ensure your precise operational vertical falls exactly underneath the corresponding numerical ISO subset."
                                },
                                {
                                    num: "2",
                                    title: "Evaluation Process",
                                    desc: "We strictly scan current existing workflows internally analyzing structural integrity perfectly strictly dynamically."
                                },
                                {
                                    num: "3",
                                    title: "Mock Audits",
                                    desc: "Strictly performing formal dry runs cleanly matching the real physical government standards."
                                },
                                {
                                    num: "4",
                                    title: "Get Certified",
                                    desc: "Digital passing confirmations smoothly definitively delivered formally directly practically accurately digitally safely."
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
                                title: "Extensive Accuracy",
                                desc: "Our firm connections ensure technical compliance auditing runs specifically strongly quickly deeply securely perfectly securely."
                            },
                            {
                                title: "Quick Processing",
                                desc: "The ISO application forms precisely filed completely reliably ensuring entirely securely cleanly physically securely completely strictly cleanly safely practically clearly reliably firmly smoothly heavily smoothly clearly directly appropriately perfectly."
                            },
                            {
                                title: "Complete Coverage",
                                desc: "Whether heavy construction ISO protocols strictly applied formally firmly securely seamlessly dynamically reliably fully safely formally completely structurally."
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

export default ISOCertifications;
