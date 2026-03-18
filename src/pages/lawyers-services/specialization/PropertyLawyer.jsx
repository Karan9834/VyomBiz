import React from 'react';
import docImage from '../../../assets/environmental-doc.png';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const PropertyLawyer = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="Property"
                    heroTitleSuffix="Lawyers"
                    heroDescription="Buying, selling, leasing, or investing in property involves complex legal processes. Professional legal guidance helps you avoid disputes, verify ownership, and ensure every transaction is legally protected. Connect with experienced property lawyers today."
                    stats={[
                        { count: "Expert", label: "Legal Advice" },
                        { count: "95%", label: "Success Rate" },
                        { count: "24/7", label: "Support" },
                        { count: "500+", label: "Verified Lawyers" }
                    ]}
                    formTitle="Get Free Expert Consultation"
                />

                <DetailsLayout
                    overview={{
                        title: "Property Law —",
                        highlightTitle: "Overview",
                        description: [
                            "Real estate transactions often involve large investments and complex documentation. Without proper legal review, issues such as disputed ownership, unclear titles, or incomplete agreements can create serious financial and legal risks.",
                            "Professional property lawyers ensure that every legal detail is carefully reviewed before a transaction takes place. With expert assistance, you can confidently handle property purchases, inheritance claims, land disputes, and registration processes.",
                            "Vyombiz managed by Clink Consultancy Services Private Limited connects individuals and businesses with legal professionals who specialize in property law and real estate documentation."
                        ],
                        imageUrl: docImage
                    }}

                    advantages={{
                        title: "Why Legal Help Matters",
                        subtitle: "Benefits of Legal Assistance",
                        list: [
                            { title: "Legal Protection", desc: "Ensure that all documents and agreements strictly comply with applicable property laws." },
                            { title: "Risk Mitigation", desc: "Identify hidden legal risks such as disputed titles, pending loans, or illegal construction." },
                            { title: "Verification", desc: "Thoroughly verify ownership history to prevent future claims or title disputes." },
                            { title: "Smooth Execution", desc: "Ensure complex registration and stamp duty processes are handled smoothly." }
                        ]
                    }}

                    typesOfCompliance={{
                        title: "Our Expertise",
                        subtitle: "Property Legal Services Offered",
                        list: [
                            { title: "Title Verification", desc: "Verifying ownership and title history meticulously before buying property." },
                            { title: "Sale Agreements", desc: "Drafting or reviewing purchase agreements for legal clarity and compliance." },
                            { title: "Registration", desc: "Guidance through documentation and procedural compliance for smooth execution." },
                            { title: "Dispute Resolution", desc: "Representation for land ownership, boundary issues, and tenancy conflicts." },
                            { title: "Lease Agreements", desc: "Well-drafted agreements to prevent conflicts between commercial landlords and tenants." },
                            { title: "Due Diligence", desc: "Comprehensive legal risk assessment and compliance checks before finalizing transactions." }
                        ]
                    }}

                    eligibility={{
                        title: "Matters Handled",
                        subtitle: "Types of Property Matters",
                        list: [
                            { title: "Transactions", desc: "Residential and commercial property purchases, sales, or leases." },
                            { title: "Land Issues", desc: "Agricultural land legal matters and land title disputes or litigation." },
                            { title: "Builder Disputes", desc: "Handling builder-buyer disputes over delays or project defaults." },
                            { title: "Joint Ownership", desc: "Resolving joint property ownership disputes and partition suits." },
                            { title: "Inheritance", desc: "Managing property inheritance and complex succession issues." }
                        ]
                    }}

                    process={{
                        title: "Our Process",
                        subtitle: "How Our Legal Support Works",
                        steps: [
                            { step: "01", title: "Submit Request", desc: "Share your specific property related legal query or requirement." },
                            { step: "02", title: "Connect with Lawyer", desc: "Qualified property lawyers review your case and provide immediate guidance." },
                            { step: "03", title: "Document Review", desc: "Lawyers meticulously verify documents, draft agreements, and structure the legal process." },
                            { step: "04", title: "Resolution", desc: "Your property transaction or legal dispute is finalized with professional support." }
                        ]
                    }}

                    features={{
                        title: "When to Consult",
                        subtitle: "When Should You Consult a Property Lawyer?",
                        list: [
                            { title: "New Transactions", desc: "Purchasing or selling property for the first time." },
                            { title: "Registration", desc: "Registering property documents at the sub-registrar office." },
                            { title: "Inheritance", desc: "Handling inherited property or applying for succession certificates." },
                            { title: "Disputes", desc: "Facing ownership disputes, illegal occupation, or boundary issues." },
                            { title: "Leasing", desc: "Drafting lease or long-term rental agreements for commercial spaces." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    faqs={[
                        {
                            question: "Why do I need a property lawyer when buying property?",
                            answer: "A property lawyer verifies legal documents, checks ownership history, and ensures that the transaction follows legal procedures."
                        },
                        {
                            question: "What documents are required for property verification?",
                            answer: "Common documents include title deeds, encumbrance certificates, tax receipts, and property registration records."
                        },
                        {
                            question: "Can property lawyers help resolve property disputes?",
                            answer: "Yes. Property lawyers handle legal disputes related to ownership, land boundaries, tenancy conflicts, and inheritance matters."
                        },
                        {
                            question: "How long does property registration take?",
                            answer: "The timeline may vary depending on documentation and local registration procedures, but legal guidance can significantly streamline the process."
                        }
                    ]}
                />

                <ReviewsSection
                    title="Client Success Stories"
                    subtitle="Trusted by homebuyers and investors for secure real estate transactions."
                    reviews={[
                        {
                            name: "Vivek S.",
                            role: "Homebuyer",
                            company: "First Time Buyer",
                            rating: 5,
                            initials: "VS",
                            text: "The lawyer found a discrepancy in the title deed that we completely missed. Their verification saved us from making a terrible investment."
                        },
                        {
                            name: "Anita R.",
                            role: "Landlord",
                            company: "Commercial Space",
                            rating: 5,
                            initials: "AR",
                            text: "They drafted an iron-clad commercial lease agreement for my properties. Very professional and detail-oriented."
                        },
                        {
                            name: "Suresh P.",
                            role: "Client",
                            company: "Title Dispute",
                            rating: 4.8,
                            initials: "SP",
                            text: "We successfully won a complex ancestral land dispute thanks to their excellent representation in civil court."
                        }
                    ]}
                />
            </div>
        </div>
    );
};

export default PropertyLawyer;
