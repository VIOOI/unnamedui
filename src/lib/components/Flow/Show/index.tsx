import { FC } from "react";

type ShowProps = {
	when: boolean;
	fallback?: JSX.Element;
	children: JSX.Element;
};

export const Show: FC<ShowProps> = ({ when, fallback, children }) => {
	return when ? children : fallback;
};
