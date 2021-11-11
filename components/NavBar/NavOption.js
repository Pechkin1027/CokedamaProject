import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { VscBell } from "react-icons/vsc";
import Cart from "../../public/Cart_Icon.svg";
import { BsPerson } from "react-icons/bs";
import Link from "next/link";
import Dropdown from "./Dropdown";

export default function NavOption({ type, isTablet, isMobile, url }) {
  const [cartItems, setCartItems] = useState(0);
  useEffect(() => {
    let localCart = JSON.parse(localStorage.getItem("Cart")) || [];
    setCartItems(localCart.length);
  }, []);
  return (
    <Container
      href={url}
      type={type}
      hide={isTablet && (type === "account" || type === "Try")}
    >
      {type === "cart" ? (
        <>
          <Cart /> <CartNumber>{cartItems}</CartNumber>
        </>
      ) : type === "account" ? (
        <BsPerson />
      ) : type === "bell" ? (
        <VscBell />
      ) : (
        <BsPerson />
      )}
      <Title
        type={type}
        hide={isMobile && (type === "cart" || type === "bell")}
      >
        {type === "cart"
          ? "Cart"
          : type === "account"
          ? "Account"
          : type === "bell"
          ? "Notifications"
          : "Club O"}
      </Title>
      <Connect></Connect>
      {!(type === "cart") ? (
        <DropDownDiv>
          {type === "bell" ? (
            <Img2 src={"/Alarm.svg"} />
          ) : type === "cart" ? null : (
            <Img src="https://i.gyazo.com/78b390481bf698b8bc7e7a401caec3f8.png" />
          )}
          {type === "bell" ? (
            <>
              <HoverTitle>No New Notifications</HoverTitle>
              <Text>
                Check back daily for new notifications, coupons, and more!
              </Text>
            </>
          ) : type === "cart" ? null : (
            <>
              <HoverTitle>5% Rewards on Every Purchase</HoverTitle>
              <Link href="/category" passHref>
                <Button>See All Sales</Button>
              </Link>
            </>
          )}
        </DropDownDiv>
      ) : null}
    </Container>
  );
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Connect = styled.div`
  height: 25px;
  width: 25px;
  top: 33px;
  position: absolute;
`;
const DropDownDiv = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: white;
  position: absolute;
  top: 55px;
  height: 245px;
  width: 180px;
  border: 1px solid #dadcdf;
`;
const Img = styled.img`
  width: 125px;
  z-index: 1;
  margin-bottom: 10px;
`;
const Img2 = styled.img`
  width: 100px;
  z-index: 1;
`;
const HoverTitle = styled.h3`
  font-size: 14px;
  line-height: 20px;
  color: #545658;
  font-weight: 600;
  z-index: 1;
  text-align: center;
`;
const Text = styled.h3`
  font-size: 12px;
  line-height: 20px;
  color: #545658;
  font-weight: 500;
  z-index: 1;
  text-align: center;
  width: 80%;
`;
const Button = styled.button`
  font-size: 12px;
  text-align: center;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  margin-top: 5px;
  display: inline-flex;
  align-items: center;
  background-color: #2f3337;
  color: #fff;
`;
const Container = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  align-items: center;
  margin: 0 12px;
  cursor: pointer;
  height: 34px;
  font-size: 25px;
  /* display: ${(props) => (props.hide ? "none" : "flex")}; */
  display: ${(props) =>
    props.type === "account" || props.type === "Try" ? "none" : "flex"};
  text-decoration: none;
  color: inherit;
  @media ${(props) => props.theme.tabletL} {
    display: flex;
    font-size: 40px;
    justify-content: space-between;
  }
  &:hover {
    ${DropDownDiv} {
      display: flex;
    }
  }
`;

const Title = styled.div`
  font-size: 12px;
  height: 10px;
  color: #2f3337;
  display: inline-block;
  box-sizing: border-box;
  text-align: center;
  /* display: ${(props) => (props.hide ? "none" : "flex")}; */
  display: ${(props) =>
    props.type === "cart" || props.type === "bell" ? "none" : "flex"};
  @media ${(props) => props.theme.mobileXL} {
    display: flex;
  }
`;

const CartIcon = styled.div`
  position: relative;
  /* height: 100%; */
  width: 100%;
  font-size: 25px;
  height: 34px;
`;

const CartNumber = styled.p`
  position: absolute;
  font-size: 12px;
  color: #c7202c;
  font-weight: 600;
  top: 32%;
  left: 58%;
  transform: translate(-50%, -50%);
  @media ${(props) => props.theme.mobileXL} {
    top: 21%;
    left: 56%;
  }
`;
