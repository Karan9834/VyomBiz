import React from 'react';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const NewLeadAcidBatteryImportLicense = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="New Lead Acid Battery"
                    heroTitleSuffix="Import License"
                    heroDescription="New Lead Acid Battery Import license is necessary to deal in import of lead acid batteries. The importers need to apply to the CPCB for obtaining license."
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
                        title: "New Lead Acid Battery Import —",
                        highlightTitle: "Brief Overview",
                        description: [
                            "Lead Acid Batteries store energy and it is one of the cheapest ways of storing energy. This battery includes two electrodes namely- lead and other is lead oxide. The electrodes are immersed in the water solution as well as in sulfuric acid. When the battery generates energy, the lead mixes with the sulphuric acid and produces lead sulphate.",
                            "The process would be reversed when the battery is charged. Hence with the use of lead alloy ingots and lead oxide, the lead acid battery is made up of two chemically different lead-based plates immersed in a sulphuric acid solution.",
                            "If these batteries are not handled or disposed of properly, then it can contaminate soil and ground water. It can also become a cause for environmental pollution."
                        ]
                    }}

                    advantages={{
                        title: "Authority & Grants",
                        subtitle: "Who grants Registration for New Lead Acid Battery Import?",
                        list: [
                            {
                                title: "Delegated Responsibility",
                                desc: "According to the provision under Rule 5 of Batteries (Management Handling) Rules, 2001, as amended in May 2010, the responsibility for granting registration to importers of the new lead acid batteries has been delegated by the Ministry of Environment and Forest to Central Pollution Control Board (CPCB) with effect from 4th May, 2010."
                            }
                        ]
                    }}

                    process={{
                        title: "Grant of Fresh Registration",
                        subtitle: "The following procedure is followed for the grant of certificate to New Lead Acid Battery Importers:",
                        steps: [
                            {
                                step: "01",
                                title: "Online Application & Document Submission",
                                desc: "Applicants should apply online through the online web portal. Once submitted, the applicant must also submit a hard copy of the application on their letterhead along with Form I, Form II, Form III (mentioning Qty. MT want to import), and an Attested copy of Import and Export Code Certificate."
                            },
                            {
                                step: "02",
                                title: "Registration Issuance",
                                desc: "The registration will be issued on the address or branch address mentioned on the IEC certificate. The incharge HWM Division shall grant the registration to the new lead acid batteries importers."
                            },
                            {
                                step: "03",
                                title: "Surrender Process for MoEF Registered",
                                desc: "The importer who was registered earlier by the MoEF and seeking to get registered with CPCB, can apply for the same as above. However, they need to surrender their original registration certificate issued by MoEF."
                            }
                        ]
                    }}

                    features={{
                        title: "Renewal & Cancellation",
                        subtitle: "Important compliance guidelines",
                        list: [
                            {
                                title: "Renewal of Registration",
                                desc: "Physical copy is not necessary. Apply at BRMS portal 45 days before expiry. Granted based on half-yearly returns submission. Registration is valid for 1 year."
                            },
                            {
                                title: "Cancellation or Suspension",
                                desc: "Registration can be suspended on non-submission of timely half-yearly returns. CPCB can issue a notice of non-compliance, and if ignored, it's liable to be cancelled."
                            },
                            {
                                title: "Reactivation Option",
                                desc: "The option of reactivating such registration is also available to the importer. Such reactivation should be approved by Member Secretary."
                            }
                        ]
                    }}

                    eligibility={{
                        title: "Why Choose VyomBiz?",
                        subtitle: "We make technical compliance certifications effortless and convenient.",
                        list: [
                            { title: "10+ Years of Experience", desc: "Expertise in Lead Acid Battery Import." },
                            { title: "400+ In-House Professionals", desc: "CAs, CS & Lawyers ready to assist." },
                            { title: "99% SLA Delivery", desc: "100% Satisfaction Guaranteed." },
                            { title: "10,000+ Pin Codes", desc: "Network in India with fast processing." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    subtitle="Clear your doubts about the registration"
                    faqs={[
                        {
                            question: "Who grants Registration for New Lead Acid Battery Import?",
                            answer: "The responsibility for granting registration has been delegated by the Ministry of Environment and Forest to Central Pollution Control Board (CPCB) with effect from 4th May, 2010."
                        },
                        {
                            question: "What documents are required for fresh registration?",
                            answer: "Form I, Form II, Form III (mention Qty. MT want to import), and Attested copy of Import and Export Code (IEC) Certificate are required along with a hard copy of the application."
                        },
                        {
                            question: "When should the renewal application be submitted?",
                            answer: "The application for renewal can be submitted 45 days before the validity period expires. A physical copy is not necessary for renewal."
                        },
                        {
                            question: "Can the registration be suspended or cancelled?",
                            answer: "Yes, registration can be suspended or cancelled on non-submission of timely half-yearly returns to the State Pollution Control Board and a copy to CPCB."
                        }
                    ]}
                />

                <ReviewsSection />
            </div>
        </div>
    );
};

export default NewLeadAcidBatteryImportLicense;

