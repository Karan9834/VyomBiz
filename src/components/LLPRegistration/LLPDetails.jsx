import React from "react";
import DetailsLayout from "../common/DetailsLayout";

const LLPDetails = () => {
    return (
        <DetailsLayout
            overview={{
                badge: "Corporate Structure",
                title: "LLP Registration –",
                highlightTitle: "Preferred by Startups",
                description: [
                    "Limited Liability Partnership is the preferred choice for startups, consultants, and professionals. It combines the flexibility of a partnership with the limited liability benefits of a company.",
                    "Our consultants ensure hassle-free limited liability partnership registration within a short time, handling every legal technicality while you focus on building your brand."
                ],
                whyIdealTitle: "Why Choose LLP?",
                whyIdealList: [
                    { title: "No Audit Below 40L", desc: "No mandatory audit required if turnover is below ₹40 Lakhs." },
                    { title: "Lower Cost", desc: "Lower setup and annual compliance costs compared to Pvt Ltd." },
                    { title: "Distributed Profit", desc: "No Dividend Distribution Tax (DDT) on profits shared with partners." }
                ]
            }}
            advantages={{
                title: "Benefits of LLP Registration",
                subtitle: "Why modern startups choose Limited Liability Partnership.",
                list: [
                    { title: "No Minimum Capital", desc: "Start your LLP with any amount. There is no minimum requirement mandated by law." },
                    { title: "Lower Compliance", desc: "Fewer compliance requirements compared to Private Limited Companies, saving time." },
                    { title: "Limited Liability", desc: "Partners are not personally liable for the debts or liabilities of the LLP." },
                    { title: "Flexible Management", desc: "Design and operate your business structure as per the LLP Agreement." },
                    { title: "Tax Advantages", desc: "Distributed profits are not taxed in the hands of partners (No DDT)." },
                    { title: "Easy Transfer", desc: "Ownership can be easily transferred to another person by changing partners." }
                ]
            }}
            eligibility={{
                title: "LLP Prerequisites",
                subtitle: "Essential requirements to form a Limited Liability Partnership in India.",
                list: [
                    { title: "Minimum Partners", desc: "At least 2 Partners are required (No maximum limit defined)." },
                    { title: "Designated Partners", desc: "Minimum 2 Designated Partners (one must be an Indian resident)." },
                    { title: "Unique Identity", desc: "Name must be unique and end with 'LLP' or 'Limited Liability Partnership'." },
                    { title: "Registered Office", desc: "Must have a physical office address in India for official comms." },
                    { title: "Partnership Deed", desc: "Legal agreement defining rights, duties, and profit sharing." }
                ]
            }}
            documents={{
                title: "Documentation Checklist",
                description: "Digital copies required for partners and the office premises.",
                list: [
                    "PAN Card of Partners",
                    "Aadhar Card of Partners",
                    "Latest Bank Statement",
                    "Aadhaar Integrated Photograph",
                    "Electricity/Water Bill (Office)",
                    "NOC from Owner",
                    "Rent Agreement",
                    "Proof of Ownership"
                ],
                imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1000"
            }}
            process={{
                title: "LLP Registration Process",
                subtitle: "Getting your partnership registered in 5 simplified steps.",
                steps: [
                    { step: "01", title: "DSC & DPIN", desc: "Obtain Digital Signatures and Designated Partner Identification Numbers." },
                    { step: "02", title: "Name Approval", desc: "Apply for name reservation (RUN-LLP) through the MCA portal." },
                    { step: "03", title: "FiLLiP Filing", desc: "Submit the incorporation form (FiLLiP) for certificate and PAN/TAN." },
                    { step: "04", title: "LLP Agreement", desc: "Draft and file the LLP Agreement within 30 days of incorporation." },
                    { step: "05", title: "Compliance Setup", desc: "Setup statutory records and open the business current account." }
                ]
            }}
            whyChooseUs={{
                title: "Reasons to Consider VyomBiz",
                subtitle: "Expert support for your professional partnership.",
                list: [
                    { title: "Expert Consultation", desc: "In-depth guidance on drafting the perfect LLP agreement." },
                    { title: "End-to-End Support", desc: "From name approval to bank account opening, we handle it all." },
                    { title: "Regulatory Compliance", desc: "Ensuring all MCA filings are accurate and submitted on time." },
                    { title: "Legal Excellence", desc: "Documents drafted by senior CAs, CSs and legal experts." },
                    { title: "Fast Delivery", desc: "Optimised workflows to reduce registration turnaround time." },
                    { title: "Dedicated Manager", desc: "Single point of contact for all your business registration needs." }
                ]
            }}
        />
    );
};

export default LLPDetails;
