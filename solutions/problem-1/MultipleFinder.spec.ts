import MultipleFinder from './MultipleFinder';

describe('finding multiples', () => {
	test('should find multiples up to a certain number and retrieve the sum', () => {
		const finder = new MultipleFinder();
		const multiples = finder.getMultiplesOf([3, 5], 1000);
		const sum = finder.getSum(multiples);

		expect(sum).toBe(233168);
	});
});