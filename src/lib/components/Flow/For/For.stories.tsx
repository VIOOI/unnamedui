import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
// import { action } from '@storybook/addon-actions';
import { For } from "./";
import { Flex, Box } from "../../Layout";

export default {
	title: "Flow/For",
	component: For,
	tags: ["Layout", "autodocs"],
} as Meta<typeof For>;

const StoryTemplate: StoryFn<typeof For> = args => <For {...args}></For>;

export const Default = () => (
	<Flex>
		<For
			items={Array.from({ length: 10 }, (_, i) => i)}
			render={(value, index) => (
				<Box key={index} className="bg-red-500 p-5">
					{value}
				</Box>
			)}
		/>
	</Flex>
);
