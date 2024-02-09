const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter first 4-x symbols value ', (number1) => {
    rl.question('Enter second 4-x symbols value : ', (number2) => {
        let countPositionValue = 0;
        let countOnlyValue = 0;

        let digits1 = number1.toString().split('');
        let digits2 = number2.toString().split('');

        for (let i = 0; i < 4; i++) {
            if (digits1[i] === digits2[i]) {
                countPositionValue++;
            } else if (digits1.includes(digits2[i])) {
                countOnlyValue++;
            }
        }

        console.log(`quantity numbers match by position and valye: ${countPositionValue}`);
        console.log(`quantity numbers only by valye: ${countOnlyValue}`);

        rl.close();
    });
});