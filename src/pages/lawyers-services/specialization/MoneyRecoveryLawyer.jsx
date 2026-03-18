import React from 'react';
import docImage from '../../../assets/environmental-doc.png';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const MoneyRecoveryLawyer = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="Money Recovery"
                    heroTitleSuffix="Lawyers"
                    heroDescription="Recover Your Money Legally – Fast, Strategic, and Effective. Facing unpaid dues, delayed payments, or financial disputes? Our experienced lawyers help recover outstanding payments safely through structured support."
                    stats={[
                        { count: "Expert", label: "Consultation" },
                        { count: "98%", label: "Recovery Rate" },
                        { count: "24/7", label: "Legal Advice" },
                        { count: "500+", label: "Verified Experts" }
                    ]}
                    formTitle="Get Free Expert Consultation"
                />

                <DetailsLayout
                    overview={{
                        title: "Money Recovery —",
                        highlightTitle: "Overview",
                        description: [
                            "Unpaid invoices, breached contracts, and delayed payments can seriously impact cash flow and business stability. Recovering such dues often requires a strategic legal approach backed by strong documentation.",
                            "Money Recovery Lawyers specialize in recovering pending payments, enforcing contractual obligations, and pursuing legal remedies against debtors.",
                            "From issuing formal legal notices to filing recovery suits and representing clients in court proceedings, they help ensure your financial rights are protected efficiently."
                        ],
                        imageUrl: docImage
                    }}

                    typesOfCompliance={{
                        title: "Legal Solutions",
                        subtitle: "Legal Solutions Offered",
                        list: [
                            { title: "Legal Notice", desc: "Formal demand for payment issued within a specified timeframe to settle without court." },
                            { title: "Recovery Suits", desc: "Initiating civil suits to claim outstanding amounts legally when notices are ignored." },
                            { title: "Negotiation", desc: "Resolving disputes through structured discussions for faster out-of-court settlements." },
                            { title: "Cheque Bounce", desc: "Proceedings under applicable laws (Section 138) for payments involving dishonoured cheques." },
                            { title: "Contractual Rights", desc: "Enforcing payment terms and rights when disputes arise from breach of contract." },
                            { title: "Business Recovery", desc: "Expert support for outstanding invoice disputes and vendor payment recovery." }
                        ]
                    }}

                    process={{
                        title: "Our Process",
                        subtitle: "Our Money Recovery Legal Process",
                        steps: [
                            { step: "01", title: "Case Evaluation", desc: "Reviewing contracts, invoices, and communication records related to the dispute." },
                            { step: "02", title: "Legal Notice", desc: "Issuing a structured demand notice to the debtor with a defined timeline." },
                            { step: "03", title: "Response & Negotiation", desc: "Handling debtor responses and leading settlement discussions for an amicable resolution." },
                            { step: "04", title: "Filing Suit", desc: "Initiating formal legal proceedings in the appropriate court if payment remains outstanding." },
                            { step: "05", title: "Court Representation", desc: "Full legal representation throughout the litigation until final resolution." }
                        ]
                    }}

                    eligibility={{
                        title: "Required Docs",
                        subtitle: "Documents Required for Action",
                        list: [
                            { title: "Agreements", desc: "Contracts or agreements establishing terms and payment schedules." },
                            { title: "Invoices", desc: "Unpaid invoices, purchase orders, or official bills." },
                            { title: "Transaction Records", desc: "Payment receipts, ledgers, and bank transaction records." },
                            { title: "Communication", desc: "Communication logs (emails, WhatsApp messages, letters, acknowledgments)." },
                            { title: "Cheques", desc: "Dishonoured cheque details and bank return memos (if applicable)." }
                        ]
                    }}

                    features={{
                        title: "Why Us",
                        subtitle: "Why Choose Vyombiz",
                        list: [
                            { title: "Proven Experts", desc: "Access to experienced recovery lawyers nationwide." },
                            { title: "Structured Approach", desc: "Structured legal approach tailored to specific financial disputes." },
                            { title: "Transparency", desc: "Transparent communication throughout the entire recovery lifecycle." },
                            { title: "Dedicated Support", desc: "Dedicated support for businesses, startups, and individuals seeking their dues." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    faqs={[
                        {
                            question: "How long does a money recovery case take?",
                            answer: "The duration depends on factor such as case complexity and court procedures. Some cases resolve quickly through negotiation, while others proceed to litigation."
                        },
                        {
                            question: "Can businesses recover unpaid invoices legally?",
                            answer: "Yes. Businesses can initiate legal proceedings to recover unpaid invoices by issuing legal notices and filing recovery suits if necessary."
                        },
                        {
                            question: "Is a legal notice necessary before filing a recovery case?",
                            answer: "While not always mandatory, issuing a legal notice is a standard first step and often prompts the debtor to settle the payment."
                        },
                        {
                            question: "What if the debtor ignores the legal notice?",
                            answer: "If the debtor fails to respond, lawyers can proceed with filing a recovery suit in the appropriate court."
                        },
                        {
                            question: "Can individuals also file money recovery cases?",
                            answer: "Yes. Individuals can file recovery cases for unpaid loans, personal transactions, or financial agreements."
                        }
                    ]}
                />

                <ReviewsSection
                    title="Client Success Stories"
                    subtitle="Trusted by businesses and individuals to recover their hard-earned money."
                    reviews={[
                        {
                            name: "Rohan D.",
                            role: "Business Owner",
                            company: "Wholesale Corp",
                            rating: 5,
                            initials: "RD",
                            text: "A vendor refused to pay a very large sum for months. One strong legal notice from the Vyombiz lawyer and the payment was cleared in 10 days."
                        },
                        {
                            name: "Meera S.",
                            role: "Freelancer",
                            company: "Design Studio",
                            rating: 5,
                            initials: "MS",
                            text: "I was struggling to get paid by an overseas client. The lawyer guided me on the correct legal steps and successfully recovered the amount."
                        },
                        {
                            name: "Karan P.",
                            role: "Contractor",
                            company: "BuildRight",
                            rating: 4.8,
                            initials: "KP",
                            text: "Excellent representation in a civil recovery suit. It took some time in court, but the lawyer persisted and won the case for us."
                        }
                    ]}
                />
            </div>
        </div>
    );
};

export default MoneyRecoveryLawyer;
