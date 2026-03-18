import React from 'react';
import docImage from '../../../assets/environmental-doc.png';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const GSTLawyer = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="GST Issues"
                    heroTitleSuffix="Lawyers"
                    heroDescription="Let a GST Lawyer Handle It. From GST notices to litigation and compliance, our experienced GST lawyers help businesses stay compliant and resolve disputes quickly."
                    stats={[
                        { count: "Expert", label: "Tax Consultation" },
                        { count: "99%", label: "Compliance Rate" },
                        { count: "24/7", label: "Legal Support" },
                        { count: "500+", label: "Verified Experts" }
                    ]}
                    formTitle="Get Free Expert Consultation"
                />

                <DetailsLayout
                    overview={{
                        title: "GST Law —",
                        highlightTitle: "Overview",
                        description: [
                            "Goods and Services Tax (GST) has transformed the indirect tax system in India. While GST simplifies taxation, it also brings complex compliance rules, regulatory procedures, and legal challenges.",
                            "At Vyombiz managed by Clink Consultancy Services Private Limited, our GST lawyers help businesses navigate GST laws efficiently.",
                            "Whether you need help responding to a GST notice, filing an appeal, or ensuring full GST compliance, our legal experts provide structured and practical solutions."
                        ],
                        imageUrl: docImage
                    }}

                    advantages={{
                        title: "Role & Function",
                        subtitle: "What Does a GST Lawyer Do?",
                        list: [
                            { title: "Advisory", desc: "Advising businesses on GST laws and tax implications." },
                            { title: "Notice Handling", desc: "Handling GST notices and departmental inquiries." },
                            { title: "Litigation", desc: "Representing businesses in litigation and appeals." },
                            { title: "Refunds & Audits", desc: "Managing GST refunds, assessments, and audits." },
                            { title: "Tax Planning", desc: "Providing strategic tax planning and compliance support." }
                        ]
                    }}

                    typesOfCompliance={{
                        title: "Our Expertise",
                        subtitle: "GST Legal Services We Provide",
                        list: [
                            { title: "Notice Support", desc: "Preparation of legal responses to GST notices and representation before authorities." },
                            { title: "Compliance Advisory", desc: "Assistance in obtaining GST registration and understanding compliance obligations." },
                            { title: "Appeals & Disputes", desc: "Filing appeals and representing cases for tax disputes or unfavorable orders." },
                            { title: "Refunds & ITC", desc: "Resolving delayed refunds, ITC mismatches, and handling rejected credit claims." },
                            { title: "Audit & Investigation", desc: "Guiding businesses through GST audits or departmental investigations." },
                            { title: "Tax Planning", desc: "Strategic tax planning to optimize liability while remaining fully compliant." }
                        ]
                    }}

                    eligibility={{
                        title: "When to Consult",
                        subtitle: "Situations requiring a GST lawyer",
                        list: [
                            { title: "GST Notices", desc: "You have received GST notices or demand orders from the tax department." },
                            { title: "Compliance Violations", desc: "Facing tax penalties, interest, or compliance violations." },
                            { title: "Tax Litigation", desc: "Involved in GST litigation or disputes with tax authorities." },
                            { title: "ITC Disputes", desc: "Facing issues related to input tax credit (ITC) mismatches or denials." },
                            { title: "Refund Delays", desc: "Experiencing GST refund delays or dealing with rejected refund claims." },
                            { title: "Audits", desc: "Your business is undergoing a GST audit or departmental investigation." }
                        ]
                    }}

                    process={{
                        title: "How It Works",
                        subtitle: "How Our GST Legal Process Works",
                        steps: [
                            { step: "01", title: "Case Evaluation", desc: "Our GST lawyer reviews your issue, documents, and legal position." },
                            { step: "02", title: "Strategy & Advisory", desc: "We design a practical legal strategy based on your business situation." },
                            { step: "03", title: "Legal Representation", desc: "Our experts prepare responses, file appeals, and represent your case." },
                            { step: "04", title: "Resolution", desc: "We help close the issue and ensure your business remains compliant moving forward." }
                        ]
                    }}

                    features={{
                        title: "Our Edge",
                        subtitle: "Why Choose Vyombiz",
                        list: [
                            { title: "Expert Representation", desc: "Strong representation before GST tribunals and appellate authorities." },
                            { title: "Timely Filings", desc: "Ensuring all appeals, notices, and replies are handled within strict legal deadlines." },
                            { title: "Practical Advice", desc: "Business-oriented tax advice that minimizes disruption to your daily operations." },
                            { title: "Transparent Pricing", desc: "Clear fee structure with no hidden costs for our legal services." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    faqs={[
                        {
                            question: "What is the role of a GST lawyer?",
                            answer: "A GST lawyer handles legal matters related to GST laws including notices, disputes, litigation, compliance advisory, and representation before GST authorities."
                        },
                        {
                            question: "When should a business hire a GST lawyer?",
                            answer: "A business should consult a GST lawyer when it receives GST notices, faces penalties, enters tax disputes, or requires legal support for compliance and audits."
                        },
                        {
                            question: "Can a GST lawyer help with tax disputes?",
                            answer: "Yes. GST lawyers represent businesses in litigation and appeals before GST authorities and tribunals to resolve tax disputes."
                        },
                        {
                            question: "How long does it take to resolve GST disputes?",
                            answer: "The timeline depends on the complexity of the case, documentation, and authority procedures. A GST lawyer helps streamline the process for faster resolution."
                        }
                    ]}
                />

                <ReviewsSection
                    title="Client Success Stories"
                    subtitle="Trusted by businesses for resolving complex GST disputes."
                    reviews={[
                        {
                            name: "Tarun M.",
                            role: "Business Owner",
                            company: "Retail Pro",
                            rating: 5,
                            initials: "TM",
                            text: "We received a massive demand notice due to an ITC mismatch. The GST lawyer from Vyombiz filed a strong reply and the demand was dropped entirely."
                        },
                        {
                            name: "Anjali S.",
                            role: "Finance Manager",
                            company: "Logistics India",
                            rating: 5,
                            initials: "AS",
                            text: "Our GST refunds were stuck for over 6 months. The legal team escalated the matter perfectly and we received our refunds within weeks."
                        },
                        {
                            name: "Ravi K.",
                            role: "Director",
                            company: "Export Hub",
                            rating: 4.8,
                            initials: "RK",
                            text: "Very knowledgeable regarding export-related GST compliance. They helped us navigate a complex departmental audit smoothly."
                        }
                    ]}
                />
            </div>
        </div>
    );
};

export default GSTLawyer;
