import React, { HTMLAttributes, Ref, forwardRef } from "react";
import { cn, when, setSlot } from "../../../utilitis";
import { OverrideNode, Slot, SlotChildren, useSlot } from "@beqa/react-slots";
import { ClassValue } from "clsx";

type BoxElement = HTMLDivElement | HTMLButtonElement;

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
		| "fieldset"
		| "button"
		| "a";
	children: React.ReactNode;
	className?: ClassValue;
} & HTMLAttributes<BoxElement>;

type Slots = SlotChildren<Slot<"parent"> | Slot<"default">>;

export const Box = forwardRef<BoxElement, BoxProps>(
	({ children, as: As = "div", className, ...props }, ref) => {
		const { slot, hasSlot } = useSlot<Slots>(setSlot("parent")(children));

		return when(
			Boolean(hasSlot.parent),
			<slot.parent>
				<OverrideNode
					props={props =>
						Object.assign({}, props, {
							className: cn(props.className, className),
						})
					}
				/>
			</slot.parent>,
			<As ref={ref as Ref<HTMLDivElement>} className={cn(className)} {...props}>
				<slot.default />
			</As>,
		);
	},
);
