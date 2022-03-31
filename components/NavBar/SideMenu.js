import React, { useState, useEffect } from "react";
import Styled from "styled-components";
import MenuItem from "./MenuItem";

export default function SideMenu(props) {
  return (
    <Wrapper open={props.isOpen}>
      <MenuContainer open={props.isOpen}>
        <LogoRow onClick={() => props.onClose()}>
          <Logo src="/ShopflowWhite.svg" />
        </LogoRow>
        <TitleRow>Categories</TitleRow>
         <MenuItem name="All Items" href="/category?type=AllItems" />
        <MenuItem name="Decayed Wood Plant Arrangements" href="/category?type=DecayedWoodPlantArrangements" />
        <MenuItem name="Decorative Planters" href="/category?type=DecorativePlanters" />
        <MenuItem name="Decorative Pots" href="/category?type=DecorativePots" />
        <MenuItem name="Kokedama Plants" href="/category?type=KokedamaPlants" />
        <MenuItem name="Kokedama String Gardens" href="/category?type=KokedamaStringGardens" />
        <MenuItem name="Plant Art" href="/category?type=PlantArt" />
        <MenuItem name="Plant Themed Home Decor" href="/category?type=PlantThemedHomeDecor" />
        <MenuItem name="Plant Themed Photo Frames" href="/category?type=PlantThemedPhotoFrames" />
        <MenuItem name="Terrariums" href="/category?type=Terrariums" />
      </MenuContainer>
      <Overlay open={props.isOpen} onClick={() => props.onClose()} />
      {props.isOpen && (
        <style global jsx>{`
          body {
            overflow: hidden;
          }
        `}</style>
      )}
    </Wrapper>
  );
}
const Wrapper = Styled.div`
  height: 100%;
  width: ${(props) => (props.open ? "100%" : "0px")};
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  /* background-color: white; */
  overflow-x: hidden;
  transition: 0.2s;
  padding-top: 100px;

`;

const LogoRow = Styled.div`
width: 100%;
background-color: #7a7a09;
height: 45px;
display: flex;
align-items: center;
padding-left: 15px;
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
  transition: 0.2s;
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
transition: 0s;
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
    background-color: #7a7a09;
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
