import { ReactNode, isValidElement, cloneElement, Children } from "react";

export function slotChange<T extends ReactNode>(children: T): T {
	return Children.map(children, child =>
		isValidElement(child)
			? cloneElement(child, {
					...child.props,
					...(child.props.asParent && { "slot-name": "asParent" }),
			  })
			: child,
	) as T;
}
