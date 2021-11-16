import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProductFilters from "./ProductFilters";
import ProductsGrid from "./ProductsGrid";
import Category from "../../data/Category";

export default function MainSection({ data, sort, setGroup, group }) {
  const [filteredData, setFilteredData] = useState([]);
  const [currCategory, setCurrCategory] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  useEffect(() => {
    sortArrays();
  }, [sort, data, priceFilter, group]);

  const sortArrays = async () => {
    let newArr = JSON.parse(JSON.stringify(Category[group]));
    if (priceFilter === "Under Rs 1500") {
      newArr = newArr.filter((item) => {
        return item.price < 1500;
      });
    }
    if (priceFilter === "Rs 1500 - Rs 2000") {
      newArr = newArr.filter((item) => {
        return 1500 <= item.price && item.price <= 2000;
      });
    }
    if (priceFilter === "Over Rs 2000") {
      newArr = newArr.filter((item) => {
        return item.price > 2000;
      });
    }
    if (sort === "Price Low - High") {
      newArr = await newArr.sort((a, b) => {
        return a.price - b.price;
      });
    }
    if (sort === "Price High - Low") {
      newArr = await newArr.sort((a, b) => {
        return b.price - a.price;
      });
    }
    setFilteredData(newArr);
  };

  return (
    <Wrapper>
      <ProductFilters
        priceFilter={priceFilter}
        setPriceFilter={setPriceFilter}
        category={currCategory}
        sort={sort}
        setGroup={setGroup}
        group={group}
      />
      <ProductsGrid priceFilter={priceFilter} data={filteredData} sort={sort} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
`;
