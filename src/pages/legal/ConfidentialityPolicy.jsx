import React from 'react';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

const ConfidentialityPolicy = () => {
    return (
        <div className="bg-white min-h-screen font-sans">
            {/* Hero Section */}
            <section className="relative bg-white pt-32 pb-16 overflow-hidden">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-[#005a9c] text-sm font-bold uppercase tracking-wider mb-6">
                            <Shield size={16} />
                            <span>Privacy & Security</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black text-[#072b47] mb-6">
                            Confidentiality <span className="text-[#dead01]">Policy</span>
                        </h1>
                        <p className="text-lg text-slate-600">
                            Outline Draft – Protecting Your Information
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
                                    <span className="font-bold text-[#072b47]">Statement of commitment</span> to protecting client information
                                </p>
                                <p className="text-slate-600 leading-relaxed">
                                    <span className="font-bold text-[#072b47]">Purpose</span> of the Confidentiality Policy
                                </p>
                                <p className="text-slate-600 leading-relaxed">
                                    <span className="font-bold text-[#072b47]">Scope</span> (who it applies to – users, professionals, employees, partners)
                                </p>
                            </div>
                        </div>

                        {/* 2. Definition of Confidential Information */}
                        <div className="mb-10 pb-10 border-b border-slate-100">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-full bg-[#dead01]/10 flex items-center justify-center flex-shrink-0">
                                    <span className="text-[#dead01] font-black">2</span>
                                </div>
                                <h2 className="text-xl font-black text-[#072b47]">Definition of Confidential Information</h2>
                            </div>
                            <ul className="pl-11 space-y-2">
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2.5"></span>
                                    <span className="text-slate-600">Personal information</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2.5"></span>
                                    <span className="text-slate-600">Business information and documents</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2.5"></span>
                                    <span className="text-slate-600">Financial data</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2.5"></span>
                                    <span className="text-slate-600">Legal records and compliance documents</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2.5"></span>
                                    <span className="text-slate-600">Any non-public information shared during service engagement</span>
                                </li>
                            </ul>
                        </div>

                        {/* 3. Collection of Confidential Information */}
                        <div className="mb-10 pb-10 border-b border-slate-100">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-full bg-[#dead01]/10 flex items-center justify-center flex-shrink-0">
                                    <span className="text-[#dead01] font-black">3</span>
                                </div>
                                <h2 className="text-xl font-black text-[#072b47]">Collection of Confidential Information</h2>
                            </div>
                            <ul className="pl-11 space-y-2">
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2.5"></span>
                                    <span className="text-slate-600">How information is collected (website forms, email, documents, consultations)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2.5"></span>
                                    <span className="text-slate-600">Voluntary submission by clients</span>
                                </li>
                            </ul>
                        </div>

                        {/* 4. Use of Confidential Information */}
                        <div className="mb-10 pb-10 border-b border-slate-100">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-full bg-[#dead01]/10 flex items-center justify-center flex-shrink-0">
                                    <span className="text-[#dead01] font-black">4</span>
                                </div>
                                <h2 className="text-xl font-black text-[#072b47]">Use of Confidential Information</h2>
                            </div>
                            <ul className="pl-11 space-y-2">
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2.5"></span>
                                    <span className="text-slate-600">Delivering requested services</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2.5"></span>
                                    <span className="text-slate-600">Connecting clients with relevant professionals</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2.5"></span>
                                    <span className="text-slate-600">Legal and regulatory compliance</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2.5"></span>
                                    <span className="text-slate-600">Internal quality and service improvement</span>
                                </li>
                            </ul>
                        </div>

                        {/* 5. Disclosure of Information */}
                        <div className="mb-10 pb-10 border-b border-slate-100">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-full bg-[#dead01]/10 flex items-center justify-center flex-shrink-0">
                                    <span className="text-[#dead01] font-black">5</span>
                                </div>
                                <h2 className="text-xl font-black text-[#072b47]">Disclosure of Information</h2>
                            </div>
                            <ul className="pl-11 space-y-2">
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2.5"></span>
                                    <span className="text-slate-600">Sharing only with authorized independent professionals</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2.5"></span>
                                    <span className="text-slate-600">Disclosure required by law or regulatory authorities</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2.5"></span>
                                    <span className="text-slate-600">No sale or unauthorized sharing of data</span>
                                </li>
                            </ul>
                        </div>

                        {/* 6. Data Protection Measures */}
                        <div className="mb-10 pb-10 border-b border-slate-100">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-full bg-[#dead01]/10 flex items-center justify-center flex-shrink-0">
                                    <span className="text-[#dead01] font-black">6</span>
                                </div>
                                <h2 className="text-xl font-black text-[#072b47]">Data Protection Measures</h2>
                            </div>
                            <ul className="pl-11 space-y-2">
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2.5"></span>
                                    <span className="text-slate-600">Technical safeguards (encryption, secure servers, access controls)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2.5"></span>
                                    <span className="text-slate-600">Organizational safeguards (restricted access, confidentiality agreements)</span>
                                </li>
                            </ul>
                        </div>

                        {/* 7. Retention of Information */}
                        <div className="mb-10 pb-10 border-b border-slate-100">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-full bg-[#dead01]/10 flex items-center justify-center flex-shrink-0">
                                    <span className="text-[#dead01] font-black">7</span>
                                </div>
                                <h2 className="text-xl font-black text-[#072b47]">Retention of Information</h2>
                            </div>
                            <ul className="pl-11 space-y-2">
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2.5"></span>
                                    <span className="text-slate-600">Duration of data storage</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2.5"></span>
                                    <span className="text-slate-600">Compliance with legal retention requirements</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2.5"></span>
                                    <span className="text-slate-600">Secure disposal practices</span>
                                </li>
                            </ul>
                        </div>

                        {/* 8. Client Responsibilities */}
                        <div className="mb-10 pb-10 border-b border-slate-100">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-full bg-[#dead01]/10 flex items-center justify-center flex-shrink-0">
                                    <span className="text-[#dead01] font-black">8</span>
                                </div>
                                <h2 className="text-xl font-black text-[#072b47]">Client Responsibilities</h2>
                            </div>
                            <ul className="pl-11 space-y-2">
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2.5"></span>
                                    <span className="text-slate-600">Providing accurate information</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2.5"></span>
                                    <span className="text-slate-600">Safeguarding login credentials</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2.5"></span>
                                    <span className="text-slate-600">Not sharing confidential access details</span>
                                </li>
                            </ul>
                        </div>

                        {/* 9. Breach Management */}
                        <div className="mb-10 pb-10 border-b border-slate-100">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-full bg-[#dead01]/10 flex items-center justify-center flex-shrink-0">
                                    <span className="text-[#dead01] font-black">9</span>
                                </div>
                                <h2 className="text-xl font-black text-[#072b47]">Breach Management</h2>
                            </div>
                            <ul className="pl-11 space-y-2">
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2.5"></span>
                                    <span className="text-slate-600">Steps taken in case of data breach</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2.5"></span>
                                    <span className="text-slate-600">Notification procedures (if required by law)</span>
                                </li>
                            </ul>
                        </div>

                        {/* 10. Governing Law */}
                        <div className="mb-10 pb-10 border-b border-slate-100">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-full bg-[#dead01]/10 flex items-center justify-center flex-shrink-0">
                                    <span className="text-[#dead01] font-black">10</span>
                                </div>
                                <h2 className="text-xl font-black text-[#072b47]">Governing Law</h2>
                            </div>
                            <ul className="pl-11 space-y-2">
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2.5"></span>
                                    <span className="text-slate-600">Applicable laws</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2.5"></span>
                                    <span className="text-slate-600">Jurisdiction for disputes</span>
                                </li>
                            </ul>
                        </div>

                        {/* 11. Policy Updates */}
                        <div className="">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-full bg-[#dead01]/10 flex items-center justify-center flex-shrink-0">
                                    <span className="text-[#dead01] font-black">11</span>
                                </div>
                                <h2 className="text-xl font-black text-[#072b47]">Policy Updates</h2>
                            </div>
                            <ul className="pl-11 space-y-2">
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2.5"></span>
                                    <span className="text-slate-600">Right to amend the policy</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2.5"></span>
                                    <span className="text-slate-600">Effective date of revisions</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ConfidentialityPolicy;