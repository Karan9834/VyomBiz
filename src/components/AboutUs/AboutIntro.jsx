import React from "react";

const AboutIntro = () => {
    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-6 lg:px-24">
                <div className="flex flex-col lg:flex-row gap-10 items-start">
                    <div className="lg:w-3/5">
                        <h2 className="text-4xl md:text-5xl font-[900] text-slate-900 mb-6 tracking-tighter">
                            About us
                        </h2>

                        <div className="space-y-4 text-slate-600 font-medium leading-[1.7] text-base">
                            <p>
                                Welcome to VyomBiz, a vast network of over <span className="text-[#f1a134] font-black">10,000 Chartered Accountants</span>, <span className="text-[#f1a134] font-black">1,000 Company Secretaries</span>, <span className="text-[#f1a134] font-black">1,500 Engineers</span>, and <span className="text-[#f1a134] font-black">15,000 Lawyers</span>. Specializing in Compliance, Tax, Audit, and various legal services, we are India's leading legal technology platform.
                            </p>

                            <div>
                                <h4 className="text-xl font-black text-slate-800 mb-3">Client-Centric and Independent</h4>
                                <p>
                                    Our platform is unique because clients directly approach us with their needs, choosing from our independent professionals who offer impartial and genuine advice. At VyomBiz, no member firm can bind or obligate others, ensuring unbiased and autonomous consultations.
                                </p>
                            </div>

                            <div>
                                <h4 className="text-xl font-black text-slate-800 mb-3">Extensive Reach and Tailored Solutions</h4>
                                <p>
                                    Spanning over 5,000 Accounting and Law firms and enriched by a pool of management consultants and specialists, our network is designed for unparalleled accessibility. Serving over 10,000 pin codes across India, VyomBiz is your gateway to bespoke legal and professional solutions.
                                </p>
                            </div>

                            <p className="text-slate-900 font-[900] pt-4">
                                Join us at VyomBiz, where you don't just start a business; you start a revolution in professional services.
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
