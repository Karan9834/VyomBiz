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
            <SectionHeading>What Does a Labour Lawyer Do?</SectionHeading>
            <BodyText>
                A Labour Lawyer specializes in employment and workplace laws that govern the relationship between employers and employees. Businesses must comply with several labour regulations related to hiring, wages, working conditions, benefits, and employee termination.
            </BodyText>
            <BodyText>
                A professional labour lawyer ensures that companies operate within legal frameworks while protecting their interests during disputes or regulatory audits.
            </BodyText>
            <BodyText>
                Through Vyombiz managed by Clink Consultancy Services Private Limited, businesses gain access to experienced labour lawyers who help manage complex labour regulations, reduce legal risks, and create compliant HR systems.
            </BodyText>
            <BodyText>
                These professionals support organizations in drafting policies, handling disputes, representing companies before labour authorities, and ensuring compliance with evolving employment regulations.
            </BodyText>
            
            <Divider />

            <SectionHeading>Why Businesses Need a Labour Lawyer</SectionHeading>
            <BodyText>
                Labour laws in India are complex and constantly evolving. Non-compliance can lead to legal disputes, penalties, or operational disruptions. A labour lawyer helps businesses:
            </BodyText>
            <BulletList items={[
                "Ensure compliance with labour regulations",
                "Draft legally sound employment contracts",
                "Handle employee grievances and disputes",
                "Represent the company before labour courts",
                "Prevent legal risks related to employee management",
                "Establish strong workplace policies"
            ]} />
            <BodyText>
                Businesses that seek proactive legal guidance often avoid costly litigation and regulatory issues.
            </BodyText>
        </section>
    </div>
);

const ServicesTab = () => (
    <div className="space-y-12">
        <section>
            <SectionLabel text="SERVICES" />
            <SectionHeading>Labour Law Services We Offer</SectionHeading>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
                <InfoCard
                    icon={FileText}
                    title="Employment Contracts"
                    description="Proper documentation is essential. Labour lawyers assist in preparing legally compliant employment contracts, appointment letters, and termination clauses."
                />
                <InfoCard
                    icon={CheckCircle2}
                    title="Compliance Advisory"
                    description="Companies must comply with regulations related to wages and safety. Legal experts help businesses maintain compliance with applicable labour laws."
                />
                <InfoCard
                    icon={Scale}
                    title="Dispute Resolution"
                    description="Employee disputes can arise over wages, termination, or harassment. Labour lawyers help resolve disputes through negotiation or representation."
                />
                 <InfoCard
                    icon={Briefcase}
                    title="HR Policy Drafting"
                    description="Strong HR policies reduce risks. Legal experts assist in drafting company policies covering code of conduct, ethics, and grievance mechanisms."
                />
                 <InfoCard
                    icon={AlertCircle}
                    title="Representation Before Authorities"
                    description="When disputes escalate, labour lawyers represent businesses before labour commissioners, labour courts, and industrial tribunals."
                />
                 <InfoCard
                    icon={HelpCircle}
                    title="Exit Management"
                    description="Labour lawyers ensure businesses handle layoffs, resignations, and terminations lawfully to avoid legal consequences."
                />
            </div>
        </section>
    </div>
);

const LawsTab = () => (
    <div className="space-y-12">
        <section>
            <SectionLabel text="LAWS & ISSUES" />
            <SectionHeading>Key Labour Laws Businesses Must Comply With</SectionHeading>
            <BodyText>Businesses in India must follow several employment regulations depending on industry and workforce size. Some key labour laws include:</BodyText>
            <BulletList items={[
                "Industrial Disputes Act",
                "Shops and Establishments Act",
                "Minimum Wages Act",
                "Payment of Wages Act",
                "Employees’ Provident Fund (EPF) Act",
                "Employees’ State Insurance (ESI) Act",
                "Payment of Bonus Act",
                "Payment of Gratuity Act",
                "Maternity Benefit Act"
            ]} />
            <BodyText>Legal experts help businesses understand which laws apply to them and ensure proper compliance.</BodyText>
            
            <Divider />

            <SectionHeading>Common Workplace Legal Issues Businesses Face</SectionHeading>
            <BodyText>Many companies face labour-related legal challenges due to lack of proper documentation or compliance systems. Common issues include:</BodyText>
             <BulletList items={[
                "Employee wrongful termination claims",
                "Wage and salary disputes",
                "Workplace harassment complaints",
                "Non-compliance with statutory benefits",
                "Labour inspection notices",
                "Contract employee disputes"
            ]} />
            <BodyText>Professional legal guidance helps businesses resolve these issues quickly and avoid reputational damage.</BodyText>
        </section>
    </div>
);


const WhyUsTab = () => (
    <div className="space-y-12">
        <section>
            <SectionLabel text="WHY US" />
            <SectionHeading>How Our Labour Lawyers Help Your Business</SectionHeading>
            <BodyText>
                Businesses require practical legal solutions rather than complicated legal processes. Through Vyombiz managed by Clink Consultancy Services Private Limited, companies receive structured legal support tailored to business needs.
            </BodyText>
             <BulletList items={[
                "Labour law compliance management",
                "Employment documentation and agreements",
                "Workplace policy development",
                "Legal dispute resolution",
                "Labour court representation",
                "Regulatory advisory"
            ]} />
            <BodyText>
                This approach ensures businesses can focus on growth while legal experts manage compliance risks.
            </BodyText>

            <Divider />

            <SectionHeading>Why Choose Professional Labour Law Support</SectionHeading>
            <BodyText>
                Handling labour law matters without expert guidance can lead to serious legal complications. Key advantages include reduced legal risks, strong employment documentation, proper dispute management, and compliance with evolving laws.
            </BodyText>

            <Divider />

            <SectionHeading>When Should You Consult a Labour Lawyer?</SectionHeading>
            <BodyText>Businesses should seek legal support in situations such as:</BodyText>
            <BulletList items={[
                "Hiring employees and drafting employment contracts",
                "Creating HR policies and employee handbooks",
                "Handling employee disputes or complaints",
                "Managing layoffs or employee termination",
                "Facing labour inspections or notices",
                "Representing the company in labour courts"
            ]} />
        </section>
    </div>
);


// ----------------------------------------------------------------------
// Main Page Component

export default function LabourLawyer() {
    const [activeTab, setActiveTab] = useState("Overview");
    const contentRef = useRef(null);
    const [navHeight, setNavHeight] = useState(0);

    const tabs = [
        { name: "Overview", component: OverviewTab },
        { name: "Services", component: ServicesTab },
        { name: "Laws & Issues", component: LawsTab },
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
                title={<span>Labour Law Compliance <br/>Made Simple</span>}
                subtitle="Hiring employees is easy. Managing labour law compliance is not."
                description={<>From employment contracts to workplace disputes, a Labour Lawyer helps businesses stay compliant, avoid penalties, and build legally secure workplaces.</>}
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
                            <h3 className="text-2xl font-bold mb-6">Need Legal Support For Your Business?</h3>
                            
                            <ul className="space-y-5 mb-8">
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 size={24} className="text-[#FFE90A] shrink-0" />
                                    <span className="font-semibold text-[15px]">Employment Laws</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 size={24} className="text-[#FFE90A] shrink-0" />
                                    <span className="font-semibold text-[15px]">Employee Disputes</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 size={24} className="text-[#FFE90A] shrink-0" />
                                    <span className="font-semibold text-[15px]">Labour Compliance</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 size={24} className="text-[#FFE90A] shrink-0" />
                                    <span className="font-semibold text-[15px]">Workplace Policies</span>
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
