const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        if (fs.statSync(dirPath).isDirectory()) {
            walkDir(dirPath, callback);
        } else if (f.endsWith('.jsx') || f.endsWith('.js')) {
            callback(dirPath);
        }
    });
}

let count = 0;
const targetDirs = ['src'];

targetDirs.forEach(dir => {
    if (fs.existsSync(dir)) {
        walkDir(dir, (filePath) => {
            let content = fs.readFileSync(filePath, 'utf8');

            let newContent = content
                .replace(/919121230280/g, '918448909389')
                .replace(/9121230280/g, '8448909389')
                .replace(/91212 30280/g, '84489 09389');

            if (content !== newContent) {
                fs.writeFileSync(filePath, newContent, 'utf8');
                count++;
                console.log('Fixed', filePath);
            }
        });
    }
});

console.log('Fixed numbers in ' + count + ' files.');
