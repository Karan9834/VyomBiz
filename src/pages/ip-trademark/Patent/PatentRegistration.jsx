import React from "react";
import { FileText, CheckCircle, Shield, UserCheck, CheckCircle2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

const PatentRegistrationOverview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            Intellectual Property
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            Patent Registration in India– <span className="text-[#005a9c]">An Overview</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Patent registration in India grants inventors' exclusive rights, preventing others from making, using, or selling their inventions without authorization or permission. The procedure for registration of a patent begins with a search to confirm whether the invention is unique and innovative. The next step involves filing an application with detailed specifications with the Indian Patent Office.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Once the review and publication are over, and if no objections or oppositions are raised, the patent and registration are granted. The validity of a patent in India is 20 years. Patent registration safeguards innovations, allowing inventors to benefit from their inventions commercially.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Leverage our 10+ Years of expertise in intellectual property services and enjoy stress-free patent registration for your technical invention.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80"
                            alt="Patent Registration Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const PatentRegistrationEligibility = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Eligibility Criteria for Patent Registration in India
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    To meet the eligibility criteria for patent registration in India, you must fulfil the below-mentioned conditions:
                </p>

                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Products
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        Unique and visionary products such as gadgets, machinery, chemicals, and drugs.
                    </p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Processes or Methods
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        Creative manufacturing or task manufacturing techniques can be patented.
                    </p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Machines
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        Functional mechanical inventions with distinctive mechanisms or features are patentable.
                    </p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Chemical Formulations
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        New chemical substances, including drugs, can be protected under patent registration.
                    </p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Biotech & Software Innovations
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        Biotechnological discoveries and some software inventions can be patented.
                    </p>
                </div>
            </div>
        </section>
    );
};

const PatentRegistrationDocumentsSection = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Needed for Patent Registration Process
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    Here is a list of documents required for patent registration process, which an applicant must submit at the time of applying. These documents include:
                </p>
                <div className="space-y-4">
                    {[
                        "Identity and address proof of inventor and assignee.",
                        "Contact details, declaration, and information on prior patent applications.",
                        "Patent specification (provisional or complete).",
                        "Statement and Undertaking under Section 8 - Particulars of assignments and foreign filing details.",
                        "Declaration of inventors for the patent application.",
                        "Technical Information including background of the invention, disclosure of invention's need, invention summary, and work description.",
                        "Request for examination and Request for early publication.",
                        "Disclosure of Power of Authority (if assigned to Patent Agent).",
                        "Disclosure of claims and abstracts and statutory fees (Cheque/DD).",
                        "Proof of right to file the patent application and MSME or startup certificate.",
                        "Provisional specifications, if complete ones are unavailable.",
                        "Priority document for Convention Application or PCT National Phase Application.",
                        "Permission from the National Biodiversity Authority (if biological material is from India).",
                        "Source of geographical origin for biological materials.",
                        "Signatures of the applicant or authorized person with name and date."
                    ].map((doc, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-[#f1a134] mt-2 shrink-0"></div>
                            <p className="text-[17px] text-slate-600 leading-relaxed font-medium">{doc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const PatentRegistrationProcessSection = () => {
    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        Procedure for Registration of Patent Online
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        The step-by-step procedure for registration of patent online involves different steps.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img
                            src="https://images.unsplash.com/photo-1588776814546-ec7e8a75a3a6?auto=format&fit=crop&q=80"
                            alt="Process"
                            className="w-full rounded-lg shadow-sm"
                        />
                    </div>
                    <div className="lg:col-span-2">
                        {[
                            { title: "Conduct a Patent Search", desc: "The first step in the patent registration process is conducting an in-depth search of existing patents to ensure the invention is innovative. The research helps identify similar patents that might impact your application's success." },
                            { title: "Prepare the Application", desc: "The next step is to draft a comprehensive patent application and add details, including descriptions, claims, and other essential drawings. It is vital to ensure that the application fulfils all the patent office's requirements for transparency and completeness." },
                            { title: "File the Application", desc: "The next step in the path to apply for patent registration process involves submitting the application to the relevant patent office and the required fees. To avoid delays or rejections, you must confirm that all your forms are correctly filled out." },
                            { title: "Request Review", desc: "Once the application is filed, the next step is to request a review of the filed application within the prescribed timeframe. This step is essential to initiate the official review process by patent examiners." },
                            { title: "Respond to Objections", desc: "Lastly, if the submitted application faces any objections, you must be prepared to address them and answer the patent examiner's queries promptly." },
                            { title: "Grant of Patent", desc: "Effective communication and clarification can improve the chances of granting your patent. Usually, the final grant of the application is notified via a journal that is published." }
                        ].map((step, idx) => (
                            <div key={idx} className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-200">
                                <div className="text-[16px] font-semibold text-[#072b47]">
                                    {idx + 1}.
                                </div>
                                <div>
                                    <h3 className="text-[18px] font-semibold text-[#072b47]">
                                        {step.title}
                                    </h3>
                                    <p className="text-[16px] text-slate-600 mt-1 leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                        <div className="border-t border-slate-200"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const PatentRegistrationFeaturesSection = () => {
    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        How VyomBiz Helps Simplify the Patent Registration Process?
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Expert support.
                    </p>
                </div>
                <div>

                    {[
                        { title: "Expert Consultation", desc: "We offer consultation support for patent registration in India as we have over 10+ years of experience in patent law." },
                        { title: "Network of Lawyers", desc: "You can access our skilled network of lawyers for expert legal advice on possible issues." },
                        { title: "Saved 20 Lakh+ Hours of Inventors", desc: "We drive monthly follow-ups with the patent office to ensure on-time application processing. Thus, we saved 20,000+ hours of creators." },
                        { title: "98% Success Rate", desc: "We perform in-depth patent searches and boast a success rate of over 98% in recognizing suitable patents." },
                        { title: "Affordable Packages", desc: "We offer budget-friendly and competitive packages for patent registration in India with zero hidden costs." },
                        { title: "Detailed Paperwork", desc: "We assist you with the paperwork and help prepare your patent application documents to ensure accuracy and compliance." },
                        { title: "Application Filing", desc: "We handle your patent application submission within 24 hours of obtaining the required details." },
                        { title: "Response Preparation", desc: "We handle the responses within 30 days, reducing potential delays in the registration process." },
                        { title: "Post-registration Support", desc: "We offer continued post-registration assistance to help you maintain your patent rights." }
                    ].map((feature, idx) => (
                        <div key={idx} className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                            <div className="text-[15px] font-semibold text-[#072b47]">
                                {idx + 1}.
                            </div>
                            <div>
                                <h3 className="text-[16px] font-semibold text-[#072b47]">
                                    {feature.title}
                                </h3>
                                <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                    {feature.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                    <div className="border-t border-slate-300"></div>
                </div>
            </div>
        </section>
    );
};

const PatentRegistration = () => {

    const faqs = [
        {
            question: "What is patent agent registration?",
            answer: "1. Must be a citizen of India. 2. Must have attained the age of 21 years. 3. Must have completed an educational degree in either engineering, science, or technology from a recognized university in India. 4. Must pay the fee specified for the registration."
        },
        {
            question: "What is the procedure for registration of patent?",
            answer: "1. Pre-filing Search - Search for existing patents to ensure originality. 2. Prepare Application - Draft patent application, including claims and specifications. 3. File Application - Apply to the relevant patent office. 4. Publication - The application is published 18 months after the application is filed. 5. Examination Request - Request review of the patent application within the specified time. 6. Respond to Objections - Address any objections or questions the patent examiner raises. 7. Grant of Patent - If approved, the patent is granted and published in the patent journal. 8. Renewal - Pay renewal fees to keep the patent valid."
        },
        {
            question: "When one cannot apply for patent registration?",
            answer: "1. If the patent is on sale. 2. If it is in public use. 3. If it has been published one year before the application date."
        },
        {
            question: "What are the requirements to file a patent?",
            answer: "1. Patentable subject matter 2. Utility 3. Novelty 4. Non-obviousness 5. Enablement"
        }
    ];

    const advantagesContent = (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">

                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        Innovation Protection
                    </span>

                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of Patent Registration Online
                    </h2>

                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Patent registration online offers legal protection to inventors and grants exclusive rights to their inventions. It offers various benefits, including commercial advantages such as long-term security and profitability.
                    </p>

                    <div className="mt-10">
                        <img
                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
                            alt="Patent Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                <div className="space-y-6">
                    {[
                        { title: "Exclusive Rights", desc: "Patent registration grants exclusive rights to inventors to use and sell their inventions. It also prevents others from using their invention without due permission, which secures the inventor's commercial interests." },
                        { title: "Monetization Opportunities", desc: "Inventors can license or sell their registered patents, which creates an alternate revenue generation stream from their intellectual property, all he while maintaining the legal ownership of the innovation." },
                        { title: "Increased Market Value", desc: "Patents boost the credibility and market value of the invention and the business, making it more appealing to investors and partners. Patent is a unique and protected asset." },
                        { title: "Competitive Advantage", desc: "A registered patent gives the inventor a competitive edge as their product or process becomes protected by deterring competitors from duplicating or using their patented technology." },
                        { title: "Legal Protection", desc: "A patent offers robust legal protection, safeguarding the investor against malicious use and infringement of their patent. Inventors can initiate legal action against defaulters, ensuring their invention remains guarded from unauthorized use or exploitation." },
                        { title: "Global Protection", desc: "International treaties ensure that a patent registered in India can be extended globally, facilitating inventors to seek patent protection in different countries to penetrate into the global markets." }
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
                        >
                            <h3 className="text-[20px] font-semibold text-[#072b47] mb-3">
                                {item.title}
                            </h3>
                            <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            <HeroLayout
                heroTitleMain="Patent Registration"
                heroTitleSuffix="in India"
                heroSubtitle="Protect Your Innovations"
                heroDescription="Secure exclusive rights to your inventions for 20 years."
                whatsIncludedList={[
                    "Comprehensive Patent Search",
                    "Drafting Provisional/Complete Specification",
                    "Filing Patent Application",
                    "Examination & Objection Handling"
                ]}
                stats={[
                    { count: "20 Years", label: "Protection", icon: <Shield size={20} /> },
                    { count: "98%", label: "Success Rate", icon: <CheckCircle size={20} /> },
                    { count: "Expert", label: "Consultation", icon: <UserCheck size={20} /> }
                ]}
            />

            <DetailsLayout
                overview={<PatentRegistrationOverview />}
                advantages={advantagesContent}
                eligibility={<PatentRegistrationEligibility />}
                documents={<PatentRegistrationDocumentsSection />}
                process={<PatentRegistrationProcessSection />}
                features={<PatentRegistrationFeaturesSection />}
            />

            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries about Patent Registration"
                faqs={faqs}
            />

        </div>
    );
};

export default PatentRegistration;
