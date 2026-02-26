import React from "react";
import { CheckCircle2, AlertTriangle, Clock, Users, FileText, Shield, BookOpen, BarChart2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

/**
 * Change in LLP Agreement
 * Nav: Overview | Reasons | Listicles | Registration Procedure | FAQs
 */
const ChangeInLLPAgreement = () => {
    const faqs = [
        { question: "What is a Supplementary LLP Agreement?", answer: "A Supplementary LLP Agreement is an additional document that specifies changes to the original LLP Agreement — defining each partner's revised duties, rights, and obligations in the LLP. It is incorporated alongside the original Agreement to effect the desired amendments." },
        { question: "When will the Change of LLP Agreement be completed?", answer: "The change in LLP Agreement is typically completed within 15–30 working days from the date of passing the resolution, subject to stamp duty payment, partner signatures, attestation, and Form-3 filing with the Registrar within 30 days of passing the resolution." },
        { question: "Are changes in LLP Agreements seen online or on portals?", answer: "Yes, once Form-3 is filed with the Registrar of Companies, the updated LLP Agreement and its amendments are visible on the MCA portal under the LLP's master data." },
        { question: "How do I change or update my LLP Agreement?", answer: "To change an LLP Agreement: (1) Hold a partners' meeting and pass a resolution for the change. (2) Execute the Supplementary LLP Agreement with stamp duty. (3) Get signatures of all partners and at least 2 witnesses. (4) File Form-3 with the Registrar within 30 days of passing the resolution." },
        { question: "What types of changes can be made in an LLP Agreement?", answer: "Common changes include: change in LLP name, change in objectives, change in registered office address, change in profit/loss sharing ratio, addition or removal of partners, change in capital contribution, modification of partner rights and responsibilities, and changes to operational terms like notice period, resignation conditions, and duration." },
        { question: "Do partners need to pay Stamp Duty for the Change in LLP Agreement?", answer: "Yes, Stamp Duty is required for the execution of the Supplementary LLP Agreement. The stamp duty amount varies from state to state based on the applicable stamp act of the state where the LLP is registered." },
    ];

    /* ─── Reasons (custom JSX → advantages slot) ─────────── */
    const reasonsContent = (
        <div className="space-y-8">
            <h3 className="text-lg font-bold text-[#072b47] mb-4 flex items-center gap-2">
                <BookOpen size={18} className="text-[#005a9c]" />
                Common Reasons for Making Changes in LLP Agreement
            </h3>
            <div className="grid gap-4 mb-8">
                {[
                    { title: "Change in Business Activities", desc: "The functioning of an LLP must be conducted within the rules and regulations explained in the LLP Agreement. To change or add new business activities/interests, the LLP Agreement must be amended by adding new clauses or discontinuing previous ones." },
                    { title: "Change in Capital Contribution", desc: "Capital is the most vital need of a business and must increase as the business grows. The capital sharing ratio and profit (loss) ratios of partners are inseparably linked — a supplementary deed is needed to affect changes in either." },
                    { title: "Change in Rights and Responsibilities of Partners", desc: "The rights and responsibilities of partners can be altered based on their evolving roles while their partner status remains intact. This often covers administrative powers or restrictions on certain activities." },
                    { title: "Modification of Other Vital Clauses", desc: "Other key clauses like jurisdiction of the LLP, terms of resignation, conditions of appointment, notice period, partnership duration, etc. can be altered to meet the needs of the partners and the business." },
                ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 bg-[#f8fbff] border border-[#d0e3f5] rounded-xl p-5">
                        <div className="w-8 h-8 rounded-full bg-[#072b47] text-white flex items-center justify-center shrink-0 text-[12px] font-bold">{i + 1}</div>
                        <div>
                            <p className="text-[14px] font-bold text-[#072b47] mb-1">{item.title}</p>
                            <p className="text-[13px] text-slate-600 leading-relaxed">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            <h3 className="text-lg font-bold text-[#072b47] mb-4 flex items-center gap-2">
                <BarChart2 size={18} className="text-[#005a9c]" />
                Most Common Changes That Occur in an LLP
            </h3>
            <div className="flex flex-wrap gap-2">
                {[
                    "Changes to the Agreement in general",
                    "Change in LLP Name",
                    "Changes to the LLP's objectives",
                    "Change of LLP Registered Office within ROC jurisdiction",
                    "Removal or resignation of an LLP Partner",
                    "Transmission of LLP rights in event of partner death",
                    "Shifting registered office from one state to another",
                    "Change in the LLP's Profit and Loss Sharing Ratio",
                    "LLP sale to a completely new group of people",
                ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 bg-[#e8f1fb] border border-[#c0d8f0] rounded-full px-3 py-1.5">
                        <CheckCircle2 size={13} className="text-[#005a9c]" />
                        <span className="text-[12px] font-medium text-[#005a9c]">{item}</span>
                    </div>
                ))}
            </div>
        </div>
    );

    /* ─── Listicles: Documents (standard documents prop) ─────── */
    const processSteps = [
        { step: "01", title: "Arrange a Partners' Meeting and Pass Resolution", desc: "Arrange a partners' meeting and obtain the consent of each partner involved in the Limited Liability Partnership. Pass a resolution for partners authorizing the desired change to the LLP Agreement." },
        { step: "02", title: "Authorize One Partner for MCA Filing", desc: "To fulfil the requirements of the amendment along with filing with the Ministry of Corporate Affairs (MCA), authorization is given to one of the partners to sign forms and documents on behalf of the LLP." },
        { step: "03", title: "Execute the Supplementary LLP Agreement", desc: "After the above steps, proceed with the execution of the Supplementary LLP Agreement. The Agreement must be executed on stamp paper of the applicable value — the Stamp Duty amount varies from state to state." },
        { step: "04", title: "Obtain Partner Signatures and Witness Attestation", desc: "All partners must sign the Supplementary LLP Agreement. The attestation must be done by at least 2 witnesses who are not parties to the LLP Agreement." },
        { step: "05", title: "File Form-3 with the Registrar", desc: "Once the resolution is passed, within 30 days file Form-3 with the Registrar of Companies to reflect the change in LLP Agreement on the MCA portal. The filing confirms the amendment is officially registered." },
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            <HeroLayout
                heroTitleMain="Change in "
                heroTitleSuffix="LLP Agreement"
                heroSubtitle="Amendment to LLP Agreement under LLP Act, 2008 — Form-3 MCA Filing"
                heroDescription="Amend your LLP Agreement seamlessly with Vyombiz. From partners' meeting resolutions and supplementary deed drafting to stamp duty execution and Form-3 Registrar filing — handled end-to-end by our LLP compliance experts."
                whatsIncludedList={["Partners' Resolution Drafting", "Supplementary Deed Preparation", "Stamp Duty Coordination", "Form-3 Registrar Filing"]}
                stats={[
                    { count: "30 Days", label: "Form-3 Filing Deadline", icon: <Clock size={20} /> },
                    { count: "2+", label: "Witness Attestations Required", icon: <Users size={20} /> },
                    { count: "24/7", label: "Expert Availability", icon: <Users size={20} /> }
                ]}
            />
            <TrustedBrands />
            <TalkExpert />
            <DetailsLayout
                navLabels={{ overview: "Overview", advantages: "Reasons", eligibility: "Listicles", documents: "Documents Required", process: "Registration Procedure", faq: "FAQs" }}
                overview={{
                    badge: "LLP Act, 2008 | Change in LLP Agreement — Form-3 Filing",
                    title: "Change in LLP Agreement —",
                    highlightTitle: "An Overview",
                    description: [
                        "LLP (Limited Liability Partnership) is a unique business structure where all partners have limited liabilities. Each partner is protected from personal liability as well as from the joint liability created by another partner's wrong business decision or misconduct. Registration of LLP in India is governed under the LLP Act, 2008, and a separate LLP Agreement must be filed.",
                        "The LLP Agreement is the governing legal document that controls the Limited Liability Partnership and its overall operations. Partners must follow the terms of the Agreement without violating any provisions. By having mutual agreement from all partners, the LLP Agreement can be changed at any time after registration.",
                    ],
                    whyIdealTitle: "What is the LLP Agreement?",
                    whyIdealList: [
                        { title: "Governing Document", desc: "The LLP Agreement defines the rights, responsibilities, obligations, and profit/loss sharing ratios of all partners, forming the operational backbone of the LLP." },
                        { title: "Continuity of LLP", desc: "Unlike a Partnership firm where the death of a partner can cause dissolution, the existence of an LLP doesn't depend on any individual partner — changes in partners do not affect LLP continuity." },
                        { title: "Amendment Mechanism", desc: "A Supplementary Agreement is generally incorporated alongside the original Agreement to effect changes. Partners must mutually consent via a partners' meeting resolution before any amendment." },
                        { title: "MCA Registration of Changes", desc: "Any change in the LLP Agreement must be formally registered with the Registrar by filing Form-3 within 30 days of passing the resolution — making it part of the public record on the MCA portal." },
                    ]
                }}
                advantages={reasonsContent}
                eligibility={{
                    title: "Key Provisions Relevant to LLP Agreement Changes",
                    description: "Understanding the legal framework governing LLP Agreement amendments under the LLP Act, 2008.",
                    list: [
                        "Partners hold the authority to amend the LLP Agreement through a mutual resolution, subject to the terms of the existing Agreement.",
                        "A Supplementary Deed is the primary instrument used to modify, add, or remove clauses from the existing LLP Agreement.",
                        "The Supplementary Deed must be executed on appropriately stamped paper as per the applicable state stamp act.",
                        "Signatures of all partners and at least 2 witnesses are required on the Supplementary Deed for valid execution.",
                        "Form-3 must be filed with the Registrar within 30 days of passing the resolution to change the LLP Agreement.",
                        "Any delay in filing Form-3 attracts additional fees for late submission.",
                        "Changes become effective and publicly visible on the MCA portal only after successful filing and processing of Form-3.",
                    ]
                }}
                documents={{
                    title: "Documents Required for Change in LLP Agreement",
                    description: "The following documents are required to file the change in LLP Agreement with the Registrar.",
                    list: [
                        "PAN Card of the LLP.",
                        "Certificate of Incorporation of the LLP.",
                        "Original LLP Agreement (as filed at the time of registration).",
                        "Supplementary LLP Agreement (modified/amended agreement).",
                        "Resolution of Partners approving the change.",
                        "Digital Signature Certificate (DSC) of an authorised partner.",
                    ]
                }}
                process={{ title: "Procedure to Make Changes in LLP Agreement", subtitle: "Step-by-step process to amend the LLP Agreement and file with the MCA.", steps: processSteps }}
                whyChooseUs={{
                    title: "Why Choose Vyombiz for Change in LLP Agreement?",
                    subtitle: "End-to-end support for smooth and compliant LLP Agreement amendment.",
                    list: [
                        { title: "Expert Agreement Drafting", desc: "Our legal experts draft the Supplementary LLP Agreement with precision, ensuring all desired amendments are clearly and legally articulated." },
                        { title: "Stamp Duty Coordination", desc: "We coordinate the stamp duty assessment and execution of the Supplementary Deed as per the applicable state stamp act." },
                        { title: "Partner Consent Management", desc: "We assist in structuring and documenting the partners' resolution and obtaining all required signatures and witness attestations." },
                        { title: "Timely Form-3 Filing", desc: "We file Form-3 with the Registrar within the 30-day window to avoid any late filing penalties and ensure the change is reflected on the MCA portal." },
                        { title: "Complete Documentation", desc: "We compile and deliver all finalised documents — original agreement, supplementary deed, resolutions, and MCA filings — for your records." },
                    ]
                }}
            />
            <FAQLayout title="FAQs on Change in LLP Agreement" subtitle="Common questions about LLP Agreement amendments answered by our experts" faqs={faqs} />
        </div>
    );
};

export default ChangeInLLPAgreement;
