import {createReadStream} from "fs";
import {dirname, resolve} from "path";

const read = async () => {
    const filePath = resolve(dirname(''), 'streams', 'files', 'fileToRead.txt');
    const stream = createReadStream(filePath);
    stream.on('readable', () => {
        const data = stream.read();
        if (data) {
            process.stdout.write(data);
        }
    })
};

await read();