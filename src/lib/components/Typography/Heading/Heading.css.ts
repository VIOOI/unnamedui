import { tv, VariantProps } from "tailwind-variants";
import { text } from "../Text/Text.css";

export const heading = tv({
	base: "text-xl",
	extend: text,
});

export type HeadingVariants = VariantProps<typeof heading>;
