import {writeFile} from 'fs/promises';
import {resolve, dirname} from 'path';

const create = async () => {
    try {
        const filePath = resolve(dirname(''), 'fs', 'files', 'fresh.txt');
        await writeFile(filePath, 'I am fresh and young', {
            flag: 'wx',
        });
    } catch {
        throw Error('I am fresh and young');
    }
};

await create();