import React, { HTMLAttributes, forwardRef } from "react";
import { Box } from "../";
import { ClassValue, ClassArray } from "clsx";

type AspectRatioProps = {
	children: React.ReactNode;
	className?: ClassValue;
	ratio: number;
} & HTMLAttributes<HTMLDivElement>;

export const AspectRatio = forwardRef<HTMLDivElement, AspectRatioProps>(
	({ children, className, ratio = 1 / 1, ...props }, ref) => {
		return (
			<Box
				ref={ref}
				as="div"
				className={["relative w-full", className || ""] as ClassArray & string}
				style={{
					paddingBottom: `${100 / ratio}%`,
				}}
				{...props}
			>
				<Box className="absolute top-0 left-0 right-0 bottom-0">{children}</Box>
			</Box>
		);
	},
);
