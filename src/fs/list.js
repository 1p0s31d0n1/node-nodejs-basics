const fs = require('fs');
const path = require('path');
const list = async () => {
    fs.exists(path.join(__dirname, 'files'), (exists) => {
        if (exists) {
            fs.readdir(path.join(__dirname, 'files'), (err, files) => {
                if (err) throw err;
                console.log(files);
            });
        } else {
            throw new Error('FS operation failed');
        }
    });
};

list();