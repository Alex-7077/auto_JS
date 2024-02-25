const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculateAverage(arr) {
    const sum = arr.reduce((acc, curr) => acc + curr, 0);
    return sum / arr.length;
}
console.log('exemple 12 15 20 25 59 79');
rl.question('enter array data from space ', (input) => {
    const arr = input.split(' ').map(Number);
    const average = calculateAverage(arr);
    console.log('average is ', average);
    rl.close();
});
