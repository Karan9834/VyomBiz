import fs from 'fs';
import path from 'path';

const data = [
    {
        fileName: 'SolidWasteManagementAuthorization.jsx',
        title: 'Solid Waste Management Authorization',
        subtitle: 'Start Process in 2 Minutes. Worried about rejection of the solid waste management authorization? VyomBiz delivers 99% first-time approvals through structured documentation, technical reporting, authority coordination, and complete compliance management.',
        whatsIncluded: ['Eligibility Assessment', 'Application Drafting Support', 'Disposal Management Plan', 'Site Layout Documentation', 'SPCB Filing Assistance', '3-Step Compliance Check'],
        overview: `Solid waste refers to solid or semi-solid domestic waste, sanitary waste, institutional waste, commercial waste, horticultural waste, agricultural waste, bio-media waste and such other waste generated in the area under the local authorities and other entities mentioned under Rule 2. Solid Waste Management refers to the discipline connected to the control of generation, collection, storage, transportation, processing and disposal of the solid waste in a way that it is in the best interest of public health, engineering, economics, conservation and other environmental considerations. A person who engages in processing, treatment, recycling and disposal facility of waste must take Solid Waste Management Authorization under the Solid Waste Management Rules from the concerned department.`,
        rules: `Municipal Solid Waste (Management and Handling) Rules 2000\nThis pertains to management and handling of municipal solid waste.\nBiomedical Waste (Management and Handling) Regulations 1998\nThis regulation governs the management and handling of the bio-medical waste.\nE-waste (Management and Handling) Regulations 2010\nThis regulation governs the management and handling of electrical and electronic waste.`,
        procedure: `The procedure is as follows: \n1. Apply to the state pollution control board file an application in Form I within 60 days period.\n2. The applicant must also accompany such application with consent to establish and consent to operate.\n3. Attach all Documents, and the Documents should be signed from the authorized person.\n4. Submit the form to the concerned state pollution board.\n5. If the board finds the form to be fit enough, then it shall grant the authorization.`,
        documents: ['Authorized Signatory Aadhar Card', 'PAN Card of the Authorized Signatory', 'GST Certificate', 'Proof of ownership of site or rent/lease agreement', 'Factory license/trade license', 'Electricity bill', 'Layout plan', 'Process flow chart', 'Details of the machinery installed']
    },
    {
        fileName: 'HazardousWasteManagementAuthorization.jsx',
        title: 'Hazardous Waste Management Authorization',
        subtitle: 'Hazardous Waste Management Authorization is necessary for those involved in handling, generating, collection, storing, packaging, transportation, treatment, processing etc.',
        whatsIncluded: ['10+ Years of Experience', '400 + In-House CAs, CS & Lawyers', '99% SLA Delivery', '10,000+ Pin codes Network in India'],
        overview: `As the lifestyle of people undergoes significant change, different chemicals and products are used at home today and often, we are unaware that it is corrosive, explosive, flammable or toxic. These fall under dangerous wastes that should be kept out of wet and dry waste streams as they can be harmful to our health and for the environment also if not correctly disposed of. Proper hazardous waste management is required and to ensure that the state pollution control board provides hazardous waste management authorization.`,
        rules: `These rules have been notified to ensure safe handling, generation, processing, storage, treatment, transportation, reprocessing, collection and proper disposal of hazardous waste. The Hazardous Waste Management Rules came into picture in 1989 and was amended later in 2000, 2003. Hazardous Waste (Management, Handling and Transboundary Movement) Rules were notified in 2016.`,
        procedure: `1. Apply to the state pollution control board file an application in Form I within 60 days period from the date of publication of these rules\n2. The applicant must also accompany such application with consent to establish and consent to operate while applying\n3. Attach all Documents, and the Documents should be signed from the authorized person\n4. Submit the form to the concerned state pollution board\n5. If the board finds the form to be fit enough, then it shall grant the authorization`,
        documents: ['Aadhaar Card copy and PAN card copy of the applicant', 'GST certificate', 'Rent/lease or proof of ownership', 'Factory license or trade license', 'Electricity bill', 'Layout plan', 'Certificate of incorporation if it\'s a company/LLP', 'MOA and AOA', 'Board resolution to appoint an authorized person']
    },
    {
        fileName: 'AuthorizationForImportOfHazardousWaste.jsx',
        title: 'Authorization for Import of Hazardous Waste',
        subtitle: 'If you wish to deal in the process of Import of Hazardous Waste then it is mandatory to get Authorization.',
        whatsIncluded: ['10+ Years of Experience', '400 + In-House CAs, CS & Lawyers', '99% SLA Delivery', '10,000+ Pin codes Network in India'],
        overview: `Hazardous waste can be harmful for both humans and environment if it is not handled or disposed of properly. Therefore there is a need for well-organized hazardous waste management. Hazardous waste are non-biodegradable, persistent in the environment and can be dangerous. A proper hazardous waste management includes collection, recycling, treatment, disposal and transportation of wastes. For such process, proper authorization is required from the authority. Moreover, if any individual wishes to import hazardous waste, then he needs to take authorization from the concerned authority.`,
        rules: `Hazardous Waste Management Rules have been notified to ensure secure handling , generation, processing, treatment, import, package, storage, transportation, reprocessing, collection, conversion, and offering for sale, destruction and disposal of Hazardous Waste.`,
        procedure: `In order to import hazardous waste for recycling:\n1. A recycler with a license from the state pollution control board to recycle such material and who has sought to import such material needs to apply to the respective state pollution control board in advance.\n2. The state pollution control board will forward the application with recommendations and requisite stipulations for the safe transport, and processing within 30 days of receipt of the application.\n3. The state government will grant the NOC for import provided that the importer submits a valid informed consent letter with authenticated copy.`,
        documents: ['Aadhaar Card', 'PAN card', 'GST certificate', 'Valid informed consent letter with authenticated copy from the exporting country', 'MOA and AOA', 'Board resolution']
    },
    {
        fileName: 'AuthorizationForExportOfHazardousWaste.jsx',
        title: 'Authorization for Export of Hazardous Waste',
        subtitle: 'All those who want to deal in the process of export of Hazardous Waste must know that it is mandatory to get Authorization.',
        whatsIncluded: ['10+ Years of Experience', '400 + In-House CAs, CS & Lawyers', '99% SLA Delivery', '10,000+ Pin codes Network in India'],
        overview: `Hazardous waste can be harmful for both humans and environment if it is not handled or disposed of properly. Therefore there is a need for well-organized hazardous waste management. Hazardous waste are non-biodegradable, persistent in the environment and can be dangerous. A proper hazardous waste management includes collection, recycling, treatment, disposal and transportation of wastes.`,
        rules: `Export of Hazardous Waste\nThe export of hazardous wastes from India listed in Part A and Part B of Schedule III and Schedule VI shall be with the permission of Ministry of Environment and Forest. In case of applications for export of hazardous wastes listed in Part A of Schedule III and Schedule VI, they will be considered based on prior informed consent of the importing country.`,
        procedure: `In order to export hazardous waste:\n1. Anyone who intends to export hazardous waste shall make an application to the MoEF/SPCB.\n2. The MoEF/SPCB can give the permission for the proposed export.\n3. The state government will grant the NOC for export provided that the exporter submits a valid informed consent letter with authenticated copy from the concerned authority.`,
        documents: ['Aadhaar Card', 'PAN card', 'GST certificate', 'Valid informed consent letter with authenticated copy from the importing country', 'Movement document in Form 6']
    },
    {
        fileName: 'BioMedicalWasteRecyclingPlant.jsx',
        title: 'Bio Medical Waste Management Recycling Plant Setup',
        subtitle: 'Struggling to set up your bio medical waste Management recycling plant? Get VyomBiz expert assistance for affordable, reliable, and timely bio medical plant setup solutions. 99 out of 100 successful bio medical waste management recycling plant setups.',
        whatsIncluded: ['Feasibility Site Assessment', 'CPCB & SPCB Authorization', 'Environmental Clearance', 'Plant Layout Design', 'Machinery Procurement', 'Free 30-Min Expert Advisory', 'Company Registration'],
        overview: `India’s population is estimated to be 1.4 billion. As the population grows alarmingly, the number of visitors to hospitals and healthcare facilities is also rising. Biomedical waste in the country is giving the government and the general public a head-explosion experience. Biomedical waste refers to a special category of waste generated during the diagnosis and treatment of human beings or animals.`,
        rules: `Bio medical waste management authorization enables legal compliance, facilitating improved safety and better environmental protection for healthcare establishments. Setting up a bio medical waste recycling plant ensures healthcare facilities fulfil all the mandatory regulatory criteria for handling bio-medical waste to avoid legal penalties.`,
        procedure: `1. Conduct Market Research\n2. Create a Business Plan\n3. Obtain Necessary Licenses and Permits\n4. Set Up Facility and Equipment\n5. Develop Partnerships and Marketing`,
        documents: ['Project Report Details', 'Proof of Ownership', 'Consent to Establish (CTE)', 'Consent to Operate (CTO)', 'Environmental Clearance (EC)', 'Pollution Control & Safety Compliance', 'Bio Medical Waste Handling Certification', 'Company Registration Document', 'PAN and GST Registration', 'Fire Safety Clearance', 'Local Municipal Approval']
    },
    {
        fileName: 'HazardousWasteExportAuthorisation.jsx',
        title: 'Hazardous Waste Export Authorisation',
        subtitle: 'For compliance assurance of all risks associated with your Export Authorisation of Hazardous Waste, comply with applicable laws with the assistance of VyomBiz.',
        whatsIncluded: ['10+ Years of Experience', '400 + In-House CAs, CS & Lawyers', '99% SLA Delivery', '10,000+ Pin codes Network in India'],
        overview: `The Ministry of Environment and Forests is the nodal ministry for handling the transboundary movement of all hazardous materials and is responsible for approving their transit through any region of India. The waste that can be exported from India is stated in Schedule III, Parts A and B, and Schedule VI, and it can be done with the MoEF and CC's (Ministry of Environment Forest and Climate Change) prior approval.`,
        rules: `Hazardous Waste Authorisation encourages the 3Rs of waste Reducing, Reusing, and Recycling. By using resources effectively and producing less garbage than usual, we can reduce the quantity of waste we produce to a manageable level.`,
        procedure: `1. The proposed transboundary movement of hazardous wastes must be reported to the central government's Ministry of Environment and Forests in Form 1.\n2. After authentication, the Central Government gives a No Objection Certificate to the proposed export with conditions as necessary.\n3. The Central Government would send a copy of the No Objection Certificate to the Central Pollution Control Board.`,
        documents: ['IEC', 'MOA', 'AOA/Partnership deed', 'Pan Card and UID of Authorized Person', 'Pan Card of the Unit', 'GST registration', 'Permission to operate the unit', 'Authorisation from the relevant SPCB', 'A lab report for the waste that will be exported']
    },
    {
        fileName: 'LandWasteManagement.jsx',
        title: 'Land Waste Management',
        subtitle: 'For compliance assurance of all risks associated with your Land Waste, comply with applicableLand Waste Management laws with the assistance of VyomBiz.',
        whatsIncluded: ['10+ Years of Experience', '400 + In-House CAs, CS & Lawyers', '99% SLA Delivery', '10,000+ Pin codes Network in India'],
        overview: `Approximately 80% of marine pollution comes from land. Our goal for Land Waste Management is to eliminate littering in our public lands and work toward a time when it is unheard of. The environment and the associated ecosystem services have deteriorated throughout time due to increased anthropogenic land-based activities and global pollution brought on by population growth and economic development.`,
        rules: `According to the 2016 Solid Waste Management Rules:\nThat all Urban Local Bodies (ULBs) with a population of 100,000 or more to establish land waste treatment facilities within two years. Within three years, all Urban Local Bodies (ULBs) with a population of at least 0.5 million must begin operating regular or autonomous sanitary landfills.`,
        procedure: `1. Create a registration ID with MPCB to register in the first stage.\n2. Fill out the information required to register on the portal, then log in.\n3. Following registration, enter the MPCB Portal.\n4. MPCB must communicate any discrepancies through the industry papers section.`,
        documents: ['A site plan and map of the area', 'Aadhar card', 'PAN card', 'GST certificate', 'Consensus with other interested parties', 'A site clearance Document', 'Certificate of Consent to Establish', 'Certificate of Consent to Operate']
    },
    {
        fileName: 'HazardousWasteManagementAndComplianceAssurance.jsx',
        title: 'Hazardous Waste Management and Compliance Assurance',
        subtitle: 'For compliance assurance of all risks associated with your Hazardous waste, get your Hazardous Waste Management with the assistance of VyomBiz!',
        whatsIncluded: ['10+ Years of Experience', '400 + In-House CAs, CS & Lawyers', '99% SLA Delivery', '10,000+ Pin codes Network in India'],
        overview: `The term Hazardous Waste Management refers to all methods and regulations for handling Hazardous waste without endangering people or the environment. The primary goal of a Hazardous Waste Management and Compliance Assurance is to alter how hazardous waste is handled so that it may be transported, stored, and disposed of in a way that is safe for the environment.`,
        rules: `According to the Organization for Economic Cooperation and Development (OECD),4.4 million tonnes of Hazardous waste are produced annually. Hazardous Waste Management and Compliance Assurance has four main advantages: Equity, Effectiveness, Efficiency, Sustainability.`,
        procedure: `1. Handling of Hazardous Wastes: precautions to safeguard health.\n2. Transport of Hazardous Waste: Transporting to an authorised treatment, storage, or disposal facility.\n3. Disposal: Secure landfill, deep wells, and bedrock disposal are a few options for eliminating waste.`,
        documents: ['Aadhaar Card copy and PAN card copy of the applicant', 'GST certificate', 'Rent/lease or proof of ownership', 'Factory license or trade license', 'Details of treatment storage and disposal facility (TSDFs)']
    },
    {
        fileName: 'IndustrialWasteManagement.jsx',
        title: 'Industrial Waste Management',
        subtitle: 'Facing hurdles in complying with industrial waste management regulations? Let our experts help you mitigate business risks and ensure sustainable growth. Follow Waste Disposal Regulations and avoid Penalties up to Rs 50 Lakh.',
        whatsIncluded: ['Waste Stream Identification', 'Regulatory Compliance Support', 'Waste Management Planning', 'Sustainability & ESG Reporting', 'Wastewater Treatment', 'Free 15-Min Consulting'],
        overview: `Industrial waste management is the process which ensures the safe removal, recycling and disposal of unwanted wastes produced from by-products of industrial processes. Almost all forms of industrial waste generating air emissions, wastewater discharge, and by-products must be handled and carefully disposed of since they frequently harm the environment or people's health.`,
        rules: `Industrial waste management process ensures compliance with local and state regulations, minimizing the risk of fines or operational impact.`,
        procedure: `1. Assessment of Waste generation\n2. Handling hazardous and non-hazardous waste\n3. Ensuring regulatory compliance\n4. Application for CTE and CTO from CPCB`,
        documents: ['GST Certificate', 'Proof of Ownership', 'Factory License', 'Layout Plan of facility', 'Process Flow chart']
    }
];

const generateTemplate = (d) => `import React from 'react';
import { Shield, FileCheck, CheckCircle, ArrowRight, Zap, Target, BookOpen, Clock, Users, Building2, Briefcase } from 'lucide-react';

const ${d.fileName.split('.')[0]} = () => {
    return (
        <div className="bg-slate-50 min-h-screen font-sans overflow-x-hidden">
            {/* HERO SECTION */}
            <section className="relative bg-gradient-to-br from-[#005a9c] to-[#072b47] text-white pt-32 pb-24 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-50 to-transparent"></div>
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-blue-100 text-sm font-bold uppercase tracking-wider mb-8 backdrop-blur-sm">
                        <Shield size={16} className="text-[#dead01]" /><span>Environmental Compliance Services</span>
                    </div>
                    
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.2] mb-6 max-w-5xl">
                        {/* Split title to style it nicely */}
                        ${d.title.split(' ').map((w, i, arr) => i > Math.floor(arr.length / 2) ? '<span className="text-[#dead01]">' + w + '</span> ' : w + ' ').join('')}
                    </h1>
                    
                    <p className="text-xl text-blue-100 mb-10 max-w-3xl leading-relaxed">
                        ${d.subtitle}
                    </p>
                    
                    <div className="flex flex-wrap justify-center gap-4">
                        <button className="bg-[#dead01] text-[#072b47] px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-400 shadow-xl active:scale-95 transition-all flex items-center justify-center gap-2">
                            Get Free Expert Consultation
                            <ArrowRight size={20} />
                        </button>
                        <button className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg backdrop-blur-sm active:scale-95 transition-all flex items-center justify-center gap-2">
                            View Pricing
                        </button>
                    </div>
                </div>
            </section>

            {/* WHAT'S INCLUDED / METRICS */}
            <section className="-mt-12 relative z-20 mb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-3xl p-6 md:p-10 shadow-xl border border-slate-100 flex flex-wrap lg:flex-nowrap justify-between gap-8">
                        <div className="w-full lg:w-1/3">
                            <h3 className="text-xl font-black text-[#072b47] mb-4 flex items-center gap-2">
                                <Zap className="text-[#dead01]" size={24} /> What's Included?
                            </h3>
                            <ul className="space-y-3">
                                ${d.whatsIncluded.map(item => `
                                <li className="flex items-center gap-3 text-slate-700 font-medium">
                                    <CheckCircle className="text-green-500 shrink-0" size={18} />
                                    <span>${item}</span>
                                </li>`).join('')}
                            </ul>
                        </div>
                        
                        <div className="hidden lg:block w-px bg-slate-200"></div>

                        <div className="w-full lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-6 content-center">
                            <div className="text-center">
                                <p className="text-4xl font-black text-[#005a9c]">1L+</p>
                                <p className="text-sm font-bold text-slate-500 uppercase mt-1">Happy Clients</p>
                            </div>
                            <div className="text-center">
                                <p className="text-4xl font-black text-[#005a9c]">3500+</p>
                                <p className="text-sm font-bold text-slate-500 uppercase mt-1">Expert Advisors</p>
                            </div>
                            <div className="text-center">
                                <p className="text-4xl font-black text-[#005a9c]">50+</p>
                                <p className="text-sm font-bold text-slate-500 uppercase mt-1">Branch Offices</p>
                            </div>
                            <div className="text-center">
                                <p className="text-4xl font-black text-[#005a9c]">4.9</p>
                                <p className="text-sm font-bold text-slate-500 uppercase mt-1">Google Rating</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* MAIN CONTENT AREA */}
            <section className="py-8 mb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8">
                    
                    {/* LEFT CONTENT */}
                    <div className="w-full lg:w-[65%] space-y-8">
                        {/* OVERVIEW */}
                        <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
                            <h2 className="text-2xl font-black text-[#072b47] mb-6 flex items-center gap-3">
                                <BookOpen className="text-[#005a9c]" /> Overview
                            </h2>
                            <div className="text-slate-600 font-medium leading-relaxed space-y-4 text-lg">
                                ${d.overview.split('\\n').map(p => `<p>${p}</p>`).join('')}
                            </div>
                        </div>

                        {/* RULES AND REGULATIONS */}
                        <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
                            <h2 className="text-2xl font-black text-[#072b47] mb-6 flex items-center gap-3">
                                <Shield className="text-[#005a9c]" /> Rules, Regulations & Benefits
                            </h2>
                            <div className="text-slate-600 font-medium leading-relaxed space-y-4 text-lg">
                                ${d.rules.split('\\n').map(p => `<p>${p}</p>`).join('')}
                            </div>
                        </div>

                        {/* PROCEDURE */}
                        <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
                            <h2 className="text-2xl font-black text-[#072b47] mb-6 flex items-center gap-3">
                                <Target className="text-[#005a9c]" /> Procedure
                            </h2>
                            <div className="text-slate-600 font-medium leading-relaxed space-y-4 text-lg">
                                ${d.procedure.split('\\n').map(p => `<p>${p}</p>`).join('')}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDEBAR */}
                    <div className="w-full lg:w-[35%] space-y-8">
                        {/* DOCUMENTS REQUIRED */}
                        <div className="bg-[#072b47] rounded-3xl p-8 shadow-xl text-white">
                            <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
                                <FileCheck className="text-[#dead01]" /> Documents Required
                            </h3>
                            <ul className="space-y-4">
                                ${d.documents.map(doc => `
                                <li className="flex items-start gap-3 text-blue-100 font-medium">
                                    <div className="mt-1 w-5 h-5 shrink-0 rounded-full bg-[#005a9c] flex items-center justify-center">
                                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                    </div>
                                    <span>${doc}</span>
                                </li>`).join('')}
                            </ul>
                        </div>

                        {/* WHY CHOOSE US CALLOUT */}
                        <div className="bg-gradient-to-br from-[#FEF9C3] to-yellow-100 rounded-3xl p-8 shadow-sm border border-yellow-200">
                            <h3 className="text-2xl font-black text-[#072b47] mb-4">Why Choose VyomBiz?</h3>
                            <p className="text-[#072b47]/80 font-medium mb-6">
                                We make technical compliance certifications effortless and convenient. Top 3% of Industry Professionals.
                            </p>
                            <button className="w-full bg-[#005a9c] text-white px-6 py-4 rounded-xl font-bold hover:bg-[#072b47] active:scale-95 transition-all shadow-xl shadow-blue-900/10">
                                Talk to an Expert Now
                            </button>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default ${d.fileName.split('.')[0]};
`;

const dir = path.join(process.cwd(), 'src', 'pages', 'environmental', 'HazardousWasteManagement');
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
}

data.forEach(d => {
    fs.writeFileSync(path.join(dir, d.fileName), generateTemplate(d));
});

console.log('Successfully generated 9 HazardousWasteManagement pages!');
