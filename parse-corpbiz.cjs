const c = require('cheerio');
const fs = require('fs');

const html = fs.readFileSync('corpbiz.html', 'utf8');

const m = html.match(/<div class="about_company_content">([\s\S]*?)<\/div>/);

if (m) {
    const $ = c.load(m[1]);
    let out = '';

    $('h1, h2, h3, h4, p, li').each(function (i, el) {
        const tag = el.tagName.toLowerCase();
        const text = $(el).text().replace(/\s+/g, ' ').trim();
        if (text) {
            out += tag.toUpperCase() + ': ' + text + '\n';
        }
    });

    fs.writeFileSync('corpbiz-parsed.txt', out);
    console.log('Successfully parsed corpbiz.html to corpbiz-parsed.txt');
} else {
    console.log('Class about_company_content not found');
}
