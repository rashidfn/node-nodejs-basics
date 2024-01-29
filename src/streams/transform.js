import { Transform, pipeline } from "stream";

const transform = async () => {
    const stream = new Transform({
        transform(chunk, encoding, callback) {
            const reversed = chunk.toString().split('').reverse().join('');
            this.push(reversed);
            callback();
        }
    });
    return new Promise((resolve, reject) => {
        pipeline(process.stdin, stream, process.stdout, (err) => {
           if (!err) {
               resolve();
           }
           reject();
        });
    })
};

await transform();