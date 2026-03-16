import fs from 'fs';
const file = 'd:/New folder/VyomBiz/src/constants/litigation-content.js';
let content = fs.readFileSync(file, 'utf8');

console.log(content.slice(-200));
