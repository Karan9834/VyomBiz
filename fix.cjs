const fs = require('fs');
const path = require('path');

const dir = 'd:/Vyombiz/VyomBiz/src/pages/ip-trademark/Trademarks India/';
const files = [
    'TrademarkRegistration.jsx',
    'IntellectualPropertyDispute.jsx',
    'TrademarkAssignment.jsx',
    'TrademarkClassesFinder.jsx',
    'TrademarkOpposition.jsx'
];

files.forEach(f => {
    let p = path.join(dir, f);
    let s = fs.readFileSync(p, 'utf8');
    s = s.replace(/\\nconst/g, '\nconst');
    fs.writeFileSync(p, s);
});
console.log('Fixed syntax errors');
