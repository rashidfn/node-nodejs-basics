import {Worker} from 'worker_threads';
import {cpus} from 'os';
import {dirname, resolve} from "path";

const getPromises = () => {
    const cpuCount = cpus().length;
    let start = 10;
    const workerPath = resolve(dirname(''), 'wt', 'worker.js');

    return Array.from({length: cpuCount}, () => (
        new Promise((resolve, reject) => {
            const worker = new Worker(workerPath, {
                workerData: start,
            });
            worker.on('message', resolve);
            worker.on('error', reject);
            worker.on('exit', (code) => {
                if (code !== 0)
                    reject(new Error(code));
            });
            start++;
        })
    ));
}


const performCalculations = async () => {
    const promiseResults = await Promise.allSettled(getPromises());
    const result = promiseResults.map(({status, value}) => {
        return {
            status: status === 'fulfilled' ? 'resolved' : 'error',
            data: value,
        }
    });
    console.log(result);
};

await performCalculations();