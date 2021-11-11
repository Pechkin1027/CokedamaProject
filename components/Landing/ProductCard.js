import React from "react";
import styled from "styled-components";
import Link from "next/link";

const ProductCard = ({ data }) => {
  return (
    <Link href={"/category/" + data.id} passHref>
      <Wrapper>
        <Img src={data.img[0]} />
        <TextCont>
          <H2>${data.price}</H2>
          <P>{data.name}</P>
        </TextCont>
        {Math.round(data.rating) == 5 && (
          <Rating>
            <Star
              src={
                "https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg"
              }
            />
            <Star
              src={
                "https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg"
              }
            />
            <Star
              src={
                "https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg"
              }
            />
            <Star
              src={
                "https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg"
              }
            />
            <Star
              src={
                "https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg"
              }
            />
          </Rating>
        )}
        {Math.round(data.rating) == 4 && (
          <Rating>
            <Star
              src={
                "https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg"
              }
            />
            <Star
              src={
                "https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg"
              }
            />
            <Star
              src={
                "https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg"
              }
            />
            <Star
              src={
                "https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg"
              }
            />
            <Star
              src={
                "https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-empty.svg"
              }
            />
          </Rating>
        )}
      </Wrapper>
    </Link>
  );
};

export default ProductCard;

const Wrapper = styled.a`
  display: flex;
  justify-content: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  cursor: pointer;
  color: inherit;
  text-decoration: none;
`;
const Img = styled.img`
  width: 100%;
  object-fit: cover;
  height: 200px;
`;
const H2 = styled.h2`
  font-size: 18px;
  font-weight: 600;
  padding-bottom: 10px;
  color: ${(props) => props.theme.redText};
`;
const P = styled.p`
  font-size: 16px;
  font-weight: 400;
`;
const TextCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 20px;
`;
const Rating = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;
const Star = styled.img`
  padding-left: 3px;
`;
