import React from "react";
import { Story, Meta } from "@storybook/react";
import Sidemenu, { SidemenuProps } from "../components/shared/Sidemenu";
import { menus } from "../fixtures/menu";

export default {
  title: "Components/Sidemenu",
  component: Sidemenu,
  argTypes: {
    title: { control: "text" },
    navLinks: {
      control: "object",
      description: "Navigation links (array of objects with label and href)"
    }
  }
} as Meta;

const activeLink = "/wallets";

const Template: Story<SidemenuProps> = (args) => <Sidemenu {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  links: menus
}

export const CustomActiveTab = Template.bind({});
CustomActiveTab.args = {
  links: menus,
  activeLink: activeLink
}