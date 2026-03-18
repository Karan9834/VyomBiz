import React from 'react';
import docImage from '../../../assets/environmental-doc.png';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const LegalNoticeConsumerProtection = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="Legal Notice Under"
                    heroTitleSuffix="Consumer Protection Act"
                    heroDescription="Protect Your Consumer Rights with Expert Legal Guidance. Fight against unfair trade practices and product defects. Send a professionally drafted Legal Notice to service providers and recover your losses efficiently with Vyombiz."
                    stats={[
                        { count: "12,000+", label: "Notices Sent" },
                        { count: "90%+", label: "Resolution Rate" },
                        { count: "24-48 hrs", label: "Drafting Time" },
                        { count: "500+", label: "Verified Experts" }
                    ]}
                    formTitle="Get Free Expert Consultation"
                />

                <DetailsLayout
                    overview={{
                        title: "Consumer Rights —",
                        highlightTitle: "Overview",
                        description: [
                            "The Consumer Protection Act 2019 provides a robust three-tier dispute redressal mechanism to safeguard consumer interests in India. This framework ensures that consumers have access to justice through dedicated commissions at various levels: District, State, and National.",
                            "If you have suffered a loss or injury due to a deficiency in service or an unfair trade practice, you can file a complaint with these forums. To initiate this, the first step is often sending a formal legal notice.",
                            "A legal notice is a formal preamble to court action. It serves to inform the alleged violator of their transgression and demands immediate corrective measures."
                        ],
                        imageUrl: docImage
                    }}

                    advantages={{
                        title: "Importance",
                        subtitle: "Importance of Consumer Protection",
                        list: [
                            { title: "Prevention of Harm", desc: "Ensuring businesses disclose critical info (like ingredients) to prevent injury." },
                            { title: "Fair Competition", desc: "Ensuring businesses compete on merit rather than by exploiting customers." },
                            { title: "Empowering Consumers", desc: "Giving buyers the tools and clarity needed to make informed purchasing decisions." },
                            { title: "Redressal Mechanism", desc: "Providing a structured path to seek justice and compensation for genuine losses." }
                        ]
                    }}

                    typesOfCompliance={{
                        title: "Notice Types",
                        subtitle: "Types of Notices Issued",
                        list: [
                            { title: "Notice of Conciliation", desc: "Invites parties to an amicable settlement without a formal hearing." },
                            { title: "Notice of Hearing", desc: "Informs parties of the date and time they must appear before the forum." },
                            { title: "Notice of Examination", desc: "Issued to witnesses, requiring them to give evidence." },
                            { title: "Notice of Investigation", desc: "Issued to experts to investigate and submit a diagnostic report." }
                        ]
                    }}

                    eligibility={{
                        title: "Who Can File",
                        subtitle: "Who Can File a Legal Notice?",
                        list: [
                            { title: "Standard Buyers", desc: "Anyone who purchases goods or avails services for consideration (payment)." },
                            { title: "E-commerce Users", desc: "Modern shoppers on delivery sites and digital service recipients." },
                            { title: "Victims of Malpractice", desc: "Those affected by false product claims, adulteration, or spurious goods." },
                            { title: "Victims of Unfair Trades", desc: "Consumers facing non-issuance of bills or forced tied-in purchases." }
                        ]
                    }}

                    process={{
                        title: "Legal Workflow",
                        subtitle: "Procedure of Filing a Complaint",
                        steps: [
                            { step: "01", title: "Drafting", desc: "The complaint must be written clearly, specifying facts and relief sought." },
                            { step: "02", title: "Serving Notice", desc: "Notice must be served on the opposite party via registered post." },
                            { step: "03", title: "Filing & Fees", desc: "Submit the complaint and pay the required fee based on claim value." },
                            { step: "04", title: "Hearings & Evidence", desc: "Attend forum hearings and produce evidence to support your case." },
                            { step: "05", title: "Judgment & Appeal", desc: "The forum delivers a judgment. Appeals can be filed within 30 days." }
                        ]
                    }}

                    features={{
                        title: "Why Choose Us",
                        subtitle: "Vyombiz Expert Legal Support",
                        list: [
                            { title: "Expert Professionals", desc: "Our experienced business advisors and legal professionals protect your rights." },
                            { title: "Access To Experts", desc: "We coordinate with reliable lawyers to fulfill your requirements smoothly." },
                            { title: "Realistic Expectations", desc: "We handle paperwork and provide absolute clarity on the legal process." },
                            { title: "Smooth Interaction", desc: "Making your interaction with regulatory bodies seamless through expert intervention." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    faqs={[
                        {
                            question: "Is there a format for a legal notice under the Consumer Protection Act?",
                            answer: "Yes, there is a specific format that includes the names of the parties, the date of violation, description of the grievance, and the relief sought. Using a standard format ensures all legal requirements are met."
                        },
                        {
                            question: "Can a legal notice still be served if a period of two years since the defect arose is over?",
                            answer: "The Consumer Protection Act has a limitation period of two years. If this period has expired, you may need to file a condonation of delay application with valid reasons, though it is at the discretion of the consumer forum."
                        },
                        {
                            question: "When to Send a Legal Notice for Consumer Cases?",
                            answer: "You should send a legal notice as soon as you identify a deficiency in service or a product defect, and prior attempts to resolve the issue with the seller have failed."
                        },
                        {
                            question: "What Do You Mean by a Legal Notice for Consumer Cases?",
                            answer: "It is a formal written warning sent to a business or service provider, outlining your legal grievance and demanding corrective action or compensation before filing a case in consumer court."
                        },
                        {
                            question: "Who Can File a Legal Notice in India Under the Consumer Protection Act?",
                            answer: "Any individual who has purchased goods or availed services for a consideration, e-commerce customers, and organizations representing consumers can file a notice under the Act."
                        }
                    ]}
                />

                <ReviewsSection
                    title="Client Success Stories"
                    subtitle="Trusted by consumers to enforce clear, fast, and binding legal resolutions."
                    reviews={[
                        {
                            name: "Rahul S.",
                            role: "Online Shopper",
                            company: "Defective Product",
                            rating: 5,
                            initials: "RS",
                            text: "The e-commerce company refused a refund for a heavily damaged laptop. One legal notice from Vyombiz experts and I got my entire refund plus compensation."
                        },
                        {
                            name: "Neha M.",
                            role: "Patient",
                            company: "Medical Negligence",
                            rating: 5,
                            initials: "NM",
                            text: "The hospital charged me hidden fees not covered by my insurance. The drafted notice clearly highlighted unfair trade practices, resolving it quickly."
                        },
                        {
                            name: "Karan P.",
                            role: "Consumer",
                            company: "Spurious Goods",
                            rating: 4.8,
                            initials: "KP",
                            text: "Very strategic support. They guided me through the National Consumer Disputes Redressal Commission process flawlessly."
                        }
                    ]}
                />
            </div>
        </div>
    );
};

export default LegalNoticeConsumerProtection;
