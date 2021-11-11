import React from "react";
import styled from "styled-components";
import Link from "next/link";

const CategoryCard = ({ data }) => {
  return (
    <Link
      href={{ pathname: "/category", query: { type: data.urlQuery } }}
      passHref
    >
      <Wrapper>
        <Img src={data.img} />
        <TextCont>
          <H2>{data.name}</H2>
          <P>{data.description}</P>
        </TextCont>
      </Wrapper>
    </Link>
  );
};

export default CategoryCard;

const Wrapper = styled.a`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: ${(props) => props.theme.lightGrey};
  max-width: 100%;
  padding: 20px;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
`;
const Img = styled.img`
  width: 100%;
  object-fit: contain;
  height: 100px;
`;
const H2 = styled.h2`
  font-size: 16px;
  font-weight: 600;
  padding-bottom: 10px;
`;
const P = styled.p`
  font-size: 16px;
  font-weight: 400;
`;
const TextCont = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-top: 20px;
`;
