import React from "react";
import DetailsLayout from "../common/DetailsLayout";

const PublicDetails = () => {
    return (
        <DetailsLayout
            overview={{
                badge: "Enterprise Grade",
                title: "Public Limited Company –",
                highlightTitle: "Scale Without Limits",
                description: [
                    "Unleash your business potential with the most transparent and prestigious legal structure in India. A Public Limited Company is suitable for large-scale operations and businesses intending to raise capital from the public.",
                    "Public companies command more trust from banks, vendors, and international clients, making it the ideal choice for businesses with global ambitions."
                ],
                whyIdealTitle: "IPO Readiness",
                whyIdealList: [
                    { title: "Public Capital", desc: "Access to the largest pool of capital via public stock markets." },
                    { title: "Exit Strategy", desc: "Perfect structure for founders looking for a clear exit path via IPO." },
                    { title: "Brand Premium", desc: "Highest level of credibility and trust in the corporate world." }
                ]
            }}
            advantages={{
                title: "Advantages of Public Registration",
                subtitle: "The highest tier of corporate governance in India.",
                list: [
                    { title: "Public Capital", desc: "The only entity allowed to raise capital directly from the general public via IPOs." },
                    { title: "No Share Limit", desc: "Onboard as many shareholders as you need. There's no upper limit for Public companies." },
                    { title: "Limited Liability", desc: "Protection of personal assets for all directors and members beyond their shareholding." },
                    { title: "Stock Exchange", desc: "Easier path to list on NSE/BSE, providing exits for investors and liquidity for shares." },
                    { title: "Enhanced Image", desc: "Public companies command more trust from banks, vendors, and international clients." },
                    { title: "Separate Identity", desc: "The company holds property and contracts in its own name, distinct from its owners." }
                ]
            }}
            eligibility={{
                title: "Public Co. Eligibility",
                subtitle: "Requirements to qualify for a Public Limited registration under MCA guidelines.",
                list: [
                    { title: "7 Members", desc: "You need at least seven shareholders to form a public company." },
                    { title: "3 Directors", desc: "Requirement of at least three directors on the board." },
                    { title: "Digital Signature", desc: "DSC for all directors and subscribers is mandatory." },
                    { title: "Registered Office", desc: "A physical address in India for official correspondence." },
                    { title: "Corporate Shield", desc: "The company name must end with the word 'Limited'." }
                ]
            }}
            documents={{
                title: "Documentation Checklist",
                description: "Digital copies of director IDs, address proofs, and office premises documents.",
                list: [
                    "PAN Card of all Directors",
                    "Aadhar Card of all Directors",
                    "Latest Bank Statement",
                    "Passport Size Photos",
                    "Electricity/Water Bill (Office)",
                    "NOC from Owner",
                    "Rent Agreement",
                    "Proof of Ownership (Registry)"
                ],
                imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000"
            }}
            process={{
                title: "Public Incorporation Process",
                subtitle: "Comprehensive 5-step journey to your enterprise launch.",
                steps: [
                    { step: "01", title: "DSC & DIN Allotment", desc: "Obtain Digital Signatures and Director Identification Numbers for all 3 directors." },
                    { step: "02", title: "RUN Name Approval", desc: "Reserve your enterprise name via the MCA's RUN (Reserve Unique Name) service." },
                    { step: "03", title: "SPICe+ Documentation", desc: "Drafting of MoA, AoA and filing the integrated SPICe+ form for incorporation." },
                    { step: "04", title: "ROC Scrutiny", desc: "Verification of documents by the Registrar of Companies to ensure compliance." },
                    { step: "05", title: "COI & PAN/TAN", desc: "Issuance of Certificate of Incorporation along with tax IDs and Commencement of Business." }
                ]
            }}
            whyChooseUs={{
                title: "Reasons to Consider VyomBiz",
                subtitle: "Enterprise-grade legal and financial support.",
                list: [
                    { title: "IPO Readiness", desc: "Our experts set up your company with a listing-ready capital structure." },
                    { title: "Complex Structuring", desc: "Specialists in shareholder agreements and complex MoA/AoA drafting." },
                    { title: "Strategic Consultation", desc: "Guidance on board composition and corporate governance standards." },
                    { title: "Fast-Track Approval", desc: "Prioritised 99% SLA delivery for large scale corporate setups." },
                    { title: "Global Compliance", desc: "Ensuring your public limited company meets international standards." },
                    { title: "Dedicated Relationship Manager", desc: "A senior expert assigned to handle every aspect of your public incorporation." }
                ]
            }}
        />
    );
};

export default PublicDetails;
