import React, { HTMLAttributes, forwardRef } from "react";
import { cn } from "../../../utilitis";
import { Text } from "../Text";
import { ClassValue } from "clsx";

type HeadingProps = {
	as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
	children: React.ReactNode;
	className?: ClassValue;
} & HTMLAttributes<HTMLParagraphElement>;

export const Heading = forwardRef<HTMLParagraphElement, HeadingProps>(
	({ children, as = "h3", className, ...props }, ref) => {
		return (
			// @ts-ignore
			<Text
				ref={ref}
				as={as}
				className={cn("font-extrabold text-2xl", className)}
				{...props}
			>
				{children}
			</Text>
		);
	},
);
