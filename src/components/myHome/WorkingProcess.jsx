// WorkingProcess.tsx
import React from "react";
// import applicationIcon from "../public/fill.png";
// import paymentIcon from "../assets/payment.png";
// import executiveIcon from "../assets/executive.png";
// import mailIcon from "../assets/mail.png";
// Or if you want to use your uploaded image for all, import that instead
// import iconImage from "../assets/c4946ed2-df60-4b05-ab3e-af26b99b5250.png";

const processSteps = [
  {
    id: 1,
    title: "Fill Up Application Form",
    icon: "/fill-up-application-form.png",
    bgColor: "bg-[#072b47]",
  },
  {
    id: 2,
    title: "Make Online Payment",
    icon: "/make-online-payment.png",
    bgColor: "bg-[#f1a134]",
  },
  {
    id: 3,
    title: "Executive will process Application",
    icon: "/executive-will-process-application.png",
    bgColor: "bg-[#072b47]",
  },
  {
    id: 4,
    title: "Get Confirmation on Mail",
    icon: "/get-confirmation-on-mail.png",
    bgColor: "bg-[#f1a134]",
  },
];

const WorkingProcess = () => {
  return (
    <section className="py-16 bg-white text-center">
      <div className="container mx-auto px-6 lg:px-24">
        {/* Heading */}
        <h2 className="text-4xl font-black text-slate-900 mb-4">Our Working Process</h2>

        {/* Orange line separator as seen in image */}
        <div className="w-16 h-1 bg-[#f1a134] mx-auto mb-16 rounded-full"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {processSteps.map((step) => (
            <div
              key={step.id}
              className={`${step.id % 2 !== 0 ? 'bg-[#004a80]' : 'bg-[#f2a33c]'} py-12 px-6 rounded-lg flex flex-col items-center justify-center transition-all duration-300 shadow-lg`}
            >
              <div className="mb-6">
                <img
                  src={step.icon}
                  alt={step.title}
                  className="w-16 h-16 object-contain brightness-0 invert"
                />
              </div>
              <h4 className="text-white font-bold text-lg leading-tight">
                {step.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;