const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function insertAtArray(originalArray, index, newArray) {

    const firstPart = originalArray.slice(0, index);
    const secondPart = originalArray.slice(index);
    return [...firstPart, ...newArray, ...secondPart];
}

readline.question('enter array index from 1 to 5', index => {
    readline.question('enter element of array ffrom space (exemple a b c): ', elements => {
        const indexInt = parseInt(index);
        const newElementsArray = elements.split(' ');
        const originalArray = [1, 2, 3, 4, 5];

        const resultArray = insertAtArray(originalArray, indexInt, newElementsArray);
        console.log('result:', resultArray);

        readline.close();
    });
});
