const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isSumOfHalfEqual(number) {
    const numStr = number.toString();
    if (numStr.length % 2 !== 0) {
        return;
    }

    let firstHalfSum = 0;
    let secondHalfSum = 0;

    for (let i = 0; i < numStr.length / 2; i++) {
        firstHalfSum += parseInt(numStr[i], 10);
    }

    for (let i = numStr.length / 2; i < numStr.length; i++) {
        secondHalfSum += parseInt(numStr[i], 10);
    }

    return firstHalfSum === secondHalfSum ? 'yes' : 'no';
}

rl.question('ser number', (answer) => {
    const inputNumber = parseInt(answer);
    console.log(isSumOfHalfEqual(inputNumber));
    rl.close();
});
