import React from 'react';
import { AlertCircle, Scale, Users, Link as LinkIcon, Shield, FileText, RefreshCw, Globe } from 'lucide-react';

const Disclaimer = () => {
    return (
        <div className="bg-white min-h-screen font-sans">
            {/* Hero Section */}
            <section className="relative bg-white pt-32 pb-16 overflow-hidden">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-[#005a9c] text-sm font-bold uppercase tracking-wider mb-6">
                            <AlertCircle size={16} />
                            <span>Important Notice</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black text-[#072b47] mb-6">
                            <span className="text-[#dead01]">Disclaimer</span>
                        </h1>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Please read this disclaimer carefully before using our platform or services.
                        </p>
                    </div>
                </div>
            </section>

            {/* Disclaimer Content */}
            <section className="py-12 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-3xl border border-slate-200 shadow-lg p-8 md:p-12">
                        
                        {/* 1. General Information */}
                        <div className="mb-10 pb-10 border-b border-slate-100">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-full bg-[#dead01]/10 flex items-center justify-center flex-shrink-0">
                                    <span className="text-[#dead01] font-black">1</span>
                                </div>
                                <h2 className="text-xl font-black text-[#072b47]">General Information</h2>
                            </div>
                            <div className="pl-11 space-y-3">
                                <p className="text-slate-600 leading-relaxed">
                                    <span className="font-bold text-[#072b47]">Statement</span> that content on the website is for general informational purposes only
                                </p>
                                <p className="text-slate-600 leading-relaxed">
                                    <span className="font-bold text-[#072b47]">No guarantee</span> of completeness, accuracy, or timeliness
                                </p>
                            </div>
                        </div>

                        {/* 2. No Professional Relationship */}
                        <div className="mb-10 pb-10 border-b border-slate-100">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-full bg-[#dead01]/10 flex items-center justify-center flex-shrink-0">
                                    <span className="text-[#dead01] font-black">2</span>
                                </div>
                                <h2 className="text-xl font-black text-[#072b47]">No Professional Relationship</h2>
                            </div>
                            <ul className="pl-11 space-y-3">
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2.5"></span>
                                    <span className="text-slate-600">Use of platform does not automatically create a lawyer-client, CA-client, or professional-client relationship</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2.5"></span>
                                    <span className="text-slate-600">Relationship is established only after formal engagement</span>
                                </li>
                            </ul>
                            <div className="mt-4 pl-11">
                                <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-100">
                                    <p className="text-sm text-slate-700 flex items-start gap-2">
                                        <Scale className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                                        <span>Accessing information or using platform features does not constitute a professional-client relationship.</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 3. Independent Professionals */}
                        <div className="mb-10 pb-10 border-b border-slate-100">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-full bg-[#dead01]/10 flex items-center justify-center flex-shrink-0">
                                    <span className="text-[#dead01] font-black">3</span>
                                </div>
                                <h2 className="text-xl font-black text-[#072b47]">Independent Professionals</h2>
                            </div>
                            <ul className="pl-11 space-y-3">
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2.5"></span>
                                    <span className="text-slate-600">VyomBiz acts as a facilitator</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2.5"></span>
                                    <span className="text-slate-600">Not responsible for advice, opinions, or outcomes provided by independent professionals</span>
                                </li>
                            </ul>
                            <div className="mt-4 pl-11">
                                <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                                    <p className="text-sm text-slate-700 flex items-start gap-2">
                                        <Users className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                                        <span>All professionals on our platform are independent contractors and not employees of VyomBiz.</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 4. No Legal or Financial Guarantee */}
                        <div className="mb-10 pb-10 border-b border-slate-100">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-full bg-[#dead01]/10 flex items-center justify-center flex-shrink-0">
                                    <span className="text-[#dead01] font-black">4</span>
                                </div>
                                <h2 className="text-xl font-black text-[#072b47]">No Legal or Financial Guarantee</h2>
                            </div>
                            <ul className="pl-11 space-y-3">
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2.5"></span>
                                    <span className="text-slate-600">No assurance of approvals, registrations, licenses, or government outcomes</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2.5"></span>
                                    <span className="text-slate-600">Results may vary based on case specifics and regulatory authorities</span>
                                </li>
                            </ul>
                        </div>

                        {/* 5. Third-Party Links & Content */}
                        <div className="mb-10 pb-10 border-b border-slate-100">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-full bg-[#dead01]/10 flex items-center justify-center flex-shrink-0">
                                    <span className="text-[#dead01] font-black">5</span>
                                </div>
                                <h2 className="text-xl font-black text-[#072b47]">Third-Party Links & Content</h2>
                            </div>
                            <ul className="pl-11 space-y-3">
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2.5"></span>
                                    <span className="text-slate-600">Website may contain links to third-party sites</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2.5"></span>
                                    <span className="text-slate-600">VyomBiz not responsible for their content, accuracy, or privacy practices</span>
                                </li>
                            </ul>
                            <div className="mt-4 pl-11">
                                <div className="bg-purple-50 p-4 rounded-xl border border-purple-100">
                                    <p className="text-sm text-slate-700 flex items-start gap-2">
                                        <LinkIcon className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                                        <span>External links are provided for convenience only. We do not endorse or control third-party content.</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 6. Limitation of Liability */}
                        <div className="mb-10 pb-10 border-b border-slate-100">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-full bg-[#dead01]/10 flex items-center justify-center flex-shrink-0">
                                    <span className="text-[#dead01] font-black">6</span>
                                </div>
                                <h2 className="text-xl font-black text-[#072b47]">Limitation of Liability</h2>
                            </div>
                            <ul className="pl-11 space-y-3">
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2.5"></span>
                                    <span className="text-slate-600">No liability for direct, indirect, incidental, or consequential damages</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2.5"></span>
                                    <span className="text-slate-600">Users assume responsibility for decisions taken based on information provided</span>
                                </li>
                            </ul>
                            <div className="mt-4 pl-11">
                                <div className="bg-red-50 p-4 rounded-xl border border-red-100">
                                    <p className="text-sm text-slate-700 flex items-start gap-2">
                                        <Shield className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                                        <span>To the fullest extent permitted by law, VyomBiz disclaims all liability for any loss or damage arising from use of this platform.</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 7. Compliance Responsibility */}
                        <div className="mb-10 pb-10 border-b border-slate-100">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-full bg-[#dead01]/10 flex items-center justify-center flex-shrink-0">
                                    <span className="text-[#dead01] font-black">7</span>
                                </div>
                                <h2 className="text-xl font-black text-[#072b47]">Compliance Responsibility</h2>
                            </div>
                            <ul className="pl-11 space-y-3">
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2.5"></span>
                                    <span className="text-slate-600">Users are responsible for providing accurate information and required documentation</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2.5"></span>
                                    <span className="text-slate-600">Delays due to incomplete or incorrect information are not the platform's liability</span>
                                </li>
                            </ul>
                        </div>

                        {/* 8. Changes to Disclaimer */}
                        <div className="mb-10 pb-10 border-b border-slate-100">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-full bg-[#dead01]/10 flex items-center justify-center flex-shrink-0">
                                    <span className="text-[#dead01] font-black">8</span>
                                </div>
                                <h2 className="text-xl font-black text-[#072b47]">Changes to Disclaimer</h2>
                            </div>
                            <ul className="pl-11 space-y-3">
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2.5"></span>
                                    <span className="text-slate-600">Right to modify the disclaimer at any time</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2.5"></span>
                                    <span className="text-slate-600">Continued use implies acceptance of updates</span>
                                </li>
                            </ul>
                            <div className="mt-4 pl-11">
                                <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                                    <p className="text-sm text-slate-700 flex items-start gap-2">
                                        <RefreshCw className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                                        <span>We recommend reviewing this disclaimer periodically for any changes.</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 9. Governing Law */}
                        <div className="">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-full bg-[#dead01]/10 flex items-center justify-center flex-shrink-0">
                                    <span className="text-[#dead01] font-black">9</span>
                                </div>
                                <h2 className="text-xl font-black text-[#072b47]">Governing Law</h2>
                            </div>
                            <ul className="pl-11 space-y-3">
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2.5"></span>
                                    <span className="text-slate-600">Applicable laws</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2.5"></span>
                                    <span className="text-slate-600">Jurisdiction for dispute resolution</span>
                                </li>
                            </ul>
                            <div className="mt-4 pl-11">
                                <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                                    <p className="text-sm text-slate-700 flex items-start gap-2">
                                        <Globe className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                        <span>This disclaimer shall be governed by the laws of India. Any disputes shall fall under the exclusive jurisdiction of the courts of [City].</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Summary Note */}
                        <div className="mt-12 pt-6 border-t border-slate-200">
                            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                                <h3 className="font-bold text-[#072b47] mb-3 flex items-center gap-2">
                                    <FileText className="w-5 h-5 text-[#005a9c]" />
                                    Important Acknowledgment
                                </h3>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    By using this platform, you acknowledge that you have read, understood, and agree to be bound by this disclaimer. If you do not agree with any part of this disclaimer, please refrain from using our services.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Disclaimer;