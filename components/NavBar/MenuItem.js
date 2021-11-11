import React, { useState, useEffect } from "react";
import Styled from "styled-components";
import { RiArrowRightSLine } from "react-icons/ri";

export default function MenuItem(props) {
  return (
    <Wrapper href={props.href}>
      <Title>{props.name}</Title>
      <Icon>
        <RiArrowRightSLine />
      </Icon>
    </Wrapper>
  );
}
const Wrapper = Styled.a`
  width: 100%;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #dadcdf;
    background-color: #f9fafb;
    font-weight: 500;
    font-size: 25px;
    color: #2f3337;
    height: 50px;
    align-items: center;
    display: flex;
    text-decoration: unset;
`;

const Title = Styled.h4`
display: flex;
align-items: center;
font-size: 15px;
padding-left: 25px;
`;

const Icon = Styled.div`
padding-right: 20px;
`;

const Logo = Styled.img`
width: 25px;
`;

const MenuContainer = Styled.div`
  height: 100%;
  width: ${(props) => (props.open ? "300px" : "0px")};
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  background-color: white;
  overflow-x: hidden;
  transition: 0.5s;
  /* padding-top: 60px; */

`;

const Close = Styled.a`

`;

const Overlay = Styled.div`
width: 100%;
height: 100vh;
position: absolute;
z-index:2;
background-color: rgba(0, 0, 0, 0.3);
display: ${(props) => (props.open ? "flex" : "none")};
`;

const Search = Styled.input`
    border: 1px solid #dadcdf;
    border-radius: 4px 0 0 4px;
    background-color: #f9fafb;
    padding: 0 10px;
    font-size: 16px;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
`;

const Button = Styled.button`
    background-color: #ff1f2c;
    height: 100%;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 0 4px 4px 0;
    transform: translateX(-1px);
    color: white;
    font-size: 30px;
    /* outline: 2px solid black; */
`;

const TitleRow = Styled.div`
    width: 100%;
    justify-content: flex-start;
    align-items: center;
    padding-left: 25px;
    border-bottom: 1px solid #dadcdf;
    font-weight: 500;
    font-size: 18px;
    color: #2f3337;
    background-color: #fff;
    height: 60px;
    align-items: center;
    display: flex;
`;
