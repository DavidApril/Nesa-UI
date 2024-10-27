import {Meta, StoryObj} from "@storybook/react";
import {Alert, AlertActions, AlertDescription, AlertTitle, Button} from "../../components";


const meta = {
  title: 'UI/Alert',
  component: Alert,
  tags: ['autodocs'],
  args: {
    open: false,
  }
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  render: function AlertStory(args) {
    return <>
      <Alert open={args.open} onClose={() => {
      }}>
        <AlertTitle>Are you sure you want to refund this payment?</AlertTitle>
        <AlertDescription>
          The refund will be reflected in the customer’s bank account 2 to 3 business days after processing.
        </AlertDescription>
        <AlertActions>
          <Button plain onClick={() => {
          }}>Cancel</Button>
          <Button onClick={() => {
          }}>Refund</Button>
        </AlertActions>
      </Alert>
    </>
  }
}