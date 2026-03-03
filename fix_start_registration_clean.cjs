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

// Regex to catch messed up Link tags (or remaining buttons) containing Start Your Registration
// It matches either <Link...> ... Start Your Registration ... </Link>
// or <button...> ... Start Your Registration ... </button>
const tagRegex = /<(?:Link|button)([^>]*)>([\s\S]*?)(Start Your Registration(?: Now)?)([\s\S]*?)<\/(?:Link|button)>/g;

dirs.forEach(dir => {
    const files = walkSync(dir).filter(f => f.endsWith(".jsx"));

    files.forEach(file => {
        let content = fs.readFileSync(file, "utf8");

        if (!content.includes("Start Your Registration")) {
            return;
        }

        let updated = content.replace(tagRegex, (match, p1, p2, p3, p4) => {
            let attrs = p1;

            // Remove bad to="/" stuff
            attrs = attrs.replace(/onClick=\{\(\) = to="\/general-info"/g, ""); // The bad regex replacement
            attrs = attrs.replace(/to="\/general-info"/g, ""); // Clean all of these
            attrs = attrs.replace(/onClick=\{[^{}]*\}/g, ""); // Clean ALL onClick=...
            attrs = attrs.replace(/onClick=\{\(\) => window\.scrollTo\(\{ top: 0, behavior: 'smooth' \}\)\}/g, "");
            attrs = attrs.replace(/onClick=\{\(\) => window\.scrollTo\(\{ top: 0, behavior: "smooth" \}\)\}/g, "");

            // Squeeze multiple spaces
            attrs = attrs.replace(/\s+/g, " ").trim();

            return `<Link ${attrs} to="/general-info" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>${p2}${p3}${p4}</Link>`;
        });

        if (updated !== content) {
            if (!updated.includes("import { Link } from") && !updated.includes("import {Link} from")) {
                updated = `import { Link } from "react-router-dom";\n` + updated;
            }
            fs.writeFileSync(file, updated);
            console.log("Fixed cleanly " + file);
        }
    });
});
