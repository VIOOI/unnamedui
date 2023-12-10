import { tv, VariantProps } from "tailwind-variants";

export const box = tv({
	base: "",
	variants: {
		position: {
			absolute: "absolute",
			relative: "relative",
			fixed: "fixed",
			sticky: "sticky",
		},
		display: {
			block: "block",
			inline: "inline",
			"inline-block": "inline-block",
			none: "none",
		},
		shrink: {
			0: "shrink-0",
			1: "shrink-1",
		},
		grow: {
			0: "grow-0",
			1: "grow-1",
		},
	},
});

export type BoxVariants = VariantProps<typeof box>;
