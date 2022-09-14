	const MAX_LIMIT = 1000;

	export const getMultiplesOf = (of: number[], limit?: number): number[] =>{
		const multiples: number[] = [];
		const upperBound = limit ?? MAX_LIMIT;

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

	export const getSum = (multiples: number[]) =>{
		return multiples.reduce((acc, curr) => acc + curr);
	}
