import { tv, VariantProps } from "tailwind-variants";

export const modal = tv({
	base: "rounded-md",
	variants: {
		size: {
			sm: "px-2 py-1 text-xs",
			md: "px-3 py-1 text-base",
			lg: "px-4 py-1 text-lg",
		},
	},
	defaultVariants: {
		size: "md",
	},
});

export type ModalVariant = VariantProps<typeof modal>;
