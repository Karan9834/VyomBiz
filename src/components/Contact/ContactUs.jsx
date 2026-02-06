import React from "react";
import {
    Phone,
    Mail,
    MapPin,
    Headphones,
    Building2,
} from "lucide-react";

const branches = [
    {
        title: "Noida Branch",
        address:
            "B 78 Sector 60 Noida U.P. 201301 Uttar Pradesh",
    },
    {
        title: "Delhi Branch",
        address:
            "105, 10th Floor, Arunachal Building, Barakhamba Road, Connaught Place, New Delhi 110001",
    },
    {
        title: "Mumbai Branch",
        address:
            "2nd Floor, Kagalwala House, Plot No. 175, Behind Metro House CST Road, Kalina, Bandra Kurla Complex, Santacruz East, Mumbai, Maharashtra 400098",
    },
    {
        title: "Bengaluru Branch",
        address:
            "315, 1st Floor, Blue Pearl 14th B Cross, 7th Main, Sector 6, HSR Layout, Bengaluru, Karnataka 560102",
    },
    {
        title: "Chennai Branch",
        address:
            "Karuna Conquest Park 2nd Floor, 7 Chennai Tiruvallur High Rd, Ambattur Industrial Estate, Chennai, Tamil Nadu 600058, India",
    },
    {
        title: "Kolkata Branch",
        address:
            "43, PALACE COURT, FIRST FLOOR, 1 KYD STREET KOLKATA 700016 WB INDIA",
    },
    {
        title: "Patna Branch",
        address:
            "Raja Bazar Road, Nandpuri, Plot no 70, Patna, Bihar, Pin code 840001, India",
    },
    {
        title: "Muzaffarpur Branch",
        address:
            "Mini Yagnashala Complex Akharaghat Road Muzaffarpur Bihar Pin 842002, India",
    },
    {
        title: "Sitamarhi & Nepal Control Branch",
        address:
            "Back side of DM office, Dumra Administrative zone Adarsh Nagar New Children Park Sitamarhi, India",
    },
];

const ContactUs = () => {
    return (
        <div className="w-full bg-white">

            {/* =================== SECTION 1: BANNER =================== */}
            <section className="bg-white">
                <div className="container mx-auto px-6 lg:px-20 py-16 flex flex-col lg:flex-row items-center justify-between">

                    <div className="max-w-2xl">
                        <h1 className="text-4xl font-bold mb-4">Contact US</h1>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            At VyomBiz, we aim to bestow the exquisite Environmental Compliance,
                            financial, Legal Compliance, and secretarial services through the internet.
                            However, if you are not satisfied with our services, please get in touch
                            with us immediately. We will correct the situation and provide a refund
                            or offer credit adjusted in future VyomBiz orders.
                        </p>
                    </div>

                    <div className="mt-10 lg:mt-0">
                        <img
                            src="/contact-banner.png"
                            alt="contact-banner"
                            className="w-[400px]"
                        />
                    </div>
                </div>
            </section>


            {/* =================== SECTION 2: QUICK SUPPORT =================== */}
            <section className="bg-gray-50 py-16">
                <div className="container mx-auto px-6 lg:px-20">

                    <h2 className="text-2xl font-semibold mb-10">
                        Quick Support
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                        {/* LEFT FORM */}
                        <div className="lg:col-span-2 bg-white p-8 rounded border shadow-sm">

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input
                                    type="text"
                                    placeholder="Full Name*"
                                    className="border rounded px-4 py-2 text-sm"
                                />
                                <input
                                    type="email"
                                    placeholder="Email*"
                                    className="border rounded px-4 py-2 text-sm"
                                />
                                <input
                                    type="text"
                                    placeholder="Mobile number*"
                                    className="border rounded px-4 py-2 text-sm"
                                />
                                <select className="border rounded px-4 py-2 text-sm">
                                    <option>Select State*</option>
                                    <option>Punjab</option>
                                    <option>Delhi</option>
                                    <option>Haryana</option>
                                </select>
                            </div>

                            <textarea
                                rows="5"
                                placeholder="Type Your Query Here"
                                className="w-full border rounded px-4 py-3 text-sm mt-6"
                            ></textarea>

                            <div className="text-center mt-6">
                                <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-6 py-2 rounded">
                                    Send Request
                                </button>
                            </div>
                        </div>

                        {/* RIGHT CARDS */}
                        <div className="space-y-6">

                            <div className="bg-[#fff7e6] border rounded p-6">
                                <div className="flex gap-3">
                                    <MapPin className="text-blue-600" />
                                    <div>
                                        <h3 className="font-semibold mb-2">
                                            Head Offices
                                        </h3>
                                        <p className="text-sm text-gray-600">
                                            B Block, Plot No 78, Sector 60, Noida,
                                            Uttar Pradesh 201301
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-[#f0fbff] border rounded p-6">
                                <div className="flex gap-3">
                                    <Headphones className="text-blue-600" />
                                    <div>
                                        <h3 className="font-semibold mb-3">
                                            For Quick Inquiries
                                        </h3>
                                        <p className="flex items-center gap-2 text-sm text-gray-600">
                                            <Phone size={16} /> +91 7983977099
                                        </p>
                                        <p className="flex items-center gap-2 text-sm text-gray-600 mt-2">
                                            <Phone size={16} /> +91 912330280
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-[#fff7e6] border rounded p-6">
                                <div className="flex gap-3">
                                    <Mail className="text-blue-600" />
                                    <div>
                                        <h3 className="font-semibold mb-3">
                                            Email us
                                        </h3>

                                        <div className="flex justify-between text-sm mb-2">
                                            <span>For Sales</span>
                                            <span className="text-blue-600">
                                                info@VyomBiz.io
                                            </span>
                                        </div>

                                        <div className="flex justify-between text-sm mb-2">
                                            <span>For Complaints</span>
                                            <span className="text-blue-600">
                                                help@VyomBiz.io
                                            </span>
                                        </div>

                                        <div className="flex justify-between text-sm">
                                            <span>For Careers</span>
                                            <span className="text-blue-600">
                                                hr@VyomBiz.io
                                            </span>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>


            {/* =================== SECTION 3: OUR BRANCHES =================== */}
            <section className="bg-white py-20">
                <div className="container mx-auto px-6 lg:px-20">

                    <h2 className="text-3xl font-semibold text-center mb-14">
                        Our Branches in India
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {branches.map((branch, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 p-6 rounded border hover:shadow-sm transition"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white border">
                                        <Building2 size={18} className="text-blue-600" />
                                    </div>

                                    <div>
                                        <h3 className="font-semibold text-sm mb-2">
                                            {branch.title}
                                        </h3>
                                        <p className="text-xs text-gray-600 leading-relaxed mb-3">
                                            {branch.address}
                                        </p>

                                        <button className="text-blue-600 text-xs border border-blue-600 px-3 py-1 rounded hover:bg-blue-600 hover:text-white transition">
                                            Get Direction
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

        </div>
    );
};

export default ContactUs;
