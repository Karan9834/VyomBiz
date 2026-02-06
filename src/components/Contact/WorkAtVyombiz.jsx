import React from "react";
import { Play } from "lucide-react";

const videos = [
    {
        title: "Happy New Year 2023",
        desc: "A glimpse of our journey and achievements.",
        img: "https://picsum.photos/600/400?random=1",
    },
    {
        title: "Diwali Celebration 2022",
        desc: "Celebrating togetherness and joy as one team.",
        img: "https://picsum.photos/600/400?random=2",
    },
    {
        title: "8th Foundation Day",
        desc: "Highlights from our annual celebration.",
        img: "https://picsum.photos/600/400?random=3",
    },
    {
        title: "7th Annual Day Celebration",
        desc: "Award ceremony and team performances.",
        img: "https://picsum.photos/600/400?random=4",
    },
    {
        title: "5th Foundation Day",
        desc: "Overcoming challenges and celebrating success.",
        img: "https://picsum.photos/600/400?random=5",
    },
    {
        title: "Vyombiz – An Introduction",
        desc: "Know how we work and grow together.",
        img: "https://picsum.photos/600/400?random=6",
    },
];

const WorkAtVyombiz = () => {
    return (
        <div className="bg-white w-full">

            {/* ================= HERO SECTION ================= */}
            <section className="py-20 text-center px-6">
                <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900">
                    Work at Vyombiz
                </h1>
                <p className="mt-6 text-gray-600 text-lg max-w-3xl mx-auto">
                    If everyone is moving forward together, success takes care of itself.
                    Work your magic in an environment that values talent, ideas and enthusiasm.
                </p>

                <button className="mt-8 bg-blue-900 hover:bg-blue-800 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                    View Open Positions
                </button>
            </section>

            {/* ================= CULTURE GALLERY ================= */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">

                    <img src="https://picsum.photos/600/400?random=7" className="rounded-lg shadow-md h-64 w-full object-cover" />

                    <div className="grid grid-cols-2 gap-4">
                        <img src="https://picsum.photos/300/200?random=8" className="rounded-lg h-32 object-cover" />
                        <img src="https://picsum.photos/300/200?random=9" className="rounded-lg h-32 object-cover" />
                        <img src="https://picsum.photos/300/200?random=10" className="rounded-lg h-32 object-cover" />
                        <img src="https://picsum.photos/300/200?random=11" className="rounded-lg h-32 object-cover" />
                    </div>

                    <img src="https://picsum.photos/600/400?random=12" className="rounded-lg shadow-md h-64 w-full object-cover" />
                    <img src="https://picsum.photos/600/400?random=13" className="rounded-lg shadow-md h-64 w-full object-cover" />

                </div>
            </section>

            {/* ================= WHY JOIN SECTION ================= */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">

                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Why Join Vyombiz?
                        </h2>
                        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
                            We nurture talent and create opportunities for growth, learning and collaboration.
                        </p>
                    </div>

                    {/* Block 1 */}
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Healthy Work Culture</h3>
                            <p className="text-gray-600">
                                A positive environment that values diversity, inclusivity and work-life balance.
                            </p>
                        </div>
                        <img
                            src="https://picsum.photos/600/400?random=14"
                            className="rounded-lg shadow-lg w-full object-cover"
                        />
                    </div>

                    {/* Block 2 */}
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                        <img
                            src="https://picsum.photos/600/400?random=15"
                            className="rounded-lg shadow-lg w-full object-cover order-2 md:order-1"
                        />
                        <div className="order-1 md:order-2">
                            <h3 className="text-xl font-semibold mb-4">
                                Holistic Learning Opportunities
                            </h3>
                            <p className="text-gray-600">
                                Continuous learning through training, workshops and skill development.
                            </p>
                        </div>
                    </div>

                    {/* Block 3 */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Community Exposure</h3>
                            <p className="text-gray-600">
                                Exposure through events, networking and global platforms.
                            </p>
                        </div>
                        <img
                            src="https://picsum.photos/600/400?random=16"
                            className="rounded-lg shadow-lg w-full object-cover"
                        />
                    </div>

                </div>
            </section>

            {/* ================= ADVENTURE SECTION ================= */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">

                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold">
                            Work Is An Adventure With Fun & Celebration!
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

                        {videos.map((video, index) => (
                            <div key={index} className="group">
                                <div className="relative overflow-hidden rounded-lg shadow-md">
                                    <img
                                        src={video.img}
                                        alt={video.title}
                                        className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="bg-white/80 p-4 rounded-full shadow-lg">
                                            <Play className="w-6 h-6 text-blue-900" />
                                        </div>
                                    </div>
                                </div>
                                <h3 className="mt-4 font-semibold">{video.title}</h3>
                                <p className="mt-2 text-sm text-gray-600">{video.desc}</p>
                            </div>
                        ))}

                    </div>
                </div>
            </section>

        </div>
    );
};

export default WorkAtVyombiz;
