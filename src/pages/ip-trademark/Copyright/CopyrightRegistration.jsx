import { Copyright, FileText, CheckCircle, Shield, Music, PenTool, Video, Code, Globe, UserCheck } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

/**
 * CopyrightRegistration Page matching TrustRegistration layout styles
 * Content Sourced from: https://VyomBiz.io/copyright-registration
 */

const CopyrightRegistration = () => {

    const faqs = [
        {
            question: "What is the validity of Copyright Registration in India?",
            answer: "The general validity is 60 years from the beginning of the calendar year next following the year in which the author dies (for literary, dramatic, musical, and artistic works). For copyright in cinematograph films and sound recordings, it is 60 years from the date of publication."
        },
        {
            question: "What is the role of the Registrar of Copyrights?",
            answer: "The Registrar of Copyrights is responsible for registering works, issuing copyright certificates, maintaining copyright records, and providing information services to the public."
        },
        {
            question: "Who can apply for Copyright Registration?",
            answer: "The author/creator of the work, an assignee/transferee, a publisher/producer, or co-authors (in case of joint authorship) can apply for registration."
        },
        {
            question: "What are the benefits of Copyright Registration?",
            answer: "It provides legal proof of ownership, exclusive rights to reproduce/distribute, protection against infringement, ability to license/monetize, and global protection in convention countries."
        },
        {
            question: "How long does the registration process take?",
            answer: "The process generally takes 2 to 9 months, depending on objections. There is a mandatory 30-day waiting period after filing for any objections to be raised."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Copyright Registration"
                heroTitleSuffix="in India"
                heroSubtitle="Secure Your Creative Legacy"
                heroDescription="Protect your artistic, literary, musical, and software creations. Copyright registration grants you exclusive legal rights, proof of ownership, and protection against unauthorized use."
                whatsIncludedList={[
                    "Filing of Copyright Application",
                    "Reply to Discrepancy Letters",
                    "Objection Handling Support",
                    "Copyright Certificate Issuance"
                ]}
                stats={[
                    { count: "60 Years", label: "Validity", icon: <Shield size={20} /> },
                    { count: "10k+", label: "Works Protected", icon: <CheckCircle size={20} /> },
                    { count: "Expert", label: "Assistance", icon: <UserCheck size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={{
                    badge: "Intellectual Property",
                    title: "Copyright Registration –",
                    highlightTitle: "An Overview",
                    description: [
                        "Copyright registration is a legal mechanism under the Copyright Act, 1957, that protects original literary, dramatic, musical, and artistic works, as well as cinematograph films and sound recordings.",
                        "It grants exclusive rights to the creator, preventing unauthorized reproduction, distribution, or adaptation of their work. While copyright exists from the moment of creation, registration provides prima facie evidence of ownership in a court of law.",
                        <strong>Scope of Protection</strong>,
                        "Copyright protects the expression of an idea, not the idea itself. It covers a wide array of creative works including software code, website content, marketing materials, and architectural designs."
                    ],
                    whyIdealTitle: "Eligible Creative Works",
                    whyIdealList: [
                        { title: "Literary Works", desc: "Books, essays, poems, manuals, articles, novels, scripts.", icon: <FileText size={20} /> },
                        { title: "Artistic Works", desc: "Painting, sculpture, drawing, photographs, architectural plans.", icon: <PenTool size={20} /> },
                        { title: "Musical Works", desc: "Music compositions, song lyrics, graphical notations.", icon: <Music size={20} /> },
                        { title: "Cinematograph Films", desc: "Movies, videos, documentaries, promotional films.", icon: <Video size={20} /> },
                        { title: "Sound Recordings", desc: "Songs, speeches, podcasts, audio recordings.", icon: <StartIcon size={20} /> },
                        { title: "Software & Apps", desc: "Computer programs, mobile apps, source code, databases.", icon: <Code size={20} /> }
                    ]
                }}
                advantages={{
                    title: "Importance of Copyright Registration",
                    subtitle: "Why you should register your creative work.",
                    list: [
                        { title: "Legal Protection", desc: "Establishes legal ownership and allows you to sue for infringement and claim statutory damages." },
                        { title: "Proof of Ownership", desc: "Serves as prima facie evidence of validity in a court of law, essential for disputes." },
                        { title: "Licensing Opportunity", desc: "Enables monetizing work through licensing, assignment, or selling rights to others." },
                        { title: "Global Protection", desc: "India is a member of the Berne Convention, offering protection in many other countries." },
                        { title: "Deterrence", desc: "Public record of ownership deters potential infringers from using your work without permission." },
                        { title: "Brand Value", desc: "Enhances the commercial value of your creative assets and brand reputation." }
                    ]
                }}
                eligibility={{
                    title: "Who Can Apply?",
                    subtitle: "Eligibility criteria & Documents Required.",
                    list: [
                        { title: "Applicant", desc: "Author, Creator, Publisher, or Assignee of the work." },
                        { title: "Identity Proof", desc: "PAN Card, Aadhar Card of the applicant." },
                        { title: "Work Details", desc: "Title, Language, and Description of the work." },
                        { title: "Copies of Work", desc: "2 Copies of the work (if published) or manuscripts." },
                        { title: "NOC", desc: "No Objection Certificate from author/publisher (if applicable)." },
                        { title: "Business Proof", desc: "Certificate of Incorporation (if applicant is a company)." }
                    ]
                }}
                documents={{
                    title: "Registration Process",
                    description: "Step-by-step guide to protect your copyright.",
                    list: [
                        "Filing Application (Form XIV)",
                        "Payment of Government Fees",
                        "Issuance of Diary Number",
                        "Mandatory Waiting Period (30 Days)",
                        "Scrutiny by Copyright Office",
                        "Objection Handling (if any)",
                        "Registration & Certificate Grant"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1450609283084-3c67d643d931?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                }}
                process={{
                    title: "Why Choose VyomBiz?",
                    subtitle: "Your trusted partner for Intellectual Property Rights.",
                    steps: [
                        { step: "01", title: "99% Success Rate", desc: "Proven track record in securing copyright approvals." },
                        { step: "02", title: "Expert Assistance", desc: "Dedicated IP attorneys to handle your application and objections." },
                        { step: "03", title: "End-to-End Support", desc: "From filing to certification, we manage the entire lifecycle." },
                        { step: "04", title: "Affordable", desc: "Transparent pricing with no hidden charges." },
                        { step: "05", title: "Digital Process", desc: "Complete online process with documentation support." },
                        { step: "06", title: "Post-Reg Support", desc: "Assistance with enforcement and licensing agreements." }
                    ]
                }}
                whyChooseUs={{
                    title: "Our Expertise",
                    subtitle: "We handle copyrights across various industries.",
                    list: [
                        { title: "Entertainment", desc: "Films, Music, Scripts, Formats." },
                        { title: "Publishing", desc: "Books, Magazines, Journals." },
                        { title: "Software/IT", desc: "Code, UI/UX, SaaS Products." },
                        { title: "Education", desc: "Study Material, Research Papers." },
                        { title: "Marketing", desc: "Logos (Artistic), Brochures, Ad Films." },
                        { title: "Art & Design", desc: "Sketches, Paintings, Architecture." }
                    ]
                }}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries about Copyright Registration"
                faqs={faqs}
            />

        </div>
    );
};

// Simple Icon component for reuse if needed, or import specific ones
const StartIcon = ({ size }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mic"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" x2="12" y1="19" y2="22" /></svg>
);

export default CopyrightRegistration;
