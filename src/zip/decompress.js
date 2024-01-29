import {createGunzip, deflate, unzip, gzip} from 'zlib';
import {dirname, resolve} from "path";
import {createReadStream, createWriteStream} from "fs";
import {pipeline} from "stream";

const decompress = async () => {
    const input = resolve(dirname(''), 'zip', 'files', 'archive.gz');
    const output = resolve(dirname(''), 'zip', 'files', 'fileToCompress.txt');

    const zip = createGunzip();
    const readStream = createReadStream(input);
    const writeStream = createWriteStream(output);

    return new Promise((resolve, reject) => {
        pipeline(readStream, zip, writeStream, (err) => {
           if (!err) {
               resolve();
           }
           reject();
        });
    })
};

await decompress();