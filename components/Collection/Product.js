import React from "react";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";
import { FaShippingFast } from "react-icons/fa";

export default function Product({ data }) {
  return (
    <Wrapper href={"/category/" + data.id}>
      <Image src={data?.img[0]} />
      <Container>
        <InnerContainer>
          <Tag>Featured</Tag>
          <Title>{data.name}</Title>
          <Price>Rs {data.price}</Price>
          <Ratings>
            <AiFillStar color={data.rating > 0 ? "#f39019" : "#bfbfbf"} />
            <AiFillStar color={data.rating > 1 ? "#f39019" : "#bfbfbf"} />
            <AiFillStar color={data.rating > 2 ? "#f39019" : "#bfbfbf"} />
            <AiFillStar color={data.rating > 3 ? "#f39019" : "#bfbfbf"} />
            <AiFillStar color={data.rating > 4 ? "#f39019" : "#bfbfbf"} />
          </Ratings>
          <Shipping>
            <FaShippingFast />
            <ShipText>Free Shipping</ShipText>
          </Shipping>
        </InnerContainer>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #dedede;
  height: 400px;
  width: 320px;
  flex-direction: column;
  background-color: white;
  margin-bottom: 20px;
  text-decoration: unset;
  @media ${(props) => props.theme.mobileXL} {
    width: 48%;
  }
  @media ${(props) => props.theme.laptop} {
    width: 31%;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 240px;
  overflow: hidden;
  object-fit: cover;
`;

const Container = styled.div`
  min-height: 85px;
  width: 100%;
  background-color: #fff;
`;

const InnerContainer = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  background-color: #fff;
  flex-direction: column;
  display: flex;
`;

const Tag = styled.span`
  color: #626669;
  display: inline-block;
  font-weight: 700;
  margin-top: 10px;
`;

const Price = styled.span`
  color: #2f3337;
  font-size: 16px;
  font-weight: 700;
  margin-top: 16px;
`;

const Ratings = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2px;
  align-items: center;
`;

const Reviews = styled.span`
  width: 20px;
  font-size: 12px;
  margin-left: 5px;
  color: black;
`;

const Title = styled.h2`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #545658;
  padding: 4px 0;
  line-height: 20px;
  font-size: 16px;
  max-width: 200px;
  @media ${(props) => props.theme.tablet} {
    max-width: 100%;
  }
`;

const Shipping = styled.div`
  color: #2f3337;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  min-height: 24px;
  padding: 4px 0;
  margin-right: auto;
  font-size: 14px;
`;

const ShipText = styled.span`
  margin-left: 8px;
  font-size: 12px;
`;
