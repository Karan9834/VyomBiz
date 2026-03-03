import React from 'react';
<<<<<<< Updated upstream
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const HazardousWasteManagementAuthorization = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain={"Hazardous Waste Management Authorization"}
                    heroTitleSuffix=""
                    heroDescription={"Hazardous Waste Management Authorization is necessary for those involved in handling, generating, collection, storing, packaging, transportation, treatment, processing etc."}
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

const HazardousWasteManagementAuthorization = () => {
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
                        Hazardous Waste Management <span className="text-[#dead01]">Authorization</span> 
                    </h1>
                    
                    <p className="text-xl text-blue-100 mb-10 max-w-3xl leading-relaxed">
                        Hazardous Waste Management Authorization is necessary for those involved in handling, generating, collection, storing, packaging, transportation, treatment, processing etc.
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
                        title: "Hazardous Waste Management Authorization —",
                        highlightTitle: "An Overview",
                        description: [
                            "As the lifestyle of people undergoes significant change, different chemicals and products are used at home today and often, we are unaware that it is corrosive, explosive, flammable or toxic. These fall under dangerous wastes that should be kept out of wet and dry waste streams as they can be harmful to our health and for the environment also if not correctly disposed of. Proper hazardous waste management is required and to ensure that the state pollution control board provides hazardous waste management authorization."
                        ]
                    }}

                    advantages={{
                        title: "Rules, Regulations & Benefits",
                        subtitle: "Understanding the regulatory framework",
                        list: [
                            {
                                "title": "Point 1",
                                "desc": "These rules have been notified to ensure safe handling, generation, processing, storage, treatment, transportation, reprocessing, collection and proper disposal of hazardous waste. The Hazardous Waste Management Rules came into picture in 1989 and was amended later in 2000, 2003. Hazardous Waste (Management, Handling and Transboundary Movement) Rules were notified in 2016."
                            }
                        ]
                    }}

                    eligibility={{
                        title: "What's Included in our Service?",
                        subtitle: "Comprehensive compliance assistance",
                        list: [
                            {
                                "title": "10+ Years of Experience",
                                "desc": "Included as a standard feature of our compliance service."
                            },
                            {
                                "title": "400 + In-House CAs, CS & Lawyers",
                                "desc": "Included as a standard feature of our compliance service."
                            },
                            {
                                "title": "99% SLA Delivery",
                                "desc": "Included as a standard feature of our compliance service."
                            },
                            {
                                "title": "10,000+ Pin codes Network in India",
                                "desc": "Included as a standard feature of our compliance service."
                            }
                        ]
                    }}

                    documents={{
                        title: "Documents Required",
                        description: "Complete document list required for the application:",
                        list: [
                            "Aadhaar Card copy and PAN card copy of the applicant",
                            "GST certificate",
                            "Rent/lease or proof of ownership",
                            "Factory license or trade license",
                            "Electricity bill",
                            "Layout plan",
                            "Certificate of incorporation if it's a company/LLP",
                            "MOA and AOA",
                            "Board resolution to appoint an authorized person"
                        ]
                    }}

                    process={{
                        title: "Procedure for Authorization",
                        subtitle: "Stepwise process for obtaining authorization",
                        steps: [
                            {
                                "step": "01",
                                "title": "1. Apply to the state pollution control board file an application in Form I within 60 days period from the date of publication of these rules\n2. The applicant must also accompany such application with consent to establish and consent to operate while applying\n3. Attach all Documents, and the Documents should be signed from the authorized person\n4. Submit the form to the concerned state pollution board\n5. If the board finds the form to be fit enough, then it shall grant the authorization",
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
                            "question": "What is Hazardous Waste Management Authorization?",
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

export default HazardousWasteManagementAuthorization;
