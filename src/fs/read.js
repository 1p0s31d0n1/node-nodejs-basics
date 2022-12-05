const fs = require('fs');
const path = require('path');
const read = async () => {
    fs.exists(path.join(__dirname, 'files', 'fileToRead.txt'), (exists) => {
        if (!exists) throw new Error('FS operation failed');
        fs.readFile(path.join(__dirname, 'files', 'fileToRead.txt'), 'utf-8', (err, fileContent) => {
            if (err) throw err;
            console.log(fileContent);
        })
    });
};

read();