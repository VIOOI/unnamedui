import React, { HTMLAttributes, forwardRef } from "react";
import { Box } from "../Box";
import { ClassValue } from "clsx";

type ConteinerProps = {
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

export const Conteiner = forwardRef<HTMLDivElement, ConteinerProps>(
	({ children, as: As = "div", className, ...props }, ref) => (
		<Box
			ref={ref}
			className={
				["container mx-auto px-4 max-w-md", className || ""] as ClassValue &
					string
			}
			{...props}
		>
			{children}
		</Box>
	),
);
