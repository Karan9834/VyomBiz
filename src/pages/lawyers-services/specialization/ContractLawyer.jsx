import React from 'react';
import docImage from '../../../assets/environmental-doc.png';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const ContractLawyer = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="Contract"
                    heroTitleSuffix="Lawyers"
                    heroDescription="Protect your business with legally strong contracts drafted, reviewed, and negotiated by experienced professionals. Contracts handled by legal experts through Vyombiz ensure clarity, compliance, and enforceability."
                    stats={[
                        { count: "Expert", label: "Drafting" },
                        { count: "99%", label: "Enforceability" },
                        { count: "24/7", label: "Legal Support" },
                        { count: "3500+", label: "Verified Experts" }
                    ]}
                    formTitle="Get Free Expert Consultation"
                />

                <DetailsLayout
                    overview={{
                        title: "Business Contracts —",
                        highlightTitle: "Overview",
                        description: [
                            "Contracts form the backbone of every successful business relationship. Whether you are entering into a partnership, hiring employees, signing with vendors, or working with investors, a properly structured agreement protects your interests and minimizes legal risks.",
                            "Professional contract lawyers help ensure that agreements are legally binding, clearly written, and aligned with current regulations.",
                            "Through Vyombiz managed by Clink Consultancy Services Private Limited, businesses gain access to experienced contract lawyers who specialize in drafting, reviewing, and negotiating contracts for startups, entrepreneurs, SMEs, and established companies."
                        ],
                        imageUrl: docImage
                    }}

                    advantages={{
                        title: "Our Contract Services",
                        subtitle: "Comprehensive legal drafting & review",
                        list: [
                            { title: "Contract Drafting", desc: "Professionally drafted agreements tailored to your business model, ensuring enforceability." },
                            { title: "Contract Review", desc: "Identify legal loopholes, risky clauses, and compliance issues before signing any agreement." },
                            { title: "Negotiation", desc: "Our lawyers help negotiate terms that protect your rights while maintaining relationships." },
                            { title: "Compliance", desc: "Ensure agreements comply with applicable laws, regulations, and industry standards." }
                        ]
                    }}

                    eligibility={{
                        title: "Types of Contracts",
                        subtitle: "Agreements our lawyers handle",
                        list: [
                            { title: "Partnership Contracts", desc: "Founders, Shareholders, and Partnership Agreements." },
                            { title: "Employment Policies", desc: "Employee Contracts, Consultant Agreements, and HR Policies." },
                            { title: "NDAs & IP", desc: "Non-Disclosure Agreements, IP Licensing, and Assignments." },
                            { title: "Commercial Contracts", desc: "Vendor, Supplier, and Service Level Agreements (SLAs)." }
                        ]
                    }}

                    process={{
                        title: "Our Drafting Process",
                        subtitle: "A streamlined workflow",
                        steps: [
                            { step: "01", title: "Requirement Consultation", desc: "Discuss your contract requirements, business structure, and legal concerns." },
                            { step: "02", title: "Legal Assessment", desc: "Our lawyers analyze the agreement structure, applicable laws, and potential risks." },
                            { step: "03", title: "Drafting / Review", desc: "The contract is carefully drafted or reviewed with precise legal clauses." },
                            { step: "04", title: "Client Feedback", desc: "Necessary revisions are made to align the agreement with your expectations." },
                            { step: "05", title: "Final Delivery", desc: "Receive a legally structured and professionally formatted contract ready for execution." }
                        ]
                    }}

                    features={{
                        title: "Why Hire a Contract Lawyer?",
                        subtitle: "Protect your professional interests",
                        list: [
                            { title: "Legally Binding", desc: "Ensures that every agreement is legally binding and fully enforceable in jurisdiction." },
                            { title: "Risk Mitigation", desc: "Reduces the risk of future disputes, litigation, and financial losses." },
                            { title: "Protect IP", desc: "Protects confidential information, enterprise data, and intellectual property." },
                            { title: "Role Clarity", desc: "Provides absolute clarity in the roles, responsibilities, and obligations of both parties." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    faqs={[
                        {
                            question: "What does a contract lawyer do?",
                            answer: "A contract lawyer drafts, reviews, and negotiates agreements to ensure they are legally valid and protect the interests of the parties involved."
                        },
                        {
                            question: "When should I consult a contract lawyer?",
                            answer: "It is recommended to consult a lawyer before signing any business agreement, partnership contract, employment contract, or vendor agreement."
                        },
                        {
                            question: "Can a contract lawyer review an existing agreement?",
                            answer: "Yes. Lawyers can review existing agreements, identify potential legal risks, and suggest modifications."
                        },
                        {
                            question: "How long does it take to draft a contract?",
                            answer: "The timeline depends on the complexity of the agreement, but most contracts can be drafted within a few working days."
                        },
                        {
                            question: "Are online contract templates safe to use?",
                            answer: "Generic templates may not cover specific legal requirements. Professional drafting ensures the agreement is legally enforceable and customized to your situation."
                        }
                    ]}
                />

                <ReviewsSection
                    title="Client Success Stories"
                    subtitle="Trusted by businesses for flawless legal documentation."
                    reviews={[
                        {
                            name: "Sandeep Y.",
                            role: "Startup Founder",
                            company: "Tech Solutions Inc",
                            rating: 5,
                            initials: "SY",
                            text: "The contract lawyers on VyomBiz helped draft an airtight Founders Agreement that resolved a lot of ambiguity among the co-founders."
                        },
                        {
                            name: "Nidhi B.",
                            role: "HR Head",
                            company: "Retail Partners",
                            rating: 5,
                            initials: "NB",
                            text: "We used their services to overhaul our Employment and Non-Disclosure agreements. Very responsive and incredibly professional."
                        },
                        {
                            name: "Mohan C.",
                            role: "Freelancer",
                            company: "Independent Consultant",
                            rating: 4.8,
                            initials: "MC",
                            text: "I needed a standard consulting agreement for my clients. The turnaround was extremely fast, and the contract was perfectly tailored to my needs."
                        }
                    ]}
                />
            </div>
        </div>
    );
};

export default ContractLawyer;
