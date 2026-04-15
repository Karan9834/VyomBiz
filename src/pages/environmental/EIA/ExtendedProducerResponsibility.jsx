import React from 'react';
import docImage from '../../../assets/environmental-doc.png';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const ExtendedProducerResponsibility = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="Extended Producer"
                    heroTitleSuffix="Responsibility (EPR)"
                    heroDescription="Comprehensive Extended Producer Responsibility compliance services. From registration to filing returns, we assist Producers, Importers, and Brand Owners in fulfilling their EPR targets efficiently."
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
                        title: "Extended Producer Responsibility —",
                        highlightTitle: "An Overview",
                        description: [
                            "Extended Producer Responsibility (EPR) is an environmental protection strategy that makes the manufacturer of a product responsible for the entire life cycle of the product, especially the take-back, recycling, and final disposal.",
                            "Under the Plastic Waste Management/E-Waste/Battery Waste Rules, Producers, Importers, and Brand-owners (PIBOs) must register on the centralized EPR portal by CPCB.",
                            "EPR significantly drives businesses to adopt sustainable product designs and invest in post-consumer waste management infrastructure."
                        ]
                    }}
                    advantages={{
                        title: "Benefits of EPR Compliance",
                        subtitle: "Why register for EPR?",
                        list: [
                            { title: "Statutory Necessity", desc: "Non-compliance risks heavy environmental compensation from the Central Pollution Control Board (CPCB) and operational bans." },
                            { title: "Promotes Circular Economy", desc: "Encourages the reuse of recycled plastics and metals, shifting away from a purely consumerist economy to a circular one." },
                            { title: "Reduces Disposal Costs", desc: "Optimizing packaging effectively mitigates massive costs associated with sending waste to landfills." },
                            { title: "Brand Reassurance", desc: "Consumers actively prefer environmentally responsible brands that demonstrate visible recycling efforts." },
                            { title: "Regulatory Peace of Mind", desc: "Hassle-free customs clearance for importers and unhindered domestic operations for manufacturers." }
                        ]
                    }}
                    eligibility={{
                        title: "Who requires EPR Authorization?",
                        subtitle: "Applicability Criteria",
                        list: [
                            { title: "PIBOs", desc: "Producers, Importers, & Brand Owners introducing plastic packaging into the Indian market." },
                            { title: "E-Waste Producers", desc: "Manufacturers, importers, and assemblers of electrical and electronic equipment (EEE)." },
                            { title: "Battery Manufacturers", desc: "Producers dealing with lead-acid, Li-ion, and other battery chemistries." },
                            { title: "Tyre Producers", desc: "Companies manufacturing and introducing new tyres or waste tyres in the domestic market." }
                        ]
                    }}
                    documents={{
                        imageUrl: docImage,
                        title: "Required Documents",
                        subtitle: "For EPR Registration",
                        list: [
                            { title: "Business KYC", desc: "PAN, GST Certificate, CIN, and IEC (for Importers)." },
                            { title: "Authorized Signatory", desc: "Aadhar and PAN of the authorized signatory, with a formal authorization letter." },
                            { title: "Sales / Import Data", desc: "Year-wise data on the quantity of plastic/e-waste/battery introduced into the market." },
                            { title: "Action Plan", desc: "A detailed EPR Action Plan demonstrating how recycling targets will be fulfilled through registered recyclers." },
                            { title: "Agreements", desc: "MoUs with authorized Waste Management Agencies / Recyclers." }
                        ]
                    }}
                    process={{
                        title: "EPR Authorization Process",
                        subtitle: "Step-by-step workflow",
                        steps: [
                            { step: "1", title: "Target Calculation", desc: "Assessing historical sales data to calculate exact EPR liability across specific categories." },
                            { step: "2", title: "Documentation Compilation", desc: "Preparing detailed Action Plans and executing agreements with registered recyclers." },
                            { step: "3", title: "Portal Registration", desc: "Filing the online application through the CPCB EPR portal and addressing any Clarification (SCN) raised by officials." },
                            { step: "4", title: "EPR Certificate", desc: "Upon satisfactory review, CPCB grants the EPR Registration Certificate to the PIBO." },
                            { step: "5", title: "Target Fulfillment & Returns", desc: "Purchasing EPR certificates from recyclers to offset targets and filing annual returns." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    subtitle="Common queries about EPR"
                    faqs={[
                        {
                            question: "Is EPR registration a one-time process?",
                            answer: "While the initial registration on the CPCB portal is granted with a specified validity, fulfilling the targets (via purchasing recycling certificates) and filing annual returns is a recurrent yearly process."
                        },
                        {
                            question: "Can an importer clear goods without EPR?",
                            answer: "No. The customs authorities have strictly integrated EPR compliance into the clearance process. Imported consignments of plastics, e-waste, and batteries may face detention without valid EPR authorization."
                        },
                        {
                            question: "Are MSMEs exempt from EPR?",
                            answer: "While certain micro-enterprises might be exempt from strict target fulfillment under plastic waste rules depending on specific state regulations, most entities identifying as Brand Owners or Importers are mandated to comply."
                        }
                    ]}
                />

                <ReviewsSection />
            </div>
        </div>
    );
};

export default ExtendedProducerResponsibility;

