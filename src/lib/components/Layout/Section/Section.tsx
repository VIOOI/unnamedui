import React, { FC, HTMLAttributes, forwardRef, Ref } from "react";
import { Box } from "../Box";
import { ClassValue } from "clsx";

type SectionProps = {
	children: React.ReactNode;
	className?: ClassValue;
} & HTMLAttributes<HTMLParagraphElement>;

export const Section: FC<SectionProps> = forwardRef(
	({ children, className, ...props }, ref) => (
		<Box
			ref={ref as Ref<HTMLDivElement>}
			as="section"
			className={["py-10", className || ""] as ClassValue & string}
			{...props}
		>
			{children}
		</Box>
	),
);
