import React from 'react';
import FAQLayout from '../../../components/common/FAQLayout';

const ISODetailsLayout = ({ overview, advantages, eligibility, process, whyUs, faqs }) => {
    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* Overview Section */}
            {overview && (
                <section className="w-full py-12 px-6 lg:px-12 max-w-7xl mx-auto">
                    <h2 className="text-3xl font-semibold text-[#072b47] mb-6">{overview.title}</h2>
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        <div className="w-full md:w-1/2">
                            {overview.description && overview.description.map((desc, idx) => (
                                <p key={idx} className="text-[17px] text-slate-600 leading-relaxed mb-4">{desc}</p>
                            ))}
                        </div>
                        {overview.imageUrl && (
                            <div className="w-full md:w-1/2">
                                <img src={overview.imageUrl} alt={overview.title} className="w-full rounded-2xl shadow-sm" />
                            </div>
                        )}
                    </div>
                </section>
            )}

            {/* Advantages Section */}
            {advantages && (
                <section className="w-full py-12 bg-[#f8fafc] px-6 lg:px-12">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-3xl font-semibold text-[#072b47] mb-2">{advantages.title}</h2>
                        {advantages.subtitle && <p className="text-lg text-slate-500 mb-8">{advantages.subtitle}</p>}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {advantages.list && advantages.list.map((item, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                                    <h3 className="text-xl font-semibold text-[#072b47] mb-3">{item.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Eligibility Section */}
            {eligibility && (
                <section className="w-full py-12 px-6 lg:px-12 max-w-7xl mx-auto">
                    <h2 className="text-3xl font-semibold text-[#072b47] mb-2">{eligibility.title}</h2>
                    {eligibility.subtitle && <p className="text-lg text-slate-500 mb-8">{eligibility.subtitle}</p>}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {eligibility.list && eligibility.list.map((item, idx) => (
                            <div key={idx} className="bg-[#f0f7ff] p-6 rounded-xl">
                                <h3 className="text-xl font-semibold text-[#005a9c] mb-2">{item.title}</h3>
                                <p className="text-slate-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Process Section */}
            {process && (
                <section className="w-full py-12 bg-slate-50 px-6 lg:px-12">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-3xl font-semibold text-[#072b47] mb-2">{process.title}</h2>
                        {process.subtitle && <p className="text-lg text-slate-500 mb-8">{process.subtitle}</p>}
                        <div className="space-y-4">
                            {process.steps && process.steps.map((step, idx) => (
                                <div key={idx} className="flex gap-4 p-4 bg-white rounded-lg shadow-sm border border-slate-100">
                                    <div className="text-[#005a9c] font-bold text-xl">{step.step}</div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-[#072b47]">{step.title}</h3>
                                        <p className="text-slate-600 mt-1">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Why Us Section */}
            {whyUs && (
                <section className="w-full py-12 px-6 lg:px-12 max-w-7xl mx-auto">
                    <h2 className="text-3xl font-semibold text-[#072b47] mb-2">{whyUs.title}</h2>
                    {whyUs.subtitle && <p className="text-lg text-slate-500 mb-8">{whyUs.subtitle}</p>}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {whyUs.list && whyUs.list.map((item, idx) => (
                            <div key={idx} className="p-6 border border-slate-200 rounded-xl hover:shadow-md transition">
                                <h3 className="text-lg font-semibold text-[#072b47] mb-2">{item.title}</h3>
                                <p className="text-slate-600 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* FAQs Section */}
            {faqs && faqs.length > 0 && (
                <FAQLayout
                    title="Frequently Asked Questions"
                    subtitle="Clear answers to your common registration questions"
                    faqs={faqs}
                />
            )}
        </div>
    );
};

export default ISODetailsLayout;
