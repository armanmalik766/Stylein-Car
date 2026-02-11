const https = require('https');

// Known Pexels IDs for Toyota Camry / Similar Sedans (Interior/Exterior)
const potentialIds = [
    '11491335', // Modern white sedan
    '170811',   // Silver sedan side profile (Porsche-ish but good generic)
    '112460',   // Generic luxury car front
    '120049',   // Car on road
    '3802510',  // White car studio
    '1592384',  // Modern car front

    // Interior
    '376361',   // Generic luxury interior
    '164634',   // Steering wheel close up
    '804130',   // Car dashboard
    '627678',   // Leather seats
    '687653'    // Modern dashboard
];

function checkUrl(id) {
    return new Promise((resolve) => {
        // Pexels image URL pattern
        const url = `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=800`;

        https.get(url, (res) => {
            if (res.statusCode === 200) {
                console.log(`VALID: ${url}`);
                resolve(url);
            } else {
                // Try alternate extension .jpg
                const urlJpg = `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=800`;
                // actually just resolve null for now to be safe
                console.log(`INVALID: ${id} (${res.statusCode})`);
                resolve(null);
            }
        }).on('error', (e) => {
            console.error(`ERROR: ${id}`, e.message);
            resolve(null);
        });
    });
}

async function checkAll() {
    console.log("Checking potential Pexels IDs...");
    const validUrls = [];
    for (const id of potentialIds) {
        const url = await checkUrl(id);
        if (url) validUrls.push(url);
    }
    console.log("Completed.");
}

checkAll();
