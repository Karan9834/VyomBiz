import React from 'react';
<<<<<<< Updated upstream
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const IndustrialWasteManagement = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain={"Industrial Waste Management"}
                    heroTitleSuffix=""
                    heroDescription={"Facing hurdles in complying with industrial waste management regulations? Let our experts help you mitigate business risks and ensure sustainable growth. Follow Waste Disposal Regulations and avoid Penalties up to Rs 50 Lakh."}
                    stats={[
                        { count: "43298 +", label: "Happy Clients" },
                        { count: "3500 +", label: "Expert Advisors" },
                        { count: "50 +", label: "Branch Offices" },
                        { count: "10k+", label: "Pin codes" }
                    ]}
                    formTitle="Get Free Expert Consultation"
                />
=======

import { Link } from "react-router-dom";
import { Shield, FileCheck, CheckCircle, ArrowRight, Zap, Target, BookOpen, Clock, Users, Building2, Briefcase } from 'lucide-react';

const IndustrialWasteManagement = () => {
    return (
        <div className="bg-slate-50 min-h-screen font-sans overflow-x-hidden">
            {/* HERO SECTION */}
            <section className="relative bg-gradient-to-br from-[#005a9c] to-[#072b47] text-white pt-32 pb-24 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-50 to-transparent"></div>
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-blue-100 text-sm font-bold uppercase tracking-wider mb-8 backdrop-blur-sm">
                        <Shield size={16} className="text-[#dead01]" /><span>Environmental Compliance Services</span>
                    </div>
                    
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.2] mb-6 max-w-5xl">
                        {/* Split title to style it nicely */}
                        Industrial Waste <span className="text-[#dead01]">Management</span> 
                    </h1>
                    
                    <p className="text-xl text-blue-100 mb-10 max-w-3xl leading-relaxed">
                        Facing hurdles in complying with industrial waste management regulations? Let our experts help you mitigate business risks and ensure sustainable growth. Follow Waste Disposal Regulations and avoid Penalties up to Rs 50 Lakh.
                    </p>
                    
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link to="/price" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-[#dead01] text-[#072b47] px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-400 shadow-xl active:scale-95 transition-all flex items-center justify-center gap-2">
                                View Pricing
                            </Link>
                    </div>
                </div>
            </section>
>>>>>>> Stashed changes

                <DetailsLayout
                    overview={{
                        title: "Industrial Waste Management —",
                        highlightTitle: "An Overview",
                        description: [
                            "Industrial waste management is the process which ensures the safe removal, recycling and disposal of unwanted wastes produced from by-products of industrial processes. Almost all forms of industrial waste generating air emissions, wastewater discharge, and by-products must be handled and carefully disposed of since they frequently harm the environment or people's health."
                        ]
                    }}

                    advantages={{
                        title: "Rules, Regulations & Benefits",
                        subtitle: "Understanding the regulatory framework",
                        list: [
                            {
                                "title": "Point 1",
                                "desc": "Industrial waste management process ensures compliance with local and state regulations, minimizing the risk of fines or operational impact."
                            }
                        ]
                    }}

                    eligibility={{
                        title: "What's Included in our Service?",
                        subtitle: "Comprehensive compliance assistance",
                        list: [
                            {
                                "title": "Waste Stream Identification",
                                "desc": "Included as a standard feature of our compliance service."
                            },
                            {
                                "title": "Regulatory Compliance Support",
                                "desc": "Included as a standard feature of our compliance service."
                            },
                            {
                                "title": "Waste Management Planning",
                                "desc": "Included as a standard feature of our compliance service."
                            },
                            {
                                "title": "Sustainability & ESG Reporting",
                                "desc": "Included as a standard feature of our compliance service."
                            },
                            {
                                "title": "Wastewater Treatment",
                                "desc": "Included as a standard feature of our compliance service."
                            },
                            {
                                "title": "Free 15-Min Consulting",
                                "desc": "Included as a standard feature of our compliance service."
                            }
                        ]
                    }}

                    documents={{
                        title: "Documents Required",
                        description: "Complete document list required for the application:",
                        list: [
                            "GST Certificate",
                            "Proof of Ownership",
                            "Factory License",
                            "Layout Plan of facility",
                            "Process Flow chart"
                        ]
                    }}

                    process={{
                        title: "Procedure for Authorization",
                        subtitle: "Stepwise process for obtaining authorization",
                        steps: [
                            {
                                "step": "01",
                                "title": "1. Assessment of Waste generation\n2. Handling hazardous and non-hazardous waste\n3. Ensuring regulatory compliance\n4. Application for CTE and CTO from CPCB",
                                "desc": "Critical step towards full regulatory compliance."
                            }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    subtitle="Get answers to the most common questions about this service."
                    faqs={[
                        {
                            "question": "What is Industrial Waste Management?",
                            "answer": "It is a mandatory compliance requirement for businesses operating in this sector to ensure environmental safety and regulatory adherence."
                        },
                        {
                            "question": "How long does it take to get the authorization?",
                            "answer": "The timeline varies depending on the completeness of documents and the specific state pollution control board, but we strive to achieve the fastest possible turnaround times."
                        },
                        {
                            "question": "Are there any specific documents required?",
                            "answer": "Yes, you generally need KYC documents, ownership proof, layout plans, and specific project details. Refer to our documents section for a complete checklist."
                        }
                    ]}
                />
                <ReviewsSection />
            </div>
        </div>
    );
};

export default IndustrialWasteManagement;
