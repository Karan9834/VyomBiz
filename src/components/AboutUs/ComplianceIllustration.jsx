import React from "react";

const ComplianceIllustration = () => {
    return (
        <section className="py-12 bg-slate-50/50">
            <div className="container mx-auto px-6 lg:px-24">
                <div className="flex flex-col lg:flex-row gap-12 items-center justify-between">
                    <div className="lg:flex-1">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#072b47] mb-6 tracking-tight">
                            Streamlining Business in India: <span className="text-blue-600">Simplifying Complex Compliance</span>
                        </h2>
                        <div className="space-y-6 text-slate-600 font-normal leading-relaxed text-base">
                            <p>
                                VyomBiz offers India’s largest platform for managing compliance across <span className="text-slate-900 font-bold">1,000+ business types</span>. Powered by AI-enabled technology, we simplify legal and regulatory processes for industries ranging from BFSI and manufacturing to international trade—all through a single, secure login.
                            </p>
                            <p>
                                Driven by speed and a client-first mindset, we respond promptly to every query and provide expert guidance tailored to your needs. Your satisfaction is our priority, and our purpose is simple: to make running a business in India easier, smoother, and stress-free.
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
