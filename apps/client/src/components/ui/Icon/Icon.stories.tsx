import { Icon } from './Icon.tsx'
import type {Meta, StoryObj} from '@storybook/react'

type T = typeof Icon
type Story = StoryObj<T>

const meta: Meta<T> = {
  component: Icon,
}
export default meta

export const Default: Story = {
  args: {}
}
