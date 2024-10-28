import {StackedLayout} from "../../components";
import {Meta, StoryObj} from "@storybook/react";
import {NavbarExample, SidebarExample} from "./examples";

const meta = {
  title: 'Layouts/StackedLayout',
  component: StackedLayout,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['layout', 'autodocs'],
} as Meta<typeof StackedLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    navbar: <NavbarExample/>,
    sidebar: <SidebarExample/>,
  },
  render: args => <StackedLayout
    navbar={args.navbar}
    sidebar={args.sidebar}>
    {args.children}
  </StackedLayout>
}