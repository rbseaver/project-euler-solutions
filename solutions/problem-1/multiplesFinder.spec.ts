import { getMultiplesOf, getSum } from './multiplesFinderFunctions';

describe('finding multiples', () => {
	test('should find multiples up to a certain number and retrieve the sum', () => {
		const multiples = getMultiplesOf([3, 5], 1000);
		const sum = getSum(multiples);

		expect(sum).toBe(233_168);
	});
});