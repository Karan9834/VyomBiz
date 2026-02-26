import React from "react";
import { CheckCircle, Globe, Award, Users, Briefcase } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

/**
 * Change in Object Clause — MOA Amendment Page
 * Sections: Overview | Contents | Registration Procedure | Vyombiz Support | FAQs
 */
const ChangeInObjectClause = () => {

    const faqs = [
        {
            question: "What are the key points for a better understanding of MOA?",
            answer: "A company is permitted to subscribe through an agent. Minors cannot sign the subscription sheet in MOA — it must be signed by a guardian acting on behalf of the minor. The company may also add further additional points beyond those already mentioned in the provisions at its own discretion."
        },
        {
            question: "What are the additional points for a Public Company to alter its object clause?",
            answer: "For Public Companies: (1) The Special Resolution must be published in an English-language newspaper and a vernacular newspaper circulating in the state where the registered office is located. (2) The details must be made available on the company's website. (3) Dissenting shareholders must be given an exit opportunity as per SEBI regulations."
        },
        {
            question: "What are the restrictions for alteration of Object Clause as per Section 13(2)?",
            answer: "As per Section 13(2), if the company has raised money from the public through a prospectus and that money remains unutilized, it can alter its object clause only by passing a Special Resolution through Postal Ballot. The notice must also be published in newspapers before the alteration takes effect."
        },
        {
            question: "What are the different provisions for Object Clause under the old and new Companies Act?",
            answer: "Under the old Companies Act, the MOA had five separate object clauses. Under the Companies Act, 2013, and the revised SPICe Form INC-33, the object clause is simplified into only two parts: (1) Main Objects — the primary business activity, and (2) Ancillary Objects — activities incidental or supplementary to the main business."
        },
        {
            question: "Is a physical copy of the amended MOA required to be attached with Form MGT-14?",
            answer: "Yes. A certified true copy of the amended MOA must be submitted along with Form MGT-14. For companies incorporated using SPICe forms, attaching the updated copy of the MOA electronically with the form is sufficient — a separate physical attachment is not required."
        }
    ];

    const navLabels = {
        overview: "Overview",
        advantages: "Contents",
        process: "Registration Procedure",
        features: "Vyombiz Support",
        faq: "FAQs"
    };

    const overviewData = {
        badge: "Companies Act, 2013 — Section 13",
        title: "Memorandum of Association —",
        highlightTitle: "Change in Object Clause",
        description: [
            "The Memorandum of Association (MOA) is the foundational constitutional document of any company incorporated in India. It defines the scope of the company's powers, rights, and the limits within which the company can operate. In case of any conflict between the Companies Act and the clauses in the Memorandum, the provisions of law shall prevail.",
            "The Object Clause within the MOA is a detailed description of the activities the company is authorised to undertake after incorporation. It consists of two parts — the main activity of the business, and the activities ancillary or supplementary to that main activity.",
            "A company is strictly prohibited from carrying on any business outside the scope of its Object Clause. Any act or transaction that falls beyond the scope of the MOA is treated as ultra vires and is therefore void and unenforceable. If the company wishes to expand, diversify, or restructure its operations, it must first amend the Object Clause through a prescribed legal process."
        ],
        whyIdealTitle: "Reasons to Amend the Object Clause",
        whyIdealList: [
            {
                title: "Business Expansion",
                desc: "The company may want to carry on business on a larger scale by enhancing the scope of its activities beyond the current objects."
            },
            {
                title: "New Methods or Strategies",
                desc: "To attain the goals already set by the company through new, improved, or more efficient business methods."
            },
            {
                title: "Diversification",
                desc: "To carry on such additional business that can reasonably be combined with the existing operations of the company."
            },
            {
                title: "Restructuring or Disposal",
                desc: "To sell or dispose of a part of the business, or to accommodate changes arising from amalgamation or merger with other entities."
            }
        ]
    };

    const advantagesData = {
        title: "Contents of the Memorandum",
        subtitle: "of Association",
        list: [
            {
                title: "Name Clause",
                desc: "The first and mandatory clause in every MOA. It must state the full name of the company with the appropriate suffix — 'Private Limited', 'Limited', or 'OPC Private Limited' — depending on the type of company. This requirement does not apply to Section 8 (not-for-profit) companies."
            },
            {
                title: "Registered Office Clause",
                desc: "This clause states the name of the state in which the company's registered office is situated. It determines the jurisdiction of the Registrar of Companies to which the company belongs."
            },
            {
                title: "Object Clause",
                desc: "This clause specifies the objects and activities for which the company is being incorporated. It defines the legal boundary of the company's operations. Any activity outside this clause is considered ultra vires and void."
            },
            {
                title: "Liability Clause",
                desc: "This clause specifies whether the liability of the members (shareholders) of the company is limited or unlimited. For most private and public limited companies, the liability of members is limited to the amount unpaid on their shares."
            },
            {
                title: "Capital Clause",
                desc: "The last clause in the MOA, it states the company's Authorized Share Capital — the maximum amount up to which the company is permitted to raise funds by issuing shares. It must specify the division of capital into shares of a fixed nominal value."
            }
        ]
    };

    const processData = {
        title: "Process to Amend Object Clause",
        subtitle: "Step-by-step procedure under the Companies Act, 2013",
        steps: [
            {
                step: "01",
                title: "Issue Notice of Board Meeting",
                desc: "Issue a written notice of the Board Meeting to all Directors at least seven (7) days prior to the date of the meeting. The notice must include the agenda, notes to the agenda, and a draft of the proposed resolution for changing the Object Clause."
            },
            {
                step: "02",
                title: "Hold the Board Meeting & Pass Board Resolution",
                desc: "Hold the Board Meeting as scheduled. Present the proposed new objects to the Directors. After deliberation, pass a Board Resolution approving the proposed change in the Object Clause. Fix the date, time, and venue of the Extraordinary General Meeting (EGM) and appoint a Director to issue the EGM notice."
            },
            {
                step: "03",
                title: "Issue EGM Notice (21 Days Prior)",
                desc: "Issue a notice to all shareholders and members of the company at least 21 days before the date of the EGM. The notice must clearly state the business to be transacted at the EGM, along with an explanatory statement under Section 102 of the Companies Act, 2013. For listed companies and companies using Postal Ballot, additional newspaper publication requirements apply."
            },
            {
                step: "04",
                title: "Hold EGM & Pass Special Resolution",
                desc: "Conduct the Extraordinary General Meeting. The Special Resolution for change in the Object Clause must be passed by a minimum three-fourths (3/4th) majority of the members present and voting. Companies with more than 200 members, or those with unutilized funds raised through a prospectus, must pass the resolution through Postal Ballot."
            },
            {
                step: "05",
                title: "File Form MGT-14 with the ROC",
                desc: "Within 30 days from the date of passing the Special Resolution, file Form MGT-14 with the Registrar of Companies along with the prescribed government fee. The following documents must be attached: (1) Certified true copy of the Special Resolution, (2) Copy of the EGM notice sent to members, (3) Copy of the amended Memorandum of Association, (4) Copy of the attendance sheet of the EGM."
            },
            {
                step: "06",
                title: "ROC Scrutiny & Issue of Certificate",
                desc: "The Registrar of Companies will scrutinize the submitted form and documents. Upon satisfaction that all requirements have been met, the Registrar will approve the amendment and issue a Registration Certificate. This certificate serves as conclusive proof that the Object Clause of the MOA has been validly altered."
            }
        ]
    };

    const whyChooseUsData = {
        title: "Vyombiz Assistance in",
        subtitle: "MOA Object Clause Amendment",
        list: [
            {
                title: "Consultation & Scope Assessment",
                desc: "Vyombiz experts review your existing Object Clause and help you determine the exact amendments needed to align with your business goals — without overstepping legal limits."
            },
            {
                title: "Drafting Board & EGM Resolutions",
                desc: "We draft all necessary Board Resolutions, EGM notices, and Special Resolutions in precise statutory language, ensuring full compliance with Companies Act, 2013 requirements."
            },
            {
                title: "Amended MOA Preparation",
                desc: "Our team prepares the revised Memorandum of Association with the updated Object Clause in the format required for ROC submission and record maintenance."
            },
            {
                title: "Form MGT-14 Filing",
                desc: "We handle the complete preparation, certification, and electronic filing of Form MGT-14 with the Registrar of Companies within the mandatory 30-day period."
            },
            {
                title: "ROC Coordination",
                desc: "Vyombiz liaises directly with the Registrar of Companies to track the status of your application and respond to any queries or resubmission requirements promptly."
            },
            {
                title: "End-to-End Compliance Support",
                desc: "From the initial Board Meeting notice to the final ROC certificate — Vyombiz manages the entire Object Clause amendment process so you can focus on running your business."
            }
        ]
    };

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            <HeroLayout
                heroTitleMain="Change in"
                heroTitleSuffix="Object Clause"
                heroSubtitle="MOA Amendment — Corporate Secretarial Services"
                heroDescription="The Object Clause in your Memorandum of Association defines the legal boundary of your company's operations. Any business activity outside this clause is ultra vires and void. Vyombiz guides you through the complete legal process to amend your Object Clause under the Companies Act, 2013."
                stats={[
                    { count: "30 Days", label: "Filing Deadline (MGT-14)", icon: <Briefcase size={20} /> },
                    { count: "¾ Majority", label: "Required for Special Resolution", icon: <Users size={20} /> },
                    { count: "Expert", label: "CS / CA Support", icon: <Award size={20} /> }
                ]}
            />

            <TrustedBrands />
            <TalkExpert />

            <DetailsLayout
                navLabels={navLabels}
                overview={overviewData}
                advantages={advantagesData}
                process={processData}
                whyChooseUs={whyChooseUsData}
            />

            <FAQLayout
                title="Change in Object Clause — FAQs"
                subtitle="Frequently asked questions about MOA amendment and Object Clause procedures."
                faqs={faqs}
            />

        </div>
    );
};

export default ChangeInObjectClause;
