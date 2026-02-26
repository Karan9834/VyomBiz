import React from 'react';
import { Shield, Lock, Eye, FileText, Mail, Building, Globe, Cookie, Users, Server, ExternalLink } from 'lucide-react';

const PrivacyPolicy = () => {
    return (
        <div className="bg-white min-h-screen font-sans">
            {/* Hero Section */}
            <section className="relative bg-white pt-32 pb-16 overflow-hidden">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-[#005a9c] text-sm font-bold uppercase tracking-wider mb-6">
                            <Shield size={16} />
                            <span>Data Protection</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black text-[#072b47] mb-6">
                            Privacy <span className="text-[#dead01]">Policy</span>
                        </h1>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            This Privacy Policy explains how this platform collects, uses, stores, and protects personal and business information of users, clients, and partners.
                        </p>
                        <div className="mt-4 p-4 bg-blue-50 rounded-xl border border-blue-100 inline-block">
                            <p className="text-sm text-[#072b47]">
                                <span className="font-bold">Managed by:</span> Kryoss Softech Private Limited, which oversees technology, compliance, and operational integrity.
                            </p>
                        </div>
                        <p className="text-sm text-slate-500 mt-6">
                            By using the website or any associated services, you consent to the practices described in this Policy.
                        </p>
                    </div>
                </div>
            </section>

            {/* Policy Content */}
            <section className="py-12 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-3xl border border-slate-200 shadow-lg p-8 md:p-12">
                        
                        {/* 1. Information We Collect */}
                        <div className="mb-10 pb-10 border-b border-slate-100">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-8 h-8 rounded-full bg-[#dead01]/10 flex items-center justify-center flex-shrink-0">
                                    <span className="text-[#dead01] font-black">1</span>
                                </div>
                                <h2 className="text-xl font-black text-[#072b47]">Information We Collect</h2>
                            </div>
                            
                            <div className="pl-11 space-y-6">
                                <div>
                                    <h3 className="font-bold text-[#072b47] mb-3">a) Personal Information</h3>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2"></span>
                                            <span className="text-slate-600">Name, email address, phone number, and contact details</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2"></span>
                                            <span className="text-slate-600">Job title or professional information (if applicable)</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2"></span>
                                            <span className="text-slate-600">Billing and communication addresses</span>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="font-bold text-[#072b47] mb-3">b) Business Information</h3>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2"></span>
                                            <span className="text-slate-600">Company name, domain, and registration details</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2"></span>
                                            <span className="text-slate-600">Service preferences and project requirements</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2"></span>
                                            <span className="text-slate-600">Transactional data and correspondence history</span>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="font-bold text-[#072b47] mb-3">c) Technical Information</h3>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2"></span>
                                            <span className="text-slate-600">IP address, browser type, and device information</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2"></span>
                                            <span className="text-slate-600">Usage analytics and interaction patterns</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2"></span>
                                            <span className="text-slate-600">Cookies or similar tracking technologies</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* 2. How We Use Collected Information */}
                        <div className="mb-10 pb-10 border-b border-slate-100">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-full bg-[#dead01]/10 flex items-center justify-center flex-shrink-0">
                                    <span className="text-[#dead01] font-black">2</span>
                                </div>
                                <h2 className="text-xl font-black text-[#072b47]">How We Use Collected Information</h2>
                            </div>
                            <div className="pl-11">
                                <p className="text-slate-600 mb-3">The information is used solely for:</p>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2"></span>
                                        <span className="text-slate-600">Providing business setup, operational, and support services</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2"></span>
                                        <span className="text-slate-600">Communicating project or partnership updates</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2"></span>
                                        <span className="text-slate-600">Improving platform performance and user experience</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2"></span>
                                        <span className="text-slate-600">Legal, regulatory, or compliance purposes</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2"></span>
                                        <span className="text-slate-600">Internal record-keeping and analytics</span>
                                    </li>
                                </ul>
                                <p className="text-sm font-bold text-[#072b47] mt-4 bg-yellow-50 p-3 rounded-xl border border-yellow-100">
                                    No personal or business data is sold, rented, or traded for marketing purposes.
                                </p>
                            </div>
                        </div>

                        {/* 3. Data Sharing & Disclosure */}
                        <div className="mb-10 pb-10 border-b border-slate-100">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-full bg-[#dead01]/10 flex items-center justify-center flex-shrink-0">
                                    <span className="text-[#dead01] font-black">3</span>
                                </div>
                                <h2 className="text-xl font-black text-[#072b47]">Data Sharing & Disclosure</h2>
                            </div>
                            <div className="pl-11">
                                <p className="text-slate-600 mb-3">Information may be shared only under these circumstances:</p>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2"></span>
                                        <span className="text-slate-600">With authorized employees, vendors, or partners involved in service execution</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2"></span>
                                        <span className="text-slate-600">With legal or regulatory authorities if required by law</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2"></span>
                                        <span className="text-slate-600">With third-party service providers for technical or operational support under confidentiality obligations</span>
                                    </li>
                                </ul>
                                <p className="text-sm font-bold text-[#072b47] mt-4">
                                    All third parties are bound by data protection agreements.
                                </p>
                            </div>
                        </div>

                        {/* 4. Data Retention */}
                        <div className="mb-10 pb-10 border-b border-slate-100">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-full bg-[#dead01]/10 flex items-center justify-center flex-shrink-0">
                                    <span className="text-[#dead01] font-black">4</span>
                                </div>
                                <h2 className="text-xl font-black text-[#072b47]">Data Retention</h2>
                            </div>
                            <div className="pl-11">
                                <p className="text-slate-600 mb-3">Information is retained only as long as necessary to:</p>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2"></span>
                                        <span className="text-slate-600">Fulfil contractual and operational purposes</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2"></span>
                                        <span className="text-slate-600">Comply with legal requirements</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2"></span>
                                        <span className="text-slate-600">Support audit and dispute resolution processes</span>
                                    </li>
                                </ul>
                                <p className="text-slate-600 mt-3">
                                    Data no longer required is securely deleted or anonymized.
                                </p>
                            </div>
                        </div>

                        {/* 5. Data Security */}
                        <div className="mb-10 pb-10 border-b border-slate-100">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-full bg-[#dead01]/10 flex items-center justify-center flex-shrink-0">
                                    <span className="text-[#dead01] font-black">5</span>
                                </div>
                                <h2 className="text-xl font-black text-[#072b47]">Data Security</h2>
                            </div>
                            <div className="pl-11">
                                <p className="text-slate-600 mb-3">The platform employs:</p>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2"></span>
                                        <span className="text-slate-600">Encryption and access control</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2"></span>
                                        <span className="text-slate-600">Secure servers and firewalls</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2"></span>
                                        <span className="text-slate-600">Role-based permissions</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2"></span>
                                        <span className="text-slate-600">Regular system audits</span>
                                    </li>
                                </ul>
                                <p className="text-sm text-slate-500 mt-4 italic">
                                    While robust measures are implemented, no online platform can guarantee absolute security. Users share data at their own discretion.
                                </p>
                            </div>
                        </div>

                        {/* 6. User Rights */}
                        <div className="mb-10 pb-10 border-b border-slate-100">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-full bg-[#dead01]/10 flex items-center justify-center flex-shrink-0">
                                    <span className="text-[#dead01] font-black">6</span>
                                </div>
                                <h2 className="text-xl font-black text-[#072b47]">User Rights</h2>
                            </div>
                            <div className="pl-11">
                                <p className="text-slate-600 mb-3">Users and partners may:</p>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2"></span>
                                        <span className="text-slate-600">Request access to their stored data</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2"></span>
                                        <span className="text-slate-600">Request corrections or updates</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2"></span>
                                        <span className="text-slate-600">Request deletion, subject to contractual or legal obligations</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2"></span>
                                        <span className="text-slate-600">Withdraw consent where applicable</span>
                                    </li>
                                </ul>
                                <p className="text-slate-600 mt-3">
                                    Requests can be made through the official contact form.
                                </p>
                            </div>
                        </div>

                        {/* 7. Cookies & Tracking Technologies */}
                        <div className="mb-10 pb-10 border-b border-slate-100">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-full bg-[#dead01]/10 flex items-center justify-center flex-shrink-0">
                                    <span className="text-[#dead01] font-black">7</span>
                                </div>
                                <h2 className="text-xl font-black text-[#072b47]">Cookies & Tracking Technologies</h2>
                            </div>
                            <div className="pl-11">
                                <p className="text-slate-600 mb-3">Cookies are used to:</p>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2"></span>
                                        <span className="text-slate-600">Enhance navigation and functionality</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2"></span>
                                        <span className="text-slate-600">Analyze website traffic and usage trends</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#dead01] mt-2"></span>
                                        <span className="text-slate-600">Customize content and experience</span>
                                    </li>
                                </ul>
                                <p className="text-slate-600 mt-3">
                                    Users can disable cookies through browser settings, but certain features may be affected.
                                </p>
                            </div>
                        </div>

                        {/* 8. Data Transfers */}
                        <div className="mb-10 pb-10 border-b border-slate-100">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-full bg-[#dead01]/10 flex items-center justify-center flex-shrink-0">
                                    <span className="text-[#dead01] font-black">8</span>
                                </div>
                                <h2 className="text-xl font-black text-[#072b47]">Data Transfers</h2>
                            </div>
                            <div className="pl-11">
                                <p className="text-slate-600">
                                    Data may be processed or stored in jurisdictions where the platform or its service providers operate. All transfers comply with applicable data protection laws and contractual safeguards.
                                </p>
                            </div>
                        </div>

                        {/* 9. Third-Party Links */}
                        <div className="mb-10 pb-10 border-b border-slate-100">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-full bg-[#dead01]/10 flex items-center justify-center flex-shrink-0">
                                    <span className="text-[#dead01] font-black">9</span>
                                </div>
                                <h2 className="text-xl font-black text-[#072b47]">Third-Party Links</h2>
                            </div>
                            <div className="pl-11">
                                <p className="text-slate-600">
                                    The website may contain links to external sites. This Policy does not apply to those sites; users are encouraged to review each site's privacy policy independently.
                                </p>
                            </div>
                        </div>

                        {/* 10. Children's Privacy */}
                        <div className="mb-10 pb-10 border-b border-slate-100">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-full bg-[#dead01]/10 flex items-center justify-center flex-shrink-0">
                                    <span className="text-[#dead01] font-black">10</span>
                                </div>
                                <h2 className="text-xl font-black text-[#072b47]">Children's Privacy</h2>
                            </div>
                            <div className="pl-11">
                                <p className="text-slate-600">
                                    This platform is not intended for individuals under 18 years of age. No data is knowingly collected from minors.
                                </p>
                            </div>
                        </div>

                        {/* 11. Policy Updates */}
                        <div className="mb-10 pb-10 border-b border-slate-100">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-full bg-[#dead01]/10 flex items-center justify-center flex-shrink-0">
                                    <span className="text-[#dead01] font-black">11</span>
                                </div>
                                <h2 className="text-xl font-black text-[#072b47]">Policy Updates</h2>
                            </div>
                            <div className="pl-11">
                                <p className="text-slate-600">
                                    This Privacy Policy may be updated periodically. Revisions will be posted on this page with an updated effective date. Continued use after updates implies acceptance of the revised terms.
                                </p>
                            </div>
                        </div>

                        {/* 12. Contact Information */}
                        <div className="mb-10 pb-10 border-b border-slate-100">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-full bg-[#dead01]/10 flex items-center justify-center flex-shrink-0">
                                    <span className="text-[#dead01] font-black">12</span>
                                </div>
                                <h2 className="text-xl font-black text-[#072b47]">Contact Information</h2>
                            </div>
                            <div className="pl-11">
                                <p className="text-slate-600 mb-3">
                                    For privacy-related queries, reach out to the Data Protection Officer at:
                                </p>
                                <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                                    <p className="flex items-center gap-2 text-[#072b47] mb-2">
                                        <Mail className="w-4 h-4 text-[#005a9c]" />
                                        <span className="font-bold">Email:</span> privacy@kryoss.com
                                    </p>
                                    <p className="flex items-start gap-2 text-[#072b47]">
                                        <Building className="w-4 h-4 text-[#005a9c] mt-1" />
                                        <span><span className="font-bold">Address:</span> Kryoss Softech Private Limited, [Registered Office Address], India</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Subpages Section */}
                        <div className="mt-12 pt-6">
                            <h2 className="text-xl font-black text-[#072b47] mb-6 flex items-center gap-2">
                                <FileText className="w-5 h-5 text-[#dead01]" />
                                Related Policies & Subpages
                            </h2>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 hover:border-[#dead01]/30 transition-all">
                                    <h3 className="font-bold text-[#072b47] mb-2 flex items-center gap-2">
                                        <span className="w-5 h-5 rounded-full bg-[#dead01]/10 flex items-center justify-center text-xs font-bold text-[#dead01]">1</span>
                                        Data Collection & Use
                                    </h3>
                                    <p className="text-sm text-slate-600">Detailed explanation of how specific data types are processed, categorized by Clients, Partners (IPP/BPP), Vendors, Visitors.</p>
                                </div>

                                <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 hover:border-[#dead01]/30 transition-all">
                                    <h3 className="font-bold text-[#072b47] mb-2 flex items-center gap-2">
                                        <span className="w-5 h-5 rounded-full bg-[#dead01]/10 flex items-center justify-center text-xs font-bold text-[#dead01]">2</span>
                                        Cookie Policy
                                    </h3>
                                    <p className="text-sm text-slate-600">Types of cookies used, purpose (functional, analytics, performance), how users can manage cookie preferences.</p>
                                </div>

                                <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 hover:border-[#dead01]/30 transition-all">
                                    <h3 className="font-bold text-[#072b47] mb-2 flex items-center gap-2">
                                        <span className="w-5 h-5 rounded-full bg-[#dead01]/10 flex items-center justify-center text-xs font-bold text-[#dead01]">3</span>
                                        Data Protection & Security
                                    </h3>
                                    <p className="text-sm text-slate-600">Encryption methods, secure transmission practices, access control mechanisms, breach response protocol.</p>
                                </div>

                                <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 hover:border-[#dead01]/30 transition-all">
                                    <h3 className="font-bold text-[#072b47] mb-2 flex items-center gap-2">
                                        <span className="w-5 h-5 rounded-full bg-[#dead01]/10 flex items-center justify-center text-xs font-bold text-[#dead01]">4</span>
                                        User Rights & Access Requests
                                    </h3>
                                    <p className="text-sm text-slate-600">Learn how to request data access, submit deletion or correction requests, review response timeframes.</p>
                                </div>

                                <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 hover:border-[#dead01]/30 transition-all md:col-span-2">
                                    <h3 className="font-bold text-[#072b47] mb-2 flex items-center gap-2">
                                        <span className="w-5 h-5 rounded-full bg-[#dead01]/10 flex items-center justify-center text-xs font-bold text-[#dead01]">5</span>
                                        Third-Party Services & Integrations
                                    </h3>
                                    <p className="text-sm text-slate-600">Names or categories of external providers, how integrations work, responsibility boundaries.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PrivacyPolicy;