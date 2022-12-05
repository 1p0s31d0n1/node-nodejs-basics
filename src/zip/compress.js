const zlib = require('zlib');
const fs = require('fs');
const path = require('path');
const compress = async () => {
    let inputStream = fs.createReadStream(path.join(__dirname, 'files', 'fileToCompress.txt'));
    let outputStream = fs.createWriteStream(path.join(__dirname,'files','archive.gz'));
    let gzip = zlib.createGzip();
    inputStream.pipe(gzip).pipe(outputStream);
};

compress();