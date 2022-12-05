const fs = require('fs');
const path = require('path');
const remove = async () => {
    if (fs.existsSync(path.join(__dirname, 'files', 'fileToRemove.txt'))) {
        fs.unlink(path.join(__dirname, 'files', 'fileToRemove.txt'), err => {
            if (err) throw err;
        });
    } else {
        throw new Error('FS operation failed');
    }
};

remove();