import React, { ReactElement, ReactNode } from "react";

type ForProps<T> = {
	items: T[];
	children: (item: T, index: number) => ReactNode;
	keys?: (item: T, index: number) => React.Key;
	empty?: ReactNode | (() => ReactNode);
};

/**
 * Компонент For для рендеринга списков в React.
 *
 * @template T Тип элементов списка.
 *
 * @param {T[]} items Массив элементов для рендеринга.
 * @param {(item: T, index: number) => ReactNode} children Функция, возвращающая ReactNode для каждого элемента списка.
 * @param {(item: T, index: number) => React.Key} [keys] Функция, возвращающая ключ для каждого элемента списка. По умолчанию использует индекс элемента.
 * @param {ReactNode | (() => ReactNode)} [empty] Компонент или функция, возвращающая компонент, для отображения в случае пустого списка.
 *
 * @return {ReactElement | null} Элемент React для отображения списка или null, если список пуст и нет компонента empty.
 *
 * @example
 * // Пример использования с массивом чисел
 * <For items={[1, 2, 3]} >
 *  {(item) => <div>{item}</div>}
 * </For>
 *
 * @example
 * // Пример с пустым списком и компонентом empty
 * <For items={[]} empty={<div>Список пуст</div>} >
 *   {(item) => <div>{item}</div>}
 * </For>
 *
 * @example
 * // Пример использования с ключами
 * <For
 *   items={[{ id: 'a', value: 'Первый' }, { id: 'b', value: 'Второй' }]}
 *   keys={(item) => item.id}
 * >{(item) =>
 *   <div>{item.value}</div>
 * }</For>
 */
export const For = <T,>({
	items,
	children,
	keys = (_, index) => index,
	empty,
}: ForProps<T>): ReactElement | null => {
	if (items.length === 0)
		return <>{typeof empty === "function" ? empty() : empty}</>;

	return (
		<>
			{items.map((item, index) => (
				<React.Fragment key={keys(item, index)}>
					{children(item, index)}
				</React.Fragment>
			))}
		</>
	);
};

export default React.memo(For);
