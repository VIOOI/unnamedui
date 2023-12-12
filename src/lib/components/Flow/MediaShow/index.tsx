import React, { useState, useEffect, ReactNode, FC } from "react";
import { Show } from "../";

type MediaQueryProps = {
	query: string;
	children: JSX.Element | ReactNode;
};

const useMediaQuery = (query: string): boolean => {
	const [matches, setMatches] = useState(window.matchMedia(query).matches);

	useEffect(() => {
		const mediaQueryList = window.matchMedia(query);
		const documentChangeHandler = (): void =>
			setMatches(mediaQueryList.matches);

		mediaQueryList.addEventListener("change", documentChangeHandler);

		return () => {
			mediaQueryList.removeEventListener("change", documentChangeHandler);
		};
	}, [query]);

	return matches;
};

export const MediaShow: FC<MediaQueryProps> = ({ query, children }) => {
	const matches = useMediaQuery(query);
	return <Show when={matches}>{children}</Show>;
};
