import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Product from "./Product";

export default function ProductsGrid(props) {
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setFilteredData(props.data);
  }, [props.sort, props.data]);

  return (
    <Wrapper>
      {filteredData.map((item, index) => {
        return <Product key={item.id} data={item} />;
      })}
      <Empty />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
  @media ${(props) => props.theme.mobileL} {
    width: 75%;
  }
`;

const Empty = styled.div`
  height: 1px;
  height: 400px;
  width: 31%;
`;
