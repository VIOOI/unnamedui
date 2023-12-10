import React, { HTMLAttributes, forwardRef } from "react";
import { BoxVariants, box } from "./Box.css";
import { splitProps, cn, when, slotChange } from "../../../utilitis";
import {
	OverrideNode,
	Slot,
	SlotChildren,
	createTemplate,
	useSlot,
} from "@beqa/react-slots";

type BoxProps = {
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
} & HTMLAttributes<HTMLDivElement> &
	BoxVariants;

type Slots = SlotChildren<Slot<"asParent"> | Slot<"default">>;

export const Box = forwardRef<HTMLDivElement, BoxProps>(
	({ children, as: As = "div", ...props }, ref) => {
		const { slot, hasSlot } = useSlot<Slots>(slotChange(children));
		const [styles, propsNoStyle] = splitProps(props, [
			"className",
			"position",
			"display",
			"shrink",
			"grow",
		]);

		return when(
			Boolean(hasSlot.asParent),
			<slot.asParent>
				<OverrideNode
					props={props =>
						Object.assign({}, props, {
							className: cn(box(styles as BoxVariants), props.className),
						})
					}
				/>
			</slot.asParent>,
			// @ts-ignore
			<As ref={ref} className={box(styles as BoxVariants)} {...propsNoStyle}>
				<slot.default />
			</As>,
		);
	},
);
