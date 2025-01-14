import { Story, Meta } from "@storybook/react";
import Alert, { AlertProps } from "../components/shared/Alert";

export default {
  title: "Components/Alert",
  component: Alert,
  argTypes: {
    onClick: { action: "clicked" },
  },
} as Meta;

const Template: Story<AlertProps> = (args) => <Alert {...args} />;

export const Error = Template.bind({});
Error.args = {
  variant: "error",
  message: "Network error",
  onClick: () => alert("Network error"),
};

export const Success = Template.bind({});
Success.args = {
  variant: "success",
  message: "Created successfully",
  onClick: () => alert("success"),
};