import React from "react";
import DetailsLayout from "../common/DetailsLayout";

const PartnershipDetails = () => {
    return (
        <DetailsLayout
            overview={{
                badge: "Collaboration",
                title: "Partnership Firm –",
                highlightTitle: "Shared Business Goals",
                description: [
                    "A partnership firm is a simple and effective business structure where two or more individuals manage and operate a business in accordance with the terms and objectives set out in a Partnership Deed.",
                    "It is one of the most popular forms of business organization in India, especially for small and medium-sized businesses and professional firms like law, architecture, and accounting."
                ],
                whyIdealTitle: "Why Partnership?",
                whyIdealList: [
                    { title: "No Annual Audit", desc: "Audit is not mandatory unless turnover exceeds ₹40 Lakhs." },
                    { title: "Direct Decisions", desc: "No need for board meetings or complex corporate procedures." },
                    { title: "Shared Knowledge", desc: "Combining diverse skillsets and capital for faster growth." }
                ]
            }}
            advantages={{
                title: "Advantages of Partnership Firm",
                subtitle: "Why entrepreneurs choose to build together.",
                list: [
                    { title: "Quick Registration", desc: "No complex MCA filings. Formed with just a notarized deed in days." },
                    { title: "Collaborative Control", desc: "Equal say in business operations and strategy for all partners." },
                    { title: "Shared Liability", desc: "Divide financial risks and management responsibilities among partners." },
                    { title: "Profit Sharing", desc: "Flexible profit-sharing ratios as defined in the Partnership Deed." },
                    { title: "Lower Compliance", desc: "No mandatory annual audits (below threshold) and zero statutory meetings." },
                    { title: "Direct Tax Benefits", desc: "Firm profits are taxed, and partners' shares are exempt in personal hands." }
                ]
            }}
            eligibility={{
                title: "Partnership Checklist",
                subtitle: "Basic legal requirements to start your partnership firm.",
                list: [
                    { title: "Min 2 Partners", desc: "At least two legal persons required to form a partnership." },
                    { title: "Firm Name", desc: "Select a unique name that doesn't conflict with existing trademarks." },
                    { title: "Partnership Deed", desc: "Legal document containing all operational terms and conditions." },
                    { title: "Business Place", desc: "A dedicated physical address for business registration." },
                    { title: "Capital Contribution", desc: "Initial investment details from each partner in the deed." }
                ]
            }}
            documents={{
                title: "Required Documents",
                description: "Digital copies of personal proofs and office documentation.",
                list: [
                    "PAN Card of Partners",
                    "Aadhar Card of Partners",
                    "Voter ID / Passport",
                    "Passport Size Photos",
                    "Electricity Bill (Office)",
                    "Rent Agreement",
                    "NOC from Owner",
                    "Registry Copy (Property)"
                ],
                imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1000"
            }}
            process={{
                title: "Partnership Registration Process",
                subtitle: "Simple steps to formalize your partnership.",
                steps: [
                    { step: "01", title: "Partner Agreement", desc: "Align on business goals, capital, and profit-sharing ratios." },
                    { step: "02", title: "Deed Drafting", desc: "Professional drafting of the Partnership Deed with all essential clauses." },
                    { step: "03", title: "Execution", desc: "Signing the deed on non-judicial stamp paper of appropriate value." },
                    { step: "04", title: "Registration", desc: "Applying for registration with the Registrar of Firms (optional but recommended)." },
                    { step: "05", title: "Tax IDs", desc: "Obtaining PAN and TAN for the firm and opening a bank account." }
                ]
            }}
            whyChooseUs={{
                title: "Reasons to Consider VyomBiz",
                subtitle: "Your partner in building a strong legal foundation.",
                list: [
                    { title: "Perfect Deed Drafting", desc: "Customized deeds that cover every possible business scenario." },
                    { title: "Tax Optimization", desc: "Guidance on profit withdrawal and partner remuneration for tax efficiency." },
                    { title: "Fast Processing", desc: "Getting your firm registered and bank accounts ready in record time." },
                    { title: "Regulatory Knowledge", desc: "Expertise in the Indian Partnership Act and state-specific rules." },
                    { title: "Zero Paperwork Stress", desc: "We handle the entire notarization and stamp duty process for you." },
                    { title: "Post-Registration", desc: "Continuous support for GST, Trademark and specialized licenses." }
                ]
            }}
        />
    );
};

export default PartnershipDetails;
