import React from "react";
import styled from "styled-components";
import CustomText from "./CustomText";
import ActionButton from "./Button";

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const ErrorImageWrapper = styled.div`
  margin-bottom: 20px;
  img {
    width: 100px;
    height: 100px;
    object-fit: contain;
  }
`;

const ActionButtonWrapper = styled.div`
  margin-top: 20px;
`;

export interface ErrorScreenProps {
  imageSrc?: string;
  message: string;
  onRetry: () => void;
}

const Error: React.FC<ErrorScreenProps> = ({ imageSrc = "/images/exclamation.png", message = "Network Error", onRetry }) => {
  return (
    <ErrorContainer>
      <ErrorImageWrapper>
        <img src={imageSrc} alt="Error Icon" />
      </ErrorImageWrapper>
      <CustomText fontSize="18px" fontWeight="400" color="#3E4C59">{message}</CustomText>
      <ActionButtonWrapper>
        <ActionButton onClick={onRetry}>
          <CustomText fontSize="18px" fontWeight="400" color="#FFF">Try again</CustomText>
        </ActionButton>
      </ActionButtonWrapper>
    </ErrorContainer>
  );
};

export default Error;
