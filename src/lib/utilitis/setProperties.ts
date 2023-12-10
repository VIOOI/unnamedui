export const setProperties = <A>(pr: A, fn: (pr: A) => string) =>
	pr ? fn(pr) : undefined;
