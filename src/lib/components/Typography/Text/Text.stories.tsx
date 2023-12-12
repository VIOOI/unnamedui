import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
// import { action } from '@storybook/addon-actions';
import { Text } from "./Text";

export default {
	title: "Typography/Text",
	component: Text,
	tags: ["Typography", "autodocs"],
} as Meta<typeof Text>;

const StoryTemplate: StoryFn<typeof Text> = args => (
	<div className="flex flex-col gap-3 bg-neutral-100 dark:bg-neutral-900 p-5 rounded-md">
		<Text {...args}>
			Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum
			sint consectetur cupidatat.
		</Text>
	</div>
);
const StoryTemplateList = ({
	items,
	...args
}: {
	items: React.ComponentProps<typeof Text>[];
}) => {
	return (
		<div className="flex flex-col gap-3">
			{items.map((item, index) => (
				<Text key={index} {...args} {...item}>
					Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
					cillum sint consectetur cupidatat.
				</Text>
			))}
		</div>
	);
};

export const Default = StoryTemplate.bind({});
Default.args = {
	as: "p",
	className: "text-neutral-900 dark:text-white",
};

export const Align = StoryTemplateList.bind({});
Align.args = {
	items: [
		{ align: "left" },
		{ align: "center" },
		{ align: "right" },
		{ align: "justify" },
	],
	className:
		"text-neutral-900 dark:text-white w-full p-3 rounded-lg bg-neutral-100 dark:bg-neutral-900",
};

export const Decoration = StoryTemplateList.bind({});
Decoration.args = {
	items: [
		{ decoration: "underline" },
		{ decoration: "line-through" },
		{ decoration: "overline" },
	],
	className:
		"text-neutral-900 dark:text-white w-full p-3 rounded-lg bg-neutral-100 dark:bg-neutral-900",
};

export const Family = StoryTemplateList.bind({});
Family.args = {
	items: [{ family: "sans" }, { family: "serif" }, { family: "mono" }],
	className:
		"text-neutral-900 dark:text-white w-full p-3 rounded-lg bg-neutral-100 dark:bg-neutral-900",
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
	<Text className="text-white dark:text-neutral-900">
		<p slot-parent className="bg-blue-300 p-2">
			Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum
			sint consectetur cupidatat.
		</p>
	</Text>
);
