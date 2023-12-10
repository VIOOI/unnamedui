type HtmlTag =
	| "p"
	| "span"
	| "strong"
	| "em"
	| "b"
	| "i"
	| "u"
	| "a"
	| "blockquote"
	| "pre"
	| "code"
	| "h1"
	| "h2"
	| "h3"
	| "h4"
	| "h5"
	| "h6";

export const createTagChecker = <T extends string>(tags: T[]) => {
	const tagSet: Set<T> = new Set(tags);
	return (tag: string): boolean => tagSet.has(tag.toLowerCase() as T);
};

export const isTextTag = createTagChecker<HtmlTag>([
	"p",
	"span",
	"strong",
	"em",
	"b",
	"i",
	"u",
	"a",
	"blockquote",
	"pre",
	"code",
	"h1",
	"h2",
	"h3",
	"h4",
	"h5",
	"h6",
]);
