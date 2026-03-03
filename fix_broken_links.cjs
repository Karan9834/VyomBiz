const fs = require("fs");
const path = require("path");

const dirs = [
    "d:/Vyombiz/VyomBiz/src/pages/startup"
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

// Replace broken syntax across all files
dirs.forEach(dir => {
    const files = walkSync(dir).filter(f => f.endsWith(".jsx"));

    files.forEach(file => {
        let content = fs.readFileSync(file, "utf8");

        // Check if file contains broken onClick
        if (!content.includes("onClick={() = to=\"/general-info\"")) {
            return;
        }

        let updated = content.replace(/onClick=\{\(\) = to="\/general-info"/g, ""); // Remove the bad attribute
        // Also Squeeze multiple spaces inside <Link
        updated = updated.replace(/<Link\s+/g, "<Link ");

        if (updated !== content) {
            if (!updated.includes("import { Link } from") && !updated.includes("import {Link} from")) {
                updated = `import { Link } from "react-router-dom";\n` + updated;
            }
            fs.writeFileSync(file, updated);
            console.log("Fixed broken Link syntax in " + file);
        }
    });
});
