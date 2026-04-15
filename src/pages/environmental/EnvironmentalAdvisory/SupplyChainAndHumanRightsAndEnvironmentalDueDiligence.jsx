import React from 'react';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const SupplyChainAndHumanRights = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="Supply Chain and Human Rights"
                    heroTitleSuffix="and Environmental Due Diligence"
                    heroDescription="Effective Due Diligence is built on robust, integrated and digital risk identification, prevention and management processes. Corpbiz can help."
                    stats={[
                        { count: "43K+", label: "Happy Customers" },
                        { count: "3500+", label: "Expert Advisors" },
                        { count: "50+", label: "Branch Offices" },
                        { count: "4.9", label: "Global Rating" }
                    ]}
                    formTitle="Get Free Expert Consultation"
                />

                <DetailsLayout
                    overview={{
                        title: "Supply Chain and Human Rights Due Diligence —",
                        highlightTitle: "An Overview",
                        description: [
                            "The UN Human Rights Council unanimously adopted the UN guiding principles on business and human rights in 2011.",
                            "They introduced the concept of human rights due diligence or HRDD, which help prevent, identify, mitigate provide accountability for existing or potential human rights violation caused by an organisation either due to its business relationships or its own activities, including those pertaining to the supply chain.",
                            "Due to many new legislations, it has become mandatory for companies to adopt environmental and human rights strategies which range from compulsory human rights and environmental due diligence to voluntary initiatives led by organisations in their supply chains."
                        ]
                    }}

                    advantages={{
                        title: "What is Human Rights Due Diligence?",
                        subtitle: "Required Due Diligence Steps",
                        list: [
                            {
                                title: "Adoption of Policy",
                                desc: "Adoption and implementation of specific human rights policy that is committed to respecting everyone's human rights."
                            },
                            {
                                title: "Identification of Violations",
                                desc: "Identification and evaluation of existing and potential serious human rights violations across business functions."
                            },
                            {
                                title: "Prevention and Mitigation",
                                desc: "Prevention and mitigation of actions causing severe human rights violations and verifying responses."
                            },
                            {
                                title: "External Communications",
                                desc: "Making external communications on how serious human rights violations are being addressed publicly."
                            }
                        ]
                    }}

                    process={{
                        title: "Types of Human Rights Violations",
                        subtitle: "Occurring in Supply Chains",
                        steps: [
                            {
                                step: "01",
                                title: "Labour Law Violations",
                                desc: "Poor working conditions, minimum wage violations, forced overtime, and hazardous conditions without legal recourse."
                            },
                            {
                                step: "02",
                                title: "Child Labour",
                                desc: "Millions of children globally are actively involved in child labour, working in hazardous conditions like mining and agriculture."
                            },
                            {
                                step: "03",
                                title: "Health & Environmental Damages",
                                desc: "Contributing to unhealthy environments like exposing workers to untreated toxic chemicals or dumping liquid mining waste."
                            },
                            {
                                step: "04",
                                title: "Water, Land and Food Deprivation",
                                desc: "Land acquisitions displacing indigenous or local communities, restricting their access to basic rights and survival."
                            }
                        ]
                    }}

                    features={{
                        title: "Reasons for Lack of Safeguards",
                        subtitle: "Why organizations fail at HRDD",
                        list: [
                            { title: "Weak Policies", desc: "Policies that fail to address human rights violations directly or fail to implement actions committed." },
                            { title: "Insufficient Evaluation", desc: "Organizations often fail to get an accurate picture of human rights violations contributed by their supply chain." },
                            { title: "Weak Prevention", desc: "Failing to include specific human rights protections or contractual obligations regarding vendors/contractors." },
                            { title: "No Public Reporting", desc: "Lack of specific, transparent, external communications and human rights due diligence audit reporting." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    subtitle="Common queries regarding HRDD"
                    faqs={[
                        {
                            question: "Why is it essential to conduct human rights due diligence?",
                            answer: "It has become mandatory per the UN guiding principles to prevent, identify, mitigate and provide accountability for human rights violations in a supply chain."
                        },
                        {
                            question: "How can Corpbiz assist with Human Rights Audits?",
                            answer: "We offer mapping of the supply chain, traceability services, risk assessments, human rights due diligence audits, grievance redressal mechanisms and training toolkits."
                        },
                        {
                            question: "Are external human rights audits sufficient?",
                            answer: "Often, standard external verifications neglect human rights or rely on superficial checklists. Extensive audits by proven experts are imperative."
                        },
                        {
                            question: "Is it essential to publicly report on HRDD?",
                            answer: "Yes, companies should openly provide specific external communications regarding the steps taken for HRDD to ensure high accountability and credibility."
                        }
                    ]}
                />

                <ReviewsSection />
            </div>
        </div>
    );
};

export default SupplyChainAndHumanRights;

