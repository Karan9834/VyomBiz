import React from "react";
import {
    Building2,
    Briefcase,
    Globe2,
    ShieldCheck,
    Mail,
    Phone
} from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

const VirtualOfficeSpace = () => {
    const faqs = [
        {
            question: "What is a Virtual Office?",
            answer: "A virtual office provides businesses with a professional business address and communication services (like mail handling and phone answering) without the need for a dedicated physical office space."
        },
        {
            question: "Can I use a Virtual Office for GST Registration?",
            answer: "Yes, many Indian states allow the use of a virtual office as a 'Principal Place of Business' for GST registration, provided you have the correct documentation like a specialized Rent Agreement and NOC."
        },
        {
            question: "Is it legal for Company Incorporation?",
            answer: "Yes, the MCA accepts a virtual office address as the 'Registered Office' of a company or LLP, making it an ideal choice for startups and remote businesses."
        },
        {
            question: "What are the key benefits?",
            answer: "Key benefits include massive cost savings on rent and utilities, a prestigious business address in a prime location, and professional mail/call handling services."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Virtual Office"
                heroTitleSuffix="Address Setup"
                heroSubtitle="A Professional Identity Without the Overhead"
                heroDescription="Build your professional presence instantly. We provide premium virtual office addresses in prime business hubs, fully compliant for GST, Company Registration, and business correspondence."
                whatsIncludedList={[
                    "GST & MCA Compliant Address",
                    "Professional Mail Handling",
                    "Dedicated Local Phone Numbers",
                    "Meeting Room Access (On-demand)",
                    "Digital Lobby Listing",
                    "Instant Agreement & NOC Delivery"
                ]}
                stats={[
                    { count: "42K+", label: "Clients", icon: <Globe2 size={20} /> },
                    { count: "3500+", label: "Experts", icon: <Briefcase size={20} /> },
                    { count: "50+", label: "Offices", icon: <Building2 size={20} /> }
                ]}
            />

            <TrustedBrands />
            <TalkExpert />

            <DetailsLayout
                overview={{
                    badge: "Modern Business",
                    title: "Virtual Office –",
                    highlightTitle: "Strategic Identity",
                    description: [
                        "In the era of remote work and digital startups, a traditional office lease is often an unnecessary financial burden. A virtual office offers the perfect balance—a prestigious business address in a prime corporate hub without the high costs of physical maintenance.",
                        "Beyond just an address, it provides a comprehensive suite of services including mail forwarding, call answering, and shared meeting spaces that enhance your brand's professionalism.",
                        <strong>Strategic Goal:</strong>,
                        "To provide entrepreneurs with a legal, professional, and scalable business presence that meets all regulatory requirements while maximizing cost efficiency."
                    ],
                    whyIdealTitle: "Unique Business Benefits",
                    whyIdealList: [
                        { title: "Cost Savings", desc: "Save up to 90% on rent, utilities, and infrastructure." },
                        { title: "Prime Locations", desc: "Get an address in prestigious business hubs globally." },
                        { title: "Compliance Ready", desc: "Addresses fully vetted for GST and Company Incorporation." },
                        { title: "Hybrid Flexibility", desc: "Work from anywhere while maintaining a professional corporate front." }
                    ]
                }}
                advantages={{
                    title: "Business Benefits",
                    subtitle: "Why go virtual with your business address?",
                    list: [
                        { title: "Instant Setup", desc: "Get your business address and legal papers in as little as 24 hours." },
                        { title: "Logistics Support", desc: "Mail collection, scanning, and forwarding services included." },
                        { title: "Zero Capital Expenditure", desc: "No deposits, interior costs, or long-term lease commitments." },
                        { title: "Global Reach", desc: "Easily expand into new cities with secondary virtual addresses." },
                        { title: "Professional Impression", desc: "Impress clients with a high-end corporate office location." },
                        { title: "Legal Peace of Mind", desc: "Detailed agreements and NOCs tailored for GST and MCA filing." }
                    ]
                }}
                eligibility={{
                    title: "Registration Support",
                    subtitle: "How we ensure your address is fully compliant.",
                    list: [
                        { title: "GST Registration", desc: "Provision of Rent Agreement and NOC from the property owner." },
                        { title: "Company Incorporation", desc: "Registered address proofs for MCA Filings and SpicE+ forms." },
                        { title: "Business Identity", desc: "Authorization for bank account opening and trade licenses." },
                        { title: "Verification Liaison", desc: "Assistance during physical verification by GST or MCA inspectors." },
                        { title: "Utility Bill Proofs", desc: "Latest electricity or water bills provided for documentation." },
                        { title: "Authorized Signatory", desc: "NOCs signed and authorized by the legal property owners." }
                    ]
                }}
                documents={{
                    title: "Required Documents",
                    description: "What we need to set up your virtual office.",
                    list: [
                        "Director/Owner's PAN and Aadhaar Card",
                        "Passport Size Photograph",
                        "Existing Business Registration (if any)",
                        "Brief Description of Business Activity",
                        "Authorized Signatory Details",
                        "Service Agreement Signature (Digital/Physical)"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000"
                }}
                process={{
                    title: "Quick Setup Process",
                    subtitle: "Get your professional address in 3 easy steps.",
                    steps: [
                        { step: "01", title: "Select Location", desc: "Choose from our network of prime business hubs." },
                        { step: "02", title: "Submit KYC", desc: "Upload the basic business and personal documents." },
                        { step: "03", title: "Get Documents", desc: "Receive the signed Rent Agreement and NOC via email." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose VyomBiz",
                    subtitle: "The pioneers in virtual business identity.",
                    list: [
                        { title: "Compliance Specialists", desc: "We ensure every address is 100% vetted for GST and MCA." },
                        { title: "Network Strength", desc: "Partnerships with premium coworking and corporate spaces." },
                        { title: "Transparent Pricing", desc: "Fixed annual or monthly fees with no hidden maintenance costs." },
                        { title: "Seamless Renewals", desc: "Automated reminders and easy renewal processes for your address." },
                        { title: "Liaison Support", desc: "Direct support during government verification or bank audits." },
                        { title: "All-in-One Dashboard", desc: "Manage your mail, calls, and meeting room bookings in one place." }
                    ]
                }}
            />

            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Expert answers on Virtual Office Address"
                faqs={faqs}
            />
        </div>
    );
};

export default VirtualOfficeSpace;
