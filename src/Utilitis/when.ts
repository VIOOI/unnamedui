export const when = <T>(cond: boolean, onTrue: T, onFalse: T): T =>
	cond ? onTrue : onFalse;
