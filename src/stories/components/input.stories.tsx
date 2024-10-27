import {Input} from "../../components";
import {Meta, StoryObj} from "@storybook/react";


const meta = {
  title: 'Forms/Input',
  component: Input,
  tags: ['forms', 'autodocs'],
  argTypes: {
    type: {
      control: {
        type: 'select',
      },
      options: ['text', 'password', 'email', 'number', 'tel', 'url']
    }
  },
  parameters: {
    layout: 'centered',
  }

} satisfies Meta<typeof Input>

export default meta;
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    type: 'text',
    placeholder: 'Enter your text here, please'
  },
  render: (args) => <Input {...args} />

}