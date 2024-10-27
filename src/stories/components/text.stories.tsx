import {Meta, StoryObj} from "@storybook/react";
import {Strong, Text, TextLink} from '../../components'

const meta = {
  title: 'UI/Text',
  component: Text,
  tags: ['typography', 'autodocs'],
  argTypes: {
    children: {
      control: 'text',
    },
  }
} satisfies Meta<typeof Text>

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <Text {...args}>
    This feature is only available to users on the <Strong>Business Plan</Strong>. To upgrade, visit your{' '}
    <TextLink href="#">billing settings</TextLink>.
  </Text>
}