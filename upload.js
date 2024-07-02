// uploadFolder.js
const PinataSDK = require('@pinata/sdk');
const path = require('path');
require('dotenv').config();

const pinataApiKey = process.env.PINATA_API_KEY;
const pinataSecretApiKey = process.env.PINATA_SECRET_API_KEY;

if (!pinataApiKey || !pinataSecretApiKey) {
    console.error('Please provide both PINATA_API_KEY and PINATA_SECRET_API_KEY in the environment variables.');
    process.exit(1);
}

const pinata = new PinataSDK(pinataApiKey, pinataSecretApiKey);

console.log('API Key:', pinataApiKey);
console.log('Secret API Key:', pinataSecretApiKey);

const directoryPath = path.join(__dirname, 'coretoshisMetaData');

pinata.pinFromFS(directoryPath).then((result) => {
    console.log('Folder pinned successfully:', result);
}).catch((err) => {
    console.error('Error pinning folder:', err);
    console.error('Error details:', err.details);
});
