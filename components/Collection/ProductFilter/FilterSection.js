import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import PriceItem from "./PriceItem";
import CategoryItem from "./CategoryItem";
export default function FilterSection({
  name,
  category,
  priceFilter,
  setPriceFilter,
  setGroup,
  group,
}) {
  let prices = ["Under Rs 1500", "Rs 1500 - Rs 2000", "Over Rs 2000"];
  let categories = [
    "All Items",
    "Decayed Wood Plant Arrangements",
    "Decorative Planters",
    "Decorative Pots",
    "Kokedama Plants",
    "Kokedama String Gardens",
    "Plant Art",
    "Plant Themed Home Decor",
    "Plant Themed Photo Frames",
    "Terrariums"
  ];

  return (
    <Wrapper>
      <Title>{name}</Title>
      {name === "Price" &&
        prices.map((item, index) => {
          return (
            <PriceItem
              key={item}
              name={item}
              priceFilter={priceFilter}
              setPriceFilter={setPriceFilter}
            />
          );
        })}
      {name === "Category" &&
        categories.map((item, index) => {
          return (
            <CategoryItem
              key={item}
              setGroup={setGroup}
              group={group}
              name={item}
              category={category}
            />
          );
        })}
      {name === "Price" && priceFilter != "" && (
        <Icon onClick={() => setPriceFilter("")}>
          <Clear>Clear</Clear>
          <AiOutlineClose />
        </Icon>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-top: 1px solid #dadcdf;
  padding-top: 16px;
  margin-bottom: 16px;
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
`;

const Title = styled.h3`
  color: #2f3337;
  line-height: 24px;
  position: relative;
  font-size: 18px;
  font-weight: 700;
  padding-bottom: 8px;
`;

const Icon = styled.div`
  cursor: pointer;
  position: absolute;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    text-decoration: underline;
  }
`;

const Clear = styled.span`
  margin-right: 10px;
  font-size: 14px;
`;
