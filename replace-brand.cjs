const fs = require('fs');
const path = require('path');

const dir = 'd:/VyomBiz-main/src/pages/footer/Environmental';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Replace Corpbiz / corpbiz / CorpBiz with VyomBiz
    content = content.replace(/Corpbiz/gi, 'VyomBiz');
    content = content.replace(/cotpbij/gi, 'VyomBiz');

    fs.writeFileSync(filePath, content, 'utf8');
});
console.log('Replaced all instances in ' + files.length + ' files.');
