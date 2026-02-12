import React from "react";
import { Users, Briefcase, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

/**
 * Lease Agreement Drafting Page matching Vyombiz layout styles
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

const LeaseAgreementDrafting = () => {

    const faqs = [
        {
            question: "What is a Lease Agreement?",
            answer: "A Lease Agreement is a contract between a lessor (owner) and a lessee (tenant) where the lessor grants the lessee the right to use the property for a specific period in exchange for rent."
        },
        {
            question: "Is it compulsory to register a lease agreement?",
            answer: "Yes, under the Registration Act, 1908, any lease of immovable property for a term exceeding one year or reserving a yearly rent must be registered mandatorily."
        },
        {
            question: "What is the difference between Rent Agreement and Lease Agreement?",
            answer: "A Rent Agreement is usually for a short period (often 11 months) to avoid strict rent control laws, while a Lease Agreement is generally for a longer duration (more than 12 months) and creates an interest in the property."
        },
        {
            question: "What are the essential clauses in a lease deed?",
            answer: "Key clauses include names of parties, property description, duration, rent and deposit details, termination clause, maintenance responsibilities, and dispute resolution mechanism."
        },
        {
            question: "Who pays for the stamp duty and registration?",
            answer: "Usually, the cost of stamp duty and registration is borne by the lessee (tenant), unless mutually agreed otherwise between the parties."
        },
        {
            question: "Can a lease be terminated before the expiry period?",
            answer: "Yes, a lease can be terminated early if there is a 'termination clause' in the agreement, subject to the notice period and penalty conditions mentioned therein."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Lease Agreement"
                heroTitleSuffix="Drafting"
                heroSubtitle="Secure Your Property Rights"
                heroDescription="Professional Lease Agreement drafting to ensure legal protection for both owners and tenants. We create comprehensive, legally compliant deeds tailored to your specific needs."
                whatsIncludedList={[
                    "Customized Drafting",
                    "Legal Verification",
                    "Clause Advisories",
                    "E-Stamping Guidance"
                ]}
                stats={[
                    { count: "8000+", label: "Agreements Drafted", icon: <Users size={20} /> },
                    { count: "100%", label: "Legally Valid", icon: <Briefcase size={20} /> },
                    { count: "24hrs", label: "Draft Delivery", icon: <Building2 size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={{
                    badge: "Property Law",
                    title: "Lease Agreement Drafting –",
                    highlightTitle: "Overview",
                    description: [
                        "A Lease Agreement constitutes a legal contract where the owner of a property (Lessor) allows another person (Lessee) to use the property for a specific period in return for a regular payment (Rent).",
                        "Defined under Section 105 of the Transfer of Property Act, 1882, a lease creates a transfer of a right to enjoy such property. It is crucial to have a well-drafted agreement to avoid future disputes regarding possession, rent, or maintenance.",
                        "Whether for residential, commercial, or industrial purposes, a lease deed binds both parties to the agreed terms and conditions, providing legal recourse in case of breach."
                    ],
                    whyIdealTitle: "Key Elements",
                    whyIdealList: [
                        { title: "Duration", desc: "Clearly defines the start and end date of the lease." },
                        { title: "Consideration", desc: "Specifies the rent amount, due date, and mode of payment." },
                        { title: "Security Deposit", desc: "Details about the refundable deposit and conditions for deduction." },
                        { title: "Purpose", desc: "States whether the property is for residential or commercial use." }
                    ]
                }}
                advantages={{
                    title: "Benefits of a Well-Drafted Lease",
                    subtitle: "Why professional drafting matters",
                    list: [
                        { title: "Legal Protection", desc: "Safeguards rights of both lessor and lessee in court." },
                        { title: "Clarity", desc: "Avoids ambiguity regarding maintenance, bills, and usage rules." },
                        { title: "Dispute Prevention", desc: "Minimizes chances of conflict over possession or eviction." },
                        { title: "Asset Safety", desc: "Ensures the property is returned in good condition." },
                        { title: "Evidence", desc: "Acts as valid proof of address and tenancy." },
                        { title: "Peace of Mind", desc: "Ensures a hassle-free tenancy relationship." }
                    ]
                }}
                eligibility={{
                    title: "Types of Leases",
                    subtitle: "We cover all types of lease agreements",
                    list: [
                        { title: "Residential Lease", desc: "For houses, apartments, and flats used for living." },
                        { title: "Commercial Lease", desc: "For offices, shops, and retail spaces." },
                        { title: "Industrial Lease", desc: "For factories, warehouses, and manufacturing units." },
                        { title: "Land Lease", desc: "For vacant land used for agriculture or development." }
                    ]
                }}
                documents={{
                    title: "Information Required",
                    description: "Details needed to draft the agreement.",
                    list: [
                        "Name and Address of Lessor (Owner)",
                        "Name and Address of Lessee (Tenant)",
                        "Description of the Property (Address, Area, etc.)",
                        "Rent Amount and Payment Terms",
                        "Security Deposit Amount",
                        "Lease Duration (Start and End Date)",
                        "Notice Period for Termination",
                        "List of Fittings/Fixtures (if any)"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                }}
                process={{
                    title: "Drafting Procedure",
                    subtitle: "How we draft your lease agreement",
                    steps: [
                        { step: "01", title: "Consultation", desc: "We discuss your requirements and terms of the lease." },
                        { step: "02", title: "Drafting", desc: "Our legal experts draft the deed including all safety clauses." },
                        { step: "03", title: "Review", desc: "We share the draft for your review and approval." },
                        { step: "04", title: "Finalization", desc: "Finalize the deed after incorporating any changes." },
                        { step: "05", title: "Guidance", desc: "We guide you on stamp duty payment and registration." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose VyomBiz?",
                    subtitle: "Expert Legal Drafting Services",
                    list: [
                        { title: "Legal Expertise", desc: "Drafted by experienced property lawyers." },
                        { title: "Customized", desc: "Tailored to your specific property and terms." },
                        { title: "Quick Turnaround", desc: "Get your draft ready within 24-48 hours." },
                        { title: "Comprehensive", desc: "Covers all critical clauses to prevent lawsuits." },
                        { title: "Affordable", desc: "Professional services at competitive rates." },
                        { title: "Online Process", desc: "Review and approve drafts from the comfort of your home." },
                        { title: "Support", desc: "Post-drafting support for any queries or changes." },
                        { title: "Compliance", desc: "Ensures adherence to local Rent Control Acts and laws." }
                    ]
                }}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries about Lease Agreements"
                faqs={faqs}
            />

        </div>
    );
};

export default LeaseAgreementDrafting;
