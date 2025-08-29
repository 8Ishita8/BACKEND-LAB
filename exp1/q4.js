const fs = require('fs');
const filePath = 'exp1/data.txt';

fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
        console.error('File not found');
        return;
    }
    fs.createReadStream(filePath, 'utf8')
        .on('data', chunk => process.stdout.write(chunk))
        .on('error', error => console.error('Error reading file:', error.message))
        .on('end', () => console.log('\nFile read complete.'));
});