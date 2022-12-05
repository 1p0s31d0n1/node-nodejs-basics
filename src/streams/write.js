const fs = require('fs');
const path = require('path');
const write = async () => {
    let fileStream = fs.createWriteStream(path.join(__dirname,'files','fileToWrite.txt'),'utf-8');
    process.stdin.pipe(fileStream);
};

write();