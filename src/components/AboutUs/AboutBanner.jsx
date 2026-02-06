import React from "react";

const AboutBanner = () => {
    return (
        <section className="relative h-[30vh] md:h-[40vh] flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{ backgroundImage: 'url("/aboutus-bg-image.jpg")' }}
            >
                <div className="absolute inset-0 bg-[#072b47]/25 backdrop-blur-[2px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <h1 className="text-2xl md:text-4xl font-black text-white mb-1">
                    Who we are?
                </h1>
                <div className="w-12 h-0.5 bg-[#f1a134] mx-auto mb-4 rounded-full" />
                <p className="text-sm md:text-base text-white/90 font-bold max-w-2xl mx-auto leading-relaxed">
                    We serve many customers, ranging from small businesses, medium entrepreneurs, to world-renowned companies.
                </p>
            </div>
        </section>
    );
};

export default AboutBanner;
