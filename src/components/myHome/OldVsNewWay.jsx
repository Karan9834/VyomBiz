import React from "react";
import { FileText, Users, RefreshCw, FileCheck, Clock, Shield, Zap, CheckCircle } from "lucide-react";

const OldVsNewWay = () => {
    const oldWaySteps = [
        { icon: FileText, label: "GST", color: "#94a3b8" },
        { icon: Users, label: "Payroll", color: "#94a3b8" },
        { icon: RefreshCw, label: "Reconciliation", color: "#94a3b8" },
        { icon: FileCheck, label: "Litigation", color: "#94a3b8" },
        { icon: Clock, label: "Compliance", color: "#94a3b8" },
        { icon: Shield, label: "Filing", color: "#94a3b8" },
        { icon: FileText, label: "TDS", color: "#94a3b8" },
        { icon: FileCheck, label: "Notices", color: "#94a3b8" },
    ];

    const newWaySteps = [
        { icon: FileText, label: "GST", color: "#3b82f6" },
        { icon: Users, label: "Payroll", color: "#3b82f6" },
        { icon: RefreshCw, label: "Reconciliation", color: "#3b82f6" },
        { icon: FileCheck, label: "Litigation", color: "#3b82f6" },
        { icon: Clock, label: "Compliance", color: "#3b82f6" },
        { icon: Shield, label: "Filing", color: "#3b82f6" },
        { icon: FileText, label: "TDS", color: "#3b82f6" },
        { icon: FileCheck, label: "Notices", color: "#3b82f6" },
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
            <div className="max-w-[1440px] mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-black mb-4 tracking-tight">
                        Everything Your Business Needs to Grow, Right Here
                    </h2>
                    <div className="w-16 h-1 bg-[#f1a134] mx-auto rounded mb-6"></div>
                    <p className="text-gray-700 text-sm max-w-4xl mx-auto leading-relaxed">
                        Stop juggling and start expanding
                    </p>
                </div>

                {/* Comparison Grid - Equal Height Cards */}
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* The Old Way */}
                    <div className="bg-gradient-to-br from-slate-100 to-slate-50 rounded-3xl p-8 md:p-12 shadow-lg border border-slate-200 flex flex-col h-full">
                        <h3 className="text-3xl font-bold text-slate-800 mb-4 text-center">
                            The Old Way
                        </h3>
                        <p className="text-slate-600 text-sm font-medium text-center mb-8 leading-relaxed min-h-[60px]">
                            Slow. Manual filing, error-prone, and full of paperwork. Deadlines are easy to miss, and expert help feels out of reach.
                        </p>

                        {/* Circular Network Diagram */}
                        <div className="relative w-full aspect-square max-w-sm mx-auto flex-grow flex items-center justify-center">
                            {/* Center - Larger and Clearer */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-full shadow-xl border-4 border-slate-300 flex items-center justify-center z-20">
                                <Clock className="w-12 h-12 text-slate-500" strokeWidth={2.5} />
                            </div>

                            {/* Orbiting Icons */}
                            {oldWaySteps.map((step, index) => {
                                const angle = (index * 360) / oldWaySteps.length;
                                const radius = 42; // percentage
                                const x = 50 + radius * Math.cos((angle - 90) * (Math.PI / 180));
                                const y = 50 + radius * Math.sin((angle - 90) * (Math.PI / 180));

                                return (
                                    <div
                                        key={index}
                                        className="absolute z-10"
                                        style={{
                                            left: `${x}%`,
                                            top: `${y}%`,
                                            transform: 'translate(-50%, -50%)',
                                        }}
                                    >
                                        {/* Icon Container */}
                                        <div className="bg-white rounded-full p-3.5 shadow-md border-2 border-slate-200">
                                            <step.icon className="w-7 h-7" style={{ color: step.color }} strokeWidth={2} />
                                        </div>
                                        <p className="text-xs font-bold text-slate-600 mt-2 text-center whitespace-nowrap">
                                            {step.label}
                                        </p>
                                    </div>
                                );
                            })}

                            {/* Connecting Lines - Behind icons */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 5 }}>
                                {oldWaySteps.map((_, index) => {
                                    const angle = (index * 360) / oldWaySteps.length;
                                    const radius = 42;
                                    const x = 50 + radius * Math.cos((angle - 90) * (Math.PI / 180));
                                    const y = 50 + radius * Math.sin((angle - 90) * (Math.PI / 180));

                                    return (
                                        <line
                                            key={index}
                                            x1="50%"
                                            y1="50%"
                                            x2={`${x}%`}
                                            y2={`${y}%`}
                                            stroke="#cbd5e1"
                                            strokeWidth="2"
                                            strokeDasharray="6 6"
                                            opacity="0.5"
                                        />
                                    );
                                })}
                            </svg>
                        </div>
                    </div>

                    {/* The VyomBiz Way */}
                    <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-blue-200 relative overflow-hidden flex flex-col h-full">
                        {/* Decorative Elements */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-50" />
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-orange-100 rounded-full blur-3xl opacity-50" />

                        <div className="relative z-10 flex flex-col h-full">
                            <h3 className="text-3xl font-bold text-blue-900 mb-4 text-center">
                                The VyomBiz Way
                            </h3>
                            <p className="text-slate-700 text-sm font-medium text-center mb-8 leading-relaxed min-h-[60px]">
                                Quick. AI-powered filing, precise, and automated. You get smart alerts, secure document storage, and expert support anytime you need it.
                            </p>

                            {/* Circular Network Diagram */}
                            <div className="relative w-full aspect-square max-w-sm mx-auto flex-grow flex items-center justify-center mb-8">
                                {/* Center - VyomBiz Logo/Icon - Larger and Clearer */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full shadow-2xl flex items-center justify-center z-20 border-4 border-white">
                                    <Zap className="w-14 h-14 text-white" fill="white" strokeWidth={2} />
                                </div>

                                {/* Orbiting Icons */}
                                {newWaySteps.map((step, index) => {
                                    const angle = (index * 360) / newWaySteps.length;
                                    const radius = 42; // percentage
                                    const x = 50 + radius * Math.cos((angle - 90) * (Math.PI / 180));
                                    const y = 50 + radius * Math.sin((angle - 90) * (Math.PI / 180));

                                    return (
                                        <div
                                            key={index}
                                            className="absolute z-10"
                                            style={{
                                                left: `${x}%`,
                                                top: `${y}%`,
                                                transform: 'translate(-50%, -50%)',
                                            }}
                                        >
                                            {/* Icon Container */}
                                            <div className="bg-white rounded-full p-3.5 shadow-lg border-2 border-blue-300 hover:scale-110 transition-transform hover:border-blue-500">
                                                <step.icon className="w-7 h-7" style={{ color: step.color }} strokeWidth={2} />
                                            </div>
                                            <p className="text-xs font-bold text-blue-900 mt-2 text-center whitespace-nowrap">
                                                {step.label}
                                            </p>
                                        </div>
                                    );
                                })}

                                {/* Connecting Lines - Behind icons */}
                                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 5 }}>
                                    {newWaySteps.map((_, index) => {
                                        const angle = (index * 360) / newWaySteps.length;
                                        const radius = 42;
                                        const x = 50 + radius * Math.cos((angle - 90) * (Math.PI / 180));
                                        const y = 50 + radius * Math.sin((angle - 90) * (Math.PI / 180));

                                        return (
                                            <line
                                                key={index}
                                                x1="50%"
                                                y1="50%"
                                                x2={`${x}%`}
                                                y2={`${y}%`}
                                                stroke="#3b82f6"
                                                strokeWidth="2.5"
                                                opacity="0.4"
                                            />
                                        );
                                    })}
                                </svg>
                            </div>

                            {/* Benefits List */}
                            <div className="grid grid-cols-2 gap-3 mt-auto">
                                {[
                                    "AI-Powered",
                                    "Automated Filing",
                                    "Smart Alerts",
                                    "Expert Support 24/7",
                                ].map((benefit, idx) => (
                                    <div key={idx} className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-lg p-2.5 border border-blue-100">
                                        <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                                        <span className="text-xs font-bold text-slate-700">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Button */}
                <div className="text-center mt-12">
                    <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-black px-10 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 text-lg">
                        Get Started with VyomBiz Today
                    </button>
                </div>
            </div>
        </section>
    );
};

export default OldVsNewWay;
