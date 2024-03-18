function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function generateNumberWithDelay(min, max) {
    const randomNumber = getRandomNumber(min, max);
    console.log(`random number: ${randomNumber}`);

    await delay(getRandomNumber(1000, 5000)); // Задержка от 1 до 5 секунд
    return randomNumber;
}

async function racePromises() {
    const promise1 = generateNumberWithDelay(1, 5);
    const promise2 = generateNumberWithDelay(1, 5);
    const promise3 = generateNumberWithDelay(1, 5);

    const result = await Promise.race([promise1, promise2, promise3]);
    console.log('completed promise:', result);
}

async function squareRandomNumber() {
    const randomNum = await generateNumberWithDelay(1, 5);
    const squaredNum = randomNum ** 2;
    console.log(`square random number ${randomNum}: ${squaredNum}`);
}

async function sumRandomNumbers() {
    const num1 = await generateNumberWithDelay(1, 5);
    const num2 = await generateNumberWithDelay(6, 10);
    const sum = num1 + num2;
    console.log(`sum ofrandom numbers: ${sum}`);
}

racePromises();
squareRandomNumber();
sumRandomNumbers();
