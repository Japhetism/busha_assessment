import React from "react";
import { Meta, Story } from "@storybook/react";
import WalletContent, { WalletContentProps } from "../components/shared/WalletContent";

export default {
  title: "Components/WalletContent",
  component: WalletContent,
} as Meta;

const Template: Story<WalletContentProps> = (args) => <WalletContent {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: "1000",
  type: "Savings",
  typeIcon: "https://example.com/icon-savings.png",
};

export const Investment = Template.bind({});
Investment.args = {
  value: "5000",
  type: "Investment",
  typeIcon: "https://example.com/icon-investment.png",
};

export const Expenses = Template.bind({});
Expenses.args = {
  value: "150",
  type: "Expenses",
  typeIcon: "https://example.com/icon-expenses.png",
};
