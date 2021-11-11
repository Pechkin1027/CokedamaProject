import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { RiArrowDownSFill } from "react-icons/ri";
export default function Header(props) {
  const [value, setValue] = useState("");
  const [name, setName] = useState("");
  const onChange = (val) => {
    setValue(val);
    props.setSort(val);
  };
  useEffect(() => {
    if (props.name === "HomeImprovement") {
      setName("Home Improvement");
    } else if (props.name === "BedNBath") {
      setName("Bed & Bath");
    } else {
      setName(props.name);
    }
  }, [props.name]);
  return (
    <Wrapper>
      <Title>{name}</Title>
      <Sort>
        <Subtitle>Sort by:</Subtitle>
        <Container>
          <Select
            value={value}
            onChange={(event) => onChange(event.target.value)}
          >
            <Option>Select</Option>

            <Option>Price Low - High</Option>
            <Option>Price High - Low</Option>
            <Option>Best Selling</Option>
          </Select>
        </Container>
      </Sort>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-top: ${(props) => (props.First ? "125px" : "0px")}; */
  margin-bottom: 30px;
  margin-top: 30px;
  flex-direction: column;
`;

const Title = styled.h1`
  color: #2f3337;
  font-size: 36px;
  font-weight: 700;
  line-height: 43px;
  margin: 0 0 15px;
  width: 100%;
`;

const Sort = styled.div`
  width: 100%;
  justify-content: flex-end;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  margin-top: 15px;
`;

const Subtitle = styled.p`
  margin-right: 20px;
`;

const Select = styled.select`
  font-size: 14px;
  height: 34px;

  color: #2f3337;
  line-height: 1;
  min-width: 150px;
  position: relative;
  text-align: left;
  padding: 0 16px;
  border-radius: 4px;

  border: 1px solid #dadcdf;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

const Option = styled.option`
  font-size: 14px;
  height: 34px;

  color: #2f3337;
  line-height: 1;
  /* min-width: 150px; */
  position: relative;
  text-align: left;
  padding: 0 16px;

  border: 1px solid #dadcdf;
  display: flex;
  align-items: center;
  cursor: pointer;
  :hover {
    background-color: #dadcdf;
    outline: 0 !important;
    background: #f00;
    color: #fff;
    box-shadow: inset 20px 20px #f00;
  }
  :focus {
    outline: 0 !important;
  }
`;

const Container = styled.div`
  position: relative;
`;
