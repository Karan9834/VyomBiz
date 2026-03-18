import React from 'react';
import docImage from '../../../assets/environmental-doc.png';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const CyberCrimeLawyer = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="Cyber Crime"
                    heroTitleSuffix="Lawyers"
                    heroDescription="Cyber Crime Lawyer for Digital Fraud, Online Harassment & Data Theft. Get expert legal support from experienced cyber crime lawyers who understand digital laws, cyber investigations, and online dispute resolution."
                    stats={[
                        { count: "Legal", label: "Consultation" },
                        { count: "FIR", label: "Filing Assistance" },
                        { count: "Digital", label: "Rights Protection" },
                        { count: "24/7", label: "Legal Support" }
                    ]}
                    formTitle="Get Free Expert Consultation"
                />

                <DetailsLayout
                    overview={{
                        title: "Digital Offences —",
                        highlightTitle: "Overview",
                        description: [
                            "Cyber crime refers to illegal activities carried out through computers, digital systems, or the internet. These crimes target individuals, businesses, financial systems, or government infrastructure.",
                            "Cyber offences are governed under multiple laws in India including the Information Technology Act 2000 and the Indian Penal Code. Common offences include online financial fraud, identity theft, data theft, cyber stalking, and social media defamation.",
                            "Through Vyombiz, individuals and businesses can access legal professionals who specialize in cyber law and digital crime litigation. Legal intervention is critical to recover damages, track IP addresses, and take action against offenders."
                        ],
                        imageUrl: docImage
                    }}

                    advantages={{
                        title: "When to Consult",
                        subtitle: "Situations requiring a cyber crime lawyer",
                        list: [
                            { title: "Financial Fraud", desc: "Unauthorized transactions, banking fraud, cryptocurrency scams, or payment gateway issues." },
                            { title: "Social Harassment", desc: "Online stalking, threats, defamation, fake profiles, or severe cyber bullying." },
                            { title: "Data Breach", desc: "Illegal access, hacking, or theft of personal, medical, or corporate data." },
                            { title: "Identity Theft", desc: "Someone impersonating you online or misusing your digital identity." },
                            { title: "IP Theft", desc: "Copying digital content, software code, trademarks, or proprietary digital data." }
                        ]
                    }}

                    typesOfCompliance={{
                        title: "Our Services",
                        subtitle: "Comprehensive Cyber Crime Support",
                        list: [
                            { title: "Complaint & FIR", desc: "Preparation of complaints for cyber cells and legal guidance in filing FIRs for IT Act offences." },
                            { title: "Investigation Aid", desc: "Coordination with cyber police and investigative authorities to trace digital footprints." },
                            { title: "Fraud Recovery", desc: "Legal strategies for recovering lost funds from banking disputes and online marketplace scams." },
                            { title: "Dispute Resolution", desc: "Handling defamation, impersonation, and taking down offending online content urgently." },
                            { title: "Court Litigation", desc: "Resolute court representation by dedicated advocates in any cyber crime related disputes." }
                        ]
                    }}

                    eligibility={{
                        title: "Legal Framework",
                        subtitle: "Cyber Crime Laws in India",
                        list: [
                            { title: "IT Act, 2000", desc: "The primary law governing cyber offences in India including hacking, identity theft, and digital fraud." },
                            { title: "Indian Penal Code", desc: "Certain cyber offences fall under criminal law such as cheating, fraud, and criminal intimidation." },
                            { title: "Data Protection", desc: "Emerging regulations are strengthening protection against data misuse and digital exploitation." },
                            { title: "Copyright Act", desc: "Provisions addressing the theft of digital intellectual property and software piracy." }
                        ]
                    }}

                    process={{
                        title: "Process Workflow",
                        subtitle: "Taking action against cyber criminals",
                        steps: [
                            { step: "01", title: "Submit Evidence", desc: "Gather and share information, screenshots, logs, and evidence of the incident." },
                            { step: "02", title: "Consultation", desc: "A cyber crime lawyer reviews your case, assesses jurisdiction, and suggests legal options." },
                            { step: "03", title: "Cyber Cell Filing", desc: "Our lawyers strictly assist with drafting and filing complaints with the national cyber crime portal." },
                            { step: "04", title: "Legal Action", desc: "Pursuing FIR registration, coordination with investigators, and court representation if needed." }
                        ]
                    }}

                    features={{
                        title: "Why Hire a Cyber Lawyer?",
                        subtitle: "Expertise in complex digital law",
                        list: [
                            { title: "Technical Laws", desc: "Deep understanding of niche cyber laws and digital rights." },
                            { title: "Digital Evidence", desc: "Knowledge of how to collect, preserve, and authenticate digital evidence under Section 65B." },
                            { title: "Authority Liaison", desc: "Effective communication with cyber investigation authorities and nodal officers." },
                            { title: "Asset Protection", desc: "Urgent measures to protect your financial and digital assets from further compromise." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    faqs={[
                        {
                            question: "What should I do if I become a victim of cyber crime?",
                            answer: "Immediately collect evidence such as screenshots, transaction details, and messages. Report the incident to the cyber crime portal and consult a cyber lawyer."
                        },
                        {
                            question: "Can cyber crimes be traced?",
                            answer: "Yes. Cyber investigators use digital tracking, IP tracing, and forensic tools to identify offenders."
                        },
                        {
                            question: "How long does a cyber crime case take?",
                            answer: "The duration depends on the nature of the offence, evidence available, and legal proceedings involved."
                        },
                        {
                            question: "Can I recover money lost in online fraud?",
                            answer: "In many cases recovery is possible through quick reporting and legal action freezing the accused's accounts."
                        },
                        {
                            question: "Do businesses also need cyber crime lawyers?",
                            answer: "Yes. Companies facing data breaches, online fraud, or digital reputation damage often require cyber legal support."
                        }
                    ]}
                />

                <ReviewsSection
                    title="Client Success Stories"
                    subtitle="Trusted by individuals and businesses to fight digital crime."
                    reviews={[
                        {
                            name: "Vivek S.",
                            role: "Victim of Fraud",
                            company: "Phishing Scam",
                            rating: 5,
                            initials: "VS",
                            text: "I lost my savings to a phishing link. The cyber lawyer helped file a fast complaint and got my bank accounts frozen, helping recover most of the amount."
                        },
                        {
                            name: "Kavita M.",
                            role: "Blogger",
                            company: "Harassment Case",
                            rating: 5,
                            initials: "KM",
                            text: "I was facing severe online stalking and defamation. The legal team worked with the cyber police to identify the culprit and issue a strong legal notice."
                        },
                        {
                            name: "Mohit G.",
                            role: "IT Director",
                            company: "Data Breach",
                            rating: 4.8,
                            initials: "MG",
                            text: "Very knowledgeable about the IT Act. They guided our company safely through a minor internal data breach incident."
                        }
                    ]}
                />
            </div>
        </div>
    );
};

export default CyberCrimeLawyer;
