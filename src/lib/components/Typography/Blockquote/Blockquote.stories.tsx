import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
// import { action } from '@storybook/addon-actions';
import { Blockquote } from "./Blockquote";

export default {
	title: "Typography/Blockquote",
	component: Blockquote,
	tags: ["Typography", "autodocs"],
} as Meta<typeof Blockquote>;

const StoryTemplate: StoryFn<typeof Blockquote> = args => (
	<div className="flex flex-col gap-3 bg-neutral-100 dark:bg-neutral-900 p-5 rounded-md">
		<Blockquote {...args}>Lorem ipsum dolor sit amet</Blockquote>
	</div>
);
const StoryTemplateList = ({
	items,
	...args
}: {
	items: React.ComponentProps<typeof Blockquote>[];
}) => {
	return (
		<div className="flex flex-col gap-3">
			{items.map((item, index) => (
				<Blockquote key={index} {...args} {...item}>
					Lorem ipsum dolor sit amet
				</Blockquote>
			))}
		</div>
	);
};

export const Default = StoryTemplate.bind({});
Default.args = {
	as: "h2",
	className: "text-neutral-900 dark:text-white",
};

export const Align = StoryTemplateList.bind({});
Align.args = {
	items: [
		{
			className:
				"left text-neutral-900 dark:text-white w-full p-3 rounded-lg bg-neutral-100 dark:bg-neutral-900",
		},
		{
			className:
				"center text-neutral-900 dark:text-white w-full p-3 rounded-lg bg-neutral-100 dark:bg-neutral-900",
		},
		{
			className:
				"right text-neutral-900 dark:text-white w-full p-3 rounded-lg bg-neutral-100 dark:bg-neutral-900",
		},
		{
			className:
				"justify text-neutral-900 dark:text-white w-full p-3 rounded-lg bg-neutral-100 dark:bg-neutral-900",
		},
	],
};

export const Decoration = StoryTemplateList.bind({});
Decoration.args = {
	items: [
		{
			className:
				"underline text-neutral-900 dark:text-white w-full p-3 rounded-lg bg-neutral-100 dark:bg-neutral-900",
		},
		{
			className:
				"line-through text-neutral-900 dark:text-white w-full p-3 rounded-lg bg-neutral-100 dark:bg-neutral-900",
		},
		{
			className:
				"overline text-neutral-900 dark:text-white w-full p-3 rounded-lg bg-neutral-100 dark:bg-neutral-900",
		},
	],
};

export const Family = StoryTemplateList.bind({});
Family.args = {
	items: [
		{
			family:
				"sans text-neutral-900 dark:text-white w-full p-3 rounded-lg bg-neutral-100 dark:bg-neutral-900",
		},
		{
			family:
				"serif text-neutral-900 dark:text-white w-full p-3 rounded-lg bg-neutral-100 dark:bg-neutral-900",
		},
		{
			family:
				"mono text-neutral-900 dark:text-white w-full p-3 rounded-lg bg-neutral-100 dark:bg-neutral-900",
		},
	],
};

export const Size = StoryTemplateList.bind({});
const SizeClassName =
	"text-neutral-900 dark:text-white w-full p-3 rounded-lg bg-neutral-100 dark:bg-neutral-900";

Size.args = {
	items: [
		{ className: `${SizeClassName} text-xs` },
		{ className: `${SizeClassName} text-sm` },
		{ className: `${SizeClassName} text-md` },
		{ className: `${SizeClassName} text-lg` },
		{ className: `${SizeClassName} text-xl` },
		{ className: `${SizeClassName} text-2xl` },
		{ className: `${SizeClassName} text-3xl` },
	],
};

export const asParent = () => (
	<Blockquote className="text-white dark:text-neutral-900">
		<h1 slot-parent className="bg-blue-300 p-2">
			Lorem ipsum dolor sit amet
		</h1>
	</Blockquote>
);
