import React from 'react';
import docImage from '../../../assets/environmental-doc.png';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const ChildCustodyLawyer = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="Child Custody"
                    heroTitleSuffix="Lawyers"
                    heroDescription="Protect What Matters Most — Your Child’s Future. Child custody disputes can be emotionally overwhelming and legally complex. Get expert legal guidance to secure the best outcome for your child and your parental rights."
                    stats={[
                        { count: "Expert", label: "Custody Lawyers" },
                        { count: "Focused", label: "on Child Welfare" },
                        { count: "Confidential", label: "Legal Support" },
                        { count: "24/7", label: "Consultation" }
                    ]}
                    formTitle="Get Free Expert Consultation"
                />

                <DetailsLayout
                    overview={{
                        title: "Child Custody —",
                        highlightTitle: "Overview",
                        description: [
                            "When families go through separation or divorce, the most sensitive issue often becomes child custody. Courts prioritize the best interests of the child, but navigating custody laws and legal procedures requires expert legal understanding.",
                            "A skilled child custody lawyer helps you present a strong legal case, ensures your parental rights are protected, and guides you through negotiations or court proceedings.",
                            "Vyombiz managed by Clink Consultancy Services Private Limited connects individuals with experienced child custody lawyers who assist with custody petitions, visitation rights, guardianship matters, and custody modifications with a strategic and compassionate approach."
                        ],
                        imageUrl: docImage
                    }}

                    advantages={{
                        title: "Types of Custody",
                        subtitle: "Different arrangements in India",
                        list: [
                            { title: "Physical Custody", desc: "The child lives with one parent while the other parent is given scheduled visitation rights." },
                            { title: "Joint Custody", desc: "Both parents share responsibility and custody, allowing the child to spend time with each parent." },
                            { title: "Legal Custody", desc: "Empowers parents to make important decisions regarding the child’s education, healthcare, and upbringing." },
                            { title: "Sole Custody", desc: "One parent is granted full custody due to the child’s safety, welfare, or other legal considerations." }
                        ]
                    }}

                    eligibility={{
                        title: "Key Court Factors",
                        subtitle: "What courts consider for custody",
                        list: [
                            { title: "Emotional Bond", desc: "The emotional connection between the child and both parents." },
                            { title: "Financial Stability", desc: "The financial capability of parents to provide a secure future." },
                            { title: "Living Environment", desc: "A safe, positive, and nurturing living environment for the child." },
                            { title: "Child's Preference", desc: "The court may consider the child's preference if they are mature enough." }
                        ]
                    }}

                    process={{
                        title: "Custody Legal Process",
                        subtitle: "Steps to securing custody",
                        steps: [
                            { step: "01", title: "Legal Consultation", desc: "Discuss your case with a child custody lawyer to understand rights and possible outcomes." },
                            { step: "02", title: "Filing a Petition", desc: "A custody petition is filed in the family court outlining custody requests." },
                            { step: "03", title: "Court Evaluation", desc: "The court reviews evidence and evaluates the child's needs and parental capabilities." },
                            { step: "04", title: "Mediation", desc: "Courts often encourage mediation to help parents reach a mutually beneficial agreement." },
                            { step: "05", title: "Final Custody Order", desc: "The court issues a custody order prioritizing the child's welfare and safety." }
                        ]
                    }}

                    features={{
                        title: "Why Hire a Custody Lawyer?",
                        subtitle: "Expertise in Family Law",
                        list: [
                            { title: "File Petitions", desc: "Properly draft and file a custody petition in the jurisdictional family court." },
                            { title: "Build a Strong Case", desc: "Strategically present evidence focusing entirely on the child’s welfare and best interests." },
                            { title: "Visitation Rights", desc: "Ensure you secure fair, enforceable, and legally binding visitation rights." },
                            { title: "Modify Arrangements", desc: "Legally modify existing custody or visitation arrangements in case of changed circumstances." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    faqs={[
                        {
                            question: "Who gets child custody after divorce in India?",
                            answer: "Courts decide custody based on the child’s best interests, considering factors like parental capability, financial stability, and emotional well-being."
                        },
                        {
                            question: "Can fathers get child custody in India?",
                            answer: "Yes. Courts grant custody to fathers if it is proven to be in the child’s best interest."
                        },
                        {
                            question: "At what age can a child decide custody?",
                            answer: "Generally, courts may consider a child’s preference once they reach a reasonable level of maturity, often around 9 years or older."
                        },
                        {
                            question: "Can custody orders be changed later?",
                            answer: "Yes. If circumstances change, parents can apply for custody modification through the court."
                        },
                        {
                            question: "How long does a custody case take?",
                            answer: "The timeline depends on court procedures, case complexity, and whether the matter is resolved through mediation or litigation."
                        }
                    ]}
                />

                <ReviewsSection
                    title="Client Success Stories"
                    subtitle="Trusted by parents for compassionate legal representation."
                    reviews={[
                        {
                            name: "Priya S.",
                            role: "Mother",
                            company: "Joint Custody Case",
                            rating: 5,
                            initials: "PS",
                            text: "The legal support was phenomenal. They helped me negotiate a joint custody arrangement smoothly, ensuring my child's future is secure."
                        },
                        {
                            name: "Vivek R.",
                            role: "Father",
                            company: "Visitation Rights",
                            rating: 5,
                            initials: "VR",
                            text: "I was struggling with visitation rights, but the lawyer handled the court filings professionally. I finally get to spend weekends with my daughter."
                        },
                        {
                            name: "Meera D.",
                            role: "Mother",
                            company: "Custody Modification",
                            rating: 4.8,
                            initials: "MD",
                            text: "Very empathetic and dedicated. They helped modify the custody order when circumstances changed significantly."
                        }
                    ]}
                />
            </div>
        </div>
    );
};

export default ChildCustodyLawyer;
