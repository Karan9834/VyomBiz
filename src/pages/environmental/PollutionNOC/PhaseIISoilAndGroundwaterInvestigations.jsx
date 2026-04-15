import React from 'react';
import docImage from '../../../assets/environmental-doc.png';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const PhaseIISoilAndGroundwaterInvestigations = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="Phase II Soil &"
                    heroTitleSuffix="Groundwater Investigations"
                    heroDescription="Comprehensive Environmental Assessment for Site Safety & Compliance. Identify potential subsurface contamination before you buy, sell, or develop industrial land. Vyombiz provides expert-led Phase II investigations to protect your investments and public health."
                    stats={[
                        { count: "100K+", label: "Happy Customers" },
                        { count: "3500+", label: "Expert Advisors" },
                        { count: "50+", label: "Branch Offices" },
                        { count: "100s", label: "Sites Assessed" }
                    ]}
                    formTitle="Get Free Expert Consultation"
                />

                <DetailsLayout
                    overview={{
                        title: "What is",
                        highlightTitle: "Phase II Environmental Investigation?",
                        description: [
                            "Phase II Soil and Groundwater Investigation is a technical assessment conducted to confirm the presence and extent of hazardous substances in the subsurface. This follows a Phase I Environmental Site Assessment (ESA) if potential contamination risks (RECs) are identified.",
                            "The process involves intrusive sampling, where soil, groundwater, and sometimes soil vapor are collected and analyzed in certified laboratories. This provides data-driven evidence of whether pollution exceeds regulatory limits set by environmental authorities like the CPCB.",
                            "Through Vyombiz managed by Clink Consultancy Services Private Limited, businesses get scientifically accurate reports that are essential for risk management, real estate transactions, and regulatory clearances."
                        ],
                        whyIdealTitle: "When is Phase II Required?",
                        whyIdealList: [
                            { title: "Identified Risks", desc: "When Phase I ESA suggests potential historical leaks or spills." },
                            { title: "Industrial Transactions", desc: "During the sale or purchase of high-risk properties like gas stations or chemical plants." },
                            { title: "Regulatory Orders", desc: "When pollution control boards require proof of site cleanup or safety." },
                            { title: "Redevelopment Projects", desc: "Before converting industrial land into residential or commercial zones." }
                        ]
                    }}

                    advantages={{
                        title: "Why Conduct a Phase II Investigation?",
                        subtitle: "Data-backed insights for safer property investments.",
                        list: [
                            { title: "Risk Mitigation", desc: "Identifies hidden liabilities before they become expensive legal or cleanup issues." },
                            { title: "Financial Protection", desc: "Helps in accurate property valuation and price negotiations." },
                            { title: "Regulatory Compliance", desc: "Ensures the site meets National and State environmental standards." },
                            { title: "Health & Safety", desc: "Prevents exposure of workers and local communities to toxic subsurface chemicals." },
                            { title: "Lender Confidence", desc: "Often a mandatory requirement for securing bank loans for industrial real estate." }
                        ]
                    }}

                    eligibility={{
                        title: "Key Assessment Targets",
                        subtitle: "What our technical teams investigate.",
                        list: [
                            { title: "Soil Layers", desc: "Testing for heavy metals, petroleum hydrocarbons (TPH), and pesticides." },
                            { title: "Groundwater Table", desc: "Checking for dissolved chemicals, VOCs, and heavy metal plumes." },
                            { title: "Underground Tanks", desc: "Investigating leaks from USTs (Underground Storage Tanks) and pipelines." },
                            { title: "Soil Vapor", desc: "Assessing the risk of volatile chemicals migrating into building structures." }
                        ]
                    }}

                    process={{
                        title: "The Phase II Investigation Process",
                        subtitle: "A systematic approach to subsurface analysis.",
                        steps: [
                            { step: "01", title: "Site Samplings", desc: "Drilling boreholes and installing monitoring wells at strategic locations." },
                            { step: "02", title: "Sample Collection", desc: "Extracting soil cores and groundwater samples using standardized protocols." },
                            { step: "03", title: "Lab Analysis", desc: "Testing samples in NABL-accredited labs for specific contaminants." },
                            { step: "04", title: "Data Interpretation", desc: "Comparing lab results against CPCB/EPA cleanup standards and screening levels." },
                            { step: "05", title: "Reporting", desc: "Issuing a detailed technical report with findings and remediation advice." }
                        ]
                    }}

                    features={{
                        title: "Why Vyombiz for Phase II?",
                        subtitle: "Precision engineering and environmental expertise.",
                        list: [
                            { title: "Advanced Equipment", desc: "Use of specialized drilling rigs and high-precision sampling tools." },
                            { title: "Accredited Analytics", desc: "Partnership with top-tier labs for reliable chemical data." },
                            { title: "Technical Expertise", desc: "Reports drafted by experienced geologists and environmental scientists." },
                            { title: "Strategic Advice", desc: "We don't just find problems; we provide cost-effective cleanup solutions." },
                            { title: "Confidentiality", desc: "We ensure all findings remain strictly confidential between the client and our team." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    faqs={[
                        {
                            question: "How long does a Phase II investigation take?",
                            answer: "The timeline typically ranges from 2 to 4 weeks, including site work, laboratory testing, and final report writing."
                        },
                        {
                            question: "What happens if contamination is found?",
                            answer: "If pollutants exceed limits, we provide a remediation plan (Phase III) to clean up the site or manage the risk safely."
                        },
                        {
                            question: "Does every property need Phase II?",
                            answer: "No. It is only required if Phase I indicates a specific concern or if the property has a history of industrial activity."
                        },
                        {
                            question: "Is Phase II a legal requirement in India?",
                            answer: "While not mandatory for all, it is increasingly required by lenders, buyers, and pollution boards for industrial sites."
                        }
                    ]}
                />

                <ReviewsSection
                    title="Scientific Site Assessments"
                    subtitle="Ensure your land is safe for its intended use. Get expert Phase II investigations with Vyombiz."
                    reviews={[
                        {
                            name: "Clink Consultancy",
                            role: "Managed Service",
                            company: "VyomBiz",
                            rating: 5,
                            initials: "CC",
                            text: "We bridge the gap between technical data and business decisions, providing clear insights into site contamination risks."
                        }
                    ]}
                />
            </div>
        </div>
    );
};

export default PhaseIISoilAndGroundwaterInvestigations;

