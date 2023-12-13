import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
// import { action } from '@storybook/addon-actions';
import { AspectRatio } from "./AspectRatio";
import { Flex } from "../../Layout";
import { For } from "../../Flow";

export default {
	title: "Components/AspectRatio",
	component: AspectRatio,
	tags: ["Components", "autodocs"],
} as Meta<typeof AspectRatio>;

const StoryTemplate: StoryFn<typeof AspectRatio> = args => (
	<AspectRatio {...args}>
		{args.children || <Flex>Hello world</Flex>}
	</AspectRatio>
);

const StoryTemplateList = ({
	items,
	...args
}: {
	items: React.ComponentProps<typeof AspectRatio>[];
}) => {
	return (
		<Flex>
			<For items={items}>
				{item => (
					<AspectRatio {...Object.assign({}, args, item)}>
						<Flex>Hello world</Flex>
					</AspectRatio>
				)}
			</For>
		</Flex>
	);
};

export const Default = StoryTemplate.bind({});
Default.args = {
	className: "rounded-md bg-blue-500 text-white",
	ratio: 16 / 9,
	children: (
		<img
			src="https://images.unsplash.com/photo-1479030160180-b1860951d696?&auto=format&fit=crop&w=1200&q=80"
			alt="A house in a forest"
			className="object-cover w-full h-full rounded-md"
		/>
	),
};

// export const Sizes = StoryTemplateList.bind({});
// Sizes.args = {
// 	items: ["sm", "md", "lg"].map(size => ({
// 		size,
// 	})),
// 	className: "rounded-md text-white bg-blue-500",
// 	color: "cyan",
// };
//
// export const Colors = StoryTemplateList.bind({});
// Colors.args = {
// 	items: ["bg-indigo-500", "bg-cyan-500", "bg-orange-500", "bg-rose-500"].map(
// 		color => ({
// 			className: "rounded-md text-white " + color,
// 		}),
// 	),
// };
