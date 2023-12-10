import React, { ReactElement } from "react";
import { Match } from "./Match";

interface SwitchProps {
	children: ReactElement | ReactElement[];
	fallback: ReactElement;
}
/**
 * Компонент `Switch` работает аналогично оператору switch в JavaScript.
 * Он принимает произвольное количество дочерних компонентов `Match` и возвращает первый `Match`, чье свойство `when` равно `true`.
 * Если такого `Match` нет, возвращается компонент, указанный в свойстве `fallback`.
 *
 * @param {ReactElement | ReactElement[]} children - Дочерние элементы, которые могут включать один или несколько компонентов `Match`.
 * @param {ReactElement} fallback - Элемент, который будет отображен, если ни один из дочерних компонентов `Match` не соответствует условию.
 * @returns {ReactElement} Возвращает первый подходящий `Match` или `fallback` элемент.
 *
 * @example
 * <Switch fallback={<DefaultComponent />}>
 *   <Match when={condition1}><Component1 /></Match>
 *   <Match when={condition2}><Component2 /></Match>
 *   ...
 * </Switch>
 */
export const Switch: React.FC<SwitchProps> = ({ children, fallback }) => {
	const match = React.Children.toArray(children).find(
		(child: React.ReactNode) =>
			React.isValidElement(child) && child.type === Match && child.props.when,
	) as ReactElement | undefined;

	return <>{match || fallback}</>;
};
