import React from 'react';
import { Shield, Clock, RefreshCw, FileText, AlertCircle, Mail, CreditCard, Scale, Calendar } from 'lucide-react';

const RefundPolicy = () => {
    return (
        <div className="bg-white min-h-screen font-sans">
            {/* Hero Section */}
            <section className="relative bg-white pt-32 pb-16 overflow-hidden">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-[#005a9c] text-sm font-bold uppercase tracking-wider mb-6">
                            <RefreshCw size={16} />
                            <span>Payments & Refunds</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black text-[#072b47] mb-6">
                            Refund <span className="text-[#dead01]">Policy</span>
                        </h1>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Outline Draft – Transparent and Fair Refund Practices
                        </p>
                    </div>
                </div>
            </section>

            {/* Policy Content */}
            <section className="py-12 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-3xl border border-slate-200 shadow-lg p-8 md:p-12">
                        
                        {/* 1. Introduction */}
                        <div className="mb-10 pb-10 border-b border-slate-100">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-full bg-[#dead01]/10 flex items-center justify-center flex-shrink-0">
                                    <span className="text-[#dead01] font-black">1</span>
                                </div>
                                <h2 className="text-xl font-black text-[#072b47]">Introduction</h2>
                            </div>
                            <div className="pl-11 space-y-3">
                                <p className="text-slate-600 leading-relaxed">
                                    <span className="font-bold text-[#072b47]">Brief statement</span> about VyomBiz's commitment to transparency
                                </p>
                                <p className="text-slate-600 leading-relaxed">
                                    <span className="font-bold text-[#072b47]">Mention</span> that refunds are governed by this policy
                                </p>
                            </div>
                        </div>

                        {/* 2. Eligibility for Refund */}
                        <div className="mb-10 pb-10 border-b border-slate-100">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-full bg-[#dead01]/10 flex items-center justify-center flex-shrink-0">
                                    <span className="text-[#dead01] font-black">2</span>
                                </div>
                                <h2 className="text-xl font-black text-[#072b47]">Eligibility for Refund</h2>
                            </div>
                            <ul className="pl-11 space-y-2">
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2.5"></span>
                                    <span className="text-slate-600">Services eligible for refund</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2.5"></span>
                                    <span className="text-slate-600">Conditions under which refunds may be considered</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2.5"></span>
                                    <span className="text-slate-600">Situations where refund requests may be rejected</span>
                                </li>
                            </ul>
                        </div>

                        {/* 3. Non-Refundable Services */}
                        <div className="mb-10 pb-10 border-b border-slate-100">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-full bg-[#dead01]/10 flex items-center justify-center flex-shrink-0">
                                    <span className="text-[#dead01] font-black">3</span>
                                </div>
                                <h2 className="text-xl font-black text-[#072b47]">Non-Refundable Services</h2>
                            </div>
                            <ul className="pl-11 space-y-2">
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2.5"></span>
                                    <span className="text-slate-600">Government fees and statutory charges</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2.5"></span>
                                    <span className="text-slate-600">Payments made to third-party professionals</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2.5"></span>
                                    <span className="text-slate-600">Services already initiated or completed</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2.5"></span>
                                    <span className="text-slate-600">Consultation fees (if applicable)</span>
                                </li>
                            </ul>
                            <div className="mt-4 pl-11">
                                <div className="bg-red-50 p-4 rounded-xl border border-red-100">
                                    <p className="text-sm text-slate-700 flex items-start gap-2">
                                        <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                                        <span>These charges are typically not refundable as they are paid to external authorities or professionals.</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 4. Cancellation Policy */}
                        <div className="mb-10 pb-10 border-b border-slate-100">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-full bg-[#dead01]/10 flex items-center justify-center flex-shrink-0">
                                    <span className="text-[#dead01] font-black">4</span>
                                </div>
                                <h2 className="text-xl font-black text-[#072b47]">Cancellation Policy</h2>
                            </div>
                            <ul className="pl-11 space-y-2">
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2.5"></span>
                                    <span className="text-slate-600">Timeframe for cancellation requests</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2.5"></span>
                                    <span className="text-slate-600">Process for requesting cancellation</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2.5"></span>
                                    <span className="text-slate-600">Impact of cancellation after work has started</span>
                                </li>
                            </ul>
                        </div>

                        {/* 5. Refund Process */}
                        <div className="mb-10 pb-10 border-b border-slate-100">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-full bg-[#dead01]/10 flex items-center justify-center flex-shrink-0">
                                    <span className="text-[#dead01] font-black">5</span>
                                </div>
                                <h2 className="text-xl font-black text-[#072b47]">Refund Process</h2>
                            </div>
                            <ul className="pl-11 space-y-2">
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2.5"></span>
                                    <span className="text-slate-600">How to request a refund (email/contact method)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2.5"></span>
                                    <span className="text-slate-600">Required details for refund request</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2.5"></span>
                                    <span className="text-slate-600">Verification process</span>
                                </li>
                            </ul>
                        </div>

                        {/* 6. Refund Timeline */}
                        <div className="mb-10 pb-10 border-b border-slate-100">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-full bg-[#dead01]/10 flex items-center justify-center flex-shrink-0">
                                    <span className="text-[#dead01] font-black">6</span>
                                </div>
                                <h2 className="text-xl font-black text-[#072b47]">Refund Timeline</h2>
                            </div>
                            <ul className="pl-11 space-y-2">
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2.5"></span>
                                    <span className="text-slate-600">Estimated processing time</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2.5"></span>
                                    <span className="text-slate-600">Mode of refund (original payment method, bank transfer, etc.)</span>
                                </li>
                            </ul>
                        </div>

                        {/* 7. Partial Refunds */}
                        <div className="mb-10 pb-10 border-b border-slate-100">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-full bg-[#dead01]/10 flex items-center justify-center flex-shrink-0">
                                    <span className="text-[#dead01] font-black">7</span>
                                </div>
                                <h2 className="text-xl font-black text-[#072b47]">Partial Refunds</h2>
                            </div>
                            <ul className="pl-11 space-y-2">
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2.5"></span>
                                    <span className="text-slate-600">Cases where only a portion of fees may be refunded</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2.5"></span>
                                    <span className="text-slate-600">Deduction of service charges or administrative costs</span>
                                </li>
                            </ul>
                        </div>

                        {/* 8. Exceptional Circumstances */}
                        <div className="mb-10 pb-10 border-b border-slate-100">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-full bg-[#dead01]/10 flex items-center justify-center flex-shrink-0">
                                    <span className="text-[#dead01] font-black">8</span>
                                </div>
                                <h2 className="text-xl font-black text-[#072b47]">Exceptional Circumstances</h2>
                            </div>
                            <ul className="pl-11 space-y-2">
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2.5"></span>
                                    <span className="text-slate-600">Delays caused by government authorities</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2.5"></span>
                                    <span className="text-slate-600">Incomplete documentation from client</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2.5"></span>
                                    <span className="text-slate-600">Force majeure events</span>
                                </li>
                            </ul>
                        </div>

                        {/* 9. Dispute Resolution */}
                        <div className="mb-10 pb-10 border-b border-slate-100">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-full bg-[#dead01]/10 flex items-center justify-center flex-shrink-0">
                                    <span className="text-[#dead01] font-black">9</span>
                                </div>
                                <h2 className="text-xl font-black text-[#072b47]">Dispute Resolution</h2>
                            </div>
                            <ul className="pl-11 space-y-2">
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2.5"></span>
                                    <span className="text-slate-600">Escalation process</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2.5"></span>
                                    <span className="text-slate-600">Governing law and jurisdiction</span>
                                </li>
                            </ul>
                        </div>

                        {/* 10. Policy Updates */}
                        <div className="">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-full bg-[#dead01]/10 flex items-center justify-center flex-shrink-0">
                                    <span className="text-[#dead01] font-black">10</span>
                                </div>
                                <h2 className="text-xl font-black text-[#072b47]">Policy Updates</h2>
                            </div>
                            <ul className="pl-11 space-y-2">
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2.5"></span>
                                    <span className="text-slate-600">Right to modify refund policy</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2.5"></span>
                                    <span className="text-slate-600">Effective date of changes</span>
                                </li>
                            </ul>
                        </div>

                        {/* Summary Note */}
                        <div className="mt-12 pt-6 border-t border-slate-200">
                            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                                <h3 className="font-bold text-[#072b47] mb-3 flex items-center gap-2">
                                    <Shield className="w-5 h-5 text-[#005a9c]" />
                                    Our Commitment
                                </h3>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    VyomBiz is committed to fair and transparent refund practices. All refund requests are evaluated on a case-by-case basis in accordance with this policy. For any questions, please contact our support team.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RefundPolicy;