import React from "react";
import { CheckCircle } from "lucide-react";
import CTAButton from "../common/CTAButton";

const OldVsNewWay = () => {
    return (
        <section className="py-16 md:py-20 bg-[#ecf2fd]">
            <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
                {/* Header */}
                <div className="mb-14">
                    <h2 className="text-4xl font-bold text-[#072b47] mb-4 tracking-tight">
                        Everything Your Business Needs to Grow, Right Here
                    </h2>
                    <div className="w-16 h-1 bg-[#005a9c] mx-auto rounded"></div>
                    <p className="text-gray-700 text-sm md:text-base lg:text-lg mt-6 max-w-3xl mx-auto font-normal tracking-wide">
                        Stop juggling manual processes and start expanding with automated business solutions.
                    </p>
                </div>

                {/* Comparison Grid */}
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
                    {/* The Old Way */}
                    <div className="bg-white rounded-3xl p-10 md:p-14 shadow-xl border border-slate-100 flex flex-col h-full group hover:shadow-2xl transition-all duration-500">
                        <div className="mb-8">
                            <h3 className="text-3xl font-bold text-slate-400 mb-4">
                                The Old Way
                            </h3>
                            <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-md mx-auto">
                                Slow, manual filing, error-prone, and full of paperwork. Deadlines are easily missed, and expert help feels distant.
                            </p>
                        </div>

                        {/* Image Area */}
                        <div className="relative w-full max-w-sm mx-auto flex-grow flex items-center justify-center grayscale opacity-70">
                            <img
                                src="/Home-page/old-way-img.png"
                                alt="The Old Way Processes"
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>

                    {/* The VyomBiz Way */}
                    <div className="bg-[#072b47] rounded-3xl p-10 md:p-14 shadow-2xl border border-white/10 flex flex-col h-full relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[80px]" />

                        <div className="relative z-10">
                            <h3 className="text-3xl font-bold text-white mb-4">
                                The VyomBiz Way
                            </h3>
                            <p className="text-blue-100 text-sm font-medium leading-relaxed max-w-md mx-auto mb-10">
                                Quick, AI-powered automation. Real-time tracking, secure storage, and instant expert support at your fingertips.
                            </p>

<<<<<<< Updated upstream
                            {/* Image Area */}
                            <div className="relative w-full max-w-sm mx-auto mb-8 flex items-center justify-center">
                                <img
                                    src="/Home-page/vyomBiz-way-img.png"
                                    alt="The VyomBiz Way Processes"
                                    className="w-full h-auto object-contain"
                                />
=======
                            {/* Circular Network Diagram */}
                            <div className="relative w-full aspect-square max-w-sm mx-auto mb-12 flex items-center justify-center">
                                {/* Center Icon */}
                                <div className="absolute w-28 h-28 bg-gradient-to-br from-[#005a9c] to-blue-400 rounded-full shadow-[0_0_30px_rgba(0,90,156,0.4)] flex items-center justify-center z-20 border-4 border-white animate-pulse-slow">
                                    <Zap className="w-12 h-12 text-white fill-white" />
                                </div>

                                {/* Orbiting Icons */}
                                {newWaySteps.map((step, index) => {
                                    const angle = (index * 360) / newWaySteps.length;
                                    const radius = 38;
                                    const x = 50 + radius * Math.cos((angle - 90) * (Math.PI / 180));
                                    const y = 50 + radius * Math.sin((angle - 90) * (Math.PI / 180));

                                    return (
                                        <div
                                            key={index}
                                            className="absolute z-10"
                                            style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
                                        >
                                            <div className="bg-white rounded-full p-3.5 shadow-lg border-2 border-[#005a9c]/30 hover:scale-110 transition-transform hover:border-[#005a9c]">
                                                <step.icon className="w-6 h-6 text-[#005a9c]" />
                                            </div>
                                            <p className="text-[10px] font-bold text-white/90 mt-2 whitespace-nowrap uppercase tracking-tighter">
                                                {step.label}
                                            </p>
                                        </div>
                                    );
                                })}

                                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
                                    {newWaySteps.map((_, index) => {
                                        const angle = (index * 360) / newWaySteps.length;
                                        const radius = 38;
                                        const x = 50 + radius * Math.cos((angle - 90) * (Math.PI / 180));
                                        const y = 50 + radius * Math.sin((angle - 90) * (Math.PI / 180));
                                        return <line key={index} x1="50%" y1="50%" x2={`${x}%`} y2={`${y}%`} stroke="#005a9c" strokeWidth="1.5" />;
                                    })}
                                </svg>
                            </div>

                            {/* Key Highlights */}
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { text: "AI Automation", sub: "Reduced Errors" },
                                    { text: "Real-time", sub: "Status Updates" },
                                    { text: "Expert Help", sub: "24/7 Support" },
                                    { text: "Security", sub: "Bank-grade" }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3 bg-white/5 backdrop-blur-md rounded-2xl p-3 border border-white/10 text-left">
                                        <div className="w-8 h-8 rounded-lg bg-[#005a9c] flex items-center justify-center shrink-0">
                                            <CheckCircle className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <p className="text-white text-xs font-bold leading-none mb-1">{item.text}</p>
                                            <p className="text-white/60 text-[10px] uppercase font-bold tracking-wider leading-none">{item.sub}</p>
                                        </div>
                                    </div>
                                ))}
>>>>>>> Stashed changes
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Button */}
                <div className="mt-16">
                    <CTAButton
                        label="Get Started with VyomBiz Today"
                        className="!px-12 !py-4 !text-lg !rounded-2xl tracking-wide"
                    />
                </div>
            </div>
        </section>
    );
};

export default OldVsNewWay;
