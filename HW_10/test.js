const Calculator = require('./Calculator');

describe('Calculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    test('async add method should return sum of numbers', async () => {
        const result = await calculator.add(1, 2, 3);
        expect(result).toBe(6);

        const result2 = await calculator.add(5, 5);
        expect(result2).toBe(10);

        const result3 = await calculator.add(0, 0, 0);
        expect(result3).toBe(0);

        const result4 = await calculator.add(-1, -1, -1);
        expect(result4).toBe(-3);

        const result5 = await calculator.add(10, -5, 3);
        expect(result5).toBe(8);
    });

    test('async multiply method should return product of numbers', async () => {
        const result = await calculator.multiply(2, 3, 4);
        expect(result).toBe(24);

        const result2 = await calculator.multiply(5, 5);
        expect(result2).toBe(25);

        const result3 = await calculator.multiply(0, 10);
        expect(result3).toBe(0);

        const result4 = await calculator.multiply(-2, -2, -2);
        expect(result4).toBe(-8);

        const result5 = await calculator.multiply(3, -4, 2);
        expect(result5).toBe(-24);
    });

    test('async subtraction method should return difference of two numbers', async () => {
        const result = await calculator.subtraction(10, 5);
        expect(result).toBe(5);

        const result2 = await calculator.subtraction(0, 5);
        expect(result2).toBe(-5);

        const result3 = await calculator.subtraction(-10, -5);
        expect(result3).toBe(-5);

        const result4 = await calculator.subtraction(10, 10);
        expect(result4).toBe(0);

        const result5 = await calculator.subtraction(100, 50);
        expect(result5).toBe(50);
    });

    test('async divide method should return division of two numbers', async () => {
        const result = await calculator.divide(10, 2);
        expect(result).toBe(5);

        const result2 = await calculator.divide(10, 0);
        expect(result2).toBe(Infinity);

        const result3 = await calculator.divide(100, 10);
        expect(result3).toBe(10);

        const result4 = await calculator.divide(-10, 2);
        expect(result4).toBe(-5);

        const result5 = await calculator.divide(25, 5);
        expect(result5).toBe(5);
    });

    test('async exponentiation method should return square of a number', async () => {
        const result = await calculator.exponentiation(2);
        expect(result).toBe(4);

        const result2 = await calculator.exponentiation(3);
        expect(result2).toBe(9);

        const result3 = await calculator.exponentiation(-2);
        expect(result3).toBe(4);

        const result4 = await calculator.exponentiation(0);
        expect(result4).toBe(0);

        const result5 = await calculator.exponentiation(5);
        expect(result5).toBe(25);
    });
});