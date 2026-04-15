import React from 'react';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const CDWasteRecycling = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="Construction and Demolition (C&D)"
                    heroTitleSuffix="Waste Recycling"
                    heroDescription="If you have a burning desire in your heart to launch a construction and demolition waste recycling plant, we are here to assist with permission from SPCB or PCC."
                    stats={[
                        { count: "43K+", label: "Happy Clients" },
                        { count: "3500+", label: "Expert Advisors" },
                        { count: "50+", label: "Branch Offices" },
                        { count: "4.9", label: "Global Rating" }
                    ]}
                    formTitle="Get Free Expert Consultation"
                />

                <DetailsLayout
                    overview={{
                        title: "C&D Waste Recycling —",
                        highlightTitle: "An Overview",
                        description: [
                            "Construction and Demolition (C&D) waste recycling is the process typically used for collection, sorting, recycling, and reusing waste generated during construction, demolition, and renovation activities.",
                            "Construction and demolition waste recycling is considered a crucial step that assists in reducing environmental impact, conservation of natural resources and promotion of sustainable practices in India.",
                            "The practice avoids indiscriminate dumping, land & air pollution, and reduces the pressure of overutilization of natural resources."
                        ]
                    }}

                    advantages={{
                        title: "Business Benefits of C&D Recycling",
                        subtitle: "Environmental and Economic Advantages",
                        list: [
                            {
                                title: "Sustainable Development",
                                desc: "Promotes sustainable development by reducing the environmental impact and greenhouse gas emissions."
                            },
                            {
                                title: "Enhances Health and Safety",
                                desc: "Proper disposal of hazardous waste generated enhances both human and environmental health."
                            },
                            {
                                title: "Resource Conservation",
                                desc: "Ensures conservation of natural resources like sand, gravel, and timber used for building new structures."
                            },
                            {
                                title: "Lower Project Cost",
                                desc: "Significantly lowers project costs by reducing disposal fees, landfill taxes, and raw material purchases."
                            }
                        ]
                    }}

                    process={{
                        title: "How to Set Up a C&D Waste Recycling Plant",
                        subtitle: "Step-by-Step Guide",
                        steps: [
                            {
                                step: "01",
                                title: "Filing of Application",
                                desc: "File an application in Form I as specified in C&D Rules, 2016 for setting up the plant."
                            },
                            {
                                step: "02",
                                title: "Submission of Documents",
                                desc: "Submit required documents such as GST, layout plan, process flow chart, and proof of ownership to the SPCB."
                            },
                            {
                                step: "03",
                                title: "Inspection and Authorization",
                                desc: "After document scrutiny, the Board inspects the competency of the proposed site before granting authorization."
                            }
                        ]
                    }}

                    features={{
                        title: "Clearances Required",
                        subtitle: "Regulatory Essentials for C&D",
                        list: [
                            { title: "GST & MSME Registration", desc: "For interstate business and to comply with the growth initiatives in India." },
                            { title: "Factory License", desc: "Every business engaged in recycling waste must obtain a factory license from the local government." },
                            { title: "NOC by SPCB", desc: "Consent to Establish and Operate mandatory from the State Pollution Control Board or Committee." },
                            { title: "Industry-Specific Permits", desc: "Occupational Safety and Health Administration (OSHA) & other specific functional licenses." }
                        ]
                    }}

                    eligibility={{
                        title: "Types of C&D Waste",
                        subtitle: "Categorization for Processing",
                        list: [
                            { title: "Inert Trash", desc: "Dirt, bricks, stones, concrete; neither chemically nor biologically reactive." },
                            { title: "Non-hazardous Waste", desc: "Plastic, glass, metal wastes that do not endanger the environment." },
                            { title: "Hazardous Waste", desc: "Wastes detrimental to health, like asbestos or contaminated soil, needing expert handling." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    subtitle="Common inquiries about C&D Recycling"
                    faqs={[
                        {
                            question: "What is the full form of C&D waste?",
                            answer: "Construction and Demolition waste. It is created from the construction, renovation, and demolition of roads, buildings, as well as other structures."
                        },
                        {
                            question: "Are there specific management rules?",
                            answer: "Yes, the Construction and Demolition Waste Management Rules, 2016 govern the safe disposal and recycling of bulk and small generation waste."
                        },
                        {
                            question: "Can demolition waste be reused?",
                            answer: "Absolutely. Materials like concrete, wood, and metals are separated, crushed, and recycled for future construction or manufacturing products."
                        },
                        {
                            question: "What items constitute major C&D components?",
                            answer: "Cement concrete, bricks, plaster, steel, doors, roofs, rubble, and excavation soil are considered major components."
                        }
                    ]}
                />

                <ReviewsSection />
            </div>
        </div>
    );
};

export default CDWasteRecycling;

