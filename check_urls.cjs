const https = require('https');
const crypto = require('crypto');

const files = [
    // Steffen's suggestions & Generic guesses
    'Leather_car_interior_(Unsplash).jpg',
    'Steering_wheel.jpg',
    'Leather_steering_wheel.jpg',
    'Carbon_fibers_car.jpg',
    'Android_Auto_UI.png',
    // Common terms 
    'Car_interior.jpg',
    'Luxury_car_interior.jpg',
    'Rain_droplets_on_car_hood.jpg',
    'Water_beading_on_car_paint.jpg',
    'Paint_protection_film.jpg',
    'Car_detailing.jpg',
    'Widebody_car_kit.jpg',
    'Modified_car.jpg',
    'Carbon_fiber.jpg',
    'Car_door_panel.jpg',
    'Leather_seat.jpg',
    'Car_infotainment.jpg',
    'GPS_navigation_system.jpg'
];

function getWikimediaUrl(filename) {
    const name = filename.replace(/ /g, '_');
    const hash = crypto.createHash('md5').update(name).digest('hex');
    return `https://upload.wikimedia.org/wikipedia/commons/${hash.substring(0, 1)}/${hash.substring(0, 2)}/${name}`;
}

async function checkUrl(url) {
    return new Promise((resolve) => {
        https.get(url, (res) => {
            resolve({ url, status: res.statusCode });
        }).on('error', () => {
            resolve({ url, status: 'error' });
        });
    });
}

async function processFiles() {
    for (const file of files) {
        const url = getWikimediaUrl(file);
        const result = await checkUrl(url);
        if (result.status === 200) {
            console.log(`VALID: ${url}`);
        } else {
            // console.log(`INVALID: ${url} (${result.status})`);
        }
    }
}

processFiles();
