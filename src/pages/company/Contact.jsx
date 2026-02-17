import React, { useState } from "react";
import { Phone, Mail, MessageCircle, MapPin, Send, Globe, ChevronRight } from "lucide-react";
import PageTemplate from "../../components/common/PageTemplate";
import CTAButton from "../../components/common/CTAButton";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for reaching out! Our experts will contact you shortly.");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      detail: "+91 91212 30280",
      subDetail: "Mon-Sat, 10am-7pm",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600"
    },
    {
      icon: Mail,
      title: "Email Us",
      detail: "info@vyombiz.com",
      subDetail: "24/7 Priority Support",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      detail: "Chat with an Expert",
      subDetail: "Instant Support",
      bgColor: "bg-green-50",
      iconColor: "text-green-600"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      detail: "New Delhi, India",
      subDetail: "Global Presence",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600"
    }
  ];

  return (
    <PageTemplate title="Contact Us">
      {/* Hero Section */}
      <div className="w-full bg-[#072b47] pt-16 pb-24 md:pt-20 md:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 border-2 border-white/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 border-2 border-white/10 rounded-full animate-pulse delay-700"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Let's Start a <span className="text-[#f1a134]">Conversation</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Whether you're starting a new business or scaling an existing one,
            our AI-driven legal & tax experts are here to help you every step of the way.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 -mt-16 md:-mt-20 relative z-20 pb-20">
        <div className="grid lg:grid-cols-3 gap-8">

          {/* Contact Information Cards */}
          <div className="lg:col-span-1 space-y-4">
            {contactInfo.map((info, idx) => (
              <div key={idx} className="bg-white p-6 rounded-3xl shadow-xl border border-slate-100 group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-5">
                  <div className={`w-14 h-14 ${info.bgColor} ${info.iconColor} rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                    <info.icon size={26} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">{info.title}</h3>
                    <p className="text-lg font-bold text-[#072b47] leading-tight">{info.detail}</p>
                    <p className="text-sm font-medium text-slate-500 mt-1">{info.subDetail}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Social Connect Tile */}
            <div className="bg-[#ecf2fd] p-8 rounded-3xl border border-blue-100 mt-8">
              <h3 className="text-xl font-bold text-[#072b47] mb-4">Global Network</h3>
              <p className="text-sm text-slate-600 font-medium mb-6 leading-relaxed">
                Join our network of 100,000+ entrepreneurs and get the latest updates on legal & tax regulations.
              </p>
              <div className="flex gap-3">
                <button className="w-10 h-10 bg-[#072b47] text-white rounded-full flex items-center justify-center hover:bg-[#f1a134] transition-colors"><Globe size={18} /></button>
                <button className="w-10 h-10 bg-[#072b47] text-white rounded-full flex items-center justify-center hover:bg-[#f1a134] transition-colors"><MessageCircle size={18} /></button>
                <button className="w-10 h-10 bg-[#072b47] text-white rounded-full flex items-center justify-center hover:bg-[#f1a134] transition-colors"><Send size={18} /></button>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-200 flex flex-col md:flex-row h-full">

              {/* Form Section */}
              <div className="flex-1 p-8 md:p-12">
                <div className="mb-10">
                  <h2 className="text-3xl font-black text-[#072b47] mb-3 tracking-tight">Sent us a message</h2>
                  <p className="text-slate-500 font-medium">Expected response time: <span className="text-[#f1a134] font-bold">under 2 hours</span></p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full bg-slate-50 border border-slate-300 rounded-2xl px-5 py-4 text-slate-700 font-semibold focus:outline-none focus:ring-2 focus:ring-[#f1a134]/30 focus:bg-white transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Work Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@company.com"
                        className="w-full bg-slate-50 border border-slate-300 rounded-2xl px-5 py-4 text-slate-700 font-semibold focus:outline-none focus:ring-2 focus:ring-[#f1a134]/30 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 00000 00000"
                        className="w-full bg-slate-50 border border-slate-300 rounded-2xl px-5 py-4 text-slate-700 font-semibold focus:outline-none focus:ring-2 focus:ring-[#f1a134]/30 focus:bg-white transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Inquiry Type</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-300 rounded-2xl px-5 py-4 text-slate-700 font-semibold focus:outline-none focus:ring-2 focus:ring-[#f1a134]/30 focus:bg-white transition-all appearance-none"
                      >
                        <option>Select Service</option>
                        <option>Taxation & Filing</option>
                        <option>Business Registration</option>
                        <option>Lawyers Services</option>
                        <option>Intellectual Property</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">How can we help?</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      placeholder="Tell us about your requirements..."
                      className="w-full bg-slate-50 border border-slate-300 rounded-2xl px-5 py-4 text-slate-700 font-semibold focus:outline-none focus:ring-2 focus:ring-[#f1a134]/30 focus:bg-white transition-all resize-none"
                    ></textarea>
                  </div>

                  <div className="pt-4">
                    <CTAButton
                      label="Send Inquiry"
                      className="!w-full !py-5 !text-lg !rounded-2xl shadow-xl shadow-[#f1a134]/20"
                    />
                  </div>

                  <p className="text-center text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                    Secure & Confidential • AI-Driven Analytics • Expert Review
                  </p>
                </form>
              </div>

              {/* Sidebar Info Section */}
              <div className="w-full md:w-1/3 bg-[#072b47] p-8 md:p-12 text-white flex flex-col justify-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#f1a134]/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

                <div className="relative z-10 space-y-10">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-black tracking-tight">Why Talk to Us?</h3>
                    <div className="space-y-4">
                      {[
                        "100k+ Successful Registrations",
                        "99.9% Client Satisfaction",
                        "AI-Powered Real-time Tracking",
                        "24/7 Expert Advisory"
                      ].map((benefit, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-[#f1a134] flex items-center justify-center shrink-0">
                            <ChevronRight size={12} className="text-white" strokeWidth={3} />
                          </div>
                          <span className="text-sm font-semibold text-white/90">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
                    <p className="text-sm italic font-medium text-white/80 leading-relaxed mb-4">
                      "VyomBiz transformed our manual compliance into a seamless automated process. Best legal-tech platform in India."
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-300"></div>
                      <div>
                        <p className="text-xs font-black uppercase text-[#f1a134]">Aditya Sharma</p>
                        <p className="text-[10px] font-bold text-white/50">Founder, TechScale</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Offices Section */}
        <div className="mt-24 pb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#072b47] mb-4">Our Offices</h2>
            <div className="w-16 h-1 bg-[#f1a134] mx-auto rounded"></div>
          </div>

          <div className="relative">
            {/* World Map Background Pattern */}
            <div
              className="absolute inset-x-0 top-0 h-full opacity-5 pointer-events-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cpath d='M30,30 L32,30 L32,32 L30,32 Z M50,50 L52,50 L52,52 L50,52 Z M70,20 L72,20 L72,22 L70,22 Z' fill='%23072b47' /%3E%3C/svg%3E")`,
                backgroundSize: '200px'
              }}
            ></div>

            <div className="grid md:grid-cols-3 gap-12 relative z-10">
              {/* Office 1 */}
              <div className="text-center group">
                <div className="mb-6 inline-block">
                  <div className="flex flex-col items-center gap-2">
                    <img src="https://flagcdn.com/w40/in.png" alt="India" className="w-10 shadow-sm rounded-sm" />
                    <h3 className="text-xl font-black text-[#072b47] tracking-wider uppercase mt-2">GURGAON</h3>
                  </div>
                </div>
                <p className="text-slate-600 font-medium leading-relaxed mb-6 px-4">
                  1102, 11th Floor, JMD Megapolis, Sec-48, Gurgaon-122018, Haryana, India
                </p>
                <div className="space-y-1">
                  <p className="text-[#072b47] font-bold"><span className="text-slate-400 font-black mr-2">P:</span> +0124-4001495</p>
                  <p className="text-[#072b47] font-bold"><span className="text-slate-400 font-black mr-2">E:</span> Info@kryosssoftech.org</p>
                </div>
              </div>

              {/* Office 2 */}
              <div className="text-center group">
                <div className="mb-6 inline-block">
                  <div className="flex flex-col items-center gap-2">
                    <img src="https://flagcdn.com/w40/in.png" alt="India" className="w-10 shadow-sm rounded-sm" />
                    <h3 className="text-xl font-black text-[#072b47] tracking-wider uppercase mt-2">GURGAON</h3>
                  </div>
                </div>
                <p className="text-slate-600 font-medium leading-relaxed mb-6 px-4">
                  348-352, Spaze IT Park, Sec-48, Gurgaon-122018, Haryana, India
                </p>
                <div className="space-y-1">
                  <p className="text-[#072b47] font-bold"><span className="text-slate-400 font-black mr-2">P:</span> +0124-4001298</p>
                  <p className="text-[#072b47] font-bold"><span className="text-slate-400 font-black mr-2">E:</span> Info@kryosssoftech.org</p>
                </div>
              </div>

              {/* Office 3 */}
              <div className="text-center group">
                <div className="mb-6 inline-block">
                  <div className="flex flex-col items-center gap-2">
                    <img src="https://flagcdn.com/w40/in.png" alt="India" className="w-10 shadow-sm rounded-sm" />
                    <h3 className="text-xl font-black text-[#072b47] tracking-wider uppercase mt-2">PUNE</h3>
                  </div>
                </div>
                <p className="text-slate-600 font-medium leading-relaxed mb-6 px-4">
                  C-601, Pune IT Park, 34 Aundh Road, Bhau Patil Marg, Pune – 411020 Maharashtra, India.
                </p>
                <div className="space-y-1">
                  <p className="text-[#072b47] font-bold"><span className="text-slate-400 font-black mr-2">P:</span> +91-020-411208</p>
                  <p className="text-[#072b47] font-bold"><span className="text-slate-400 font-black mr-2">E:</span> info@kryosssoftech.org</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default Contact;
