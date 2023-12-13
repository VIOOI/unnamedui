import React, { ReactNode, ReactElement, memo } from "react";

type RepeatProps = {
	count: number;
	children: ReactNode | ((index: number) => ReactNode);
	empty?: ReactNode | (() => ReactNode);
};

/**
 * Компонент Repeat для повторения дочерних элементов.
 *
 * @param {RepeatProps} props - Параметры компонента.
 * @param {number} props.count - Количество повторений.
 * @param {ReactNode | ((index: number) => ReactNode)} props.children - Дочерние элементы или функция для их рендера.
 * @param {ReactNode | (() => ReactNode)} [props.empty] - Элемент, отображаемый при отсутствии дочерних элементов.
 *
 * @returns {React.ReactElement} React-компонент.
 *
 * @example
 * <Repeat count={5}>
 *   {(index) => <p>Элемент {index}</p>}
 * </Repeat>
 *
 * @example
 * <Repeat count={0} empty={<p>Нет элементов</p>}/>
 *
 */
export const Repeat: React.FC<RepeatProps> = memo(
	({ count, children, empty }) => {
		const renderChildren = (index: number): ReactNode => {
			if (index >= count) return null;
			const element =
				typeof children === "function" ? children(index) : children;
			return (
				<React.Fragment key={index}>
					{element}
					{renderChildren(index + 1)}
				</React.Fragment>
			);
		};

		return (
			<>
				{count === 0
					? typeof empty === "function"
						? empty()
						: empty
					: renderChildren(0)}
			</>
		);
	},
);
