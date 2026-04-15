import React from 'react';
import docImage from '../../../assets/environmental-doc.png';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const EnvironmentalManagementPlanReport = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="Environmental Management"
                    heroTitleSuffix="Plan Report"
                    heroDescription="Ready to enhance your project's sustainability? Contact Corpbiz to prepare an environmental management plan report and ensure environmental compliance is easily met!"
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
                        title: "Environmental Management Plan —",
                        highlightTitle: "An Overview",
                        description: [
                            "The Environmental Management Plan Report is a comprehensive document that outlines the strategies, measures, and monitoring mechanisms required for mitigating the adverse environmental impacts resulting from a proposed project.",
                            "The report recommends the synchronization of the economic development of the project area with the environmental protection of the region.",
                            "Simply, it is a guidance document used to measure and achieve compliance with a project’s environmental protection, outlining the impact on the natural environment and sustainable development of the surrounding area."
                        ]
                    }}
                    advantages={{
                        title: "Importance of EMP Report",
                        subtitle: "Why preparation of EMP is essential",
                        list: [
                            { title: "Identifies Potential Issues", desc: "Helps identify potential issues and implement effective management practices incorporating environmental considerations." },
                            { title: "Reduced Environmental Impact", desc: "Assists in reducing the level of environmental risks and impacts on the health, safety, and conditions of the environment (HS&E)." },
                            { title: "Compliance with Environmental Laws", desc: "Ensures compliance with applicable environmental laws, regulations, standards, and global guidelines." },
                            { title: "Promotes Best Practices", desc: "Promotes best practices encompassing prevention, recycling, treatment, and sustainable management of all types of waste." },
                            { title: "Maintains Energy Efficiency", desc: "Assists in reducing overall consumption and securing conservation of energy and other depletion resources." }
                        ]
                    }}
                    eligibility={{
                        title: "Eligibility & Triggers",
                        subtitle: "Checklist for preparing an EMP report",
                        list: [
                            { title: "Usage of Resources", desc: "Usage of natural resources or materials that may be toxic or ecologically destructive." },
                            { title: "Emissions Output", desc: "Production of significant noise and vibration, as well as distinct light and heat emissions." },
                            { title: "Regulated Activities", desc: "Permission required to store Hazardous Materials or to conduct activities near a Protected Archaeological Area." },
                            { title: "Sensitive Areas", desc: "Presence of environmentally sensitive areas within a certain radius of the project site." },
                            { title: "Waste Generation", desc: "Large scale project-related activities such as massive water requirements, trash generation, etc." }
                        ]
                    }}
                    documents={{
                        imageUrl: docImage,
                        title: "Documents Needed",
                        subtitle: "For EMP Preparation",
                        list: [
                            { title: "Operational Layouts", desc: "General project information, Site/Layout plan, and Emergency plans." },
                            { title: "Statutory Consents", desc: "NOC and Consent under Air, Water, EP Acts, and PUC Certificates for Use of Construction Vehicles." },
                            { title: "Clearances & Options", desc: "Environmental Clearance Certificate and proof of mitigation options adopted." },
                            { title: "Extraction permissions", desc: "NOC for Water Extraction, Construction, and other Allied Works." },
                            { title: "Proof of Ownership", desc: "Proof of Land Ownership, IDs, installed machinery, and quality test reports." }
                        ]
                    }}
                    process={{
                        title: "Procedure to Make an EMP",
                        subtitle: "Step-by-step workflow",
                        steps: [
                            { step: "1", title: "Access the Situation", desc: "The project proponent must initially access the situation and conduct an environmental impact assessment required for preparing an EMP." },
                            { step: "2", title: "Establish Objectives", desc: "Begin with the establishment of an Environmental Policy correctly linked to the key objectives of the organisation." },
                            { step: "3", title: "Plan Actions", desc: "Plan operations, identify regulatory requirements, allocate resources, explore pollution control opportunities, and establish budgets." },
                            { step: "4", title: "Implementation of Plan", desc: "Implement and define the structure, conduct training, manage EMS documentation, develop SOPs, and set up emergency protocols." },
                            { step: "5", title: "Monitor and Review", desc: "Perform internal assessment, identify issues, execute corrective measures, evaluate the EMS, and adapt for continual improvement." }
                        ]
                    }}
                    postCompliance={{
                        title: "Stages in EMP Reporting",
                        subtitle: "Components of the report",
                        list: [
                            { title: "Mitigation Plan", desc: "Ensures maintaining the environmental qualities of the area as specified in the project baseline." },
                            { title: "Ambient Air & Water Quality Analysis", desc: "Monitoring of levels of SPM, RPM, SO2, NO2, or any other pollutants affecting water/air." },
                            { title: "Stack Emission Report", desc: "Analysis and preparation of emission reports from the boiler stack to meet required levels." },
                            { title: "Noise Monitoring", desc: "Analysis of noise levels both within the premises and just outside the boundary of the project." },
                            { title: "Quality Assurance & Safety", desc: "Verification of equipment calibration, analytical techniques, and workers’ health mock drills." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    subtitle="Common queries about EMP"
                    faqs={[
                        {
                            question: "What is the difference between EIA and EMP?",
                            answer: "EIA (Environmental Impact Assessment) is a pre-project assessment that analyzes and identifies potential environmental impacts. EMP (Environmental Management Plan) is a post-project framework outlining how to implement and monitor the mitigation measures identified during the EIA."
                        },
                        {
                            question: "What should be included in an Environmental Management Plan Report?",
                            answer: "The EMP includes details concerning the success of environmental management measures, mitigation strategies, monitoring mechanisms, frequency, monitoring budgets, and values triggering required remedial actions."
                        },
                        {
                            question: "What laws regulate the creation of an EMP?",
                            answer: "Key laws include The Environmental (Protection) Act, 1986, The EIA Notification 2006, the Water & Air Pollution acts, and the Hazardous Waste Management Rules."
                        }
                    ]}
                />

                <ReviewsSection />
            </div>
        </div>
    );
};

export default EnvironmentalManagementPlanReport;

