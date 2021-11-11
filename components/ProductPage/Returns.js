import React from "react";
import styled from "styled-components";

export default function Overview() {
  return (
    <Wrapper>
      <Container>
        <Title>Returns</Title>
        <InfoContainer>
          <Column>
            <Policy>
              <Image src="https://i.ibb.co/MSLcCYK/75c1915a3fb3ad15c654f51be00fbf56.png" />
              <Info>
                <Policy__Title>30 Days to Initiate a Return</Policy__Title>
                <Details>
                  You can initiate a return for most new and unused items within
                  30 days of delivery for a refund
                </Details>
              </Info>
            </Policy>
            <Policy>
              <Image src="https://i.ibb.co/c6TTJVg/1f95892e0b12fe1b4c1756cf80799cc2.png" />
              <Info>
                <Policy__Title>Most New and Unused</Policy__Title>
                <Details>
                  You must return items in new or unused condition with all
                  original materials included with the shipment.
                </Details>
              </Info>
            </Policy>
            <Policy>
              <Image src="https://i.ibb.co/ckDtzQc/d787daf48848799d6032817ba8ce4a89.png" />
              <Info>
                <Policy__Title>45 Days to Receive Returned Items</Policy__Title>
                <Details>
                  We must receive your returned items at our processing facility
                  within 45 days of delivery
                </Details>
              </Info>
            </Policy>
          </Column>
          <Column>
            <Policy>
              <Image src="https://i.ibb.co/pW0pG0n/270af23b5f9913a35013f1d5f380e789.png" />
              <Info>
                <Policy__Title>Errors and Defects</Policy__Title>
                <Details>
                  If the return is a result of our error or defective product,
                  we will refund the full cost of the merchandise and shipping
                  charges.
                </Details>
              </Info>
            </Policy>
            <Policy>
              <Image src="https://i.ibb.co/tscmPCs/cfad5281d0b75c459b5e092524071842.png" />
              <Info>
                <Policy__Title>Partial Refunds</Policy__Title>
                <Details>
                  We inspect all returned items and award a partial refund for
                  opened or used products.
                </Details>
              </Info>
            </Policy>
            <Policy>
              <Image src="https://i.ibb.co/c6TTJVg/1f95892e0b12fe1b4c1756cf80799cc2.png" />
              <Info>
                <Policy__Title>Non-Returnable Items</Policy__Title>
                <Details>
                  In accordance with federal and state guidelines and for the
                  safety of our consumers, suppliers and carriers, some products
                  are non-returnable and non-refundable.
                </Details>
              </Info>
            </Policy>
          </Column>
        </InfoContainer>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0px;
`;

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.div`
  align-items: center;
  border-top: 1px solid #dadcdf;
  color: #2f3337;
  font-size: 20px;
  font-weight: 700;
  display: flex;
  height: 65px;
  justify-content: space-between;
  margin-bottom: 15px;
  text-align: left;
  width: 100%;
`;

const InfoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Column = styled.div`
  width: 47%;
  height: 100%;
  display: flex;
  flex-direction: column;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

const Policy = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  height: 100px;
`;

const Image = styled.img`
  height: 60px;
  width: 60px;
  margin-right: 15px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const Policy__Title = styled.h2`
  color: #2f3337;
  display: inline-block;
  font-weight: 400;
  line-height: 22px;
  font-size: 16px;
  margin: 0;
`;

const Details = styled.p`
  color: #626669;
  font-size: 14px;
  line-height: 22px;
  margin: 0;
`;
