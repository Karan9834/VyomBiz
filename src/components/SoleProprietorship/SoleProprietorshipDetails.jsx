import React from "react";
import DetailsLayout from "../common/DetailsLayout";

const SoleProprietorshipDetails = () => {
    return (
        <DetailsLayout
            overview={{
                badge: "Solo Business",
                title: "Sole Proprietorship Registration –",
                highlightTitle: "Simplified Ownership",
                description: [
                    "The simplest and most common form of business structure in India, owned, managed and operated by one person, is called Sole Proprietorship.",
                    "A sole proprietorship registration is recommended for entrepreneurs who want complete control over their business and minimal regulatory interference."
                ],
                whyIdealTitle: "Owner’s Advantage",
                whyIdealList: [
                    { title: "Maximum Control", desc: "You have 100% authority over every decision and business strategy." },
                    { title: "Minimal Cost", desc: "Lowest legal and administrative expenses compared to other structures." },
                    { title: "Direct Profit", desc: "No sharing required—all business profits belong solely to you." }
                ]
            }}
            advantages={{
                title: "Key Advantages",
                subtitle: "Why thousands of entrepreneurs choose this traditional path.",
                list: [
                    { title: "Simple Registration", desc: "Quick and seamless online process with zero hassle." },
                    { title: "Tax Benefits", desc: "Take advantage of simplified tax filings and personal tax rates." },
                    { title: "Low Compliance", desc: "Very few annual filings compared to LLPs or Private Limiteds." },
                    { title: "Cost Efficiency", desc: "Save on heavy auditor fees and legal documentation costs." },
                    { title: "Privacy", desc: "No public disclosure of financial statements or audit reports required." },
                    { title: "Access to Capital", desc: "Easier to open business bank accounts and get small business loans." }
                ]
            }}
            eligibility={{
                title: "Proprietorship Norms",
                subtitle: "Simple eligibility criteria for single-owner businesses in India.",
                list: [
                    { title: "Natural Person", desc: "Must be a living person (not a company or firm)." },
                    { title: "Indian Resident", desc: "Must be a resident citizen of India." },
                    { title: "Valid PAN", desc: "Business is linked directly to the owner's personal PAN." },
                    { title: "Registered Office", desc: "Must have a physical place of business (Residential is OK)." },
                    { title: "Trade License", desc: "Required based on the specific nature of business and location." }
                ]
            }}
            documents={{
                title: "Required Documents",
                description: "Digital copies required for a lightning-fast registration cycle.",
                list: [
                    "PAN Card of Owner",
                    "Aadhar Card of Owner",
                    "Office Address Proof",
                    "Rental Agreement (if any)",
                    "Latest Utility Bill",
                    "NOC from Owner",
                    "Passport Size Photos",
                    "MSME/Udyam Certificate"
                ],
                imageUrl: "https://images.unsplash.com/photo-1590650153855-d9e808231d41?auto=format&fit=crop&q=80&w=1000"
            }}
            process={{
                title: "Registration Process",
                subtitle: "Smooth 5-Step Journey to launch your vision.",
                steps: [
                    { step: "01", title: "Name Selection", desc: "Select a unique business name that reflects your brand philosophy." },
                    { step: "02", title: "Document Check", desc: "Verify Aadhar and PAN details to ensure consistency for licenses." },
                    { step: "03", title: "GST/Udyam Filing", desc: "Applying for the essential government certificates for your trade." },
                    { step: "04", title: "Bank Verification", desc: "Opening a current account with your new registration certificates." },
                    { step: "05", title: "Live Operations", desc: "Starting your business with legal compliance and expert backing." }
                ]
            }}
            whyChooseUs={{
                title: "Reasons to Consider VyomBiz",
                subtitle: "Join the market leaders who trust us with their setup.",
                list: [
                    { title: "Expert Consultation", desc: "Advice on essential licenses mandatory for your specific trade." },
                    { title: "Time Efficiency", desc: "We handle end-to-end registration, saving you weeks of work." },
                    { title: "Paperwork Excellence", desc: "Perfect documentation to ensure zero rejection from authorities." },
                    { title: "Compliance Management", desc: " facilitation of seamless filing to reduce tax submission lead times." },
                    { title: "Customized Solutions", desc: "Solutions tailored to your scale, from micro-shops to large stores." },
                    { title: "Market Leadership", desc: "Decade of expertise with the highest success rate in India." }
                ]
            }}
        />
    );
};

export default SoleProprietorshipDetails;
