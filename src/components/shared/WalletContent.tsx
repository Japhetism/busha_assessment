import React from "react";
import styled from "styled-components";
import CustomText from "./CustomText";
import Circular from "./Circular";

const CardContent = styled.div``;

const CardType = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 5px;
  margin-bottom: 20px;
`;

const CardValue = styled.div`
  margin-top: 5px;
  margin-bottom: 40px;
`;

const CardAction = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export interface WalletContentProps {
  index?: string;
  currency?: string;
  value: string;
  type: string;
  typeIcon: string;
  typeColor?: string;
}

const WalletContent: React.FC<WalletContentProps> = ({
  index = "1",
  currency = "NGN",
  value,
  type,
  typeIcon,
  typeColor = "#05A357",
}) => {
  return <CardContent data-testid={`account-${index}`}>
    <CardType>
      <Circular height="34px" width="34px" color={typeColor}>
        <img src={typeIcon} alt={type || ""} height="18px" width="18px" />
      </Circular>
      <CustomText fontSize="md" color="#9AA5B1">{type}</CustomText>
    </CardType>
    <CardValue>
      {currency === "NGN" && (<CustomText color='#FFF' fontSize='lg'>₦</CustomText>)}{' '}
      <CustomText color='#FFF' fontSize='lg' dataTestId={currency}>{value}</CustomText>{' '}
      {currency !== "NGN" && (<CustomText color='#FFF' fontSize='lg'>{currency}</CustomText>)}
      {/* <CustomText color='#FFF' fontSize='lg'>{value}</CustomText> */}
    </CardValue>
    <CardAction>
      <Circular height="30px" width="30px" color="#303030">
        <img src="/images/arrowright.png" alt="arrow" height="20px" width="20px" />
      </Circular>
    </CardAction>
  </CardContent>
}

export default WalletContent;