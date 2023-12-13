import React, { HTMLAttributes, Ref, forwardRef } from "react";
import { cn, setSlot } from "../../Utilitis";
import { OverrideNode, Slot, SlotChildren, useSlot } from "@beqa/react-slots";
import { ClassValue } from "clsx";
import { If } from "../../Flow";

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
	children?: React.ReactNode;
	className?: ClassValue;
} & HTMLAttributes<BoxElement>;

type Slots = SlotChildren<Slot<"parent"> | Slot<"default">>;

export const Box = forwardRef<BoxElement, BoxProps>(
	({ children, as: As = "div", className, ...props }, ref) => {
		const { slot, hasSlot } = useSlot<Slots>(setSlot("parent")(children));

		return (
			<If when={Boolean(hasSlot.parent)}>
				<If.True>
					<slot.parent>
						<OverrideNode
							props={props =>
								Object.assign({}, props, {
									className: cn(props.className, className),
								})
							}
						/>
					</slot.parent>
				</If.True>
				<If.False>
					<As
						// @ts-ignore
						ref={ref}
						className={cn(className)}
						{...props}
					>
						<slot.default />
					</As>
				</If.False>
			</If>
		);
	},
);
