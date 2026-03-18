import React from 'react';
import docImage from '../../../assets/environmental-doc.png';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const FinanceLawyer = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="Finance"
                    heroTitleSuffix="Lawyers"
                    heroDescription="From fundraising to financial compliance, expert legal guidance is critical in every financial decision your business makes. Work with experienced finance lawyers who help you structure deals, manage risk, and stay compliant with financial regulations."
                    stats={[
                        { count: "Expert", label: "Legal Assistance" },
                        { count: "Risk", label: "Management" },
                        { count: "Secure", label: "Transactions" },
                        { count: "24/7", label: "Consultation" }
                    ]}
                    formTitle="Get Free Expert Consultation"
                />

                <DetailsLayout
                    overview={{
                        title: "Finance Law —",
                        highlightTitle: "Overview",
                        description: [
                            "Financial decisions in business are rarely simple. Whether a company is raising funds, entering investment agreements, negotiating loans, or managing financial disputes, every step involves legal complexities.",
                            "A finance lawyer ensures that financial transactions are structured legally, risks are minimized, and agreements protect the interests of the business.",
                            "Through Vyombiz managed by Clink Consultancy Services Private Limited, businesses can connect with experienced finance lawyers who understand the legal framework surrounding corporate finance, investment laws, banking regulations, and financial compliance."
                        ],
                        imageUrl: docImage
                    }}

                    advantages={{
                        title: "Role & Function",
                        subtitle: "What Does a Finance Lawyer Do?",
                        list: [
                            { title: "Transaction Structuring", desc: "Finance lawyers help structure financial agreements such as loans, investments, venture capital funding, and financial partnerships." },
                            { title: "Drafting Agreements", desc: "They prepare and review legally binding agreements including loan agreements, investment contracts, and shareholder agreements." },
                            { title: "Regulatory Compliance", desc: "Finance lawyers ensure compliance with applicable financial regulations, RBI guidelines, and SEBI regulations." },
                            { title: "Risk Assessment", desc: "Legal experts analyze financial transactions to identify legal risks and provide strategies to mitigate them." },
                            { title: "Dispute Resolution", desc: "In cases of disputes involving financial agreements or debt recovery, finance lawyers represent businesses and provide legal resolution strategies." }
                        ]
                    }}

                    typesOfCompliance={{
                        title: "Our Expertise",
                        subtitle: "Finance Lawyer Services Offered",
                        list: [
                            { title: "Corporate Finance", desc: "Legal guidance for companies on managing financial structures, capital strategies, and investment frameworks." },
                            { title: "Loan Agreements", desc: "Professional drafting and review of loan agreements to protect the interests of lenders or borrowers." },
                            { title: "Venture Capital", desc: "Legal structuring and documentation for venture capital investments, angel investments, and funding rounds." },
                            { title: "Debt Restructuring", desc: "Assistance in renegotiating debt obligations, restructuring financial liabilities, and managing repayment structures." },
                            { title: "Financial Compliance", desc: "Ensuring that companies adhere to applicable financial regulations and industry guidelines." },
                            { title: "Dispute Resolution", desc: "Legal support for resolving disputes related to loans, investments, financial contracts, and corporate finance matters." }
                        ]
                    }}

                    eligibility={{
                        title: "Target Audience",
                        subtitle: "Who Should Hire a Finance Lawyer?",
                        list: [
                            { title: "Startups", desc: "Startups raising funds from angel investors or venture capitalists need legal guidance to structure investment agreements." },
                            { title: "Growing Businesses", desc: "Companies expanding operations often require financing through loans, investors, or partnerships." },
                            { title: "Investors", desc: "Investors rely on finance lawyers to ensure that investment contracts safeguard their financial interests." },
                            { title: "Corporations", desc: "Large corporations and banks require continuous legal oversight for lending agreements, compliance, and transaction management." }
                        ]
                    }}

                    process={{
                        title: "How It Works",
                        subtitle: "Structured legal support for finance",
                        steps: [
                            { step: "01", title: "Submit Requirement", desc: "Tell us about your financial legal requirement or transaction." },
                            { step: "02", title: "Consultation", desc: "Our legal experts evaluate your financial situation and recommend the right legal strategy." },
                            { step: "03", title: "Documentation", desc: "Lawyers draft, review, and structure the required financial agreements." },
                            { step: "04", title: "Compliance", desc: "Ensure all financial transactions remain legally compliant and secure." }
                        ]
                    }}

                    features={{
                        title: "Our Edge",
                        subtitle: "Why Choose Vyombiz",
                        list: [
                            { title: "Experienced Professionals", desc: "Work with lawyers experienced in corporate finance and financial law." },
                            { title: "Business-Focused", desc: "Legal strategies designed to support business growth and financial stability." },
                            { title: "Transparent Support", desc: "Clear communication, structured legal processes, and transparent consultation." },
                            { title: "End-to-End Assistance", desc: "From drafting agreements to resolving disputes, businesses receive comprehensive legal support." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    faqs={[
                        {
                            question: "What is a finance lawyer?",
                            answer: "A finance lawyer is a legal professional who specializes in financial transactions, investment agreements, banking regulations, and corporate finance law."
                        },
                        {
                            question: "When should a business hire a finance lawyer?",
                            answer: "Businesses should consult a finance lawyer when raising funds, negotiating loans, drafting investment agreements, or dealing with financial disputes."
                        },
                        {
                            question: "Can finance lawyers help with startup funding agreements?",
                            answer: "Yes. Finance lawyers assist startups in structuring funding agreements, reviewing investor terms, and protecting founder interests."
                        },
                        {
                            question: "Do finance lawyers handle debt restructuring?",
                            answer: "Yes. They help businesses renegotiate debt terms and restructure financial liabilities to maintain financial stability."
                        },
                        {
                            question: "Are financial agreements legally necessary?",
                            answer: "Yes. Properly drafted financial agreements ensure that all parties involved are legally protected and obligations are clearly defined."
                        }
                    ]}
                />

                <ReviewsSection
                    title="Client Success Stories"
                    subtitle="Trusted by businesses for expert financial legal support."
                    reviews={[
                        {
                            name: "Arjun K.",
                            role: "Startup Founder",
                            company: "Tech Solutions",
                            rating: 5,
                            initials: "AK",
                            text: "The finance lawyer helped us structure our first venture capital round seamlessly. Their attention to detail in the shareholder agreement saved us from future disputes."
                        },
                        {
                            name: "Neha R.",
                            role: "CFO",
                            company: "Manufacturing Co.",
                            rating: 5,
                            initials: "NR",
                            text: "We needed help renegotiating a large corporate loan. The lawyer handled the debt restructuring brilliantly and got us favorable terms."
                        },
                        {
                            name: "Siddharth J.",
                            role: "Investor",
                            company: "Angel Investor",
                            rating: 4.8,
                            initials: "SJ",
                            text: "I always use Vyombiz lawyers to review my investment contracts. They identify risks quickly and ensure my capital is legally protected."
                        }
                    ]}
                />
            </div>
        </div>
    );
};

export default FinanceLawyer;
