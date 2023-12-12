import React, { FC, HTMLAttributes, Ref, forwardRef } from "react";
import { Box } from "../../Layout";
import { ClassValue, ClassArray } from "clsx";
import { numberToRem } from "../../../utilitis";

type InsertProps = {
	children: React.ReactNode;
	className?: ClassValue;
	side: string;
} & HTMLAttributes<HTMLDivElement>;

type Padding = [number, number, number, number];

const validateNumber = (n: unknown): number => {
	if (typeof n !== "number" || isNaN(n)) {
		throw new Error("Invalid input: not a number");
	}
	return n;
};

const parsePadding: (input: string) => Padding = input => {
	const numbers = input.split(" ").map(str => validateNumber(Number(str)));

	const createPadding = (n: number[]): Padding => {
		switch (n.length) {
			case 1:
				return [n[0], n[0], n[0], n[0]];
			case 2:
				return [n[0], n[1], n[0], n[1]];
			case 3:
				return [n[0], n[1], n[2], n[1]];
			case 4:
				return [n[0], n[1], n[2], n[3]];
			default:
				throw new Error("Invalid input: incorrect number of values");
		}
	};

	return createPadding(numbers);
};

export const Insert = forwardRef<HTMLDivElement, InsertProps>(
	({ children, className, side, ...props }, ref) => {
		const [top, right, bottom, left] = parsePadding(side);
		return (
			<Box
				ref={ref}
				className={[className || ""] as ClassArray & string}
				style={{
					marginTop: top && numberToRem(top * -1),
					marginBottom: bottom && numberToRem(bottom * -1),
					marginLeft: left && numberToRem(left * -1),
					marginRight: right && numberToRem(right * -1),
				}}
				{...props}
			>
				{children}
			</Box>
		);
	},
);
