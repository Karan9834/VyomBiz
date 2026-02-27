const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    if (fs.existsSync(dir)) {
        fs.readdirSync(dir).forEach(f => {
            let dirPath = path.join(dir, f);
            let isDirectory = fs.statSync(dirPath).isDirectory();
            if (isDirectory) {
                walkDir(dirPath, callback);
            } else {
                callback(path.join(dir, f));
            }
        });
    }
}

let count = 0;
walkDir('d:/Vyombiz/VyomBiz/src', function (filePath) {
    if (filePath.endsWith('.jsx')) {
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;

        // Check if file has `<div id="registration-hero">`
        if (content.includes('<div id="registration-hero">')) {
            // Find `HeroLayout` closing. It's usually `            />`
            // Let's replace `            />\r\n` or `            />\n` with `            />\n            </div>\n`
            // But we must NOT do it if it's already there.

            // To be safe, we look for `\n            />` followed by `\n` and something that is NOT `</div>`
            const target = /\n(\s*)\/>\n\s*(?!<\/div>)(<TrustedBrands|<DetailsLayout|\{\/\*)/g;
            const targetRn = /\r\n(\s*)\/>\r\n\s*(?!<\/div>)(<TrustedBrands|<DetailsLayout|\{\/\*)/g;

            if (targetRn.test(content)) {
                content = content.replace(targetRn, "\r\n$1/>\r\n$1</div>\r\n$1$2");
                modified = true;
            } else if (target.test(content)) {
                content = content.replace(target, "\n$1/>\n$1</div>\n$1$2");
                modified = true;
            } else {
                // some might not have TrustedBrands or DetailsLayout.
                // Let's just find `\n            />\n\n            `
                const fallback = /\n( +)\/>\n+( +)(<[A-Za-z])/g;
                content = content.replace(fallback, (match, p1, p2, p3) => {
                    // Check if p3 is not `</div>`
                    if (p3 === '<div') {
                        // could be a new section, safe to close registration hero
                        return `\n${p1}/>\n${p1}</div>\n\n${p2}${p3}`;
                    } else if (!match.includes('</div>')) {
                        return `\n${p1}/>\n${p1}</div>\n\n${p2}${p3}`;
                    }
                    return match;
                });
                modified = true; // just to try
            }
        }

        // One more cleanup: FssaiRenewal had:
        // icon: <Clock size={20} />
        //             
        // },
        // Let's fix missing `}` or stray newlines in stats exactly if any.
        content = content.replace(/icon:\s*<[A-Za-z0-9]+\s+size=\{20\}\s*\/>\s*\n\s*\},\n/g, "icon: <Clock size={20} /> },\n");

        if (modified) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log('Fixed ' + filePath);
            count++;
        }
    }
});

console.log(`Checked/Fixed files. Count is rough.`);
