const fs = require('fs');
const path = require('path');

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

const files = walkSync('d:/Vyombiz/VyomBiz/src').filter(f => f.endsWith('.jsx'));
let fixes = 0;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    if (content.includes('<Link ') || content.includes('<Link>')) {
        if (!content.includes('import { Link } from') && !content.includes('import {Link} from')) {
            if (content.includes("import React")) {
                content = content.replace(/import React[^;]*;(\r?\n)?/, "$&\nimport { Link } from \"react-router-dom\";\n");
            } else {
                content = `import { Link } from "react-router-dom";\n` + content;
            }
            fs.writeFileSync(file, content, 'utf8');
            console.log("Added missing Link import to: " + file);
            fixes++;
        }
    }
});

console.log("Total fixes: " + fixes);
