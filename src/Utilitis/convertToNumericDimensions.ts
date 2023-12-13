type Padding = [number, number, number, number];

const validateNumber = (n: unknown): number => {
	if (typeof n !== "number" || isNaN(n)) {
		throw new Error("Invalid input: not a number");
	}
	return n;
};

export const convertToNumericDimensions = (input: string): Padding =>
	input
		.split(" ")
		.map(str => validateNumber(Number(str)))
		.reduce<Padding>(
			(acc, curr, idx, src) => {
				switch (src.length) {
					case 1:
						return [curr, curr, curr, curr];
					case 2:
						return [
							curr,
							idx === 0 ? src[1] : curr,
							curr,
							idx === 0 ? src[1] : curr,
						];
					case 3:
						return [
							curr,
							idx < 2 ? src[1] : src[2],
							idx < 2 ? src[2] : curr,
							idx < 2 ? src[1] : src[2],
						];
					case 4:
						return idx === 0 ? [curr, src[1], src[2], src[3]] : acc;
					default:
						throw new Error("Invalid input: incorrect number of values");
				}
			},
			[0, 0, 0, 0], // Инициализация с нулевым отступом
		);
