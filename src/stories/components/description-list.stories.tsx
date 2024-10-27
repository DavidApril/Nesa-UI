import {DescriptionDetails, DescriptionList, DescriptionTerm} from "../../components";
import {Meta, StoryObj} from "@storybook/react";

const meta = {
  title: 'UI/DescriptionList',
  component: DescriptionList,
  tags: ['autodocs'],
} satisfies Meta<typeof DescriptionList>

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <DescriptionList {...args}>
    <DescriptionTerm>Customer</DescriptionTerm>
    <DescriptionDetails>Leslie Alexander</DescriptionDetails>

    <DescriptionTerm>Email</DescriptionTerm>
    <DescriptionDetails>leslie.alexander@example.com</DescriptionDetails>

    <DescriptionTerm>Access</DescriptionTerm>
    <DescriptionDetails>Admin</DescriptionDetails>
  </DescriptionList>
}