const fs = require('fs');
const path = require('path');

const filePath = 'd:\\VyomBiz\\src\\routes\\EnvironmentalRoutes.jsx';
let content = fs.readFileSync(filePath, 'utf8');

// Pattern: path="/environmental/subcategory/slug"
// Replacement: path="/slug"
const newContent = content.replace(/path="\/environmental\/[^\/]+\/([^\/"]+)"/g, 'path="/$1"');

fs.writeFileSync(filePath, newContent);
console.log('Successfully updated EnvironmentalRoutes.jsx');
