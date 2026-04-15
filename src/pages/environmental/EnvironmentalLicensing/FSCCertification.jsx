import React from 'react';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const FSCCertification = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="FSC"
                    heroTitleSuffix="Certification"
                    heroDescription="Are you using forest-based raw materials in your business? Get FSC Certification with VyomBiz experts to demonstrate your commitment to sustainable forestry."
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
                        title: "FSC Certification —",
                        highlightTitle: "An Overview",
                        description: [
                            "Are you engaged in the manufacturing, trading, or processing of forest products? Are you a forest owner or a forest operator with a wish to exhibit that you responsibly manage the forest? If you belong to any of these categories, you must secure FSC Certification (Forest Stewardship Council Certification) to operate legally.",
                            "FSC certification allows businesses to strike a balance between environmental and social responsibilities. FSC forest certification facilitates businesses in showcasing their commitment towards responsible forestry, which, in turn, helps them promote biodiversity and reduce the environmental impact of their actions."
                        ]
                    }}

                    advantages={{
                        title: "Types of FSC Certification",
                        subtitle: "Understanding the Framework",
                        list: [
                            {
                                title: "Forest Management (FM) Certification",
                                desc: "Assesses whether businesses follow sustainable forestry practices, conserving biodiversity and supporting local communities."
                            },
                            {
                                title: "Chain of Custody (CoC) Certification",
                                desc: "Monitors the journey of FSC-certified materials during the end-to-end process, including processing and distribution."
                            },
                            {
                                title: "Controlled Wood Certification",
                                desc: "Enables manufacturers to mix non-certified wood in their products in a restricted percentage, meeting ethical sourcing requirements."
                            },
                            {
                                title: "Project & Group Certification",
                                desc: "Project certification is for one-time projects, while Group certification is for small forest owners to reduce FSC costs."
                            }
                        ]
                    }}

                    process={{
                        title: "Application Process",
                        subtitle: "Step-by-step Guide",
                        steps: [
                            {
                                step: "01",
                                title: "Understand Requirements & Choose Type",
                                desc: "Educate on FSC principles and determine if you need Forest Management, Chain of Custody, or Controlled Wood."
                            },
                            {
                                step: "02",
                                title: "Hire Consultant & Prepare Docs",
                                desc: "Partner with experienced consultants, compile necessary documents, and select an FSC-Accredited Certification Body."
                            },
                            {
                                step: "03",
                                title: "Audit & Certification",
                                desc: "Undergo a pre-audit and final certification audit. Once successful, achieve certification and plan for surveillance audits."
                            }
                        ]
                    }}

                    features={{
                        title: "Benefits of FSC",
                        subtitle: "Why businesses seek this certification",
                        list: [
                            { title: "Market Recognition", desc: "Builds goodwill and positions your business as an environmentally conscious brand." },
                            { title: "Access to Premium Markets", desc: "Penetrate global markets that demand eco-friendly products and sustainably sourced materials." },
                            { title: "Legal Compliance", desc: "Aligns your operations with international forestry laws, mitigating regulatory risks." },
                            { title: "Consumer Trust", desc: "FSC labels boost consumer confidence in your commitment to preserving the environment." }
                        ]
                    }}

                    eligibility={{
                        title: "Eligible Entities",
                        subtitle: "Who can apply for FSC?",
                        list: [
                            { title: "Forest Managers", desc: "Those adopting sustainable forestry practices committed to conserving biodiversity." },
                            { title: "Manufacturers", desc: "Product makers sourcing raw materials from sustainable resources." },
                            { title: "Supply Chain Participants", desc: "Stakeholders who adhere to Chain of Custody requirements." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    subtitle="Clear your doubts regarding FSC"
                    faqs={[
                        {
                            question: "What is the full form of FSC certification?",
                            answer: "The expanded form of FSC Certification is Forest Stewardship Council Certification."
                        },
                        {
                            question: "What does 100% FSC-certified mean?",
                            answer: "Products with the FSC 100% logo suggest that they are made completely from raw materials sourced from FSC-certified forests."
                        },
                        {
                            question: "Who can apply for FSC Certification?",
                            answer: "Forest managers, manufacturers, supply chain participants, smallholders, and traders handling certified products."
                        },
                        {
                            question: "What is the FSC Mix Logo?",
                            answer: "It indicates that the product is made using a mix of FSC-certified materials, recycled materials, and controlled wood."
                        }
                    ]}
                />

                <ReviewsSection />
            </div>
        </div>
    );
};

export default FSCCertification;

