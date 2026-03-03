import { useNavigate } from "react-router-dom";
import React from 'react';
import { 
    CheckCircle, Search, Star, MapPin, ArrowRight, Rocket, 
    Smile, PieChart, Shield, FileText, Users, Scale, 
    Building2, Briefcase, FileCheck, Clock, Globe, Award,
    ChevronRight, Mail, Phone, Download, Calendar, CreditCard,
    Receipt, FileSpreadsheet, Calculator, TrendingUp, DollarSign,
    Landmark, Percent, ShieldCheck
} from 'lucide-react';
import complainceimg from '../../../assets/compliancefooter/compliance.png';

const TaxFilingCompliance = () => {
  const navigate = useNavigate();
    // Tax filing services based on the HTML
    const taxServices = [
        {
            title: "GST Registration",
            desc: "Step-by-Step (REG-01) & Expert Help. Get your GSTIN quickly with CA/CS guidance. We complete registration within 6-7 working days.",
            price: "₹499",
            link: "gst-registration"
        },
        {
            title: "GST Return Filing",
            desc: "Starting from Just ₹999/ Month. Maximize your input tax credit while filing GST. Let experts handle your GST return filing effortlessly.",
            price: "₹499/month",
            link: "gst-return-filing"
        },
        {
            title: "TDS Return Filing",
            desc: "File TDS Return in 1 Hour. Received a TDS notice? We have successfully solved 99% cases through timely and convenient TDS return filing.",
            price: "₹499",
            link: "tds-return-filing"
        },
        {
            title: "Professional Tax Registration",
            desc: "Get Compliant from Day 1. If you have even one employee, you are already liable. Get your Professional Tax Registration done instantly.",
            price: "₹499",
            link: "professional-tax-registration"
        },
        {
            title: "Income Tax Return Filing",
            desc: "Worried about missing the ITR deadline? Get personalized support for seamless income tax return filing in India.",
            price: "₹499",
            link: "income-tax-return-filing"
        },
        {
            title: "GST Advisory Services",
            desc: "Looking for GST advisory services? We help you ensure timely compliance, minimize tax liabilities, and optimize your tax structure.",
            price: "₹999",
            link: "gst-advisory-services"
        },
        {
            title: "GST Annual Return Filing",
            desc: "Ensure a smooth and error-free process with professional assistance. We have successfully filed 10,000+ GST returns.",
            price: "₹1,999",
            link: "gst-annual-return-filing"
        },
        {
            title: "GST LUT Form",
            desc: "Letter of Undertaking for exporters. Get help from professionals for hassle-free, tax-free exports.",
            price: "₹999",
            link: "gst-lut-form"
        },
        {
            title: "GST Compliance Services",
            desc: "Manage complexities of GST laws, minimize penalties, and boost operational efficiency with our compliance services.",
            price: "₹1,499",
            link: "gst-compliance-services"
        },
        {
            title: "Income Tax Compliance",
            desc: "Save 50% Today on Professional Services. Let our associates and expert team of CAs handle all your income tax compliance needs.",
            price: "₹999",
            link: "income-tax-compliance"
        },
        {
            title: "Income Tax Advisory",
            desc: "Optimize your tax liability, increase profits, and reinvest capital gains. Get custom-based solutions for all tax-related issues.",
            price: "₹1,499",
            link: "income-tax-advisory"
        },
        {
            title: "XBRL Filing",
            desc: "Simplify your financial reporting obligations with MCA-approved XBRL filing services at the best prices.",
            price: "₹2,499",
            link: "xbrl-filing"
        },
        {
            title: "GST Registration for NRI",
            desc: "For foreigners supplying goods or services in India. Obtain GST registration and fulfil all compliance obligations.",
            price: "₹3,999",
            link: "gst-registration-for-nri"
        }
    ];

    // Testimonials from HTML
    const testimonials = [
        {
            name: "Mr. Vinay Arora",
            position: "MD, India",
            text: "Really thankful to Vyombiz. Our experience with its expert was tremendous. Strong professional approach towards clients. My Company Registration was filed in a very less time, thanks to Vyombiz experts.",
            rating: 5
        },
        {
            name: "Ms Seema Singh",
            position: "CFO - Online food Delivery App",
            text: "We would recommend Vyombiz incorporation services to any founder without a second doubt. The process was beyond efficient and shows Vyombiz founder's commitment and vision to truly help entrepreneurs.",
            rating: 5
        },
        {
            name: "Priti Singh",
            position: "MD, India",
            text: "I was searching for a company for assistance in the incorporation services. The Vyombiz team is really efficient and has an experienced staff to guide us through the entire process.",
            rating: 5
        },
    ];

    return (
        <div className="bg-white min-h-screen font-sans overflow-x-hidden">
            {/* 1. HERO SECTION */}
            <section className="relative min-h-screen bg-white flex items-center pt-16 md:pt-20 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12 py-6 md:py-10 lg:py-6">
                    {/* Left Content */}
                    <div className="w-full lg:w-[60%] text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-blue-50 border border-blue-100 rounded-full text-[#005a9c] text-xs md:text-sm font-bold uppercase tracking-wider mb-4 md:mb-8">
                            <Receipt size={16} className="hidden sm:block" />
                            <span>Tax Filing & Compliance</span>
                        </div>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-black text-[#072b47] leading-[1.1] mb-4 md:mb-8 px-2 sm:px-0">
                            Easy and Streamlined <br className="hidden sm:block" />
                            <span className="text-[#dead01]">Tax Filing</span> for Individuals and Businesses
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-6 md:mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium px-4 sm:px-0">
                            Get solutions for tax fillings for individuals as well as businesses in a quick time and adhere to the tax compliances with expert guidance.
                        </p>

                        {/* Search Bar */}
                        <div className="mb-8 md:mb-12 max-w-xl mx-auto lg:mx-0 px-4 sm:px-0">
                            <div className="relative flex flex-col sm:block">
                                <input 
                                    type="search" 
                                    className="w-full px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 rounded-xl sm:rounded-2xl border border-slate-200 shadow-lg focus:outline-none focus:ring-2 focus:ring-[#dead01] focus:border-transparent text-base md:text-lg pr-0 sm:pr-36"
                                    placeholder="Search Your Services"
                                />
                                <button className="w-full sm:w-auto mt-3 sm:mt-0 sm:absolute sm:right-2 sm:top-2 bg-[#005a9c] text-white px-4 sm:px-6 md:px-8 py-3 sm:py-3 rounded-xl font-bold hover:bg-[#072b47] transition-all shadow-md text-sm md:text-base">
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="w-full lg:w-[40%] relative mt-8 lg:mt-0">
                        <div className="absolute inset-0 bg-blue-400/10 blur-[120px] rounded-full scale-150 animate-pulse"></div>
                        <img
                            src={complainceimg}
                            alt="Tax Filing Compliance"
                            className="relative z-10 w-full max-w-md mx-auto lg:max-w-none h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700"
                            onError={(e) => {
                                e.target.src = "https://illustrations.popsy.co/amber/tax.svg"
                            }}
                        />
                    </div>
                </div>
            </section>

            {/* 2. TRUST METRICS STRIP */}
            <section className="bg-[#FEF9C3] py-12 md:py-16 lg:py-20 relative z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
                        {[
                            {
                                icon: <FileText className="w-6 h-6 md:w-8 md:h-8 text-[#005a9c]" />,
                                title: "10,000+ Returns",
                                desc: "Successfully filed over 10,000+ GST and Income Tax returns with 99% accuracy rate."
                            },
                            {
                                icon: <Clock className="w-6 h-6 md:w-8 md:h-8 text-[#005a9c]" />,
                                title: "8+ Years Experience",
                                desc: "Seasoned CA/CS professionals with deep expertise in tax compliance matters.",
                                badge: true
                            },
                            {
                                icon: <Percent className="w-6 h-6 md:w-8 md:h-8 text-[#005a9c]" />,
                                title: "Maximize Savings",
                                desc: "Optimize your tax liability and maximize input tax credit with expert advisory."
                            },
                            {
                                icon: <ShieldCheck className="w-6 h-6 md:w-8 md:h-8 text-[#005a9c]" />,
                                title: "100% Compliance",
                                desc: "Ensure complete statutory compliance with timely filings and accurate documentation.",
                                badge: true
                            }
                        ].map((item, index) => (
                            <div key={index} className="bg-white rounded-2xl md:rounded-[2rem] p-6 md:p-8 lg:p-10 flex flex-col shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                                <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-indigo-50 flex items-center justify-center mb-4 md:mb-8">
                                    {item.badge ? (
                                        <div className="relative">
                                            {item.icon}
                                            <div className="absolute top-0.5 right-0.5 w-1.5 h-1.5 md:w-2 md:h-2 bg-orange-400 rounded-full"></div>
                                        </div>
                                    ) : item.icon}
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-[#072b47] mb-2 md:mb-4">{item.title}</h3>
                                <p className="text-sm md:text-[15px] text-slate-600 leading-relaxed font-medium">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. SERVICES WE OFFER */}
            <section className="py-12 md:py-16 lg:py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8 md:mb-12 lg:mb-16">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#072b47] mb-3 md:mb-4">
                            Services We Offered
                        </h2>
                        <div className="w-16 md:w-24 h-1 bg-[#dead01] shadow-[0_0_8px_rgba(255,233,10,0.6)] mx-auto rounded mb-4 md:mb-6"></div>
                        <p className="text-sm md:text-base lg:text-lg text-slate-600 font-medium max-w-2xl mx-auto px-4">
                            (We make tax compliance certifications effortless and convenient.)
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
                        {taxServices.map((service, index) => (
                            <div key={index} className="bg-white rounded-xl md:rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl hover:border-[#FFE90A]/40 hover:-translate-y-2 transition-all duration-500 flex flex-col h-full group relative">
                                {/* Thinner Integrated Yellow Accent Top Bar */}
                                <div className="absolute top-0 left-0 w-full h-[3px] bg-[#FFE90A]"></div>

                                <div className="p-4 sm:p-6 md:p-8 flex flex-col h-full pt-6 md:pt-10">
                                    <h3 className="text-lg md:text-xl font-bold text-[#072b47] mb-2 md:mb-4 group-hover:text-[#005a9c] transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-sm md:text-[15px] text-slate-600 leading-relaxed mb-4 md:mb-6 flex-grow font-medium">
                                        {service.desc}
                                    </p>

                                    <div className="mt-auto pt-3 md:pt-4 border-t border-slate-100">
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                                            <span className="text-[#dead01] text-lg md:text-2xl font-black">Starting {service.price}</span>
                                            <div className="flex items-center gap-2 sm:gap-4">
                                                <button className="bg-[#005a9c] hover:bg-[#072b47] text-white px-3 md:px-5 py-2 md:py-3 rounded-lg md:rounded-xl text-xs md:text-sm font-bold transition-all shadow-md hover:shadow-lg active:scale-[0.97] whitespace-nowrap">
                                                    Get Started
                                                </button>
                                                <a href={service.link} className="text-[#005a9c] font-bold text-xs md:text-sm flex items-center gap-1 group/read relative py-1 whitespace-nowrap">
                                                    <span>Read More</span>
                                                    <ArrowRight className="w-3 h-3 md:w-4 md:h-4 group-hover/read:translate-x-1 transition-transform duration-300" />
                                                    <div className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#FFE90A] group-hover/read:w-full transition-all duration-300 rounded-full"></div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. OUR WORKING PROCESS */}
            <section className="py-16 md:py-20 lg:py-24 bg-[#FEF9C3]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8 md:mb-12 lg:mb-16">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#072b47] mb-3 md:mb-4">
                            Our Working Process
                        </h2>
                        <div className="w-16 md:w-24 h-1 bg-[#dead01] mx-auto rounded"></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
                        {[
                            {
                                icon: <FileText className="w-8 h-8 md:w-12 md:h-12 text-white" />,
                                title: "Fill Up Application",
                                desc: "Complete our simple application form with your details",
                                number: "1",
                                bgColor: "bg-[#005a9c]",
                                numberBg: "bg-[#dead01]"
                            },
                            {
                                icon: <CreditCard className="w-8 h-8 md:w-12 md:h-12 text-white" />,
                                title: "Make Online Payment",
                                desc: "Secure payment through our trusted gateway",
                                number: "2",
                                bgColor: "bg-[#dead01]",
                                numberBg: "bg-[#005a9c]",
                                textColor: "text-[#072b47]"
                            },
                            {
                                icon: <Users className="w-8 h-8 md:w-12 md:h-12 text-white" />,
                                title: "Executive Processes",
                                desc: "Our expert CA/CS will process your application",
                                number: "3",
                                bgColor: "bg-[#005a9c]",
                                numberBg: "bg-[#dead01]"
                            },
                            {
                                icon: <Mail className="w-8 h-8 md:w-12 md:h-12 text-white" />,
                                title: "Get Confirmation",
                                desc: "Receive confirmation and documents on email",
                                number: "4",
                                bgColor: "bg-[#dead01]",
                                numberBg: "bg-[#005a9c]",
                                textColor: "text-[#072b47]"
                            }
                        ].map((step, index) => (
                            <div key={index} className="relative group">
                                <div className={`${step.bgColor} rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 text-center transform hover:scale-105 transition-all duration-500 shadow-2xl`}>
                                    <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 mx-auto mb-4 md:mb-6 bg-white/20 rounded-xl md:rounded-2xl flex items-center justify-center">
                                        {step.icon}
                                    </div>
                                    <h3 className={`text-lg md:text-xl font-bold mb-2 ${step.textColor ? step.textColor : 'text-white'}`}>
                                        {step.title}
                                    </h3>
                                    <p className={`text-xs md:text-sm ${step.textColor ? step.textColor + '/80' : 'text-white/80'}`}>
                                        {step.desc}
                                    </p>
                                    <div className={`absolute -top-2 -right-2 md:-top-4 md:-right-4 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 ${step.numberBg} rounded-full flex items-center justify-center text-white font-black text-sm md:text-base lg:text-xl border-2 md:border-4 border-white`}>
                                        {step.number}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. WHY CHOOSE US */}
            <section className="py-16 md:py-20 lg:py-24 bg-white border-t border-slate-100 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-12 md:mb-16 lg:mb-20">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-[#072b47] mb-4 md:mb-6">
                            Why Choose <span className="text-[#dead01]">Us</span>
                        </h2>
                        <div className="w-16 md:w-24 h-1 bg-[#dead01] mx-auto rounded-full shadow-sm"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 items-stretch">
                        {[
                            {
                                title: "Expert CA/CS Team",
                                desc: "Our team consists of experienced Chartered Accountants and Company Secretaries with deep domain expertise in tax laws.",
                                icon: <Users className="w-6 h-6 md:w-8 md:h-8 text-[#dead01]" />
                            },
                            {
                                title: "Timely Filing",
                                desc: "We ensure all your tax returns and compliances are completed before deadlines, avoiding penalties and legal issues.",
                                icon: <Calendar className="w-6 h-6 md:w-8 md:h-8 text-[#dead01]" />
                            },
                            {
                                title: "Maximum Savings",
                                desc: "Get expert advice on tax planning to minimize your tax liability legally and maximize your savings.",
                                icon: <TrendingUp className="w-6 h-6 md:w-8 md:h-8 text-[#dead01]" />
                            }
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="relative p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-[2.5rem] border border-slate-200 bg-white shadow-sm hover:shadow-2xl hover:border-[#dead01]/30 hover:-translate-y-2 transition-all duration-500 group flex flex-col h-full"
                            >
                                <div className="mb-6 md:mb-8 relative">
                                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:scale-110 group-hover:bg-[#dead01]/10 transition-all duration-500">
                                        {item.icon}
                                    </div>
                                </div>

                                <h3 className="text-lg md:text-xl font-black text-[#072b47] mb-3 md:mb-4 leading-tight group-hover:text-[#005a9c] transition-colors">{item.title}</h3>
                                <p className="text-sm md:text-[15px] text-slate-600 leading-relaxed font-medium flex-grow">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. TESTIMONIALS */}
            <section className="py-16 md:py-20 lg:py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8 md:mb-12 lg:mb-16">
                        <p className="text-[#005a9c] font-bold text-sm md:text-base lg:text-lg mb-2">Testimonials</p>
                        <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#072b47] mb-3 md:mb-4 px-4">
                            Updated testimonials from our customers
                        </h2>
                        <div className="w-16 md:w-24 h-1 bg-[#dead01] mx-auto rounded"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100">
                                <div className="flex gap-1 mb-3 md:mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-[#dead01] text-[#dead01]" />
                                    ))}
                                </div>
                                <p className="text-sm md:text-[15px] text-slate-600 leading-relaxed mb-4 md:mb-6 italic">
                                    "{testimonial.text}"
                                </p>
                                <div className="border-t pt-3 md:pt-4">
                                    <h4 className="font-bold text-[#072b47] text-sm md:text-base">{testimonial.name}</h4>
                                    <p className="text-xs md:text-sm text-slate-500">{testimonial.position}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-8 md:mt-12">
                        <a 
                            href="reviews" 
                            className="inline-flex items-center gap-2 bg-transparent border-2 border-[#005a9c] text-[#005a9c] hover:bg-[#005a9c] hover:text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold transition-all text-sm md:text-base"
                        >
                            View More Reviews
                            <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TaxFilingCompliance;