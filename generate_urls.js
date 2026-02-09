const crypto = require('crypto');
const files = [
    '2021_Toyota_Land_Cruiser_300_3.4_ZX_(Colombia)_front_view_02.png',
    'JMN18_Suzuki_Jimny_Sierra_JC_JB74_1.jpg',
    'Rolls-Royce_Cullinan_1.jpg',
    'Bentley_Continental_GT_V8_Mulliner_(III)_–_f_24042021.jpg',
    'BYD_Seal_06_EV_001.jpg',
    '2021_Toyota_Fortuner_GR_Sport_2.8_4WD.jpg'
];

files.forEach(f => {
    // Wikimedia replaces spaces with underscores for the filename part of the URL
    // But for hash calculation, it uses the filename with underscores usually?
    // Let's assume the filename in the URL (title) uses underscores.
    const name = f.replace(/ /g, '_');

    // MD5 hash of the filename with underscores
    const hash = crypto.createHash('md5').update(name).digest('hex');

    // Construct URL
    // Encode URI component for the filename part to handle special chars like parentheses
    const url = `https://upload.wikimedia.org/wikipedia/commons/${hash.substring(0, 1)}/${hash.substring(0, 2)}/${name}`;
    console.log(url);
});
