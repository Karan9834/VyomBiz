import React from "react";
import {
    Users,
    Briefcase,
    Building2,
} from "lucide-react";
import HeroLayout from "../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../components/common/FAQLayout.jsx";
import TrustedBrands from "../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../components/common/TalkExpert.jsx";

const NidhiCompanyRegistration = () => {
    const faqs = [
        {
            question: "Is RBI approval required for Nidhi Company registration?",
            answer: "No, Nidhi Companies are exempted from the core provisions of the RBI Act. They are regulated by the Ministry of Corporate Affairs (MCA) under the Nidhi Rules, 2014."
        },
        {
            question: "What is the minimum number of members required for a Nidhi Company?",
            answer: "A Nidhi Company must be started with a minimum of 7 members. At least 3 of these members must act as directors."
        },
        {
            question: "Can a Nidhi Company lend money to non-members?",
            answer: "No. A Nidhi Company can only accept deposits from and lend money to its own members."
        },
        {
            question: "What is the minimum capital required for Nidhi Company registration?",
            answer: "As per recent amendments, a Nidhi Company must have a minimum paid-up equity capital of ₹10 Lakhs."
        },
        {
            question: "What is the timeline for Nidhi Company incorporation?",
            answer: "The entire process typically takes about 15-20 working days, depending on the approval of documents by the MCA."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Nidhi Company"
                heroTitleSuffix="Registration"
                heroSubtitle="Empowering Mutual Savings & Credit"
                heroDescription="Incorporate a Nidhi Company to promote thrift and savings habits among members while providing easy access to loans. We offer end-to-end support for registration under MCA guidelines."
                whatsIncludedList={[
                    "Digital Signature Certificate (DSC)",
                    "Director Identification Number (DIN)",
                    "Name Approval Assistance",
                    "Certificate of Incorporation (COI)",
                    "PAN & TAN for the Company",
                    "MOA & AOA Drafting"
                ]}
                stats={[
                    { count: "42K+", label: "Clients", icon: <Users size={20} /> },
                    { count: "3500+", label: "Experts", icon: <Briefcase size={20} /> },
                    { count: "50+", label: "Offices", icon: <Building2 size={20} /> }
                ]}
            />

            {/* ================= TRUSTED BRANDS SECTION ================= */}
            <TrustedBrands />

            {/* ================= TALK EXPERT SECTION ================= */}
            <TalkExpert />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={{
                    badge: "Mutual Benefit Society",
                    title: "Nidhi Company Registration –",
                    highlightTitle: "An Overview",
                    description: [
                        "A Nidhi Company is a type of Non-Banking Financial Company (NBFC) that is formed to borrow and lend money among its members. It works on the principle of mutual benefit and helps cultivate the habit of savings and thrift.",
                        "Regulated by the Ministry of Corporate Affairs (MCA) under the Nidhi Rules, 2014, these companies are popular for their ease of governance and the fact that they do not require an RBI license to operate.",
                        <strong>Key Objective:</strong>,
                        "The primary objective of a Nidhi Company is to encourage savings among its members and provide them with credit facilities at reasonable interest rates against security such as gold, property, or fixed deposits."
                    ],
                    whyIdealTitle: "Why is it Ideal?",
                    whyIdealList: [
                        { title: "No RBI License", desc: "Exempted from many stringent RBI regulations compared to other NBFCs." },
                        { title: "Limited Liability", desc: "The liability of members and directors is limited to their share capital." },
                        { title: "Mutually Beneficial", desc: "Focuses on providing financial assistance to members within a closed group." },
                        { title: "Low Capital", desc: "Can be started with a relatively lower capital compared to full-scale NBFCs." }
                    ]
                }}
                advantages={{
                    title: "Benefits of Nidhi Registration",
                    subtitle: "Enjoy the advantages of a financial institution with simplified regulatory compliance.",
                    list: [
                        { title: "Separate Legal Entity", desc: "The company exists as a separate legal person from its members." },
                        { title: "Easy Fund Mobilization", desc: "Allows members to deposit and earn interest on their savings." },
                        { title: "Secure Lending", desc: "Lending is strictly against security, minimizing the risk of bad debts." },
                        { title: "Perpetual Succession", desc: "The company continues its existence even if members change or pass away." },
                        { title: "Easy Governance", desc: "Governed by simple Nidhi Rules rather than complex banking laws." },
                        { title: "Cost-Effective", desc: "Low operational and incorporation costs compared to other financial entities." }
                    ]
                }}
                eligibility={{
                    title: "Eligibility Criteria",
                    subtitle: "Requirements to form and maintain a Nidhi Company.",
                    list: [
                        { title: "Minimum Members", desc: "Must have at least 7 members to initiate incorporation." },
                        { title: "Minimum Directors", desc: "At least 3 directors are required at the time of registration." },
                        { title: "Share Capital", desc: "Minimum paid-up equity share capital of ₹10 Lakhs is mandatory." },
                        { title: "Name Requirement", desc: "The name must end with 'Nidhi Limited'." },
                        { title: "Member Growth", desc: "Must reach 200 members within one year of incorporation." },
                        { title: "Net Owned Funds", desc: "Must maintain a ratio of Net Owned Funds to Deposits of 1:20." }
                    ]
                }}
                documents={{
                    title: "Required Documents",
                    description: "Documentation needed for directors, members, and the registered office.",
                    list: [
                        "PAN Card of all Directors and Shareholders",
                        "Aadhar Card / Voter ID / Driving License",
                        "Passport-size Photographs of Directors",
                        "Latest Bank Statement (not older than 2 months)",
                        "Utility Bill of Registered Office (Electricity/Water)",
                        "Rent Agreement & NOC from Property Owner",
                        "Digital Signature Certificate (DSC) for Directors",
                        "Director Identification Number (DIN)",
                        "Memorandum of Association (MOA)",
                        "Articles of Association (AOA)"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1000"
                }}
                process={{
                    title: "Registration Process",
                    subtitle: "Our simplified step-by-step approach to Nidhi Company Incorporation.",
                    steps: [
                        { step: "01", title: "DSC & DIN", desc: "Obtaining Digital Signatures and Director Identification Numbers for proposed directors." },
                        { step: "02", title: "Name Approval", desc: "Reservation of the unique company name via the MCA's RUN service." },
                        { step: "03", title: "Incorporation", desc: "Filing SPICe+ forms for incorporation, PAN, and TAN generation." },
                        { step: "04", title: "Approval", desc: "Receiving the Certificate of Incorporation (COI) from the Registrar of Companies." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose VyomBiz",
                    subtitle: "Your trusted partner for legal and financial registrations.",
                    list: [
                        { title: "Expert Legal Advice", desc: "Our professionals ensure all Nidhi Rules are strictly followed." },
                        { title: "Fast Processing", desc: "Timely delivery of Certificate of Incorporation and other documents." },
                        { title: "End-to-End Support", desc: "From name approval to post-incorporation compliance, we handle it all." },
                        { title: "Transparent Pricing", desc: "No hidden costs; competitive and clear service fees." },
                        { title: "Dedicated Support", desc: "Get real-time updates and assistance from our expert team." },
                        { title: "High Success Rate", desc: "Experience in registering hundreds of successful Nidhi companies." },
                        { title: "Complimentary Advisory", desc: "Free initial consultation regarding business structure and growth." },
                        { title: "Trusted Brand", desc: "A leading name in tech-enabled legal services in India." }
                    ]
                }}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries regarding Nidhi Company Registration"
                faqs={faqs}
            />

        </div>
    );
};

export default NidhiCompanyRegistration;
