import { FC } from "react";

type ShowProps = {
	when: boolean;
	fallback?: React.ReactNode;
	children: React.ReactNode;
};

export const Show: FC<ShowProps> = ({ when, fallback, children }) => {
	return when ? children : fallback || null;
};
