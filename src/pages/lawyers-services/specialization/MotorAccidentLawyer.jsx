import React from 'react';
import docImage from '../../../assets/environmental-doc.png';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const MotorAccidentLawyer = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="Expert Motor Accident"
                    heroTitleSuffix="Lawyers"
                    heroDescription="Injured in a road accident? Get legal support to claim compensation quickly and fairly. Our experienced lawyers guide you through insurance claims, liability disputes, and compensation recovery."
                    stats={[
                        { count: "Expert", label: "Consultation" },
                        { count: "95%", label: "Success Rate" },
                        { count: "24/7", label: "Legal Support" },
                        { count: "500+", label: "Verified Lawyers" }
                    ]}
                    formTitle="Get Free Expert Consultation"
                />

                <DetailsLayout
                    overview={{
                        title: "Motor Accident Claims —",
                        highlightTitle: "Overview",
                        description: [
                            "Motor accidents can bring unexpected medical expenses, vehicle damage, financial stress, and legal complications. Whether the accident involves negligence, insurance disputes, or compensation claims, professional legal support can make a significant difference.",
                            "A Motor Accident Lawyer helps victims understand their legal rights, calculate fair compensation, and represent them before the Motor Accident Claims Tribunal (MACT).",
                            "Through Vyombiz managed by Clink Consultancy Services Private Limited, individuals and businesses can access experienced legal professionals who assist with accident claim cases, insurance disputes, and settlement negotiations."
                        ],
                        imageUrl: docImage
                    }}

                    advantages={{
                        title: "When to Consult",
                        subtitle: "Situations requiring legal help",
                        list: [
                            { title: "Injury Compensation", desc: "Claim compensation for medical expenses, rehabilitation, and loss of income." },
                            { title: "Fatal Accidents", desc: "Help families claim compensation for the death of a family member." },
                            { title: "Insurance Disputes", desc: "Assist when insurance companies delay or unfairly reject accident claims." },
                            { title: "Hit and Run", desc: "Guide victims through government compensation schemes and legal procedures." },
                            { title: "Liability Disputes", desc: "Establish who is responsible for the accident and handle complex liability cases." }
                        ]
                    }}

                    typesOfCompliance={{
                        title: "You Can Claim",
                        subtitle: "Compensation You Can Claim",
                        list: [
                            { title: "Medical Expenses", desc: "Reimbursement for current and future medical treatment and rehabilitation." },
                            { title: "Loss of Income", desc: "Compensation for the loss of immediate and future earning capacity." },
                            { title: "Vehicle Damage", desc: "Recovery of costs associated with vehicle repair or total replacement." },
                            { title: "Pain & Suffering", desc: "Monetary compensation for physical pain, emotional distress, and trauma." },
                            { title: "Permanent Disability", desc: "Financial support recognizing ongoing limitations caused by the accident." },
                            { title: "Fatal Cases", desc: "Financial support provided to the dependents of the deceased victim." }
                        ]
                    }}

                    process={{
                        title: "Our Process",
                        subtitle: "Step-by-Step Procedure",
                        steps: [
                            { step: "01", title: "Legal Consultation", desc: "Discuss accident details with a lawyer to understand your legal options." },
                            { step: "02", title: "Evidence Collection", desc: "Gather important documents like FIR, medical reports, and insurance details." },
                            { step: "03", title: "Claim Filing", desc: "Your lawyer files a proper petition before the Motor Accident Claims Tribunal." },
                            { step: "04", title: "Case Hearing", desc: "The tribunal evaluates the evidence, liability, and the claim amount." },
                            { step: "05", title: "Compensation Award", desc: "Upon approval, the tribunal orders the payment of compensation to the victim." }
                        ]
                    }}

                    documents={{
                        imageUrl: docImage,
                        title: "Documents Needed",
                        subtitle: "Required for Motor Accident Claims",
                        list: [
                            { title: "FIR Copy", desc: "First Information Report or official police complaint copy." },
                            { title: "Medical Records", desc: "Detailed medical reports, prescriptions, and hospital bills." },
                            { title: "Vehicle Details", desc: "Vehicle registration documents and insurance policy details." },
                            { title: "Driving License", desc: "A valid copy of the driver's driving license." },
                            { title: "Evidence", desc: "Photographs of the accident scene and statements from witnesses." }
                        ]
                    }}

                    features={{
                        title: "Why Hire a Lawyer",
                        subtitle: "Benefits of Professional Assistance",
                        list: [
                            { title: "Accurate Assessment", desc: "Accurate assessment of your case and calculation of maximum fair compensation." },
                            { title: "Documentation", desc: "Proper handling of legal documentation and tribunal filings." },
                            { title: "Negotiation", desc: "Professional negotiation with insurance companies to prevent unfair settlements." },
                            { title: "Representation", desc: "Strong representation before the Motor Accident Claims Tribunal (MACT)." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    faqs={[
                        {
                            question: "What is the time limit to file a motor accident claim in India?",
                            answer: "Motor accident claims should generally be filed within a reasonable time after the accident, though courts may allow delayed filings in certain circumstances."
                        },
                        {
                            question: "Can I claim compensation if the accident was partially my fault?",
                            answer: "Yes. Compensation may still be awarded depending on the degree of liability determined by the tribunal."
                        },
                        {
                            question: "Do I need a lawyer for a motor accident claim?",
                            answer: "While it is possible to file claims independently, legal professionals help ensure accurate documentation and better representation."
                        },
                        {
                            question: "How long does a motor accident claim case take?",
                            answer: "The duration depends on case complexity, evidence availability, and tribunal procedures."
                        },
                        {
                            question: "What if the driver responsible for the accident is uninsured?",
                            answer: "In such cases, compensation may be claimed through specific provisions or government compensation schemes."
                        }
                    ]}
                />

                <ReviewsSection
                    title="Client Success Stories"
                    subtitle="Trusted by victims to secure fair and timely compensation."
                    reviews={[
                        {
                            name: "Rajesh K.",
                            role: "Accident Victim",
                            company: "Injury Claim",
                            rating: 5,
                            initials: "RK",
                            text: "The insurance company was avoiding my medical claims, but the lawyer handled the MACT filing and successfully secured my compensation."
                        },
                        {
                            name: "Sneha M.",
                            role: "Family Member",
                            company: "Fatal Accident Claim",
                            rating: 5,
                            initials: "SM",
                            text: "Very empathetic and professional. They helped our family through a tough time and ensured we got the financial support we deserved."
                        },
                        {
                            name: "Amit V.",
                            role: "Vehicle Owner",
                            company: "Damage Claim",
                            rating: 4.8,
                            initials: "AV",
                            text: "The lawyer was great at negotiating with the insurer. They settled my vehicle damage claim much faster than I expected."
                        }
                    ]}
                />
            </div>
        </div>
    );
};

export default MotorAccidentLawyer;
