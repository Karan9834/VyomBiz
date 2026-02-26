import React from "react";
import { Users, Briefcase, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

/**
 * Succession Certificate Page matching Vyombiz layout styles
 * Sections:
 * 1. Hero Section (Left Content, Right Form)
 * 2. Stats Strip
 * 3. Overview Section
 * 4. Benefits Section
 * 5. Eligibility/Checklist
 * 6. Documents Required
 * 7. Registration Process
 * 8. Why Choose Us
 * 9. FAQ
 */

const SuccessionCertificateinIndia = () => {

    const faqs = [
        {
            question: "What is the difference between a succession certificate and probate?",
            answer: "A succession certificate is granted to the successors of the deceased who made no will before death whereas probate is a process to validate a will as the legitimate and last will of the deceased."
        },
        {
            question: "What is the difference between succession and legal heir certificates?",
            answer: "A legal heir certificate is issued to find out the actual beneficiaries of the deceased and identifies the beneficiaries of the deceased, whereas a succession certificate is granted to the successors of the deceased for various purposes such as the use of assets and other property of the deceased."
        },
        {
            question: "What details must a succession certificate include?",
            answer: "A succession certificate includes details of the deceased, including the time of the death and a declaration of an intestate death, the chosen successor and its relationship with the deceased, all the assets and liabilities of the deceased, permission granting authority to the successor."
        },
        {
            question: "Can granting of succession certificate be objected?",
            answer: "After an application has been filed by the applicant for the issue of a succession certificate, the court notifies all the legal heirs and other relatives to raise any objections as to why such certificate shall not be granted to the applicant for reasonable reasons."
        },
        {
            question: "What is the successor certificate substitute?",
            answer: "A substitute for a succession certificate can be a legal heir certificate, death certificate or nomination. These other necessary papers can be obtained to prove the inheritance of property or to perform the certain transfers of property of the deceased."
        },
        {
            question: "Are the legal heir certificate and the succession certificate identical?",
            answer: "No. A legal heir certificate is different from a succession certificate. Both of the certificates are used for different purposes."
        },
        {
            question: "Is the wife a legitimate heir?",
            answer: "Yes, the wife belongs to the legal heirs of class I as per the Indian Succession Act of 1925."
        },
        {
            question: "Can a succession certificate get revoked?",
            answer: "Yes, as per the conditions mentioned under Section 383 of the Indian Succession Act, a succession certificate can be revoked. Some of the grounds include receiving of the certificate by fraudulent means and methods, or the procedure to obtain the certificate was defective."
        },
        {
            question: "Who issues a succession certificate?",
            answer: "A succession certificate is issued by the judge of the district court where the deceased last lived before his death. If such a place is not found, then the jurisdiction lies to such judge where any of the deceased's property is situated."
        },
        {
            question: "When is a succession certificate needed?",
            answer: "A succession certificate is required in cases where the person deceased made no will for disposal and distribution of his property."
        },
        {
            question: "How much cost is required for getting a succession certificate?",
            answer: "The cost is calculated as per the prevailing provisions under the Court Fee Act, 1870. A certain percentage of the value of the asset is considered as the cost. Such cost has to be paid in the form of judicial stamps."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Succession Certificate"
                heroTitleSuffix="in India"
                heroSubtitle="Authenticate Your Succession Rights"
                heroDescription="Succession certificate in India is given to the successor of a deceased person who has not prepared a will in order to establish the authenticity of the successor. Talk to our experts for hassle-free assistance."
                whatsIncludedList={[
                    "Establish Authenticity of Successor",
                    "Authority over Assets & Liabilities",
                    "Transfer of Securities",
                    "Court Issued Certificate"
                ]}
                stats={[
                    { count: "42810+", label: "Happy Clients", icon: <Users size={20} /> },
                    { count: "3500+", label: "Expert Advisors", icon: <Briefcase size={20} /> },
                    { count: "50+", label: "Branch Offices", icon: <Building2 size={20} /> }
                ]}
            />

            <TrustedBrands />
            <TalkExpert />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={{
                    badge: "Legal Authority",
                    title: "Succession Certificate in India –",
                    highlightTitle: "An Overview",
                    description: [
                        "A certificate given to the successor of a person who is dead and didn't prepare a will for the distribution of his property to his relatives is called a succession certificate. Such a certificate gives authority and right over the deceased rights and liabilities to his successors. The names of the successors mentioned in the succession certificate are liable for payment of debts and have the power to transfer securities of the deceased.",
                        "Such a certificate is issued by a judge of the civil court where he has the legitimate jurisdiction over the successors of the person who died without making a will. It is also termed as Intestate Succession because the person leaves no will his property is distributed through succession.",
                        "Before the certificate is issued to the applicant, the court orders an investigation to verify the authenticity of the applicant, who claims to be the successor of the deceased person. Such a certificate contains all the details of the deceased and the legal heirs. The certificate also contains details with regard to all the assets and liabilities of the deceased to be transferred to the successors."
                    ],
                    whyIdealTitle: "Key Features",
                    whyIdealList: [
                        { title: "Legal Validity", desc: "Applicable to the whole of India." },
                        { title: "Foreign Validity", desc: "Valid in foreign countries if duly stamped as per Court Fees Act 1870." },
                        { title: "Assets Transfer", desc: "Enables transfer of movable assets like bank deposits, shares, etc." },
                        { title: "Debt Collection", desc: "Empowers successor to collect debts on behalf of the deceased." }
                    ]
                }}
                advantages={{
                    title: "Benefits & Importance",
                    subtitle: "Why obtain a Succession Certificate?",
                    list: [
                        { title: "Asset Claim", desc: "Essential for claiming movable assets like bank balances, FDs, and shares." },
                        { title: "Legal Proof", desc: "Serves as conclusive proof of the successor's title to the deceased's debts and securities." },
                        { title: "Protection", desc: "Protects the prayers of debts/securities who pay the amount to the certificate holder." },
                        { title: "Dispute Resolution", desc: "Helps in resolving disputes among legal heirs regarding inheritance distribution." },
                        { title: "Global Validity", desc: "Recognized throughout India and can be valid internationally with proper stamping." },
                        { title: "Transparency", desc: "Ensure transparent distribution of assets according to succession laws." }
                    ]
                }}
                eligibility={{
                    title: "Eligibility Criteria",
                    subtitle: "Who can apply for a Succession Certificate?",
                    list: [
                        { title: "Widow", desc: "The wife of the deceased is a Class I legal heir." },
                        { title: "Children", desc: "Sons and daughters of the deceased." },
                        { title: "Parents", desc: "Parents of the deceased can also claim succession." },
                        { title: "Siblings", desc: "Brothers and sisters may apply in the absence of Class I heirs." },
                        { title: "Grandchildren", desc: "In cases where children are predeceased." }
                    ]
                }}
                documents={{
                    title: "Documents Required",
                    description: "Essential documents for filing the petition.",
                    list: [
                        "Death Certificate of the Deceased",
                        "Identity Proof of the Applicant (Aadhaar, Voter ID, Passport)",
                        "Address Proof of all legitimate successors",
                        "Birth Date Proof of all successors",
                        "Affidavit declaring self-undertaking",
                        "Copy of death certificate of a deceased legal heir (if any)",
                        "Residence Proof of the deceased"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1554224155-1696413575b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                }}
                process={{
                    title: "Procedure to Get Certificate",
                    subtitle: "Step-by-step process for obtaining a Succession Certificate.",
                    steps: [
                        { step: "01", title: "Draft Petition", desc: "Draft and submit a petition to the District Judge with court fees." },
                        { step: "02", title: "Hearing", desc: "Judge conducts a preliminary hearing and admits the petition." },
                        { step: "03", title: "Notice Publication", desc: "Court publishes notice in newspapers inviting objections." },
                        { step: "04", title: "Grant of Certificate", desc: "If no objections, the judge grants the certificate after final hearing." },
                        { step: "05", title: "Bond Submission", desc: "Applicant submits a bond with sureties to prevent misuse." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose VyomBiz?",
                    subtitle: "We make technical compliance certifications effortless and convenient.",
                    list: [
                        { title: "Expert Legal Team", desc: "Experienced lawyers to handle your petition drafting." },
                        { title: "Hassle-free Process", desc: "We manage the entire court process and documentation." },
                        { title: "Timely Updates", desc: "Regular updates on hearing dates and case status." },
                        { title: "Transparent Pricing", desc: "Clear breakdown of court fees and professional charges." },
                        { title: "PAN India Support", desc: "Services available across all major districts in India." },
                        { title: "Consultation", desc: "Free initial consultation to understand your case." },
                        { title: "Document Assistance", desc: "Help in gathering and verifying all necessary proofs." },
                        { title: "Dedicated Support", desc: "Relationship manager assigned to your case." }
                    ]
                }}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Everything you need to know about Succession Certificate"
                faqs={faqs}
            />

        </div>
    );
};

export default SuccessionCertificateinIndia;
