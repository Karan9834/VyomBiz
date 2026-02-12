import React from "react";
import { Users, Briefcase, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

/**
 * Section 8 Demand Notice Page matching Vyombiz layout styles
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

const Section8DemandNotice = () => {

    const faqs = [
        {
            question: "Does the IBC 2016 provide for payment of operational debt before insolvency?",
            answer: "Yes. The Insolvency and Bankruptcy Code of 2016 provides for the demand of an unpaid debt from a corporate debtor. The corporate debtor shall be given an opportunity to settle any outstanding debts before the insolvency proceedings commence."
        },
        {
            question: "What does Section 8 of the IBC 2016 deal with?",
            answer: "Section 8 of IBC deals with the insolvency resolution by an operational creditor delivering a notice of demand of the outstanding operational debt or a copy of an invoice demanding payment of the amount involved in the default by the corporate debtor."
        },
        {
            question: "What is a demand notice under Section 8?",
            answer: "A demand notice is defined under the explanation for Section 8 of IBC, 2016 as a notice which has been served by the operational creditor to the corporate debtor in order to demand payment of the unpaid operational debt pertaining to which a default has occurred."
        },
        {
            question: "What is the time period for the corporate debtor to respond?",
            answer: "The corporate debtor is required to reply within ten days from the receipt of the notice operational creditor notice of any pending dispute or regarding payment of the unpaid debt."
        },
        {
            question: "Who is an Operational Creditor?",
            answer: "An operational creditor is someone to whom an operational debt is owed, including suppliers of goods/services, employees, or government authorities entitled to statutory dues."
        },
        {
            question: "What is an Operational Debt?",
            answer: "Operational debt is a claim in respect of the provision of goods and services including employment, or dues payable to the Central/State Government or local authority."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Section 8 Demand Notice"
                heroTitleSuffix="Consultation"
                heroSubtitle="Recover Your Unpaid Operational Debts"
                heroDescription="Initiate insolvency proceedings against defaulting corporate debtors with a Section 8 Demand Notice. Expert legal drafting and filing services."
                whatsIncludedList={[
                    "Drafting of Demand Notice (Form 3)",
                    "Evidence of Default Compilation",
                    "Service to Corporate Debtor",
                    "Legal Strategy Advisory"
                ]}
                stats={[
                    { count: "42810+", label: "Happy Clients", icon: <Users size={20} /> },
                    { count: "3500+", label: "Expert Advisors", icon: <Briefcase size={20} /> },
                    { count: "50+", label: "Branch Offices", icon: <Building2 size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={{
                    badge: "Legal Recourse",
                    title: "Section 8 Demand Notice –",
                    highlightTitle: "An Overview",
                    description: [
                        "The Insolvency and Bankruptcy Code (IBC) of 2016 empowers operational creditors to demand unpaid debts from corporate debtors. A Section 8 Demand Notice is a formal notification served by the operational creditor to the corporate debtor, giving them an opportunity to settle existing debts before insolvency proceedings are initiated.",
                        "Under Section 8 of the IBC, if a default occurs, the operational creditor may send a demand notice along with invoices demanding payment. The corporate debtor must respond within 10 days of receiving the notice, either by paying the debt or by bringing to notice the existence of a dispute.",
                        "Failure to respond or pay within the stipulated time allows the operational creditor to file an insolvency petition against the corporate debtor."
                    ],
                    whyIdealTitle: "Key Points",
                    whyIdealList: [
                        { title: "Statutory Requirement", desc: "Mandatory first step before filing for insolvency under Section 9." },
                        { title: "10-Day Window", desc: "Debtor has 10 days to respond or settle the dues." },
                        { title: "Dispute Notification", desc: "Debtor can inform about any pre-existing dispute regarding the debt." },
                        { title: "Operational Debt", desc: "Applicable for debts arising from goods, services, employment, or statutory dues." }
                    ]
                }}
                advantages={{
                    title: "Why Send a Demand Notice?",
                    subtitle: "Importance of Section 8 Notice for Creditors",
                    list: [
                        { title: "Pressure on Debtor", desc: "Signals serious intent to initiate insolvency proceedings if dues aren't cleared." },
                        { title: "Legal Pre-requisite", desc: "Essential condition precedent for filing an application under Section 9 of IBC." },
                        { title: "Settlement Opportunity", desc: "Often leads to settlement as debtors want to avoid insolvency resolution process." },
                        { title: "Clear Documentation", desc: "Establishes the default and the amount due formally on record." },
                        { title: "Time-Bound", desc: "Ensures a quick response or grounds for legal action within 10 days." },
                        { title: "Cost-Effective", desc: "A formal notice is less expensive than immediate litigation and effective for recovery." }
                    ]
                }}
                eligibility={{
                    title: "Who Can Issue?",
                    subtitle: "Eligibility to file Section 8 Demand Notice",
                    list: [
                        { title: "Suppliers", desc: "Those who have supplied goods or services and haven't been paid." },
                        { title: "Employees", desc: "Employees demanding unpaid salaries or wages." },
                        { title: "Government", desc: "Central/State Govt or Local Authorities for statutory dues." },
                        { title: "Assignees", desc: "Any person to whom the debt has been legally assigned or transferred." }
                    ]
                }}
                documents={{
                    title: "Documents Required",
                    description: "Essential documents for drafting Section 8 Demand Notice.",
                    list: [
                        "Unpaid Invoices demanding payment",
                        "Copy of the Contract/Agreement (if any)",
                        "Bank Statements showing non-payment",
                        "Purchase/Service Orders",
                        "Proof of Delivery of goods/services",
                        "Communication/Email correspondence regarding dues",
                        "Computation of total amount due including interest",
                        "Certificate from Financial Institution (optional but recommended)"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                }}
                process={{
                    title: "Process of Filing",
                    subtitle: "Steps to issue Section 8 Demand Notice",
                    steps: [
                        { step: "01", title: "Verify Default", desc: "Ensure operational debt is due and unpaid." },
                        { step: "02", title: "Draft Notice", desc: "Prepare Demand Notice in Form 3 or attach invoices (Form 4)." },
                        { step: "03", title: "Serve Notice", desc: "Deliver the notice to the Corporate Debtor's registered office/email." },
                        { step: "04", title: "Wait 10 Days", desc: "Wait for the statutory period of 10 days for debtor's response." },
                        { step: "05", title: "File Application", desc: "If no payment/dispute notice, file insolvency application under Section 9." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose VyomBiz?",
                    subtitle: "Expert assistance for IBC Demand Notices",
                    list: [
                        { title: "IBC Experts", desc: "Team comprising of Insolvency Professionals and Legal experts." },
                        { title: "Precise Drafting", desc: "Ensuring all legal particulars of Form 3/Form 4 are met." },
                        { title: "Fast Turnaround", desc: "Quick preparation and dispatch of notices." },
                        { title: "Strategic Advice", desc: "Guidance on whether to proceed with IBC or other recovery methods." },
                        { title: "End-to-End Support", desc: "From sending notice to filing application in NCLT." },
                        { title: "Affordable", desc: "Cost-effective legal solutions for operational creditors." },
                        { title: "Tracking", desc: "We track the delivery and response timeline for you." },
                        { title: "Consultation", desc: "Initial assessment of your case strength." }
                    ]
                }}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Everything you need to know about Section 8 Demand Notice"
                faqs={faqs}
            />

        </div>
    );
};

export default Section8DemandNotice;
