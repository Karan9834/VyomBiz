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
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                    Who We Are
                </h1>
                <div className="w-16 h-1 bg-[#f1a134] mx-auto mb-6 rounded-full" />
                <p className="text-base md:text-lg text-white/90 font-normal max-w-2xl mx-auto leading-relaxed">
                    We serve a diverse range of clients, from budding entrepreneurs to global enterprises, providing the foundation for their success.
                </p>
            </div>
        </section>
    );
};

export default AboutBanner;
