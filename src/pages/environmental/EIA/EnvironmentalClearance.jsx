import React from 'react';
import docImage from '../../../assets/environmental-doc.png';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const EnvironmentalClearance = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="Environmental Clearance"
                    heroTitleSuffix="Certificate"
                    heroDescription="Still didn't receive the environmental clearance certificate? Our expert consultants at Corpbiz ensure fast and hassle-free approvals for your projects! Secured environmental clearance for 800+ Projects."
                    stats={[
                        { count: "43K+", label: "Happy Clients" },
                        { count: "3500+", label: "Expert Advisors" },
                        { count: "50+", label: "Branch Offices" },
                        { count: "4.9", label: "Global Rating" }
                    ]}
                    formTitle="Get Free Expert Consultation"
                />

                <DetailsLayout
                    overview={{
                        title: "Environmental Clearance (EC) —",
                        highlightTitle: "An Overview",
                        description: [
                            "Environmental clearance (EC) refers to the process of acquiring government approval for the installation and notification of specified projects.",
                            "The Ministry of Environment, Forest and Climate Change is the authority that grants Environmental Clearance to Category A projects, whereas the State Environmental Impact Assessment Authority provides EC for Category B.",
                            "Every project proponent is required to get an Environmental Clearance Certificate before preparing any land for site work. A decision must be made within 105 days after submitting the final EIA and EMP reports."
                        ]
                    }}
                    advantages={{
                        title: "Benefits of EC",
                        subtitle: "Why Environmental Clearance is beneficial",
                        list: [
                            { title: "Maintains Equilibrium", desc: "EC ensures maintaining an equilibrium between economic development and environmental protection before a project's initiation." },
                            { title: "Improve Environmental Performance", desc: "Ensures improved environmental performance and sustainable development through balanced economic, social, and environmental considerations." },
                            { title: "Enhance Compliance", desc: "Ensures compliance with environmental laws, preventing violations and minimizing the risk of legal disputes." },
                            { title: "Strengthens Public Participation", desc: "Strengthens active public participation through transparent and accountable decision-making based on public hearings." },
                            { title: "Economic Benefits", desc: "Provides economic benefits, including promoting sustainable development and ensuring long-term project viability." }
                        ]
                    }}
                    eligibility={{
                        title: "Projects Requiring Prior EC",
                        subtitle: "Applicability",
                        list: [
                            { title: "Mining & Resource Extraction", desc: "Extraction of natural resources such as oil and mining of minerals." },
                            { title: "Power Projects", desc: "River Valley Projects (>50MW), Thermal and Nuclear Power Projects." },
                            { title: "Manufacturing & Infrastructure", desc: "Crude Oil Refining, Primary Processing, Metallurgical industry, Chemical fertilizers, Highways, Airports, etc." },
                            { title: "Construction", desc: "Building, construction, township, and area development projects of specific scales." }
                        ]
                    }}
                    documents={{
                        imageUrl: docImage,
                        title: "Documents Required",
                        subtitle: "For Environmental Clearance",
                        list: [
                            { title: "Assessment Reports", desc: "Environmental Impact Assessment (EIA) Report and Environmental Management Plan (EMP)." },
                            { title: "Project Details", desc: "Project Proposal/Feasibility Report and complete details of the project proponent." },
                            { title: "Site Plan and Maps", desc: "Details of land acquired for the project, layout plans, and map." },
                            { title: "Public Hearing & ToR", desc: "Public Hearing Report, Consent from Local Authorities, and Terms of Reference (ToR)." },
                            { title: "Post-Approval Needs", desc: "NOCs (Forest, Wildlife, CGWA, Fire), CTE, CTO, and certified half-yearly EC compliance report." }
                        ]
                    }}
                    process={{
                        title: "Step-by-Step Process",
                        subtitle: "For obtaining Environmental Clearance in India",
                        steps: [
                            { step: "1", title: "Filing Application", desc: "Submitting Form 1 and Supplementary Form 1A immediately after identifying the prospective site(s)." },
                            { step: "2", title: "Screening", desc: "Scrutiny of the application by the State Level Expert Appraisal Committee (SEAC) to determine if further environmental studies are needed." },
                            { step: "3", title: "Scoping", desc: "Determining and submitting scoping documents (Terms of Reference - ToR) outlining relevant environmental issues and impacts." },
                            { step: "4", title: "Public Consultation", desc: "Conducting a public hearing and stakeholder meeting to obtain feedback and opinions from the local community." },
                            { step: "5", title: "Appraisal", desc: "Detailed scrutiny by the Expert Appraisal Committee within 60 days of the final Environmental Assessment Report submission." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    subtitle="Common queries regarding Environmental Clearance"
                    faqs={[
                        {
                            question: "What is the validity of environmental clearance?",
                            answer: "The prior environmental clearance is valid for 10 years for River Valley projects, 30 years for mining projects, and 5 years for all other projects and activities."
                        },
                        {
                            question: "What is the primary goal of environmental clearance?",
                            answer: "The primary goal is to ensure that development projects do not cause adverse environmental degradation and to promote sustainable industrial growth."
                        },
                        {
                            question: "What are the laws regulating environmental clearance?",
                            answer: "Key laws include the Environmental (Protection) Act 1986, EIA Notification 2006, Forest (Conservation) Act 1980, and the Wildlife (Protection) Act 1972."
                        },
                        {
                            question: "What is category A and B in environmental clearance?",
                            answer: "Category A projects are handled by the MoEFCC at the central level due to their large scale, while Category B projects are handled by SEIAA at the state level."
                        }
                    ]}
                />

                <ReviewsSection />
            </div>
        </div>
    );
};

export default EnvironmentalClearance;

