import React, { useState } from "react";
import styled from "styled-components";
import { RiArrowDownSFill } from "react-icons/ri";
export default function PriceItem(props) {
  return (
    <Title
      current={props.priceFilter === props.name}
      onClick={() => props.setPriceFilter(props.name)}
    >
      {props.name}
    </Title>
  );
}

const Title = styled.a`
  border-radius: 2px;
  display: -webkit-flex;
  display: flex;
  color: #545658;
  -webkit-align-items: center;
  align-items: center;
  font-size: 14px;
  padding: 10px 4px;
  position: relative;
  text-decoration: ${(props) => (props.current ? "underline" : "none")};
  width: 100%;
  cursor: ${(props) => (props.current ? "unset" : "pointer")};
  pointer-events: ${(props) => (props.current ? "none" : "all")};
  :hover {
    color: #2f3337;
    text-decoration: underline;
  }
`;
