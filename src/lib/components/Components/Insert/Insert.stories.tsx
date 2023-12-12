import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
import { Insert } from "./Insert";
import { Heading, Text } from "../../Typography";
import { Flex, Box } from "../../Layout";

export default {
	title: "Components/Insert",
	component: Insert,
	tags: ["Components", "autodocs"],
} as Meta<typeof Insert>;

export const Default = () => (
	<Box className="max-w-sm rounded overflow-hidden shadow-lg">
		<Insert side="0 2 0 0">
			<img className="w-full" src="https://placehold.co/600x400" alt="Image" />
		</Insert>
		<Box className="px-6 py-4 bg-white">
			<Heading className="font-bold text-xl mb-2">Typography</Heading>
			<Text className="text-gray-700 text-base">
				Typography is the art and technique of arranging type to make written
				language legible, readable and appealing when displayed.
			</Text>
		</Box>
	</Box>
);
