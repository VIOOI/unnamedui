import { FC } from "react";
import { when as whenf } from "../../Utilitis";

type ShowProps = {
	when: boolean;
	fallback?: React.ReactNode;
	children: React.ReactNode;
};

export const Show: FC<ShowProps> = ({ when, fallback, children }) =>
	whenf(when, children, fallback || null);
