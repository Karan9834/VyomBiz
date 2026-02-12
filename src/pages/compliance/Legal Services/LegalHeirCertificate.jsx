import React from "react";
import { Users, Briefcase, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

/**
 * Legal Heir Certificate Page matching Vyombiz layout styles
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

const LegalHeirCertificate = () => {

    const faqs = [
        {
            question: "What is the difference between a Legal Heir and Succession Certificate?",
            answer: "A Legal Heir Certificate is issued by the Tehsildar/Revenue Officer and is used for claims like pension, gratuity, and transfer of movable assets. A Succession Certificate is issued by a civil court and is required for immovable property and higher value assets."
        },
        {
            question: "Who can apply for a Legal Heir Certificate?",
            answer: "Immediate family members of the deceased, such as parents, spouse, and children (Class I heirs), can apply. In their absence, siblings or grandchildren (Class II heirs) may apply."
        },
        {
            question: "How long does it take to get the certificate?",
            answer: "It usually takes about 15 to 30 days to obtain a Legal Heir Certificate after the verification process by the revenue authorities is completed."
        },
        {
            question: "Is there a lifetime validity for this certificate?",
            answer: "Yes, once issued, the Legal Heir Certificate generally has lifetime validity unless revoked due to an objection or fraud."
        },
        {
            question: "Can I use it for property transfer?",
            answer: "It is primarily used for movable assets and statutory claims. For transferring immovable property, a Succession Certificate is often required, though in some states, a Legal Heir Certificate suffices for mutation."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Legal Heir "
                heroTitleSuffix="Certificate"
                heroSubtitle="Claim Your Rightful Inheritance"
                heroDescription="Obtain your Legal Heir Certificate (Waris Certificate) hassle-free. Essential for claiming pension, gratuity, insurance, and transferring movable assets of a deceased relative."
                whatsIncludedList={[
                    "Application Filing",
                    "Document Verification",
                    "Follow-up with Tehsildar",
                    "Certificate Issuance"
                ]}
                stats={[
                    { count: "10000+", label: "Families Assisted", icon: <Users size={20} /> },
                    { count: "15-30", label: "Days Process", icon: <Briefcase size={20} /> },
                    { count: "100%", label: "Approval Rate", icon: <Building2 size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={{
                    badge: "Inheritance",
                    title: "Legal Heir Certificate –",
                    highlightTitle: "Overview",
                    description: [
                        "A Legal Heir Certificate, also known as a Waris Certificate, is a crucial document issued by government authorities (usually the Tehsildar) to establish the relationship between the deceased and their lawful heirs.",
                        "It is mandatory for claiming service benefits like pension, provident fund (PF), gratuity, and insurance claims of the deceased. It also facilitates the transfer of movable assets like bank deposits and shares.",
                        "Unlike a Succession Certificate which is court-issued for debts and securities, this is an administrative document for recognizing heirs."
                    ],
                    whyIdealTitle: "Why Do You Need It?",
                    whyIdealList: [
                        { title: "Service Benefits", desc: "To claim family pension, gratuity, and PF of a deceased employee." },
                        { title: "Asset Transfer", desc: "For transferring bank accounts, fixed deposits, and utility connections." },
                        { title: "Compassionate Job", desc: "To apply for government jobs on compassionate grounds." },
                        { title: "Evidence", desc: "Serves as prima facie evidence of being a legal survivor." }
                    ]
                }}
                advantages={{
                    title: "Benefits of Acquiring Waris Certificate",
                    subtitle: "Streamline your inheritance process",
                    list: [
                        { title: "Easy Asset Transfer", desc: "Facilitates smooth transfer of movable assets and bank funds." },
                        { title: "Insurance Claims", desc: "Mandatory for processing life insurance claims of the deceased." },
                        { title: "Government Dues", desc: "Essential for receiving government dues like gratuity and arrears." },
                        { title: "Tax Filing", desc: "Required to file Income Tax Returns on behalf of the deceased." },
                        { title: "Administrative Ease", desc: "Helps in changing names on electricity, water, and gas connections." },
                        { title: "Quick Processing", desc: "Faster to obtain compared to a court-issued succession certificate." }
                    ]
                }}
                eligibility={{
                    title: "Who Are Legal Heirs?",
                    subtitle: "Eligibility criteria for application",
                    list: [
                        { title: "Class I Heirs", desc: "Spouse (Wife/Husband), Children (Son/Daughter), and Mother of the deceased." },
                        { title: "Class II Heirs", desc: "Father, Siblings, Grandchildren (if Class I heirs are not present)." },
                        { title: "Family Members", desc: "Only immediate family members can generally apply or claim." }
                    ]
                }}
                documents={{
                    title: "Documents Required",
                    description: "Documents needed for the application.",
                    list: [
                        "Original Death Certificate of the deceased",
                        "Identity Proof of all applicants (Aadhar, PAN, Voter ID)",
                        "Address Proof of the deceased and applicants",
                        "Date of Birth proof of all legal heirs",
                        "Affidavit of Self-undertaking",
                        "Application Form duly signed",
                        "Service Records (if deceased was a govt employee)"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1555374018-13a8994ab246?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                }}
                process={{
                    title: "Application Procedure",
                    subtitle: "Step-by-step guide to obtain the certificate",
                    steps: [
                        { step: "01", title: "Visit Office", desc: "Visit the Taluk/Tehsildar office or apply online via the state portal." },
                        { step: "02", title: "Fill Form", desc: "Complete the application form with details of valid heirs." },
                        { step: "03", title: "Attach Docs", desc: "Submit the form along with death certificate and affidavits." },
                        { step: "04", title: "Verification", desc: "Revenue Inspector/VRO conducts an inquiry and verifies the family tree." },
                        { step: "05", title: "Issuance", desc: "Upon successful verification, the Tehsildar issues the certificate." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose VyomBiz?",
                    subtitle: "Simplified Legal Assistance",
                    list: [
                        { title: "Expert Guidance", desc: "We guide you on eligibility and document requirements." },
                        { title: "Drafting Affidavits", desc: "Assistance in drafting necessary affidavits and applications." },
                        { title: "Online Support", desc: "Convenient online assistance without multiple office visits." },
                        { title: "Follow-up", desc: "We track your application status with the authorities." },
                        { title: "Error-Free", desc: "Ensure your application is accurate to avoid rejection." },
                        { title: "Pan-India", desc: "Support across various states and districts." },
                        { title: "Fast Track", desc: "Expedite the process with our professional handling." },
                        { title: "Consultation", desc: "Advisory on whether you need a Legal Heir or Succession Certificate." }
                    ]
                }}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries about Legal Heir Certificates"
                faqs={faqs}
            />

        </div>
    );
};

export default LegalHeirCertificate;
