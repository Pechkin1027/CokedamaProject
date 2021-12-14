import React from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";
import CategoryCard from "./CategoryCard";

const ProductGrid = ({ title, type, data }) => {
  return (
    <Wrapper>
      <Header>
        <H2>{title}</H2>
      </Header>
      <MainCont>
        {type === "PRODUCT" &&
          data.map((info) => <ProductCard key={info.id} data={info} />)}
        {type === "CATEGORY" &&
          data.map((info) => <CategoryCard key={info.name} data={info} />)}
      </MainCont>
    </Wrapper>
  );
};

export default ProductGrid;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin-bottom: 100px;
`;
const Header = styled.div`
  display: flex;
  padding-bottom: 70px;
  justify-content: center;
`;
const H2 = styled.h2`
  font-size: 20px;
  // font-weight: 500;
  text-align: center;
`;
const MainCont = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 50px 20px;
  @media ${(props) => props.theme.tablet} {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 50px 20px;
  }
  @media ${(props) => props.theme.laptop} {
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(1, 1fr);
    gap: 0px 20px;
  }
`;
