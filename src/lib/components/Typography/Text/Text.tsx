import React, { HTMLAttributes, forwardRef, Ref } from "react";
import { cn, when, setSlot } from "../../../utilitis";
import { OverrideNode, Slot, SlotChildren, useSlot } from "@beqa/react-slots";
import { ClassValue } from "clsx";
import { If } from "../../Flow";

type TextProps = {
	as?:
		| "p"
		| "h1"
		| "h2"
		| "h3"
		| "h4"
		| "h5"
		| "h6"
		| "b"
		| "i"
		| "strong"
		| "em"
		| "mark"
		| "small"
		| "del"
		| "ins"
		| "sub"
		| "sup"
		| "code"
		| "kbd"
		| "samp"
		| "var"
		| "pre"
		| "abbr"
		| "address"
		| "cite"
		| "bdo"
		| "blockquote"
		| "q"
		| "dfn"
		| "ul"
		| "ol"
		| "li";
	children: React.ReactNode;
	className?: ClassValue;
} & HTMLAttributes<HTMLParagraphElement>;

type Slots = SlotChildren<Slot<"parent"> | Slot<"default">>;

export const Text = forwardRef<HTMLParagraphElement, TextProps>(
	({ children, as: As = "p", className, ...props }, ref) => {
		const { slot, hasSlot } = useSlot<Slots>(setSlot("parent")(children));

		return (
			<If when={Boolean(hasSlot.parent)}>
				<If.True>
					<slot.parent>
						<OverrideNode
							props={props =>
								Object.assign({}, props, props, {
									className: cn(props.className, className),
									ref: ref as Ref<HTMLParagraphElement>,
								})
							}
						/>
					</slot.parent>
				</If.True>
				<If.False>
					<As
						// @ts-ignore
						ref={ref as Ref<HTMLParagraphElement>}
						className={cn(className)}
						{...props}
					>
						{children}
					</As>
				</If.False>
			</If>
		);
	},
);
