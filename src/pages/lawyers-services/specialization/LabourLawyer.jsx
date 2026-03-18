import React from 'react';
import docImage from '../../../assets/environmental-doc.png';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const LabourLawyer = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="Labour Law"
                    heroTitleSuffix="Lawyers"
                    heroDescription="Hiring employees is easy. Managing labour law compliance is not. From employment contracts to workplace disputes, a Labour Lawyer helps businesses stay compliant, avoid penalties, and build legally secure workplaces."
                    stats={[
                        { count: "Expert", label: "Legal Advice" },
                        { count: "95%", label: "Success Rate" },
                        { count: "24/7", label: "Support" },
                        { count: "500+", label: "Verified Lawyers" }
                    ]}
                    formTitle="Get Free Expert Consultation"
                />

                <DetailsLayout
                    overview={{
                        title: "Labour Law —",
                        highlightTitle: "Overview",
                        description: [
                            "A Labour Lawyer specializes in employment and workplace laws that govern the relationship between employers and employees. Businesses must comply with several labour regulations related to hiring, wages, working conditions, benefits, and employee termination.",
                            "Through Vyombiz managed by Clink Consultancy Services Private Limited, businesses gain access to experienced labour lawyers who help manage complex labour regulations.",
                            "By taking a proactive approach to labour compliance, companies can easily reduce legal risks, avoid costly penalties, and create compliant HR systems."
                        ],
                        imageUrl: docImage
                    }}

                    advantages={{
                        title: "Why Hire a Lawyer",
                        subtitle: "Why Businesses Need Professional Support",
                        list: [
                            { title: "Ensure Compliance", desc: "Ensure complete compliance with constantly evolving labour regulations." },
                            { title: "Drafting Contracts", desc: "Draft legally sound employment contracts and appointment letters." },
                            { title: "Manage Grievances", desc: "Handle internal employee grievances and prevent major legal disputes." },
                            { title: "Legal Representation", desc: "Represent the company effectively before labour courts and tribunals." },
                            { title: "HR Policies", desc: "Establish strong, compliant workplace and HR policies for smooth operations." }
                        ]
                    }}

                    typesOfCompliance={{
                        title: "Our Expertise",
                        subtitle: "Labour Law Services We Offer",
                        list: [
                            { title: "Employment Contracts", desc: "Preparing legally compliant contracts, appointment letters, and termination clauses." },
                            { title: "Compliance Advisory", desc: "Helping businesses stay aligned with wage, safety, and health regulations." },
                            { title: "Dispute Resolution", desc: "Resolving wage conflicts, harassment complaints, or termination disputes." },
                            { title: "HR Policy Drafting", desc: "Developing company codes of conduct, ethics policies, and grievance mechanisms." },
                            { title: "Legal Representation", desc: "Representation before labour commissioners, industrial tribunals, and courts." },
                            { title: "Exit Management", desc: "Handling layoffs and resignations lawfully to avoid legal blowback." }
                        ]
                    }}

                    eligibility={{
                        title: "Key Laws",
                        subtitle: "Key Labour Laws & Common Issues",
                        list: [
                            { title: "Industrial Disputes Act", desc: "Governs the investigation and settlement of industrial disputes." },
                            { title: "Wages Acts", desc: "Minimum Wages & Payment of Wages Act regulating fair compensation." },
                            { title: "Social Security", desc: "EPF & ESI Acts providing provident fund and insurance benefits." },
                            { title: "Maternity & Gratuity", desc: "Maternity Benefit Act and Payment of Gratuity Act covering major employee benefits." },
                            { title: "Common Risks", desc: "Wrongful termination, wage disputes, harassment, and contract employee issues." }
                        ]
                    }}

                    features={{
                        title: "Our Edge",
                        subtitle: "How Our Labour Lawyers Help",
                        list: [
                            { title: "Tailored Support", desc: "Structured legal support tailored to specific business needs." },
                            { title: "Risk Mitigation", desc: "Focusing on preventive measures to mitigate compliance risks early on." },
                            { title: "Focus on Growth", desc: "This approach ensures businesses can focus on growth while experts manage compliance." },
                            { title: "Expert Representation", desc: "Strong defense against frivolous employee claims in labour courts." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    faqs={[
                        {
                            question: "Why does my business need a labour lawyer?",
                            answer: "A labour lawyer ensures compliance with complex workplace regulations, manages employee disputes, and protects the business from legal penalties and litigation."
                        },
                        {
                            question: "Can a labour lawyer help with wrongful termination claims?",
                            answer: "Yes. They represent businesses in defending against wrongful termination claims and ensure that dismissal procedures follow legal requirements."
                        },
                        {
                            question: "What are the key labour laws in India?",
                            answer: "Key laws include the Industrial Disputes Act, Minimum Wages Act, EPF Act, ESI Act, and the Maternity Benefit Act, among others."
                        },
                        {
                            question: "How do I handle a workplace harassment complaint?",
                            answer: "Workplace harassment must be handled through a defined internal committee and grievance mechanism. A labour lawyer can help establish these compliant systems."
                        }
                    ]}
                />

                <ReviewsSection
                    title="Client Success Stories"
                    subtitle="Trusted by companies to build secure and legally compliant workplaces."
                    reviews={[
                        {
                            name: "Sanjay T.",
                            role: "HR Director",
                            company: "Manufacturing Firm",
                            rating: 5,
                            initials: "ST",
                            text: "We were facing a major industrial dispute. The labour lawyer provided excellent representation and helped us negotiate a fair settlement with the union."
                        },
                        {
                            name: "Pooja D.",
                            role: "Founder",
                            company: "Tech Startup",
                            rating: 5,
                            initials: "PD",
                            text: "They drafted all our employment contracts and HR policies from scratch, ensuring we are 100% compliant with state laws."
                        },
                        {
                            name: "Vikram R.",
                            role: "Operations Manager",
                            company: "Retail Chain",
                            rating: 4.8,
                            initials: "VR",
                            text: "Very helpful during our recent restructuring. They guided us on the lawful way to handle layoffs and severance."
                        }
                    ]}
                />
            </div>
        </div>
    );
};

export default LabourLawyer;
