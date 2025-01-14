import React from "react";
import { Story, Meta } from "@storybook/react";
import ActionButton, { ActionButtonProps } from "../components/shared/Button";
import CustomText from "../components/shared/CustomText";

export default {
  title: "Components/ActionButton",
  component: ActionButton,
  argTypes: {
    onClick: { action: "clicked" },
  },
} as Meta;

const Template: Story<ActionButtonProps> = (args) => <ActionButton {...args} />;

export const Primary = Template.bind({});

export const CustomPrimaryButtonText = Template.bind({});
CustomPrimaryButtonText.args = {
  children: <CustomText fontSize="18px" fontWeight="400" color="#FFF">Try again</CustomText>
}

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary"
}

export const CustomSecondaryButtonText = Template.bind({});
CustomSecondaryButtonText.args = {
  variant: "secondary",
  children: <CustomText fontSize="lg" fontWeight="500">+ Add new wallet</CustomText>
}