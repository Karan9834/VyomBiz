const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        if (fs.statSync(dirPath).isDirectory()) {
            walkDir(dirPath, callback);
        } else if (f.endsWith('.jsx')) {
            callback(dirPath);
        }
    });
}

let count = 0;
const targetDirs = ['src/pages', 'src/components'];

targetDirs.forEach(dir => {
    if (fs.existsSync(dir)) {
        walkDir(dir, (filePath) => {
            let content = fs.readFileSync(filePath, 'utf8');

            // Find buttons containing "Check Your Eligibility Now"
            let updated = false;

            // We match <button ...> ... Check Your Eligibility Now ... </button>
            // Taking care not to match across multiple buttons.
            // Using a non-greedy match that doesn't contain </button> before the target text
            const regex = /<button(?:(?!<\/button>)[\s\S])*?Check Your Eligibility Now[\s\S]*?<\/button>/g;

            let newContent = content.replace(regex, (match) => {
                updated = true;
                const classMatch = match.match(/className="(.*?)"/);
                const className = classMatch ? classMatch[1] : "";
                return `<Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} to="/general-info" className="${className}">\n                        Check Your Eligibility Now\n                    </Link>`;
            });

            if (updated) {
                // Check if Link is imported
                if (!newContent.includes('import { Link }')) {
                    newContent = `import { Link } from "react-router-dom";\n` + newContent;
                }
                fs.writeFileSync(filePath, newContent, 'utf8');
                count++;
                console.log('Fixed', filePath);
            }
        });
    }
});

console.log('Fixed buttons in ' + count + ' files.');
