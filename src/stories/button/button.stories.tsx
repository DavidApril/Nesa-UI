import {Button} from "../../components/button";
import {Meta, StoryObj} from "@storybook/react";
import {fn} from "@storybook/test";

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
  title: 'Example/ButtonAlt', // Changed title to avoid conflict
  component: Button,
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
export const Red: Story = {
  args: {
    color: 'red',
  },
  render: (args) => (<Button {...args}> Primary </Button>)
};
/**
 * Story for the Button component with lime color.
 * Renders a primary button with lime color.
 */
export const Lime: Story = {
  args: {
    color: 'lime',
  },
  render: (args) => (<Button {...args}> Primary </Button>)
};
/**
 * Story for the Button component with blue color.
 * Renders a primary button with blue color.
 */
export const Blue: Story = {
  args: {
    color: 'blue',
  },
  render: (args) => (<Button {...args}> Primary </Button>)
};
/**
 * Story for the Button component with dark color.
 * Renders a primary button with dark color.
 */
export const Dark: Story = {
  args: {
    color: 'dark',
  },
  render: (args) => (<Button {...args}> Primary </Button>)
};
/**
 * Story for the Button component with purple color.
 * Renders a primary button with purple color.
 */
export const Purple: Story = {
  args: {
    color: 'purple',
  },
  render: (args) => (<Button {...args}> Primary </Button>)
};
/**
 * Story for the Button component with pink color.
 * Renders a primary button with pink color.
 */
export const Pink: Story = {
  args: {
    color: 'pink',
  },
  render: (args) => (<Button {...args}> Primary </Button>)
};
/**
 * Story for the Button component with zinc color.
 * Renders a primary button with zinc color.
 */
export const Zinc: Story = {
  args: {
    color: 'zinc',
  },
  render: (args) => (<Button {...args}> Primary </Button>)
};
/**
 * Story for the Button component with amber color.
 * Renders a primary button with amber color.
 */
export const Amber: Story = {
  args: {
    color: 'amber',
  },
  render: (args) => (<Button {...args}> Primary </Button>)
};
/**
 * Story for the Button component with yellow color.
 * Renders a primary button with yellow color.
 */
export const Yellow: Story = {
  args: {
    color: 'yellow',
  },
  render: (args) => (<Button {...args}> Primary </Button>)
};
/**
 * Story for the Button component with white color.
 * Renders a primary button with white color.
 */
export const White: Story = {
  args: {
    color: 'white',
  },
  render: (args) => (<Button {...args}> Primary </Button>)
};
/**
 * Story for the Button component with cyan color.
 * Renders a primary button with cyan color.
 */
export const Cyan: Story = {
  args: {
    color: 'cyan',
  },
  render: (args) => (<Button {...args}> Primary </Button>)
};
/**
 * Story for the Button component with violet color.
 * Renders a primary button with violet color.
 */
export const Violet: Story = {
  args: {
    color: 'violet',
  },
  render: (args) => (<Button {...args}> Primary </Button>)
};
/**
 * Story for the Button component with teal color.
 * Renders a primary button with teal color.
 */
export const Teal: Story = {
  args: {
    color: 'teal',
  },
  render: (args) => (<Button {...args}> Primary </Button>)
};
/**
 * Story for the Button component with rose color.
 * Renders a primary button with rose color.
 */
export const Rose: Story = {
  args: {
    color: 'rose',
  },
  render: (args) => (<Button {...args}> Primary </Button>)
};
/**
 * Story for the Button component with orange color.
 * Renders a primary button with orange color.
 */
export const Orange: Story = {
  args: {
    color: 'orange',
  },
  render: (args) => (<Button {...args}> Primary </Button>)
};
/**
 * Story for the Button component with indigo color.
 * Renders a primary button with indigo color.
 */
export const Indigo: Story = {
  args: {
    color: 'indigo',
  },
  render: (args) => (<Button {...args}> Primary </Button>)
};
/**
 * Story for the Button component with fuchsia color.
 * Renders a primary button with fuchsia color.
 */
export const Fuchsia: Story = {
  args: {
    color: 'fuchsia',
  },
  render: (args) => (<Button {...args}> Primary </Button>)
};
/**
 * Story for the Button component with emerald color.
 * Renders a primary button with emerald color.
 */
export const Emerald: Story = {
  args: {
    color: 'emerald',
  },
  render: (args) => (<Button {...args}> Primary </Button>)
};
/**
 * Story for the Button component with dark/white color.
 * Renders a primary button with dark/white color.
 */
export const DarkWhite: Story = {
  args: {
    color: 'dark/white',
  },
  render: (args) => (<Button {...args}> Primary </Button>)
};
/**
 * Story for the Button component with dark/zinc color.
 * Renders a primary button with dark/zinc color.
 */
export const DarkZinc: Story = {
  args: {
    color: 'dark/zinc',
  },
  render: (args) => (<Button {...args}> Primary </Button>)
};
/**
 * Story for the Button component with light color.
 * Renders a primary button with light color.
 */
export const Light: Story = {
  args: {
    color: 'light',
  },
  render: (args) => (<Button {...args}> Primary </Button>)
};