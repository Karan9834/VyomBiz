import React from 'react';
import docImage from '../../../assets/environmental-doc.png';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const IntellectualPropertyLawyer = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="Intellectual Property"
                    heroTitleSuffix="Lawyers"
                    heroDescription="Protect What You Create. Secure What You Build. Your ideas, innovations, designs, and brand identity are valuable business assets. Our experienced IP Lawyers help businesses protect and enforce their rights."
                    stats={[
                        { count: "5,000+", label: "IP Audits" },
                        { count: "99%", label: "Registration Rate" },
                        { count: "24/7", label: "Consultation" },
                        { count: "500+", label: "Verified Experts" }
                    ]}
                    formTitle="Get Free Expert Consultation"
                />

                <DetailsLayout
                    overview={{
                        title: "IP Law —",
                        highlightTitle: "Overview",
                        description: [
                            "Intellectual Property refers to legal rights granted to creators and businesses for their original work and innovations. These rights protect creations such as inventions, brand names, logos, artistic works, product designs, and proprietary technologies.",
                            "IP protection allows owners to control how their creations are used commercially, preventing unauthorized copying or misuse.",
                            "Through Vyombiz managed by Clink Consultancy Services Private Limited, businesses can access experienced intellectual property lawyers who guide them through registration, protection, licensing, and dispute resolution."
                        ],
                        imageUrl: docImage
                    }}

                    advantages={{
                        title: "Why Protect IP",
                        subtitle: "Importance of IP Protection",
                        list: [
                            { title: "Brand Ownership", desc: "Establish strong brand ownership and prevent unauthorized use." },
                            { title: "Business Valuation", desc: "Increase overall business valuation and attract potential investors." },
                            { title: "Revenue Generation", desc: "Generate recurring revenue through licensing or franchising agreements." },
                            { title: "Competitive Edge", desc: "Strengthen competitive advantage and market position securely." }
                        ]
                    }}

                    typesOfCompliance={{
                        title: "Our Expertise",
                        subtitle: "Intellectual Property Services Offered",
                        list: [
                            { title: "Trademark", desc: "Protect your brand identity including name, logo, and taglines." },
                            { title: "Copyright", desc: "Protects creative works like content, code, music, and digital media." },
                            { title: "Patent", desc: "Exclusive rights for new inventions and technologies through filing and prosecution." },
                            { title: "Design", desc: "Protects the visual appearance of products like shapes and patterns." },
                            { title: "IP Litigation", desc: "Assistance in infringement cases, disputes, and legal enforcement." },
                            { title: "Licensing", desc: "Drafting and negotiating agreements for commercial exploitation of IP." }
                        ]
                    }}

                    process={{
                        title: "How It Works",
                        subtitle: "How Our IP Lawyers Help Businesses",
                        steps: [
                            { step: "01", title: "IP Consultation", desc: "Understanding your business model and intellectual assets." },
                            { step: "02", title: "Strategy Development", desc: "Identifying the most suitable protection method (Trademark, Patent, etc.)." },
                            { step: "03", title: "Filing & Documentation", desc: "Preparation and submission of applications with relevant authorities." },
                            { step: "04", title: "Registration & Support", desc: "Handling objections, examination processes, and formal approvals." }
                        ]
                    }}

                    features={{
                        title: "Our Edge",
                        subtitle: "Why Choose Our IP Lawyers",
                        list: [
                            { title: "Strategic Planning", desc: "Strategic IP protection planning and accurate legal documentation." },
                            { title: "Experienced Pros", desc: "Handled by highly experienced IP professionals." },
                            { title: "Fast Registration", desc: "Fast and efficient registration processes without unnecessary delays." },
                            { title: "Strong Enforcement", desc: "Strong legal enforcement support when your IP is infringed upon." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    faqs={[
                        {
                            question: "How long does trademark registration take in India?",
                            answer: "Trademark registration generally takes 6 to 12 months, depending on examination and objection stages."
                        },
                        {
                            question: "What is the validity of a trademark?",
                            answer: "A registered trademark in India is valid for 10 years and can be renewed indefinitely."
                        },
                        {
                            question: "Can startups register patents?",
                            answer: "Yes. Startups can apply for patent protection if their invention is new, innovative, and industrially applicable."
                        },
                        {
                            question: "Do I need a lawyer for copyright registration?",
                            answer: "While not mandatory, legal guidance helps ensure accurate filing and stronger protection of your work."
                        },
                        {
                            question: "What happens if someone copies my brand or invention?",
                            answer: "Legal action can be taken through infringement claims, cease-and-desist notices, and court proceedings to protect your rights."
                        }
                    ]}
                />

                <ReviewsSection
                    title="Client Success Stories"
                    subtitle="Trusted by creators and businesses to protect their most valuable assets."
                    reviews={[
                        {
                            name: "Sameer T.",
                            role: "Startup Founder",
                            company: "Tech Disruptors",
                            rating: 5,
                            initials: "ST",
                            text: "Our patent application was incredibly complex, but the IP lawyer from Vyombiz handled the technical drafting perfectly. Highly recommended."
                        },
                        {
                            name: "Priya V.",
                            role: "Designer",
                            company: "Creative Studio",
                            rating: 5,
                            initials: "PV",
                            text: "Someone was copying my clothing designs. The lawyer sent a strong cease-and-desist notice and successfully enforced my design rights."
                        },
                        {
                            name: "Karan M.",
                            role: "CEO",
                            company: "Retail Brand",
                            rating: 4.8,
                            initials: "KM",
                            text: "Smooth trademark registration process. They handled all the objections from the registry without any hassle."
                        }
                    ]}
                />
            </div>
        </div>
    );
};

export default IntellectualPropertyLawyer;
