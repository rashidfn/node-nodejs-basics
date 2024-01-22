import {createReadStream} from 'fs';
import {dirname, resolve} from 'path';
import {createHash} from 'crypto';


const calculateHash = async () => {
    const hash = createHash('sha256');
    const dir = resolve(dirname(''), 'hash', 'files', 'fileToCalculateHashFor.txt');
    const stream = createReadStream(dir);
    stream.on('readable', () => {
        const data = stream.read();
        if (data) {
            hash.update(data);
        } else {
            console.log(`${hash.digest('hex')}`);
        }
    })
};

await calculateHash();