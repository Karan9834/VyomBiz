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

        // We know we have unclosed `<div id="registration-hero">` before `<HeroLayout...`
        // We need to find where `<HeroLayout ` ends with `/>` and insert `</div>` after it.
        // We only do this if we see `<div id="registration-hero">` but it's not closed.

        let hasOpenDiv = content.includes('<div id="registration-hero">');

        if (hasOpenDiv) {
            // Find `<div id="registration-hero">` followed by `<HeroLayout`
            // and capture everything up to the closing `/>` for HeroLayout.
            // Note: HeroLayout could be self-closing `/>` or maybe there are multiple HeroLayouts.

            // Regex to match `<div id="registration-hero">\s*<HeroLayout[\s\S]*?\/>`
            // Let's replace it with `<div id="registration-hero">\n<HeroLayout ... />\n</div>`
            // BUT we should avoid wrapping it twice if it already has </div> right after!

            let targetRegex = /(<div id="registration-hero">\s*<HeroLayout[\s\S]*?(?:\/>))\s*(?!<\/div>)/g;

            // Actually, we must be careful not to match too greedily. 
            // the `[\s\S]*?` makes it lazy, so it stops at the first `/>`.
            // Wait, what if there's already a `</div>` after it? The negative lookahead `(?!<\/div>)` handles that.

            let match = content.match(targetRegex);
            if (match) {
                content = content.replace(targetRegex, "$1\n            </div>\n");
                modified = true;
            }
        }

        if (modified) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log('Fixed ' + filePath);
            count++;
        }
    }
});

console.log(`Fixed ${count} files.`);
