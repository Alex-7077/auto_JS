const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Select number to division: ', totalInput => {
    const totalNumber = parseFloat(totalInput);
    readline.question('select quantity part to division ? ', countInput => {
        const count = parseInt(countInput);
        if (count > 0) {
            readline.question('Select type to division (1 - integral, 2 - a fractional number): ', divisionType => {
                let numbers = [];
                if (divisionType === '1') {
                    for (let i = 0; i < count; i++) {
                        let randomNumber = Math.floor(Math.random() * totalNumber);
                        numbers.push(randomNumber);
                    }
                } else if (divisionType === '2') {
                    for (let i = 0; i < count; i++) {
                        let randomFraction = Math.random();
                        numbers.push((totalNumber * randomFraction).toFixed(2));
                    }
                } else {
                }

                numbers.forEach((number, index) => {
                    console.log(` ${number}`);
                });

                readline.close();
            });
        } else {

            readline.close();
        }
    });
});
