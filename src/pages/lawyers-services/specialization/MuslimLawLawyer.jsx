import React from 'react';
import docImage from '../../../assets/environmental-doc.png';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const MuslimLawLawyer = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="Expert Muslim Law"
                    heroTitleSuffix="Lawyers"
                    heroDescription="Navigate complex personal laws with confidence. From marriage and divorce to inheritance and property rights, experienced Muslim law lawyers help protect your legal rights while respecting Islamic legal principles."
                    stats={[
                        { count: "Expert", label: "Consultation" },
                        { count: "98%", label: "Satisfaction Rate" },
                        { count: "24/7", label: "Legal Support" },
                        { count: "500+", label: "Verified Lawyers" }
                    ]}
                    formTitle="Get Free Expert Consultation"
                />

                <DetailsLayout
                    overview={{
                        title: "Muslim Personal Law —",
                        highlightTitle: "Overview",
                        description: [
                            "Muslim Personal Law governs personal matters such as marriage, divorce, inheritance, guardianship, maintenance, and family relationships for individuals following Islam. In India, these laws are largely derived from the Shariat (Islamic law) and are applied through legislation and judicial interpretations.",
                            "Because personal laws can involve sensitive family matters and intricate legal provisions, professional legal assistance becomes essential to ensure proper documentation, dispute resolution, and lawful decision-making.",
                            "Through Vyombiz managed by Clink Consultancy Services Private Limited, individuals and families can connect with knowledgeable Muslim law lawyers who understand both religious principles and Indian legal frameworks, helping clients resolve issues effectively and lawfully."
                        ],
                        whyIdealTitle: "Why You Need a Muslim Law Lawyer",
                        imageUrl: docImage
                    }}

                    advantages={{
                        title: "Services Offered",
                        subtitle: "Comprehensive legal assistance",
                        list: [
                            { title: "Marriage & Nikah Documentation", desc: "Assistance with Nikah contracts, religious and legal documentation, and valid registration of marriage." },
                            { title: "Divorce & Separation", desc: "Guidance through Talaq, Khula, and judicial divorce to ensure a fair and legally sound separation." },
                            { title: "Maintenance & Alimony", desc: "Determining maintenance rights for spouses and children under applicable family and personal laws." },
                            { title: "Inheritance & Succession", desc: "Assistance with succession planning, asset distribution, and resolving hereditary property disputes." },
                            { title: "Child Custody", desc: "Resolving guardianship and custody matters while prioritizing the best interests of the minor children." },
                            { title: "Family Mediation", desc: "Mediating family and property disputes to achieve amicable settlements through professional intervention." }
                        ]
                    }}

                    eligibility={{
                        title: "Key Legal Areas Covered",
                        subtitle: "Expertise in Muslim Personal Law",
                        list: [
                            { title: "Nikah Agreements", desc: "Formalizing Nikah agreements or marriage registration to ensure valid documentation." },
                            { title: "Dissolution of Marriage", desc: "Facing or initiating divorce proceedings like Talaq and Khula." },
                            { title: "Maintenance Provisions", desc: "Determining and claiming maintenance for Spouses and Children." },
                            { title: "Inheritance Rules", desc: "Applying the rules of Inheritance and Succession for asset distribution." }
                        ]
                    }}

                    documents={{
                        imageUrl: docImage,
                        title: "When Should You Consult?",
                        subtitle: "Situations requiring legal help",
                        list: [
                            { title: "Formalizing Marriage", desc: "Drafting and formalizing Nikah agreements or securing marriage registration." },
                            { title: "Divorce Proceedings", desc: "Initiating or responding to divorce proceedings, involving Talaq or Khula." },
                            { title: "Inheritance Disputes", desc: "Settling inheritance or hereditary property distribution according to Islamic laws." },
                            { title: "Guardianship & Custody", desc: "Addressing custody, maintenance, or legal guardianship disputes for minors." },
                            { title: "Sensitive Family Issues", desc: "Facing complex legal complications in sensitive and contested family matters." },
                            { title: "Property Settlements", desc: "Resolving family property allocations and achieving equitable settlements." }
                        ]
                    }}

                    process={{
                        title: "Step-by-Step Procedure",
                        subtitle: "How we resolve family matters",
                        steps: [
                            { step: "01", title: "Share Your Requirement", desc: "Submit your legal concern through our platform for a preliminary case assessment." },
                            { step: "02", title: "Expert Consultation", desc: "Connect with a lawyer specializing in Muslim Law to discuss your details securely." },
                            { step: "03", title: "Strategy & Documents", desc: "Your lawyer prepares necessary documents and plans the best legal approach." },
                            { step: "04", title: "Negotiation Session", desc: "Engaging in mediation or dispute resolution discussions aiming for amicable settlements." },
                            { step: "05", title: "Final Resolution", desc: "Ongoing support through formal filing, or robust court representation until case conclusion." }
                        ]
                    }}

                    postCompliance={{
                        title: "Benefits of Professional Help",
                        subtitle: "Why consult an expert lawyer?",
                        list: [
                            { title: "Expert Legal Advice", desc: "Gain a clear understanding of your rights under Sharia and Indian civil law." },
                            { title: "Valid Documentation", desc: "Prevent future disputes by ensuring all agreements are legally sound and registered." },
                            { title: "Strategic Resolution", desc: "Handling complex family matters with maximum discretion and legal efficiency." },
                            { title: "Court Representation", desc: "Obtaining strong and dedicated representation in family courts for litigation cases." }
                        ]
                    }}

                    features={{
                        title: "Why Choose Vyombiz?",
                        subtitle: "Trusted by individuals and families",
                        list: [
                            { title: "Total Confidentiality", desc: "Your personal and religious matters are handled with the highest degree of privacy." },
                            { title: "Specialized Expert Network", desc: "Connect with lawyers who understand both religious principles and Indian legal frameworks." },
                            { title: "Comprehensive Support", desc: "End-to-end guidance from the initial consultation to final resolution in court." },
                            { title: "Seamless Digital Process", desc: "A streamlined, transparent, and hassle-free tool to connect for family dispute resolution." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    faqs={[
                        {
                            question: "What is Muslim Personal Law in India?",
                            answer: "Muslim Personal Law governs family and personal matters such as marriage, divorce, inheritance, and guardianship for Muslims, based on Islamic legal principles and applicable legislation."
                        },
                        {
                            question: "Can Muslim divorce be handled through courts?",
                            answer: "Yes. While some forms of divorce can occur outside court, many situations require legal documentation or court involvement to ensure validity and enforceability."
                        },
                        {
                            question: "How is property distributed under Muslim inheritance law?",
                            answer: "Inheritance follows specific rules where assets are distributed among heirs such as spouses, children, and relatives according to predetermined shares."
                        },
                        {
                            question: "Do I need a lawyer for Nikah documentation?",
                            answer: "While Nikah can be performed religiously, legal guidance ensures the marriage agreement is properly documented and legally recognized."
                        },
                        {
                            question: "How can I connect with a Muslim law lawyer?",
                            answer: "You can request legal assistance through Vyombiz managed by Clink Consultancy Services Private Limited, which connects clients with experienced lawyers for consultation and case support."
                        }
                    ]}
                />

                <ReviewsSection
                    title="Client Success Stories"
                    subtitle="Trusted by individuals for sensitive family matters and legal guidance."
                    reviews={[
                        {
                            name: "Aariz R.",
                            role: "Client",
                            company: "Property Dispute",
                            rating: 5,
                            initials: "AR",
                            text: "The lawyer assigned through VyomBiz guided our family smoothly through a very complicated inheritance issue. Truly professional and respectful of Islamic laws."
                        },
                        {
                            name: "Sana K.",
                            role: "Client",
                            company: "Nikahnama Validation",
                            rating: 5,
                            initials: "SK",
                            text: "I wanted to ensure my marriage documentation was legally sound. The expert assistance made the entire registration process transparent and worry-free."
                        },
                        {
                            name: "Zayn M.",
                            role: "Client",
                            company: "Divorce Proceeding",
                            rating: 4.8,
                            initials: "ZM",
                            text: "Very empathetic and legally proficient handling of my case. I appreciated the emphasis on mediation and swift resolution."
                        }
                    ]}
                />
            </div>
        </div>
    );
};

export default MuslimLawLawyer;
