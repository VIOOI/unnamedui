import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
// import { action } from '@storybook/addon-actions';
import { Show } from "./";
import { Flex, Box } from "../../Layout";

export default {
	title: "Flow/Show",
	component: Show,
	tags: ["Layout", "autodocs"],
} as Meta<typeof Show>;

const StoryTemplate: StoryFn<typeof Show> = args => <Show {...args}></Show>;

export const Default: StoryFn<typeof Show> = StoryTemplate.bind({});
Default.args = {
	when: true,
	children: <Box className="bg-red-500 p-5">Hello World</Box>,
};
