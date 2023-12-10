import { tv, VariantProps } from "tailwind-variants";

export const text = tv({
	base: "text-base",
	variants: {
		family: {
			sans: "font-sans",
			serif: "font-serif",
			mono: "font-mono",
		},
		style: {
			normal: "font-normal",
			italic: "font-italic",
			oblique: "font-oblique",
		},
		weight: {
			hairline: "font-hairline",
			thin: "font-thin",
			light: "font-light",
			normal: "font-normal",
			medium: "font-medium",
			semibold: "font-semibold",
			bold: "font-bold",
			extrabold: "font-extrabold",
			black: "font-black",
		},
		transform: {
			uppercase: "uppercase",
			lowercase: "lowercase",
			capitalize: "capitalize",
			normal: "normal-case",
		},
		decoration: {
			underline: "underline",
			"line-through": "line-through",
			"no-underline": "no-underline",
		},
		align: {
			left: "text-left",
			center: "text-center",
			right: "text-right",
			justify: "text-justify",
		},
	},
});

export type TextVariants = VariantProps<typeof text>;
