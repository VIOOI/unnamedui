export function updateWithDefaults<T, U extends Partial<T>>(
	target: T,
	defaults: U,
): T & U {
	return Object.keys(defaults).reduce(
		(acc, key) => {
			const k = key as keyof T;
			return { ...acc, [k]: acc[k] === undefined ? defaults[k] : acc[k] };
		},
		target as T & U,
	);
}
