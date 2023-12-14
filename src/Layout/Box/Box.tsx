import React, { HTMLAttributes, Ref, forwardRef } from "react";
import { cn } from "../../Utilitis";
import { ClassValue } from "clsx";
import { Show, Slot } from "../../Flow";

type BoxElement = HTMLDivElement | HTMLButtonElement;

type BoxProps = {
	as?:
		| "span"
		| "div"
		| "section"
		| "article"
		| "aside"
		| "header"
		| "footer"
		| "main"
		| "nav"
		| "fieldset"
		| "button"
		| "a";
	children?: React.ReactNode;
	className?: ClassValue;
} & HTMLAttributes<BoxElement>;

export const Box = forwardRef<BoxElement, BoxProps>(
	({ children, as: As = "div", className, ...props }, ref) => {
		const propses = (props: any) =>
			Object.assign({}, props, {
				className: cn(props.className, className, "rounded-md"),
				ref,
			});

		const { Default, Parent } = Slot.get(children, ["Parent"], {
			Parent: propses,
		});

		return (
			<Show
				when={Slot.isNull(Parent)}
				fallback={
					<As ref={ref} {...propses(props)}>
						<Default />
					</As>
				}
			>
				<Parent />
			</Show>
		);
	},
);
