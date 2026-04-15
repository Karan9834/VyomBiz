import React from 'react';
import docImage from '../../../assets/environmental-doc.png';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const ConsentForOperationFO = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="Consent for"
                    heroTitleSuffix="Operation (CFO)"
                    heroDescription="For Consent for Operation for your company, get your Pollution NOC with the assistance of Corpbiz. Get professional advisory to streamline your documentation and clearance."
                    stats={[
                        { count: "100K+", label: "Happy Customers" },
                        { count: "3500+", label: "Expert Advisors" },
                        { count: "50+", label: "Branch Offices" },
                        { count: "4.9", label: "Global Rating" }
                    ]}
                    formTitle="Get Free Expert Consultation"
                />

                <DetailsLayout
                    overview={{
                        title: "Consent for Operation (CFO) —",
                        highlightTitle: "An Overview",
                        description: [
                            "Consent for Operation (CFO Air and Water), also known as Consent to Operate (CTO), is granted to industrial units before they can start operations.",
                            "Under section 25/26 of the Water Act of 1974 and section 21 of the Air Act 1981, industries that have the potential to pollute must apply for this NOC at their concerned State Pollution Control Board (SPCB) or the Pollution Control Committee (PCC).",
                            "Once the industrial unit is established, along with required pollution control equipment, the applicant must obtain CFO and must ensure timely NOC renewal, strictly adhering to post-compliance terms."
                        ]
                    }}
                    advantages={{
                        title: "Operational Validity",
                        subtitle: "Validity periods for CFO based on category",
                        list: [
                            { title: "Red Category", desc: "Large, Medium, Small & Micro-scale units get a validity period of 5 years." },
                            { title: "Orange Category", desc: "Large, Medium, Small & Micro-scale units get a validity period of 10 years." },
                            { title: "Green Category", desc: "Large, Medium, Small & Micro-scale units get a validity period of 15 years." },
                            { title: "White Category", desc: "Exempted categories that do not need consent and can function subject to site clearance." }
                        ]
                    }}
                    eligibility={{
                        title: "Inspection & Effluent Verification",
                        subtitle: "Parameters scrutinized during inspection",
                        list: [
                            { title: "Air Emissions", desc: "Exhaust treatment checks involving PM10, PM2.5, SO2, and NOx limits." },
                            { title: "Wastewater Discharge", desc: "Parameters evaluated include pH, TSS, TDS, Oil & Grease, BOD, and COD." },
                            { title: "Noise Levels", desc: "Assessment of ambient and operating noise levels compared across daytime (6 AM-10 PM) and nighttime." },
                            { title: "Control Equipment Inspection", desc: "Verifying the physical installation of previously proposed pollution control equipment." }
                        ]
                    }}
                    documents={{
                        imageUrl: docImage,
                        title: "Documents Required",
                        subtitle: "For CFO Application",
                        list: [
                            { title: "Site Layouts", desc: "Index/Site Plan, Topo Map, Detailed layout plan of different processes, and Process Flow Sheet." },
                            { title: "Air & Water Info", desc: "Details of Air/Water Pollution Control devices, Third-party analysis reports (effluents/emissions)." },
                            { title: "Clearances", desc: "Consent to Establish (CFE) Copy, site clearance from the local authority, and ambient air quality report." },
                            { title: "Material Data", desc: "List of raw materials with quantity per month, and MSDS in the case of chemical industries." },
                            { title: "Resource Breakups", desc: "Break-up of water uses (process, domestic, gardening, boiler) and Boiler steam generating certificates." }
                        ]
                    }}
                    process={{
                        title: "Approval Procedure",
                        subtitle: "Steps to acquire CFO",
                        steps: [
                            { step: "1", title: "Online Application Filing", desc: "Submission of application for Consent for Operation via the Online Consent Management and Monitoring System (OCCMS) accompanied by required fees." },
                            { step: "2", title: "Application Scrutiny", desc: "The Section Officer scrutinises the application and passes it to the supervising environmental engineer for examination and recommendation." },
                            { step: "3", title: "Site Inspection", desc: "An Inspecting Officer visits the site to ensure the owner has set up all necessary pollution abetment devices according to the provided designs." },
                            { step: "4", title: "Report Generation", desc: "The officer runs a sample analysis of the trade effluent/emissions and prepares a comprehensive inspection report." },
                            { step: "5", title: "Issuance of Consent", desc: "Based on recommendations and after addressing all concerns, the Member Secretary/Chairman grants the Consent for Operation." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    subtitle="Common queries regarding CFO"
                    faqs={[
                        {
                            question: "What are the primary concerns at the time of application for Consent NOC?",
                            answer: "Primary issues include assessing potential environmental impacts on water, air, and soil, evaluating the pollution management plan, engineering drawings, and verifying compliance with notified standards of the state/central governments."
                        },
                        {
                            question: "Who is the approving authority for the CFO?",
                            answer: "For Green and small Orange category units, the approving authority is usually the Environment Engineer at the Regional Office. For Large Orange/Red units or projects exceeding substantial investments, it goes up to the Joint Chief Environment Engineer or Member Secretary based at the Head Office."
                        },
                        {
                            question: "Are there any businesses that do not require consent for operation?",
                            answer: "Yes, 'White Category' industries which are practically non-polluting are exempted from obtaining Consent for Operation and only require an intimation to the board."
                        }
                    ]}
                />

                <ReviewsSection />
            </div>
        </div>
    );
};

export default ConsentForOperationFO;

