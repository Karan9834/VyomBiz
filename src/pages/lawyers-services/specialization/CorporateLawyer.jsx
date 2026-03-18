import React from 'react';
import docImage from '../../../assets/environmental-doc.png';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const CorporateLawyer = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="Corporate"
                    heroTitleSuffix="Lawyers"
                    heroDescription="Strategic Legal Support for Companies at Every Stage. Running a business means making decisions that carry legal impact. A corporate lawyer ensures your business operates within the law while protecting it from risks, disputes, and compliance issues."
                    stats={[
                        { count: "Business", label: "Structuring" },
                        { count: "Contract", label: "Management" },
                        { count: "Legal", label: "Compliance" }
                    ]}
                    formTitle="Get Free Expert Consultation"
                />

                <DetailsLayout
                    overview={{
                        title: "Corporate Law —",
                        highlightTitle: "Overview",
                        description: [
                            "Corporate law is not only about solving legal problems — it’s about preventing them before they arise.",
                            "A corporate lawyer helps businesses structure companies legally, draft and review contracts, ensure regulatory compliance, manage shareholder relations, handle mergers, acquisitions, and restructuring, and resolve corporate disputes.",
                            "Professional legal guidance helps businesses avoid penalties, reduce legal risk, and build stronger corporate governance. Vyombiz managed by Clink Consultancy Services Private Limited works with experienced legal professionals who understand the complexities of modern businesses and evolving regulatory requirements."
                        ],
                        imageUrl: docImage
                    }}

                    advantages={{
                        title: "Legal Services",
                        subtitle: "Our Corporate Lawyer Services",
                        list: [
                            { title: "Business Formation", desc: "Company incorporation guidance, shareholding structure planning, partnership agreements, and founder agreements." },
                            { title: "Contract Drafting", desc: "Business agreements, vendor contracts, shareholder agreements, service agreements, and employment contracts." },
                            { title: "Corporate Compliance", desc: "Corporate governance compliance, ROC filings, board resolutions, statutory compliance, and risk audits." },
                            { title: "M&A", desc: "Due diligence, M&A legal advisory, transaction structuring, and share purchase agreements." },
                            { title: "Dispute Prevention", desc: "Handling shareholder disputes, contractual conflicts, partnership disputes, arbitration, and mediation." }
                        ]
                    }}

                    eligibility={{
                        title: "Why Hire?",
                        subtitle: "Benefits of Hiring a Corporate Lawyer",
                        list: [
                            { title: "Legal Protection", desc: "Strong legal protection for business operations." },
                            { title: "Reduced Risks", desc: "Reduced regulatory risks and penalties." },
                            { title: "Contract Management", desc: "Professional contract management and drafting." },
                            { title: "Dispute Prevention", desc: "Better dispute prevention and early resolution." },
                            { title: "Strategic Guidance", desc: "Support for business expansion, mergers, and investments." }
                        ]
                    }}

                    features={{
                        title: "Our Edge",
                        subtitle: "Why Choose Vyombiz for Corporate Law",
                        list: [
                            { title: "Experienced Team", desc: "Access to experienced corporate legal professionals." },
                            { title: "Business-Focused", desc: "Business-focused legal solutions designed for growth." },
                            { title: "Transparent Process", desc: "Transparent service process and prompt communication." },
                            { title: "Faster Turnaround", desc: "Quicker documentation and agile legal advisory." }
                        ]
                    }}

                    process={{
                        title: "How It Works",
                        subtitle: "A streamlined corporate legal process",
                        steps: [
                            { step: "01", title: "Legal Consultation", desc: "Discuss your business requirements with an experienced corporate lawyer." },
                            { step: "02", title: "Review", desc: "The lawyer reviews contracts, structure, and legal risks involved." },
                            { step: "03", title: "Strategy", desc: "A legal strategy is prepared along with required agreements or filings." },
                            { step: "04", title: "Implementation", desc: "Continuous support ensures compliance and legal protection for your business." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    faqs={[
                        {
                            question: "What does a corporate lawyer do?",
                            answer: "A corporate lawyer provides legal guidance related to company formation, contracts, compliance, mergers, corporate governance, and dispute resolution for businesses."
                        },
                        {
                            question: "When should a business hire a corporate lawyer?",
                            answer: "Businesses should consult a corporate lawyer during company formation, contract drafting, regulatory compliance, mergers, partnerships, or when legal disputes arise."
                        },
                        {
                            question: "Do startups need corporate lawyers?",
                            answer: "Yes. Startups benefit greatly from corporate lawyers who help structure the business properly, draft founder agreements, protect intellectual property, and ensure regulatory compliance."
                        },
                        {
                            question: "Can a corporate lawyer help with business contracts?",
                            answer: "Yes. Corporate lawyers draft, review, and negotiate business contracts to ensure legal protection and clarity between parties."
                        },
                        {
                            question: "How can corporate legal services help business growth?",
                            answer: "Corporate legal services reduce risks, protect business interests, ensure compliance, and provide legal guidance during expansion, investments, or restructuring."
                        }
                    ]}
                />

                <ReviewsSection
                    title="Client Success Stories"
                    subtitle="Trusted by fast-growing startups and enterprises."
                    reviews={[
                        {
                            name: "Rohan D.",
                            role: "Startup Founder",
                            company: "Tech Innovations",
                            rating: 5,
                            initials: "RD",
                            text: "VyomBiz connected us with a corporate lawyer who structured our founder agreements seamlessly. Highly professional and efficient."
                        },
                        {
                            name: "Meenakshi S.",
                            role: "Director",
                            company: "Retail Ventures",
                            rating: 4.8,
                            initials: "MS",
                            text: "Outstanding compliance support! They saved us from potential regulatory penalties by handling our ROC filings properly."
                        },
                        {
                            name: "Amit P.",
                            role: "CEO",
                            company: "Logistics Pro",
                            rating: 5,
                            initials: "AP",
                            text: "The M&A advisory was top-notch. They handled due diligence and documentation flawlessly during our acquisition of a smaller firm."
                        }
                    ]}
                />
            </div>
        </div>
    );
};

export default CorporateLawyer;
