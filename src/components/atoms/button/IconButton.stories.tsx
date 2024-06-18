import {Meta, StoryObj} from '@storybook/react'
import IconButton from './IconButton.tsx'
import {ChevronLeftIcon, ChevronRightIcon, Cross1Icon} from '@radix-ui/react-icons'

type T = typeof IconButton
type Story = StoryObj<T>

const meta: Meta<T> = {
  component: IconButton,
}

export default meta

export const CloseButton: Story = {
  args: {
    icon: <Cross1Icon/>,
  }
}

export const NextPageButton: Story = {
  args: {
    icon: <ChevronRightIcon/>,
  }
}

export const PrevPageButton: Story = {
  args: {
    icon: <ChevronLeftIcon/>,
  }
}