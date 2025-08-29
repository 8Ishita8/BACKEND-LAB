const fs = require('fs');

const readStream = fs.createReadStream('exp1/input.txt', 'utf8');
const writeStream = fs.createWriteStream('exp1/output.txt');

readStream.pipe(writeStream);

writeStream.on('finish', () => {
    console.log('Backend lab completed successfully.');
});

readStream.on('error', (err) => {
    console.error('Error reading input.txt:', err.message);
});

writeStream.on('error', (err) => {
    console.error('Error writing to output.txt:', err.message);
});