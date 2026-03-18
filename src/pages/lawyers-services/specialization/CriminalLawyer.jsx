import React from 'react';
import docImage from '../../../assets/environmental-doc.png';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const CriminalLawyer = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="Criminal"
                    heroTitleSuffix="Lawyers"
                    heroDescription="Professional Defense When You Need It Most. Facing criminal charges is serious. Get expert legal representation for bail, trials, and case management from experienced criminal lawyers."
                    stats={[
                        { count: "Expert", label: "Trial Lawyers" },
                        { count: "98%", label: "Success Rate" },
                        { count: "24/7", label: "Legal Support" },
                        { count: "500+", label: "Verified Experts" }
                    ]}
                    formTitle="Get Free Expert Consultation"
                />

                <DetailsLayout
                    overview={{
                        title: "Criminal Law —",
                        highlightTitle: "Overview",
                        description: [
                            "Criminal cases demand precision, legal expertise, and immediate action. Whether it is a complaint, FIR, investigation, bail application, or trial representation, having a qualified criminal lawyer ensures that your rights are protected at every stage.",
                            "Our criminal lawyers assist individuals, professionals, and businesses in navigating complex criminal proceedings with confidence.",
                            "When you work with professionals through Vyombiz managed by Clink Consultancy Services Private Limited, you receive structured legal support designed to reduce risk and strengthen your defense strategy."
                        ],
                        imageUrl: docImage
                    }}

                    advantages={{
                        title: "Why You Need Representation",
                        subtitle: "The Importance of an Experienced Criminal Lawyer",
                        list: [
                            { title: "Protecting Rights", desc: "Protecting your constitutional and legal rights during investigations and trials." },
                            { title: "Defense Strategy", desc: "Building a strong and evidence-based defense strategy tailored to your case." },
                            { title: "Court Representation", desc: "Representing you effectively in court hearings, bail proceedings, and full trials." },
                            { title: "Managing Evidence", desc: "Managing complex legal documentation, gathering evidence, and cross-examining witnesses." },
                            { title: "Negotiation", desc: "Negotiating settlements or plea bargains when applicable and beneficial." }
                        ]
                    }}

                    typesOfCompliance={{
                        title: "Legal Services",
                        subtitle: "Our Criminal Law Services",
                        list: [
                            { title: "Bail Applications", desc: "Assistance for anticipatory bail, regular bail, and interim bail to ensure legal protection." },
                            { title: "FIR Assistance", desc: "Guidance on filing FIRs, drafting criminal complaints, and responding to police notices." },
                            { title: "Trial Representation", desc: "Professional representation in trial courts, magistrate courts, and sessions courts." },
                            { title: "Cyber Crime Defense", desc: "Handling cases related to online fraud, digital offenses, and specialized economic crimes." }
                        ]
                    }}

                    process={{
                        title: "Our Defense Approach",
                        subtitle: "Structured and professional process",
                        steps: [
                            { step: "01", title: "Case Evaluation", desc: "Our legal experts review case details, police reports, evidence, and charges thoroughly." },
                            { step: "02", title: "Strategy", desc: "A defense strategy is prepared based on constitutional rights, facts, and procedural laws." },
                            { step: "03", title: "Filing", desc: "All legal paperwork, bail applications, and court filings are prepared with precision." },
                            { step: "04", title: "Trial", desc: "Experienced lawyers strongly advocate for clients during hearings and trial proceedings." }
                        ]
                    }}

                    features={{
                        title: "Criminal Cases Handled",
                        subtitle: "Expertise across multiple domains",
                        list: [
                            { title: "Violent Crimes", desc: "Assault, battery, and violent crimes defense." },
                            { title: "Property Offences", desc: "Theft, burglary, and property-related offences." },
                            { title: "White-Collar Fraud", desc: "Financial, corporate, and white-collar fraud cases." },
                            { title: "Domestic Cases", desc: "Domestic relations related criminal cases, including domestic violence petitions." },
                            { title: "Breach of Trust", desc: "Cheating, forgery, embezzlement, and breach of trust cases." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    faqs={[
                        {
                            question: "When should I hire a criminal lawyer?",
                            answer: "It is advisable to consult a criminal lawyer as soon as a complaint, FIR, or investigation begins. Early legal advice can protect your rights and help build a strong defense."
                        },
                        {
                            question: "Can a criminal lawyer help with bail?",
                            answer: "Yes. Criminal lawyers assist with anticipatory bail, regular bail, and court hearings to secure release from custody."
                        },
                        {
                            question: "What happens after an FIR is filed?",
                            answer: "After an FIR, police may begin investigation, collect evidence, and issue notices or arrests depending on the case. Legal guidance helps you respond appropriately."
                        },
                        {
                            question: "Do criminal lawyers represent clients in all courts?",
                            answer: "Yes. Criminal lawyers represent clients in magistrate courts, sessions courts, and high courts depending on the jurisdiction and severity of the case."
                        }
                    ]}
                />

                <ReviewsSection
                    title="Client Success Stories"
                    subtitle="Trusted professionals for urgent and sensitive criminal matters."
                    reviews={[
                        {
                            name: "Anonymous User",
                            role: "Client",
                            company: "Bail Petition",
                            rating: 5,
                            initials: "AU",
                            text: "I was falsely accused in a corporate dispute and facing imminent arrest. The lawyer secured anticipatory bail extremely fast. Very grateful."
                        },
                        {
                            name: "Rajesh S.",
                            role: "Business Owner",
                            company: "Fraud Case",
                            rating: 5,
                            initials: "RS",
                            text: "We used their services when an employee embezzled company funds. The FIR was properly drafted and the legal strategy was sound."
                        },
                        {
                            name: "Varun T.",
                            role: "Client",
                            company: "Defense Case",
                            rating: 4.8,
                            initials: "VT",
                            text: "Excellent representation in the sessions court. The cross-examination of witnesses was brilliant, leading to a favorable outcome."
                        }
                    ]}
                />
            </div>
        </div>
    );
};

export default CriminalLawyer;
