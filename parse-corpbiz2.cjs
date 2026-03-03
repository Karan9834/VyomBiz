const c = require('cheerio');
const fs = require('fs');

const html = fs.readFileSync('corpbiz.html', 'utf8');
const $ = c.load(html);

let out = '';
$('h1, h2, h3, h4, p, li').each(function (i, el) {
    const tag = el.tagName.toLowerCase();
    const text = $(el).text().replace(/\s+/g, ' ').trim();
    if (text) {
        out += tag.toUpperCase() + ': ' + text + '\n';
    }
});

fs.writeFileSync('corpbiz-parsed.txt', out);
console.log('Successfully wrote to corpbiz-parsed.txt');
