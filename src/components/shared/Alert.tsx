import React from "react";
import styled, { css } from "styled-components";
import CustomText from "./CustomText";
import ActionButton from "./Button";

const AlertContainer = styled.div<{ variant: "success" | "error"; color?: string; bgColor?: string }>`
  padding: 1px 20px;
  font-size: 18px;
  line-height: 18px;
  font-weight: 400;
  border-radius: 10px;
  cursor: pointer;

  display: flex;
  justify-content: space-between;
  align-items: center;
  
  ${(props) =>
    props.variant === "success" &&
    css`
      color: ${props.color || "#28A745"};
      border: 1px solid #A5D6A7;
      background-color: ${props.bgColor || "#E8F5E9"};
    `}

  ${(props) =>
    props.variant === "error" &&
    css`
      color: ${props.color || "#D72C0D"};
      border: 1px solid #E0B3B2;
      background-color: ${props.bgColor || "#FFF4F4"};
    `}
`;

export interface AlertProps {
  message: string;
  variant: "success" | "error";
  color?: string;
  bgColor?: string;
  onClick: () => void;
}

const Alert: React.FC<AlertProps> = ({ message, variant, color, bgColor, onClick }) => {
  const textColor = variant === "error" ? "#D72C0D" : "#28A745";
  return (
    <AlertContainer onClick={onClick} variant={variant} color={color} bgColor={bgColor}>
      <CustomText color={textColor} fontSize="lg" fontWeight="500">{message}</CustomText>
      <ActionButton variant="transparent" onClick={onClick}>
        <CustomText color={textColor} fontSize="lg" fontWeight="500">x</CustomText>
      </ActionButton>
    </AlertContainer>
  );
};

export default Alert;
