import React, { FC, HTMLAttributes, Ref, forwardRef } from "react";
import { Box } from "../../Layout";
import { ClassValue, ClassArray } from "clsx";
import { ButtonVariant, button } from "./Button.css";
import { splitProps } from "../../../utilitis";

type ButtonProps = {
	as?: "button" | "a";
	children: React.ReactNode;
	className?: ClassValue;
} & HTMLAttributes<HTMLButtonElement> &
	ButtonVariant;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ children, className, as = "button", ...props }, ref) => {
		const [styles, propsNoStyle] = splitProps(props, ["size"]);
		return (
			<Box
				ref={ref}
				as={as}
				className={
					[button(styles as ButtonVariant), className || ""] as ClassArray &
						string
				}
				{...propsNoStyle}
			>
				{children}
			</Box>
		);
	},
);
