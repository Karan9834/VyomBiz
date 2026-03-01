import React from 'react';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const EPRRegistration = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="EPR Registration in India"
                    heroTitleSuffix="— Expert Assistance"
                    heroDescription="Struggling with EPR registration? Our environmental consultants at Corpbiz will assist you with EPR registration for plastic, e-waste, battery, and tyre waste. 5000+ PIBOs registered since 2018."
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
                        title: "EPR Registration —",
                        highlightTitle: "An Overview",
                        description: [
                            "Are you a manufacturer, importer, or a brand owner of products such as electronic and electrical equipment (EEE), batteries, plastic packaging, and tires? If yes, EPR registration with Corpbiz experts is a mandatory requirement for you to stay compliant.",
                            "EPR registration is the process of getting the approval of the State Pollution Control Board (SPCB) or Central Pollution Control Board (CPCB). It is done to implement the EPR (Extended Producer Responsibility) obligations under the Plastic Waste Management Rules, 2016 or, E-waste (Management) Rules, 2016 or Environment (Protection) Act, 1986.",
                            "To address the specific need for plastic packaging, the Central Pollution Control Board (CPCB) issues EPR registration certificates. All Producers, Importers, and Brand Owners (PIBOs) must register through the CPCB EPR Portal to comply with their responsibilities under the plastic waste management framework.",
                            "This dual approach ensures that both state and central entities play a role in environmental protection, while the central board takes a leading role in managing plastic waste through direct certification."
                        ],
                        whyIdealTitle: "Products Covered Under EPR",
                        whyIdealList: [
                            { title: "Electrical & Electronic Equipment (EEE)", desc: "Covered under the E-Waste (Management) Rules, 2016." },
                            { title: "Plastic Products", desc: "Covered under the Plastic Waste Management Rules, 2016." },
                            { title: "Batteries & Accumulators", desc: "Covered under the Batteries (Management and Handling) Rules, 2001." },
                            { title: "Packaging Materials", desc: "Covered under the Plastic Waste Management Rules, 2016, and other applicable regulations." }
                        ]
                    }}

                    advantages={{
                        title: "Benefits of EPR Registration Online in India",
                        subtitle: "EPR registration ensures proper handling of plastic packaging waste — recycling, reuse, or end-of-life disposal.",
                        list: [
                            { title: "Effective Waste Management", desc: "EPR registration plays a pivotal role in effective waste management through various processes and compliance measures. It ensures that plastic packaging waste is properly handled, significantly contributing to environmental conservation." },
                            { title: "Cost Management", desc: "Optimized waste management practices lead to reduced expenditures and better cost management. By encouraging eco-friendly product design, organizations can reduce long-term waste processing costs." },
                            { title: "Goodwill and Brand Imaging", desc: "Customers today prefer to associate with an environmentally friendly and socially responsible organization, enhancing brand image and customer loyalty." },
                            { title: "Environment Friendly", desc: "Following EPR compliances helps contain pollution in the environment and makes it a better place. It supports the broader goal of reducing pollution and promoting sustainable business practices." },
                            { title: "Benefit to Taxpayer", desc: "EPR registration offers tax relief to taxpayers as the burden of managing waste is passed to the organizations, ensuring waste management is both efficient and economically accountable." },
                            { title: "Promotes Sustainable Development", desc: "EPR registration promotes the conservation of natural resources, lessens the volume of waste, and eradicates pollution. It fosters a culture of sustainability and environmental responsibility." }
                        ]
                    }}

                    eligibility={{
                        title: "Eligibility Criteria",
                        subtitle: "For EPR Registration for Importers",
                        list: [
                            { title: "Imported Products", desc: "If the products are sold in India as 'Imported'." },
                            { title: "Importer Brand Name", desc: "If the imported products are sold under the importer's brand name." },
                            { title: "Original Owner Brand", desc: "If the imported product is marketed under the brand name of the original owner, who is not based in India." },
                            { title: "Multi-State Operations", desc: "Importers operating in more than 2 states/UTs must obtain EPR Authorization from CPCB." },
                            { title: "Single-State Operations", desc: "If limited to 1 or 2 states/UTs, EPR certification from respective SPCBs or PCCs is required." }
                        ]
                    }}

                    documents={{
                        title: "Documents Required for EPR Registration",
                        description: "In order to obtain an EPR registration certificate, some relevant documents need to be shared.",
                        list: [
                            "Application form, duly signed",
                            "Detailed EPR Plan to achieve targets set by CPCB or SPCB",
                            "Legal documents authorising the manufacture/import/sale or distribution of EEE or plastic packaging",
                            "Agreement or MoU with entities for collection and management of e-waste or plastic waste",
                            "Agreement or MoU for authorised transportation of e-waste or plastic waste",
                            "Agreement or MoU with authorised labs for testing e-waste or plastic waste",
                            "Agreement or MoU with CPCB or SPCB for implementation of E-Waste or Plastic Waste Management Rules",
                            "Business address with mandatory documents",
                            "Contact details & copy of PAN Card",
                            "Certificate of Incorporation",
                            "Import Export (IE) Code Verification",
                            "Awareness Initiative details",
                            "Budget allocated for Extended Producer Responsibility",
                            "Estimates for E-Waste Management",
                            "Recycler Information",
                            "BIS License copy (if applicable)",
                            "Authorised Person's details & documents",
                            "Product details",
                            "Any other documents deemed important by CPCB, SPCB or other regulatory authorities"
                        ]
                    }}

                    process={{
                        title: "EPR Registration Process",
                        subtitle: "Steps to complete EPR Registration for PIBOs/PWPs",
                        steps: [
                            { step: "01", title: "Gather Required Documents", desc: "Ensure you have all your necessary documents ready in digital formats such as PDF, JPG, or PNG for easy upload." },
                            { step: "02", title: "Create an Account", desc: "Start by registering on the centralized online portal. This step will provide you with the login credentials needed to access and fill out the application." },
                            { step: "03", title: "Complete the Application", desc: "Log in to the portal using the received credentials. Different application forms are available, tailored for Producers, Brand Owners, and Importers. Fill out each section accurately and upload all relevant documentation." },
                            { step: "04", title: "Pay the Application Fee", desc: "Submit the required application fee through the portal's integrated payment gateway. This payment is essential for processing your registration." },
                            { step: "05", title: "Application Processing", desc: "For PIBOs operating across one or two states, applications will be forwarded to the respective SPCB or PCC for evaluation. If your application covers more regions, the CPCB will handle it." },
                            { step: "06", title: "Registration Approval", desc: "Once submitted, your application should be reviewed within 15 days. If everything checks out, your registration certificate will be issued with a digital signature via the portal." }
                        ]
                    }}

                    postCompliance={{
                        title: "Mandatory Compliance for EPR Registration",
                        subtitle: "Ongoing responsibilities after obtaining EPR Registration",
                        list: [
                            { title: "Compliance with Rules", desc: "Businesses must ensure compliance with all terms and conditions specified under the E-Waste (Management) Rules, 2016, Plastic Waste Management Rules, 2016 and CPCB/SPCB guidelines." },
                            { title: "Regular Monitoring of Waste", desc: "The businesses must ensure conducting regular monitoring of e-waste or plastic wastes, in the manner as specified under the guidelines." },
                            { title: "Verification/Validation of Waste Performance", desc: "The businesses must ensure the preparation of the annual verification or validation of e-waste or plastic waste performance." },
                            { title: "Display of EPR Registration/Verification Report", desc: "The business must display the EPR registration and verification/validation report or e-waste/plastic waste statement/performance report/compliance report." },
                            { title: "Record Keeping", desc: "Businesses must maintain and keep accurate records of all EPR activities, including data on collection, transportation, and recycling." },
                            { title: "Conduct Inspections", desc: "The business must inspect/verify/audit/investigate/enforce as specified by the CPCB or SPCB." }
                        ]
                    }}

                    features={{
                        title: "Why Choose Corpbiz for EPR Registration?",
                        subtitle: "India's most trusted EPR compliance partner",
                        list: [
                            { title: "High Success Rate", desc: "We at Corpbiz guarantee a 99% business success rate while obtaining an EPR registration certificate in India." },
                            { title: "5000+ EPR Projects", desc: "We have successfully completed 5000+ EPR registrations for our clients across 100+ cities in India." },
                            { title: "Simplify Documentation", desc: "We at Corpbiz assist in simplifying the documentation for the acquisition of the EPR registration certificates in India." },
                            { title: "Legal Advice", desc: "Corpbiz provides legal advice and regular updates to simplify the legal necessities for securing EPR registration in India." },
                            { title: "End-to-End Solutions", desc: "We at Corpbiz provide end-to-end solutions to address queries related to the issuance of EPR registration certificates." },
                            { title: "Affordable Pricing", desc: "Corpbiz offers competitive and affordable pricing for securing EPR registration services in India." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    subtitle="Get answers to the most common questions about this service."
                    faqs={[
          {
                    "question": "What is EPR registration in India?",
                    "answer": "EPR (Extended Producer Responsibility) registration is the process of getting official approval from CPCB or SPCB to operate under the plastic waste, e-waste, battery waste, or tyre waste management rules. It mandates producers, importers, and brand owners (PIBOs) to be accountable for end-of-life management of their products."
          },
          {
                    "question": "Who needs EPR registration in India?",
                    "answer": "Any manufacturer, importer, or brand owner (PIBO) of products covered under the E-Waste (Management) Rules 2022, Plastic Waste Management Rules 2016, Battery Waste Management Rules 2022, or Tyre Waste Management Rules 2022 must obtain EPR registration."
          },
          {
                    "question": "How long does EPR registration take?",
                    "answer": "The EPR registration certificate is typically issued within 15–30 working days from the date of complete application submission on the CPCB portal. Corpbiz's fast-track service can expedite the process significantly."
          },
          {
                    "question": "What is the validity of an EPR registration certificate?",
                    "answer": "EPR registration certificates are generally valid for 5 years from the date of issuance. Renewal applications must be submitted at least 60 days before the expiry date to avoid compliance gaps."
          },
          {
                    "question": "What are the penalties for not having EPR registration?",
                    "answer": "Non-compliance with EPR registration requirements can attract Environmental Compensation (EC) levied by CPCB, suspension of manufacturing or import operations, legal proceedings under the Environment Protection Act 1986, and forced product recall orders from SPCBs."
          },
          {
                    "question": "Can PIBOs purchase EPR credits instead of physically collecting waste?",
                    "answer": "Yes. PIBOs who cannot meet their physical waste collection targets can purchase EPR credits from CPCB-registered recyclers through the centralized portal. Each credit represents 1 metric tonne of waste processed by an authorized recycler."
          },
          {
                    "question": "Is EPR registration required for small businesses?",
                    "answer": "Yes. EPR registration is mandatory for all PIBOs regardless of business size. However, the EPR targets are proportional to the quantity of products placed in the market, so smaller businesses have proportionally smaller obligations."
          }
]}
                />
                <ReviewsSection />
            </div>
        </div>
    );
};

export default EPRRegistration;
