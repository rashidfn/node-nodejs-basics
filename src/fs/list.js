import {readdir} from 'fs/promises';
import {resolve, dirname} from 'path';

const list = async () => {
    const dir = resolve(dirname(''), 'fs', 'files');
    try {
        const files = await readdir(dir);
        files.forEach((file) => console.log(file));
    } catch {
        throw Error('FS operation failed')
    }

};

await list();