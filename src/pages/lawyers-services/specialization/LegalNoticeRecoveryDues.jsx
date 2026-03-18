import React from 'react';
import docImage from '../../../assets/environmental-doc.png';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const LegalNoticeRecoveryDues = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="Legal Notice for"
                    heroTitleSuffix="Recovery of Dues"
                    heroDescription="Recover Your Money Legally and Efficiently. Reclaim your stuck payments with a professionally drafted Legal Notice. Our expert lawyers ensure your notice is watertight, persuasive, and legally sound."
                    stats={[
                        { count: "15,000+", label: "Notices Drafted" },
                        { count: "95%", label: "Success Rate" },
                        { count: "24 Hrs", label: "Fast Turnaround" },
                        { count: "500+", label: "Verified Experts" }
                    ]}
                    formTitle="Get Free Expert Consultation"
                />

                <DetailsLayout
                    overview={{
                        title: "Recovery of Dues —",
                        highlightTitle: "Overview",
                        description: [
                            "A legal notice is a formal written communication sent by one individual or entity to another, conveying a clear intention to initiate legal proceedings. It serves as a final warning, typically issued when a specific act or failure to act has caused damage or loss to the sender.",
                            "Common scenarios for sending a notice include contract breaches, non-payment of rent by tenants, or violations of established legal rights. Beyond these, a legal notice is a powerful tool for the recovery of promised dues or money.",
                            "In the legal process, this notice is the critical first step. It ensures the recipient is fully aware that failure to settle the outstanding dues will result in formal court action."
                        ],
                        imageUrl: docImage
                    }}

                    advantages={{
                        title: "Advantages",
                        subtitle: "Benefits of Sending a Legal Notice",
                        list: [
                            { title: "Formal Warning", desc: "Explicitly warns the defaulter of their duties and the need to repay." },
                            { title: "Legal Weight", desc: "Shows you are serious and ready to take the matter to court." },
                            { title: "Documented Evidence", desc: "Serves as vital proof in court that the dispute was communicated." },
                            { title: "Cost-Effective", desc: "Less expensive than jumping straight into a full-blown lawsuit." }
                        ]
                    }}

                    eligibility={{
                        title: "Required Contexts",
                        subtitle: "When to File a Recovery Notice",
                        list: [
                            { title: "Recovery of Rent", desc: "When a tenant refuses to pay the agreed rent to the landlord." },
                            { title: "Embezzlement", desc: "Cases where an employee has misappropriated company funds." },
                            { title: "Bounced Cheque", desc: "Initiating action when a payment cheque is dishonored by the bank." },
                            { title: "Property Disputes", desc: "Issues related to mortgage, possession delays, or land settlements." },
                            { title: "Contract Breach", desc: "Unpaid vendor invoices or freelance payments after services delivered." }
                        ]
                    }}

                    documents={{
                        imageUrl: docImage,
                        title: "Legal Framework",
                        subtitle: "Statutes for Filing a Case",
                        list: [
                            { title: "Contract Act, 1872", desc: "Applies to valid contracts. 3-year limitation to file a suit." },
                            { title: "NI Act, 1881", desc: "Governs cheques and notes. 3-year limitation period." },
                            { title: "Specific Relief Act, 1963", desc: "Used when seeking specific performance. Up to 12 years." },
                            { title: "Code of Civil Procedure", desc: "Governs the issuance of notices and general civil suits." }
                        ]
                    }}

                    process={{
                        title: "Drafting Procedure",
                        subtitle: "Step-by-Step Process",
                        steps: [
                            { step: "01", title: "Consultation & Drafting", desc: "Work with a legal expert to draft a notice containing all necessary facts." },
                            { step: "02", title: "Attorney Preparation", desc: "The attorney prepares the final notification, stating the purpose and settlement terms." },
                            { step: "03", title: "Approval & Dispatch", desc: "Once approved, the notice is sent via registered mail or courier." },
                            { step: "04", title: "Wait for Response", desc: "The debtor is given a specified period (typically 15-30 days) to clear dues." },
                            { step: "05", title: "File Lawsuit", desc: "If unpaid, proceed with filing a formal civil or criminal suit in court." }
                        ]
                    }}

                    features={{
                        title: "Why Vyombiz?",
                        subtitle: "Our Setup and Support",
                        list: [
                            { title: "Expert Professionals", desc: "In-house lawyers guide you at every stage, protecting your interests." },
                            { title: "Customized Drafting", desc: "No generic templates; we draft notices that reflect your specific case facts." },
                            { title: "Cost-Effective", desc: "Premium legal support at competitive prices compared to traditional firms." },
                            { title: "Round-the-Clock Support", desc: "Customer support is always available to resolve your queries instantly." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    faqs={[
                        {
                            question: "How can a lawyer help to draft Legal Notice for Recovery of Money?",
                            answer: "A lawyer helps by accurately detailing the facts, identifying the correct legal grounds (like breach of contract), and ensuring the notice is properly served. This adds legal weight to your claim and simplifies further court proceedings if the debtor continues to defaults."
                        },
                        {
                            question: "What Is the Time Restriction for Bringing a Lawsuit for Money Recovery?",
                            answer: "In most cases, the limitation period for filing a money recovery suit is three years from the date the debt became due. Failing to file within this window may bar your legal right to recover the amount through court action."
                        },
                        {
                            question: "How can I recover money without proof?",
                            answer: "Recovering money without proof is challenging. However, any written communication — such as WhatsApp messages, emails, or bank statements showing the transfer — can serve as evidence. A legal notice can also prompt a response from the debtor that might serve as an acknowledgement of the debt."
                        },
                        {
                            question: "What is a legal notice for recovery of dues?",
                            answer: "It is a formal legal warning sent to a person or entity withholding your payments. It informs them of your intent to initiate legal action if the dues are not cleared within a specific timeframe."
                        },
                        {
                            question: "Is it compulsory to serve a legal notice?",
                            answer: "While not always compulsory for all civil suits, it is highly recommended. For some cases, like cheque bounce or suits against the government, serving a notice is a mandatory legal prerequisite."
                        }
                    ]}
                />

                <ReviewsSection
                    title="Client Success Stories"
                    subtitle="Trusted by consumers to enforce clear, fast, and binding legal resolutions."
                    reviews={[
                        {
                            name: "Sanjay D.",
                            role: "Business Owner",
                            company: "B2B Supplies",
                            rating: 5,
                            initials: "SD",
                            text: "We had pending dues worth several lakhs. A strong legal notice from Vyombiz attorneys triggered an out-of-court settlement almost immediately."
                        },
                        {
                            name: "Riya M.",
                            role: "Freelancer",
                            company: "Creative Services",
                            rating: 5,
                            initials: "RM",
                            text: "My client was ignoring my invoices for 6 months. After sending the notice through a lawyer here, they settled the amount in a week."
                        },
                        {
                            name: "Anil P.",
                            role: "Landlord",
                            company: "Property Rentals",
                            rating: 4.8,
                            initials: "AP",
                            text: "Excellent service. Helping me recover un-paid rent and clear my property smoothly."
                        }
                    ]}
                />
            </div>
        </div>
    );
};

export default LegalNoticeRecoveryDues;
