import React from 'react';
import docImage from '../../../assets/environmental-doc.png';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const ChequeBounceLawyer = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="Cheque Bounce"
                    heroTitleSuffix="Lawyers"
                    heroDescription="A bounced cheque is more than a financial inconvenience — it is a legal offence. Get professional legal support to send notices, file cases, and recover your money quickly. Connect with an experienced Cheque Bounce Lawyer today."
                    stats={[
                        { count: "10,000+", label: "Notices Sent" },
                        { count: "92%", label: "Recovery Rate" },
                        { count: "24-48 hrs", label: "Legal Action" },
                        { count: "500+", label: "Verified Lawyers" }
                    ]}
                    formTitle="Get Free Expert Consultation"
                />

                <DetailsLayout
                    overview={{
                        title: "Cheque Bounce Case —",
                        highlightTitle: "Overview",
                        description: [
                            "A cheque bounce occurs when a bank refuses to process a cheque due to insufficient funds, signature mismatch, account closure, or other banking issues. In India, cheque bounce cases are governed by Section 138 of the Negotiable Instruments Act, 1881, making it a criminal offence.",
                            "When a cheque issued towards repayment or payment fails to clear, the payee has the legal right to initiate proceedings against the issuer. This usually begins with sending a legal notice demanding payment within 15 days of receiving the bank’s cheque return memo.",
                            "Businesses frequently face cheque bounce disputes during transactions, vendor payments, loan repayments, or service agreements. Professional legal assistance helps you enforce your rights and recover the amount legally."
                        ],
                        imageUrl: docImage
                    }}

                    advantages={{
                        title: "Common Reasons",
                        subtitle: "Understanding why cheques bounce",
                        list: [
                            { title: "Insufficient Funds", desc: "The most common reason where the issuer does not have enough balance in the account." },
                            { title: "Signature Mismatch", desc: "If the signature on the cheque does not match bank records, the cheque may be rejected." },
                            { title: "Account Closed", desc: "If the account linked to the cheque is already closed, the bank will return the cheque unpaid." },
                            { title: "Post-dated Issues", desc: "Depositing a cheque before the mentioned date can also lead to rejection." }
                        ]
                    }}

                    eligibility={{
                        title: "Penalties for Cheque Bounce",
                        subtitle: "Under Section 138 of the NI Act",
                        list: [
                            { title: "Imprisonment", desc: "Imprisonment for up to 2 years for the guilty party." },
                            { title: "Fine", desc: "A fine up to twice the cheque amount can be imposed." },
                            { title: "Compensation", desc: "Mandatory compensation directed to the complainant." },
                            { title: "Court Settlement", desc: "Court-directed settlement or legal recovery proceedings." }
                        ]
                    }}

                    documents={{
                        imageUrl: docImage,
                        title: "Documents Required",
                        subtitle: "To initiate legal proceedings",
                        list: [
                            { title: "Dishonoured Cheque", desc: "The original bounced cheque handed over by the issuer." },
                            { title: "Return Memo", desc: "The official bank cheque return memo stating the reason for dishonour." },
                            { title: "Legal Notice", desc: "Copy of the legal demand notice sent to the defaulter." },
                            { title: "Delivery Proof", desc: "Postal receipts and proof of notice delivery to the issuer." },
                            { title: "Payment Agreements", desc: "Any invoices, ledgers, or payment agreements proving the debt." },
                            { title: "Identity Proof", desc: "Valid identity proof of the complainant initiating the case." }
                        ]
                    }}

                    process={{
                        title: "Step-by-Step Procedure",
                        subtitle: "Filing a Cheque Bounce Case",
                        steps: [
                            { step: "01", title: "Cheque Return Memo", desc: "The bank issues a cheque return memo stating the reason for dishonour." },
                            { step: "02", title: "Legal Notice", desc: "A legal demand notice must be sent to the issuer within 30 days of receiving the memo." },
                            { step: "03", title: "Waiting Period", desc: "The issuer gets a mandatory 15 days to make the payment after receiving the notice." },
                            { step: "04", title: "Filing the Case", desc: "If unpaid, a complaint is filed before the Judicial Magistrate Court within 30 days." },
                            { step: "05", title: "Court Proceedings", desc: "The court reviews the complaint, summons the accused, and conducts hearings." }
                        ]
                    }}

                    features={{
                        title: "Why Hire a Cheque Bounce Lawyer?",
                        subtitle: "Expertise in the Negotiable Instruments Act",
                        list: [
                            { title: "Accurate Drafting", desc: "Precise legal notice drafting to ensure your demand notice is legally sound and watertight." },
                            { title: "Ensure Compliance", desc: "Strict adherence to the 30-day and 15-day timelines mandated by Section 138." },
                            { title: "Court Support", desc: "End-to-end support for case filing and reliable representation in jurisdictional courts." },
                            { title: "Quick Recovery", desc: "Improve chances of an out-of-court settlement and faster recovery of your money." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    faqs={[
                        {
                            question: "What is Section 138 of the NI Act?",
                            answer: "Section 138 of the Negotiable Instruments Act, 1881, deals with the criminal liability of the drawer of a cheque that has been dishonoured due to insufficient funds or other reasons specified."
                        },
                        {
                            question: "How long is a cheque valid for in India?",
                            answer: "A cheque is generally valid for 3 months from the date of issue mentioned on it."
                        },
                        {
                            question: "What should I do immediately after my cheque bounces?",
                            answer: "You should obtain the 'Cheque Return Memo' from the bank and consult a lawyer to issue a formal legal notice to the drawer within 30 days."
                        },
                        {
                            question: "Can I file a case without sending a legal notice?",
                            answer: "No. Sending a legal demand notice within 30 days of receiving the return memo is a mandatory statutory requirement before filing a criminal complaint."
                        },
                        {
                            question: "What are the penalties for cheque bounce?",
                            answer: "The court can impose imprisonment for up to 2 years, or a fine which may extend to twice the amount of the cheque, or both."
                        }
                    ]}
                />

                <ReviewsSection
                    title="Client Success Stories"
                    subtitle="Trusted by businesses and individuals for swift debt recovery."
                    reviews={[
                        {
                            name: "Rahul Verma",
                            role: "Business Owner",
                            company: "Verma Traders",
                            rating: 5,
                            initials: "RV",
                            text: "The legal notice drafted by the lawyer resulted in the defaulter clearing my dues within 10 days without having to file a court case."
                        },
                        {
                            name: "Anita M.",
                            role: "Freelancer",
                            company: "Consultant",
                            rating: 5,
                            initials: "AM",
                            text: "I was worried about recovering my consultation fees when the client's cheque bounced. The lawyer made the process entirely hassle-free."
                        },
                        {
                            name: "Suresh P.",
                            role: "Supplier",
                            company: "Prakash Distributors",
                            rating: 4.8,
                            initials: "SP",
                            text: "Very professional team. They ensured all the tight legal timelines under Section 138 were met flawlessly."
                        }
                    ]}
                />
            </div>
        </div>
    );
};

export default ChequeBounceLawyer;
