import React from "react";

const AboutIntro = () => {
    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-6 lg:px-24">
                <div className="flex flex-col lg:flex-row gap-10 items-start">
                    <div className="lg:w-3/5">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#072b47] mb-8 tracking-tight">
                            About Us
                        </h2>

                        <div className="space-y-6 text-slate-600 font-normal leading-[1.7] text-base">
                            <p>
                                Welcome to <span className="text-[#f1a134] font-bold">VyomBiz</span>, a powerful network of <span className="text-slate-900 font-semibold">10,000+ Chartered Accountants</span>, <span className="text-slate-900 font-semibold">1,000+ Company Secretaries</span>, <span className="text-slate-900 font-semibold">1,500+ Engineers</span>, and <span className="text-slate-900 font-semibold">15,000+ Lawyers</span>. Specialising in Compliance, Tax, Audit, and a wide range of legal services, we stand as one of India’s leading legal technology platforms—managed by <span className="text-slate-900 font-bold">Clink Consultancy Pvt. Ltd.</span>
                            </p>

                            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 border-l-4 border-l-[#f1a134]">
                                <h4 className="text-xl font-bold text-[#072b47] mb-3">Client-Centric and Independent</h4>
                                <p className="text-sm text-slate-600">
                                    At VyomBiz, your needs come first. Clients connect with us directly and choose from our independent professionals who provide honest, unbiased, and practical advice. No member firm can bind or influence another, ensuring complete transparency and freedom in every consultation.
                                </p>
                            </div>

                            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 border-l-4 border-l-blue-600">
                                <h4 className="text-xl font-bold text-[#072b47] mb-3">Extensive Reach and Tailored Solutions</h4>
                                <p className="text-sm text-slate-600">
                                    With access to over <span className="font-bold">5,000 accounting and law firms</span>, along with experienced management consultants and specialists, our network is built for reach and reliability. Serving more than <span className="font-bold">10,000 pin codes</span> across India, VyomBiz delivers personalised solutions that truly fit your business needs.
                                </p>
                            </div>

                            <p className="text-[#072b47] text-lg font-bold pt-4 leading-tight italic">
                                "Join VyomBiz—where you don’t just start a business, you begin a smarter, stronger journey in professional services."
                            </p>
                        </div>
                    </div>

                    <div className="lg:w-2/5 w-full">
                        <div className="relative rounded-[2rem] overflow-hidden shadow-2xl group border-[8px] border-slate-50">
                            <img
                                src="https://data1.ibtimes.co.in/en/full/599083/indian-it-sector.jpg"
                                alt="VyomBiz Office"
                                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutIntro;
