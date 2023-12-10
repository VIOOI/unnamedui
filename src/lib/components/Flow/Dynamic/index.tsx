import React from "react";

type DynamicProps<T> = {
	component: React.ComponentType<T> | keyof JSX.IntrinsicElements;
	props: T;
};

/**
 * Отображает динамический компонент React.
 *
 * `Dynamic` принимает тип компонента и свойства для этого компонента,
 * позволяя динамически рендерить различные типы компонентов с разными пропсами.
 *
 * @typeparam T - Тип пропсов для динамически рендеримого компонента.
 *
 * @param props - Объект, содержащий:
 *   - `component`: Тип компонента, который нужно отрендерить. Может быть строкой (тегом HTML),
 *     компонентом функционального или классового типа.
 *   - `props`: Пропсы, которые будут переданы в динамический компонент.
 *
 * @returns Элемент React, представляющий динамический компонент.
 *
 * @example
 * ```tsx
 * // Пример с функциональным компонентом
 * const MyComponent: React.FC<{ message: string }> = ({ message }) => <div>{message}</div>;
 * <Dynamic component={MyComponent} props={{ message: "Привет, мир!" }} />
 *
 * // Пример с тегом HTML
 * <Dynamic component="div" props={{ children: "Это div элемент" }} />
 * ```
 */
export const Dynamic = <T,>({
	component,
	props,
}: DynamicProps<T>): JSX.Element => {
	const Component = component as React.ComponentType<T>;
	// @ts-ignore
	return <Component {...props} />;
};
