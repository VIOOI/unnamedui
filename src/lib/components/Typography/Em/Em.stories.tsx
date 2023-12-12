import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
// import { action } from '@storybook/addon-actions';
import { Em } from "./Em";
import { Text } from "../";

export default {
	title: "Typography/Em",
	component: Em,
	tags: ["Typography", "autodocs"],
} as Meta<typeof Em>;

const StoryTemplate: StoryFn<typeof Em> = args => (
	<div className="flex flex-col gap-3 bg-neutral-100 dark:bg-neutral-900 p-5 rounded-md">
		<Text>
			Lorem <Em {...args}>ipsum dolor sit amet</Em>, qui minim labore
			adipisicing minim sint cillum sint consectetur cupidatat.
		</Text>
	</div>
);

export const Default = StoryTemplate.bind({});
Default.args = {
	as: "h2",
	className: "text-neutral-900 dark:text-white",
};
