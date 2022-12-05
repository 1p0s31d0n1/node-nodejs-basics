const parseArgs = () => {
    let result = '';
    for (let i = 0; i < process.argv.length; i++) {
        if (process.argv[i].startsWith('--')) {
            let a = `${process.argv[i].replace('--','')} is ${process.argv[i+1]}`;
            result += (i+2 === process.argv.length) ? a : `${a}, `;
        }
    }
    console.log(result);
};

parseArgs();