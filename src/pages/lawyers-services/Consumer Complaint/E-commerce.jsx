import React from "react";
import { ShoppingCart, Truck, CreditCard, AlertTriangle, ShieldCheck } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

/**
 * Ecommerce Page matching Vyombiz layout styles
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

const Ecommerce = () => {

    const faqs = [
        {
            question: "What should I do if I get charged twice for my order?",
            answer: "If you are charged twice, contact the e-commerce platform's customer support immediately with transaction details. If they fail to refund, you can raise a dispute with your bank or file a consumer complaint."
        },
        {
            question: "Can I file a complaint if the product delivered is fake?",
            answer: "Yes, selling counterfeit products is a serious offense. You can file a complaint for unfair trade practices and seek a refund along with compensation."
        },
        {
            question: "How long can I wait to file a complaint for a defective product?",
            answer: "It is advisable to report the defect immediately. Most platforms have a return window (e.g., 7-30 days). if they refuse to accept the return within this period, you can file a complaint."
        },
        {
            question: "Is it possible to take legal action against big e-commerce giants?",
            answer: "Yes, consumer laws apply to all sellers, regardless of their size. Consumer courts frequently rule in favor of consumers against major e-commerce platforms for service deficiencies."
        },
        {
            question: "What if the seller refuses to refund money after a return?",
            answer: "If the seller refuses a refund after a valid return, you can send a legal notice. If that doesn't work, filing a case in the Consumer Forum is the next step."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="E-commerce Consumer"
                heroTitleSuffix="Complaint"
                heroSubtitle="Facing Issues with Online Purchases?"
                heroDescription="Did you receive a faulty product, experience delivery delays, or encounter unfair practices? We help you secure refunds, replacements, and compensation from online sellers."
                whatsIncludedList={[
                    "Refund & Return Disputes",
                    "Defective Product Claims",
                    "Delivery Delay Compensation",
                    "Legal Notice to Sellers"
                ]}
                stats={[
                    { count: "95%", label: "Success Rate", icon: <ShieldCheck size={20} /> },
                    { count: "5K+", label: "Disputes Resolved", icon: <ShoppingCart size={20} /> },
                    { count: "Fast", label: "Refunds", icon: <CreditCard size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={{
                    badge: "Online Shopping Issues",
                    title: "E-commerce Complaints –",
                    highlightTitle: "An Overview",
                    description: [
                        "E-commerce disputes are common, involving issues like defective products, late deliveries, and refund refusals.",
                        "A formal consumer complaint can be lodged against platforms or sellers for unfair trade practices and service deficiencies.",
                        "Legal intervention ensures that big e-commerce players are held accountable for their actions."
                    ],
                    whyIdealTitle: "Objectives of Filing a Complaint",
                    whyIdealList: [
                        { title: "Seek Resolution", desc: "Address issues like faulty products, delays, and misleading ads effectively." },
                        { title: "Protect Rights", desc: "Assert your consumer rights and ensure fair treatment in the digital marketplace." },
                        { title: "Obtain Refunds", desc: "Secure appropriate compensation or refunds for financial losses." },
                        { title: "Prevent Recurrence", desc: "Raise awareness to stop similar unfair practices from harming others." }
                    ]
                }}
                advantages={{
                    title: "Advantages of Filing",
                    subtitle: "Why you should take action against online sellers.",
                    list: [
                        { title: "Convenience", desc: "Online complaint mechanisms allow resolving issues from the comfort of your home." },
                        { title: "Prompt Response", desc: "Legal notices often trigger a fast response from platforms protecting their reputation." },
                        { title: "Efficient Resolution", desc: "Streamlined processes ensure faster identification and solving of issues." },
                        { title: "Cost-Effective", desc: "Filing a complaint is often more affordable than full-scale litigation." },
                        { title: "Empowerment", desc: "Gives you a voice to hold powerful e-commerce entities accountable." },
                        { title: "Compensation", desc: "Possibility to claim damages for mental agony and inconvenience." }
                    ]
                }}
                eligibility={{
                    title: "Common Reasons to File",
                    subtitle: "Situations where you should file an e-commerce complaint.",
                    list: [
                        { title: "Product Defects", desc: "Receiving damaged, defective, or poor-quality products." },
                        { title: "Non-Delivery", desc: "Order not delivered within the promised timeframe or at all." },
                        { title: "Billing Issues", desc: "Overcharging, unauthorized transactions, or pricing errors." },
                        { title: "Poor Service", desc: "Unresponsive customer support or rude behavior." },
                        { title: "Fraudulent Activities", desc: "Scams, counterfeit products, or fake listings." },
                        { title: "Data Privacy", desc: "Mishandling of personal data or security breaches." },
                        { title: "Refund Refusal", desc: "Unjustified rejection of return requests or refunds." }
                    ]
                }}
                documents={{
                    title: "Required Documents",
                    description: "Essential proofs for your e-commerce complaint.",
                    list: [
                        "Order Confirmation Email/Invoice",
                        "Payment Proof (Bank/Card Statement)",
                        "Screenshots of Product Description",
                        "Photos/Videos of Defective Product",
                        "Email Correspondence with Support",
                        "Warranty Card (if applicable)"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                }}
                process={{
                    title: "Our Resolution Process",
                    subtitle: "How Vyombiz resolves your e-commerce disputes.",
                    steps: [
                        { step: "01", title: "Collect Documents", desc: "We gather necessary proofs like invoices and screenshots." },
                        { step: "02", title: "Notify Platform", desc: "We formally notify the e-commerce platform/seller." },
                        { step: "03", title: "Legal Notice", desc: "A strong legal notice is sent demanding immediate redressal." },
                        { step: "04", title: "Escalation", desc: "If needed, we escalate to consumer forums or courts." },
                        { step: "05", title: "Resolution", desc: "We aim for a quick refund, replacement, or compensation." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose Vyombiz?",
                    subtitle: "Your partner in fighting online consumer fraud.",
                    list: [
                        { title: "E-commerce Experts", desc: "Deep knowledge of online consumer protection laws." },
                        { title: "End-to-End Support", desc: "From drafting notices to handling court filings." },
                        { title: "Proven Success", desc: "Track record of resolving disputes with major platforms." },
                        { title: "Hassle-Free", desc: "We handle the legal complexities while you relax." }
                    ]
                }}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries about E-commerce Complaints"
                faqs={faqs}
            />

        </div>
    );
};

export default Ecommerce;
