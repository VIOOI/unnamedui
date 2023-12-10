import React, { HTMLAttributes, forwardRef } from "react";
import { splitOrDefault, splitProps } from "../../../utilitis";
import { Text } from "../Text";
import { TextVariants } from "../Text/Text.css";
import { HeadingVariants, heading } from "./Heading.css";

type HeadingProps = {
	as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
	children: React.ReactNode;
} & HTMLAttributes<HTMLParagraphElement> &
	TextVariants;

export const Heading = forwardRef<HTMLParagraphElement, HeadingProps>(
	({ children, as = "h3", ...props }, ref) => {
		const [textProps, propsNoSett] = splitOrDefault(props, ["weight"], {
			weight: "extrabold",
		});
		const [styles, propsNoStyle] = splitProps(propsNoSett, [
			"family",
			"style",
			"transform",
			"decoration",
			"align",
			"className",
		]);

		return (
			// @ts-ignore
			<Text
				ref={ref}
				as={as}
				className={heading(styles as HeadingVariants)}
				{...Object.assign({}, propsNoStyle, textProps)}
			>
				{children}
			</Text>
		);
	},
);
