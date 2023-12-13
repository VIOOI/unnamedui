import React, {
	ReactNode,
	isValidElement,
	cloneElement,
	Children,
} from "react";

export const setSlot =
	(name: string) =>
	<T extends ReactNode>(children: T): T => {
		return Children.map(children, child =>
			isValidElement(child)
				? cloneElement(child, {
						...child.props,
						...(child.props[`slot-${name}`] && { "slot-name": name }),
				  })
				: child,
		) as T;
	};

export const setSlots =
	(names: string[]) =>
	<T extends ReactNode>(children: T): T => {
		return names.reduce((acc, name) => setSlot(name)(acc), children);
	};

type Props = Record<string, unknown>;

const addPropsToElement = (
	element: ReactNode,
	slotName: string,
	props: Props,
): ReactNode => {
	if (isValidElement(element)) {
		const newProps = mergeProps(element.props, props);
		return cloneElement(
			element,
			newProps,
			React.Children.map(element.props.children, child =>
				addPropsToElement(child, slotName, props),
			),
		);
	}
	return element;
};

export const addSlotProps =
	(slotName: string, props: Props) =>
	(children: ReactNode): ReactNode => {
		return React.Children.map(children, child =>
			addPropsToElement(child, slotName, props),
		);
	};

const mergeProps = (existingProps: Props, newProps: Props): Props => {
	const combinedProps: Props = { ...existingProps };

	Object.keys(newProps).forEach(key => {
		const existingValue = existingProps[key];
		const newValue = newProps[key];

		if (typeof existingValue === "function" && typeof newValue === "function") {
			combinedProps[key] = (...args: any[]) => {
				existingValue(...args);
				newValue(...args);
			};
		} else {
			combinedProps[key] = newValue;
		}
	});

	return combinedProps;
};
