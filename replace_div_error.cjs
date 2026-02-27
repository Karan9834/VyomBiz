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

        // This regex looks for an unclosed div inside the stats array, a common error in the files.
        let targetRegex = /({[^}]+icon:\s*<[^>]+)\/>\s*<\/div>\s*\},/g;
        if (targetRegex.test(content)) {
            content = content.replace(targetRegex, "$1/> },");
            modified = true;
        }

        let targetRegex2 = /({[^}]+icon:\s*<[A-Za-z0-9]+\s+size=\{20\}\s*\/>)\s*<\/div>\s*\},/g;
        if (targetRegex2.test(content)) {
            content = content.replace(targetRegex2, "$1 },");
            modified = true;
        }

        // Just blindly replace any closing div before a closing brace and comma if it's right after an icon
        let targetRegex3 = /(size=\{[0-9]+\}\s*\/>)\s*<\/div>\s*\},/g;
        if (targetRegex3.test(content)) {
            content = content.replace(targetRegex3, "$1 },");
            modified = true;
        }

        if (modified) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log('Fixed ' + filePath);
            count++;
        }
    }
});

console.log(`Fixed ${count} files.`);
