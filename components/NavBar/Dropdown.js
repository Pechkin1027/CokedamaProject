import React, { useState, useEffect } from "react";
import styled from "styled-components";
import DropdownItem from "./DropdownItem";

export default function Dropdown(props) {
  return (
    <Wrapper
      hasData={
        props.data != null &&
        props.data != [] &&
        props.data != undefined &&
        props.data?.length != 0
      }
      open={props.focused}
    >
      {props.data.map((item, index) => {
        let max = 11;
        if (index > max) return null;
        return <DropdownItem key={item.id} data={item} />;
      })}
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 60%;
  position: absolute;
  top: 110%;
  left: 0;
  background-color: white;
  border: 1px solid #dadcdf;
  display: ${(props) => (props.open && props.hasData ? "flex" : "none")};
  flex-direction: column;
`;

const Icon = styled.div`
  position: absolute;
  top: -3.5%;
  left: 0;
  right: 0;
  color: #dadcdf;
  display: flex;
  justify-content: center;
`;

const Search = styled.input`
  border: 1px solid #dadcdf;
  border-radius: 4px 0 0 4px;
  background-color: #f9fafb;
  padding: 0 10px;
  font-size: 16px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

const Button = styled.button`
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
