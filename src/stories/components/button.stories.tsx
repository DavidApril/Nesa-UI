import {Meta, StoryObj} from "@storybook/react";
import {fn} from "@storybook/test";
import {Button} from "../../components";

/**
 * Meta configuration for the Button component stories.
 * - title: The title of the story.
 * - component: The component being documented.
 * - parameters: Additional parameters for the story.
 * - tags: Tags for the story.
 * - argTypes: Argument types for the story.
 * - args: Default arguments for the story.
 */
const meta = {
  title: 'Button/basic',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: {
        type: 'select',

      },
      options: ['sm', 'md', 'lg'],
    },
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
} as Meta<typeof Button>;
type Story = StoryObj<typeof Button>;

export default meta;

/**
 * Default story for the Button component.
 * Renders a primary button with default arguments.
 */
export const Default: Story = {
  render: (args) => (<Button {...args}> Primary </Button>)
};
/**
 * Story for the Button component with red color.
 * Renders a primary button with red color.
 */