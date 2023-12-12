type Fn<T, R> = (arg: T) => R;

export function pipe<T>(): (arg: T) => T;
export function pipe<T, A>(fn1: Fn<T, A>): (arg: T) => A;
export function pipe<T, A, B>(fn1: Fn<T, A>, fn2: Fn<A, B>): (arg: T) => B;
export function pipe<T, A, B, C>(
	fn1: Fn<T, A>,
	fn2: Fn<A, B>,
	fn3: Fn<B, C>,
): (arg: T) => C;
export function pipe<T, A, B, C, D>(
	fn1: Fn<T, A>,
	fn2: Fn<A, B>,
	fn3: Fn<B, C>,
	fn4: Fn<C, D>,
): (arg: T) => C;
// ... Продолжить для большего количества функций по необходимости

export function pipe(...fns: Function[]) {
	return (arg: any): any => fns.reduce((current, fn) => fn(current), arg);
}
