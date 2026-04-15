import React from 'react';
import docImage from '../../../assets/environmental-doc.png';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const TSDFFacilityServices = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="TSDF Facility"
                    heroTitleSuffix="Services"
                    heroDescription="Learn how to start a Treatment, Storage, and Disposal Facility (TSDF) with us. We provide expert guidance on compliance, licensing, and setup."
                    stats={[
                        { count: "100K+", label: "Happy Customers" },
                        { count: "3500+", label: "Expert Advisors" },
                        { count: "50+", label: "Branch Offices" },
                        { count: "4.9", label: "Global Rating" }
                    ]}
                    formTitle="Get Free Expert Consultation"
                />

                <DetailsLayout
                    overview={{
                        title: "TSDF Facility Services —",
                        highlightTitle: "An Overview",
                        description: [
                            "TSDF stands for Treatment, Storage, and disposal facilities. Treatment facilities categorize and follow incineration or oxidation to change the character and composition of hazardous wastes.",
                            "TSDF facilitates the collection, transportation, storage, treatment, and disposal of hazardous waste in an environment-friendly manner. The regulations that apply to TSDFs are more stringent than those that apply to generators or transporters.",
                            "Hazardous waste contains toxic elements that can harm the environment and humans. Thus, hazardous waste should be treated and disposed of before discharging into the environment."
                        ]
                    }}

                    typesOfCompliance={{
                        title: "Types of Services",
                        subtitle: "Under TSDF Facility",
                        list: [
                            { title: "Transport", desc: "Transportation of hazardous wastes to designated locations." },
                            { title: "Storage", desc: "Storage enables keeping the hazardous waste until they get treated or disposed of." },
                            { title: "Treatment", desc: "Treatment involves chemical, biological, and physical methods." },
                            { title: "Disposal", desc: "The disposal facility permanently disposes of the hazardous waste safely in specially designed units." }
                        ]
                    }}

                    advantages={{
                        title: "Storage & Transportation",
                        subtitle: "Criteria for TSDF",
                        list: [
                            {
                                title: "Storage Space & Container Integrity",
                                desc: "Distinct columns for flammable, ignitable, reactive, and non-compatible wastes. Containers must maintain integrity for at least six months without cracking or shattering."
                            },
                            {
                                title: "Labelling and Display",
                                desc: "Hazardous waste storage vessels must be labeled with HAZARDOUS WASTE. It must display the waste code, type, place of origin, characteristics, and emergency numbers."
                            }
                        ]
                    }}

                    process={{
                        title: "Treatment & Disposal",
                        subtitle: "Criteria to handle hazardous waste",
                        steps: [
                            {
                                step: "01",
                                title: "Equipment Installation",
                                desc: "Adequate apparatus must be installed in the plant to effectively treat hazardous waste through physical, chemical, and biological processes."
                            },
                            {
                                step: "02",
                                title: "Landfill Operations",
                                desc: "To treat Hazardous Waste, it should be disposed of in a landfill located far away from any human settlement with properly defined boundaries."
                            },
                            {
                                step: "03",
                                title: "Regulatory Compliance",
                                desc: "Following norms for gaseous emissions for hazardous waste incinerators and meeting standards for noise pollution, effluent discharge, and air quality."
                            }
                        ]
                    }}

                    documents={{
                        imageUrl: docImage,
                        title: "Documents Required",
                        description: "Checklist for Registration of the TSDF Plant",
                        list: [
                            "GST Certificate & Company incorporation certificate",
                            "Aadhar and PAN card of authorized signatory",
                            "Layout plan & Topo map",
                            "Memorandum of Articles",
                            "Water bill & Rent agreement",
                            "Details of pollution control equipment"
                        ]
                    }}

                    features={{
                        title: "Licenses Required",
                        subtitle: "Clearances to set up plant",
                        list: [
                            { title: "Environment Clearance", desc: "From Central and State government." },
                            { title: "Hazardous Waste Authorization", desc: "Approval from the Pollution Control Board." },
                            { title: "Emission Norms", desc: "Compliance with gaseous emissions and effluent discharge standard." }
                        ]
                    }}

                    eligibility={{
                        title: "Why Choose VyomBiz?",
                        subtitle: "We make technical compliance certifications effortless and convenient.",
                        list: [
                            { title: "10+ Years of Experience", desc: "Expertise in TSDF Facility Services." },
                            { title: "400+ In-House Professionals", desc: "CAs, CS & Lawyers ready to assist." },
                            { title: "99% SLA Delivery", desc: "100% Satisfaction Guaranteed." },
                            { title: "10,000+ Pin Codes", desc: "Network in India with fast processing." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    subtitle="Know more about TSDF facility services"
                    faqs={[
                        {
                            question: "What is Incinerable waste?",
                            answer: "Any combustible waste with a calorific value of at least 2000 kcal/kg of material is considered incinerable waste (waste that may be burned in an incinerator)."
                        },
                        {
                            question: "Why is there a need to treat hazardous waste?",
                            answer: "Hazardous waste contains toxic elements that can harm the environment and humans. Thus, it must be treated and disposed of before discharging."
                        },
                        {
                            question: "What is the TSDF facility?",
                            answer: "TSDF facilitates the collection, transportation, storage, treatment, and disposal of hazardous waste in an environment friendly manner."
                        },
                        {
                            question: "How is hazardous waste sorted for storage?",
                            answer: "There should be distinct columns for flammable, ignitable, reactive, and non-compatible wastes, and storage sheds must be separated by at least 15 meters."
                        }
                    ]}
                />

                <ReviewsSection />
            </div>
        </div>
    );
};

export default TSDFFacilityServices;

