export default class MultipleFinder {
	private MAX_LIMIT = 1000;

	getMultiplesOf(of: number[], limit?: number): number[] {
		const multiples: number[] = [];
		const upperBound = limit ?? this.MAX_LIMIT;

		for (let i: number = 0; i < upperBound; i++) {
			of.forEach(o => {
				if (multiples.includes(i)) {
					return;
				}
				if (i % o === 0) {
					multiples.push(i);
				}
			});
		};

		return multiples;
	}

	getSum(multiples: number[]) {
		return multiples.reduce((acc, curr) => acc + curr);
	}

}