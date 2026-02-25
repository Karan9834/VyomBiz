const fetch = require('node-fetch');
const cheerio = require('cheerio');

async function scrape() {
    const res = await fetch('https://corpbiz.io/shop-establishment-license');
    const html = await res.text();
    const $ = cheerio.load(html);

    console.log('--- Overview ---');
    console.log($('.about_company_content').text().trim().substring(0, 500));

    console.log('\n--- Headings ---');
    $('h2, h3').each((i, el) => console.log($(el).text().trim()));

    console.log('\n--- Content ---');
    $('.about_company_content p, .about_company_content ul li').each((i, el) => {
        console.log($(el).text().trim().substring(0, 100)); // Sample content
    });
}

scrape().catch(console.error);
