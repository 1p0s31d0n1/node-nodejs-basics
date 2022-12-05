const fs = require('fs');
const path = require('path');
const read = async () => {
    const fileStream = fs.createReadStream(path.join(__dirname, 'files','fileToRead.txt'), 'utf-8');
    fileStream.on('readable', () => {
        let data = fileStream.read();
        if (data !== null) process.stdout.write(data);
        //fileStream.destroy();
    });
};

read();