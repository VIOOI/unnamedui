import React, { FC, ReactElement, memo } from "react";

type IfProps = {
	when: boolean;
	children: ReactElement | ReactElement[];
};

const IfTrue: FC<{ children: ReactElement | ReactElement[] }> = memo(
	({ children }) => <>{children}</>,
);
const IfFalse: FC<{ children: ReactElement | ReactElement[] }> = memo(
	({ children }) => <>{children}</>,
);

const IfComponent: FC<IfProps> = ({ when, children }) => (
	<>
		{React.Children.map(children, child =>
			React.isValidElement(child) &&
			((when && child.type === IfTrue) || (!when && child.type === IfFalse))
				? child
				: null,
		)}
	</>
);

export const If = Object.assign(IfComponent, { True: IfTrue, False: IfFalse });
