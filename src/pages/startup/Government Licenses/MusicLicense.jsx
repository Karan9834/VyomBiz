import React from 'react';
import { ShieldCheck, Anchor, Music } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

const MusicOverview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            Copyright Compliance
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            Music License in India – <span className="text-[#005a9c]">An Overview</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Any individual or business entity does not have the authority to play music in public places for any commercial purpose without having a music license. Copyright Act, 1957 has made it compulsory for all cafes, restaurants, hotels, pubs, and bars playing music on their premises to obtain music licenses.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            A music License is a formal process of taking legal permission for the validation & protection of musical work. If a person or an entity uses someone's songs that a third party will listen to, they critically need to have this license indicating explicit usage & term rights.
                        </p>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Who Issues a Music License?
                        </h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            There are two organizations that heavily dictate this sector: The <b>Phonographic Performance Limited (PPL)</b> issues licenses to business units wanting to play pre-recorded music on their premises. Meanwhile, the <b>Indian Performing Right Societies (IPRS)</b> issues the license if a business intends to have live singers/concerts on their premises.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80"
                            alt="Music License Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const MusicAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        Operational Safety
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of Securing a Music License
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Besides ensuring you follow regulatory mandates, securing an IPRS or PPL music license helps amplify your venue's reputation, guarantees copyright protection, and drives crowd engagement naturally through live and immersive musical environments.
                    </p>
                    <div className="mt-10">
                        <img
                            src="https://images.unsplash.com/photo-1516280440503-625d97f374ea?auto=format&fit=crop&q=80"
                            alt="Music License Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Compliance With Authorities", desc: "The license ensures that the business entity maintains compliance. Any establishment caught playing music without a license is heavily fined by the Government of India." },
                        { title: "Amplify Regional Reputation", desc: "By getting the IPRS music license, public performances can officially happen at restaurants/pubs; this straightforwardly attracts crowd density and amplifies reputation." },
                        { title: "Increase Business Popularity", desc: "Live events boost public interest compared to pre-recorded tracks. The overall popularity of such establishments intrinsically escalates with hosted artist events." },
                        { title: "Copyright Protection", desc: "Operating legally respects the efforts of the original artist. Under the Copyrights Act, 1957, original works are protected against unjust reproduction and stolen distribution." }
                    ].map((item, index) => (
                        <div key={index} className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
                            <h3 className="text-[20px] font-semibold text-[#072b47] mb-3">
                                {item.title}
                            </h3>
                            <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const MusicEligibility = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Fundamental Requirements to Apply
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    To obtain a dedicated music license for your restaurant, store, or venue, you require to look into a few operational variables that define the tariff and category of your license:
                </p>

                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Venue Dimensions & Capacity
                    </h3>
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside">
                        <li>Calculate the general audible range of the music generated.</li>
                        <li>Measure the total area up to which the music is audible (Sq meters).</li>
                        <li>Specify the total number of physical seats in your establishment.</li>
                    </ul>
                </div>

                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Performance Details
                    </h3>
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside">
                        <li>Detail the specific venue type (dining, bar, restrooms, kitchen corridor).</li>
                        <li>Declare the exact playback hardware used (Radio, TVs, Computer audio, Jukebox).</li>
                        <li>Indicate if it involves live human artists or merely pre-recorded tracks.</li>
                    </ul>
                </div>

                <div className="mt-12 text-center">
                    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                        Assess License Tariff
                    </button>
                </div>
            </div>
        </section>
    );
};

const MusicDocumentsSection = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documentation Checklist
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    Compile the following business documentation before filing the application for either an IPRS or PPL music license:
                </p>

                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-3">Basic Identity</h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed">Personal details regarding the applicant (Name, Address, Nationality).</p>
                </div>
                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-3">Entity Drafts</h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed">Certificate of Incorporation + MOA/AOA (if a Company), or LLP agreement.</p>
                </div>
                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-3">Music Logs</h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed">A detailed and comprehensive list tracking the types of music that will be played.</p>
                </div>
                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-3">Tax Registrations</h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed">PAN Card details and Active GST Registration certificate.</p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-3">Address Proof</h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed">Valid Utility Bills, Electricity bill, or municipal proof identifying the physical business premise.</p>
                </div>

                <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-md">
                    <h4 className="text-[#072b47] font-semibold text-lg mb-1">Categories of Execution</h4>
                    <p className="text-sm text-slate-700">Remember there are six different tiers of music licenses encompassing Master, Sync, Mechanical, Print, Theatrical, and Public Performance variations. The documents strictly adjust according to the distribution method chosen by your business model.</p>
                </div>
            </div>
        </section>
    );
};

const MusicProcessSection = () => {
    const steps = [
        {
            title: "Visit The Official Website",
            desc: "Access the IPRS website (for live performances) or the PPL portal (for pre-recorded playback)."
        },
        {
            title: "Select License Category",
            desc: "Choose the correct music license variation accurately reflecting your operational venue/event setup."
        },
        {
            title: "Complete Application Credentials",
            desc: "Input Name of the Premises, Tax details (GST/PAN), intended audience numbers, and business operations."
        },
        {
            title: "Review Tariff T&Cs",
            desc: "Acknowledge the calculated tariff cost imposed for every specific music license service based on area/size."
        },
        {
            title: "Online Verification & Payment",
            desc: "Verify via SMS/Email OTP, followed by remitting the mandatory Government/Agency fees through gateways."
        },
        {
            title: "Issue of Certificate",
            desc: "Once payment hits the ledger successfully, licensing authorities grant an official 'Introduction Letter' reflecting active registration."
        }
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        Process to get Music License in India
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Executing standard compliance for musical copyrights demands traversing official regulatory sites meticulously:
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img
                            src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80"
                            alt="Music License Process"
                            className="w-full rounded-lg shadow-sm sticky top-32"
                        />
                    </div>
                    <div className="lg:col-span-2">
                        {steps.map((step, index) => (
                            <div key={index} className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-200">
                                <div className="text-[16px] font-semibold text-[#072b47]">
                                    {index + 1}.
                                </div>
                                <div>
                                    <h3 className="text-[18px] font-semibold text-[#072b47]">
                                        {step.title}
                                    </h3>
                                    <p className="text-[16px] text-slate-600 mt-1 leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                        <div className="border-t border-slate-200"></div>
                        <div className="mt-12 text-center">
                            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                                Start Your Application Process
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const MusicFeaturesSection = () => {
    const features = [
        {
            title: "Sync License",
            desc: "Where previously created music is synced with visual media (e.g., TV commercials, advertising agencies, film studios)."
        },
        {
            title: "Mechanical License",
            desc: "Makes artists' creations available to the public via CDs and online publishing but prohibits direct adaptation without royalty agreements."
        },
        {
            title: "Master License",
            desc: "Allows the holder to use a pre-recorded version of the song in an audio-visual project, usually paired directly with a sync license."
        },
        {
            title: "Public Performance License",
            desc: "The most common tier for businesses, obtained to broadcast copyrighted work safely in public venues (Restaurants, Malls)."
        }
    ];

    return (
        <section className="w-full py-14 bg-[#f8fafc]">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Types of Music Licenses Explained
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        To safeguard copyrighted material across multiple distribution sectors, various operational license templates exist:
                    </p>
                </div>

                <div>
                    {features.map((feature, index) => (
                        <div key={index} className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                            <div className="text-[15px] font-semibold text-[#072b47]">
                                {index + 1}.
                            </div>
                            <div>
                                <h3 className="text-[16px] font-semibold text-[#072b47]">
                                    {feature.title}
                                </h3>
                                <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                    {feature.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                    <div className="border-t border-slate-300"></div>
                </div>
            </div>
        </section>
    );
};

const MusicLicense = () => {
    const faqs = [
        {
            question: "What are the core organizations providing music licenses?",
            answer: "Phonographic Performance Limited (PPL) handles pre-recorded track usage across venues, while the Indian Performing Right Societies (IPRS) issues compliance for live concert/artist exhibitions."
        },
        {
            question: "What happens if a restaurant breaches copyright laws?",
            answer: "An individual/owner caught publicly presenting unauthorized music faces strict penalties, which include detention for no less than six months (extendable up to three years) and a substantial fine crossing up to two lakh rupees."
        },
        {
            question: "Can I use music in a commercial advertisement?",
            answer: "Yes, but it strictly requires an intricate 'Sync License' alongside a 'Master License' if you want to integrate pre-developed audio logic inside visual media intended for public promotion."
        },
        {
            question: "What determines the fee or tariff for a general mall/cafe?",
            answer: "Authorities estimate the fee by computing the square footage area of the retail/dining floor, the total seat count in the establishment, the hardware delivery mechanisms used, and the raw location."
        },
        {
            question: "Is there an exception for purely structural or ambient noises?",
            answer: "Section 2(p) of the Act only protects tangible musical creations (songs, melodies). Utterly ambient non-copyrighted noise tracks strictly devoid of any artist registry avoid license requirement, provided no lyrics or formal compositions run."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Music License"
                heroTitleSuffix="in India"
                heroSubtitle="Secure Your PPL/IPRS Regulatory Registrations"
                heroDescription="Need a music license to safely play audio at your venue? Get fully vetted clearance online with complete documentation guidance directly mapped with the government agencies."
                whatsIncludedList={[
                    "Calculate Official Tariffs",
                    "Choose Between PPL & IPRS",
                    "Handle Form Submissions",
                    "Get Full Copyright Safety"
                ]}
                stats={[
                    { count: "100%", label: "Digital Workflow", icon: <Anchor size={20} /> },
                    { count: "PPL/IPRS", label: "Covered", icon: <Music size={20} /> },
                    { count: "Zero", label: "Penalties", icon: <ShieldCheck size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={<MusicOverview />}
                advantages={<MusicAdvantages />}
                eligibility={<MusicEligibility />}
                documents={<MusicDocumentsSection />}
                process={<MusicProcessSection />}
                features={<MusicFeaturesSection />}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Top Questions Regarding Music License"
                subtitle="Know about copyright protection standards."
                faqs={faqs}
            />
        </div>
    );
};

export default MusicLicense;
