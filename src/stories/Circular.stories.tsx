import React from "react";
import { Meta, Story } from "@storybook/react";
import Circular, { CircularProps } from "../components/shared/Circular";
import CustomText from "../components/shared/CustomText";

export default {
  title: "Components/Circular",
  component: Circular,
  argTypes: {
    color: { control: "color" },
    height: { control: "text" },
    width: { control: "text" },
  },
} as Meta;

const Template: Story<CircularProps> = (args) => <Circular {...args} />;

export const Default = Template.bind({});
Default.args = {
  height: "36px",
  width: "36px",
  color: "#3498db",
};

export const RedCircle = Template.bind({});
RedCircle.args = {
  height: "32px",
  width: "32px",
  color: "#e74c3c",
};

export const CustomSize = Template.bind({});
CustomSize.args = {
  height: "20px",
  width: "20px",
  color: "#2ecc71",
};

export const WithChildren = Template.bind({});
WithChildren.args = {
  height: "36px",
  width: "36px",
  color: "#f39c12",
  children: <CustomText>B</CustomText>
};

export const WithChildrenImage = Template.bind({});
WithChildrenImage.args = {
  height: "36px",
  width: "36px",
  color: "#f39c12",
  children: <img src="/images/arrowright.png" height="20px" width="20px" />
};
