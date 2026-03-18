import React from 'react';
import docImage from '../../../assets/environmental-doc.png';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const CustomerProtectionLawyer = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="Customer"
                    heroTitleSuffix="Protection Lawyers"
                    heroDescription="Protect Your Consumer Rights with Expert Legal Support. Facing unfair business practices, defective products, or misleading services? A Customer Protection Lawyer helps you fight back legally and claim the compensation you deserve."
                    stats={[
                        { count: "File", label: "Complaints" },
                        { count: "Claim", label: "Compensation" },
                        { count: "Resolve", label: "Disputes Quickly" },
                        { count: "24/7", label: "Consultation" }
                    ]}
                    formTitle="Get Free Expert Consultation"
                />

                <DetailsLayout
                    overview={{
                        title: "Consumer Rights —",
                        highlightTitle: "Overview",
                        description: [
                            "A Customer Protection Lawyer specializes in handling legal matters related to consumer rights. These lawyers help individuals and businesses address issues such as defective products, poor service quality, false advertising, unfair trade practices, and financial losses.",
                            "Consumer laws protect buyers, but many struggle to navigate legal procedures, documentation, and court processes. A customer protection lawyer simplifies this by providing strategic legal support and ensuring your complaint is filed correctly under consumer protection regulations.",
                            "At Vyombiz managed by Clink Consultancy Services Private Limited, experienced legal professionals assist clients in resolving consumer disputes efficiently through the appropriate consumer forums and legal channels."
                        ],
                        imageUrl: docImage
                    }}

                    advantages={{
                        title: "When You Need Help",
                        subtitle: "Situations requiring a lawyer",
                        list: [
                            { title: "Defective Products", desc: "If a purchased product fails to meet promised standards or causes damage, legal action can be taken against the seller." },
                            { title: "Poor Services", desc: "Services that are delivered negligently, incompletely, or below promised standards qualify for compensation claims." },
                            { title: "Misleading Ads", desc: "False marketing claims or deceptive promotions that mislead customers can be challenged legally." },
                            { title: "Unfair Trade", desc: "Businesses engaging in unethical practices or e-commerce purchases involving non-delivery or fraud." }
                        ]
                    }}

                    eligibility={{
                        title: "Consumer Rights",
                        subtitle: "Rights every customer possesses",
                        list: [
                            { title: "Safety & Choice", desc: "Protection against hazardous goods and freedom to choose from a variety of goods at competitive prices." },
                            { title: "Information", desc: "Right to accurate information regarding quality, quantity, price, and standards of products." },
                            { title: "Be Heard", desc: "Consumers have the right to raise complaints and ensure their concerns are considered." },
                            { title: "Seek Redressal", desc: "Customers can demand compensation for damages or unfair practices through formal legal forums." }
                        ]
                    }}

                    typesOfCompliance={{
                        title: "Legal Services",
                        subtitle: "End-to-End Consumer Legal Support",
                        list: [
                            { title: "Complaint Filing", desc: "Assistance in drafting and submitting consumer complaints to the appropriate forum." },
                            { title: "Legal Notices", desc: "Preparation and serving of legal notices to companies or service providers involved." },
                            { title: "Court Representation", desc: "Legal representation before district, state, or national consumer forums." },
                            { title: "Compensation Claims", desc: "Assistance in claiming refunds, replacements, damages, or financial compensation." }
                        ]
                    }}

                    process={{
                        title: "How It Works",
                        subtitle: "Filing a consumer complaint",
                        steps: [
                            { step: "01", title: "Evaluation", desc: "Our legal experts review your issue, documentation, and the legal options available." },
                            { step: "02", title: "Legal Notice", desc: "We prepare the necessary documents and issue formal legal notices to the concerned party." },
                            { step: "03", title: "Filing", desc: "If ignored, your case is officially filed in the appropriate consumer disputes redressal commission." },
                            { step: "04", title: "Hearings", desc: "Our legal professionals represent you throughout the hearings and proceedings." },
                            { step: "05", title: "Resolution", desc: "We ensure you secure the best possible outcome, including refunds or compensation." }
                        ]
                    }}

                    features={{
                        title: "Why Hire a Lawyer?",
                        subtitle: "Maximize your chances of justice",
                        list: [
                            { title: "Expert Guidance", desc: "Professionals ensure that your case is legally strong and properly formatted." },
                            { title: "Faster Resolution", desc: "Legal experts help avoid devastating delays caused by incorrect procedural filings." },
                            { title: "Higher Compensation", desc: "Lawyers help present strong evidence effectively to maximize the final compensation." },
                            { title: "Stress-Free Process", desc: "You receive guidance throughout the entire duration, reducing anxiety and effort." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    faqs={[
                        {
                            question: "What cases can be filed in consumer court?",
                            answer: "Cases related to defective products, poor services, false advertising, unfair trade practices, and e-commerce disputes can be filed in consumer courts."
                        },
                        {
                            question: "Can I file a consumer complaint online?",
                            answer: "Yes. Consumers can file complaints online through government portals or with legal assistance to ensure proper documentation."
                        },
                        {
                            question: "How long does a consumer complaint take?",
                            answer: "The timeline varies depending on the complexity of the case, but consumer forums are designed to resolve disputes faster than regular courts."
                        },
                        {
                            question: "What compensation can I claim?",
                            answer: "Compensation may include product replacement, refund, financial damages, mental agony compensation, or service correction."
                        }
                    ]}
                />

                <ReviewsSection
                    title="Client Success Stories"
                    subtitle="Trusted by consumers for effective legal remedies."
                    reviews={[
                        {
                            name: "Deepak R.",
                            role: "Patient",
                            company: "Medical Negligence",
                            rating: 5,
                            initials: "DR",
                            text: "I was struggling with a hospital that overcharged me significantly. The lawyer filed a consumer case and helped me get a full refund plus compensation."
                        },
                        {
                            name: "Pooja K.",
                            role: "Customer",
                            company: "E-commerce Dispute",
                            rating: 5,
                            initials: "PK",
                            text: "An online electronics store refused to replace a defective laptop. A simple legal notice drafted by the lawyer forced them to send a replacement."
                        },
                        {
                            name: "Sanjay V.",
                            role: "Homebuyer",
                            company: "Real Estate",
                            rating: 4.8,
                            initials: "SV",
                            text: "The builder delayed possession by 2 years. Our consumer protection lawyer successfully got us penalty and interest from the developer."
                        }
                    ]}
                />
            </div>
        </div>
    );
};

export default CustomerProtectionLawyer;
