import React, { HTMLAttributes, forwardRef } from "react";
import { Box } from "../Box";
import { ClassValue } from "clsx";

type SectionProps = {
	children: React.ReactNode;
	className?: ClassValue;
} & HTMLAttributes<HTMLDivElement>;

export const Section = forwardRef<HTMLDivElement, SectionProps>(
	({ children, className, ...props }, ref) => (
		<Box
			ref={ref}
			as="section"
			className={["py-10", className || ""] as ClassValue & string}
			{...props}
		>
			{children}
		</Box>
	),
);
