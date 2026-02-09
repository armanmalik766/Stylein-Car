const fs = require('fs');
const crypto = require('crypto');
const files = [
    '2021_Toyota_Land_Cruiser_300_3.4_ZX_(Colombia)_front_view_02.png',
    'Toyota_Camry_(XV70)_Hybrid_2.5_HEV_Premium_Luxury_02.jpg',
    '2021_Toyota_Fortuner_GR_Sport_2.8_4WD.jpg',
    'Nissan_Patrol_Y62_2020.jpg',
    'Nissan_GT-R_R35_Black_Edition.JPG',
    '23_Kia_Seltos.jpeg',
    'Kia_EV6_GT-Line_IMG_6283.jpg',
    '2024_Hyundai_Creta_Alpha.jpg',
    'Hyundai_Ioniq_5.jpg',
    '2020_Mitsubishi_Pajero_Sport_(Vietnam;_facelift)_front_view_01.png',
    '2022_Mitsubishi_Outlander_SE_S-AWC,_07-29-2022.jpg',
    'Mercedes-Benz_W223_IMG_6663.jpg',
    'Mercedes-Benz_W_463_G500_IAA_2019_JM_0296.jpg',
    '23_BMW_X7_xDrive40i.jpg',
    'BMW_M4_(G82)_IMG_4183.jpg',
    '2022_Porsche_911_GT3_992.jpg',
    'Porsche_Cayenne_(III,_Facelift)_–_f_01012025.jpg',
    'JMN18_Suzuki_Jimny_Sierra_JC_JB74_1.jpg',
    'Suzuki_Grand_Vitara_1.5_GL_2023_(53068765582).jpg',
    'MG_Hector_Plus_(India)_front_view_(1).png',
    '2020_MG_Gloster_2.0_Savvy_(India)_front_view.png',
    'Rolls-Royce_Cullinan_1.jpg',
    '2019_Rolls-Royce_Phantom_VIII.jpg',
    '2020_Bentley_Bentayga_facelift.jpg',
    'Bentley_Continental_GT_V8_Mulliner_(III)_–_f_24042021.jpg',
    '22_Tesla_Model_S_Plaid.jpg',
    'Tesla_Cybertruck_outside_unveil_modA.jpg',
    'BYD_Seal_06_EV_001.jpg',
    'BYD_Atto_3.jpg'
];

let output = '';
files.forEach(f => {
    const name = f.replace(/ /g, '_');
    const hash = crypto.createHash('md5').update(name).digest('hex');
    const url = `https://upload.wikimedia.org/wikipedia/commons/${hash.substring(0, 1)}/${hash.substring(0, 2)}/${name}`;
    output += url + '\n';
});

fs.writeFileSync('urls.txt', output);
console.log('URLs written to urls.txt');
