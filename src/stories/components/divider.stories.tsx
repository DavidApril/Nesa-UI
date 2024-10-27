import {Meta, StoryObj} from "@storybook/react";
import {Divider} from "../../components";


const meta = {
  title: 'UI/Divider',
  component: Divider,
  tags: ['autodocs'],
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => <Divider {...args} />,
};