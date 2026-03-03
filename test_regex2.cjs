const fs = require('fs');
const content = fs.readFileSync('src/pages/startup/Global Incorporation/CompanyRegistrationUSA.jsx', 'utf8');
const match = content.match(/<button([^>]*)>[\s\S]*?(Start Your Registration(?: Now)?)[\s\S]*?<\/button>/g);
console.log(match);
