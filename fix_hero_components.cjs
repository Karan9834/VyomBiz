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

walkDir('d:/Vyombiz/VyomBiz/src/components', function (filePath) {
    if (filePath.endsWith('.jsx')) {
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;

        // Fix double </div> </div> around the return block in Hero.jsx 
        // Example:
        //             />
        //             </div>
        //  </div>
        //     );
        const target = /(\/>\r?\n)\s*<\/div>\r?\n\s*<\/div>\r?\n(\s*\);)/g;
        if (target.test(content)) {
            content = content.replace(target, "$1        </div>\n$2");
            modified = true;
        }

        if (modified) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log('Fixed ' + filePath);
        }
    }
});
