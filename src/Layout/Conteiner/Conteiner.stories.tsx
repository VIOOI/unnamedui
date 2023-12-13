import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
// import { action } from '@storybook/addon-actions';
import { Conteiner } from "./Conteiner";
import { Flex } from "../Flex";
import { For } from "../../Flow";

export default {
	title: "Layout/Conteiner",
	component: Conteiner,
	tags: ["Layout", "autodocs"],
} as Meta<typeof Conteiner>;

const StoryTemplate: StoryFn<typeof Conteiner> = args => (
	<Conteiner {...args}>
		<Flex>Hello world</Flex>
	</Conteiner>
);

const StoryTemplateList = ({
	items,
	...args
}: {
	items: React.ComponentProps<typeof Conteiner>[];
}) => {
	return (
		<Flex className="flex-col">
			<For items={items}>
				{item => (
					<Conteiner {...Object.assign({}, args, item)}>
						<Flex>Hello world</Flex>
					</Conteiner>
				)}
			</For>
		</Flex>
	);
};

export const Default = StoryTemplate.bind({});
Default.args = {
	as: "div",
	className: "bg-red-500 p-5 gap-3",
	children: "Hello World",
};

export const Sizes = StoryTemplateList.bind({});
Sizes.args = {
	items: [
		{ className: "max-w-sm p-5 bg-blue-500" },
		{ className: "max-w-md p-5 bg-blue-500" },
		{ className: "max-w-lg p-5 bg-blue-500" },
		{ className: "max-w-xl p-5 bg-blue-500" },
		{ className: "max-w-2xl p-5 bg-blue-500" },
		{ className: "max-w-3xl p-5 bg-blue-500" },
		{ className: "max-w-4xl p-5 bg-blue-500" },
		{ className: "max-w-5xl p-5 bg-blue-500" },
	],
};

export const AsChild = () => {
	return (
		<Conteiner>
			<Flex className="bg-blue-500 p-5 gap-3" slot-parent>
				Hello world
			</Flex>
		</Conteiner>
	);
};
