const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const calculateHash = async () => {
    let data = fs.readFileSync(path.join(__dirname, 'files', 'fileToCalculateHashFor.txt'),'utf-8');
    console.log(crypto.createHash('sha256').update(data).digest('hex'));
};

calculateHash();