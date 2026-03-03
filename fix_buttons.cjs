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
walkDir('src/pages/startup', (filePath) => {
    let content = fs.readFileSync(filePath, 'utf8');

    // Only modify buttons that don't already have onClick
    // Since some buttons might have onClick inside attributes, we are looking for `<button className="bg-[#f59e0b]...`
    // We will find instances of `<button className="bg-[#f59e0b]`
    // If it's missing onClick entirely in that tag, we can carefully add it.

    // A robust way conceptually:
    const regex = /<button(\s+className="bg-\[#f59e0b\])/g;
    let newContent = content.replace(regex, (match, p1) => {
        return `<button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}${p1}`;
    });

    if (newContent !== content) {
        fs.writeFileSync(filePath, newContent, 'utf8');
        count++;
    }
});
console.log('Fixed buttons in ' + count + ' files.');
