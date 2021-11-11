import React, { useState } from "react";
import styled from "styled-components";

export default function CartItem({ data, updateNums, index, handleRemove }) {
  const [Quantity, updateQuantity] = useState(data.quantity);
  const [removed, updateRemoved] = useState(false);

  function handleChange(e) {
    e.preventDefault();
    updateQuantity(e.target.value);
    updateNums(e.target.value, index);
  }

  return (
    <>
      {!removed && (
        <Wrapper>
          <Container>
            <Image src={data.img} />
            <Product>
              <H1>{data.name}</H1>
              <Color>
                {data.size} - {data.color}
              </Color>
              <Price>${(data.price * data.quantity).toFixed(2)}</Price>
              <Select value={Quantity} onChange={(e) => handleChange(e)}>
                <Option value={1}>1</Option>
                <Option value={2}>2</Option>
                <Option value={3}>3</Option>
                <Option value={4}>4</Option>
                <Option value={5}>5</Option>
                <Option value={6}>6</Option>
                <Option value={7}>7</Option>
                <Option value={8}>8</Option>
                <Option value={9}>9</Option>
                <Option value={10}>10</Option>
              </Select>
              <Remove onClick={() => handleRemove(index)}>Remove</Remove>
            </Product>
          </Container>
        </Wrapper>
      )}
    </>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;
const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  flex-direction: row;
  border: 1px solid #dadcdf;
  padding: 20px;
  @media (max-width: 1200px) {
    width: 75%;
  }
  @media (max-width: 1000px) {
    width: 100%;
  }
`;
const Image = styled.img`
  width: 250px;
  height: 250px;
  margin-right: 50px;
  @media (max-width: 1200px) {
    width: 250px;
    height: 250px;
  }
  @media (max-width: 700px) {
    width: 125px;
    height: 125px;
  }
`;
const Product = styled.div`
  width: 50%;
`;
const H1 = styled.h1`
  font-family: Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #2f3337;
  padding-bottom: 15px;
`;
const Color = styled.div`
  font-family: Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #2f3337;
  padding-bottom: 15px;
`;
const Price = styled.div`
  font-weight: 700;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 20px;
  padding-bottom: 15px;
`;
const Select = styled.select`
  background: transparent !important;
  border: 1px solid #e7e8ea;
  padding-bottom: 1px;
  padding-left: 10px;
  height: 34px;
  width: 40%;
  border-radius: 4px;
  margin-bottom: 75px;
  @media (max-width: 500px) {
    -moz-appearance: none;
    -webkit-appearance: none;
    padding: none;
    width: 60%;
  }
`;
const Option = styled.option``;
const Remove = styled.div`
  color: #2f3337;
  text-decoration: underline;
  cursor: pointer;
`;
