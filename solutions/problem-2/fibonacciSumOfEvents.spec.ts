import { getFilteredValues, getSequence, getSum } from './fibonacciFunctions';


describe('find and sum even numbers in Fibonacci sequence', () => {
	test('it should generate a Fibonacci sequnce up to 10', () => {

		const sequence = getSequence(10);

		expect(sequence).toEqual([1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]);
	});

	test('it should get the even numbers in the sequence', () => {

		const sequence = getSequence(10);
		const evens = getFilteredValues(sequence, (value: number) => value % 2 === 0);

		expect(evens).toEqual([2, 8, 34, 144]);
	});

	test('it should get the sum of the even numbers in the sequence', () => {

		const sequence = getSequence(4_000_000);
		const evens = getFilteredValues(sequence, (value: number) => value % 2 === 0 && value <= 4000000);
		const sum = getSum(evens);

		expect(sum).toBe(4_613_732n);
	});
});