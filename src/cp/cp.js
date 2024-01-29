import {fork} from 'child_process';


const spawnChildProcess = async (args) => {
    const child = fork('node', ['cp/files/script.js'], {
        stdio: ['pipe', 'ipc', process.stdin, process.stdout],
      });

    args.forEach((value) => {
        child.stdin.write(value);
    })
    child.stdin.end();
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['someArgument1', 'someArgument2'] );
