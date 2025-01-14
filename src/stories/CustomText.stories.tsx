import React from "react";
import { Meta, Story } from "@storybook/react";
import CustomText, { TextProps } from "../components/shared/CustomText";

export default {
  title: "Components/CustomText",
  component: CustomText,
  argTypes: {
    fontSize: {
      control: {
        type: "select",
        options: ["xs", "sm", "md", "lg", "xl", "20px", "30px", "40px"],
      },
      description: "Font size for the text",
    },
  },
} as Meta;

const Template: Story<TextProps> = (args) => <CustomText {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "This is default text with medium font size.",
};

export const ExtraLarge = Template.bind({});
ExtraLarge.args = {
  children: "This is extra large text!",
  fontSize: "xl",
};

export const CustomSize = Template.bind({});
CustomSize.args = {
  children: "This is a custom size of 30px!",
  fontSize: "30px",
};

export const SmallText = Template.bind({});
SmallText.args = {
  children: "This is small text.",
  fontSize: "sm",
};

export const LargeText = Template.bind({});
LargeText.args = {
  children: "This is large text.",
  fontSize: "lg",
};

export const LargeTextWithCustomColor = Template.bind({});
LargeTextWithCustomColor.args = {
  children: "This is large text.",
  fontSize: "lg",
  color: "#9AA5B1"
};
