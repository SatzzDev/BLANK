const axios = require('axios');
const cheerio = require('cheerio');

async function tenorSearch(query) {
    try {
        const response = await axios.get(`https://tenor.com/search/${query}`);
        const html = response.data;
        const $ = cheerio.load(html, { xmlMode: false });
        let result = [];
        $('div.GifList div.Gif').each((index, element) => {
            const url = $(element).find('img').attr('src');
            result.push(url);
        });
        return {
            status: 'ok',
            creator:'SatganzDevs',
            urls: result
        };
    } catch (error) {
        console.error('Error scraping:', error);
        return {
            status: 'error',
            error: error.message
        };
    }
}

tenorSearch('johan-liebert').then(data => console.log(data)).catch(error => console.error(error));
