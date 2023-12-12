import React, { FC, HTMLAttributes, forwardRef } from "react";
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
} & HTMLAttributes<HTMLParagraphElement>;

export const Conteiner: FC<ConteinerProps> = forwardRef(
	({ children, as: As = "div", className, ...props }, ref) => (
		// @ts-ignore
		<Box
			ref={ref}
			className={["container mx-auto px-4 max-w-md", className || ""]}
			{...props}
		>
			{children}
		</Box>
	),
);
