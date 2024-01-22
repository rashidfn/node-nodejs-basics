
process.env.RSS_name1 = 'value1';
process.env.RSS_name2 = 'value2';

const parseEnv = () => {
    const entries = Object.entries(process.env).filter(([key]) => key.startsWith('RSS_'));
    entries.forEach(([key, value], index) => {
        const end = index === entries.length - 1 ? '' : '; ';
        process.stdout.write(`${key}=${value}${end}`);
    })
};

parseEnv();