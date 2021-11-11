import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { RiArrowDownSFill } from "react-icons/ri";
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
    if (priceFilter === "Under $25") {
      newArr = newArr.filter((item) => {
        return item.price < 25;
      });
    }
    if (priceFilter === "$25 - $50") {
      newArr = newArr.filter((item) => {
        return 25 < item.price && item.price < 50;
      });
    }
    if (priceFilter === "$50 - $100") {
      newArr = newArr.filter((item) => {
        return 50 < item.price && item.price < 100;
      });
    }
    if (priceFilter === "$100 - $200") {
      newArr = newArr.filter((item) => {
        return 100 < item.price && item.price < 200;
      });
    }
    if (priceFilter === "Over $200") {
      newArr = newArr.filter((item) => {
        return item.price > 200;
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
    if (sort === "Best Selling") {
      newArr = await newArr.sort((a, b) => {
        return b.reviews - a.reviews;
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
