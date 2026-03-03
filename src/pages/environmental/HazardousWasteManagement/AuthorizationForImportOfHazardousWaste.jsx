import React from 'react';
<<<<<<< Updated upstream
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const AuthorizationForImportOfHazardousWaste = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="Authorization for Import of"
                    heroTitleSuffix="Hazardous Waste"
                    heroDescription="If you wish to deal in the process of Import of Hazardous Waste then it is mandatory to get Authorization."
                    stats={[
                        { count: "1L+", label: "Happy Clients" },
                        { count: "3500+", label: "Expert Advisors" },
                        { count: "50+", label: "Branch Offices" },
                        { count: "4.9", label: "Google Rating" }
                    ]}
                    formTitle="Get Free Expert Consultation"
                />
=======

import { Link } from "react-router-dom";
import { Shield, FileCheck, CheckCircle, ArrowRight, Zap, Target, BookOpen, Clock, Users, Building2, Briefcase } from 'lucide-react';

const AuthorizationForImportOfHazardousWaste = () => {
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
                        Authorization for Import of <span className="text-[#dead01]">Hazardous</span> <span className="text-[#dead01]">Waste</span> 
                    </h1>
                    
                    <p className="text-xl text-blue-100 mb-10 max-w-3xl leading-relaxed">
                        If you wish to deal in the process of Import of Hazardous Waste then it is mandatory to get Authorization.
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
                        title: "Authorization for Import of Hazardous Waste —",
                        highlightTitle: "An Overview",
                        description: [
                            "Hazardous waste can be harmful for both humans and environment if it is not handled or disposed of properly. Therefore there is a need for well-organized hazardous waste management. Hazardous waste are non-biodegradable, persistent in the environment and can be dangerous. A proper hazardous waste management includes collection, recycling, treatment, disposal and transportation of wastes. For such process, proper authorization is required from the authority. Moreover, if any individual wishes to import hazardous waste, then he needs to take authorization from the concerned authority."
                        ]
                    }}

                    advantages={{
                        title: "Rules, Regulations & Benefits",
                        subtitle: "Understanding the regulatory framework",
                        list: [
                            {
                                title: "Hazardous Waste Management Rules",
                                desc: "Hazardous Waste Management Rules have been notified to ensure secure handling, generation, processing, treatment, import, package, storage, transportation, reprocessing, collection, conversion, and offering for sale, destruction and disposal of Hazardous Waste."
                            }
                        ]
                    }}

                    eligibility={{
                        title: "What's Included in our Service?",
                        subtitle: "Comprehensive compliance assistance",
                        list: [
                            { title: "10+ Years of Experience", desc: "Included as a standard feature of our compliance service." },
                            { title: "400+ In-House CAs, CS & Lawyers", desc: "Included as a standard feature of our compliance service." },
                            { title: "99% SLA Delivery", desc: "Included as a standard feature of our compliance service." },
                            { title: "10,000+ Pin codes Network in India", desc: "Included as a standard feature of our compliance service." }
                        ]
                    }}

                    documents={{
                        title: "Documents Required",
                        description: "Complete document list required for the application:",
                        list: [
                            "Aadhaar Card",
                            "PAN card",
                            "GST certificate",
                            "Valid informed consent letter with authenticated copy from the exporting country",
                            "MOA and AOA",
                            "Board resolution"
                        ]
                    }}

                    process={{
                        title: "Procedure for Authorization",
                        subtitle: "Stepwise process for obtaining authorization",
                        steps: [
                            {
                                step: "01",
                                title: "Application to SPCB",
                                desc: "A recycler with a license from the state pollution control board to recycle such material and who has sought to import such material needs to apply to the respective state pollution control board in advance."
                            },
                            {
                                step: "02",
                                title: "SPCB Recommendation",
                                desc: "The state pollution control board will forward the application with recommendations and requisite stipulations for the safe transport, and processing within 30 days of receipt of the application."
                            },
                            {
                                step: "03",
                                title: "Grant of NOC",
                                desc: "The state government will grant the NOC for import provided that the importer submits a valid informed consent letter with authenticated copy."
                            }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    subtitle="Get answers to the most common questions about this service."
                    faqs={[
                        {
                            "question": "What is Authorization for Import of Hazardous Waste?",
                            "answer": "It is a mandatory compliance requirement for businesses wishing to import hazardous waste to ensure environmental safety and cross-border regulatory adherence."
                        },
                        {
                            "question": "Who grants the NOC for import of hazardous waste?",
                            "answer": "The state government grants the NOC for import, provided the importer submits a valid informed consent letter with an authenticated copy from the exporting country's concerned authority."
                        },
                        {
                            "question": "Are there any specific documents required?",
                            "answer": "Yes, you generally need KYC documents, ownership proof, a valid informed consent letter from the exporting country, MOA, AOA, and board resolution. Refer to our documents section for a complete checklist."
                        }
                    ]}
                />
                <ReviewsSection />
            </div>
        </div>
    );
};

export default AuthorizationForImportOfHazardousWaste;
