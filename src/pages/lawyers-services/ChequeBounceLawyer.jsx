import React, { useState, useEffect, useRef } from "react";
import { CheckCircle2, FileText, Briefcase, Scale, AlertCircle, HelpCircle } from "lucide-react";
import InsideNavbar from "../../../src/components/common/InsideNavbar";
import HeroLayout from "../../components/common/HeroLayout";
import CustomContactForm from "../../components/common/CustomContactForm";

// ----------------------------------------------------------------------
// Typography & Primitive Components
const SectionHeading = ({ children }) => (
    <h2 className="text-3xl lg:text-[40px] font-semibold text-[#072b47] tracking-tighter leading-tight mb-6">
        {children}
    </h2>
);

const SubHeading = ({ children }) => (
    <h3 className="text-2xl font-semibold text-[#072b47] mb-4">
        {children}
    </h3>
);

const BodyText = ({ children }) => (
    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
        {children}
    </p>
);

const BulletList = ({ items }) => (
    <ul className="space-y-3 mb-8">
        {items.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
                <div className="mt-1.5 shrink-0">
                    <CheckCircle2 size={18} className="text-[#005a9c]" />
                </div>
                <span className="text-[16px] text-slate-700 font-medium leading-relaxed">
                    {item}
                </span>
            </li>
        ))}
    </ul>
);

const InfoCard = ({ icon: Icon, title, description }) => (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-shadow duration-300 h-full">
        <div className="w-14 h-14 bg-[#f0f7ff] rounded-xl flex items-center justify-center mb-6">
            <Icon size={28} className="text-[#005a9c]" />
        </div>
        <h3 className="text-xl font-bold text-[#072b47] mb-4">{title}</h3>
        <p className="text-slate-600 font-medium leading-relaxed">{description}</p>
    </div>
);

const Divider = () => <div className="w-full h-px bg-slate-200 my-10" />;

const SectionLabel = ({ text }) => (
    <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#f0f7ff] border border-blue-100 mb-6">
        <span className="text-[13px] font-bold text-[#005a9c] uppercase tracking-wider">{text}</span>
    </div>
);

// ----------------------------------------------------------------------
// Specific Tab Content Components

const OverviewTab = () => (
    <div className="space-y-12">
        <section>
            <SectionLabel text="OVERVIEW" />
            <SectionHeading>What is a Cheque Bounce Case?</SectionHeading>
            <BodyText>
                A cheque bounce occurs when a bank refuses to process a cheque due to insufficient funds, signature mismatch, account closure, or other banking issues. In India, cheque bounce cases are governed by Section 138 of the Negotiable Instruments Act, 1881, making it a criminal offence.
            </BodyText>
            <BodyText>
                When a cheque issued towards repayment or payment fails to clear, the payee has the legal right to initiate proceedings against the issuer. This usually begins with sending a legal notice demanding payment within 15 days of receiving the bank’s cheque return memo.
            </BodyText>
            <BodyText>
                Businesses frequently face cheque bounce disputes during transactions, vendor payments, loan repayments, or service agreements. With proper legal guidance, you can enforce your rights and recover the amount legally.
            </BodyText>
            <BodyText>
                Professional legal assistance from platforms like Vyombiz managed by Clink Consultancy Services Private Limited ensures that the process is handled correctly and within statutory timelines.
            </BodyText>
            
            <Divider />

            <SectionHeading>Why You Should Hire a Cheque Bounce Lawyer</SectionHeading>
            <BodyText>
                Cheque bounce cases involve strict legal procedures and timelines. Any delay or mistake in documentation can weaken your case. An experienced lawyer can help you:
            </BodyText>
            <BulletList items={[
                "Draft and send legally valid demand notices",
                "Ensure compliance with Section 138 timelines",
                "File complaints in the appropriate court",
                "Represent you during hearings and negotiations",
                "Improve chances of quick recovery or settlement"
            ]} />
            <BodyText>
                Businesses and individuals often rely on Vyombiz managed by Clink Consultancy Services Private Limited to connect with experienced legal professionals who handle cheque dishonour matters efficiently.
            </BodyText>
        </section>
    </div>
);

const ReasonsTab = () => (
    <div className="space-y-12">
        <section>
            <SectionLabel text="REASONS & PROCESS" />
            <SectionHeading>Common Reasons for Cheque Bounce</SectionHeading>
            <BodyText>
                Understanding why cheques bounce helps identify the legal path forward.
            </BodyText>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
                <InfoCard
                    icon={FileText}
                    title="Insufficient Funds"
                    description="The most common reason where the issuer does not have enough balance in the account."
                />
                <InfoCard
                    icon={CheckCircle2}
                    title="Signature Mismatch"
                    description="If the signature on the cheque does not match bank records, the cheque may be rejected."
                />
                <InfoCard
                    icon={Scale}
                    title="Account Closed"
                    description="If the account linked to the cheque is already closed, the bank will return the cheque unpaid."
                />
                 <InfoCard
                    icon={Briefcase}
                    title="Post-dated Cheque Issues"
                    description="Depositing a cheque before the mentioned date can also lead to rejection."
                />
                 <InfoCard
                    icon={AlertCircle}
                    title="Payment Stopped"
                    description="If the issuer instructs the bank to stop payment intentionally."
                />
            </div>
            
            <p className="mt-8 text-slate-700 font-bold bg-[#f0f7ff] p-4 rounded-lg">
                In many such cases, the issuer may still be held liable under Section 138 depending on the circumstances.
            </p>

            <Divider />

            <SectionHeading>Legal Process for Filing a Cheque Bounce Case</SectionHeading>
            <BodyText>A cheque bounce dispute follows a structured legal procedure.</BodyText>
            
            <div className="space-y-6 mt-8">
                {[
                    { title: "Step 1: Cheque Return Memo", desc: "The bank issues a cheque return memo stating the reason for dishonour." },
                    { title: "Step 2: Legal Notice", desc: "A legal demand notice must be sent to the issuer within 30 days of receiving the cheque return memo." },
                    { title: "Step 3: Waiting Period", desc: "The issuer gets 15 days to make the payment after receiving the notice." },
                    { title: "Step 4: Filing the Case", desc: "If payment is not made, a complaint can be filed before the Judicial Magistrate Court within 30 days." },
                    { title: "Step 5: Court Proceedings", desc: "The court reviews the complaint, summons the accused, and conducts hearings before deciding the case." },
                ].map((step, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                        <div className="w-10 h-10 shrink-0 bg-[#005a9c] text-white font-bold rounded-full flex items-center justify-center text-lg">
                            {idx + 1}
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-[#072b47] mb-2">{step.title}</h4>
                            <p className="text-slate-600 font-medium">{step.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            <BodyText>
                Handling these steps correctly is crucial, and legal experts associated with Vyombiz managed by Clink Consultancy Services Private Limited assist clients through the entire litigation process.
            </BodyText>

        </section>
    </div>
);

const PenaltiesTab = () => (
    <div className="space-y-12">
        <section>
            <SectionLabel text="PENALTIES & DOCS" />
            <SectionHeading>Penalties for Cheque Bounce in India</SectionHeading>
            <BodyText>If the court finds the issuer guilty under Section 138 of the Negotiable Instruments Act, the following penalties may apply:</BodyText>
            <BulletList items={[
                "Imprisonment for up to 2 years",
                "Fine up to twice the cheque amount",
                "Compensation to the complainant",
                "Court-directed settlement or recovery"
            ]} />
            <BodyText>Because cheque bounce cases can result in criminal liability, legal representation becomes essential for both complainants and defendants.</BodyText>
            
            <Divider />

            <SectionHeading>Documents Required for Filing a Cheque Bounce Case</SectionHeading>
            <BodyText>To initiate legal proceedings, the following documents are generally required:</BodyText>
             <BulletList items={[
                "Original dishonoured cheque",
                "Bank cheque return memo",
                "Copy of the legal notice sent to the issuer",
                "Proof of notice delivery (postal receipt or courier proof)",
                "Payment agreements or supporting transaction documents",
                "Identity and address proof of the complainant"
            ]} />
            <BodyText>Legal professionals working with Vyombiz managed by Clink Consultancy Services Private Limited help clients organize and prepare these documents correctly before filing a case.</BodyText>
        </section>
    </div>
);


const WhyUsTab = () => (
    <div className="space-y-12">
        <section>
            <SectionLabel text="WHY US" />
            <SectionHeading>How Vyombiz Helps in Cheque Bounce Cases</SectionHeading>
            <BodyText>
                Resolving cheque dishonour disputes requires legal expertise and proper documentation. With Vyombiz managed by Clink Consultancy Services Private Limited, businesses and individuals can access:
            </BodyText>
             <BulletList items={[
                "Experienced cheque bounce lawyers",
                "Accurate legal notice drafting",
                "Quick case filing support",
                "Strategic legal consultation",
                "End-to-end court representation"
            ]} />
            <BodyText>
                Our goal is to simplify legal processes while helping clients recover dues through proper legal channels.
            </BodyText>

            <Divider />

            <SectionHeading>When Should You Take Legal Action?</SectionHeading>
            <BodyText>You should consider legal action if:</BodyText>
            <BulletList items={[
                "A cheque issued to you has been dishonoured",
                "The issuer fails to respond to your payment request",
                "The cheque was issued towards a legitimate transaction",
                "The payment is significant and requires formal recovery"
            ]} />
            <BodyText>
                Taking prompt action ensures that the legal timelines under the Negotiable Instruments Act are not missed.
            </BodyText>

        </section>

        <section className="bg-[#f0f7ff] p-8 rounded-2xl border border-blue-100">
            <h3 className="text-2xl font-bold text-[#072b47] mb-4">Consult a Cheque Bounce Lawyer Today</h3>
            <p className="text-slate-600 font-medium leading-relaxed mb-6">
                Cheque bounce disputes can affect both personal and business finances. Acting quickly ensures your legal rights are protected and increases the chances of recovering your money. Consult experienced legal professionals through Vyombiz and get guidance on the best legal strategy for your case.
            </p>
            <button className="bg-[#005a9c] hover:bg-[#072b47] text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-md hover:shadow-lg">
                Speak to a Lawyer Now
            </button>
        </section>
    </div>
);


// ----------------------------------------------------------------------
// Main Page Component

export default function ChequeBounceLawyer() {
    const [activeTab, setActiveTab] = useState("Overview");
    const contentRef = useRef(null);
    const [navHeight, setNavHeight] = useState(0);

    const tabs = [
        { name: "Overview", component: OverviewTab },
        { name: "Reasons & Process", component: ReasonsTab },
        { name: "Penalties & Docs", component: PenaltiesTab },
        { name: "Why Us", component: WhyUsTab }
    ];

    useEffect(() => {
        const updateHeight = () => {
            const getNav = document.getElementById('inside-navbar');
            const getHeader = document.querySelector('nav');
            let totalHeight = 0;
            if (getNav) totalHeight += getNav.offsetHeight;
            if (getHeader) totalHeight += getHeader.offsetHeight;
            setNavHeight(totalHeight);
        };
        updateHeight();
        window.addEventListener('resize', updateHeight);
        return () => window.removeEventListener('resize', updateHeight);
    }, []);

    const scrollToContent = () => {
        if (contentRef.current) {
            const topPosition = contentRef.current.getBoundingClientRect().top + window.scrollY - navHeight;
            window.scrollTo({ top: topPosition, behavior: "smooth" });
        }
    };

    const ActiveComponent = tabs.find(tab => tab.name === activeTab)?.component || OverviewTab;

    return (
        <div className="bg-slate-50 min-h-screen">
            <HeroLayout
                title={<span>Cheque Bounced? <br/>Take Legal Action Fast.</span>}
                subtitle="A bounced cheque is more than a financial inconvenience — it is a legal offence."
                description={<>Get professional legal support to send notices, file cases, and recover your money quickly. Connect with an experienced Cheque Bounce Lawyer today.</>}
                customForm={<CustomContactForm />}
                imageSrc="/lawyer-service-hero-section-img/hero-section-bg-img.png"
            />

            <InsideNavbar 
                tabs={tabs.map(t => t.name)}
                activeTab={activeTab}
                setActiveTab={(tab) => {
                    setActiveTab(tab);
                    scrollToContent();
                }}
            />

            <div className="max-w-[1440px] mx-auto px-4 md:px-6 py-12 lg:py-16">
                <div ref={contentRef} className="flex flex-col lg:flex-row gap-12 lg:gap-16">
                    {/* Left Column - Main Content */}
                    <div className="w-full lg:w-[65%] shrink-0">
                        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-slate-100 transition-all duration-300 min-h-[600px]">
                            <ActiveComponent />
                        </div>
                    </div>

                    {/* Right Column - Sidebar */}
                    <div className="w-full lg:w-[35%] shrink-0 space-y-8">
                        {/* Highlights Box */}
                        <div className="bg-gradient-to-br from-[#072b47] to-[#005a9c] rounded-3xl p-8 shadow-xl text-white sticky top-40">
                            <h3 className="text-2xl font-bold mb-6">Need Immediate Help?</h3>
                            
                            <ul className="space-y-5 mb-8">
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 size={24} className="text-[#FFE90A] shrink-0" />
                                    <span className="font-semibold text-[15px]">Legal Notice Drafting</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 size={24} className="text-[#FFE90A] shrink-0" />
                                    <span className="font-semibold text-[15px]">Case Filing (Sec 138)</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 size={24} className="text-[#FFE90A] shrink-0" />
                                    <span className="font-semibold text-[15px]">Court Representation</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 size={24} className="text-[#FFE90A] shrink-0" />
                                    <span className="font-semibold text-[15px]">Fast Recovery Strategy</span>
                                </li>
                            </ul>
                            
                            <div className="bg-white/10 p-5 rounded-2xl border border-white/20">
                                <p className="text-[13px] font-medium text-blue-100 mb-2">CONNECT INSTANTLY</p>
                                <p className="text-2xl font-black">Call +91-XXXXXXXXXX</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
