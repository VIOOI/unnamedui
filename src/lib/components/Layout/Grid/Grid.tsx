import React, { FC, HTMLAttributes, forwardRef } from "react";
import { Box } from "../Box";
import { ClassValue } from "clsx";

type GridProps = {
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
	className?: ClassValue;
} & HTMLAttributes<HTMLParagraphElement>;

export const Grid: FC<GridProps> = forwardRef(
	({ children, as: As = "div", className, ...props }, ref) => (
		// @ts-ignore
		<Box
			ref={ref}
			className={["grid grid-cols-3 gap-3", className || ""]}
			{...props}
		>
			{children}
		</Box>
	),
);
