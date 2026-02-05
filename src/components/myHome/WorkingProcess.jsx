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
    // icon: applicationIcon,
     icon: "/fill-up-application-form.png",
    bgColor: "bg-blue-900",
  },
  {
    id: 2,
    title: "Make Online Payment",
    icon: "/make-online-payment.png",
    bgColor: "bg-yellow-500",
  },
  {
    id: 3,
    title: "Executive will process Application",
    icon: "/executive-will-process-application.png",
    bgColor: "bg-blue-900",
  },
  {
    id: 4,
    title: "Get Confirmation on Mail",
    icon: "/get-confirmation-on-mail.png",
    bgColor: "bg-yellow-500",
  },
];

const WorkingProcess = () => {
  return (
    <section className="py-16 bg-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2">Our Working Process</h2>
        <div className="w-16 h-1 bg-yellow-500 mx-auto mb-12 rounded"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {processSteps.map((step) => (
            <div
              key={step.id}
              className={`${step.bgColor} p-8 rounded-xl flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300`}
            >
              <img src={step.icon} alt={step.title} className="w-16 h-16 mb-4" />
              <h4 className="text-white font-semibold text-lg">{step.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;
