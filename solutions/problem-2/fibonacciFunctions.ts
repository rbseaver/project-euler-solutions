
	export const getSequence = (length: number): number[] => {
		const maxAllowedValueInSequence = 4_000_000;
		const sequence: number[] = [1, 2];

		for (let i = 2; i <= length; i++) {
			sequence.push(sequence[i - 1] + sequence[i - 2]);
		}
		
		return sequence.filter(s => s <= maxAllowedValueInSequence);
	}

	export const getFilteredValues = (sequence: number[], filterFunc: (value: number) => boolean) => {
			return sequence.filter(filterFunc);
	}

	export const getSum = (numbers: number[]) => {
		let sum = 0n;
		for (let num of numbers) {
			sum += BigInt(num);
		}
		return sum;
	}
