const axios = require('axios');
const cheerio = require('cheerio');

async function sTele(q) {
try {
const response = await axios.get(`https://tlgrm.eu/stickers/${q}`);
const $ = cheerio.load(response.data);
const imgList = [];
$('.sticker-pack-preview__item').each((index, element) => {
const imgSrc = 'https://tlgrm.eu/' + $(element).find('img.sticker-pack-preview__image').attr('src');
if (imgSrc) {
imgList.push(imgSrc);
}
});
return {
status: 'ok',
developer: "SatganzDevs",
img: imgList
};
} catch (error) {
console.error('Error scraping:', error);
return {
status: 'error',
error: error.message
};
}
}

// Contoh jinkontod
sTele('PEPEtop').then(data => console.log(data)).catch(error => console.error(error));
