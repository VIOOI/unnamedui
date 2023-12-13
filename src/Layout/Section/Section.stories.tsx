import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
import { Section } from "./Section";
import { Heading } from "../../Typography";
import { Flex } from "../Flex";

export default {
	title: "Layout/Section",
	component: Section,
	tags: ["Layout", "autodocs"],
} as Meta<typeof Section>;

const StoryTemplate: StoryFn<typeof Section> = args => (
	<Section {...args}>
		<Flex slot-parent>
			<Heading className="text-neutral-950">Section</Heading>
		</Flex>
	</Section>
);

export const Default = StoryTemplate.bind({});
Default.args = {
	className: "bg-blue-100 rounded-md",
};
