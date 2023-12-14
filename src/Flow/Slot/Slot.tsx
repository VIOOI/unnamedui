import React, { FC } from "react";
import { useSlots } from "./useSlots";

export type SlotProps = {
	name: string;
	children: React.ReactNode;
};

export const Null: FC & { isNull: true } = () => null;
Null.isNull = true;

const isNullSlot = (slot: any) => slot.isNull === true;

export const Slot: FC<SlotProps> & {
	Null: typeof Null;
	get: typeof useSlots;
	isNull: typeof isNullSlot;
} = ({ children }) => {
	return <>{children}</>;
};

Slot.Null = Null;
Slot.get = useSlots;
Slot.isNull = isNullSlot;
