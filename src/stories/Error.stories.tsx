import React from "react";
import { Meta, Story } from "@storybook/react";
import Error, { ErrorScreenProps } from "../components/shared/Error";

export default {
  title: "Components/Error",
  component: Error,
  argTypes: {
    message: { control: "text" },
    imageSrc: { control: "text" },
    onRetry: { action: "retried" },
  },
} as Meta;

const Template: Story<ErrorScreenProps> = (args) => <Error {...args} />;

export const DefaultError = Template.bind({});
DefaultError.args = {
  message: "Something went wrong, please try again.",
};

export const CustomErrorMessage = Template.bind({});
CustomErrorMessage.args = {
  message: "Oops, something unexpected happened. Please try again later.",
  imageSrc: "/images/sad-face.png",
};

export const ErrorWithoutImage = Template.bind({});
ErrorWithoutImage.args = {
  message: "An error occurred.",
  imageSrc: "",
};

export const ErrorWithCustomButton = Template.bind({});
ErrorWithCustomButton.args = {
  message: "Something went wrong! Please retry.",
  imageSrc: "/images/exclamation.png",
};

ErrorWithCustomButton.parameters = {
  actions: { 
    handles: ["click .action-button"]
  }
};

export const LoadingErrorState = Template.bind({});
LoadingErrorState.args = {
  message: "We're experiencing some issues. Please wait.",
  imageSrc: "/images/logo.png",
};
