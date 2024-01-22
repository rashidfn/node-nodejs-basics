import {readFile} from 'fs/promises';
import {resolve, dirname} from 'path';

const read = async () => {
    const filePath = resolve(dirname(''), 'fs', 'files', 'fileToRead.txt');
    try {
        const fileData = await readFile(filePath, { encoding: 'utf8' });
        console.log(fileData);
    } catch {
        throw Error('FS operation failed');
    }
};

await read();