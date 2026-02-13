import React from "react";
import { BookOpen, GraduationCap, School, ShieldAlert, FileText } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

/**
 * Education Page matching Vyombiz layout styles
 * Sections:
 * 1. Hero Section
 * 2. Stats Strip
 * 3. Overview Section
 * 4. Objectives Section
 * 5. Advantages Section
 * 6. Documents Required
 * 7. Reasons to File
 * 8. Process (Why Vakilsearch/Vyombiz)
 * 9. FAQ
 */

const Education = () => {

    const faqs = [
        {
            question: "How long does it take for a complaint to be resolved?",
            answer: "The time taken for resolution varies depending on the complexity of the case and the responsiveness of the educational institution. Generally, it can take anywhere from a few weeks to a few months."
        },
        {
            question: "Can I file a complaint against a private coaching center?",
            answer: "Yes, private coaching centers are considered service providers. If there is a deficiency in service, such as false promises of results or non-refund of fees, you can file a complaint."
        },
        {
            question: "Is it mandatory to hire a lawyer to file an education complaint?",
            answer: "No, you can file a consumer complaint yourself. However, hiring a lawyer can significantly improve your chances of success, especially in complex cases involving legal arguments."
        },
        {
            question: "Can I get a refund of my fees if I withdraw admission?",
            answer: "According to UGC guidelines and consumer court rulings, institutions must refund fees if a student withdraws within a specified period. If they refuse, it amounts to unfair trade practice."
        },
        {
            question: "What if the college is not AICTE/UGC approved but claimed to be?",
            answer: "Misrepresenting accreditation status is a serious fraud. You can file a case for compensation for loss of academic years, mental agony, and refund of all fees paid."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Education Consumer"
                heroTitleSuffix="Complaint"
                heroSubtitle="Unfair Practices in Education Sector?"
                heroDescription="Voice out your consumer rights against educational institutions for misleading promises, fee refund issues, or poor quality of education. We help you secure your academic future."
                whatsIncludedList={[
                    "Fee Refund Disputes",
                    "Fake Accreditation Claims",
                    "Poor Educational Quality",
                    "Legal Notice Drafting"
                ]}
                stats={[
                    { count: "90%", label: "Resolution Rate", icon: <ShieldAlert size={20} /> },
                    { count: "3K+", label: "Students Helped", icon: <GraduationCap size={20} /> },
                    { count: "Fair", label: "Education", icon: <BookOpen size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={{
                    badge: "Student Rights",
                    title: "Education Complaints –",
                    highlightTitle: "An Overview",
                    description: [
                        "Filing a consumer complaint is a vital step when encountering issues like fee refunds, fake degrees, or lack of facilities.",
                        "Educational institutions are liable for service deficiencies under the Consumer Protection Act.",
                        "Proper documentation and legal intervention can help resolve grievances and protect student interests."
                    ],
                    whyIdealTitle: "Objectives of Filing a Complaint",
                    whyIdealList: [
                        { title: "Seeking Solutions", desc: "Find effective resolutions for academic injustices and administrative failures." },
                        { title: "Protecting Rights", desc: "Ensure respect for student and parent rights in the education system." },
                        { title: "Enhancing Quality", desc: "Push for improvements in teaching standards and infrastructure." },
                        { title: "Ensuring Accountability", desc: "Hold institutions responsible for misconduct, negligence, or fraud." }
                    ]
                }}
                advantages={{
                    title: "Advantages of Filing",
                    subtitle: "Why students should not stay silent.",
                    list: [
                        { title: "Seek Justice", desc: "Get fairness when treated unjustly or faced with serious academic issues." },
                        { title: "Promote Change", desc: "Force institutions to improve their administrative processes and quality." },
                        { title: "Protect Rights", desc: "Safeguard your future by ensuring you get the education you paid for." },
                        { title: "Hold Accountable", desc: "Make institutions answerable for false claims and unfair practices." },
                        { title: "Refund Recovery", desc: "Recover tuition fees and other charges in case of valid withdrawal." },
                        { title: "Compensation", desc: "Claim damages for lost academic years and mental harassment." }
                    ]
                }}
                eligibility={{
                    title: "Common Reasons to File",
                    subtitle: "Valid grounds for an education consumer complaint.",
                    list: [
                        { title: "Quality Issues", desc: "Outdated curriculum, ineffective teaching, or lack of promised facilities." },
                        { title: "Accreditation Fraud", desc: "Falsely claiming AICTE/UGC approval or recognized status." },
                        { title: "Fee Refund", desc: "Refusal to refund fees upon withdrawal of admission." },
                        { title: "Discrimination", desc: "Unfair treatment, harassment, or bias against specific students." },
                        { title: "Misrepresentation", desc: "Misleading claims about placement records or faculty qualifications." },
                        { title: "Student Services", desc: "Poor housing, healthcare, or counseling services." },
                        { title: "Security Issues", desc: "Lack of safety measures leading to accidents or ragging incidents." }
                    ]
                }}
                documents={{
                    title: "Required Documents",
                    description: "Key documents to support your complaint against an institution.",
                    list: [
                        "Admission Letter/ID Card",
                        "Fee Receipts/Challans",
                        "Prospectus/Brochure (for false claims)",
                        "Correspondence with Institution",
                        "Withdrawal Application (if applicable)",
                        "Affidavits or Witness Statements"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                }}
                process={{
                    title: "Our Resolution Process",
                    subtitle: "How Vyombiz helps students getting justice.",
                    steps: [
                        { step: "01", title: "Review Case", desc: "We analyze your grievance and the institution's policies." },
                        { step: "02", title: "Legal Notice", desc: "A strong legal notice is sent to the institution's management." },
                        { step: "03", title: "Negotiation", desc: "We attempt to resolve the matter amicably if possible." },
                        { step: "04", title: "File Complaint", desc: "If needed, we file a case in the appropriate Consumer Forum." },
                        { step: "05", title: "Representation", desc: "Our lawyers fight for your rights and compensation." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose Vyombiz?",
                    subtitle: "Dedicated legal support for student grievances.",
                    list: [
                        { title: "Education Law Experts", desc: "Lawyers with deep knowledge of UGC/AICTE regulations." },
                        { title: "Personalized Attention", desc: "We treat every student's case with the urgency it deserves." },
                        { title: "Holistic Approach", desc: "Focus on academic career protection alongside legal relief." },
                        { title: "Proven Track Record", desc: "Success in fee refund and compensation cases." }
                    ]
                }}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries about Education Complaints"
                faqs={faqs}
            />

        </div>
    );
};

export default Education;
