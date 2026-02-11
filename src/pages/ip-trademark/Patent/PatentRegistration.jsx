import { FileText, CheckCircle, Shield, Lightbulb, Globe, UserCheck, Settings, PenTool, Sprout, ClipboardList } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

/**
 * PatentRegistration Page matching TrustRegistration layout styles
 * Content Sourced from: https://VyomBiz.io/patent-registration
 */

const PatentRegistration = () => {

    const faqs = [
        {
            question: "What is Patent Agent Registration?",
            answer: "A Patent Agent is a professional registered to practice before the Indian Patent Office. To register, one must be an Indian citizen, at least 21 years old, have a degree in science, engineering, or technology, and handle the registration process and fees."
        },
        {
            question: "What is the procedure for Patent Registration?",
            answer: "The process involves: 1. Pre-filing Search (Novelty search), 2. Drafting the Application (Provisional/Complete), 3. Filing the Application, 4. Publication (after 18 months), 5. Examination Request, 6. Responding to Objections, and 7. Grant of Patent."
        },
        {
            question: "When can one NOT apply for a patent?",
            answer: "You cannot patent an invention if it is already on sale, in public use, or has been published/disclosed to the public more than one year before the filing date (grace period varies by country)."
        },
        {
            question: "What are the requirements to file a patent?",
            answer: "The invention must meet five criteria: 1. Patentable subject matter, 2. Utility (Industrial application), 3. Novelty (New invention), 4. Non-obviousness (Inventive step), and 5. Enablement (Sufficient disclosure)."
        },
        {
            question: "How long is a patent valid in India?",
            answer: "A patent in India is generally valid for 20 years from the date of filing the application, subject to the payment of annual renewal fees."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Patent Registration"
                heroTitleSuffix="in India"
                heroSubtitle="Protect Your Innovations"
                heroDescription="Secure exclusive rights to your inventions for 20 years. Prevent unauthorized use, making, or selling of your unique products and processes with official Patent Registration."
                whatsIncludedList={[
                    "Comprehensive Patent Search",
                    "Drafting Provisional/Complete Specification",
                    "Filing Patent Application",
                    "Examination & Objection Handling"
                ]}
                stats={[
                    { count: "20 Years", label: "Protection", icon: <Shield size={20} /> },
                    { count: "98%", label: "Success Rate", icon: <CheckCircle size={20} /> },
                    { count: "Expert", label: "Consultation", icon: <UserCheck size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={{
                    badge: "Intellectual Property",
                    title: "Patent Registration –",
                    highlightTitle: "An Overview",
                    description: [
                        "Patent registration in India grants inventors exclusive rights, preventing others from making, using, or selling their inventions without authorization. It is a territorial right governed by the Patent Act, 1970.",
                        "A patent is a legal document that gives the patent holder a monopoly over their invention for a limited period, typically 20 years. This encourages innovation by ensuring inventors can commercially benefit from their work.",
                        <strong>Key Criteria</strong>,
                        "To be patentable, an invention must be novel (new), have an inventive step (non-obvious), and have industrial applicability. It effectively safeguards technical innovations against infringement."
                    ],
                    whyIdealTitle: "Types of Patent Applications",
                    whyIdealList: [
                        { title: "Provisional Application", desc: "Secures a priority date; complete spec to be filed within 12 months.", icon: <ClipboardList size={20} /> },
                        { title: "Complete Application", desc: "Full description of invention & claims for final grant.", icon: <FileText size={20} /> },
                        { title: "Ordinary Patent", desc: "Standard application without claiming priority from earlier filings.", icon: <Settings size={20} /> },
                        { title: "Convention Patent", desc: "Filed claiming priority from a convention country application.", icon: <Globe size={20} /> },
                        { title: "Patent of Addition", desc: "For improvements or modifications to an already patented invention.", icon: <Lightbulb size={20} /> },
                        { title: "PCT National Phase", desc: "International filing entering the national phase in India.", icon: <Globe size={20} /> }
                    ]
                }}
                advantages={{
                    title: "Benefits of Patent Registration",
                    subtitle: "Why secure a patent for your invention?",
                    list: [
                        { title: "Exclusive Rights", desc: "Monopoly over the invention, preventing others from using/selling it without permission." },
                        { title: "Monetization", desc: "Opportunity to license or sell the patent for royalties and revenue generation." },
                        { title: "Market Value", desc: "Enhances business valuation and credibility, attracting investors and partners." },
                        { title: "Competitive Edge", desc: "Keeps competitors at bay by legally barring them from copying your technology." },
                        { title: "Legal Protection", desc: "Right to sue infringers and claim damages for unauthorized use." },
                        { title: "Global Expansion", desc: "Basis for seeking protection in other countries via international treaties." }
                    ]
                }}
                eligibility={{
                    title: "Eligibility & Requirements",
                    subtitle: "Who can apply and what is needed?",
                    list: [
                        { title: "Applicant", desc: "True and first inventor, or their assignee/legal representative." },
                        { title: "Novelty", desc: "Invention must be new and not published/used before." },
                        { title: "Inventive Step", desc: "Must not be obvious to a person skilled in the art." },
                        { title: "Industrial Use", desc: "Must be capable of being made or used in an industry." },
                        { title: "Patentable Subject", desc: "Must not fall under non-patentable categories (e.g., natural laws)." }
                    ]
                }}
                documents={{
                    title: "Documents Required",
                    description: "Essential paperwork for filing a patent.",
                    list: [
                        "Form 1 (Application for Grant of Patent)",
                        "Prov./Complete Specification (Form 2)",
                        "Statement & Undertaking (Form 3)",
                        "Declaration of Inventorship (Form 5)",
                        "Power of Attorney (if filed by agent)",
                        "Priority Documents (for Convention apps)",
                        "Request for Examination (Form 18)"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                }}
                process={{
                    title: "Registration Process",
                    subtitle: "Step-by-step guide to getting a Patent.",
                    steps: [
                        { step: "01", title: "Patent Search", desc: "Check novelty to ensure no prior art exists." },
                        { step: "02", title: "Invention Drafting", desc: "Drafting complete specification with claims." },
                        { step: "03", title: "Filing Application", desc: "Submitting application to the Patent Office." },
                        { step: "04", title: "Publication", desc: "Application is published in the journal (after 18 months)." },
                        { step: "05", title: "Examination", desc: "Patent Office examines compliance and novelty." },
                        { step: "06", title: "Grant of Patent", desc: "Certificate issued if all objections are cleared." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose VyomBiz?",
                    subtitle: "Expert support for your innovations.",
                    list: [
                        { title: "Technical Expertise", desc: "Team of engineers and legal experts." },
                        { title: "98% Success Rate", desc: "High approval rate for filed patents." },
                        { title: "End-to-End Service", desc: "From search to grant and renewal management." },
                        { title: "Affordable", desc: "Transparent pricing packages for startups." },
                        { title: "Confidentiality", desc: "100% data privacy and NDA protection." },
                        { title: "Global Network", desc: "Assistance with PCT and international filings." }
                    ]
                }}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries about Patent Registration"
                faqs={faqs}
            />

        </div>
    );
};

export default PatentRegistration;
