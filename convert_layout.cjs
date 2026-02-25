const fs = require('fs');
const path = require('path');

const dir = 'd:/Vyombiz/VyomBiz/src/pages/ip-trademark/Trademarks India/';
const files = [
    'TrademarkRegistration.jsx',
    'IntellectualPropertyDispute.jsx',
    'TrademarkAssignment.jsx',
    'TrademarkClassesFinder.jsx',
    'TrademarkOpposition.jsx'
];

files.forEach(file => {
    let content = fs.readFileSync(path.join(dir, file), 'utf8');

    // Extract eligibility
    // eligibility={{ title: "...", subtitle: "...", list: [ {title:"...", desc:"..."}, ... ] }}
    const eligibilityMatch = content.match(/eligibility=\{\{\s*title:\s*"([^"]*)",\s*subtitle:\s*"([^"]*)",\s*list:\s*\[([\s\S]*?)\]\s*\}\}/);
    // Extract documents
    const documentsMatch = content.match(/documents=\{\{\s*title:\s*"([^"]*)",\s*description:\s*"([^"]*)",\s*list:\s*\[([\s\S]*?)\](?:,\s*imageUrl:\s*"([^"]*)")?\s*\}\}/);
    // Extract process
    const processMatch = content.match(/process=\{\{\s*title:\s*"([^"]*)",\s*subtitle:\s*"([^"]*)",\s*steps:\s*\[([\s\S]*?)\]\s*\}\}/);
    // Extract whyChooseUs
    const whyChooseUsMatch = content.match(/whyChooseUs=\{\{\s*title:\s*"([^"]*)",\s*subtitle:\s*"([^"]*)",\s*list:\s*\[([\s\S]*?)\]\s*\}\}/);

    if (!eligibilityMatch || !documentsMatch || !processMatch || !whyChooseUsMatch) {
        console.log('Could not match all details in', file);
        return;
    }

    const eTitle = eligibilityMatch[1];
    const eSubtitle = eligibilityMatch[2];
    const eListRaw = eligibilityMatch[3];
    const eList = [];
    const eRegex = /\{\s*title:\s*"([^"]*)",\s*desc:\s*"([^"]*)"\s*\}/g;
    let match;
    while ((match = eRegex.exec(eListRaw)) !== null) {
        eList.push({ title: match[1], desc: match[2] });
    }

    const dTitle = documentsMatch[1];
    const dSubtitle = documentsMatch[2];
    const dListRaw = documentsMatch[3];
    const dList = [];
    const dRegex = /"([^"]+)"/g;
    while ((match = dRegex.exec(dListRaw)) !== null) {
        dList.push(match[1]);
    }

    const pTitle = processMatch[1];
    const pSubtitle = processMatch[2];
    const pListRaw = processMatch[3];
    const pList = [];
    const pRegex = /\{\s*step:\s*"([^"]*)",\s*title:\s*"([^"]*)",\s*desc:\s*"([^"]*)"\s*\}/g;
    while ((match = pRegex.exec(pListRaw)) !== null) {
        pList.push({ step: match[1], title: match[2], desc: match[3] });
    }

    const wTitle = whyChooseUsMatch[1];
    const wSubtitle = whyChooseUsMatch[2];
    const wListRaw = whyChooseUsMatch[3];
    const wList = [];
    const wRegex = /\{\s*title:\s*"([^"]*)",\s*desc:\s*"([^"]*)"\s*\}/g;
    while ((match = wRegex.exec(wListRaw)) !== null) {
        wList.push({ title: match[1], desc: match[2] });
    }

    const compName = file.replace('.jsx', '');

    const eligibilityComp = `
const ${compName}Eligibility = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    ${eTitle}
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    ${eSubtitle}
                </p>
                ${eList.map(item => `
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        ${item.title}
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        ${item.desc}
                    </p>
                </div>`).join('')}
            </div>
        </section>
    );
};
`;

    const documentsComp = `
const ${compName}DocumentsSection = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    ${dTitle}
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    ${dSubtitle}
                </p>
                <div className="space-y-4">
                    ${dList.map((item) => `
                    <div className="flex items-start gap-3">
                         <div className="w-2 h-2 rounded-full bg-[#f1a134] mt-2 shrink-0"></div>
                         <p className="text-[17px] text-slate-600 leading-relaxed font-medium">${item}</p>
                    </div>`).join('')}
                </div>
            </div>
        </section>
    );
};
`;

    const processComp = `
const ${compName}ProcessSection = () => {
    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        ${pTitle}
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        ${pSubtitle}
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img
                            src="https://images.unsplash.com/photo-1588776814546-ec7e8a75a3a6?auto=format&fit=crop&q=80"
                            alt="Process"
                            className="w-full rounded-lg shadow-sm"
                        />
                    </div>
                    <div className="lg:col-span-2">
                        ${pList.map((step, idx) => `
                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-200">
                            <div className="text-[16px] font-semibold text-[#072b47]">
                                ${idx + 1}.
                            </div>
                            <div>
                                <h3 className="text-[18px] font-semibold text-[#072b47]">
                                    ${step.title}
                                </h3>
                                <p className="text-[16px] text-slate-600 mt-1 leading-relaxed">
                                    ${step.desc}
                                </p>
                            </div>
                        </div>`).join('')}
                        <div className="border-t border-slate-200"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};
`;

    const featuresComp = `
const ${compName}FeaturesSection = () => {
    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        ${wTitle}
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        ${wSubtitle}
                    </p>
                </div>
                <div>
                    ${wList.map((feature, idx) => `
                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                            <div className="text-[15px] font-semibold text-[#072b47]">
                                ${idx + 1}.
                            </div>
                            <div>
                                <h3 className="text-[16px] font-semibold text-[#072b47]">
                                    ${feature.title}
                                </h3>
                                <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                    ${feature.desc}
                                </p>
                            </div>
                        </div>`).join('')}
                    <div className="border-t border-slate-300"></div>
                </div>
            </div>
        </section>
    );
};
`;

    // Replace DetailsLayout props
    let newContent = content.replace(eligibilityMatch[0], `eligibility={<${compName}Eligibility />}`);
    newContent = newContent.replace(documentsMatch[0], `documents={<${compName}DocumentsSection />}`);
    newContent = newContent.replace(processMatch[0], `process={<${compName}ProcessSection />}`);
    newContent = newContent.replace(whyChooseUsMatch[0], `features={<${compName}FeaturesSection />}`); // Replaced whyChooseUs with features

    // Insert components right before main component definition
    const insertIndex = newContent.indexOf("const " + compName + " = () => {");
    if (insertIndex !== -1) {
        newContent = newContent.slice(0, insertIndex) + eligibilityComp + documentsComp + processComp + featuresComp + '\\n' + newContent.slice(insertIndex);
        fs.writeFileSync(path.join(dir, file), newContent, 'utf8');
        console.log('Successfully updated', file);
    } else {
        console.log('Could not find main component definition in', file);
    }
});
