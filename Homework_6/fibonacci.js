const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function fibonacciRecursive(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

function fibonacciArray(start, length) {
    let fibArray = [];
    for (let i = 0; i < length; i++) {
        fibArray.push(fibonacciRecursive(start + i));
    }
    return fibArray;
}

rl.question('select the number wich one fibonacci array is start  (N): ', (startNumber) => {
    rl.question('select array length (M):', (arrayLength) => {
        const resultArray = fibonacciArray(parseInt(startNumber), parseInt(arrayLength));
        console.log('fibonacci array result is', resultArray);
        rl.close();
    });
});
