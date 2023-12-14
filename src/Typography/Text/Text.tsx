import React, { HTMLAttributes, forwardRef } from "react";
import { cn } from "../../Utilitis";
import { ClassValue } from "clsx";
import { Show, Slot } from "../../Flow";

type TextElement =
	| HTMLParagraphElement
	| HTMLHeadingElement
	| HTMLSpanElement
	| HTMLDivElement
	| HTMLLIElement;

type TextProps = {
	as?:
		| "p"
		| "h1"
		| "h2"
		| "h3"
		| "h4"
		| "h5"
		| "h6"
		| "b"
		| "i"
		| "strong"
		| "em"
		| "mark"
		| "small"
		| "del"
		| "ins"
		| "sub"
		| "sup"
		| "code"
		| "kbd"
		| "samp"
		| "var"
		| "pre"
		| "abbr"
		| "address"
		| "cite"
		| "bdo"
		| "blockquote"
		| "q"
		| "dfn"
		| "ul"
		| "ol"
		| "li";
	children: React.ReactNode;
	className?: ClassValue;
} & HTMLAttributes<TextElement>;

export const Text = forwardRef<TextElement, TextProps>(
	({ children, as: As = "p", className, ...props }, ref) => {
		const propses = (props: any) =>
			Object.assign({}, props, {
				className: cn(props.className, className, "bg-blue-500"),
				ref,
			});

		const { Default, Parent } = Slot.get(children, ["Parent"], {});

		return (
			<>
				<Show when={Slot.isNull(Parent)} fallback={<Parent />}>
					<As ref={ref} {...propses(props)}>
						<Default />
					</As>
				</Show>
			</>
		);
	},
);

// const ShowSlot = (slot: FC) => Parent === null ? null : < />
