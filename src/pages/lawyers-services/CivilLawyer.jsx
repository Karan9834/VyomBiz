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
            <SectionHeading>Trusted Civil Lawyers for Legal Disputes</SectionHeading>
            <BodyText>
                Civil disputes can arise in both personal and business life—from property disagreements and contractual conflicts to financial recovery matters. Handling such cases requires strong legal knowledge, strategic planning, and proper representation.
            </BodyText>
            <BodyText>
                At Vyombiz, you gain access to experienced civil lawyers who understand the complexities of civil litigation and dispute resolution. Our legal professionals guide clients through every stage of the legal process—from case evaluation and documentation to court representation and settlement negotiations.
            </BodyText>
            <BodyText>
                Through Vyombiz managed by Clink Consultancy Services Private Limited, individuals and businesses receive reliable civil legal assistance that prioritizes clarity, efficiency, and favorable outcomes.
            </BodyText>
            
            <Divider />

            <SectionHeading>What Do Civil Lawyers Do?</SectionHeading>
            <BodyText>
                Civil lawyers deal with non-criminal legal disputes between individuals, businesses, or organizations. Their primary goal is to protect legal rights, resolve conflicts, and ensure fair outcomes through negotiation, mediation, or court proceedings. Civil lawyers typically handle matters such as:
            </BodyText>
            <BulletList items={[
                "Property disputes and ownership conflicts",
                "Contract breaches and commercial disagreements",
                "Recovery of money or unpaid dues",
                "Consumer disputes and legal claims",
                "Landlord-tenant conflicts",
                "Partnership disagreements"
            ]} />
            <BodyText>
                With proper legal representation, civil disputes can often be resolved faster and more effectively while minimizing financial and reputational risks.
            </BodyText>
        </section>
    </div>
);

const ServicesTab = () => (
    <div className="space-y-12">
        <section>
            <SectionLabel text="SERVICES" />
            <SectionHeading>Civil Legal Services Offered</SectionHeading>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
                <InfoCard
                    icon={FileText}
                    title="Property & Real Estate Disputes"
                    description="Property disagreements are common. We handle ownership disputes, boundary arguments, title verification, and real estate contract disputes."
                />
                <InfoCard
                    icon={CheckCircle2}
                    title="Contract Dispute Resolution"
                    description="Civil lawyers handle breach of contract cases, contract interpretation, legal notices, and compensation claims."
                />
                <InfoCard
                    icon={Scale}
                    title="Recovery of Money"
                    description="Recover outstanding payments through legal procedures including legal notices, civil recovery suits, and settlement support."
                />
                 <InfoCard
                    icon={Briefcase}
                    title="Consumer Disputes"
                    description="File complaints and seek compensation for unfair practices, defective products, or poor services before consumer forums."
                />
                 <InfoCard
                    icon={AlertCircle}
                    title="Landlord–Tenant Disputes"
                    description="Resolve rental disagreements involving eviction, unpaid rent, or property damage through mediation or court representation."
                />
            </div>
        </section>
    </div>
);

const WhyLegalExpertiseTab = () => (
    <div className="space-y-12">
        <section>
            <SectionLabel text="WHY EXPERTISE MATTERS" />
            <SectionHeading>Why Legal Expertise Matters in Civil Cases</SectionHeading>
            <BodyText>
                Civil disputes often involve complex documentation, procedural rules, and legal arguments. Without proper legal guidance, cases may become prolonged or unfavorable. Professional civil lawyers help by:
            </BodyText>
             <BulletList items={[
                "Analyzing the legal strength of your case",
                "Preparing proper documentation and evidence",
                "Drafting legal notices and petitions",
                "Representing clients effectively in court",
                "Negotiating settlements when possible"
            ]} />
            <BodyText>
                Through Vyombiz managed by Clink Consultancy Services Private Limited, clients receive legal guidance designed to simplify complicated civil matters while protecting their rights and interests.
            </BodyText>
        </section>
    </div>
);


const ApproachTab = () => (
    <div className="space-y-12">
        <section>
            <SectionLabel text="APPROACH & WHO" />
            <SectionHeading>Our Approach to Civil Legal Support</SectionHeading>
            <BodyText>
                A structured legal approach helps resolve disputes efficiently. Our civil lawyers focus on understanding each client’s situation before recommending the best legal strategy.
            </BodyText>

            <div className="space-y-6 mt-8">
                {[
                    { title: "1. Case Assessment", desc: "Understanding the dispute and reviewing documents." },
                    { title: "2. Legal Strategy", desc: "Identifying the best legal approach for resolution." },
                    { title: "3. Documentation & Filing", desc: "Preparing legal notices, petitions, or claims." },
                    { title: "4. Negotiation or Litigation", desc: "Attempting settlement or proceeding with court action." },
                    { title: "5. Case Follow-Up", desc: "Continuous support until the matter is resolved." },
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

            <Divider />

            <SectionHeading>Who Should Consult a Civil Lawyer?</SectionHeading>
            <BodyText>Civil legal assistance can be beneficial for:</BodyText>
            <BulletList items={[
                "Business owners facing contractual disputes",
                "Individuals involved in property conflicts",
                "Landlords or tenants with rental disagreements",
                "Consumers seeking compensation for unfair practices",
                "Anyone requiring legal representation in civil court matters"
            ]} />
            <BodyText>Early legal consultation can help avoid escalation and protect your legal rights effectively.</BodyText>

        </section>

        <section className="bg-[#f0f7ff] p-8 rounded-2xl border border-blue-100">
            <h3 className="text-2xl font-bold text-[#072b47] mb-4">Get Professional Civil Legal Assistance</h3>
            <p className="text-slate-600 font-medium leading-relaxed mb-6">
                Civil disputes require careful handling and strong legal support. Whether it is a property issue, contract dispute, or recovery case, professional guidance can make the process smoother and more effective. With Vyombiz, clients receive access to experienced civil lawyers who focus on practical solutions, transparent legal processes, and dependable representation.
            </p>
            <button className="bg-[#005a9c] hover:bg-[#072b47] text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-md hover:shadow-lg">
                Talk to a Legal Expert Now
            </button>
        </section>
    </div>
);


// ----------------------------------------------------------------------
// Main Page Component

export default function CivilLawyer() {
    const [activeTab, setActiveTab] = useState("Overview");
    const contentRef = useRef(null);
    const [navHeight, setNavHeight] = useState(0);

    const tabs = [
        { name: "Overview", component: OverviewTab },
        { name: "Services", component: ServicesTab },
        { name: "Why Legal Expertise", component: WhyLegalExpertiseTab },
        { name: "Approach", component: ApproachTab }
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
                title={<span>Civil Lawyers for Businesses & Individuals</span>}
                subtitle="Resolve disputes with confidence."
                description={<>Get expert civil legal support for contracts, property conflicts, <br className="hidden md:block"/> recovery cases, and more—handled by experienced civil lawyers.</>}
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
                            <h3 className="text-2xl font-bold mb-6">Need Legal Assistance?</h3>
                            
                            <ul className="space-y-5 mb-8">
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 size={24} className="text-[#FFE90A] shrink-0" />
                                    <span className="font-semibold text-[15px]">Property & Real Estate</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 size={24} className="text-[#FFE90A] shrink-0" />
                                    <span className="font-semibold text-[15px]">Contractual Disputes</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 size={24} className="text-[#FFE90A] shrink-0" />
                                    <span className="font-semibold text-[15px]">Payment Recovery</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 size={24} className="text-[#FFE90A] shrink-0" />
                                    <span className="font-semibold text-[15px]">Consumer Claims</span>
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
