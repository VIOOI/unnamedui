import { tv, VariantProps } from "tailwind-variants";
import { box } from "../Box/Box.css";

export const flex = tv({
	base: "",
	extend: box,
	variants: {
		display: {
			flex: "flex",
			inline: "inline",
			"inline-block": "inline-flex",
			none: "none",
		},
		direction: {
			row: "row",
			"row-reverse": "row-reverse",
			col: "column",
			"col-reverse": "column-reverse",
		},
		wrap: {
			wrap: "wrap",
			reverse: "wrap-reverse",
			nowrap: "nowrap",
		},
		justify: {
			start: "flex-start",
			end: "flex-end",
			center: "center",
			between: "space-between",
			around: "space-around",
		},
		align: {
			start: "flex-start",
			end: "flex-end",
			center: "center",
			baseline: "baseline",
			stretch: "stretch",
		},
	},
});

export type FlexVariants = VariantProps<typeof flex>;
