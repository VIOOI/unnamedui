import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
// import { action } from '@storybook/addon-actions';
import { Grid } from "./Grid";

export default {
	title: "Layout/Grid",
	component: Grid,
	tags: ["Layout", "autodocs"],
} as Meta<typeof Grid>;

const StoryTemplate: StoryFn<typeof Grid> = args => (
	<Grid {...args}>
		{[1, 2, 3, 4, 5].map(item => (
			<div key={item} className="bg-blue-500 p-5">
				Hello World
			</div>
		))}
	</Grid>
);

const StoryTemplateList = ({
	items,
	...args
}: {
	items: React.ComponentProps<typeof Grid>[];
}) => {
	return (
		<>
			{items.map((item, index) => (
				<Grid key={index} {...Object.assign({}, args, item)}>
					{[1, 2, 3, 4, 5].map(item => (
						<div key={item} className="bg-blue-500 p-5">
							Hello World
						</div>
					))}
				</Grid>
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
		<Grid>
			<div className="bg-blue-500 p-5 gap-3" slot-parent>
				{[1, 2, 3, 4, 5, 6, 7].map(item => (
					<div key={item} className="bg-blue-400 p-5">
						Hello World
					</div>
				))}
			</div>
		</Grid>
	);
};
