import React, { HTMLAttributes, forwardRef } from "react";
import { Box } from "../Box";
import { ClassValue } from "clsx";

type StackProps = {
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

export const Stack = forwardRef<HTMLDivElement, StackProps>(
	({ children, as: As = "div", className, ...props }, ref) => (
		<Box
			ref={ref}
			className={
				[
					"flex flex-col justify-center items-center gap-3",
					className || "",
				] as ClassValue & string
			}
			{...props}
		>
			{children}
		</Box>
	),
);
