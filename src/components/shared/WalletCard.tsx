import React from "react";
import styled, { css } from "styled-components";

const CardContainer = styled.div<{ variant?: "primary" | "secondary", width: string; height: string; radius: string; bgColor?: string }>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding: 20px;
  border-radius: ${({ radius }) => radius};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

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
`;

export interface WalletCardProps {
  variant?: "primary" | "secondary";
  width?: string;
  height?: string;
  radius?: string;
  bgColor?: string;
  children?: React.ReactNode;
  onButtonClick: () => void;
}

const WalletCard: React.FC<WalletCardProps> = ({
  width = "240px",
  height = "150px",
  radius = "10px",
  variant = "primary",
  bgColor,
  children,
  onButtonClick,
}) => {
  return (
    <CardContainer variant={variant} width={width} height={height} radius={radius} bgColor={bgColor}>
      {children}
    </CardContainer>
  );
};

export default WalletCard;
