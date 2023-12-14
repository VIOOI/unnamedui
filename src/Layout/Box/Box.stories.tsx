import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
// import { action } from '@storybook/addon-actions';
import { Box } from "./Box";

export default {
	title: "Layout/Box",
	component: Box,
	tags: ["Layout", "autodocs"],
} as Meta<typeof Box>;

const StoryTemplate: StoryFn<typeof Box> = args => <Box {...args}></Box>;

const StoryTemplateList = ({
	items,
	...args
}: {
	items: React.ComponentProps<typeof Box>[];
}) => {
	return (
		<>
			{items.map((item, index) => (
				<Box key={index} {...Object.assign({}, args, item)}></Box>
			))}
		</>
	);
};

export const Default = StoryTemplate.bind({});
Default.args = {
	as: "div",
	className: "bg-red-500 p-5",
	children: "Hello World",
};

export const AsChild = StoryTemplate.bind({});
AsChild.args = {
	className: "p-5",
	children: (
		<div className="bg-blue-500" data-slot="Parent">
			Hello World
		</div>
	),
};
