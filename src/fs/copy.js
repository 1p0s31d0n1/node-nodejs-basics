const fs = require('fs');
const path = require('path');
const copy = async () => {
    if (fs.existsSync(path.join(__dirname, 'files')) && !fs.existsSync(path.join(__dirname, 'files_copy'))) {
        fs.readdir(path.join(__dirname,'files'), (err, files) => {
            if (err) throw err;
            fs.mkdir(path.join(__dirname,'files_copy'), (err) => {
                if (err) throw err;
            })
            files.forEach((fileName) => {
                fs.copyFileSync(path.join(__dirname,'files',fileName),
                    path.join(__dirname, 'files_copy', fileName));
            });
        });
    } else {
        throw new Error('FS operation failed');
    }
};

await copy();
