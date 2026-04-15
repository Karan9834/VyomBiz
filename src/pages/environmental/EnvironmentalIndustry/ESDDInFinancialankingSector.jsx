import React from 'react';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const ESDDInFinancialankingSector = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="Environmental and Social Due Diligence"
                    heroTitleSuffix="in Financial & Banking Sector"
                    heroDescription="Enhance long-term financial viability and streamline ESDD in the Financial & Banking Sector with Corpbiz's 500+ ESG Experts."
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
                        title: "ESDD in Financial Sector —",
                        highlightTitle: "Brief Overview",
                        description: [
                            "With rising social and environmental activism worldwide from citizens and authorities alike, banks and financial institutions are under tremendous pressure to align operations with ESG considerations. Compliance with ESDD in the Financial & Banking Sector is no longer a choice but a compelling necessity.",
                            "The RBI and other central banks increasingly view ESDD as crucial in measuring businesses driven solely by profits against those addressing environmental and social needs. ESDD in the financial sector acts as an internal tool to ensure long-term viability and protect investor portfolios from ESG risks.",
                            "India's financial sector is rapidly expanding, with bank credit growing at double digits. The integration of ESDD practices helps financial institutions build resilience against climate-related financial risks and social reputation damage while capitalising on green financing opportunities."
                        ],
                        whyIdealTitle: "Why ESDD Matters in Finance",
                        whyIdealList: [
                            { title: "Risk Mitigation", desc: "For banks and NBFCs, lending to ecologically abusive or socially irresponsible borrowers translates into direct credit risks and potential accumulation of Non-Performing Assets (NPAs)." },
                            { title: "Regulatory Pressure", desc: "The RBI and SEBI are continuously rolling out stringent ESG disclosure guidelines. ESDD frameworks ensure institutions remain compliant with evolving regulatory landscapes." },
                            { title: "Green Financing", desc: "Institutional investors and sovereign wealth funds are increasingly allocating capital to green initiatives. ESDD capability allows banks to access and efficiently deploy these funds." },
                        ]
                    }}

                    advantages={{
                        title: "Risk Parameters Assessed",
                        subtitle: "Financial & Banking Sector",
                        list: [
                            {
                                title: "Environmental Risk Evaluation",
                                desc: "Our experts evaluate environmental risks associated with bank loan portfolios, including reviewing borrowers' compliance with environmental laws, assessing physical and transition climate risks, and verifying mechanisms to limit environmental deterioration."
                            },
                            {
                                title: "Social Impact Assessment",
                                desc: "We address human safety and rights, ensuring financing does not inadvertently support child labour, unfair wage practices, or community displacement without proper resettlement frameworks."
                            },
                            {
                                title: "Reputational Risk Analysis",
                                desc: "We evaluate the potential reputational damage a bank might suffer by associating with borrowers engaged in legally questionable or socially unacceptable business practices."
                            }
                        ]
                    }}

                    typesOfCompliance={{
                        title: "Benefits of ESDD for Banks",
                        subtitle: "Financial & Banking Sector",
                        list: [
                            {
                                title: "Protection Against Loan Defaults",
                                desc: "ESDD prevents banks from funding projects lacking requisite permits or facing environmental opposition. Projects stalled due to environmental non-compliance ultimately lead to payment defaults."
                            },
                            {
                                title: "Regulatory and RBI Compliance",
                                desc: "Establishing an ESDD framework ensures compliance with RBI's guidelines on green finance and sustainable lending, preventing regulatory penalties."
                            },
                            {
                                title: "Enhanced Portfolio Tracking",
                                desc: "Rigorous ESDD establishes constant tracking mechanisms ensuring financed projects operate per original environmental parameters and committed social obligations throughout the loan tenure."
                            },
                            {
                                title: "Brand Reputation Protection",
                                desc: "Demonstrating transparency through responsible lending limits activism against the institution and fortifies its public reputation among environmentally conscious customers."
                            }
                        ]
                    }}

                    process={{
                        title: "Our ESG Advisory Services",
                        subtitle: "Financial & Banking Sector",
                        steps: [
                            {
                                step: "01",
                                title: "Establishing ESDD Capabilities",
                                desc: "Our ESDD consultants help banks establish internal infrastructure tailored for environmental and social due diligence, integrating ESG checks into preliminary credit evaluation processes."
                            },
                            {
                                step: "02",
                                title: "Portfolio Vetting",
                                desc: "We conduct independent vetting of large-ticket financing proposals to uncover hidden environmental and social liabilities, providing go/no-go recommendations based on our analysis."
                            },
                            {
                                step: "03",
                                title: "Developing ESG Risk Frameworks",
                                desc: "Our team formulates robust Environmental, Social & Governance (ESG) and climate risk management frameworks aligned with international parameters like the Equator Principles."
                            },
                            {
                                step: "04",
                                title: "Continuous Portfolio Monitoring",
                                desc: "We assist in evaluating bank portfolios on an ongoing basis for ESG risks, providing analytical reports and mitigation strategies for high-risk assets."
                            }
                        ]
                    }}

                    features={{
                        title: "Why Choose Corpbiz",
                        subtitle: "For ESDD in Financial & Banking Sector",
                        list: [
                            { title: "Expert Financial ESDD Team", desc: "A dedicated team of experts specializing in ESG audits specifically developed for financial institutions and NBFCs." },
                            { title: "AI-Driven Risk Analysis", desc: "Leveraging our integrated AI platform to map millions of data points for accurate borrower risk assessment." },
                            { title: "Pan-India Assessment Capability", desc: "Network of 5,000+ professionals enabling on-ground physical verification of financed projects anywhere in India." },
                            { title: "Aligned with RBI Guidelines", desc: "All frameworks are designed in strict accordance with the latest RBI disclosures and sustainable lending requirements." },
                            { title: "Equator Principles Experience", desc: "Deep expertise in aligning Indian financial institution frameworks with international Equator Principles." },
                            { title: "Seamless Integration", desc: "Our ESDD frameworks are designed to integrate smoothly with your existing credit appraisal hierarchy with zero friction." }
                        ]
                    }}

                    eligibility={{
                        title: "Why VyomBiz for Financial ESDD?",
                        subtitle: "We make sustainable lending frameworks effortless and robust.",
                        list: [
                            { title: "10+ Years of Experience", desc: "Deep expertise in environmental regulations and their intersection with credit risk." },
                            { title: "400+ In-House Professionals", desc: "A combined team of financial analysts, environmental engineers, and legal compliance experts." },
                            { title: "99% SLA Delivery", desc: "Timely delivery of ESDD reports ensuring your credit disbursement delays are minimized." },
                            { title: "10,000+ Pin Codes Network", desc: "Ability to conduct physical site audits of any financed project across the country." }
                        ]
                    }}

                    postCompliance={{
                        title: "The Shift to Sustainable Finance",
                        subtitle: "Why integrating ESDD into credit decisions is the future of banking",
                        list: [
                            { title: "Rise of Green Bonds", desc: "Indian institutions are increasingly tapping into global green bond markets, requiring verifiable ESDD infrastructure within the issuing bank." },
                            { title: "Climate Stress Testing", desc: "Regulators are moving towards mandatory climate risk stress testing for bank portfolios, making integrated ESDD highly critical." },
                            { title: "Equator Principles Adoption", desc: "Major banks are adopting the EP framework to determine, assess and manage environmental and social risks in project financing." },
                            { title: "ESG-linked Corporate Loans", desc: "The rise of corporate loans whose interest rates are tied to the borrower's ESG performance requires constant, reliable ESDD monitoring by the lender." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    subtitle="Clear your doubts about ESDD in Financial & Banking Sector"
                    faqs={[
                        {
                            question: "Why is ESDD important for banks and financial institutions?",
                            answer: "ESDD is crucial for banks because it prevents direct credit risks associated with borrowers whose projects might be stalled due to environmental non-compliance. It also protects the bank from reputational damage, ensures compliance with RBI's sustainable finance guidelines, and enables access to global green financing pools."
                        },
                        {
                            question: "What are the common environmental risks in a bank's loan portfolio?",
                            answer: "Common environmental risks include lending to high-polluting industries facing regulatory closure, real estate projects lacking environmental clearances, businesses vulnerable to physical climate risks (e.g., coastal facilities prone to flooding), and assets that may become 'stranded' due to the transition to a low-carbon economy."
                        },
                        {
                            question: "How does conducting ESDD help reduce Non-Performing Assets (NPAs)?",
                            answer: "ESDD helps reduce NPAs by identifying projects that are likely to fail due to environmental violations, social protests, or inability to secure regulatory permits. By avoiding loans to such high-risk projects, banks protect their capital and ensure stable repayment schedules from compliant borrowers."
                        },
                        {
                            question: "What is the RBI's stance on Environmental and Social risks in banking?",
                            answer: "The RBI has increasingly emphasized the need for banks to integrate ESG and climate-related financial risks into their overall risk management framework. They have issued consultation papers on sustainable finance and are moving towards mandating standardized climate risk disclosures and ESDD integration in credit appraisals."
                        },
                        {
                            question: "What are the Equator Principles in project finance?",
                            answer: "The Equator Principles (EP) is a globally recognized risk management framework adopted by financial institutions for determining, assessing, and managing environmental and social risks in project finance operations, particularly for large infrastructure and industrial projects."
                        },
                        {
                            question: "How can Corpbiz assist NBFCs with ESDD?",
                            answer: "Corpbiz assists NBFCs by developing customized ESDD checklists integrated with their loan origination software, training credit officers on recognizing ESG red flags, conducting independent site audits for large-ticket loans, and preparing annual ESG portfolio risk reports for their investors."
                        },
                        {
                            question: "What is an ESG-linked loan?",
                            answer: "An ESG-linked loan (or sustainability-linked loan) is a financing instrument where the loan terms, such as the interest rate, are directly tied to the borrower's performance against pre-determined Environmental, Social, and Governance (ESG) targets. If the borrower meets the targets, they receive a financial incentive (lower rate)."
                        },
                        {
                            question: "Does ESDD slow down the credit approval process?",
                            answer: "While it introduces an additional assessment layer, a well-integrated ESDD framework utilizing technology and clear guidelines should not significantly slow down approvals. Corpbiz helps banks streamline this by categorizing loans into risk tiers (low, medium, high), focusing deep ESDD resources only on the high-risk proposals."
                        }
                    ]}
                />

                <ReviewsSection
                    title="What Our Clients Say About Us"
                    subtitle="Trusted by leading banks and NBFCs for ESG risk management."
                    reviews={[
                        {
                            name: "Vikram Singhania",
                            role: "Chief Risk Officer",
                            company: "National Mercantile Bank",
                            rating: 5,
                            initials: "VS",
                            text: "Corpbiz helped us integrate a comprehensive ESDD framework directly into our credit appraisal process. Their understanding of RBI guidelines and practical banking operations made the transition seamless. It has significantly reduced our exposure to high-risk environmental sectors."
                        },
                        {
                            name: "Pooja Desai",
                            role: "Head of ESG",
                            company: "Apex Housing Finance",
                            rating: 5,
                            initials: "PD",
                            text: "Our international institutional investors required us to adopt Equator Principles for our large real estate project financing. Corpbiz guided us through the entire capability-building process and now conducts independent ESDD vetting for all our major loan dockets."
                        },
                        {
                            name: "Arun Krishnan",
                            role: "MD & CEO",
                            company: "GreenVest NBFC",
                            rating: 5,
                            initials: "AK",
                            text: "As a climate-focused NBFC, rigorous ESDD is our core differentiator. Corpbiz acts as our extended compliance arm, undertaking deep-dive environmental audits for all our solar and wind financing proposals before we disburse funds. Truly professional team."
                        },
                        {
                            name: "Meera Reddy",
                            role: "Credit VP",
                            company: "Southern Co-operative Bank",
                            rating: 5,
                            initials: "MR",
                            text: "We were facing NPA issues due to factory closures ordered by Pollution Control Boards. Corpbiz implemented an ESDD red-flag system for our SME lending division. Since its implementation, our default rate linked to environmental non-compliance has dropped to zero."
                        },
                        {
                            name: "Sanjay Gupta",
                            role: "Head of Corporate Banking",
                            company: "Capital Trust Bank",
                            rating: 4.8,
                            initials: "SG",
                            text: "The customized ESG risk tracking framework Corpbiz provided helps us monitor our corporate loan portfolio post-disbursement. Their annual portfolio analysis report is now a standard document we proudly present to our board and regulators."
                        },
                        {
                            name: "Nisha Sharma",
                            role: "Sustainability Director",
                            company: "India InfraFund",
                            rating: 5,
                            initials: "NS",
                            text: "Financing large infrastructure projects carries immense social risk regarding land acquisition and local community impact. Corpbiz's social due diligence reports are incredibly detailed and have saved us from investing in projects with severe underlying public opposition."
                        }
                    ]}
                />
            </div>
        </div>
    );
};

export default ESDDInFinancialankingSector;

