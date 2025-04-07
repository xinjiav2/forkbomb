const { Worker } = require('worker_threads');
const os = require('os');

function count() {
    let num = 1000;
    while (num > 0) {
        num -= 1;
        // Simulate work
        for (let i = 0; i < 1000000; i++) {}
    }
}

function spawn(numWorkers) {
    const workers = [];
    
    for (let i = 0; i < numWorkers; i++) {
        const worker = new Worker(`
            const { parentPort } = require('worker_threads');
            let num = 1000;
            while (num > 0) {
                num -= 1;
                // Simulate work
                for (let i = 0; i < 1000000; i++) {}
            }
            parentPort.postMessage('done');
        `, { eval: true });
        
        workers.push(worker);
        console.log(`Started Worker: ${worker.threadId}`);
        
        worker.on('message', (msg) => {
            console.log(`Worker ${worker.threadId} has finished!`);
        });
    }
}

function main() {
    const cpus = os.cpus().length;
    console.log("Number of CPUs:", cpus);
    const workers = cpus * 300;
    console.log(`Creating ${workers} Workers`);

    while (true) {
        spawn(workers);
    }
}

main();
