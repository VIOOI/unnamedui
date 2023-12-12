import React, { FC, HTMLAttributes, forwardRef } from "react";
import { Box } from "../Box";
import { ClassValue } from "clsx";

type SectionProps = {
	children: React.ReactNode;
	className?: ClassValue;
} & HTMLAttributes<HTMLParagraphElement>;

export const Section: FC<SectionProps> = forwardRef(
	({ children, className, ...props }, ref) => (
		// @ts-ignore
		<Box
			ref={ref}
			as="section"
			className={["py-10", className || ""]}
			{...props}
		>
			{children}
		</Box>
	),
);
