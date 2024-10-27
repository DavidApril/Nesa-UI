import {Badge} from "../../components";
import {fn} from "@storybook/test";
import {Meta, StoryObj} from "@storybook/react";

const meta = {
  title: 'UI/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: {
        type: 'select',
      },
      options: ['red', 'lime', 'blue', 'dark', 'purple', 'pink', 'zinc', 'amber', 'yellow', 'white', 'cyan', 'violet', 'teal', 'rose', 'orange', 'indigo', 'fuchsia', 'emerald', 'dark/white', 'dark/zinc', 'light'],
    },
  },
  args: {
    onClick: fn()
  },
} as Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => (<Badge {...args}> Badge </Badge>)
}