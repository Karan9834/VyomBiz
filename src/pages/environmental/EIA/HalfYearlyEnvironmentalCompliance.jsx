import React from 'react';
import docImage from '../../../assets/environmental-doc.png';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const HalfYearlyEnvironmentalCompliance = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="Half-Yearly Environmental"
                    heroTitleSuffix="Compliance"
                    heroDescription="To comply with environmental legislation and approvals and to maintain business accreditation, get your environmental compliance report with the assistance of Corpbiz."
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
                        title: "Compliance Report —",
                        highlightTitle: "An Overview",
                        description: [
                            "All businesses must abide by environmental legislation, regulations, or other rules. According to the MoEF notification, project proponents must submit half-yearly updates on Environmental Clearance compliance.",
                            "Typically, by the first of June and the first of December of each year, Half-Yearly Environmental Compliance Reports are routinely delivered to the regional office of the MoEF&CC and the appropriate regulatory authority.",
                            "The State Environment Impact Assessment Authority (SEIAA) can issue show-cause notices for violations, and authorities have the power to suspend or revoke clearances."
                        ]
                    }}
                    advantages={{
                        title: "Importance of Compliance",
                        subtitle: "Why reporting is essential",
                        list: [
                            { title: "Meets Legal Duties", desc: "Ensures legal obligations are fulfilled, preventing needless or unintentional harm to the environment." },
                            { title: "Penalty Avoidance", desc: "Helps companies avoid exorbitant fines, additional penalties, and operational suspensions." },
                            { title: "Reputation Management", desc: "Prevents harm to the company's reputation and promotes an organizational culture of environmental responsibility." },
                            { title: "Operational Continuity", desc: "Ensures permits and licenses remain valid, avoiding shutdowns or restricted activities." },
                            { title: "Cost & Resource Efficiency", desc: "Improves management systems, boosts compliance profiles, and produces better outcomes in resource allocation." }
                        ]
                    }}
                    eligibility={{
                        title: "Compliance Requirements",
                        subtitle: "Key considerations for businesses",
                        list: [
                            { title: "Resource & Rule Analysis", desc: "Analyze the resources needed and the rules governing environmental compliance in all relevant jurisdictions." },
                            { title: "License Management", desc: "Apply for the environmental licenses, permits, and approvals required to conduct business operations legally." },
                            { title: "Performance Assessment", desc: "Determine environmental challenges that impact operational performance and develop methods to address them." },
                            { title: "Contamination Tracking", desc: "Identify if facilities have previously contaminated the environment or improperly disposed of hazardous materials." }
                        ]
                    }}
                    documents={{
                        imageUrl: docImage,
                        title: "Documentation Needed",
                        subtitle: "For report preparation",
                        list: [
                            { title: "Clearances & Consents", desc: "Copy of Environmental Clearance and Consent to Establish/Operate from the State Pollution Control Board." },
                            { title: "Management Plans", desc: "Sewage Treatment plans, Solid Waste Management Rules adherence, and Environment Management Plan." },
                            { title: "Statutory Approvals", desc: "Approvals for diesel storage, structural safety, Forest Conservation Act, Wildlife Act, and NGT clearance." },
                            { title: "Data & Audits", desc: "Air quality data, noise control mechanisms, water conservation records, and yearly environmental statement (Form-V)." }
                        ]
                    }}
                    process={{
                        title: "Compliance Process",
                        subtitle: "Step-by-step workflow",
                        steps: [
                            { step: "1", title: "Identify Requirements", desc: "Analyze the present and potential environmental laws and parameters required by your operational permits." },
                            { step: "2", title: "Data Tracking & Calculation", desc: "Complete data calculations, pre-processing, and ensure that operational data complies with reporting/warning levels." },
                            { step: "3", title: "Audit & Analysis", desc: "Examine environmental management strategies employed to evaluate risks, contamination records, and potential legal hazards." },
                            { step: "4", title: "Report Generation", desc: "Regularly collate gathered data into compliance reports designed for regulatory submission." },
                            { step: "5", title: "Submission & Renewal Check", desc: "Submit to MoEF&CC/SEIAA and proactively check dates for new licenses or permit renewals." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    subtitle="Common queries regarding Environmental Compliance"
                    faqs={[
                        {
                            question: "What is an Environmental Compliance Program?",
                            answer: "It establishes essential tools (SOPs, rules, compliance calendars) to assist firms in meeting regulatory requirements and keeps them on schedule with reporting."
                        },
                        {
                            question: "Can Environment Clearance be revoked?",
                            answer: "Yes, State authorities have the power to suspend or entirely revoke environmental clearances in the event of major infractions or continual non-compliance."
                        },
                        {
                            question: "Why are Environment Compliance concerns integrated with business goals?",
                            answer: "To minimize conflicts, reduce overlap, avoid penalties, and successfully incorporate sustainability strategies into core business operational objectives."
                        },
                        {
                            question: "How can Half-Yearly Environmental Compliance aid Businesses?",
                            answer: "It ensures tracking of environmental norms, flags potential issues before inspections, fosters a clean public image, and aids in rapid permit renewals."
                        }
                    ]}
                />

                <ReviewsSection />
            </div>
        </div>
    );
};

export default HalfYearlyEnvironmentalCompliance;

