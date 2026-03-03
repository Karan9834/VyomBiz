import React from 'react';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const EWasteRecyclingLicense = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="E-Waste Recycling & Dismantling License"
                    heroTitleSuffix="— Start Your Facility"
                    heroDescription="Ready to enter India's booming e-waste recycling market? Get your SPCB & CPCB e-waste authorization with full support — from CTE to CTO to final recycling license."
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
                        title: "E-Waste Recycling / Dismantling License —",
                        highlightTitle: "An Overview",
                        description: [
                            "India generates approximately 3.2 million metric tonnes of e-waste annually, making it the third largest e-waste generator in the world. This creates a massive and rapidly growing market opportunity for authorized e-waste recyclers and dismantlers.",
                            "Setting up an e-waste recycling or dismantling facility is highly lucrative but requires stringent environmental approvals from the Central Pollution Control Board (CPCB) and the State Pollution Control Board (SPCB). The facility must adhere to strict guidelines under the E-Waste (Management) Rules, 2022.",
                            "An e-waste recycling/dismantling license authorizes a business to collect, dismantle, process, and recycle electrical and electronic equipment waste. Licensed recyclers can also generate EPR credits and sell them to producers, creating an additional revenue stream.",
                            "The license is regulated under the E-Waste (Management) Rules, 2022 and the Hazardous and Other Wastes (Management and Transboundary Movement) Rules, 2016. Both authorizations are typically required for a complete e-waste processing facility."
                        ],
                        whyIdealTitle: "Revenue Opportunities for Licensed Recyclers",
                        whyIdealList: [
                            { title: "Precious Metal Recovery", desc: "Gold, silver, copper, and rare earth metals extracted from e-waste carry significant market value." },
                            { title: "EPR Credit Sales", desc: "Sell e-waste EPR credits to producers who cannot meet their own collection targets — a fast-growing revenue stream." },
                            { title: "Contract Recycling", desc: "Tie up with large electronics brands, IT companies, and government agencies for bulk e-waste processing contracts." },
                            { title: "Component Refurbishment", desc: "Refurbish and resell functional components including processors, displays, and circuit boards." }
                        ]
                    }}

                    advantages={{
                        title: "Benefits of Obtaining E-Waste Recycling / Dismantling License",
                        subtitle: "Why entering the e-waste recycling business is a smart move",
                        list: [
                            { title: "High Revenue Potential", desc: "India's e-waste generation grows at 30% annually. The e-waste recycling market is projected to reach USD 120 billion globally by 2033, offering enormous revenue opportunities." },
                            { title: "Authorized Status for Enterprise Business", desc: "Only CPCB-licensed recyclers can enter into official MoUs with major electronics brands, IT companies, and government agencies for e-waste collection." },
                            { title: "EPR Credit Generation & Sales", desc: "Licensed e-waste dismantlers and recyclers generate EPR credits for every metric tonne processed. These credits are sold to producers for significant revenue." },
                            { title: "Government Incentives", desc: "Licensed recyclers are eligible for government subsidies, tax incentives, and preferential financing schemes under various environmental and MSME programs." },
                            { title: "PRO Partnership Opportunities", desc: "Become a preferred partner of registered PROs (Producer Responsibility Organizations), securing a steady pipeline of e-waste from major electronics brands." },
                            { title: "Circular Economy Leadership", desc: "Position your business as a sustainability leader in the circular economy — increasingly valued by investors, banks, and international trading partners." }
                        ]
                    }}

                    eligibility={{
                        title: "Eligibility to Apply for E-Waste Recycling / Dismantling License",
                        subtitle: "Key requirements for setting up a licensed e-waste facility",
                        list: [
                            { title: "Industrial Zoned Location", desc: "Premises must be located in SPCB-approved industrial or manufacturing zones. Residential or mixed-use zones are not permitted for e-waste processing." },
                            { title: "Minimum Area Requirements", desc: "Minimum 500 sq.m. for processing plants with 1 MT/day capacity. Preferably 2,500+ sq.m. for plants handling 5 MT/day or more." },
                            { title: "Pollution Control Equipment", desc: "Mandatory installation of air pollution control systems, effluent treatment plants, noise control equipment, and solid waste management systems." },
                            { title: "TSDF Agreement", desc: "Agreement with a CPCB-authorized Treatment, Storage, and Disposal Facility (TSDF) for hazardous residue disposal." },
                            { title: "Dismantling Equipment", desc: "Minimum 300 sq.m. space for manual dismantling equipment storage and operation." },
                            { title: "Worker Safety Measures", desc: "Comprehensive worker health and safety protocols including protective equipment, medical facilities, and emergency response plans." }
                        ]
                    }}

                    documents={{
                        title: "Documents Required for E-Waste Recycling / Dismantling License",
                        description: "Complete document list for obtaining e-waste recycling and dismantling authorization:",
                        list: [
                            "Consent to Establish (CTE) from SPCB — must be obtained before facility construction begins",
                            "Consent to Operate (CTO) from SPCB — obtained after facility is built and ready to operate",
                            "Factory License under Factories Act, 1948",
                            "Fire NOC from local Fire Department",
                            "Detailed plant layout and site map",
                            "List of all machinery and pollution control equipment installed",
                            "Process flow diagrams showing e-waste processing and pollution control",
                            "Agreement with TSDF operator for hazardous waste disposal",
                            "Risk and hazard assessment report for the facility",
                            "Environmental Statement addressing noise, effluent, and air emission controls",
                            "Certificate of Incorporation and GST registration",
                            "ISO 14001 certification (recommended; required by some SPCBs)",
                            "Water and air analysis reports from accredited labs"
                        ]
                    }}

                    process={{
                        title: "How to Get Your E-Waste Recycling / Dismantling License",
                        subtitle: "Stepwise process for obtaining authorization from SPCB and CPCB",
                        steps: [
                            { step: "01", title: "Site Selection & Due Diligence", desc: "Select a site in an SPCB-approved industrial zone. Conduct due diligence on land use classification, proximity to water bodies, and available utilities." },
                            { step: "02", title: "Apply for Consent to Establish (CTE)", desc: "Submit Form-I to the SPCB with site plans, process description, and pollution control measures before beginning any construction or equipment installation." },
                            { step: "03", title: "Facility Construction & Equipment Setup", desc: "After CTE approval, construct the facility as per approved plans. Install all required processing machinery and pollution control equipment." },
                            { step: "04", title: "Trial Run & Testing", desc: "Conduct trial operations and collect emission/effluent test data from accredited labs to demonstrate compliance with CPCB standards." },
                            { step: "05", title: "Apply for Consent to Operate (CTO)", desc: "Submit Form-II to SPCB with trial run data, lab test reports, and proof of all required installations for the Consent to Operate." },
                            { step: "06", title: "CPCB Authorization for E-Waste", desc: "Apply on the CPCB portal for formal e-waste recycler/dismantler authorization. Certificate is issued within 120 working days of receipt of complete application." }
                        ]
                    }}

                    postCompliance={{
                        title: "Post-Authorization Compliance for E-Waste Recyclers",
                        subtitle: "Ongoing obligations for licensed e-waste recycling facilities",
                        list: [
                            { title: "Quarterly & Annual Returns", desc: "File quarterly reports (Form-2) and annual returns to SPCB/CPCB declaring e-waste processed, recycled, and disposed per quarter and per year." },
                            { title: "Form-6 E-Waste Manifest", desc: "Maintain Form-6 E-Waste Manifest for every consignment of e-waste received, processed, and dispatched from the facility." },
                            { title: "Regular Environmental Monitoring", desc: "Conduct quarterly ambient air quality, effluent, and noise monitoring from NABL-accredited labs. Submit reports to SPCB." },
                            { title: "Accident Reporting", desc: "Immediately report any accident or incident occurring at the facility to the concerned SPCB and take corrective action." },
                            { title: "Validity & Renewal", desc: "E-waste recycler authorization is valid for 5 years. Renewal registration fee is ₹7,500 + ₹0.625/MT for quantities processed in the preceding 5 years." },
                            { title: "Physical Verification", desc: "CPCB conducts physical or video verification of recycling facility within 3 months of the grant of initial authorization." }
                        ]
                    }}

                    features={{
                        title: "Why Choose Corpbiz for E-Waste Recycling / Dismantling License?",
                        subtitle: "India's most experienced partner for e-waste facility licensing",
                        list: [
                            { title: "200+ Recycler Licenses Secured", desc: "Successfully assisted 200+ e-waste recycling and dismantling facilities across India in obtaining SPCB/CPCB authorization." },
                            { title: "All SPCB Coverage", desc: "Experience with all 28 State Pollution Control Boards — each with unique requirements and processes handled by our regional experts." },
                            { title: "Site Selection Advisory", desc: "Pre-application site selection advisory to ensure your chosen location meets all SPCB zoning and distance requirements." },
                            { title: "CTE to CTO — End-to-End", desc: "Complete handholding from CTE application through facility setup, trial run, CTO, and final CPCB authorization." },
                            { title: "EPR Credit Revenue Setup", desc: "After authorization, we help you register on the CPCB portal to generate and sell EPR credits — creating immediate revenue for your facility." },
                            { title: "Ongoing Compliance Retainer", desc: "Post-authorization compliance retainer services including quarterly monitoring, annual returns, SPCB reporting, and CPCB portal management." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    subtitle="Get answers to the most common questions about this service."
                    faqs={[
          {
                    "question": "What is the difference between e-waste recycling authorization and dismantling authorization?",
                    "answer": "A dismantling authorization allows a facility to manually dismantle e-waste into components and sub-assemblies. A recycling authorization allows further processing — smelting, chemical extraction — of the dismantled components to recover raw materials. Many facilities hold both authorizations."
          },
          {
                    "question": "What is the minimum land area required for an e-waste recycling plant?",
                    "answer": "CPCB guidelines require a minimum of 500 sq.m. for processing plants handling 1 MT/day capacity. For larger operations handling 5+ MT/day, a minimum area of 2,500 sq.m. is recommended. A separate area of 300 sq.m. is needed for manual dismantling."
          },
          {
                    "question": "How long does it take to get e-waste recycling authorization from CPCB?",
                    "answer": "CPCB must grant authorization within 120 working days of receiving a complete application. Corpbiz's team ensures all documents are in order before submission to avoid rejections or delays that reset the timeline."
          },
          {
                    "question": "What is the registration fee for e-waste recycler authorization?",
                    "answer": "The first-time registration fee for new e-waste recycler authorization is ₹15,000. Renewal fee is ₹7,500 plus ₹0.625 per MT for quantities processed in the preceding 5 years."
          },
          {
                    "question": "Can e-waste recyclers generate revenue by selling EPR credits?",
                    "answer": "Yes! Licensed e-waste recyclers can register on the CPCB portal to generate EPR credits for every metric tonne of e-waste they process. These credits are sold to electronics producers who cannot meet their own collection targets, creating a significant additional revenue stream."
          },
          {
                    "question": "Do e-waste recycling facilities need ISO certification?",
                    "answer": "ISO 14001 (Environmental Management) certification is highly recommended and required by some SPCBs. ISO 9001 (Quality Management) is also valued. Some enterprise clients require recyclers to hold ISO certifications as a prerequisite for business."
          },
          {
                    "question": "What is the validity of e-waste recycler authorization?",
                    "answer": "E-waste recycler authorization is valid for 5 years from the date of issue. Renewal must be applied for before expiry. CPCB also conducts physical verification of the recycling facility within 3 months of granting initial authorization."
          }
]}
                />
                <ReviewsSection />
            </div>
        </div>
    );
};

export default EWasteRecyclingLicense;
