import React from "react";

const ComplianceIllustration = () => {
    return (
        <section className="py-12 bg-slate-50/50">
            <div className="container mx-auto px-6 lg:px-24">
                <div className="flex flex-col lg:flex-row gap-12 items-center justify-between">
                    <div className="lg:flex-1">
                        <h2 className="text-3xl md:text-3xl font-[900] text-slate-900 mb-6 leading-tight">
                            Streamlining Business in India: Your Solution for <span className="text-blue-600">Complex Compliance</span>
                        </h2>
                        <div className="space-y-4 text-slate-600 font-[500] leading-relaxed text-base">
                            <p>
                                We offer India's largest platform for managing compliance across 1000+ business types, integrating AI-enabled technology to simplify legal and regulatory processes. Catering to sectors from BFSI to manufacturing and international trade, our platform consolidates all compliance needs under a single login.
                            </p>
                            <p>
                                Prompt and client-focused, we ensure quick responses to your queries, offering expert guidance tailored to your requirements. Our commitment to client satisfaction is at the heart of everything we do, making business easier for you.
                            </p>
                        </div>
                    </div>
                    <div className="lg:w-auto shrink-0 flex justify-end">
                        <img
                            src="/aboutus-illustration-image.jpg"
                            alt="Compliance Illustration"
                            className="w-full max-w-[320px] h-auto object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ComplianceIllustration;
