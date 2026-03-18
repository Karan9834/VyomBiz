import React from 'react';
import docImage from '../../../assets/environmental-doc.png';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const CivilLawyer = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="Civil"
                    heroTitleSuffix="Lawyers"
                    heroDescription="Resolve disputes with confidence. Get expert civil legal support for contracts, property conflicts, recovery cases, and more—handled by experienced civil lawyers."
                    stats={[
                        { count: "Expert", label: "Civil Advice" },
                        { count: "95%", label: "Success Rate" },
                        { count: "24/7", label: "Consultation" },
                        { count: "500+", label: "Verified Lawyers" }
                    ]}
                    formTitle="Get Free Expert Consultation"
                />

                <DetailsLayout
                    overview={{
                        title: "Civil Litigation —",
                        highlightTitle: "Overview",
                        description: [
                            "Civil disputes can arise in both personal and business life—from property disagreements and contractual conflicts to financial recovery matters. Handling such cases requires strong legal knowledge, strategic planning, and proper representation.",
                            "At Vyombiz, you gain access to experienced civil lawyers who understand the complexities of civil litigation and dispute resolution. Our legal professionals guide clients through every stage of the legal process—from case evaluation and documentation to court representation and settlement negotiations.",
                            "Through Vyombiz managed by Clink Consultancy Services Private Limited, individuals and businesses receive reliable civil legal assistance that prioritizes clarity, efficiency, and favorable outcomes."
                        ],
                        imageUrl: docImage
                    }}

                    advantages={{
                        title: "Civil Legal Services",
                        subtitle: "Handling a variety of non-criminal disputes",
                        list: [
                            { title: "Property Disputes", desc: "Property disagreements are common. We handle ownership disputes, boundary arguments, and title verification." },
                            { title: "Contract Resolution", desc: "Civil lawyers handle breach of contract cases, contract interpretation, and compensation claims." },
                            { title: "Recovery of Money", desc: "Recover outstanding payments through legal procedures including recovery suits and settlement support." },
                            { title: "Consumer Disputes", desc: "File complaints and seek compensation for unfair practices before consumer forums." },
                            { title: "Landlord-Tenant", desc: "Handling tenant eviction, lease disputes, and rental agreement issues." },
                            { title: "Partnership Disputes", desc: "Resolving business partnership disagreements and commercial legal conflicts." }
                        ]
                    }}

                    process={{
                        title: "Our Approach",
                        subtitle: "Resolving disputes efficiently",
                        steps: [
                            { step: "01", title: "Case Assessment", desc: "Understanding the dispute and thoroughly reviewing all relevant documents." },
                            { step: "02", title: "Legal Strategy", desc: "Identifying the best legal approach for resolution, whether mediation or litigation." },
                            { step: "03", title: "Documentation", desc: "Preparing and drafting sound legal notices, petitions, or civil claims." },
                            { step: "04", title: "Negotiation", desc: "Attempting an out-of-court settlement to save time and legal costs if possible." },
                            { step: "05", title: "Litigation", desc: "Strong court representation and continuous support until the matter is legally resolved." }
                        ]
                    }}

                    features={{
                        title: "Why Hire a Civil Lawyer?",
                        subtitle: "Expertise in Civil Law",
                        list: [
                            { title: "Analyze Legal Strength", desc: "Analyzing the legal strength of your case and setting realistic expectations." },
                            { title: "Proper Documentation", desc: "Preparing proper documentation and evidence to support your claims." },
                            { title: "Court Representation", desc: "Representing clients effectively in civil court hearings and proceedings." },
                            { title: "Settlement Negotiation", desc: "Negotiating settlements to resolve the dispute faster and more amicably." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    faqs={[
                        {
                            question: "What is civil litigation?",
                            answer: "Civil litigation is the legal process of resolving non-criminal disputes through the court system, where one party seeks compensation or specific performance from another."
                        },
                        {
                            question: "How long does a civil case usually take?",
                            answer: "The duration of a civil case depends on the complexity of the dispute, court schedules, and whether the parties opt for settlement or full trial. It can range from a few months to several years."
                        },
                        {
                            question: "What is the difference between a civil and criminal case?",
                            answer: "Civil cases involve disputes between individuals or organizations over legal duties and responsibilities, usually resulting in monetary compensation. Criminal cases involve offences against the state and can lead to imprisonment."
                        },
                        {
                            question: "Do I always have to go to court for a civil dispute?",
                            answer: "Not necessarily. Many civil disputes are resolved through Alternative Dispute Resolution (ADR) methods like mediation, arbitration, or out-of-court settlements."
                        },
                        {
                            question: "What documents do I need for a property dispute?",
                            answer: "Key documents include title deeds, sale agreements, property tax receipts, boundary maps, and any formal correspondence related to the dispute."
                        }
                    ]}
                />

                <ReviewsSection
                    title="Client Success Stories"
                    subtitle="Trusted by individuals and businesses for resolving disputes."
                    reviews={[
                        {
                            name: "Ravi K.",
                            role: "Homeowner",
                            company: "Property Dispute",
                            rating: 5,
                            initials: "RK",
                            text: "Vyombiz arranged an excellent civil lawyer. The property boundary dispute we had with our neighbors was resolved flawlessly out of court."
                        },
                        {
                            name: "Simran A.",
                            role: "Business Owner",
                            company: "Contract Breach",
                            rating: 5,
                            initials: "SA",
                            text: "We had a vendor who breached their contract and disappeared. The legal notice effectively secured our refund without long litigation."
                        },
                        {
                            name: "Arjun M.",
                            role: "Landlord",
                            company: "Eviction Case",
                            rating: 4.8,
                            initials: "AM",
                            text: "Very strategic and knowledgeable lawyers. They helped evict a non-paying commercial tenant legally and swiftly."
                        }
                    ]}
                />
            </div>
        </div>
    );
};

export default CivilLawyer;
