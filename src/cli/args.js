const parseArgs = () => {
    const args = process.argv.slice(2);
    args.forEach((arg, index) => {
        const prefix = index > 0 ? ', ' : '';
        if (arg.startsWith('--')) {
            process.stdout.write(`${prefix}${arg.slice(2)} is ${args[index + 1]}`);
        }
    });
};

parseArgs();