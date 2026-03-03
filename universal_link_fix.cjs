const fs = require('fs');
const path = require('path');

const targetLabels = [
    "Start Your Company Registration Now",
    "Request Consultation",
    "Launch Your NGO with Experts",
    "Secure Your NGO License Now",
    "Start Your 12A & 80G Registration Now",
    "Start Your Section 8 Company Registration Now",
    "Start Your Society Registration Now",
    "Start Your Trust Registration Now",
    "Start Your CSR Journey Now",
    "Get Tax Advisory Support Now",
    "Start Your Tax Advisory Now",
    "Get Accounting Support Now",
    "Start Your Accounting Setup Now",
    "Start Your Project Report Now",
    "Get Compliance Support Now",
    "Start Your Compliance Filing Now",
    "Start Your Registration",
    "Start Your Registration Now",
    "Check Your Eligibility Now",
    "Get Your Certificate",
    "Start Your Setup",
    "Start Your Plant Setup",
    "Get Your Address",
    "Apply for Shop Act License",
    "Start CE Marking Process",
    "Assess Applicant Eligibility",
    "Let Experts Manage Your Filing",
    "Find My Trade Category",
    "Let Experts Manage Your Application",
    "Assess License Tariff",
    "Start Your Application Process",
    "Let Us Process It Remotely",
    "Verify Your Eligibility Status",
    "Verify Your Target Market Today",
    "Let Experts Process Your Filing",
    "Start Free Udyam Registration",
    "Assess Organization Compliance",
    "Start Employer PF Registration",
    "Check Your Project Eligibility",
    "Start Registration Journey",
    "Verify MSME Udyam Eligibility",
    "Expedite Filing Processes Now",
    "Assess Current Employee Wages",
    "Verify Organizational Eligibility",
    "Start Your Certification Flow",
    "Start Your Certification Audit",
    "Request Food Safety Audit",
    "Start Your PDCA Process",
    "Start Your Certification Process",
    "Begin Your Certification Journey",
    "Start Tourism Certification",
    "Secure Anti-Bribery Certification",
    "Request VyomBiz Assistance",
    "Request Road Safety Audit",
    "Request Facility Audit"
];

const walkSync = (dir, filelist = []) => {
    fs.readdirSync(dir).forEach(file => {
        const dirFile = path.join(dir, file);
        if (fs.statSync(dirFile).isDirectory()) {
            filelist = walkSync(dirFile, filelist);
        } else {
            filelist.push(dirFile);
        }
    });
    return filelist;
};

// Escape special chars like & explicitly if needed
const escapedLabels = targetLabels.map(l => l.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
const regexStr = `<(button|a|Link)([\\s\\S]*?)(className=(['"][^'"]*['"]|\\{.*?\\}))([\\s\\S]*?)>\\s*(${escapedLabels.join('|')})\\s*<\\/\\1>`;
const tagRegex = new RegExp(regexStr, 'g');

const files = walkSync('d:/Vyombiz/VyomBiz/src').filter(f => f.endsWith('.jsx'));

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');

    let updated = content.replace(tagRegex, (match, tag, beforeClass, classStr, classInner, afterClass, label) => {
        return `<Link to="/general-info" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} ${classStr}>\n                                ${label}\n                            </Link>`;
    });

    if (updated !== content) {
        if (!updated.includes("import { Link } from") && !updated.includes("import {Link} from")) {
            if (updated.includes("import React")) {
                updated = updated.replace(/import React[^;]*;\n/, "$&\nimport { Link } from \"react-router-dom\";\n");
            } else {
                updated = `import { Link } from "react-router-dom";\n` + updated;
            }
        }
        fs.writeFileSync(file, updated, 'utf8');
        console.log("Re-applied completely clean links to: " + file);
    }
});
