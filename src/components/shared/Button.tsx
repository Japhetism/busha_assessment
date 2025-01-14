import React from "react";
import styled, { css } from "styled-components";

const Button = styled.button<{ variant?: "primary" | "secondary" | "transparent"; color?: string; bgColor?: string }>`
  padding: 12px 30px;
  font-size: 18px;
  line-height: 18px;
  font-weight: 400;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  
  ${(props) =>
    props.variant === "secondary" &&
    css`
      color: ${props.color || "#000"};
      background-color: ${props.bgColor || "#FFF"};
    `}

  ${(props) =>
    props.variant === "primary" &&
    css`
      color: ${props.color || "#FFF"};
      background-color: ${props.bgColor || "#000"};
    `}
  
  ${(props) =>
    props.variant === "transparent" &&
    css`
      color: ${props.color || "#FFF"};
      background-color: ${props.bgColor || "transparent"};
    `}
`;

export interface ActionButtonProps {
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "transparent";
  color?: string;
  bgColor?: string;
  onClick: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({ children, variant = "primary", color, bgColor, onClick }) => {
  return (
    <Button onClick={onClick} variant={variant} color={color} bgColor={bgColor}>
      {children}
    </Button>
  );
};

export default ActionButton;
