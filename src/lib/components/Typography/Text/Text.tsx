import React, { HTMLAttributes, forwardRef } from "react";
import { TextVariants, text } from "./Text.css";
import { splitProps, cn, when, slotChange } from "../../../utilitis";
import { OverrideNode, Slot, SlotChildren, useSlot } from "@beqa/react-slots";

type TextProps = {
	as?: string;
	children: React.ReactNode;
} & HTMLAttributes<HTMLParagraphElement> &
	TextVariants;

type Slots = SlotChildren<Slot<"asParent"> | Slot<"default">>;

export const Text = forwardRef<HTMLParagraphElement, TextProps>(
	({ children, as: As = "p", ...props }, ref) => {
		const { slot, hasSlot } = useSlot<Slots>(slotChange(children));
		const [styles, propsNoStyle] = splitProps(props, [
			"family",
			"style",
			"weight",
			"transform",
			"decoration",
			"align",
			"className",
		]);

		return when(
			Boolean(hasSlot.asParent),
			<slot.asParent>
				<OverrideNode
					props={props =>
						Object.assign({}, props, propsNoStyle, {
							className: cn(props.className, text(styles as TextVariants)),
						})
					}
				/>
			</slot.asParent>,
			// @ts-ignore
			<As ref={ref} className={text(styles as TextVariants)} {...propsNoStyle}>
				<slot.default />
			</As>,
		);
	},
);
