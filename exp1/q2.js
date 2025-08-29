const fs = require('fs');
const filePath = '"C:\Users\ishowrage\OneDrive\Desktop\expo1.txt"'; 

fs.readFile(filePath, 'utf8', (err, data) => {
	if (err) {
		if (err.code === 'ENOENT') {
			console.error('Error: File not found!');
		} else {
			console.error('Error reading file:', err);
		}
		return;
	}
	console.log('File contents:', data);
});
