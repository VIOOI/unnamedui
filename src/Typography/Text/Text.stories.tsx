import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
import { Text } from "./Text";
import { cn } from "../../Utilitis";

export default {
	title: "Typography/Text",
	component: Text,
	tags: ["Typography", "autodocs"],
} as Meta<typeof Text>;

const StoryTemplate: StoryFn<typeof Text> = ({
	className,
	children,
	as = "p",
	...args
}) => (
	<div className="">
		<Text
			{...args}
			as={as}
			className={cn("text-neutral-950 dark:text-white", className)}
		>
			{children && <strong>{children} </strong>}
			The quick brown fox jumps over the lazy dog.
		</Text>
	</div>
);

type StoryTemplateListProps = {
	items: React.ComponentProps<typeof Text>[];
};
const StoryTemplateList = ({ items, ...args }: StoryTemplateListProps) => {
	return (
		<div className="flex flex-col gap-3">
			{items.map((item, index) => (
				<Text
					key={index}
					as={item.as}
					{...args}
					className={cn(
						"text-neutral-950 dark:text-white",
						// @ts-ignore
						args.className,
						item.className,
					)}
				>
					{item.children && <strong>{item.children} </strong>}
					The quick brown fox jumps over the lazy dog.
				</Text>
			))}
		</div>
	);
};

export const Default = StoryTemplate.bind({});
Default.args = {};

export const Align = StoryTemplateList.bind({});
Align.args = {
	items: [
		{ className: "text-left", children: "Left" },
		{ className: "text-center", children: "Center" },
		{ className: "text-right", children: "Right" },
		{ className: "text-justify", children: "Justify" },
	],
};

export const As = StoryTemplateList.bind({});
As.args = {
	items: [
		{ as: "p", children: "Paragraph" },
		{ as: "span", children: "Span" },
		{ as: "strong", children: "Strong" },
		{ as: "em", children: "Emphasis" },
		{ as: "mark", children: "Mark" },
		{ as: "del", children: "Deleted" },
		{ as: "ins", children: "Inserted" },
		{ as: "sub", children: "Subscript" },
		{ as: "sup", children: "Superscript" },
	],
};

export const Decoration = StoryTemplateList.bind({});
Decoration.args = {
	items: [
		{ className: "underline", children: "Underline" },
		{ className: "line-through", children: "Line-through" },
		{ className: "no-underline", children: "No-underline" },
	],
};

export const Family = StoryTemplateList.bind({});
Family.args = {
	items: [
		{ className: "font-sans", children: "Sans" },
		{ className: "font-serif", children: "Serif" },
		{ className: "font-mono", children: "Mono" },
	],
};

export const Size = StoryTemplateList.bind({});
Size.args = {
	items: [
		{
			className: "text-xs",
			children: "Extra Small",
		},
		{
			className: "text-sm",
			children: "Small",
		},
		{
			className: "text-base",
			children: "Base",
		},
		{
			className: "text-lg",
			children: "Large",
		},
		{
			className: "text-xl",
			children: "Extra Large",
		},
		{
			className: "text-2xl",
			children: "2XL",
		},
		{
			className: "text-3xl",
			children: "3XL",
		},
	],
};

export const asParent = () => (
	<Text className="text-neutral-950 dark:text-white">
		<p slot-parent className="bg-blue-500 p-2 px-3 rounded-md">
			Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum
			sint consectetur cupidatat.
		</p>
	</Text>
);
