import React from 'react';
<<<<<<< Updated upstream
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const HazardousWasteExportAuthorisation = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="Hazardous Waste Export"
                    heroTitleSuffix="Authorisation"
                    heroDescription="For compliance assurance of all risks associated with your Export Authorisation of Hazardous Waste, comply with applicable laws with the assistance of VyomBiz."
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

const HazardousWasteExportAuthorisation = () => {
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
                        Hazardous Waste Export <span className="text-[#dead01]">Authorisation</span> 
                    </h1>
                    
                    <p className="text-xl text-blue-100 mb-10 max-w-3xl leading-relaxed">
                        For compliance assurance of all risks associated with your Export Authorisation of Hazardous Waste, comply with applicable laws with the assistance of VyomBiz.
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
                        title: "Hazardous Waste Export Authorisation —",
                        highlightTitle: "An Overview",
                        description: [
                            "The Ministry of Environment and Forests is the nodal ministry for handling the transboundary movement of all hazardous materials and is responsible for approving their transit through any region of India. The waste that can be exported from India is stated in Schedule III, Parts A and B, and Schedule VI, and it can be done with the MoEF and CC's (Ministry of Environment Forest and Climate Change) prior approval."
                        ]
                    }}

                    advantages={{
                        title: "Rules, Regulations & Benefits",
                        subtitle: "Understanding the regulatory framework",
                        list: [
                            {
                                title: "Promoting 3Rs of Waste Management",
                                desc: "Hazardous Waste Authorisation encourages the 3Rs of waste — Reducing, Reusing, and Recycling. By using resources effectively and producing less garbage than usual, we can reduce the quantity of waste we produce to a manageable level."
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
                            "IEC (Import Export Code)",
                            "MOA",
                            "AOA / Partnership deed",
                            "PAN Card and UID of Authorized Person",
                            "PAN Card of the Unit",
                            "GST registration",
                            "Permission to operate the unit",
                            "Authorisation from the relevant SPCB",
                            "A lab report for the waste that will be exported"
                        ]
                    }}

                    process={{
                        title: "Procedure for Authorisation",
                        subtitle: "Stepwise process for obtaining Hazardous Waste Export Authorisation",
                        steps: [
                            {
                                step: "01",
                                title: "Report to Ministry of Environment",
                                desc: "The proposed transboundary movement of hazardous wastes must be reported to the Central Government's Ministry of Environment and Forests in Form 1."
                            },
                            {
                                step: "02",
                                title: "Obtain No Objection Certificate",
                                desc: "After authentication, the Central Government gives a No Objection Certificate to the proposed export with conditions as necessary."
                            },
                            {
                                step: "03",
                                title: "Copy to CPCB",
                                desc: "The Central Government would send a copy of the No Objection Certificate to the Central Pollution Control Board."
                            }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    subtitle="Get answers to the most common questions about this service."
                    faqs={[
                        {
                            "question": "What is Hazardous Waste Export Authorisation?",
                            "answer": "It is a mandatory compliance requirement for businesses that wish to export hazardous waste across international borders. Approval from the Ministry of Environment, Forest and Climate Change (MoEF&CC) is required."
                        },
                        {
                            "question": "Which wastes can be exported from India?",
                            "answer": "The waste that can be exported from India is stated in Schedule III (Parts A and B) and Schedule VI of the Hazardous Waste (Management, Handling and Transboundary Movement) Rules, 2016."
                        },
                        {
                            "question": "What is the role of SPCB in the export authorisation process?",
                            "answer": "The SPCB grants the operating authorisation for the unit. An authenticated copy of the SPCB authorisation is required as part of the export application documents."
                        }
                    ]}
                />
                <ReviewsSection />
            </div>
        </div>
    );
};

export default HazardousWasteExportAuthorisation;
