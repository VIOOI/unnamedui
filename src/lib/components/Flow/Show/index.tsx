import { FC } from "react";

type ShowProps = {
	when: boolean;
	fallback: JSX.Element;
	children: JSX.Element;
};

/**
 * Компонент `Show` для условного рендеринга в React.
 * Отображает `children`, если условие `when` истинно, иначе отображает `fallback`.
 *
 * @param props Объект свойств компонента.
 * @param props.when Условие для отображения `children`.
 * @param props.fallback Элемент JSX, который будет отображаться, если `when` ложно.
 * @param props.children Элементы JSX, которые будут отображаться, если `when` истинно.
 * @returns Элемент JSX, основанный на условии `when`.
 *
 * @example
 * ```jsx
 * <Show when={someCondition} fallback={<div>Загрузка...</div>}>
 *   <div>Содержимое после загрузки</div>
 * </Show>
 * ```
 * @example
 * ```jsx
 * <Show when={someCondition}>
 *   <div>Покажется только если when == true, в противном случае ничего не будет</div>
 * </Show>
 * ```
 */
export const Show: FC<ShowProps> = ({ when, fallback, children }) => {
	return when ? children : fallback;
};
