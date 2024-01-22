import {rm} from 'fs/promises';
import {resolve, dirname} from 'path';
const remove = async () => {
    const filePath = resolve(dirname(''), 'fs', 'files', 'fileToRemove.txt');
    try {
        await rm(filePath);
    } catch {
        throw Error('FS operation failed');
    }
};

await remove();