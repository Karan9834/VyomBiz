import React from 'react';
import docImage from '../../../assets/environmental-doc.png';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const FamilyLawyer = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="Family"
                    heroTitleSuffix="Lawyers"
                    heroDescription="Family disputes can be emotional and legally complex. Having the right legal guidance ensures your rights, relationships, and future are protected. Connect with experienced Family Lawyers who help resolve disputes with clarity, strategy, and sensitivity."
                    stats={[
                        { count: "Expert", label: "Consultation" },
                        { count: "95%", label: "Resolution Rate" },
                        { count: "24/7", label: "Legal Advice" },
                        { count: "500+", label: "Verified Experts" }
                    ]}
                    formTitle="Get Free Expert Consultation"
                />

                <DetailsLayout
                    overview={{
                        title: "Family Law —",
                        highlightTitle: "Overview",
                        description: [
                            "Family law covers a wide range of legal matters involving relationships, marriage, children, and family property. Our experienced lawyers provide strategic legal guidance to help you resolve sensitive matters efficiently and lawfully.",
                            "Through Vyombiz managed by Clink Consultancy Services Private Limited, clients can easily connect with verified family law experts who understand both the emotional and legal aspects of family disputes.",
                            "Early legal advice can prevent complications and help you make informed decisions when facing complex family issues."
                        ],
                        imageUrl: docImage
                    }}

                    advantages={{
                        title: "Why Legal Help Matters",
                        subtitle: "Importance of Legal Guidance",
                        list: [
                            { title: "Understanding Rights", desc: "Understand your legal rights and complex obligations." },
                            { title: "Documentation", desc: "Proper handling of sensitive court documentation and filings." },
                            { title: "Negotiation", desc: "Strategic negotiation for fair out-of-court settlements." },
                            { title: "Protecting Children", desc: "Protecting the long-term interests and welfare of children." },
                            { title: "Efficient Resolution", desc: "Efficient resolution of emotionally charged and difficult disputes." }
                        ]
                    }}

                    typesOfCompliance={{
                        title: "Our Expertise",
                        subtitle: "Key Family Law Services",
                        list: [
                            { title: "Divorce & Separation", desc: "Mutual or contested petitions, court representation, and settlement guidance." },
                            { title: "Child Custody", desc: "Petitions, visitation rights, and parental rights disputes focusing on child welfare." },
                            { title: "Alimony & Maintenance", desc: "Determining fair maintenance based on legal provisions and life circumstances." },
                            { title: "Domestic Violence", desc: "Filing complaints, obtaining protection orders, and victim representation." },
                            { title: "Property Settlement", desc: "Mediating division of family property and resolving inheritance disputes." },
                            { title: "Adoption", desc: "Guiding families through legal adoption procedures and compliance." }
                        ]
                    }}

                    eligibility={{
                        title: "Legal Framework",
                        subtitle: "Key Family Laws in India",
                        list: [
                            { title: "Marriage Acts", desc: "Hindu Marriage Act, 1955 & Special Marriage Act, 1954." },
                            { title: "Domestic Violence", desc: "Protection of Women from Domestic Violence Act, 2005." },
                            { title: "Custody Laws", desc: "Guardians and Wards Act, 1890 focusing on child welfare." },
                            { title: "Adoption & Maintenance", desc: "Hindu Adoption and Maintenance Act, 1956 governing support." }
                        ]
                    }}

                    process={{
                        title: "Our Process",
                        subtitle: "How we navigate family disputes",
                        steps: [
                            { step: "01", title: "Case Assessment", desc: "Consult with a qualified family lawyer to explain your situation and options." },
                            { step: "02", title: "Legal Strategy", desc: "Preparation of a tailored approach, whether negotiation, mediation, or litigation." },
                            { step: "03", title: "Documentation", desc: "Filing necessary legal documents, petitions, and gathering supporting evidence." },
                            { step: "04", title: "Representation", desc: "Strongly advocating for your interests in court until the matter is legally resolved." }
                        ]
                    }}

                    features={{
                        title: "When to Consult",
                        subtitle: "Situations requiring a family lawyer",
                        list: [
                            { title: "Divorce Planning", desc: "Planning for a mutual or contested divorce and seeking clarity." },
                            { title: "Custody Disputes", desc: "Disagreements regarding child custody, welfare, or visitation rights." },
                            { title: "Domestic Abuse", desc: "Facing domestic violence, threats, or harassment situations." },
                            { title: "Financial Disputes", desc: "Maintenance, alimony disagreements, or financial negligence." },
                            { title: "Inheritance", desc: "Complex family property, partition suits, or inheritance disputes." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    faqs={[
                        {
                            question: "What does a family lawyer do?",
                            answer: "A family lawyer handles legal matters related to marriage, divorce, child custody, maintenance, domestic violence, and family property disputes."
                        },
                        {
                            question: "How much does a family lawyer cost in India?",
                            answer: "Legal fees vary depending on the complexity of the case, lawyer experience, and court proceedings involved."
                        },
                        {
                            question: "Can divorce be completed without going to court?",
                            answer: "In some cases, mutual divorce settlements may require limited court hearings, but legal procedures must still be followed."
                        },
                        {
                            question: "How long does a divorce case take in India?",
                            answer: "Mutual divorce cases may take around 6 months, while contested divorce cases can take longer depending on the circumstances."
                        }
                    ]}
                />

                <ReviewsSection
                    title="Client Success Stories"
                    subtitle="Trusted by families for sensitive and expert legal handling."
                    reviews={[
                        {
                            name: "Sunita M.",
                            role: "Client",
                            company: "Property Dispute",
                            rating: 5,
                            initials: "SM",
                            text: "We were trapped in a decade-long family property dispute. The lawyer mediated brilliantly and helped us reach an out-of-court settlement."
                        },
                        {
                            name: "Ramesh P.",
                            role: "Client",
                            company: "Custody Case",
                            rating: 5,
                            initials: "RP",
                            text: "Very compassionate and professional. They handled my complex child custody case and ensured I retained my parental rights."
                        },
                        {
                            name: "Anonymous User",
                            role: "Client",
                            company: "Domestic Violence",
                            rating: 5,
                            initials: "AU",
                            text: "Their immediate action in getting a protection order saved me from an abusive situation. Extremely grateful for their swift response."
                        }
                    ]}
                />
            </div>
        </div>
    );
};

export default FamilyLawyer;
