import React from "react";
import styled from "styled-components";
import Link from "next/link";

export default function JumboSaleDisplay({ First, img, url, title, text }) {
  return (
    <Link href={url} passHref>
      <Wrapper First={First}>
        <SaleImg src={img} />
        <Div First={First}>
          <RedTitle>{title}</RedTitle>
          <Text>{text}</Text>
          <ButtonDiv>
            <Button>Shop Now</Button>
          </ButtonDiv>
        </Div>
      </Wrapper>
    </Link>
  );
}

const Wrapper = styled.a`
  width: 100%;
  height: 35vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${(props) => (props.First ? "125px" : "0px")};
  margin-bottom: 50px;
  max-height: 500px;
  position: relative;
  @media ${(props) => props.theme.tablet} {
    height: 75vh;
  }
`;

const SaleImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
`;
const Div = styled.div`
  display: ${(props) => (!props.First ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: 0px;
`;

const RedTitle = styled.h1`
  font-family: Helvetica;
  font-weight: 800;
  font-size: 14px;
  color: #ff1f2c;
  width: 100%;
  text-align: left;
  padding-bottom: 5px;
  padding-top: 5px;
  @media ${(props) => props.theme.tablet} {
    font-size: 20px;
    padding-top: 10px;
  }
`;

const Text = styled.h1`
  font-family: Helvetica;
  font-weight: bold;
  font-size: 20px;
  letter-spacing: 0.5px;
  color: #252525;
  width: 100%;
  text-align: left;
  padding-bottom: 5px;
  @media ${(props) => props.theme.tablet} {
    font-size: 30px;
    padding-bottom: 10px;
  }
`;

const ButtonDiv = styled.div`
  width: 100%;
  text-align: left;
`;

const Button = styled.button`
  font-family: Helvetica;
  font-weight: bold;
  font-size: 10px;
  letter-spacing: 0.5px;
  padding: 8px 30px;
  background: #343434;
  color: white;
  border: none;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${(props) => props.theme.tablet} {
    padding: 12px 40px;
    font-size: 12px;
  }
`;
