export const when = <T>(bool: boolean, onTrue: T, onFalse: T) =>
	bool ? onTrue : onFalse;
