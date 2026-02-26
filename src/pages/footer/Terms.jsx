import React from 'react';
import { BookOpen, Scale, Shield } from 'lucide-react';

const TermsAndConditions = () => {
    return (
        <div className="bg-white min-h-screen font-sans">
            {/* Hero Section */}
            <section className="relative bg-white pt-32 pb-16 overflow-hidden">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-[#005a9c] text-sm font-bold uppercase tracking-wider mb-6">
                            <BookOpen size={16} />
                            <span>Legal</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black text-[#072b47] mb-6">
                            Terms & <span className="text-[#dead01]">Conditions</span>
                        </h1>
                        <p className="text-lg text-slate-600">
                            Welcome to VyomBiz. By accessing or using our website and services, you agree to comply with and be legally bound by these Terms & Conditions.
                        </p>
                    </div>
                </div>
            </section>

            {/* Terms Content */}
            <section className="py-12 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-3xl border border-slate-200 shadow-lg p-8 md:p-12">
                        
                        {/* 1. Use of Services */}
                        <div className="mb-10 pb-10 border-b border-slate-100 last:border-0 last:mb-0 last:pb-0">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-full bg-[#dead01]/10 flex items-center justify-center">
                                    <span className="text-[#dead01] font-black">1</span>
                                </div>
                                <h2 className="text-xl font-black text-[#072b47]">Use of Services</h2>
                            </div>
                            <p className="text-slate-600 leading-relaxed pl-11">
                                VyomBiz offers legal, compliance, and professional support through a network of independent experts. You agree to provide accurate and complete information and to use our services strictly for lawful purposes.
                            </p>
                        </div>

                        {/* 2. Independent Professionals */}
                        <div className="mb-10 pb-10 border-b border-slate-100">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-full bg-[#dead01]/10 flex items-center justify-center">
                                    <span className="text-[#dead01] font-black">2</span>
                                </div>
                                <h2 className="text-xl font-black text-[#072b47]">Independent Professionals</h2>
                            </div>
                            <p className="text-slate-600 leading-relaxed pl-11">
                                VyomBiz functions as a platform that connects users with independent professionals. We do not assume responsibility for the advice, services, representations, or outcomes provided by these professionals.
                            </p>
                        </div>

                        {/* 3. Payments & Fees */}
                        <div className="mb-10 pb-10 border-b border-slate-100">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-full bg-[#dead01]/10 flex items-center justify-center">
                                    <span className="text-[#dead01] font-black">3</span>
                                </div>
                                <h2 className="text-xl font-black text-[#072b47]">Payments & Fees</h2>
                            </div>
                            <p className="text-slate-600 leading-relaxed pl-11">
                                All applicable charges will be clearly communicated in advance. Unless expressly stated otherwise, payments made are non-refundable, except as outlined in our Refund & Cancellation Policy.
                            </p>
                        </div>

                        {/* 4. Confidentiality & Privacy */}
                        <div className="mb-10 pb-10 border-b border-slate-100">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-full bg-[#dead01]/10 flex items-center justify-center">
                                    <span className="text-[#dead01] font-black">4</span>
                                </div>
                                <h2 className="text-xl font-black text-[#072b47]">Confidentiality & Privacy</h2>
                            </div>
                            <p className="text-slate-600 leading-relaxed pl-11">
                                Any information shared with VyomBiz will be handled in accordance with our Privacy Policy. By using our platform, you consent to the collection and use of your information as described therein.
                            </p>
                        </div>

                        {/* 5. Disclaimer of Warranties */}
                        <div className="mb-10 pb-10 border-b border-slate-100">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-full bg-[#dead01]/10 flex items-center justify-center">
                                    <span className="text-[#dead01] font-black">5</span>
                                </div>
                                <h2 className="text-xl font-black text-[#072b47]">Disclaimer of Warranties</h2>
                            </div>
                            <p className="text-slate-600 leading-relaxed pl-11">
                                All services are provided on an "as-is" and "as-available" basis without any express or implied warranties.
                            </p>
                        </div>

                        {/* 6. Limitation of Liability */}
                        <div className="mb-10 pb-10 border-b border-slate-100">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-full bg-[#dead01]/10 flex items-center justify-center">
                                    <span className="text-[#dead01] font-black">6</span>
                                </div>
                                <h2 className="text-xl font-black text-[#072b47]">Limitation of Liability</h2>
                            </div>
                            <p className="text-slate-600 leading-relaxed pl-11">
                                To the fullest extent permitted by applicable law, VyomBiz shall not be liable for any indirect, incidental, or consequential damages. Our total liability, if any, shall not exceed the amount paid for the specific service in question.
                            </p>
                        </div>

                        {/* 7. Intellectual Property */}
                        <div className="mb-10 pb-10 border-b border-slate-100">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-full bg-[#dead01]/10 flex items-center justify-center">
                                    <span className="text-[#dead01] font-black">7</span>
                                </div>
                                <h2 className="text-xl font-black text-[#072b47]">Intellectual Property</h2>
                            </div>
                            <p className="text-slate-600 leading-relaxed pl-11">
                                All website content, branding, trademarks, and materials remain the exclusive property of VyomBiz and may not be copied, reproduced, or used without prior written consent.
                            </p>
                        </div>

                        {/* 8. Indemnification */}
                        <div className="mb-10 pb-10 border-b border-slate-100">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-full bg-[#dead01]/10 flex items-center justify-center">
                                    <span className="text-[#dead01] font-black">8</span>
                                </div>
                                <h2 className="text-xl font-black text-[#072b47]">Indemnification</h2>
                            </div>
                            <p className="text-slate-600 leading-relaxed pl-11">
                                You agree to indemnify and hold VyomBiz harmless from any claims, liabilities, or damages arising from misuse of services or breach of these Terms.
                            </p>
                        </div>

                        {/* 9. Governing Law */}
                        <div className="mb-10 pb-10 border-b border-slate-100">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-full bg-[#dead01]/10 flex items-center justify-center">
                                    <span className="text-[#dead01] font-black">9</span>
                                </div>
                                <h2 className="text-xl font-black text-[#072b47]">Governing Law</h2>
                            </div>
                            <p className="text-slate-600 leading-relaxed pl-11">
                                These Terms shall be governed and interpreted in accordance with the laws of India. Any disputes shall fall under the exclusive jurisdiction of the courts of [City].
                            </p>
                        </div>

                        {/* 10. Amendments to Terms */}
                        <div className="">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-full bg-[#dead01]/10 flex items-center justify-center">
                                    <span className="text-[#dead01] font-black">10</span>
                                </div>
                                <h2 className="text-xl font-black text-[#072b47]">Amendments to Terms</h2>
                            </div>
                            <p className="text-slate-600 leading-relaxed pl-11">
                                VyomBiz reserves the right to update or revise these Terms at its discretion. Continued use of the platform after changes are made constitutes acceptance of the revised Terms.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TermsAndConditions;