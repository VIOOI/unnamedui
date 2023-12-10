import React, { useState, useEffect, useCallback } from "react";

type DeferredProps = {
	timeout: number;
	children: JSX.Element;
	placeholder?: JSX.Element;
};

/**
 * Компонент `Deferred` отображает дочерние элементы после заданной задержки.
 * Пока идет задержка, может отображаться заглушка.
 *
 * @param props - Объект, содержащий:
 *   - `timeout`: Время в миллисекундах, через которое будет отрендерен динамический компонент.
 *   - `placeholder`: Элемент, который будет отображён до того, как динамический компонент будет отрендерен.
 *   - `children`: Динамический компонент, который будет отрендерен.
 *
 * @returns Элемент React, представляющий динамический компонент.
 *
 * @example
 * ```tsx
 * Пример использования `Deferred` для отложенной загрузки компонента.
 *
 * <Deferred timeout={1000} placeholder={<div>Загрузка...</div>}>
 *  <MyComponent />
 * </Deferred>
 * ```
 */
export const Deferred: React.FC<DeferredProps> = React.memo(
	({ timeout, children, placeholder }) => {
		const [isShown, setIsShown] = useState(false);

		const handleSetIsShown = useCallback(() => {
			setIsShown(true);
		}, []);

		useEffect(() => {
			const timer = setTimeout(handleSetIsShown, timeout);
			return () => clearTimeout(timer);
		}, [timeout, handleSetIsShown]);

		return isShown ? children : placeholder || null;
	},
);

export default Deferred;
