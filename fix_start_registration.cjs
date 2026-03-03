const fs = require("fs");
const path = require("path");

const dirs = [
    "d:/Vyombiz/VyomBiz/src/pages/startup/Global Incorporation",
    "d:/Vyombiz/VyomBiz/src/pages/startup/Government Licenses"
];

const walkSync = (dir, filelist = []) => {
    fs.readdirSync(dir).forEach(file => {
        const dirFile = path.join(dir, file);
        try {
            filelist = fs.statSync(dirFile).isDirectory() ? walkSync(dirFile, filelist) : filelist.concat(dirFile);
        } catch (err) { }
    });
    return filelist;
};

dirs.forEach(dir => {
    const files = walkSync(dir).filter(f => f.endsWith(".jsx"));

    files.forEach(file => {
        let content = fs.readFileSync(file, "utf8");

        // Check if file contains "Start Your Registration" 
        if (!content.includes("Start Your Registration")) {
            return;
        }

        let updated = content.replace(/<button([^>]*)>([\s\S]*?)(Start Your Registration(?: Now)?)([\s\S]*?)<\/button>/g, (match, p1, p2, p3, p4) => {
            let attrs = p1;

            // Clean exact onClicks
            attrs = attrs.replace(/onClick=\{\(\) => window\.scrollTo\(\{ top: 0, behavior: 'smooth' \}\)\}/g, "");
            attrs = attrs.replace(/onClick=\{\(\) => window\.scrollTo\(\{ top: 0, behavior: "smooth" \}\)\}/g, "");

            if (!attrs.includes("to=\"/general-info\"")) {
                attrs += " to=\"/general-info\"";
            }

            attrs += " onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}";

            return `<Link${attrs}>${p2}${p3}${p4}</Link>`;
        });

        if (updated !== content) {
            if (!updated.includes("import { Link } from") && !updated.includes("import {Link} from")) {
                updated = `import { Link } from "react-router-dom";\n` + updated;
            }
            fs.writeFileSync(file, updated);
            console.log("Fixed " + file);
        }
    });
});
