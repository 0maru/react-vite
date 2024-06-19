import type { Meta, StoryObj } from "@storybook/react";
import IconButton from "./IconButton.tsx";
import {
	ChevronLeftIcon,
	ChevronRightIcon,
	Cross1Icon,
} from "@radix-ui/react-icons";

type T = typeof IconButton;

const meta: Meta<T> = {
	component: IconButton,
};

export default meta;

export const CloseButton: StoryObj<T> = {
	args: {
		icon: <Cross1Icon />,
	},
};

export const NextPageButton: StoryObj<T> = {
	args: {
		icon: <ChevronRightIcon />,
	},
};

export const PrevPageButton: StoryObj<T> = {
	args: {
		icon: <ChevronLeftIcon />,
	},
};
