import React, { HTMLAttributes, forwardRef } from "react";
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
} & HTMLAttributes<HTMLDivElement>;

export const Grid = forwardRef<HTMLDivElement, GridProps>(
	({ children, as: As = "div", className, ...props }, ref) => (
		<Box
			ref={ref}
			className={
				["grid grid-cols-3 gap-3", className || ""] as ClassValue & string
			}
			{...props}
		>
			{children}
		</Box>
	),
);
