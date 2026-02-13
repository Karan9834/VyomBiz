import React, { useState, useEffect } from 'react';
import {
    Phone,
    MapPin,
    Star,
    Briefcase,
    Search,
    X,
    Filter,
    CheckCircle2,
    Scale,
    Users,
    MessageSquare,
    ThumbsUp,
    Award,
    ChevronDown,
    ChevronLeft,
    ChevronRight
} from 'lucide-react';

const LawyerSpecializationLayout = ({
    title,
    description,
    lawyers,
    cities,
    testimonials
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Filtering States
    const [citySearch, setCitySearch] = useState('');
    const [languageSearch, setLanguageSearch] = useState('');
    const [experienceFilter, setExperienceFilter] = useState('');
    const [genderFilter, setGenderFilter] = useState('');

    const nextSlide = () => {
        if (testimonials) {
            setCurrentIndex(prev => (prev + 1) % testimonials.length);
        }
    };

    const prevSlide = () => {
        if (testimonials) {
            setCurrentIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
        }
    };

    useEffect(() => {
        if (!isPaused && testimonials && testimonials.length > 0) {
            const interval = setInterval(() => {
                nextSlide();
            }, 4000); // Change slide every 4 seconds
            return () => clearInterval(interval);
        }
    }, [isPaused, testimonials, currentIndex]);

    // Filtering Logic
    const filteredLawyers = lawyers?.filter(lawyer => {
        const matchesCity = lawyer.location.toLowerCase().includes(citySearch.toLowerCase());
        const matchesLanguage = lawyer.languages?.some(lang => lang.toLowerCase().includes(languageSearch.toLowerCase())) ?? true;
        const matchesExperience = !experienceFilter || lawyer.experience.includes(experienceFilter);
        const matchesGender = !genderFilter || lawyer.gender === genderFilter;
        return matchesCity && matchesLanguage && matchesExperience && matchesGender;
    });

    const clearFilters = () => {
        setCitySearch('');
        setLanguageSearch('');
        setExperienceFilter('');
        setGenderFilter('');
    };

    return (
        <div className="bg-white min-h-screen font-sans text-slate-900">

            {/* 1. Hero Section */}
            <section className="relative bg-white pt-6 pb-16 lg:pt-8 lg:pb-20 overflow-hidden border-b border-slate-50">
                <div className="max-w-[1440px] mx-auto px-4 md:px-6 relative z-10">

                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-[13px] font-normal text-slate-500 mb-8 mt-10">
                        <a href="/" className="hover:text-[#005a9c] underline underline-offset-4">Home</a>
                        <span>&gt;</span>
                        <span className="text-slate-600">{title}</span>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start mt-10">

                        {/* Left Content */}
                        <div className="w-full lg:w-[60%] space-y-8">
                            <h1 className="text-4xl lg:text-5xl font-semibold text-[#072b47] leading-[1.15] tracking-tight">
                                Experienced {title} <br className="hidden lg:block" />
                                in India for Trusted Legal Help
                            </h1>

                            <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                                {description}
                            </p>

                            {/* Status Pills */}
                            <div className="flex flex-wrap items-center gap-4">
                                <div className="flex items-center gap-3 bg-white border border-slate-100 shadow-sm rounded-xl px-4 py-2.5">
                                    <div className="flex -space-x-2">
                                        {[1, 2, 3].map((i) => (
                                            <div key={i} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white overflow-hidden shadow-sm">
                                                <img src={`https://i.pravatar.cc/100?img=${i + 20}`} alt="Lawyer" className="w-full h-full object-cover" />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2.5 h-2.5 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                                        <span className="text-sm font-bold text-slate-700">480+ Lawyers are online</span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 bg-white border border-slate-100 shadow-sm rounded-xl px-4 py-2.5">
                                    <div className="bg-[#f0f7ff] p-1.5 rounded-full">
                                        <Phone size={16} fill="currentColor" stroke="none" className="text-[#005a9c]" />
                                    </div>
                                    <span className="text-sm font-bold text-slate-700">120+ ongoing calls</span>
                                    <div className="w-2.5 h-2.5 bg-orange-500 rounded-full shadow-[0_0_8px_rgba(249,115,22,0.6)] ml-1" />
                                </div>
                            </div>

                            {/* Bottom Stats Grid (Vakilsearch Style) */}
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100/80 flex items-center justify-between max-w-3xl">
                                <div className="flex-1">
                                    <h3 className="text-2xl font-semibold text-[#072b47]">5,00,000+</h3>
                                    <p className="text-[13px] text-slate-400 font-bold uppercase tracking-wider mt-1">Happy User</p>
                                </div>
                                <div className="h-10 w-[1px] bg-slate-200 mx-6 hidden sm:block" />
                                <div className="flex-1">
                                    <h3 className="text-2xl font-semibold text-[#072b47]">1,00,000+</h3>
                                    <p className="text-[13px] text-slate-400 font-bold uppercase tracking-wider mt-1">Cases Resolved</p>
                                </div>
                                <div className="h-10 w-[1px] bg-slate-200 mx-6 hidden sm:block" />
                                <div className="flex-1">
                                    <h3 className="text-2xl font-semibold text-[#072b47]">300+</h3>
                                    <p className="text-[13px] text-slate-400 font-bold uppercase tracking-wider mt-1">Expert Lawyers</p>
                                </div>
                                <div className="h-10 w-[1px] bg-slate-200 mx-6 hidden lg:block" />
                                <div className="flex-1 hidden lg:block text-right">
                                    <h3 className="text-2xl font-semibold text-[#072b47]">50+</h3>
                                    <p className="text-[13px] text-slate-400 font-bold uppercase tracking-wider mt-1">Specialities</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Form Card */}
                        <div className="w-full lg:w-[35%] shrink-0">
                            <div className="bg-white rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.12)] border border-slate-100 p-8">
                                <h3 className="text-[22px] font-semibold text-[#072b47] mb-8 leading-tight text-center">
                                    Facing a Legal Issue? Connect with an Expert Lawyer Now!
                                </h3>

                                <form className="space-y-5">
                                    <div className="relative">
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            className="w-full px-5 py-4 rounded-xl border border-slate-300 bg-slate-50 focus:border-[#005a9c] focus:bg-white outline-none transition-all placeholder:text-slate-400 text-slate-700 font-medium"
                                        />
                                    </div>
                                    <div className="relative">
                                        <input
                                            type="tel"
                                            placeholder="Mobile Number"
                                            className="w-full px-5 py-4 rounded-xl border border-slate-300 bg-slate-50 focus:border-[#005a9c] focus:bg-white outline-none transition-all placeholder:text-slate-400 text-slate-700 font-medium"
                                        />
                                    </div>

                                    <div className="text-[11px] text-center text-slate-400 font-bold uppercase tracking-wider">
                                        By proceeding, you agree to our <a href="#" className="text-[#005a9c] hover:underline">T&C*</a>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-[#072b47] text-white font-semibold text-[17px] py-4 rounded-xl hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 active:scale-95"
                                    >
                                        Connect with Lawyer
                                    </button>
                                </form>

                                <div className="mt-8 flex items-center justify-center gap-4 pt-8 border-t border-slate-100">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" className="w-8 h-8" />
                                    <div className="text-left">
                                        <h4 className="font-black text-[#072b47] text-[15px]">Google Reviews</h4>
                                        <div className="flex items-center gap-2">
                                            <div className="flex text-yellow-400 text-sm gap-0.5">
                                                {'★'.repeat(5)}
                                            </div>
                                            <span className="text-[13px] font-black text-slate-600">4.5/5</span>
                                            <span className="text-[12px] text-slate-400 font-bold ml-1">20k+ Happy Reviews</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Filter & List Section */}
            <section className="py-20 bg-slate-50/30">
                <div className="max-w-[1440px] mx-auto px-4 md:px-6">
                    <div className="flex flex-col lg:flex-row gap-12">

                        {/* Sidebar Filters */}
                        <aside className="w-full lg:w-[30%]">
                            <div className="flex items-center justify-between mb-8">
                                <h3 className="text-xl font-semibold text-slate-900">Filter</h3>
                                <button
                                    onClick={clearFilters}
                                    className="text-[14px] font-normal text-slate-900 hover:text-blue-600 transition-colors"
                                >
                                    Clear all
                                </button>
                            </div>

                            <div className="text-[15px] font-normal text-slate-500 mb-10">Showing {filteredLawyers?.length || 0} Result</div>

                            {/* Search Category */}
                            <div className="space-y-6">
                                <div className="space-y-4">
                                    <h4 className="text-lg font-semibold text-slate-900">Search</h4>

                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder="Enter City"
                                            value={citySearch}
                                            onChange={(e) => setCitySearch(e.target.value)}
                                            className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg outline-none text-[14px] text-slate-700 font-medium placeholder:text-slate-400"
                                        />
                                    </div>

                                    <div className="relative">
                                        <div className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-slate-700 text-[14px] font-medium">
                                            {title}
                                        </div>
                                    </div>

                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder="Enter Language"
                                            value={languageSearch}
                                            onChange={(e) => setLanguageSearch(e.target.value)}
                                            className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg outline-none text-[14px] text-slate-700 font-medium placeholder:text-slate-400"
                                        />
                                    </div>

                                    <div className="relative group">
                                        <select
                                            value={experienceFilter}
                                            onChange={(e) => setExperienceFilter(e.target.value)}
                                            className="w-full appearance-none bg-slate-50 border border-slate-300 px-4 py-3 rounded-lg text-slate-700 text-[14px] font-medium outline-none transition-colors"
                                        >
                                            <option value="">Experience</option>
                                            <option value="5+">5+ Years</option>
                                            <option value="10+">10+ Years</option>
                                            <option value="15+">15+ Years</option>
                                        </select>
                                        <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-900 pointer-events-none" />
                                    </div>

                                    <div className="relative group">
                                        <select
                                            value={genderFilter}
                                            onChange={(e) => setGenderFilter(e.target.value)}
                                            className="w-full appearance-none bg-slate-50 border border-slate-300 px-4 py-3 rounded-lg text-slate-700 text-[14px] font-medium outline-none transition-colors"
                                        >
                                            <option value="">Gender</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                        </select>
                                        <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-900 pointer-events-none" />
                                    </div>
                                </div>

                                <div className="pt-8">
                                    <h4 className="text-base font-semibold text-slate-900 mb-6">Major Cities</h4>
                                    <div className="flex flex-col gap-4">
                                        {['Bangalore', 'Chennai', 'Mumbai', 'Delhi', 'Pune'].map(city => (
                                            <button
                                                key={city}
                                                onClick={() => setCitySearch(city)}
                                                className="text-blue-500 hover:text-blue-700 text-[14px] font-normal transition-colors text-left"
                                            >
                                                {city}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </aside>

                        {/* Lawyers List */}
                        <div className="w-full lg:w-[70%] space-y-6">
                            {filteredLawyers && filteredLawyers.map((lawyer, index) => (
                                <div key={index} className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl hover:shadow-slate-100 transition-all duration-300">
                                    <div className="p-8 flex flex-col md:flex-row gap-8 items-start md:items-center">
                                        <div className="shrink-0 relative">
                                            <div className="w-28 h-28 rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 p-1">
                                                <img src={lawyer.image || `https://i.pravatar.cc/150?u=${index}`} alt={lawyer.name} className="w-full h-full object-cover rounded-xl" />
                                            </div>
                                        </div>

                                        <div className="flex-1 space-y-4">
                                            <h3 className="text-[20px] font-bold text-[#072b47] tracking-tight">{lawyer.name}</h3>

                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                                                <div className="flex items-center gap-3 text-[14px] font-bold text-slate-600">
                                                    <div className="bg-[#f0f7ff] p-1.5 rounded-lg text-[#005a9c]">
                                                        <Briefcase size={14} fill="currentColor" stroke="none" />
                                                    </div>
                                                    <span>{lawyer.experience}</span>
                                                </div>
                                                <div className="flex items-center gap-3 text-[14px] font-bold text-slate-600">
                                                    <div className="bg-[#f0f7ff] p-1.5 rounded-lg text-[#005a9c]">
                                                        <MapPin size={14} fill="currentColor" stroke="none" />
                                                    </div>
                                                    <span>{lawyer.location}</span>
                                                </div>
                                                <div className="flex items-start gap-3 text-[14px] font-bold text-slate-600 col-span-full">
                                                    <div className="bg-[#f0f7ff] p-1.5 rounded-lg text-[#005a9c] mt-0.5 shrink-0">
                                                        <Scale size={14} fill="currentColor" stroke="none" />
                                                    </div>
                                                    <span className="leading-relaxed">Practice area & skills: {lawyer.skills}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="shrink-0 w-full md:w-auto mt-6 md:mt-0">
                                            <button className="w-full md:w-auto bg-[#072b47] text-white px-8 py-4 rounded-xl font-bold text-[15px] hover:bg-slate-800 transition-all shadow-lg active:scale-95">
                                                {lawyer.phone}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Small Section (City Grid) */}
            <section className="py-24 bg-white border-t border-slate-50">
                <div className="max-w-6xl mx-auto px-4 md:px-6">
                    <h2 className="text-3xl lg:text-[40px] font-semibold text-center text-[#072b47] mb-12 tracking-tighter leading-tight">
                        {title} in Major Cities
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
                        {cities && cities.map((city, idx) => (
                            <a key={idx} href="#" className="flex items-center gap-3 text-[#005a9c] hover:text-[#004a7c] transition-all font-bold text-[16px] group">
                                <span className="text-[#f1a134] group-hover:translate-x-1 transition-all">→</span>
                                <span className="border-b border-transparent group-hover:border-[#005a9c] pb-0.5">{title} in {city}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Testimonials (Enhanced Carousel) */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="max-w-[1440px] mx-auto px-4 md:px-6">
                    <h2 className="text-3xl lg:text-[40px] font-semibold text-center text-[#072b47] mb-12 tracking-tighter leading-tight">
                        India's most loved legal services, since 2010
                    </h2>

                    <div
                        className="relative group"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        {/* Carousel Wrapper */}
                        <div className="overflow-hidden px-10">
                            <div
                                className="flex transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
                                style={{ transform: `translateX(-${currentIndex * (100 / (window.innerWidth < 1024 ? (window.innerWidth < 640 ? 1 : 2) : 3))}%)` }}
                            >
                                {testimonials && [...testimonials, ...testimonials].map((review, idx) => (
                                    <div
                                        key={idx}
                                        className="min-w-[100%] sm:min-w-[50%] lg:min-w-[33.333%] p-4"
                                    >
                                        <div className="bg-white p-8 border border-[#072b47] rounded-sm flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
                                            <div className="flex items-start gap-4 mb-6">
                                                <div className="w-16 h-16 rounded-full overflow-hidden bg-[#f0f7ff] flex items-center justify-center shrink-0">
                                                    <img
                                                        src={`https://api.dicebear.com/7.x/bottts/svg?seed=${review.name}&backgroundColor=b6e3f4,c0aede,d1d4f9`}
                                                        alt={review.name}
                                                        className="w-12 h-12"
                                                    />
                                                </div>
                                                <div className="pt-1">
                                                    <h4 className="font-bold text-slate-900 text-lg leading-tight mb-1">{review.name}</h4>
                                                    <div className="flex text-yellow-400">
                                                        {[...Array(5)].map((_, i) => (
                                                            <Star key={i} size={18} fill="currentColor" stroke="none" />
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="text-slate-600 text-[15px] leading-relaxed font-medium">
                                                "{review.text}"
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Navigation Buttons */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center text-slate-400 bg-white hover:text-[#005a9c] hover:border-[#005a9c] transition-all z-10"
                            aria-label="Previous"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center text-slate-400 bg-white hover:text-[#005a9c] hover:border-[#005a9c] transition-all z-10"
                            aria-label="Next"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>

                    {/* Simple Dots */}
                    <div className="flex justify-center gap-3 mt-12">
                        {testimonials && testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentIndex(i)}
                                className={`h-1.5 transition-all duration-300 rounded-full ${currentIndex % testimonials.length === i ? 'w-8 bg-[#072b47]' : 'w-2 bg-slate-200'}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Last Section (Trust Grid - Static Cards) */}
            <section className="py-24 bg-slate-50/30">
                <div className="max-w-[1440px] mx-auto px-4 md:px-6">
                    <h2 className="text-3xl lg:text-[40px] font-semibold text-center text-[#072b47] mb-12 tracking-tighter leading-tight">
                        500+ People Connect With Trusted Legal Experts Every Day
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">

                        <div className="bg-white py-6 px-10 rounded-[40px] border border-slate-300 shadow-sm text-center flex flex-col items-center h-fit">
                            <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-4 text-[#072b47]">
                                <Scale size={36} strokeWidth={1.2} />
                            </div>
                            <h3 className="text-[22px] font-bold text-[#072b47] mb-4 tracking-tight leading-tight">4350+ top<br />legal experts</h3>
                            <p className="text-slate-500 leading-relaxed font-bold text-[15px] opacity-70">
                                Connecting people with right legal expertise across 500 cities
                            </p>
                        </div>

                        <div className="bg-white py-6 px-10 rounded-[40px] border border-slate-300 shadow-sm text-center flex flex-col items-center h-fit">
                            <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-4 text-[#072b47]">
                                <Users size={36} strokeWidth={1.2} />
                            </div>
                            <h3 className="text-[22px] font-bold text-[#072b47] mb-4 tracking-tight leading-tight">Comprehensive<br />Support</h3>
                            <p className="text-slate-500 leading-relaxed font-bold text-[15px] opacity-70">
                                Our lawyers go beyond consultation, guiding you through every step.
                            </p>
                        </div>

                        <div className="bg-white py-6 px-10 rounded-[40px] border border-slate-300 shadow-sm text-center flex flex-col items-center h-fit">
                            <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-4 text-[#072b47]">
                                <ThumbsUp size={36} strokeWidth={1.2} />
                            </div>
                            <h3 className="text-[22px] font-bold text-[#072b47] mb-4 tracking-tight leading-tight">5,00,000<br />Satisfied Clients</h3>
                            <p className="text-slate-500 leading-relaxed font-bold text-[15px] opacity-70">
                                Get immediate advice & help from relevant lawyers in your city.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
};

export default LawyerSpecializationLayout;
