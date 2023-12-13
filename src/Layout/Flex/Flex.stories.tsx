import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
// import { action } from '@storybook/addon-actions';
import { Flex } from "./Flex";

export default {
	title: "Layout/Flex",
	component: Flex,
	tags: ["Layout", "autodocs"],
} as Meta<typeof Flex>;

const StoryTemplate: StoryFn<typeof Flex> = args => (
	<Flex {...args}>
		{[1, 2, 3, 4, 5].map(item => (
			<div key={item} className="bg-blue-500 p-5">
				Hello World
			</div>
		))}
	</Flex>
);

const StoryTemplateList = ({
	items,
	...args
}: {
	items: React.ComponentProps<typeof Flex>[];
}) => {
	return (
		<>
			{items.map((item, index) => (
				<Flex key={index} {...Object.assign({}, args, item)}>
					{[1, 2, 3, 4, 5].map(item => (
						<div key={item} className="bg-blue-500 p-5">
							Hello World
						</div>
					))}
				</Flex>
			))}
		</>
	);
};

export const Default = StoryTemplate.bind({});
Default.args = {
	as: "div",
	className: "bg-red-500 p-5 gap-3",
	children: "Hello World",
};

export const AsChild = () => {
	return (
		<Flex>
			<div className="bg-blue-500 p-5 gap-3" slot-parent>
				{[1, 2, 3, 4, 5].map(item => (
					<div key={item} className="bg-blue-400 p-5">
						Hello World
					</div>
				))}
			</div>
		</Flex>
	);
};
