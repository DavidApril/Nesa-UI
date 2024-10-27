import {Checkbox} from "../../components";
import {Meta, StoryObj} from "@storybook/react";


const meta = {
  title: 'Forms/Checkbox',
  component: Checkbox,
  tags: ['forms', 'autodocs'],
  parameters: {
    layout: 'centered',
  }

} satisfies Meta<typeof Checkbox>

export default meta;
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => <Checkbox {...args} />
}