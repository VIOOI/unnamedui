import React, { FC, HTMLAttributes, forwardRef } from "react";
import { FlexVariants, flex } from "./Flex.css";
import { splitOrDefault, splitProps } from "../../../utilitis";
import { Box } from "../Box";

type FlexProps = {
	as?:
		| "span"
		| "div"
		| "section"
		| "article"
		| "aside"
		| "header"
		| "footer"
		| "main"
		| "nav"
		| "fieldset";
	children: React.ReactNode;
	size?: number;
} & HTMLAttributes<HTMLParagraphElement> &
	FlexVariants;

export const Flex: FC<FlexProps> = forwardRef(
	({ children, as: As = "div", ...props }, ref) => {
		const [styles, propsNoStyle] = splitOrDefault(
			props,
			[
				"className",
				"position",
				"display",
				"direction",
				"wrap",
				"justify",
				"align",
			],
			{
				display: "flex",
			},
		);

		return (
			// @ts-ignore
			<Box ref={ref} className={flex(styles as FlexVariants)} {...propsNoStyle}>
				{children}
			</Box>
		);
	},
);
