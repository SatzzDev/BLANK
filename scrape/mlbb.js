const axios = require('axios');
const cheerio = require('cheerio');

async function soundML(query) {
return new Promise(async (resolve, reject) => {
try {
const res = await axios.get("https://mobile-legends.fandom.com/wiki/" + query + "/Audio/id");
const html = res.data;
const $ = cheerio.load(html);
const result = [];

$('audio').each((i, el) => {
const audio = $(el).attr('src');
const lirik = $(el).parent().parent().text().split(".ogg")[1].trim(); 
result.push({ audio, lirik });
});
resolve(result);
} catch (error) {
reject(new Error('Failed to fetch data'));
}
});
}


soundML('joy')
.then(data => console.log(data))
.catch(error => console.error(error));
