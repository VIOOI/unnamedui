import React, { HTMLAttributes, Ref, forwardRef } from "react";
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
			<Text
				ref={ref}
				as={as}
				className={
					["font-extrabold text-2xl", className] as ClassValue & string
				}
				{...props}
			>
				{children}
			</Text>
		);
	},
);
