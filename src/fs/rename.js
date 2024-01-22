import {rename as fsRename, access, constants} from 'fs/promises';
import {resolve, dirname} from 'path';

const checkFileNotExists = async (path) => {
    try {
        await access(path, constants.R_OK);
    } catch {
        return;
    }
    throw Error('File exists');
}

const rename = async () => {
    const dir = resolve(dirname(''), 'fs', 'files');
    const oldPath = resolve(dir, 'wrongFilename.txt');
    const newPath = resolve(dir, 'properFilename.md');
    try {
        await checkFileNotExists(newPath);
        await fsRename(oldPath, newPath);
    } catch {
        throw Error('FS operation failed');
    }
};

await rename();