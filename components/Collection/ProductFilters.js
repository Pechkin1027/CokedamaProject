import React, { useState } from "react";
import styled from "styled-components";
import FilterSection from "./ProductFilter/FilterSection";
export default function ProductFilters({
  category,
  priceFilter,
  setPriceFilter,
  setGroup,
  group,
}) {
  return (
    <Wrapper>
      <FilterSection
        name="Category"
        group={group}
        category={category}
        setGroup={setGroup}
      />
      <FilterSection
        name="Price"
        priceFilter={priceFilter}
        setPriceFilter={setPriceFilter}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 25%;
  height: 500px;
  min-width: 170px;
  display: none;
  align-items: center;
  margin: 10px 12px 0 0;
  flex-direction: column;
  @media ${(props) => props.theme.mobileL} {
    display: flex;
  }
`;
