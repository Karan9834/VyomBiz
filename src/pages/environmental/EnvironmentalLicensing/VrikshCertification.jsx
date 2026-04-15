import React from 'react';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const VrikshCertification = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="Vriksh"
                    heroTitleSuffix="Certification"
                    heroDescription="Need help with your Vriksh certification process? Let our experts at VyomBiz ensure everything is handled smoothly, from documentation to approval. The top 5% of the exporters trust us."
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
                        title: "Vriksh Certification in India —",
                        highlightTitle: "An Overview",
                        description: [
                            "Vriksh certification in India is a timber legality verification system developed by the Export Promotion Council for Handicrafts (EPCH). It promotes the responsible and legal use of wood in handicrafts, furniture, and the home décor industries, while upholding our social and environmental responsibilities.",
                            "It is meant for consignments consisting of Dalbergia sissoo (Shisham) and Dalbergia latifolia (Rosewood), which are covered under Appendix II, especially emphasizing controlled trade to avoid their overutilization.",
                            "To obtain a Vriksh certification, the businesses must undergo a detailed audit of their sourcing, documentation, and supply chain practices."
                        ]
                    }}

                    advantages={{
                        title: "Benefits of Vriksh",
                        subtitle: "Advantages for Buyers and Suppliers",
                        list: [
                            {
                                title: "Compliance with Regulations",
                                desc: "Meets the requirements of EUTR and other international timber regulations, reducing the risk of penalties."
                            },
                            {
                                title: "Legality Verification",
                                desc: "Verifies the legal origin of wood, ensuring the timber is sourced responsibly and ethically."
                            },
                            {
                                title: "Improved Market Access",
                                desc: "Allows access to improved markets, leading to expansion of reach and customer base."
                            },
                            {
                                title: "Smoother Custom Clearance",
                                desc: "Expedites the process for obtaining customs clearance for exports, reducing logistical challenges."
                            }
                        ]
                    }}

                    typesOfCompliance={{
                        title: "Types of Vriksh Scheme",
                        subtitle: "For Exporters of Wooden Handicrafts",
                        list: [
                            {
                                title: "Vriksh Certificate of Conformity",
                                desc: "A broader chain of custody certification demonstrating commitment to sustainable practices throughout operations."
                            },
                            {
                                title: "Vriksh Shipment Certificate",
                                desc: "A specific shipment-level certificate confirming the wood in a particular consignment originates from legal sources."
                            }
                        ]
                    }}

                    process={{
                        title: "Registration Process",
                        subtitle: "How to Apply for Vriksh",
                        steps: [
                            {
                                step: "01",
                                title: "Submit Application & Review",
                                desc: "Download and submit Form A to EPCH. They will review it for eligibility and scope."
                            },
                            {
                                step: "02",
                                title: "Pre-Assessment & Gap Analysis",
                                desc: "The certification body analyzes procedures to identify gaps against standard requirements."
                            },
                            {
                                step: "03",
                                title: "On-Site Inspection & Grant",
                                desc: "An auditor verifies compliance on-site. Once successful, the Vriksh certification is issued (valid for 5 years)."
                            }
                        ]
                    }}

                    eligibility={{
                        title: "Who Needs Vriksh?",
                        subtitle: "Eligible Industries",
                        list: [
                            { title: "Wood-Based Exporters", desc: "Exporters of wooden handicrafts and furniture." },
                            { title: "Sawmills & Veneer Units", desc: "Entities in primary processing of timber." },
                            { title: "Packaging Manufacturers", desc: "Makers of wooden packaging solutions needing to verify origin." },
                            { title: "EPCH Members", desc: "Any registered exporter involved in wood-based productions." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    subtitle="Vriksh Certification Queries"
                    faqs={[
                        {
                            question: "What is VRIKSH?",
                            answer: "It is a timber legality assessment and verification standard by EPCH ensuring the legal origin of wood products."
                        },
                        {
                            question: "What is the validity of the Vriksh certification?",
                            answer: "A Vriksh Certificate of Conformity is valid for 5 years with annual surveillance audits."
                        },
                        {
                            question: "What is the Vriksh Shipment Certificate?",
                            answer: "It is a certificate issued per export consignment verifying the legal origin of the wood, generally valid for 6 months."
                        },
                        {
                            question: "Who issues the Vriksh Certification?",
                            answer: "It is issued by certification bodies authorized by the Export Promotion Council for Handicrafts (EPCH)."
                        }
                    ]}
                />

                <ReviewsSection />
            </div>
        </div>
    );
};

export default VrikshCertification;

