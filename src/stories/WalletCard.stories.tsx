import React from "react";
import { Meta, Story } from "@storybook/react";
import WalletCard, { WalletCardProps } from "../components/shared/WalletCard";
import WalletContent from "../components/shared/WalletContent";

export default {
  title: "Components/WalletCard",
  component: WalletCard,
  argTypes: {
    onButtonClick: { action: "button-click" },
  },
} as Meta;

const Template: Story<WalletCardProps> = (args) => <WalletCard {...args} />;

export const PrimaryCard = Template.bind({});
PrimaryCard.args = {
  variant: "primary",
  width: "240px",
  height: "150px",
  radius: "10px",
  bgColor: "#000",
};

export const SecondaryCard = Template.bind({});
SecondaryCard.args = {
  variant: "secondary",
  width: "240px",
  height: "150px",
  radius: "10px",
  bgColor: "#FFF",
};

export const CustomCard = Template.bind({});
CustomCard.args = {
  variant: "primary",
  width: "240px",
  height: "150px",
  radius: "20px",
  children: <WalletContent value="1300000" type="Naira" typeIcon="/images/arrowright.png" />,
};
