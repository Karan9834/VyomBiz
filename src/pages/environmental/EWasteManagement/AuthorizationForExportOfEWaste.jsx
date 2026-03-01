import React from 'react';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const AuthorizationForExportOfEWaste = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="Authorization for Export of E-Waste"
                    heroTitleSuffix="— MoEF Approved"
                    heroDescription="Planning to export e-waste from India? Obtain Prior Informed Consent and MoEF authorization with expert support. Full compliance with the Basel Convention and Hazardous Waste Rules, 2016."
                    stats={[
                        { count: "43298 +", label: "Happy Clients" },
                        { count: "3500 +", label: "Expert Advisors" },
                        { count: "50 +", label: "Branch Offices" },
                        { count: "10k+", label: "Pin codes" }
                    ]}
                    formTitle="Get Free Expert Consultation"
                />

                <DetailsLayout
                    overview={{
                        title: "Export of E-waste Authorization —",
                        highlightTitle: "An Overview",
                        description: [
                            "The deserted electronic products like computers, equipment used in Information and Communication Technology, audio and video products etc., are known as e-waste or electronic waste. E-waste has grown tremendously in India as the IT sector has enhanced electronic equipment use.",
                            "E-waste has multiple substances like heavy, precious metals, plastics, etc., which can be toxic and harmful ecologically and can cause harm to humans if not handled or managed correctly. Essentially the E-Waste is made up of metals, plastics and glass, which, when salvaged, give precious metals like copper, iron, tin, lead, zinc, silver, and gold.",
                            "To deal in the export of e-waste, you need to obtain permission from MoEF (Ministry of Environmental and Forest) and SPCB (State Pollution Control Board). The Ministry of Environmental and Forest is the sole authority that deals with issuing approval for the export of e-waste from India.",
                            "E-waste Management System in India is regulated under the Environment and Forests Hazardous Wastes (Management and Handling) Rules, 2008. E-waste (Management and Handling) Rules, 2010 was also enacted to ensure safe and environmentally friendly handling, collection, and recycling of e-waste."
                        ],
                        whyIdealTitle: "Enforcement Agencies Involved in E-waste Management",
                        whyIdealList: [
                            { title: "Ministry of Environment and Forests", desc: "Government of India — primary authority for issuing export permissions." },
                            { title: "Central Pollution Control Board (CPCB)", desc: "Central regulatory body for environmental compliance." },
                            { title: "State Pollution Control Boards (SPCB)", desc: "State-level environmental regulatory authorities." },
                            { title: "Port & Customs Authorities", desc: "Directorate General of Foreign Trade and Port/Customs Authorities under the Customs Act, 1962." }
                        ]
                    }}

                    eligibility={{
                        title: "Eligibility Criteria for Export of E-Waste License",
                        subtitle: "Entities that can apply for export permission from MoEF",
                        list: [
                            { title: "E-Waste Producer", desc: "Producers of electronics manufacturing e-waste as part of their production process." },
                            { title: "E-Waste Dismantler", desc: "Authorized entities engaged in dismantling of electronic waste." },
                            { title: "E-Waste Refurbisher", desc: "Authorized refurbishers looking to export beyond Indian shores." },
                            { title: "E-Waste Manufacturer", desc: "Manufacturers of electrical and electronic equipment generating export-grade waste." },
                            { title: "Bulk Consumers", desc: "Mass quantity consumers of electronic devices generating e-waste." },
                            { title: "E-Waste Collection Organisations", desc: "Entities formally organized for collection and management of e-waste." }
                        ]
                    }}

                    documents={{
                        title: "Documents Required for Export of E-Waste",
                        description: "Documents needed for the issuance of the license for E-Waste Exportation:",
                        list: [
                            "Permission Certificate / License from MoEF for export of E-Waste",
                            "NOC from MoEF (No Objection Certificate)",
                            "Consent Letter from SPCB",
                            "Prior Informed Consent from the importing country",
                            "Movement Document in Form 6",
                            "Business address proof showing physical presence in India",
                            "Details of the e-waste being exported",
                            "Agreements with authorized recyclers/dismantlers in destination country"
                        ]
                    }}

                    process={{
                        title: "Issuance Process for a License for Export of E-Waste",
                        subtitle: "Step-by-step export authorization process",
                        steps: [
                            { step: "01", title: "Apply to MoEF", desc: "Anyone intending to export e-waste should apply to the Ministry of Environment and Forest." },
                            { step: "02", title: "Prove Physical Presence", desc: "For obtaining permission to export e-waste, the applicant needs to show a physical presence in India of the business." },
                            { step: "03", title: "Obtain NOC from MoEF & SPCB", desc: "The person for the proposed export needs to obtain NOC from MoEF and SPCB." },
                            { step: "04", title: "Prior Informed Consent", desc: "A prior informed consent in writing from the importing country is also necessary to export waste from India." },
                            { step: "05", title: "SPCB Copy Forwarding", desc: "The Ministry of Environment and Forest will forward a copy of the permission to the SPCB concerned and Port/Customs authorities for ensuring compliance." },
                            { step: "06", title: "Shipment with Movement Document", desc: "The exporter should ensure that no consignment is shipped before a prior informed consent is received and a Movement Document in Form 6 accompanies the shipment." }
                        ]
                    }}

                    postCompliance={{
                        title: "Violation of Laws Set for Export of E-Waste",
                        subtitle: "Export of e-waste from India shall be deemed illegal if:",
                        list: [
                            { title: "Without Central Government Permission", desc: "If export is conducted without permission of the Central Government under these rules." },
                            { title: "Fraudulent Permission", desc: "If the permission has been taken through falsification, misrepresentation or fraud." },
                            { title: "Non-Conforming Shipment", desc: "If it doesn't conform to the shipping details specified in the Movement Documents." },
                            { title: "Hazardous Dumping", desc: "If it results in deliberate disposal (dumping) of hazardous waste in contravention of the Basel Convention and international or domestic law." },
                            { title: "NOC Validity", desc: "The validity of a NOC provided by the MoEF is until the validity of the Consent Letter issued by the effective State's State Pollution Control Board (SPCP), which will vary from state to state." }
                        ]
                    }}

                    features={{
                        title: "How Can Corpbiz Assist You?",
                        subtitle: "First Choice of 500+ Known Exporters since 2018",
                        list: [
                            { title: "Legal & Financial Coordination", desc: "Corpbiz is one platform that coordinates to fulfil all your legal and financial requirements and connect you to consistent professionals." },
                            { title: "Real-Time Progress Tracking", desc: "Our clients can track at all times the progress on our platform." },
                            { title: "Experienced Representatives", desc: "If you have any questions about the process of getting required Documents for E-Waste Exportation, our experienced representatives are just a phone call away." },
                            { title: "Application Preparation", desc: "Prepare Application for E-Waste Exportation + Complete all Admissibility Criteria for Preliminary Screening." },
                            { title: "End-to-End Support", desc: "Get your work done by Corpbiz for end-to-end support — from documentation to getting the license approved." },
                            { title: "200+ Green Consultants", desc: "A network of 200+ green consultants with experience in export of e-waste authorization." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    subtitle="Get answers to the most common questions about this service."
                    faqs={[
          {
                    "question": "Is it legal to export e-waste from India?",
                    "answer": "Yes, but only with specific permissions. Exporters must obtain prior permission from the Ministry of Environment and Forest (MoEF) and NOC from both MoEF and the concerned SPCB. Unauthorized export of e-waste is treated as illegal dumping under the Basel Convention."
          },
          {
                    "question": "Who regulates the export of e-waste from India?",
                    "answer": "The Ministry of Environment and Forest (MoEF) is the primary authority for granting export permissions. Port and customs authorities under the Customs Act, 1962, and the SPCB also play regulatory roles in ensuring only authorized e-waste shipments leave India."
          },
          {
                    "question": "What is the Prior Informed Consent (PIC) requirement for e-waste export?",
                    "answer": "A Prior Informed Consent in writing from the importing country is mandatory before exporting e-waste from India. The MoEF sends a copy of the permission to the SPCB and Port/Customs authorities after receiving PIC from the destination country."
          },
          {
                    "question": "What is the Movement Document Form-6?",
                    "answer": "Form-6 is the E-Waste Manifation document that must accompany every e-waste shipment at the time of export. No consignment should be shipped without prior informed consent AND the completed Form-6 Movement Document."
          },
          {
                    "question": "Can refurbished electronics be exported from India?",
                    "answer": "Refurbished electronics are not classified as e-waste if they are fully functional and meet BIS/quality standards. Properly refurbished equipment can typically be exported under standard trade regulations. Only waste or non-functional equipment requires e-waste export authorization."
          },
          {
                    "question": "What makes an e-waste export illegal under Indian law?",
                    "answer": "E-waste export is deemed illegal if conducted without MoEF permission, if the permission was obtained through fraud or misrepresentation, if the shipment doesn't match the Movement Document details, or if it results in deliberate dumping of hazardous waste in contravention of the Basel Convention."
          },
          {
                    "question": "How long is the NOC valid for e-waste export?",
                    "answer": "The validity of the NOC from MoEF corresponds to the validity of the Consent Letter issued by the SPCB, which varies by state. Typically NOCs are valid for 1–3 years. Exporters should check the specific validity indicated in their NOC document."
          }
]}
                />
                <ReviewsSection />
            </div>
        </div>
    );
};

export default AuthorizationForExportOfEWaste;
