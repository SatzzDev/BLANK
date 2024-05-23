//Created By Satganzdevs 
// Copyright (c) Satganzdevs
// Do Not Change!

const axios = require('axios');
const FormData = require('form-data');


async function loveTik() {
try {
console.log('started');
const formData = new FormData();
formData.append('query', 'https://www.tiktok.com/@langkait/video/7345058642485382401?is_from_webapp=1&sender_device=pc');
const response = await axios.post('https://lovetik.com/api/ajax/search', formData, {
headers: formData.getHeaders() // Menambahkan header yang diperlukan untuk FormData
});
let video = response.data.links[0].a
let audio = response.data.links[2].a
return {
status: 'ok',
developer: "SatganzDevs",
cover: response.data.cover,
desc: response.data.desc,
author: {
username: response.data.author,
name: response.data.author_name,
avatar: response.data.author_a
},
video,
audio
}

} catch (error) {
console.error('Error scraping:', error);
}
}



module.exports = {loveTik}
