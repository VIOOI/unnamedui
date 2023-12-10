import { updateWithDefaults } from "./updateWithDefaults";

type SplitObject<T, K extends keyof T> = [Pick<T, K>, Omit<T, K>];

export function splitProps<T, K extends keyof T>(
	obj: T,
	keysToSplit: K[],
	index = 0,
	separated: Pick<T, K> = {} as Pick<T, K>,
	remaining: Omit<T, K> = {} as Omit<T, K>,
): SplitObject<T, K> {
	if (index >= Object.keys(obj as any).length) {
		return [separated, remaining];
	}

	const key = Object.keys(obj as any)[index] as keyof T;
	if (keysToSplit.includes(key as K)) {
		return splitProps(
			obj,
			keysToSplit,
			index + 1,
			{ ...separated, [key]: obj[key] },
			remaining,
		);
	} else {
		return splitProps(obj, keysToSplit, index + 1, separated, {
			...remaining,
			[key]: obj[key],
		});
	}
}

export function splitOrDefault<
	T,
	K extends keyof T,
	U extends Partial<Pick<T, K>>,
>(
	obj: T,
	keysToSplit: K[],
	defaults: U,
	index = 0,
	separated: Pick<T, K> = {} as Pick<T, K>,
	remaining: Omit<T, K> = {} as Omit<T, K>,
): SplitObject<T, K> {
	if (index >= Object.keys(obj as any).length) {
		return [updateWithDefaults(separated, defaults), remaining];
	}

	const key = Object.keys(obj as any)[index] as keyof T;
	if (keysToSplit.includes(key as K)) {
		return splitOrDefault(
			obj,
			keysToSplit,
			defaults,
			index + 1,
			{ ...separated, [key]: obj[key] },
			remaining,
		);
	} else {
		return splitOrDefault(obj, keysToSplit, defaults, index + 1, separated, {
			...remaining,
			[key]: obj[key],
		});
	}
}
