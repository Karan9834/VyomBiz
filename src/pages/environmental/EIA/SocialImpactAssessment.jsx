import React from 'react';
import docImage from '../../../assets/environmental-doc.png';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const SocialImpactAssessment = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="Social Impact"
                    heroTitleSuffix="Assessment"
                    heroDescription="Special Offer: 50% off on Professional Services Today. Facing budget constraints for a detailed social impact assessment? At Corpbiz, we ensure a cost-effective social impact assessment within the desired time frame. Successfully conducted 5,000+ Social Impact Assessments since 2018."
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
                        title: "An Overview of",
                        highlightTitle: "Social Impact Assessment",
                        description: [
                            "Social impact assessment (i.e., SIA) is the systematic process of analyzing, monitoring, and controlling the intended and unexpected social repercussions, both good and bad, of planned interventions and any social change processes induced by such interventions.",
                            "SIA is increasingly an essential component of project planning, particularly for developing Resettlement Action Plans (RAPs). In this process, SIA is carried out as a socioeconomic survey, identifying the social and economic repercussions on persons and communities affected by project-induced displacement.",
                            "Furthermore, the data provided is utilised to build mitigation strategies and monitor mitigation implementation."
                        ]
                    }}
                    advantages={{
                        title: "Benefits of SIA in India",
                        subtitle: "Key benefits of social impact assessment (SIA)",
                        list: [
                            { title: "Informed Decision Making", desc: "Enables better decision-making through valuable insights into selecting and implementing treatments or interventions." },
                            { title: "Mitigating Measures", desc: "Facilitates the establishment of mitigation measures aimed at minimizing potential harm and maximizing benefits associated with a planned intervention." },
                            { title: "Professional Value System", desc: "Upholds a professional value system committing to sustainability, scientific integrity, accountability, and defense of human rights." },
                            { title: "Beyond Impact Prediction", desc: "Extends beyond impact prediction and focuses on empowering local communities and improving the position of marginalized individuals." },
                            { title: "Risk Management", desc: "Identifies potential risks and assists businesses in developing strategies to mitigate them effectively." }
                        ]
                    }}
                    eligibility={{
                        title: "Requirements for Conducting SIA",
                        subtitle: "Checklist for conducting social impact assessment",
                        list: [
                            { title: "Gain Insights into Impacted Parties", desc: "Crucial for gaining an in-depth understanding of the individuals or groups affected by a project." },
                            { title: "Understand Affected Communities", desc: "Comprehend the characteristics and dynamics of the communities directly or indirectly affected." },
                            { title: "Identify & Evaluate Social Impacts", desc: "Identify and examine the potential social consequences (both positive and negative effects) arising from the project." },
                            { title: "Formulate Mitigation Measures", desc: "Ensure formulation of management measures to mitigate adverse impact and maximize the benefits." },
                            { title: "Support Monitoring & Reporting", desc: "Supports the monitoring framework for tracking and reporting social impact throughout the lifecycle." }
                        ]
                    }}
                    documents={{
                        imageUrl: docImage,
                        title: "Documents Required",
                        subtitle: "For Environmental Social Impact Assessment",
                        list: [
                            { title: "Project Description", desc: "Project proposal, site plan, or project layout." },
                            { title: "Establishment Proof", desc: "Equipment installation proof and evidence of mitigation measures." },
                            { title: "Test & Connection Reports", desc: "Identification proof of signatory, quality test reports, electricity and water connection evidence." },
                            { title: "Administrative Records", desc: "Government census data, land records (including transaction records), and relevant NGO documents." }
                        ]
                    }}
                    process={{
                        title: "Process of SEIA",
                        subtitle: "Socio-economic Impact Assessment Process",
                        steps: [
                            { step: "1", title: "Scoping and Screening", desc: "Entails visiting the project site, consulting with all parties, and separating those with no substantial effects from those with significant impacts." },
                            { step: "2", title: "Baseline Analysis", desc: "Outlining the potential impact of the project on the social environment, income-generating possibilities, and available resources." },
                            { step: "3", title: "Impact Assessment", desc: "Establishes the impact area requiring the SIA team to field visit the region for qualitative and quantitative analysis of geographic boundaries." },
                            { step: "4", title: "Mitigation and Enhancement", desc: "Suggests measures for planning, managing, and mitigating any negative impacts or improving any good outcomes of the project." },
                            { step: "5", title: "Monitoring and Evaluation", desc: "Assess, monitor, and evaluate the relevance, actual impact, and outcome of the project. Enables tracking progress and performance intervention." }
                        ]
                    }}
                    postCompliance={{
                        title: "Role & Principles of SIA",
                        subtitle: "Crucial considerations for SIA",
                        list: [
                            { title: "Lifecycle Focused", desc: "One of the most common principles of social impact studies is ensuring the consideration of the complete lifecycle of the project." },
                            { title: "Participatory Approach", desc: "Built on local knowledge and participatory processes, required to be inclusive, respectful, and tailored." },
                            { title: "Effective Management", desc: "Includes effective social management measures to enhance potential benefits and mitigate potential negative impacts." },
                            { title: "Adaptive & Rigorous", desc: "SIA rigorously sticks to its objective and adopts principles for monitoring, reviewing, and adjusting management measures." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    subtitle="Common queries about Social Impact Assessment"
                    faqs={[
                        {
                            question: "What is the Social Impact Assessment process in India?",
                            answer: "The process of detecting and controlling the social implications of industrial undertakings is known as social impact assessment (SIA). It is simply the procedure for identifying and evaluating the possible good and adverse effects of a project, grant, or investment on a community or group of persons."
                        },
                        {
                            question: "Why is Social Impact Assessment necessary?",
                            answer: "It creates a socially and economically sustainable environment, fosters community development, helps develop mitigation measures, and supplements economic and technical models backing project development."
                        },
                        {
                            question: "What are the common tools or methods used for measuring social impact?",
                            answer: "Commonly used tools include Randomized Control Trials (RCT), Propensity Score Matching (PSM), and Synthetic Control Methods (SCM), along with surveys, interviews, and community observation methods."
                        }
                    ]}
                />

                <ReviewsSection />
            </div>
        </div>
    );
};

export default SocialImpactAssessment;

