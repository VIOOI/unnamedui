import React, { HTMLAttributes, forwardRef } from "react";
import { Box } from "../Box";
import { ClassValue } from "clsx";

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
	className?: ClassValue;
} & HTMLAttributes<HTMLDivElement>;

export const Flex = forwardRef<HTMLDivElement, FlexProps>(
	({ children, as: As = "div", className, ...props }, ref) => (
		<Box
			ref={ref}
			className={
				[
					"flex justify-center items-center gap-3",
					className || "",
				] as ClassValue & string
			}
			{...props}
		>
			{children}
		</Box>
	),
);
