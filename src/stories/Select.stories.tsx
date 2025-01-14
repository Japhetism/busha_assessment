import React, { useState } from "react";
import { Meta, Story } from "@storybook/react";
import SelectBox, { SelectBoxProps } from "../components/shared/Select";

export default {
  title: "Components/SelectBox",
  component: SelectBox,
  argTypes: {
    options: { control: "array" },
    onChange: { action: "changed" },
    value: { control: "text" },
  },
} as Meta;

const Template: Story<SelectBoxProps> = (args) => {
  const [selectedValue, setSelectedValue] = useState<string>(args.value);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(e.target.value);
  };

  return (
    <SelectBox
      {...args}
      value={selectedValue}
      onChange={handleChange}
    />
  );
};

export const Primary = Template.bind({});
Primary.args = {
  options: [
    { label: "Option 1", value: "option 1" }, 
    { label: "Option 2", value: "option 2" },
    { label: "Option 3", value: "option 3" }
  ],
  value: "Option 1",
};

export const WithLongOptions = Template.bind({});
WithLongOptions.args = {
  options: [
    { label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", value: 1 },
    { label: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", value: 2 },
    { label: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", value: 3 }
  ],
  value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
};

