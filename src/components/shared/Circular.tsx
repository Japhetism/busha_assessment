import React from "react";
import styled from "styled-components";

const Circle = styled.div<{ bgColor?: string, height: string, width: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  background-color: ${({ bgColor }) => bgColor || "#000"};
  border-radius: 50%;
`;

export interface CircularProps {
  height: string;
  width: string;
  color?: string;
  children?: React.ReactNode;
}

const Circular: React.FC<CircularProps> = ({ color = "#000", width, height, children }) => (
  <Circle bgColor={color} width={width} height={height}>
    {children}
  </Circle>
);

export default Circular;
