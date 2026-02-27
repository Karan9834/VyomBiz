import React from 'react';
import { useNavigate } from 'react-router-dom';
import Testimonials from '../../components/myHome/Testimonials';
import { CheckCircle, Search, Star, MapPin, ArrowRight, Rocket, Smile, PieChart, Shield, Users, Heart } from 'lucide-react';

const stats = [
    {
        id: 1,
        value: "250+",
        text: "Highly Experienced Experts",
        bgColor: "bg-yellow-400",
        textColor: "text-yellow-500",
    },
    {
        id: 2,
        value: "2500+",
        text: "NGO Registered",
        bgColor: "bg-red-500",
        textColor: "text-red-500",
    },
    {
        id: 3,
        value: "9.5/10",
        text: "Customer Satisfaction Rate",
        bgColor: "bg-green-500",
        textColor: "text-green-500",
    },
    {
        id: 4,
        value: "50+",
        text: "Govt. Projects Approved",
        bgColor: "bg-indigo-500",
        textColor: "text-indigo-500",
    },
];

const NGOTrust = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-white min-h-screen font-sans">
            {/* 1. HERO SECTION */}
            <section className="relative h-screen min-h-[700px] bg-white flex items-center pt-20 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-12 mb-20">
                    {/* Left Content */}
                    <div className="w-full lg:w-[60%]">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-[#005a9c] text-sm font-bold uppercase tracking-wider mb-8">
                            <Heart size={16} />
                            <span>NGO Registration</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#072b47] leading-[1.1] mb-8">
                            Get Your Online NGO Registration in <br className="hidden md:block" />
                            <span className="text-[#dead01]">India</span> With Us!
                        </h1>
                        <p className="text-xl text-slate-600 mb-12 max-w-2xl leading-relaxed font-medium">
                            Registering NGO as Trust, Society, or Section 8 Company brings a perfect business structure including other non-profit groups. Contact us, if you want to open an NGO which can perform PAN India with flexibility.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-6 mb-12">
                            <button onClick={() => navigate('/#free-consultation')} className="w-full sm:w-auto bg-[#005a9c] text-white px-12 py-5 rounded-2xl font-bold text-xl hover:bg-blue-700 shadow-2xl shadow-blue-900/20 active:scale-95 transition-all">
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
                            src="/Footer-pages/ngo-trust/hero-image.avif"
                            alt="NGO Trust Registration"
                            className="relative z-10 w-full h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700"
                            onError={(e) => {
                                e.target.src = "https://illustrations.popsy.co/amber/volunteer.svg"
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
                                <Users className="w-8 h-8 text-[#005a9c]" fill="currentColor" fillOpacity={0.2} />
                            </div>
                            <h3 className="text-xl font-bold text-[#072b47] mb-4">250+ Highly Experienced Experts</h3>
                            <p className="text-slate-600 text-[15px] leading-relaxed font-medium">
                                We have a highly experienced and dedicated team of professionals ready to assist you.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white rounded-[2rem] p-10 flex flex-col shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                            <div className="w-16 h-16 rounded-2xl bg-indigo-50 flex items-center justify-center mb-8">
                                <div className="relative">
                                    <Heart className="w-8 h-8 text-[#005a9c]" />
                                    <div className="absolute top-1 right-1 w-2 h-2 bg-orange-400 rounded-full"></div>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-[#072b47] mb-4">2500+ NGO Registered</h3>
                            <p className="text-slate-600 text-[15px] leading-relaxed font-medium">
                                We have successfully registered more than 2500 NGOs successfully shaping the future.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white rounded-[2rem] p-10 flex flex-col shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                            <div className="w-16 h-16 rounded-2xl bg-indigo-50 flex items-center justify-center mb-8">
                                <Smile className="w-8 h-8 text-[#005a9c]" fill="currentColor" fillOpacity={0.2} />
                            </div>
                            <h3 className="text-xl font-bold text-[#072b47] mb-4">9.5/10 Satisfaction Rate</h3>
                            <p className="text-slate-600 text-[15px] leading-relaxed font-medium">
                                Our customer satisfaction is always our top priority, shown by an excellent rating.
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
                            <h3 className="text-xl font-bold text-[#072b47] mb-4">50+ Govt. Projects</h3>
                            <p className="text-slate-600 text-[15px] leading-relaxed font-medium">
                                With approvals of over 50 government projects effectively showcasing our reliability.
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
                            We make technical compliance certifications effortless and convenient.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Map through services */}
                        {[
                            {
                                title: "NGO Registration",
                                desc: "Looking for NGO registration online in India, but confused between trust, society, or Section 8? Get a completely guided registration process.",
                                link: "/ngo-registration"
                            },
                            {
                                title: "80G and 12A Registration",
                                desc: "Want donors to save 40% tax legally? 80G and 12A registration in India is hassle-free and smooth with us. Avail tax deductions.",
                                link: "/80g-12a-registration"
                            },
                            {
                                title: "Section 8 Company Registration",
                                desc: "Want fast Section 8 company registration in India? File application in minutes and enjoy quick approval with our expert consulting.",
                                link: "/section-8-company"
                            },
                            {
                                title: "Society Registration",
                                desc: "Struggling with legal formalities delaying your society registration? Check society name securely and successfully register with our help.",
                                link: "/society-registration"
                            },
                            {
                                title: "FCRA Registration",
                                desc: "Are you seeking foreign donations for your cause? Partner with us for a seamless FCRA registration process and explore international funding.",
                                link: "/fcra-registration"
                            },
                            {
                                title: "12AA Registration",
                                desc: "Tired of the complex 12AA registration process? Let our experts help you streamline your process and get compliance quickly.",
                                link: "/12aa-registration"
                            },
                            {
                                title: "Trust Registration",
                                desc: "Are you looking for expert-led support for trust registration in India? We help you stay 100% legally compliant and active.",
                                link: "/trust-registration"
                            },
                            {
                                title: "12AB Registration",
                                desc: "Are you worried about hurdles in the path of 12AB registration for your NGO? Get the 12AB certificate and enjoy proper approvals.",
                                link: "/12ab-registration"
                            },
                            {
                                title: "Strike Off Section 8 Companies",
                                desc: "Strike off refers to a process in which ROC removes the Company's name from the register safely with standard compliant procedures.",
                                link: "/strike-off-section-8-company"
                            },
                            {
                                title: "NGO CSR-1 Filing",
                                desc: "Ensure your NGO is eligible for CSR funding by seamlessly filing the mandatory Form CSR-1 with our expert guidance.",
                                link: "/csr-1-registration"
                            },
                            {
                                title: "NGO CSR Consultancy",
                                desc: "Get comprehensive consultation for your NGO to structure, strategize, and execute impactful corporate social responsibility initiatives.",
                                link: "/ngo-csr-consultancy"
                            },
                            {
                                title: "NGO Income Tax Advisory",
                                desc: "Navigate complex NGO tax regulations and optimize tax liabilities with our expert income tax advisory and planning services.",
                                link: "/ngo-income-tax-advisory"
                            },
                            {
                                title: "NGO Accounting",
                                desc: "Maintain transparent and compliant financial records with our specialized accounting and bookkeeping services tailored for NGOs.",
                                link: "/ngo-accounting"
                            },
                            {
                                title: "NGO Project Report",
                                desc: "Get detailed, professional project reports created to secure funding, showcase impact, and ensure project feasibility.",
                                link: "/ngo-project-report"
                            },
                            {
                                title: "Trust Annual Compliance",
                                desc: "Stay ahead of statutory deadlines and maintain active legal status with complete, hassle-free annual compliance solutions.",
                                link: "/trust-annual-compliance"
                            },
                            {
                                title: "NGO Darpan Registration",
                                desc: "Improve credibility and eligibility for government grants by easily registering your NGO on the NITI Aayog Darpan portal.",
                                link: "/darpan-registration"
                            },
                            {
                                title: "80G Registration",
                                desc: "Avail 50% tax exemption for your donors by registering your NGO exclusively under Section 80G of the Income Tax Act.",
                                link: "/80g-registration"
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

            {/* 4. AN OVERVIEW OF NGOS */}
            < section className="py-20 bg-[#FEF9C3]" >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#072b47] mb-6">
                                What is an NGO?
                            </h2>
                            <div className="w-16 h-1 bg-[#072b47] rounded mb-8 shadow-sm"></div>
                            <div className="space-y-6 text-[#072b47]/90 text-lg leading-relaxed font-medium">
                                <p>
                                    NGO or Non-Governmental Organisation is an association that is registered under the sanction of the Government & primarily works for the upliftment of society. The association has a clear & definite social program/cause, which it supports. The causes a Non-Governmental Organisation can support mat be cultural, social, education, or religious in nature.
                                </p>
                                <p>
                                    Commencing and running your NGO in India can be very tedious and difficult. So, to run a successful NGO in India, not only do you have to be good at marketing your cause, but you also need to be on top of the legal compliance involved in operating one. Therefore, one can determine that commencing an NGO in India requires adequate legal planning, a robust desire and a lot of hard work.
                                </p>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 flex justify-center">
                            <img
                                src="/Footer-pages/ngo-trust/ngo-overview.jpg"
                                alt="NGO Overview"
                                className="w-full max-w-lg h-auto object-contain rounded-2xl shadow-lg"
                                onError={(e) => {
                                    e.target.src = "https://illustrations.popsy.co/amber/student-going-to-school.svg"
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section >

            {/* 5. FEATURES & BENEFITS */}
            <section className="py-24 bg-slate-50/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-black text-[#072b47] mb-4">
                            Features & Benefits of NGO Registration
                        </h2>
                        <div className="w-24 h-1.5 bg-[#dead01] mx-auto rounded-full shadow-sm"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 max-w-5xl mx-auto">
                        {/* Features Card */}
                        <div className="bg-white rounded-3xl p-10 lg:p-12 border border-slate-200 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative group">
                            <div className="absolute -top-5 left-10 bg-[#005a9c] text-[#dead01] px-10 py-2.5 rounded-2xl font-black text-xs tracking-[0.2em] shadow-xl border-2 border-white uppercase">
                                FEATURES
                            </div>
                            <ul className="space-y-6 mt-8">
                                {[
                                    "Own set of rules, regulations & policies depending on their cause",
                                    "Vital role in international development, philanthropy, and aid",
                                    "Voluntary groups, created by like-minded people",
                                    "Generate funds through contributions & donations",
                                    "Not profit-making companies, helps in empowering society"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4 text-slate-700 font-bold text-[16px] leading-snug group/item">
                                        <div className="mt-1.5 w-2.5 h-2.5 rounded-full bg-[#dead01] shrink-0 shadow-[0_0_10px_rgba(222,173,1,0.5)] group-hover/item:scale-125 transition-transform"></div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Benefits Card */}
                        <div className="bg-white rounded-3xl p-10 lg:p-12 border border-slate-200 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative group">
                            <div className="absolute -top-5 left-10 bg-[#072b47] text-white px-10 py-2.5 rounded-2xl font-black text-xs tracking-[0.2em] shadow-xl border-2 border-white uppercase opacity-90">
                                BENEFITS
                            </div>
                            <ul className="space-y-6 mt-8">
                                {[
                                    "Trusts can apply to get land from the Government",
                                    "Eligible to apply for 80G Deductions Certificate benefits",
                                    "Long-term taxation benefits & exemptions",
                                    "Ease in property acquisition and fund donations",
                                    "Recognised as a separate legal entity like Section 8 Company"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4 text-slate-700 font-bold text-[16px] leading-snug group/item">
                                        <div className="mt-1.5 w-2.5 h-2.5 rounded-full bg-slate-300 shrink-0 group-hover/item:bg-[#dead01] transition-colors"></div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. OUR WORKING PROCESS */}
            <section className="py-24 bg-[#FEF9C3] relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-black text-[#072b47] mb-4">
                            Our Working Process
                        </h2>
                        <div className="w-24 h-1.5 bg-[#dead01] mx-auto rounded-full shadow-sm"></div>
                        <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto mt-6">
                            Our working process is especially designed to provide you with the best possible experience & to make sure that your goals are achieved.
                        </p>
                    </div>

                    <div className="relative">
                        {/* Desktop Connecting Line */}
                        <div className="hidden lg:block absolute top-10 left-[12%] right-[12%] h-0.5 bg-slate-100 z-0">
                            <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-[#dead01]/20 to-transparent"></div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-4 justify-center">
                            {[
                                {
                                    num: "1",
                                    title: "Consultation",
                                    desc: "Our experts will consult with you to understand your business needs & goals."
                                },
                                {
                                    num: "2",
                                    title: "Planning",
                                    desc: "Once we understand all your needs, we will develop an effective plan."
                                },
                                {
                                    num: "3",
                                    title: "Execution",
                                    desc: "Once the plan is finalised, our experts will execute it effectively."
                                },
                                {
                                    num: "4",
                                    title: "Review",
                                    desc: "After the project is completed, we will review the work done."
                                }
                            ].map((step, index) => (
                                <div key={index} className="flex flex-row lg:flex-col items-start lg:items-center relative group z-10">
                                    {/* Mobile Vertical Line */}
                                    {index !== 3 && (
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

            {/* 7. TYPES OF NGO REGISTRATION */}
            <section className="py-24 bg-white border-t border-slate-100 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#072b47] mb-6">
                            Types of <span className="text-[#dead01]">NGO Registration</span> in India
                        </h2>
                        <div className="w-24 h-1.5 bg-[#dead01] mx-auto rounded-full shadow-sm"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                        {[
                            {
                                title: "Section 8 Company Registration",
                                desc: "It incorporates the purpose of social welfare. Established to promote art, commerce, science, religion, charity or relevant cause to society progress."
                            },
                            {
                                title: "Trust Registration",
                                desc: "Entities who go for Trust under the NGO Registration procedure are generally those which work with the elimination of poverty, providing medical relief."
                            },
                            {
                                title: "Society Registration",
                                desc: "Named as member-based organisations that work for charitable goals. These organisations are always run under governing body or a management committee."
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

export default NGOTrust;
