const { Transform } = require('stream');
const transform = async () => {
    let data;
    let transform = new Transform({transform(chunk, encoding, callback) {
            callback(null, chunck.toString().split("").reverse().join(""));
        }
    });
    process.stdin.pipe(transform).pipe(process.stdout);
};

transform();