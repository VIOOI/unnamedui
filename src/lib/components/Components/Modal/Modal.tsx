import React, { FC, HTMLAttributes, Ref, forwardRef, useState } from "react";
import { Box, Flex } from "../../Layout";
import { Show } from "../../Flow";
import { ClassValue, ClassArray } from "clsx";
import { ModalVariant, modal } from "./Modal.css";
import { useSlot, SlotChildren, Slot, OverrideNode } from "@beqa/react-slots";
import { addSlotProps, setSlots } from "../../../utilitis";

type ModalProps = {
	children: React.ReactNode;
	className?: ClassValue;
} & HTMLAttributes<HTMLDivElement> &
	ModalVariant;

type Slots = SlotChildren<Slot<"trigger"> | Slot<"close"> | Slot<"default">>;

export const Modal = forwardRef<HTMLDivElement, ModalProps>(
	({ children, className, ...props }, ref) => {
		const [isOpen, setIsOpen] = useState(false);

		const Slots = {
			conwert: setSlots(["trigger"]),
			close: addSlotProps("close", { onClick: () => setIsOpen(false) }),
		};

		const { slot, hasSlot } = useSlot<Slots>(
			Slots.conwert(Slots.close(children)),
		);
		return (
			<Box
				ref={ref}
				className={[className || ""] as ClassArray & string}
				{...props}
			>
				<slot.trigger>
					<OverrideNode
						props={props => ({
							...props,
							onClick: () => setIsOpen(s => !s),
						})}
					/>
				</slot.trigger>
				<Show when={isOpen}>
					<Flex className="fixed w-screen h-screen top-0 left-0">
						<Flex className="w-full h-full absolute top-0 left-0 z-10">
							<slot.default />
						</Flex>
						<Box className="w-full h-full bg-neutral-900 absolute top-0 left-0 opacity-50 z-0"></Box>
					</Flex>
				</Show>
			</Box>
		);
	},
);
