const fs = require('fs');
const path = require('path');
const create = async () => {
    try {
        if (fs.existsSync(path.join(__dirname, 'files', 'fresh.txt'))) {
            throw new Error('FS operation failed');
        } else {
            fs.writeFileSync(path.join(__dirname, 'files', 'fresh.txt'), 'I am fresh and young', (err) => {
                if (err) throw err.message;
            });
        }
    } catch (err) {
        console.error(err);
    }
};

create();