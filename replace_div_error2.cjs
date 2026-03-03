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

        // Remove `</div>` inside the stats array if it exists before `},`
        // We can just match any `</div>\s*},` inside the file because `</div> },` is almost ALWAYS wrong in React (can't have a stray closing div right before a closing object brace)

        // Let's replace `</div>\s*},` with `},` ONLY if it is inside the `stats={[ ... ]}` array.
        // Actually, in JSX, `</div> },` is always a syntax error since it would either be JSX or an object literal. You can't mix them like that.

        const target = /<\/div>\s*\},\n*?\s*\{/g;
        if (target.test(content)) {
            content = content.replace(target, "},\n{");
            modified = true;
        }

        const target2 = /<\/div>\s*\},/g;
        if (target2.test(content)) {
            // only replace if preceded by `/>` with possible spaces/newlines
            content = content.replace(/(\/>)\s*<\/div>\s*\}/g, "$1 }");
            content = content.replace(/(\/>)\s*<\/div>\s*\},/g, "$1 },");
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
