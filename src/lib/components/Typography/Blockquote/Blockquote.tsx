import React, { HTMLAttributes, forwardRef } from "react";
import { cn } from "../../../utilitis";
import { Text } from "../Text";
import { ClassValue } from "clsx";

type BlockquoteProps = {
	children: React.ReactNode;
	className?: ClassValue;
} & HTMLAttributes<HTMLParagraphElement>;

export const Blockquote = forwardRef<HTMLParagraphElement, BlockquoteProps>(
	({ children, className, ...props }, ref) => {
		return (
			// @ts-ignore
			<Text
				ref={ref}
				as="blockquote"
				className={cn("p-2 border-l-4 border-blue-400", className)}
				{...props}
			>
				{children}
			</Text>
		);
	},
);
