import React from 'react';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const ESDDInTheSugarIndustry = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="Environmental and Social Due Diligence"
                    heroTitleSuffix="in the Sugar Industry"
                    heroDescription="Hire our team of experts at Corpbiz to conduct Environmental and Social Due Diligence in the Sugar Industry without any hassle."
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
                        title: "ESDD in Sugar Industry —",
                        highlightTitle: "Brief Overview",
                        description: [
                            "Corpbiz has been offering distinctive and cutting-edge Environmental and Social Due Diligence Services in the Sugar Industry. We deliver consulting services across sectors and particularly provide environmental solutions for projects that could have an adverse effect on society.",
                            "Environmental and Social Due Diligence in the Sugar Industry is a process of scrutiny of environmental and social factors involved in business operations in the sugar industry. India is the second largest agro-based industry after cotton with production of approximately 37 million metric tons of sugar in 2022.",
                            "India's sugar industry provides livelihood to 7 million farmers and employment to around 500 thousand workers in sugar mills. In 2022, India was the leading sugar producer in the world and also the third largest exporter globally."
                        ],
                        whyIdealTitle: "Why ESDD Matters in Sugar Industry",
                        whyIdealList: [
                            { title: "Climatic Risk", desc: "Sugar is an agri-commodity naturally prone to climatic risks. Varying rain patterns and extreme weather conditions considerably impact production and processing, affecting revenue generated." },
                            { title: "Social Risk", desc: "The sector employs a large number of sugarcane growers. Social risks emanate from health and safety standards for labour, fair wage practices, and community impact assessments." },
                            { title: "Regulatory Oversight", desc: "Due to its size and market significance, the sugar industry is among the most regulated — from sugarcane procurement to sale of sugar — requiring careful ESDD monitoring." },
                        ]
                    }}
                    advantages={{
                        title: "What Makes ESDD Challenging",
                        subtitle: "Sugar Industry",
                        list: [
                            { title: "Regulatory Risk in Sugar Industry", desc: "The sugar industry is expansively regulated. Regulations on MSPs, monthly release quotas, import/export duties, and area assignments significantly affect operations, and businesses have little control over these factors." },
                            { title: "Market Size and Fragmentation", desc: "The sugar industry market is highly disjointed, comprising organised and unorganised stakeholders with fragmented supply chains. The cost of producing sugar has been increasing faster than the price of sugar." },
                            { title: "Climatic Risk", desc: "Erratic climatic conditions significantly impact the sustainability of the sugar industry. Smaller stakeholders find it even more challenging to stay compliant while struggling to stay afloat." }
                        ]
                    }}
                    typesOfCompliance={{
                        title: "Benefits of ESDD Compliance",
                        subtitle: "Sugar Industry",
                        list: [
                            { title: "Enhanced Investments", desc: "With the exponential increase in environmental and social concerns, investors now look for ecologically friendly portfolios. ESDD compliance helps attract capital and investments from conscious investors." },
                            { title: "Enhanced Reputation & Brand Value", desc: "ESDD compliance helps compliant businesses garner support from investors and customers who value transparency and accountability, enhancing reputation and brand value in the market." },
                            { title: "Cost Saving", desc: "Outsourcing ESDD services eliminates the cost of maintaining an in-house team. You pay only as needed, completely exempting you from otherwise necessary recurring costs." },
                            { title: "Regulatory Compliance", desc: "Investing in ESDD ensures your business fully conforms to all the necessary environmental and social regulations, avoiding fines, penalties, or cancellation of licenses to operate." }
                        ]
                    }}
                    process={{
                        title: "Our Services",
                        subtitle: "ESDD Services for Sugar Industry",
                        steps: [
                            { step: "01", title: "Risk Assessment in Sugar Industry", desc: "Our bespoke team helps your business identify environmental and social hazards in the process, storage, and handling of products. We carry out qualitative risk analysis for your operations and suggest evidence-based mitigation measures." },
                            { step: "02", title: "Vetting Existing Plans & Gap Analysis", desc: "If you already have ESDD plans merged into your business strategies, our experts delve into the core of your requirements and identify gaps and loopholes, then help you strategise and suggest mitigation measures." },
                            { step: "03", title: "Obtaining Licenses and Permits", desc: "With our expert knowledge in licensing and regulation, we help you get appropriately licensed and certified under relevant rules, helping you avoid any adverse legal consequences." },
                            { step: "04", title: "Food Safety Assessment", desc: "With growing awareness around food safety, our experts guide you through food safety and quality assessments to ensure your business meets the highest standards." }
                        ]
                    }}
                    features={{
                        title: "Why Choose Corpbiz",
                        subtitle: "For ESDD in Sugar Industry",
                        list: [
                            { title: "AI-Powered Service Delivery", desc: "Celebrated Cloud-Based Consultancy Platform driven by AI for precise, efficient service delivery." },
                            { title: "50,000+ Experts", desc: "Strong network of Environmental Experts, Lawyers, and CAs with a track record of 99.9% proficiency." },
                            { title: "40,000+ Partner Firms", desc: "Base of 40,000+ Auditing and Law Firms with 400+ Environmental and Social Experts with decades of industry experience." },
                            { title: "Real-Time Updates", desc: "With Corpbiz as your service provider, track everything through our interface and stay abreast of all updates." },
                            { title: "One-Stop Solution", desc: "Allow Corpbiz to be your exclusive point of contact for every query your business may have, covering all ESDD and business needs." },
                            { title: "Proven Track Record", desc: "Supported over 10,000+ Budding Entrepreneurs with reliable 99.8% client recommendations." }
                        ]
                    }}
                    eligibility={{
                        title: "Why VyomBiz for ESDD?",
                        subtitle: "We make technical ESDD compliance effortless and convenient for sugar industry businesses.",
                        list: [
                            { title: "10+ Years of Experience", desc: "Expertise in ESDD for the sugar industry and related regulatory frameworks." },
                            { title: "400+ In-House Professionals", desc: "CAs, CS & Lawyers ready to assist with all ESDD compliance needs." },
                            { title: "99% SLA Delivery", desc: "100% Satisfaction Guaranteed with on-time project delivery." },
                            { title: "10,000+ Pin Codes Network", desc: "Pan-India reach with fast processing across all states and territories." }
                        ]
                    }}
                    postCompliance={{
                        title: "Significance of Sugar Industry in India",
                        subtitle: "Why ESDD monitoring in this sector has become imperative",
                        list: [
                            { title: "Second Largest Agro-Based Industry", desc: "The sugar industry in India ranks as the second largest agro-based industry after cotton, with production of approximately 37 million metric tons in 2022." },
                            { title: "Employment Generation", desc: "The Indian sugar industry provides livelihood to 7 million farmers and employment to around 500 thousand workers in sugar mills." },
                            { title: "Leading Global Exporter", desc: "India was the leading sugar producer in the world in 2022 and also the third largest exporter globally, demonstrating the importance of sustainable practices." },
                            { title: "Corporate Social Responsibility", desc: "The sugar industry has been actively involved in social development, employment generation, and discharging corporate social responsibility towards Agenda 2030 SDGs." }
                        ]
                    }}
                />
                <FAQLayout
                    title="Frequently Asked Questions"
                    subtitle="Clear your doubts about ESDD in Sugar Industry"
                    faqs={[
                        { question: "What are the sustainability issues in the sugar industry?", answer: "Various sustainability issues exist in the sugar industry. Sugar mills produce a lot of wastewater, solid waste, and emissions that adversely impact the environment. The massive quantities of sludge discharged from mills decompose in freshwater bodies and absorb the oxygen, leading to fish kills. Other concerns include water consumption, pesticide use, greenhouse gas emissions, and social impacts on farming communities." },
                        { question: "What are the major challenges faced by the sugar industry in India?", answer: "Major challenges include extensive regulation from sugarcane procurement to sale, fragmented market structure with both organised and unorganised stakeholders, climatic risks due to erratic weather patterns, increasing production costs outpacing sugar prices, and complex environmental compliance requirements involving wastewater and solid waste management." },
                        { question: "Why is ESDD important for the sugar industry?", answer: "ESDD is important for the sugar industry because the sector is exposed to significant environmental risks (emissions, wastewater, waste generation) and social risks (labour practices, farmer livelihoods, community impacts). ESDD helps identify and mitigate these risks, ensures regulatory compliance, attracts ESG-conscious investors, and supports sustainable business growth." },
                        { question: "How can we make the sugar industry eco-friendly?", answer: "The sugar industry can be made eco-friendly by adopting zero liquid discharge systems, converting bagasse and press mud into biogas and compost, implementing energy efficiency measures in mills, using sustainable agricultural practices to reduce pesticide and fertiliser use, and conducting regular environmental audits." },
                        { question: "What are the major problems of the sugar industry?", answer: "Major problems include sugarcane price regulation and market volatility, high water consumption in processing, generation of large quantities of wastewater and solid waste, greenhouse gas emissions, complex regulatory compliance from farm to market, and climatic risks affecting sugarcane cultivation and yield." },
                        { question: "What are the key challenges in conducting ESDD in the sugar industry?", answer: "Key challenges include navigating extensive government regulations, managing fragmented supply chains, addressing climatic risks, conducting comprehensive social impact assessments for large farming communities, managing environmental risks from wastewater and emissions, and staying updated with evolving regulatory frameworks." },
                        { question: "How do you conduct an ESDD?", answer: "ESDD is conducted by reviewing project information, assessing national and state legal requirements, conducting site visits and environmental sampling, undertaking institutional assessments, performing stakeholder consultations, carrying out activity-wise environmental and social screenings, identifying risks and mitigation measures, and preparing comprehensive ESDD reports." },
                        { question: "What is an environmental and social due diligence report?", answer: "An ESDD report is a comprehensive document that summarises the findings of an environmental and social assessment, including identified risks and impacts, proposed mitigation measures, a monitoring and management plan, and recommendations for ensuring compliance with applicable standards." }
                    ]}
                />
                <ReviewsSection
                    title="What Our Clients Say About Us"
                    subtitle="Trusted by sugar industry businesses across India for ESDD and environmental compliance."
                    reviews={[
                        { name: "Rajendra Patil", role: "Managing Director", company: "Maharashtra Sugar Mills Association", rating: 5, initials: "RP", text: "Corpbiz helped our sugar mills navigate the complex ESDD compliance landscape. Their expertise in environmental risk assessment, wastewater management compliance, and social impact assessments for our farming communities was truly exceptional." },
                        { name: "Sunita Deshpande", role: "Compliance Head", company: "Godavari Sugar Industries Ltd.", rating: 5, initials: "SD", text: "Our international buyers required full ESDD compliance before signing long-term supply contracts. Corpbiz delivered a thorough, investor-ready ESDD report covering all stakeholder requirements including farmer welfare." },
                        { name: "Arun Kumar Jha", role: "CEO", company: "Bihar Sugar Corporation", rating: 5, initials: "AJ", text: "The ESDD process for our sugar mills was complex due to extensive government regulations. Corpbiz navigated every aspect — from pollution control board compliance to sugarcane farmer social impact assessments — efficiently and professionally." },
                        { name: "Priya Shankar", role: "Environmental Head", company: "Karnataka Sugar Federation", rating: 5, initials: "PS", text: "Corpbiz's expertise in sugar industry ESDD helped us achieve full PCB compliance and resolve our wastewater management issues. Their gap analysis and remediation plan was comprehensive and easy to implement." },
                        { name: "Vikram Chandra", role: "Operations Director", company: "UP Sugar Mills Cooperative", rating: 5, initials: "VC", text: "We were facing regulatory scrutiny over our effluent treatment practices. Corpbiz conducted a thorough ESDD assessment, identified all compliance gaps, and helped us implement corrective measures that satisfied the pollution control board." },
                        { name: "Meera Iyer", role: "Founder", company: "Organic Sugar Tamil Nadu", rating: 5, initials: "MI", text: "As an organic sugar producer, ESDD certification was essential to access premium export markets in Europe. Corpbiz guided us through every step, ensuring our environmental practices and social farmer welfare standards met all international requirements." }
                    ]}
                />
            </div>
        </div>
    );
};

export default ESDDInTheSugarIndustry;

