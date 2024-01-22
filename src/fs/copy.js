import {cp} from 'fs/promises';
import {resolve, dirname} from 'path';

const copy = async () => {
    const src = resolve(dirname(''), 'fs', 'files');
    const dest = resolve(dirname(''), 'fs', 'files_copy');
    try {
        await cp(src, dest, {recursive: true, errorOnExist: true, force: false});
    } catch {
        throw Error('FS operation failed');
    }
};

await copy();
