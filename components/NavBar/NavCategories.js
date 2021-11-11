import React, { useState, useEffect } from "react";
import Styled from "styled-components";

export default function NavCategories(props) {
  let categories = [
    { name: "Furniture" },
    { name: "Rugs" },
    { name: "Decor" },
    { name: "Bed & Bath" },
    { name: "Home Improvement" },
    { name: "Kitchen" },
    { name: "Outdoor" },
    { name: "Jewelry" },
    { name: "Apparel" },
    { name: "Kids & Baby" },
  ];
  return (
    <Wrapper>
      <Container>
        {categories.map((item) => (
          <NavItem key={item.name}>{item.name}</NavItem>
        ))}
      </Container>
    </Wrapper>
  );
}
const Wrapper = Styled.div`
 width: 100vw;
    /* display: none; */
    position: absolute;
    top: 100%;
    justify-content: center;
    background-color:white;
    /* background: green; */
    box-sizing: border-box;
    height: 34px;
    padding-bottom: 0;
    border-top: 1px solid #dadcdf;
    border-bottom: 1px solid #dadcdf;
    display: none;
    /* margin-top: 10px; */
    @media ${(props) => props.theme.tabletL} {
        display: flex;
}
`;

const Container = Styled.div`
 width:100%;
    margin-left: 20px;
    margin-right: 20px;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    max-width: 1680px;
`;

const NavItem = Styled.a`
    display: flex;
    align-items: center;
    padding: 8px 5px;
    color: #2f3337;
    border-bottom: 2px solid transparent;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    :hover {
        border-bottom: 2px solid #2f3337;
    /* padding: 9px 5px 8px; */
    /* width: 100%; */
    height: auto;
    }
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
    background-color: transparent;
    height: 100%;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 0 4px 4px 0;
    transform: translateX(-1px);
    color: black;
    font-size: 30px;
    position: absolute;
    right: 0;
    @media ${(props) => props.theme.mobileL} {
        background-color: #ff1f2c;
        color: white;

}
    /* outline: 2px solid black; */
`;
