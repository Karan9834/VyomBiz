import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";

const Section8 = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        city: "",
        state: ""
    });
    const [errors, setErrors] = useState({});
    const [isSuccess, setIsSuccess] = useState(false);

    const validateForm = () => {
        const newErrors = {};

        if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
            newErrors.name = "Only letters allowed";
        } else if (formData.name.trim().length < 2) {
            newErrors.name = "Name too short";
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Invalid email";
        } else {
            const domain = formData.email.split('@')[1].toLowerCase();
            const blockedDomains = ['yahoo.com', 'hotmail.com', 'outlook.com', 'aol.com', 'icloud.com', 'ymail.com', 'rediffmail.com', 'live.com'];
            if (blockedDomains.includes(domain)) {
                newErrors.email = "Use Work Mail or Gmail only";
            }
        }

        if (!/^[0-9]{10}$/.test(formData.phone)) {
            newErrors.phone = "Exactly 10 digits required";
        }

        if (!/^[a-zA-Z\s]+$/.test(formData.city)) {
            newErrors.city = "Only letters allowed";
        }

        if (!formData.state) {
            newErrors.state = "State is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'phone') {
            const numericValue = value.replace(/\D/g, '').slice(0, 10);
            setFormData(prev => ({ ...prev, [name]: numericValue }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: null }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        const text = `Hello, I'm interested in Company Registration.

My Details:
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone}
- City: ${formData.city}
- State: ${formData.state}`;
        const whatsappLink = `https://wa.me/918448909389?text=${encodeURIComponent(text)}`;
        window.open(whatsappLink, "_blank");

        setIsSuccess(true);
        setFormData({ name: "", email: "", phone: "", city: "", state: "" });
    };

    return (
        <div className="min-h-[calc(100vh-80px)] bg-gradient-to-r from-[#f7f7f7] via-[#f3f3f3] to-[#f0f0f0] flex items-center justify-center px-6 py-10">
            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* LEFT SIDE */}
                <div>
                    {/* Logo */}
                    <h1 className="text-4xl font-bold text-gray-700 mb-8">
                        <span className="text-[#1c4e80]">Vyom</span>
                        <span className="text-orange-500">Biz</span>
                    </h1>

                    {/* Heading */}
                    <h2 className="text-4xl font-bold leading-snug mb-4">
                        <span className="text-orange-500">10,000+</span>{" "}
                        <span className="text-[#1c4e80]">
                            India’s Trusted Company Registration Platform
                        </span>{" "}
                        <span className="text-orange-500">Per Year</span>
                    </h2>

                    <p className="text-gray-600 mb-8 text-lg">
                        10% of all Indian businesses register with us.
                    </p>

                    {/* Points */}
                    <div className="space-y-6 text-gray-700">
                        <div>
                            <p className="font-semibold">
                                ✓ Complete Your Company Registration in Just 5 Hours
                            </p>
                            <p className="text-sm text-gray-500">
                                Expand your business without having to wait.
                            </p>
                        </div>

                        <div>
                            <p className="font-semibold">
                                ✓ Verified by Experienced Professionals
                            </p>
                            <p className="text-sm text-gray-500">
                                Every application is carefully checked to avoid delays or rejections.
                            </p>
                        </div>

                        <div>
                            <p className="font-semibold">
                                ✓ 100% Money back guarantee T&C*
                            </p>
                            <p className="text-sm text-gray-500">
                                Get a Full Refund If Not Fully Satisfied.
                            </p>
                        </div>
                    </div>

                    {/* Moving Logos */}
                    <div className="mt-12 overflow-hidden relative">
                        <div className="flex gap-16 whitespace-nowrap logo-scroll">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/4/4a/FIA_logo.svg"
                                alt="fia"
                                className="h-10"
                            />
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/5/5e/DHFL_Logo.svg"
                                alt="dhfl"
                                className="h-10"
                            />
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/5/57/Bank_of_Baroda_logo.svg"
                                alt="bank"
                                className="h-10"
                            />
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/9/95/Stripe_Logo%2C_revised_2016.svg"
                                alt="stripe"
                                className="h-10"
                            />

                            {/* Duplicate for smooth infinite scroll */}
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/4/4a/FIA_logo.svg"
                                alt="fia"
                                className="h-10"
                            />
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/5/5e/DHFL_Logo.svg"
                                alt="dhfl"
                                className="h-10"
                            />
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/5/57/Bank_of_Baroda_logo.svg"
                                alt="bank"
                                className="h-10"
                            />
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/9/95/Stripe_Logo%2C_revised_2016.svg"
                                alt="stripe"
                                className="h-10"
                            />
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] p-8 w-full max-w-[440px] ml-auto border border-gray-100 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl pointer-events-none" />

                    <div className="flex justify-between items-center mb-6 relative z-10">
                        <h3 className="font-bold text-gray-800 text-xl tracking-tight">
                            Get Expert Assistance
                        </h3>
                        <span className="text-xs font-bold bg-orange-50 text-orange-600 px-2 py-1 rounded-md">Fast Track</span>
                    </div>

                    {isSuccess ? (
                        <div className="text-center py-10 relative z-10">
                            <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-5">
                                <CheckCircle2 size={32} className="text-green-500" />
                            </div>
                            <h4 className="text-xl font-bold text-gray-800 mb-2">Thank you!</h4>
                            <p className="text-gray-500 font-medium text-sm mb-7">Our experts will connect with you shortly.</p>
                            <button
                                onClick={() => setIsSuccess(false)}
                                className="text-orange-500 font-bold text-[12px] uppercase tracking-wider hover:underline"
                            >
                                New Inquiry
                            </button>
                        </div>
                    ) : (
                        <form className="space-y-4 relative z-10" onSubmit={handleSubmit}>
                            <div>
                                <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5 pl-1">Your Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    className={`w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all font-medium text-gray-700 bg-gray-50/50 ${errors.name ? 'border-red-300 focus:ring-red-200 bg-red-50/20' : 'border-gray-200 focus:ring-orange-200 focus:border-orange-400 focus:bg-white'}`}
                                />
                                {errors.name && <p className="text-red-500 text-[10px] font-bold mt-1 ml-1">{errors.name}</p>}
                            </div>

                            <div>
                                <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5 pl-1">Work Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="john@work.com"
                                    className={`w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all font-medium text-gray-700 bg-gray-50/50 ${errors.email ? 'border-red-300 focus:ring-red-200 bg-red-50/20' : 'border-gray-200 focus:ring-orange-200 focus:border-orange-400 focus:bg-white'}`}
                                />
                                {errors.email && <p className="text-red-500 text-[10px] font-bold mt-1 ml-1">{errors.email}</p>}
                            </div>

                            <div>
                                <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5 pl-1">Mobile Number</label>
                                <div className={`flex border rounded-lg overflow-hidden transition-all bg-gray-50/50 ${errors.phone ? 'border-red-300 focus-within:ring-2 focus-within:ring-red-200 bg-red-50/20' : 'border-gray-200 focus-within:ring-2 focus-within:ring-orange-200 focus-within:border-orange-400 focus-within:bg-white'}`}>
                                    <span className="bg-gray-100/80 px-3 flex items-center text-sm font-bold text-gray-500 border-r border-gray-200">
                                        +91
                                    </span>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        maxLength="10"
                                        placeholder="9876543210"
                                        className="w-full px-4 py-3 text-sm focus:outline-none bg-transparent font-medium text-gray-700"
                                    />
                                </div>
                                {errors.phone && <p className="text-red-500 text-[10px] font-bold mt-1 ml-1">{errors.phone}</p>}
                            </div>

                            <div className="flex gap-4">
                                <div className="w-1/2">
                                    <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5 pl-1">City</label>
                                    <input
                                        type="text"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleChange}
                                        placeholder="City"
                                        className={`w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all font-medium text-gray-700 bg-gray-50/50 ${errors.city ? 'border-red-300 focus:ring-red-200 bg-red-50/20' : 'border-gray-200 focus:ring-orange-200 focus:border-orange-400 focus:bg-white'}`}
                                    />
                                    {errors.city && <p className="text-red-500 text-[10px] font-bold mt-1 ml-1">{errors.city}</p>}
                                </div>
                                <div className="w-1/2">
                                    <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5 pl-1">State</label>
                                    <select
                                        name="state"
                                        value={formData.state}
                                        onChange={handleChange}
                                        className={`w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all font-medium text-gray-700 bg-gray-50/50 appearance-none ${errors.state ? 'border-red-300 focus:ring-red-200 bg-red-50/20' : 'border-gray-200 focus:ring-orange-200 focus:border-orange-400 focus:bg-white'}`}
                                    >
                                        <option value="" disabled hidden>Select State</option>
                                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                                        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                        <option value="Assam">Assam</option>
                                        <option value="Bihar">Bihar</option>
                                        <option value="Chhattisgarh">Chhattisgarh</option>
                                        <option value="Goa">Goa</option>
                                        <option value="Gujarat">Gujarat</option>
                                        <option value="Haryana">Haryana</option>
                                        <option value="Himachal Pradesh">Himachal Pradesh</option>
                                        <option value="Jharkhand">Jharkhand</option>
                                        <option value="Karnataka">Karnataka</option>
                                        <option value="Kerala">Kerala</option>
                                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                                        <option value="Maharashtra">Maharashtra</option>
                                        <option value="Manipur">Manipur</option>
                                        <option value="Meghalaya">Meghalaya</option>
                                        <option value="Mizoram">Mizoram</option>
                                        <option value="Nagaland">Nagaland</option>
                                        <option value="Odisha">Odisha</option>
                                        <option value="Punjab">Punjab</option>
                                        <option value="Rajasthan">Rajasthan</option>
                                        <option value="Sikkim">Sikkim</option>
                                        <option value="Tamil Nadu">Tamil Nadu</option>
                                        <option value="Telangana">Telangana</option>
                                        <option value="Tripura">Tripura</option>
                                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                                        <option value="Uttarakhand">Uttarakhand</option>
                                        <option value="West Bengal">West Bengal</option>
                                    </select>
                                    {errors.state && <p className="text-red-500 text-[10px] font-bold mt-1 ml-1">{errors.state}</p>}
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-orange-500 to-orange-400 text-white py-3.5 rounded-lg font-bold hover:shadow-lg hover:shadow-orange-500/20 active:scale-95 transition-all mt-4 tracking-wide shadow-md"
                            >
                                Connect with Expert →
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Section8;