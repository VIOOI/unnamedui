import React, { HTMLAttributes, Ref, forwardRef } from "react";
import { Text } from "../Text";
import { ClassValue } from "clsx";

type EmProps = {
	children: React.ReactNode;
	className?: ClassValue;
} & HTMLAttributes<HTMLParagraphElement>;

export const Em = forwardRef<HTMLParagraphElement, EmProps>(
	({ children, className, ...props }, ref) => {
		return (
			<Text
				ref={ref}
				as="em"
				className={
					["font-italic text-lg italic inline-block", className] as ClassValue &
						string
				}
				{...props}
			>
				{children}
			</Text>
		);
	},
);
