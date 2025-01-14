import React from "react";
import { Story, Meta } from "@storybook/react";
import Header, { HeaderProps } from "../components/shared/Header";

export default {
  title: "Components/Header",
  component: Header,
  argTypes: {
    navLinks: {
      control: "array",
    },
    username: {
      control: "text",
    },
    height: {
      control: "text",
    },
  },
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const Primary = Template.bind({});

export const CustomUsername = Template.bind({});
CustomUsername.args = {
  username: "Oluwatobi Akindunjoye"
};

export const CustomWidth = Template.bind({});
CustomWidth.args = {
  height: "100px"
};

export const CustomNavLinks = Template.bind({});
CustomNavLinks.args = {
  navLinks: [
    { label: "Home Page", href: "/" },
    { label: "Services & Pricing", href: "/services-pricing" },
    { label: "Contact Us Now", href: "/contact" },
    { label: "About Our Company", href: "/about" },
  ],
};
