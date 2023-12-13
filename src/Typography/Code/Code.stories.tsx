import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
// import { action } from '@storybook/addon-actions';
import { Code } from "./Code";

export default {
	title: "Typography/Code",
	component: Code,
	tags: ["Typography", "autodocs"],
} as Meta<typeof Code>;

const StoryTemplate: StoryFn<typeof Code> = args => (
	<Code {...args}>console.log()</Code>
);

const StoryTemplateList = ({
	items,
	...args
}: {
	items: React.ComponentProps<typeof Code>[];
}) => {
	return (
		<div className="flex flex-col justify-center items-start gap-3">
			{items.map((item, index) => (
				<Code key={index} {...args} {...item}>
					console.log()
				</Code>
			))}
		</div>
	);
};

export const Default = StoryTemplate.bind({});
Default.args = {};

export const Size = StoryTemplateList.bind({});

Size.args = {
	items: [
		{ className: ` text-xs` },
		{ className: ` text-sm` },
		{ className: ` text-md` },
		{ className: ` text-lg` },
		{ className: ` text-xl` },
		{ className: ` text-2xl` },
		{ className: ` text-3xl` },
	],
};
