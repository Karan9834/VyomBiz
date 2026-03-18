import React from 'react';
import docImage from '../../../assets/environmental-doc.png';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const DivorceLawyer = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="Divorce"
                    heroTitleSuffix="Lawyers"
                    heroDescription="Expert Legal Support for a Smooth and Fair Divorce Process. Get expert divorce legal assistance for mutual consent or contested divorces. Connect with top divorce lawyers to protect your rights."
                    stats={[
                        { count: "Expert", label: "Divorce Advice" },
                        { count: "95%", label: "Success Rate" },
                        { count: "24/7", label: "Consultation" },
                        { count: "500+", label: "Verified Lawyers" }
                    ]}
                    formTitle="Get Free Expert Consultation"
                />

                <DetailsLayout
                    overview={{
                        title: "Divorce Law —",
                        highlightTitle: "Overview",
                        description: [
                            "Divorce can be emotionally and legally complex. Having the right legal guidance helps you protect your rights, finances, and future.",
                            "At Vyombiz, experienced divorce lawyers assist individuals with mutual consent divorce, contested divorce, child custody, alimony claims, and settlement negotiations—ensuring a fair and legally sound resolution.",
                            "Vyombiz managed by Clink Consultancy Services Private Limited provides professional legal consultation and representation to help you navigate divorce proceedings with clarity and confidence."
                        ],
                        imageUrl: docImage
                    }}

                    typesOfCompliance={{
                        title: "Legal Services",
                        subtitle: "Our Divorce Lawyers Help With",
                        list: [
                            { title: "Mutual Divorce", desc: "When both spouses agree to end the marriage, lawyers assist with documentation and court filing." },
                            { title: "Contested Divorce", desc: "If spouses disagree, legal representation protects your rights during court proceedings." },
                            { title: "Child Custody", desc: "Lawyers help determine arrangements that prioritize the child's best interests." },
                            { title: "Alimony", desc: "Legal experts help determine fair financial support based on income and legal obligations." },
                            { title: "Property Division", desc: "Proper legal strategy guarantees a fair split of property and assets." }
                        ]
                    }}

                    eligibility={{
                        title: "Legal Grounds",
                        subtitle: "Divorce Laws in India",
                        list: [
                            { title: "Governing Acts", desc: "Hindu Marriage Act, 1955, Special Marriage Act, 1954, Indian Divorce Act, 1869, Muslim Personal Law." },
                            { title: "Cruelty", desc: "Mental or physical cruelty inflicted upon a spouse." },
                            { title: "Adultery or Desertion", desc: "Engaging in relations outside marriage or abandoning a spouse without justification." },
                            { title: "Mental Disorder", desc: "Incurable mental illness making it impossible to cohabitate." },
                            { title: "Irretrievable Breakdown", desc: "A total and permanent fracture of the marriage where reconciliation is impossible." }
                        ]
                    }}

                    process={{
                        title: "Process Journey",
                        subtitle: "Divorce Process in India",
                        steps: [
                            { step: "01", title: "Legal Consultation", desc: "Initial discussion to evaluate your case and legal options." },
                            { step: "02", title: "Filing Petition", desc: "The petition is drafted and filed in the appropriate family court." },
                            { step: "03", title: "Court Hearings", desc: "Both parties present their arguments, evidence, and legal claims." },
                            { step: "04", title: "Mediation", desc: "Courts may encourage mediation for amicable resolution." },
                            { step: "05", title: "Final Decree", desc: "The court grants the divorce after reviewing all legal aspects." }
                        ]
                    }}

                    features={{
                        title: "Our Edge",
                        subtitle: "Why Choose Vyombiz",
                        list: [
                            { title: "Experienced Lawyers", desc: "Highly experienced divorce lawyers with deep family law expertise." },
                            { title: "Confidentiality", desc: "Absolute confidentiality and professional handling of sensitive cases." },
                            { title: "End-to-End Support", desc: "Comprehensive legal support from consultation to final decree." },
                            { title: "Transparent Guidance", desc: "Clear guidance on your rights, required documentation, and timelines." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    faqs={[
                        {
                            question: "How long does a divorce take in India?",
                            answer: "Mutual consent divorce generally takes 6 to 18 months, while contested divorce cases may take longer depending on disputes and court proceedings."
                        },
                        {
                            question: "Is hiring a divorce lawyer necessary?",
                            answer: "While not legally mandatory, a lawyer helps ensure proper documentation, representation, and legal protection during the process."
                        },
                        {
                            question: "Can divorce be completed without court appearance?",
                            answer: "Certain hearings may require personal presence, but lawyers can handle most legal procedures and filings."
                        },
                        {
                            question: "What is the difference between mutual and contested divorce?",
                            answer: "Mutual divorce occurs when both spouses agree to separate, while contested divorce happens when one party disputes the divorce or its terms."
                        }
                    ]}
                />

                <ReviewsSection
                    title="Client Success Stories"
                    subtitle="Trusted by individuals for empathetic and strong legal representation."
                    reviews={[
                        {
                            name: "Anonymous User",
                            role: "Client",
                            company: "Mutual Divorce",
                            rating: 5,
                            initials: "AU",
                            text: "The lawyer made the mutual divorce process incredibly smooth and painless. They handled all the paperwork and court dates efficiently."
                        },
                        {
                            name: "Priyanka S.",
                            role: "Client",
                            company: "Contested Case",
                            rating: 5,
                            initials: "PS",
                            text: "I was dealing with a very difficult contested divorce. My lawyer was fierce in court and got me the alimony I deserved."
                        },
                        {
                            name: "Naveen K.",
                            role: "Client",
                            company: "Child Custody",
                            rating: 4.8,
                            initials: "NK",
                            text: "Very professional and empathetic. They helped me secure joint custody of my children during an otherwise messy separation."
                        }
                    ]}
                />
            </div>
        </div>
    );
};

export default DivorceLawyer;
