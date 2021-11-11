import React from "react";
import styled from "styled-components";
import Link from "next/link";

const ShopNowCard = ({ data, mb }) => {
  return (
    <Link href={"/category/" + data.id} passHref>
      <Wrapper mb={mb}>
        <ImgCont>
          <Img src={data.img[0]} />
        </ImgCont>
        <TextCont>
          <H2>Rs {data.price}</H2>
          <P>{data.name}</P>
          <ButtonDiv>
            <Button>Shop Now</Button>
          </ButtonDiv>
        </TextCont>
      </Wrapper>
    </Link>
  );
};

export default ShopNowCard;

const Wrapper = styled.a`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding-bottom: 20px;
  box-sizing: border-box;
  padding: 0px 8px;
  margin-bottom: ${(props) => props.mb};
  cursor: pointer;
  color: inherit;
  text-decoration: none;
  @media ${(props) => props.theme.tablet} {
    width: 33.33%;
    margin-bottom: 0px;
    padding: 0px 16px;
  }
`;
const ImgCont = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
const Img = styled.img`
  width: 100%;
  object-fit: cover;
  transition: transform 0.35s ease-in-out;
  &:hover {
    transform: scale(1.06);
  }
`;
const H2 = styled.h2`
  font-size: 22px;
  padding-bottom: 10px;
`;
const P = styled.p`
  font-size: 16px;
  font-weight: 400;
`;
const TextCont = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 20px 40px;
  background: ${(props) => props.theme.lightGrey};
`;
const ButtonDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 20px;
`;
const Button = styled.button`
  font-family: Helvetica;
  font-weight: bold;
  font-size: 14px;
  letter-spacing: 0.5px;
  padding: 12px 30px;
  font-weight: 400;
  background: ${(props) => props.theme.lightGrey};
  border: 1px black solid;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
