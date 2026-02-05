import React from "react";
import DetailsLayout from "../common/DetailsLayout";

const OPCDetails = () => {
    return (
        <DetailsLayout
            overview={{
                badge: "Solo Entrepreneurship",
                title: "One Person Company –",
                highlightTitle: "Ideal for Solo Founders",
                description: [
                    "One Person Company is the modern alternative to Sole Proprietorship, offering corporate status to individual entrepreneurs.",
                    "Enjoy the benefits of a private limited company while maintaining 100% control as a solo founder. Start your professional business journey with VyomBiz."
                ],
                whyIdealTitle: "Solo Advantage",
                whyIdealList: [
                    { title: "Personal Shield", desc: "No personal liability for business debts, unlike sole proprietorship." },
                    { title: "Direct Ownership", desc: "No partners needed to manage or share equity." },
                    { title: "Legacy Planning", desc: "Perpetual succession ensures the company lives on." }
                ]
            }}
            advantages={{
                title: "Why Start an OPC?",
                subtitle: "The perfect blend of limited liability and solo control.",
                list: [
                    { title: "Limited Liability", desc: "The owner's liability is limited to the extent of their share capital investment." },
                    { title: "Solo Control", desc: "Retain 100% control over all business decisions without the need for partners." },
                    { title: "Fewer Compliances", desc: "Enjoy exemptions from several rigid compliance requirements mandatory for Pvt Ltd." },
                    { title: "Separate Identity", desc: "OPC is a separate legal entity, meaning it can own property in its own name." },
                    { title: "Easy Funding", desc: "Banks and financial institutions prefer lending to corporate entities over individuals." },
                    { title: "Tax Efficiency", desc: "Potential tax benefits and deduction of business expenses not available to individuals." }
                ]
            }}
            eligibility={{
                title: "OPC Eligibility",
                subtitle: "The legal criteria you must meet to form an Indian One Person Company.",
                list: [
                    { title: "Natural Person", desc: "Only a natural person who is an Indian citizen and resident." },
                    { title: "Single OPC Only", desc: "A person can form only one OPC in India." },
                    { title: "Nominee Required", desc: "A nominee must be appointed during incorporation." },
                    { title: "No Minors", desc: "Minor cannot become a member or nominee of an OPC." },
                    { title: "Activity Limit", desc: "Cannot carry out Non-Banking Financial Investment activities." }
                ]
            }}
            documents={{
                title: "Required Documents",
                description: "Digital copies for both the founder and the registered office address.",
                list: [
                    "PAN Card Copy",
                    "Aadhar Card Copy",
                    "Latest Bank Statement",
                    "Passport Size Photo",
                    "Electricity Bill (Office)",
                    "NOC from Owner",
                    "Rent Agreement",
                    "Proof of Ownership"
                ],
                imageUrl: "https://images.unsplash.com/photo-1556761175-4b46a572b186?auto=format&fit=crop&q=80&w=1000"
            }}
            process={{
                title: "OPC Registration Process",
                subtitle: "Getting your OPC live in 5 simple stages.",
                steps: [
                    { step: "01", title: "DSC & DIN", desc: "Obtain Digital Signature Certificate and Director Identification Number." },
                    { step: "02", title: "Name Reservation", desc: "Reserve a unique name for your One Person Company via the MCA portal." },
                    { step: "03", title: "Documentation", desc: "Draft and sign MoA, AoA, and the mandatory Nominee consent form." },
                    { step: "04", title: "Integrated Filing", desc: "Submit incorporation forms (SPICe+) along with proof of office address." },
                    { step: "05", title: "Final Certificate", desc: "Receive the Certificate of Incorporation, PAN, and TAN." }
                ]
            }}
            whyChooseUs={{
                title: "Reasons to Consider VyomBiz",
                subtitle: "Expert support for your solo business venture.",
                list: [
                    { title: "Expert Consultation", desc: "Guided selection of the perfect legal structure for your vision." },
                    { title: "Fast Delivery", desc: "Streamlined processes ensuring your incorporation is on track." },
                    { title: "Legal Documentation", desc: "Professional drafting of MoA, AoA and Nominee contracts." },
                    { title: "Post-Reg Support", desc: "Everything from GST to annual compliances handled." },
                    { title: "Transparent Pricing", desc: "No hidden fees, just professional excellence." },
                    { title: "Dedicated Support", desc: "24/7 access to business experts who understand your journey." }
                ]
            }}
        />
    );
};

export default OPCDetails;
