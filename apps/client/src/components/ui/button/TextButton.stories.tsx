import { TextButton } from "./TextButton.tsx";
import type { Meta, StoryObj } from "@storybook/react";

type T = typeof TextButton;
type Story = StoryObj<T>;

const meta: Meta<T> = {
	component: TextButton,
};

export default meta;

export const Primary: Story = {};

export const Danger: Story = {};
