import { tv, VariantProps } from "tailwind-variants";

export const button = tv({
	base: "justify-start rounded-md",
	variants: {
		size: {
			sm: "px-2 py-1 text-xs",
			md: "p-4 text-base",
			lg: "px-4 py-1 text-lg",
		},
	},
	defaultVariants: {
		size: "md",
	},
});

export type CalloutVariant = VariantProps<typeof button>;
