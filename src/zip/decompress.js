const zlib = require('zlib');
const fs = require('fs');
const path = require('path');
const decompress = async () => {
    let inputStream = fs.createReadStream(path.join(__dirname,'files','archive.gz'));
    let outputStream = fs.createWriteStream(path.join(__dirname, 'files','fileToCompress.txt'));
    let unzip = zlib.createUnzip();
    inputStream.pipe(unzip).pipe(outputStream);
};

decompress();