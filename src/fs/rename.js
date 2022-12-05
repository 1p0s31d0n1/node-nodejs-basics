const fs = require('fs');
const path = require('path');
const rename = async () => {
    if (!fs.existsSync(path.join(__dirname,'files', 'properFilename.md')) &&
        fs.existsSync(path.join(__dirname, 'files', 'wrongFilename.txt'))) {
        fs.rename(path.join(__dirname, 'files', 'wrongFilename.txt'), path.join(__dirname, 'files', 'properFilename.md'),
            err => {
            if (err) throw err;
            });
    } else {
        throw new Error('FS operation failed');
    }
};

rename();