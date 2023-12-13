type StyleMappings<T extends string | number | symbol> = Record<T, string>;

export const classes =
	<T extends string | number | symbol>(
		styles: StyleMappings<T>,
		defaultClasses?: string,
	) =>
	(value: T): string => {
		return `${defaultClasses} ${styles[value] || ""}`.trim();
	};
