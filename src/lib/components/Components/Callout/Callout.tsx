import React, { FC, HTMLAttributes, Ref, forwardRef } from "react";
import { Box, Flex } from "../../Layout";
import { ClassValue, ClassArray } from "clsx";
import { CalloutVariant, button } from "./Callout.css";
import { splitProps, setSlots } from "../../../utilitis";
import { OverrideNode, Slot, SlotChildren, useSlot } from "@beqa/react-slots";
import { Show } from "../../Flow";

type CalloutProps = {
	children: React.ReactNode;
	className?: ClassValue;
} & HTMLAttributes<HTMLDivElement> &
	CalloutVariant;

type Slots = SlotChildren<Slot<"icon"> | Slot<"default">>;

export const Callout = forwardRef<HTMLDivElement, CalloutProps>(
	({ children, className, ...props }, ref) => {
		const [styles, propsNoStyle] = splitProps(props, ["size"]);
		const { slot, hasSlot } = useSlot<Slots>(
			setSlots(["icon", "default"])(children),
		);
		return (
			<Flex
				className={
					[button(styles as CalloutVariant), className || ""] as ClassArray &
						string
				}
				{...propsNoStyle}
			>
				<Show when={Boolean(hasSlot.icon)}>
					<Box>
						{" "}
						<slot.icon />{" "}
					</Box>
				</Show>
				<slot.default />
			</Flex>
		);
	},
);
