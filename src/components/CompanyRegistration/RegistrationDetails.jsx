import React from "react";
import DetailsLayout from "../common/DetailsLayout";

const RegistrationDetails = () => {
    return (
        <DetailsLayout
            overview={{
                badge: "Market Standard",
                title: "Pvt. Ltd. Company –",
                highlightTitle: "The Gold Standard",
                description: [
                    "A Private Limited Company is the most popular legal structure for businesses in India. It offers limited liability protection to its shareholders, ability to raise equity funds, and a separate legal entity status.",
                    "Setting up a Private Limited Company offers numerous benefits that help your business grow and stay secure, making it the preferred choice for startups aiming for scalability."
                ],
                whyIdealTitle: "Success Potential",
                whyIdealList: [
                    { title: "VC & Angel Ready", desc: "Most preferred entity type for equity funding and investment." },
                    { title: "Global Scaling", desc: "Easier to expand internationally with a corporate structure." },
                    { title: "Talent Attraction", desc: "Ability to issue ESOPs to attract and retain top-tier talent." }
                ]
            }}
            advantages={{
                title: "Advantages of Registering a Company",
                subtitle: "Why Private Limited is the right choice for your vision.",
                list: [
                    { title: "Limited Liability", desc: "Your personal assets are safe. Liability is limited only to your share capital." },
                    { title: "Greater Credibility", desc: "Pvt Ltd companies are perceived more trustworthy by customers and vendors." },
                    { title: "Easy Funding", desc: "Venture Capitalists and Angel Investors prefer investing in Private Limited entities." },
                    { title: "Separate Legal Identity", desc: "The company is a separate person in the eyes of law, holding its own assets." },
                    { title: "Perpetual Succession", desc: "Business continues to exist even if shareholders or directors change." },
                    { title: "Tax Efficiency", desc: "Benefit from various tax deductions and a flat corporate tax rate." }
                ]
            }}
            eligibility={{
                title: "Am I Eligible for Pvt Ltd?",
                subtitle: "The legal foundation requires meeting these baseline criteria defined in the Companies Act 2013.",
                list: [
                    { title: "2 Directors", desc: "Minimum 2 Directors required (at least one must be an Indian resident)." },
                    { title: "2 Shareholders", desc: "Minimum 2 Shareholders (individuals or body corporates)." },
                    { title: "Registered Address", desc: "A physical office address in India to be registered with the ROC." },
                    { title: "Digital ID", desc: "Mandatory Digital Signature and Director Identification Numbers." },
                    { title: "Capital Norms", desc: "No minimum capital requirement (₹1 Lakh recommended for credibility)." }
                ]
            }}
            documents={{
                title: "Required Documents",
                description: "Digital copies of ID proofs and office documentation for the SPICe+ filing.",
                list: [
                    "PAN Card Copy",
                    "Aadhar Card Copy",
                    "Passport Size Photo",
                    "Voter ID / Passport",
                    "Latest Utility Bill (Office)",
                    "No Objection (NOC)",
                    "Rental Agreement",
                    "Ownership Proof"
                ],
                imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1000"
            }}
            process={{
                title: "Registration Process in 7 Days",
                subtitle: "Simplified 4-stage journey to your incorporation.",
                steps: [
                    { step: "01", title: "DSC & DIN", desc: "Obtaining digital signature and director ID numbers for all board members." },
                    { step: "02", title: "Name Approval", desc: "Reserving your unique company name with the ROC (Registrar of Companies)." },
                    { step: "03", title: "Documentation", desc: "Professional preparation of MoA, AoA and other mandatory legal forms." },
                    { step: "04", title: "Incorporation", desc: "Final filing with the MCA (Ministry of Corporate Affairs) and receiving the COI." }
                ]
            }}
            whyChooseUs={{
                title: "Reasons to Trust VyomBiz",
                subtitle: "End-to-end support for your company formation.",
                list: [
                    { title: "Senior Consultation", desc: "Expert business consultation to define your capital structure." },
                    { title: "Name Availability", desc: "Advanced checks to ensure your brand name is legally protectable." },
                    { title: "Compliance Support", desc: "Post-incorporation support for PAN, TAN, GST and bank accounts." },
                    { title: "Startup Registration", desc: "Guidance on Startup India recognition and associated tax holidays." },
                    { title: "Zero Hassle", desc: "We manage the entire online documentation and filing process." },
                    { title: "Direct Expert Access", desc: "Direct access to our senior CAs and CSs for every query." }
                ]
            }}
        />
    );
};

export default RegistrationDetails;
