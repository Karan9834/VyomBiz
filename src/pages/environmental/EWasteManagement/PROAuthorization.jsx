import React from 'react';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const PROAuthorization = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="PRO Authorization"
                    heroTitleSuffix="— Producer Responsibility Org"
                    heroDescription="Setting up a Producer Responsibility Organization? Get complete PRO authorization from CPCB. Expert assistance for documentation, application, and compliance management for e-waste PROs."
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
                        title: "PRO Authorization —",
                        highlightTitle: "An Overview",
                        description: [
                            "PRO Authorization is the process of securing the approval of CPCB (Central Pollution Control Board) for the PRO registration (Producer Responsibility Organisation Registration). Producer Responsibility Organisation (PRO) is an entity responsible for collecting as well as channelizing the e-waste generated from the end-of-life EEE (Electrical and Electronic Equipment) on behalf of the producers.",
                            "PRO Authorization is essential to make sure that e-waste is utilized and managed in an eco-friendly way. It ensures that the producers meet Extended Producer Responsibility obligations under the E-waste (Management) Rules, 2016.",
                            "Producer Responsibility Organisation Authorization is a legal mandate under the Environment (Protection) Act, 1986 and E-waste (Management) Rules, 2016.",
                            "The management of e-waste recycling is governed under the PRO Authorization whereby the producers have to adhere to the policies framed by the CPCB."
                        ],
                        whyIdealTitle: "Functions of PRO Certification",
                        whyIdealList: [
                            { title: "Logistics Arrangement", desc: "Helps in the arrangement of logistics for e-waste collection and transportation." },
                            { title: "Collection Targets", desc: "To help in accomplishing the target of the collection as assigned by CPCB." },
                            { title: "Take-Back Implementation", desc: "Helps in taking back the implementation of used electronic equipment." },
                            { title: "Waste Collection Setup", desc: "Help in setting up waste collection method and network across India." },
                            { title: "Annual Returns Filing", desc: "Helps the producers in the filing of quarterly and annual return on the EPR portal." }
                        ]
                    }}

                    advantages={{
                        title: "Benefits of PRO Authorization in India",
                        subtitle: "Significant advantages for Producer Responsibility Organisations",
                        list: [
                            { title: "Regulatory Compliance", desc: "Producer Responsibility Organisation Registration ensures that you adhere to the regulations related to waste management, leaving no scope for potential penalties or legal issues." },
                            { title: "Sustainable Practices", desc: "By registering for PRO Authorization, you ensure that you are following the best sustainable practices and contributing to responsible waste management." },
                            { title: "Government Incentives", desc: "PRO Authorization opens the door for government incentives, subsidies, and other forms of financial support." },
                            { title: "Competitive Edge", desc: "Producer Responsibility Organisation Certification showcases your commitment towards environmental sustainability and thereby keeps you ahead of your competitors." }
                        ]
                    }}

                    eligibility={{
                        title: "Eligibility Criteria for PRO Authorization",
                        subtitle: "Requirements for PRO Authorization in India",
                        list: [
                            { title: "Legal Entity", desc: "The applicant must be a legal entity registered under the Companies Act, 2013, or Indian Trusts Act, 1882, or Societies Registration Act, 1860." },
                            { title: "Valid GSTIN & PAN", desc: "Must possess a valid GSTIN and PAN Card." },
                            { title: "Minimum Net Worth", desc: "Minimum Net Worth – ₹10 Crore (Latest Audited Balance Sheet)." },
                            { title: "Experience", desc: "At least 3 years of experience in e-waste management or related fields." },
                            { title: "Producer Agreements", desc: "Valid agreements/MoUs with producers for e-waste collection." },
                            { title: "Recycler Agreements", desc: "Agreements/MoUs with registered e-waste recyclers, collection centers, etc." },
                            { title: "SPCB Collaboration", desc: "Collaboration with Pollution Control Committees/State Pollution Control Boards." },
                            { title: "Testing Lab MoUs", desc: "MoUs with authorized testing labs for RoHS compliance." }
                        ]
                    }}

                    documents={{
                        title: "Documents Needed for PRO Registration in India",
                        description: "The documents required for PRO Registration in India:",
                        list: [
                            "GST Registration Certificate",
                            "Details of the Items in Excel sheet",
                            "PAN Card of the company",
                            "Proprietor or authorized signatory KYC",
                            "Rent/Lease/Proof of ownership of the site",
                            "List of producers attached with PRO",
                            "Agreement with authorized transporters for e-waste handling",
                            "Agreement with authorized facilities for hazardous waste disposal",
                            "MoUs with authorized testing labs for RoHS compliance",
                            "Net Worth Certificate from CA (minimum ₹10 Crore)"
                        ]
                    }}

                    process={{
                        title: "PRO Authorization Registration Process",
                        subtitle: "Stepwise guide for PRO authorization registration",
                        steps: [
                            { step: "01", title: "Get Application Form", desc: "Get the application form for PRO registration from CPCB's official portal." },
                            { step: "02", title: "Fill Application", desc: "Fill out the application form by providing all the relevant details accurately." },
                            { step: "03", title: "Submit Documents", desc: "Submit the application form and the documents to the Central Pollution Control Board." },
                            { step: "04", title: "CPCB Review", desc: "Review of the application and documents by the CPCB. Usually gives a response within 30 days." },
                            { step: "05", title: "Certificate Issued", desc: "Post-approval, a PRO authorization certificate will be issued by the CPCB, valid for 5 years." }
                        ]
                    }}

                    postCompliance={{
                        title: "Responsibilities of a Recycler under PRO Authorization",
                        subtitle: "Compliance obligations for recyclers and PROs",
                        list: [
                            { title: "SPCB Registration", desc: "Those interested in recycling or processing E-waste and plastic waste shall submit to the State Pollution Control Board and Pollution Control Committee for registration." },
                            { title: "Proper Waste Management", desc: "It should be the responsibility of the recycler that waste should be managed properly and disposed of safely." },
                            { title: "Pollution Control Equipment", desc: "Pollution control equipment should be used by the recycler to prevent environmental pollution." },
                            { title: "Annual Report Submission", desc: "Those engaged in recycling or processing plastic waste should submit an annual report to the concerned local body, intimating the State Pollution Control Board every year." },
                            { title: "Renewal Before Expiry", desc: "The validity for the renewal of registration shall be made 60 days before the expiration. The registration under E-waste management rules shall be effective for a duration of three years." }
                        ]
                    }}

                    features={{
                        title: "Why Trust Corpbiz for Online PRO Authorization Certificate?",
                        subtitle: "India's leading PRO authorization partner",
                        list: [
                            { title: "200+ PRO Certificates", desc: "Successfully Secured 200+ PRO Authorization Certificates." },
                            { title: "10+ Years Experience", desc: "More than 10 Years of Experience in Environmental Licensing and Consulting." },
                            { title: "Documentation Support", desc: "Complete Documentation Support for EPR PRO Certification in India." },
                            { title: "99% Success Rate", desc: "99% Success Rate in Getting a PRO Authorization Certificate." },
                            { title: "End-to-End Assistance", desc: "End-to-end Assistance for PRO Authorization in India." },
                            { title: "24/7 Support", desc: "24/7 Dedicated Support to Resolve Queries for Producer Responsibility Organisation Registration." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    subtitle="Get answers to the most common questions about this service."
                    faqs={[
          {
                    "question": "What is a Producer Responsibility Organization (PRO)?",
                    "answer": "A PRO is a registered entity that collects and channels e-waste on behalf of multiple producers. It organizes the logistics of e-waste collection, take-back programs, and reporting, helping producers meet their EPR targets without managing their own collection infrastructure."
          },
          {
                    "question": "What is the minimum net worth required for PRO authorization?",
                    "answer": "CPCB requires a minimum net worth of ₹10 Crore (as per the latest audited balance sheet) for entities applying for PRO authorization. This ensures PROs have adequate financial resources to manage large-scale e-waste collection operations."
          },
          {
                    "question": "How many producers can a single PRO serve?",
                    "answer": "There is no regulatory cap on the number of producers a PRO can serve. However, the PRO must have sufficient operational capacity — collection points, transportation agreements, and recycler partnerships — to meet the combined EPR targets of all its registered producers."
          },
          {
                    "question": "What is the process for PRO authorization from CPCB?",
                    "answer": "The process involves submitting Form-4 on the CPCB portal with all required documents, CPCB review (typically 30 days), physical verification of operational capacity, and issuance of PRO authorization certificate valid for 5 years."
          },
          {
                    "question": "Can a recycler also be a PRO?",
                    "answer": "A single entity cannot simultaneously hold both e-waste recycler authorization and PRO authorization under the E-Waste (Management) Rules, 2022 to avoid conflict of interest. Separate entities must be registered for these activities."
          },
          {
                    "question": "What is the validity and renewal period for PRO authorization?",
                    "answer": "PRO authorization is valid for 5 years from the date of issue. Renewal applications must be filed 60 days before expiry. The same documentation requirements and net worth criteria apply at the time of renewal."
          },
          {
                    "question": "Do producers still have EPR liability if they enroll with a PRO?",
                    "answer": "Yes. Producers remain ultimately liable for EPR compliance even if they engage a PRO. The PRO fulfills the EPR targets on the producer's behalf, but the compliance is tracked against the producer's EPR registration on the CPCB portal."
          }
]}
                />
                <ReviewsSection />
            </div>
        </div>
    );
};

export default PROAuthorization;
