import React from "react";
import styled from "styled-components";

const Select = styled.select`
  padding: 8px;
  font-size: 16px;
  line-height: 16px;
  font-weight: 400;
  border: 1px solid #CBD2D9;
  cursor: pointer;
  border-radius: 5px;
  width: 100%;
  height: 56px;
`;

export interface SelectBoxProps {
  options: { label: string | number; value: string | number }[];
  color?: string;
  bgColor?: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
}

const SelectBox: React.FC<SelectBoxProps> = ({ options, onChange, value }) => {
  return (
    <Select onChange={onChange} value={value}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </Select>
  );
};

export default SelectBox;
