import React, { FC, HTMLAttributes, Ref, forwardRef } from "react";
import { Box } from "../Box";
import { ClassValue } from "clsx";

type FlexProps = {
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

export const Flex: FC<FlexProps> = forwardRef(
	({ children, as: As = "div", className, ...props }, ref) => (
		// @ts-ignore
		<Box
			ref={ref as Ref<HTMLDivElement>}
			className={
				[
					"flex justify-center items-center gap-3",
					className || "",
				] as ClassValue & string
			}
			{...props}
		>
			{children}
		</Box>
	),
);
