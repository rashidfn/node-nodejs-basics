import {dirname, resolve} from "path";
import {createGzip} from 'zlib';
import {createReadStream, createWriteStream} from "fs";
import {pipeline} from 'stream';

const compress = async () => {
    const input = resolve(dirname(''), 'zip', 'files', 'fileToCompress.txt');
    const output = resolve(dirname(''), 'zip', 'files', 'archive.gz');

    const zip = createGzip();
    const readStream = createReadStream(input);
    const writeStream = createWriteStream(output);

    return new Promise((resolve, reject) => {
        pipeline(readStream, zip, writeStream, (err) => {
           if (!err) {
               resolve();
           }
           reject();
        })
    })
};

await compress();