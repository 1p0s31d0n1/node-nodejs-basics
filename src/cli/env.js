const parseEnv = () => {
    let a = [];
    for(let i in process.env)
        if (i.startsWith('RSS_'))
            a.push(`${i}=${process.env[i]}`);
    let result = '';
    a.forEach(i => {
        result += i === a[a.length-1] ? i : (i + '; ');
    });
    console.log(result);
};

parseEnv();