export const trim = (
	str: string,
	trim: "normal" | "start" | "end" | "both",
) => {
	return trim === "normal"
		? str
		: str[
				trim === "start" ? "trimStart" : trim === "end" ? "trimEnd" : "trim"
		  ]();
};
