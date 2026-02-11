import React from "react";
import DetailsLayout from "../common/DetailsLayout";

const RegistrationDetails = () => {
    return (
        <DetailsLayout
            overview={{
                title: "Private Limited Company Registration –",
                highlightTitle: "An Overview",
                description: [
                    "A private limited company is a famous business structure in India due to its distinct characteristic features. It is a separate legal entity, allowing limited liability protection to its shareholders and protecting their personal assets from business debts. Governed by the Companies Act 2013, a private limited company can be registered with a minimum of two shareholders and a maximum number of 200 shareholders.",
                    "This type is suited for businesses that aim to raise funds for operations in the long run. It allows shareholders to transfer their shares by the company's Articles of Association (AOA) rules. However, unlike public limited companies, private limited companies cannot offer shares to the general public or trade them on the stock exchange. These companies must comply with regulations, including audits, annual filings and corporate governance norms. This structure is ideal for small and medium enterprises as it offers management flexibility and a specific degree of financial privacy."
                ],
                imageUrl: "/pvt-limited-overview.jpg"
            }}
            whyRequired={{
                title: "Why is Company Registration Required?",
                imageUrl: "/company-registration-why.webp",
                content: "Company registration is a process that gives legal status to a business and establishes its identity, separate from its owners. It boosts the organization's credibility, making it easier to gain the trust of the customers, suppliers and investors. It also opens the gateway to secure funding and facilitates protecting intellectual property rights. Company registration in India guarantees perpetual succession, enabling the business to operate beyond the founders' participation. Registering a business is a step that gives the company a formal and legal standing, helps in its expansion and provides financial stability."
            }}
            advantages={{
                title: "Advantages of Registering a Company",
                subtitle: "Registering a private limited company offers various benefits to the shareholders, including a flexible management structure, legal identity and limited liability protection. Let us explore some of the most important benefits below:",
                imageUrl: "/aboutus-illustration-image.jpg",
                list: [
                    {
                        title: "Limited Liability Protection",
                        desc: "One of the most important benefits of a private limited company is that it offers limited liability protection. It safeguards the personal assets of the shareholders against business debt, limiting the financial risk of investing in shares. It shields individuals from business liability, creating substantial financial protection."
                    },
                    {
                        title: "Greater Credibility",
                        desc: "Registering a business boosts its credibility, making it more lucrative to customers, suppliers and investors. A registered company is considered legitimate and professional, promoting mutual trust and encouraging business relations."
                    },
                    {
                        title: "Funding Access",
                        desc: "Funding is important for business growth. A private limited company is entitled to raise funds for its operations by issuing shares or borrowing funds from different sources, such as banks or other financial institutions. Funding helps the business fulfil its operational needs and expand its operations."
                    },
                    {
                        title: "Perpetual Succession",
                        desc: "A private limited company offers perpetual succession. It is not impacted by changes in ownership or the death of its founders. Perpetual succession gives businesses the stability to continue operating over a period of time."
                    },
                    {
                        title: "Separate Legal Entity",
                        desc: "A registered private limited company is considered to be a separate and distinct legal entity. It can enter into contracts independently, sue and be sued. The individual legal status boosts its efficiency and grants it the legal clarity to function independently."
                    },
                    {
                        title: "Tax Benefits",
                        desc: "Private limited companies benefit from various tax incentives and deductions, which help reduce their tax burdens. Such taxation leverages help them save costs and gain from multiple other transactions, helping them manage their finances better. Adopting disciplined financial practices helps them improve their profits."
                    }
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
