import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
// import { action } from '@storybook/addon-actions';
import { Callout } from "./Callout";
import { Flex, Box } from "../../Layout";
import { For } from "../../Flow";
import { Text } from "../../Typography";

export default {
	title: "Components/Callout",
	component: Callout,
	tags: ["Components", "autodocs"],
} as Meta<typeof Callout>;

const StoryTemplate: StoryFn<typeof Callout> = args => (
	<Callout {...args}>
		<Flex>Hello world</Flex>
	</Callout>
);

const icon = (
	<svg
		width="15"
		height="15"
		viewBox="0 0 15 15"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM8.24992 4.49999C8.24992 4.9142 7.91413 5.24999 7.49992 5.24999C7.08571 5.24999 6.74992 4.9142 6.74992 4.49999C6.74992 4.08577 7.08571 3.74999 7.49992 3.74999C7.91413 3.74999 8.24992 4.08577 8.24992 4.49999ZM6.00003 5.99999H6.50003H7.50003C7.77618 5.99999 8.00003 6.22384 8.00003 6.49999V9.99999H8.50003H9.00003V11H8.50003H7.50003H6.50003H6.00003V9.99999H6.50003H7.00003V6.99999H6.50003H6.00003V5.99999Z"
			fill="currentColor"
			fill-rule="evenodd"
			clip-rule="evenodd"
		></path>
	</svg>
);

const StoryTemplateList = ({
	items,
	...args
}: {
	items: React.ComponentProps<typeof Callout>[];
}) => {
	return (
		<Flex className="">
			<For items={items}>
				{item => (
					<Callout {...Object.assign({}, args, item)}>
						<Flex>Hello world</Flex>
					</Callout>
				)}
			</For>
		</Flex>
	);
};

export const Default = () => {
	return (
		<Callout>
			<Text>Hello Collout</Text>
		</Callout>
	);
};

export const Icon = () => {
	return (
		<Callout>
			<Box slot-icon>{icon}</Box>
			<Text>
				You will need admin privileges to install and access this application.
			</Text>
		</Callout>
	);
};

// export const Default = StoryTemplate.bind({});
// Default.args = {
//   className: "rounded-md",
//   size: "lg",
// 	children: "Hello World",
// };

// export const Sizes = StoryTemplateList.bind({});
// Sizes.args = {
//   items: ["sm", "md", "lg"].map(size => ({
//     size,
//   })),
//   className: "rounded-md text-white",
//   color: "cyan"
//
// }
//
// export const Colors = StoryTemplateList.bind({});
// Colors.args = {
//   items: ["indigo", "cyan", "orange", "rose"].map(color => ({
//     color,
//   })),
//   className: "rounded-md",
// }
