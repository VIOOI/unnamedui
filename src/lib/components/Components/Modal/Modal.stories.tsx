import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
import { Modal } from "./Modal";
import { Button } from "../../Components";
import { Box, Flex } from "../../Layout";
import { Heading, Text } from "../../Typography";
// import { For } from "../../Flow";

export default {
	title: "Components/Modal",
	component: Modal,
	tags: ["Components", "autodocs"],
} as Meta<typeof Modal>;

// const StoryTemplate: StoryFn<typeof Modal> = args => (
// 	<Modal {...args}>
// 	</Modal>
// );

export const Default = () => (
	<Modal>
		<Button slot-trigger className="bg-blue-400 text-blue-900 font-bold">
			Open modal
		</Button>

		<Flex className="flex-col items-start bg-white p-3 rounded-lg w-[30vw]">
			<Heading>Revoke access</Heading>
			<Text>
				Are you sure? This application will no longer be accessible and any
				existing sessions will be expired.
			</Text>
			<Flex className="justify-end w-full">
				<Button slot-close className="bg-blue-400 text-blue-900 font-bold">
					Revoke
				</Button>
				<Button className="bg-red-400 text-red-900 font-bold" slot-close>
					Cancel
				</Button>
			</Flex>
		</Flex>
	</Modal>
);
