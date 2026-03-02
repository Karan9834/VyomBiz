import React from 'react';
import { Shield, FileCheck, CheckCircle, ArrowRight, Zap, Target, BookOpen, Clock, Users, Building2, Briefcase } from 'lucide-react';

const SolidWasteManagementAuthorization = () => {
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
                        Solid Waste Management <span className="text-[#dead01]">Authorization</span> 
                    </h1>
                    
                    <p className="text-xl text-blue-100 mb-10 max-w-3xl leading-relaxed">
                        Start Process in 2 Minutes. Worried about rejection of the solid waste management authorization? VyomBiz delivers 99% first-time approvals through structured documentation, technical reporting, authority coordination, and complete compliance management.
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
                                
                                <li className="flex items-center gap-3 text-slate-700 font-medium">
                                    <CheckCircle className="text-green-500 shrink-0" size={18} />
                                    <span>Eligibility Assessment</span>
                                </li>
                                <li className="flex items-center gap-3 text-slate-700 font-medium">
                                    <CheckCircle className="text-green-500 shrink-0" size={18} />
                                    <span>Application Drafting Support</span>
                                </li>
                                <li className="flex items-center gap-3 text-slate-700 font-medium">
                                    <CheckCircle className="text-green-500 shrink-0" size={18} />
                                    <span>Disposal Management Plan</span>
                                </li>
                                <li className="flex items-center gap-3 text-slate-700 font-medium">
                                    <CheckCircle className="text-green-500 shrink-0" size={18} />
                                    <span>Site Layout Documentation</span>
                                </li>
                                <li className="flex items-center gap-3 text-slate-700 font-medium">
                                    <CheckCircle className="text-green-500 shrink-0" size={18} />
                                    <span>SPCB Filing Assistance</span>
                                </li>
                                <li className="flex items-center gap-3 text-slate-700 font-medium">
                                    <CheckCircle className="text-green-500 shrink-0" size={18} />
                                    <span>3-Step Compliance Check</span>
                                </li>
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
                                <p>Solid waste refers to solid or semi-solid domestic waste, sanitary waste, institutional waste, commercial waste, horticultural waste, agricultural waste, bio-media waste and such other waste generated in the area under the local authorities and other entities mentioned under Rule 2. Solid Waste Management refers to the discipline connected to the control of generation, collection, storage, transportation, processing and disposal of the solid waste in a way that it is in the best interest of public health, engineering, economics, conservation and other environmental considerations. A person who engages in processing, treatment, recycling and disposal facility of waste must take Solid Waste Management Authorization under the Solid Waste Management Rules from the concerned department.</p>
                            </div>
                        </div>

                        {/* RULES AND REGULATIONS */}
                        <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
                            <h2 className="text-2xl font-black text-[#072b47] mb-6 flex items-center gap-3">
                                <Shield className="text-[#005a9c]" /> Rules, Regulations & Benefits
                            </h2>
                            <div className="text-slate-600 font-medium leading-relaxed space-y-4 text-lg">
                                <p>Municipal Solid Waste (Management and Handling) Rules 2000
This pertains to management and handling of municipal solid waste.
Biomedical Waste (Management and Handling) Regulations 1998
This regulation governs the management and handling of the bio-medical waste.
E-waste (Management and Handling) Regulations 2010
This regulation governs the management and handling of electrical and electronic waste.</p>
                            </div>
                        </div>

                        {/* PROCEDURE */}
                        <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
                            <h2 className="text-2xl font-black text-[#072b47] mb-6 flex items-center gap-3">
                                <Target className="text-[#005a9c]" /> Procedure
                            </h2>
                            <div className="text-slate-600 font-medium leading-relaxed space-y-4 text-lg">
                                <p>The procedure is as follows: 
1. Apply to the state pollution control board file an application in Form I within 60 days period.
2. The applicant must also accompany such application with consent to establish and consent to operate.
3. Attach all Documents, and the Documents should be signed from the authorized person.
4. Submit the form to the concerned state pollution board.
5. If the board finds the form to be fit enough, then it shall grant the authorization.</p>
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
                                
                                <li className="flex items-start gap-3 text-blue-100 font-medium">
                                    <div className="mt-1 w-5 h-5 shrink-0 rounded-full bg-[#005a9c] flex items-center justify-center">
                                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                    </div>
                                    <span>Authorized Signatory Aadhar Card</span>
                                </li>
                                <li className="flex items-start gap-3 text-blue-100 font-medium">
                                    <div className="mt-1 w-5 h-5 shrink-0 rounded-full bg-[#005a9c] flex items-center justify-center">
                                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                    </div>
                                    <span>PAN Card of the Authorized Signatory</span>
                                </li>
                                <li className="flex items-start gap-3 text-blue-100 font-medium">
                                    <div className="mt-1 w-5 h-5 shrink-0 rounded-full bg-[#005a9c] flex items-center justify-center">
                                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                    </div>
                                    <span>GST Certificate</span>
                                </li>
                                <li className="flex items-start gap-3 text-blue-100 font-medium">
                                    <div className="mt-1 w-5 h-5 shrink-0 rounded-full bg-[#005a9c] flex items-center justify-center">
                                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                    </div>
                                    <span>Proof of ownership of site or rent/lease agreement</span>
                                </li>
                                <li className="flex items-start gap-3 text-blue-100 font-medium">
                                    <div className="mt-1 w-5 h-5 shrink-0 rounded-full bg-[#005a9c] flex items-center justify-center">
                                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                    </div>
                                    <span>Factory license/trade license</span>
                                </li>
                                <li className="flex items-start gap-3 text-blue-100 font-medium">
                                    <div className="mt-1 w-5 h-5 shrink-0 rounded-full bg-[#005a9c] flex items-center justify-center">
                                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                    </div>
                                    <span>Electricity bill</span>
                                </li>
                                <li className="flex items-start gap-3 text-blue-100 font-medium">
                                    <div className="mt-1 w-5 h-5 shrink-0 rounded-full bg-[#005a9c] flex items-center justify-center">
                                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                    </div>
                                    <span>Layout plan</span>
                                </li>
                                <li className="flex items-start gap-3 text-blue-100 font-medium">
                                    <div className="mt-1 w-5 h-5 shrink-0 rounded-full bg-[#005a9c] flex items-center justify-center">
                                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                    </div>
                                    <span>Process flow chart</span>
                                </li>
                                <li className="flex items-start gap-3 text-blue-100 font-medium">
                                    <div className="mt-1 w-5 h-5 shrink-0 rounded-full bg-[#005a9c] flex items-center justify-center">
                                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                    </div>
                                    <span>Details of the machinery installed</span>
                                </li>
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

export default SolidWasteManagementAuthorization;
