import React from "react";
import styled from "styled-components";
import { BsLock } from "react-icons/bs";
import Link from "next/link";

export default function CheckoutNav() {
  return (
    <Wrapper>
      <Link href="/" passHref>
        <LogoTag>
          <SmallLogo src={"/ShopflowSmall.svg"} />
          <Logo src={"/ShopflowLogo.svg"} />
        </LogoTag>
      </Link>
      <Checkout>
        <Icon>
          <BsLock />
        </Icon>
        <Text>Checkout</Text>
      </Checkout>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #dadcdf;
  @media ${(props) => props.theme.laptop} {
    width: 1000px;
  }
  @media ${(props) => props.theme.laptopL} {
    width: 1220px;
  }
`;

const Checkout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 20px;
  @media ${(props) => props.theme.tablet} {
    padding-right: 0px;
  }
`;

const Icon = styled.div`
  font-size: 20px;
  display: flex;
  align-items: center;
`;

const Text = styled.div`
  font-size: 22px;
  font-weight: 700;
  display: flex;
  align-items: center;
  padding-left: 10px;
  padding-top: 2px;
`;
const LogoTag = styled.a`
  padding-left: 20px;
  @media ${(props) => props.theme.tablet} {
    padding-left: 0px;
  }
`;

const Logo = styled.img`
  width: 170px;
  color: red;
  display: none;
  @media ${(props) => props.theme.tabletL} {
    display: flex;
    font-size: 40px;
    justify-content: space-between;
  }
`;

const SmallLogo = styled.img`
  width: 35px;
  color: red;
  display: flex;
  @media ${(props) => props.theme.tabletL} {
    display: flex;
    font-size: 40px;
    justify-content: space-between;
    display: none;
  }
`;
