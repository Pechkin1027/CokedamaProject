import React from "react";
import styled from "styled-components";

export default function Overview({ data }) {
  return (
    <Wrapper>
      <Container>
        <Title>Product Overview</Title>
        <InfoContainer>
          <Column>
            <Description__Title>Description</Description__Title>
            <Description>
              <MiniText>{data.description}</MiniText>
            </Description>
          </Column>
          <Column>
            <Specifications__Title>Specifications</Specifications__Title>
            <Specifications>
              <Row>
                <Property>
                  <Text>Item #</Text>
                </Property>
                <Value>
                  <Text>{"000000" + data.id}</Text>
                </Value>
              </Row>
              <Row>
                <Property>
                  <Text>Season or Holiday</Text>
                </Property>
                <Value>
                  <Text>All Season</Text>
                </Value>
              </Row>
              <Row>
                <Property>
                  <Text>Lifestage</Text>
                </Property>
                <Value>
                  <Text>Adult,Teen + Dorm</Text>
                </Value>
              </Row>
              <Row>
                <Property>
                  <Text>Style</Text>
                </Property>
                <Value>
                  <Text>Modern &#38; Contemporary</Text>
                </Value>
              </Row>
              <Row>
                <Property>
                  <Text>Product Features</Text>
                </Property>
                <Value>
                  <Text>Hypoallergenic</Text>
                </Value>
              </Row>
            </Specifications>
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
  margin-top: 50px;
  @media ${(props) => props.theme.tablet} {
    margin-top: 100px;
  }
  @media ${(props) => props.theme.laptop} {
    margin-top: 150px;
  }
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
  @media (max-width: 800px) {
    width: 100%;
  }
`;

const Description__Title = styled.div`
  color: #2f3337;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const Description = styled.div``;

const MiniTitle = styled.h3`
  color: #545658;
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 10px;
`;

const MiniText = styled.p`
  line-height: 20px;
  color: #545658;
  font-size: 14px;
  width: 90%;
  margin-bottom: 15px;
`;

const UList = styled.ul`
  margin-left: 20px;
`;

const UItem = styled.li`
  line-height: 20px;
  color: #545658;
  font-size: 14px;
`;

const Specifications__Title = styled.div`
  color: #2f3337;
  font-size: 16px;
  font-weight: 700;
  padding-bottom: 15px;
`;

const Specifications = styled.div`
  width: 100%;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Property = styled.div`
  width: 150px;
  border: 1px solid #dadcdf;
  background-color: #f9fafb;
  color: #545658;
  line-height: 21px;
  font-size: 12px;
`;

const Value = styled.div`
  width: 350px;
  border: 1px solid #dadcdf;
  color: #545658;
  line-height: 21px;
  font-size: 12px;
`;

const Text = styled.p`
  padding: 5px 10px;
  margin: 0;
`;
