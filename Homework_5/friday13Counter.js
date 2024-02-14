const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function friday13Counter(startDateStr, endDateStr) {
    const startDate = new Date(startDateStr);
    const endDate = new Date(endDateStr);
    let count = 0;

    for (let year = startDate.getFullYear(); year <= endDate.getFullYear(); year++) {
        for (let month = (year === startDate.getFullYear() ? startDate.getMonth() : 0); month < 12; month++) {
            if (year === endDate.getFullYear() && month > endDate.getMonth()) {
                break;
            }

            const dateToCheck = new Date(year, month, 13);
            if (dateToCheck.getDay() === 5) {
                count++;
            }
        }
    }

    return count;
}

rl.question('set start date (year-month-day): ', (startDateInput) => {
    rl.question('Set end date (year-month-day): ', (endDateInput) => {
        const result = friday13Counter(startDateInput, endDateInput);
        console.log(`result is ${result}`);
        rl.close();
    });
});
