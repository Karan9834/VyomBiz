// import React from "react";

// const PageTemplate = ({ title }) => {
//     return (
//         <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
//             <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-8 animate-pulse text-4xl">
//                 🏗️
//             </div>
//             <h1 className="text-4xl md:text-5xl font-black text-slate-800 mb-4 tracking-tighter">
//                 {title}
//             </h1>
//             <p className="text-lg text-slate-500 max-w-md mx-auto leading-relaxed font-medium">
//                 We're currently building something amazing for <span className="text-blue-600 font-bold">{title}</span>.
//                 Stay tuned as we transform the digital landscape!
//             </p>
//             <div className="mt-10 flex gap-4">
//                 <a href="/" className="px-8 py-3 bg-[#072b47] text-white font-bold rounded-xl shadow-lg hover:shadow-blue-200 hover:-translate-y-1 transition-all">
//                     Go Back Home
//                 </a>
//             </div>
//         </div>
//     );
// };

// export default PageTemplate;















const PageTemplate = ({ title, children }) => {
  return (
    <>
      {/* Show children if provided */}
      {children && <>{children}</>}

      {/* Fallback if no children */}
      {!children && (
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
          <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-8 animate-pulse text-4xl">
            🏗️
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-800 mb-4 tracking-tighter">
            {title}
          </h1>
          <p className="text-lg text-slate-500 max-w-md mx-auto leading-relaxed font-medium">
            We're currently building something amazing for{" "}
            <span className="text-blue-600 font-bold">{title}</span>.
          </p>
        </div>
      )}
    </>
  );
};

export default PageTemplate;