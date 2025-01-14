import React from "react";
import styled, { css } from "styled-components";

const fontSizeMapping = {
  xs: "10px",
  sm: "12px",
  md: "14px",
  lg: "16px",
  xl: "32px",
} as const;

type FontSize = keyof typeof fontSizeMapping | string;

const Text = styled.span<{ fontSize?: FontSize; color?: string; fontWeight?: string }>`
  font-size: ${(props) => {
    if (
      props.fontSize &&
      typeof props.fontSize === "string" &&
      fontSizeMapping[props.fontSize as keyof typeof fontSizeMapping]
    ) {
      return fontSizeMapping[props.fontSize as keyof typeof fontSizeMapping];
    }
    return props.fontSize || fontSizeMapping.md;
  }};
  color: ${(props) => props.color || "#000"};
  font-weight: ${(props) => props.fontWeight || "400"};
`;

export interface TextProps {
  children: React.ReactNode;
  fontSize?: FontSize;
  fontWeight?: string;
  color?: string;
  dataTestId?: string;
}

const CustomText: React.FC<TextProps> = ({ children, fontSize, fontWeight, color, dataTestId = "text"}) => {
  return <Text fontSize={fontSize} color={color} fontWeight={fontWeight} role="heading" data-testid={dataTestId}>{children}</Text>;
};

export default CustomText;
