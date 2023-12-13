import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
// import { action } from '@storybook/addon-actions';
import { Stack } from "./Stack";

export default {
	title: "Layout/Stack",
	component: Stack,
	tags: ["Layout", "autodocs"],
} as Meta<typeof Stack>;

const StoryTemplate: StoryFn<typeof Stack> = args => (
	<Stack {...args}>
		{[1, 2, 3, 4, 5].map(item => (
			<div key={item} className="bg-blue-500 p-5">
				Hello World
			</div>
		))}
	</Stack>
);

const StoryTemplateList = ({
	items,
	...args
}: {
	items: React.ComponentProps<typeof Stack>[];
}) => {
	return (
		<>
			{items.map((item, index) => (
				<Stack key={index} {...Object.assign({}, args, item)}>
					{[1, 2, 3, 4, 5].map(item => (
						<div key={item} className="bg-blue-500 p-5">
							Hello World
						</div>
					))}
				</Stack>
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
		<Stack>
			<div className="bg-blue-500 p-5 gap-3" slot-parent>
				{[1, 2, 3, 4, 5].map(item => (
					<div key={item} className="bg-blue-400 p-5">
						Hello World
					</div>
				))}
			</div>
		</Stack>
	);
};
