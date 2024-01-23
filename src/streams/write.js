import {dirname, resolve} from "path";
import {createWriteStream} from "fs";
import {Readable} from 'stream';

const write = async () => {
    const filePath = resolve(dirname(''), 'streams', 'files', 'fileToWrite.txt');
    const stream = createWriteStream(filePath);
    process.stdin.on('data', (data) => {
        if (data) {
            stream.write(data);
        }
    })

};

await write();