import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
// import { action } from '@storybook/addon-actions';
import { Button } from "./Button";
import { Flex } from "../../Layout";
import { For } from "../../Flow";

export default {
	title: "Components/Button",
	component: Button,
	tags: ["Components", "autodocs"],
} as Meta<typeof Button>;

const StoryTemplate: StoryFn<typeof Button> = args => (
	<Button {...args}>
		<Flex>Hello world</Flex>
	</Button>
);

const StoryTemplateList = ({
	items,
	...args
}: {
	items: React.ComponentProps<typeof Button>[];
}) => {
	return (
		<Flex>
			<For items={items}>
				{item => (
					<Button {...Object.assign({}, args, item)}>
						<Flex>Hello world</Flex>
					</Button>
				)}
			</For>
		</Flex>
	);
};

export const Default = StoryTemplate.bind({});
Default.args = {
	className: "rounded-md bg-blue-500 text-white",
	size: "lg",
	children: "Hello World",
};

export const Sizes = StoryTemplateList.bind({});
Sizes.args = {
	items: ["sm", "md", "lg"].map(size => ({
		size,
	})),
	className: "rounded-md text-white bg-blue-500",
	color: "cyan",
};

export const Colors = StoryTemplateList.bind({});
Colors.args = {
	items: ["bg-indigo-500", "bg-cyan-500", "bg-orange-500", "bg-rose-500"].map(
		color => ({
			className: "rounded-md text-white " + color,
		}),
	),
};
