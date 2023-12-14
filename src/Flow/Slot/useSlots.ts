import React, { ReactNode, ReactElement, FC, isValidElement } from "react";
import { Null, Slot, SlotProps } from "./Slot";

type SlotsResult<T extends string[]> = {
	[K in T[number]]: FC<{ children?: ReactElement }> | typeof Null;
} & { Default: FC };

const createChildComponent =
	(
		child: ReactElement | Array<ReactElement> | null,
	): FC<{
		children?: ReactElement;
	}> =>
	({ children }) =>
		isValidElement(child) && (child as ReactElement).type === Slot
			? children
			: child || null;

const isSlotElement = (element: any): element is ReactElement<SlotProps> => {
	return React.isValidElement(element) && element.type === Slot;
};

const updateIsSlotElement = <T extends Array<string>>(
	name: string,
	child: ReactElement,
	slots: SlotsResult<T>,
) => Object.assign({}, slots, { [name]: createChildComponent(child) });

const isNamedSlot = (element: any): element is ReactElement =>
	React.isValidElement(element) && (element as ReactElement).props["data-slot"];

const editSlot = (
	child: ReactElement,
	config: (element: ReactElement) => React.ReactElement,
) =>
	React.cloneElement(child, config(child.props), child.props.children || null);

export const useSlots = <T extends Array<string>>(
	children: ReactNode,
	slotNames: T,
	config: {
		[K in T[number]]?: <T extends Record<string, unknown>>(props: T) => T;
	} = {},
): SlotsResult<T> => {
	const Default: Array<ReactElement> = [];
	let slots: SlotsResult<T> = slotNames.reduce(
		(acc, name) => Object.assign({}, acc, { [name]: Slot.Null }),
		{ Default: createChildComponent(null) } as SlotsResult<T>,
	);

	React.Children.forEach(children, child => {
		if (isSlotElement(child))
			slots = updateIsSlotElement(
				child.props.name,
				child.props.children
					? editSlot(
							child.props.children as ReactElement,
							// @ts-ignore
							config[child.props.name] || (props => props),
					  )
					: child,
				slots,
			);
		else if (isNamedSlot(child))
			slots = updateIsSlotElement(
				child.props["data-slot"],
				editSlot(
					child as ReactElement,
					// @ts-ignore
					config[child.props["data-slot"]] || (props => props),
				),
				slots,
			);
		else Default.push(child as unknown as ReactElement);
	});
	slots.Default = createChildComponent(Default);
	return slots;
};
