const fs = require('fs');
const path = require('path');

const files = [
    'ISO27001Registration',
    'ISO9001Registration',
    'ISO20000Registration',
    'ISO31000Registration',
    'ISO13485Registration',
    'ISO21101Registration',
    'ISO16001Registration',
    'ISO2768Registration'
];

const basePath = 'd:/Vyombiz/VyomBiz/src/pages/startup/ISO';

files.forEach(file => {
    const title = file.replace('Registration', '');
    const content = `import React from "react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

const Overview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Overview of ${title}
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                    Content for ${title} is currently being updated.
                </p>
            </div>
        </section>
    );
};

const ${file} = () => {
    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            <HeroLayout
                heroTitleMain="${title}"
                heroTitleSuffix="Certification"
                heroSubtitle="Standardization"
                heroDescription="Ensure your business meets international standards."
                whatsIncludedList={["Compliance Audit", "Document Review"]}
                stats={[]}
            />
            <DetailsLayout
                overview={<Overview />}
                advantages={<></>}
                eligibility={<></>}
                documents={<></>}
                process={<></>}
                features={<></>}
            />
            <FAQLayout
                title="FAQs on ${title} Certification"
                subtitle="Frequently Asked Questions"
                faqs={[]}
            />
        </div>
    );
};

export default ${file};
`;

    fs.writeFileSync(path.join(basePath, file + '.jsx'), content);
});

console.log("Files created successfully.");
