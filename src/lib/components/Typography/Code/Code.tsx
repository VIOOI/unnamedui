import React, { HTMLAttributes, forwardRef } from "react";
import { Text } from "../Text";
import { ClassValue } from "clsx";

type CodeProps = {
	children: React.ReactNode;
	className?: ClassValue;
} & HTMLAttributes<HTMLParagraphElement>;

export const Code = forwardRef<HTMLParagraphElement, CodeProps>(
	({ children, className, ...props }, ref) => {
		return (
			// @ts-ignore
			<Text
				ref={ref}
				as={"code"}
				className={
					[
						"font-code bg-blue-950 text-blue-400 px-1 py-[0.2rem] rounded-md",
						className,
					] as ClassValue & string
				}
				{...props}
			>
				{children}
			</Text>
		);
	},
);
