import {SidebarLayout} from "../../components";
import {Meta, StoryObj} from "@storybook/react";
import {NavbarExample, SidebarExample} from "./examples";


const meta = {
  title: 'Layouts/Sidebar',
  component: SidebarLayout,
  tags: ['autodocs'],
} satisfies Meta<typeof SidebarLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    navbar: <NavbarExample/>,
    sidebar: <SidebarExample/>
  },
  render: args => <SidebarLayout {...args} />
}