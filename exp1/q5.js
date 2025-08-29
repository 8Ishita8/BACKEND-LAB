const fs = require('fs');
const filePath = 'exp1/output.txt';

const writeStream = fs.createWriteStream(filePath);

writeStream.write('Hello, Chhhhhheeeeeeshita', 'utf8', () => {
    console.log('Data written successfully to output.txt');
    writeStream.end();
});

writeStream.on('error', (err) => {
    console.error('Error writing to file:', err.message);
});