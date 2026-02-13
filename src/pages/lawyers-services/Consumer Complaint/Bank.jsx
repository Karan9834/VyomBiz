import React from "react";
import { DollarSign, ShieldAlert, BadgeCent, Landmark, FileText } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

/**
 * Bank Page matching Vyombiz layout styles
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

const Bank = () => {

    const faqs = [
        {
            question: "How do I file a complaint against a bank?",
            answer: "You can start by filing a written complaint with the bank's branch manager. If unresolved, approach the Banking Ombudsman or a Consumer Court."
        },
        {
            question: "What is the Banking Ombudsman?",
            answer: "The Banking Ombudsman is a quasi-judicial authority created by the RBI to resolve complaints of customers of banks relating to certain services and deficiencies."
        },
        {
            question: "Can I file a complaint for unauthorized transactions?",
            answer: "Yes, you should immediately report unauthorized transactions to the bank. If they fail to refund the amount despite it not being your fault, you can file a case."
        },
        {
            question: "Is there a time limit to file a banking complaint?",
            answer: "Yes, generally you must approach the Ombudsman within one year of receiving a reply from the bank, or if the bank doesn't reply, within one year and one month of your complaint."
        },
        {
            question: "Can I claim compensation for harassment by recovery agents?",
            answer: "Absolutely. Banks are liable for the conduct of their recovery agents. Abusive behavior or harassment is valid ground for a consumer complaint and compensation."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Bank Consumer"
                heroTitleSuffix="Complaint"
                heroSubtitle="Unfair Bank Charges or Unauthorized Transactions?"
                heroDescription="Fight back against hidden fees, loan harassment, and service deficiencies. We help you navigate the Banking Ombudsman and Consumer Courts to get your money back."
                whatsIncludedList={[
                    "Unauthorized Transaction Refunds",
                    "Hidden Charges Disputes",
                    "Loan Harassment Relief",
                    "Credit Card Disputes"
                ]}
                stats={[
                    { count: "92%", label: "Resolution Rate", icon: <ShieldAlert size={20} /> },
                    { count: "2K+", label: "Cases Handled", icon: <Landmark size={20} /> },
                    { count: "Secure", label: "Financial Protection", icon: <DollarSign size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={{
                    badge: "Financial Justice",
                    title: "Banking Complaints –",
                    highlightTitle: "An Overview",
                    description: [
                        "Banking disputes are increasingly common, ranging from hidden charges and unauthorized debits to harassment by recovery agents.",
                        "The RBI has established the Banking Ombudsman scheme to address these grievances, but navigating it can be complex.",
                        "Filing a formal consumer complaint holds banks accountable for service deficiencies and unfair trade practices."
                    ],
                    whyIdealTitle: "Objectives of Filing a Complaint",
                    whyIdealList: [
                        { title: "Recover Losses", desc: "Get refunds for unauthorized transactions or wrongly levied charges." },
                        { title: "Stop Harassment", desc: "Take legal action against abusive recovery agents and unethical practices." },
                        { title: "Correct Credit Score", desc: "Fix errors in CIBIL reports caused by bank negligence." },
                        { title: "Ensure Fairness", desc: "Force banks to adhere to RBI guidelines and fair practice codes." }
                    ]
                }}
                advantages={{
                    title: "Advantages of Filing",
                    subtitle: "Why taking legal action is the right step.",
                    list: [
                        { title: "Financial Recovery", desc: "Retrieve money lost due to fraud, scams, or bank errors." },
                        { title: "Legal Protection", desc: "Safeguard yourself from illegal recovery tactics and threats." },
                        { title: "Systemic Improvement", desc: "Complaints force banks to improve their security and service quality." },
                        { title: "Compensation", desc: "Claim damages for mental agony and financial loss suffered." },
                        { title: "Accountability", desc: "Ensure the bank answers for their lack of due diligence." },
                        { title: "Peace of Mind", desc: "Resolve lingering financial disputes effectively." }
                    ]
                }}
                eligibility={{
                    title: "Common Reasons to File",
                    subtitle: "Valid grounds for a banking consumer complaint.",
                    list: [
                        { title: "Unauthorized Debits", desc: "Money deducted from account without consent or valid reason." },
                        { title: "Hidden Charges", desc: "Levying fees that were not disclosed or agreed upon." },
                        { title: "Loan Harassment", desc: "Abusive calls or behavior by recovery agents." },
                        { title: "Credit Card Issues", desc: "Wrongful billing, refusal to close cards, or hidden interest." },
                        { title: "Cheque Bouncing", desc: "Wrongful dishonor of cheques despite sufficient funds." },
                        { title: "Locker Theft", desc: "Loss of valuables from bank lockers due to negligence." },
                        { title: "Digital Failure", desc: "Transaction failures where money is debited but not credited." }
                    ]
                }}
                documents={{
                    title: "Required Documents",
                    description: "Key documents needed to build a strong case.",
                    list: [
                        "Account Statement (Passbook)",
                        "Transaction Slips/Receipts",
                        "Correspondence with Bank (Emails/Letters)",
                        "Copy of Complaint to Branch Manager",
                        "Loan Agreement (if applicable)",
                        "Credit Card Statements",
                        "Police Complaint (FIR) for Fraud"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                }}
                process={{
                    title: "Our Resolution Process",
                    subtitle: "How Vyombiz resolves your banking disputes.",
                    steps: [
                        { step: "01", title: "Review", desc: "We analyze your account statements and complaint details." },
                        { step: "02", title: "Notice", desc: "A formal legal notice is sent to the bank's nodal officer." },
                        { step: "03", title: "Ombudsman", desc: "If unresolved, we escalate the matter to the RBI Banking Ombudsman." },
                        { step: "04", title: "Consumer Court", desc: "For compensation claims, we file a case in the Consumer Commission." },
                        { step: "05", title: "Hearing", desc: "Our lawyers represent your interests during hearings." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose Vyombiz?",
                    subtitle: "Expertise in Banking Laws and Consumer Rights.",
                    list: [
                        { title: "Banking Experts", desc: "Lawyers specialized in RBI regulations and banking acts." },
                        { title: "Ombudsman Experience", desc: "Deep understanding of the Banking Ombudsman mechanism." },
                        { title: "End-to-End Support", desc: "From drafting letters to court representation." },
                        { title: "High Success Rate", desc: "Proven track record in recovering funds for clients." }
                    ]
                }}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries about Banking Complaints"
                faqs={faqs}
            />

        </div>
    );
};

export default Bank;
