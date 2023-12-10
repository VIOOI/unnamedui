import React from "react";

interface MatchProps {
	when: boolean;
	children: React.ReactNode;
}
/**
 * Компонент `Match` используется в сочетании с `Switch`.
 * Он отображает своих детей (`children`), если свойство `when` истинно (true).
 *
 * @param {boolean} when - Условие, определяющее, будет ли отображаться содержимое компонента.
 * @param {React.ReactNode} children - Дочерние элементы, которые будут отображаться, если `when` истинно.
 * @returns {ReactElement | null} Возвращает дочерние элементы, если `when` истинно, в противном случае ничего не отображает.
 *
 * @example
 * <Match when={someCondition}>
 *   <SomeComponent />
 * </Match>
 */
export const Match: React.FC<MatchProps> = React.memo(({ children }) => {
	return <>{children}</>;
});
