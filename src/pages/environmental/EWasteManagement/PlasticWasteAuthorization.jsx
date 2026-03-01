import React from 'react';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const PlasticWasteAuthorization = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="Plastic Waste Authorization"
                    heroTitleSuffix="— SPCB Compliance"
                    heroDescription="Get your plastic waste authorization from SPCB with expert support. Complete compliance with Plastic Waste Management Rules 2016 for recyclers, co-processors, and plastic waste processors."
                    stats={[
                        { count: "43298 +", label: "Happy Clients" },
                        { count: "3500 +", label: "Expert Advisors" },
                        { count: "50 +", label: "Branch Offices" },
                        { count: "10k+", label: "Pin codes" }
                    ]}
                    formTitle="Get Free Expert Consultation"
                />

                <DetailsLayout
                    overview={{
                        title: "Plastic Waste Authorization —",
                        highlightTitle: "An Overview",
                        description: [
                            "Plastic waste disposal has become a significant challenge in India, with the rapid increase in disposable plastic production outpacing the country's waste management capacity. Plastic pollution is especially severe in developing nations like India, where waste collection systems are often inefficient.",
                            "To address this issue, the Indian government introduced plastic waste authorization under the Plastic Waste Management Rules, 2016. As per these rules, any business or entity involved in the collection, storage, transportation, processing, or recycling of plastic waste is required to obtain an authorization certificate from the designated authorities to operate legally.",
                            "Plastic Waste Authorization is essential for legal compliance under these regulations. The Government of India, through the Plastic Waste Management Rules, 2016, aims to mitigate the environmental harm caused by plastic waste.",
                            "Plastic pollution affects not only land but also water bodies, leading to the death of many aquatic animals that consume plastic. Therefore, effective waste management plastic recycling is crucial for protecting the environment and promoting sustainability."
                        ],
                        whyIdealTitle: "Why Plastic Waste Authorization is Required?",
                        whyIdealList: [
                            { title: "Legal Compliance", desc: "Required under the Plastic Waste Management Rules, 2016 for all plastic waste handling entities." },
                            { title: "Environmental Protection", desc: "Ensures responsible plastic waste disposal to protect both land and water ecosystems." },
                            { title: "Business Credibility", desc: "Demonstrates corporate responsibility and commitment to sustainability." },
                            { title: "Avoid Penalties", desc: "Prevents disruptions to supply chain and avoids SPCB/CPCB penalties." }
                        ]
                    }}

                    advantages={{
                        title: "Benefits of Plastic Waste Authorization",
                        subtitle: "Key benefits for businesses engaged in plastic waste management",
                        list: [
                            { title: "Environmentally Sustainable", desc: "Plastic waste authorization ensures that the entity is operating its business in an environmentally sustainable manner." },
                            { title: "Social Responsibility", desc: "An entity with such authorization shows its responsibility towards plastic waste disposal commitments towards a clean society." },
                            { title: "Business Opportunities", desc: "By obtaining a plastic waste authorization certificate, businesses can take advantage of wide business opportunities related to waste management plastic recycling." },
                            { title: "Access to Government Funds", desc: "The government of India facilitates various grants and funds to businesses related to plastic waste disposal — with authorization, one becomes eligible." },
                            { title: "Reduced Emissions", desc: "Sustainable plastic waste management helps reduce greenhouse gases (GHGs) and Carbon Dioxide (CO2) emissions." },
                            { title: "Keep a Check on Pollution", desc: "Plastic waste authorization assists in the reduction of plastic pollution by facilitating responsible plastic waste disposal." }
                        ]
                    }}

                    eligibility={{
                        title: "Eligibility Criteria to Apply for Plastic Waste Authorization",
                        subtitle: "Requirements for entities or businesses in India",
                        list: [
                            { title: "Certificate of Incorporation", desc: "A valid certificate of incorporation and registration is required." },
                            { title: "Proof of Premises", desc: "A valid proof of ownership or lease of premises where plastic waste disposal activities are conducted." },
                            { title: "Machinery & Tools", desc: "Equipped with all necessary machinery and tools for plastic waste processing." },
                            { title: "Environmental Management Plan", desc: "Possess a legitimate environmental management plan for safe operations." },
                            { title: "SPCB/UTPCC Permission", desc: "Permission from SPCB or UTPCC for operating a plastic waste facility." },
                            { title: "CPCB & MoEFCC Standards", desc: "Compliance with CPCB and MoEFCC standards for sustainable plastic waste management." },
                            { title: "Record Maintenance", desc: "Maintaining records and registers of plastic waste generated and processed." },
                            { title: "Yearly Reports", desc: "Yearly submission of reports to CPCB or UTPCC and SPCB." }
                        ]
                    }}

                    documents={{
                        title: "Documents Required for Online Plastic Waste Authorization",
                        description: "The list of documents required for online plastic waste authorization by businesses engaged in plastic waste disposal:",
                        list: [
                            "Copy of valid consent from the concerned office",
                            "MSME certificate or registration certificate from the concerned authorities",
                            "List of raw materials, by-products, and products with quantum (by weight) per year",
                            "Flow diagram of manufacturing waste",
                            "List of persons/units/producers/brand owners through which plastic waste acquired along with quantum of plastic waste per year",
                            "List of persons/units/producers/brand owners to whom product is being supplied/sold along with quantum per year",
                            "EPR action plan (if applicable)",
                            "Copy of analysis report of characterization of waste generated",
                            "Analysis report of ETP/emission test report (if applicable)"
                        ]
                    }}

                    process={{
                        title: "Step-by-Step Online Plastic Waste Authorization Process",
                        subtitle: "How to obtain plastic waste authorization",
                        steps: [
                            { step: "01", title: "Submission of Form", desc: "The applicant shall submit an online plastic waste authorization application form along with mandatory documents in the concerned official portal." },
                            { step: "02", title: "Verification of Application", desc: "Here, the SPCB or UTPCC will examine and verify the said application form submitted by an applicant." },
                            { step: "03", title: "Examination of Documents", desc: "Followed by reviewing and examining the documents submitted by an applicant." },
                            { step: "04", title: "Granting of Authorization", desc: "In this stage, the SPCB or UTPCC will grant its decision to either grant the plastic waste authorization or reject the application." }
                        ]
                    }}

                    postCompliance={{
                        title: "Mandatory Compliances for Plastic Waste Authorization",
                        subtitle: "Ongoing obligations for authorization holders",
                        list: [
                            { title: "Record Maintenance", desc: "Maintain records of plastic waste generated, processed, or recycled." },
                            { title: "Annual Returns", desc: "Submit annual returns to SPCB/UTPCC and CPCB by April 30th." },
                            { title: "CPCB Standards Compliance", desc: "Comply with CPCB and MoEFCC standards for plastic waste management." },
                            { title: "Health & Safety", desc: "Ensure health, safety, and environmental protection during plastic waste activities." },
                            { title: "Best Practices", desc: "Adopt best practices for plastic waste management." },
                            { title: "Validity — 1 to 3 Years", desc: "Initially valid for one year. If not revoked or cancelled, renewal extends validity to three years. Renewal applications must be submitted 120 days before registration expires." }
                        ]
                    }}

                    features={{
                        title: "Reasons to Trust Corpbiz for Plastic Waste Authorization",
                        subtitle: "India's most trusted plastic waste compliance partner",
                        list: [
                            { title: "10+ Years of Proven Expertise", desc: "Our seasoned consultants, with a backing of 10+ years of experience, provide guidance and support on plastic waste authorization." },
                            { title: "70% Market Share", desc: "We are dominating the sustainability game, all thanks to our consultants, who helped us lead the industry with a 70% market share." },
                            { title: "Technology Integration", desc: "We utilize cutting-edge technology to streamline the plastic waste disposal process for the sustainable growth of your business." },
                            { title: "Regulatory Prowess", desc: "At Corpbiz, our regulatory experts ensure businesses meet the latest plastic waste management regulations effortlessly." },
                            { title: "Compliance Assistance", desc: "We effectively fulfil all compliance needs, ensuring a fast plastic waste disposal process and streamlined sustainable plastic waste management." },
                            { title: "24/7 Support", desc: "Our team is available 24/7 to provide support and assistance on plastic waste disposal support and environmental compliance management." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    subtitle="Get answers to the most common questions about this service."
                    faqs={[
          {
                    "question": "What is plastic waste authorization and who needs it?",
                    "answer": "Plastic waste authorization is required under the Plastic Waste Management Rules, 2016 for any business or entity engaged in the collection, storage, transportation, processing, or recycling of plastic waste. This includes plastic waste recyclers, co-processors, and collection agencies."
          },
          {
                    "question": "Who grants plastic waste authorization in India?",
                    "answer": "Plastic waste authorization is granted by the concerned State Pollution Control Board (SPCB) or Union Territory Pollution Control Committee (UTPCC) for the state where the facility is located. CPCB issues EPR registration certificates for PIBOs separately."
          },
          {
                    "question": "How long is plastic waste authorization valid?",
                    "answer": "Initially, plastic waste authorization is valid for one year. If not revoked or cancelled during this period, the validity extends to three years upon renewal. Renewal applications must be submitted 120 days before the registration expires."
          },
          {
                    "question": "What are the annual compliance obligations for plastic waste authorization holders?",
                    "answer": "Authorization holders must submit annual returns to both SPCB/UTPCC and CPCB by April 30th each year. Returns must disclose quantity of plastic waste processed, disposed, and recycled. Records must be maintained and made available for inspection."
          },
          {
                    "question": "Can plastic waste authorization be revoked?",
                    "answer": "Yes. SPCB or UTPCC can revoke or cancel plastic waste authorization if the holder violates the terms of authorization, fails to submit annual returns, or causes environmental harm. Operating without valid authorization during this period attracts penalties."
          },
          {
                    "question": "Is plastic waste authorization the same as EPR registration for PIBOs?",
                    "answer": "No. They are separate. EPR registration (from CPCB) is for producers/importers/brand owners who use plastic packaging. Plastic waste authorization (from SPCB) is for recyclers, processors, and entities handling plastic as waste material."
          },
          {
                    "question": "What is the timeline to obtain plastic waste authorization?",
                    "answer": "After submitting a complete application to the SPCB, the authorization is typically granted within 60–90 working days, subject to document verification and site inspection if required. Corpbiz ensures all documents are complete to avoid delays."
          }
]}
                />
                <ReviewsSection />
            </div>
        </div>
    );
};

export default PlasticWasteAuthorization;
