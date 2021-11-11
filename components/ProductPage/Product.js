import React, { useState, useRef } from "react";
import styled from "styled-components";
import ImageGallery from "react-image-gallery";
import { AiFillStar } from "react-icons/ai";

function Product({ data, handleAddToCart }) {
  const [size, setSize] = useState(data.sizes[0]);
  const [color, setColor] = useState(data.color[0]);
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    handleAddToCart({
      size,
      quantity,
      color,
      price: data.price,
      name: data.name,
      img: data.img[0],
      id: data.id,
    });
  };
  const galleryorder = {
    [data.color[0]]: 0,
    [data.color[1]]: data.imgNum,
    [data.color[2]]: data.imgNum * 2,
    [data.color[3]]: data.imgNum * 3,
  };
  const gallery = useRef(null);

  const handleColor = (e) => {
    let value = e.target.value;
    setColor(value);
    gallery.current.slideToIndex(galleryorder[value]);
  };
  const handleQuantity = (e) => {
    let value = e.target.value;
    setQuantity(Number(value));
  };

  return (
    <Wrapper>
      <Container>
        <Gallery>
          <ImageGallery
            ref={gallery}
            items={data?.img.map((info) => {
              return { original: info, thumbnail: info };
            })}
            showPlayButton={false}
            showFullscreenButton={false}
            thumbnailPosition="left"
          />
        </Gallery>
        <Details>
          <Product__Name>{data.name}</Product__Name>
          <Ratings>
            <AiFillStar color={data.rating > 0 ? "#f39019" : "#bfbfbf"} />
            <AiFillStar color={data.rating > 1 ? "#f39019" : "#bfbfbf"} />
            <AiFillStar color={data.rating > 2 ? "#f39019" : "#bfbfbf"} />
            <AiFillStar color={data.rating > 3 ? "#f39019" : "#bfbfbf"} />
            <AiFillStar color={data.rating > 4 ? "#f39019" : "#bfbfbf"} />
            <Reviews>{data.reviews}</Reviews>
          </Ratings>
          <Product__Price>${data.price}</Product__Price>
          {data.sizes.length > 0 && (
            <Size>
              <SubTitle>Size: {size}</SubTitle>
              <ButtonCont>
                {data.sizes.map((info) => (
                  <Button
                    selected={size === info}
                    value={info}
                    key={info}
                    onClick={() => setSize(info)}
                  >
                    {info}
                  </Button>
                ))}
              </ButtonCont>
            </Size>
          )}
          {data.color.length > 1 && (
            <Color>
              <SubTitle>Color: {color}</SubTitle>
              <Select onChange={(e) => handleColor(e)} value={color}>
                {data.color.map((info) => (
                  <Option key={info}>{info}</Option>
                ))}
              </Select>
            </Color>
          )}
          <Quantity>
            <SubTitle>Quantity:</SubTitle>
            <Select onChange={(e) => handleQuantity(e)} value={quantity}>
              <Option>1</Option>
              <Option>2</Option>
              <Option>3</Option>
              <Option>4</Option>
              <Option>5</Option>
              <Option>6</Option>
              <Option>7</Option>
              <Option>8</Option>
              <Option>9</Option>
              <Option>10</Option>
            </Select>
          </Quantity>
          <AddToCart onClick={handleAdd}>Add To Cart</AddToCart>
        </Details>
      </Container>
    </Wrapper>
  );
}
export default Product;
const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 125px;
  @media ${(props) => props.theme.laptopM} {
    padding-top: 150px;
  }
`;

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  @media ${(props) => props.theme.tablet} {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const Gallery = styled.div`
  width: 100%;
  margin-bottom: 50px;
  @media ${(props) => props.theme.tablet} {
    width: 55%;
    margin-bottom: 0px;
  }
  @media ${(props) => props.theme.laptop} {
    width: 60%;
  }
`;

const Details = styled.div`
  width: 100%;
  @media ${(props) => props.theme.tablet} {
    width: 40%;
  }
  @media ${(props) => props.theme.laptop} {
    width: 35%;
  }
`;

const Product__Name = styled.h1`
  color: #2f3337;
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
  margin-bottom: 20px;
`;

const Product__Price = styled.h1`
  color: #2f3337;
  font-size: 28px;
  font-weight: 700;
  line-height: 36px;
  margin-bottom: 25px;
`;

const Size = styled.div`
  margin-bottom: 25px;
`;

const SubTitle = styled.h1`
  color: #545658;
  font-size: 14px;
  margin-bottom: 10px;
`;
const ButtonCont = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
const Button = styled.button`
  background: ${(props) => (props.selected ? props.theme.BoldText : "#fff")};
  border-radius: 100px;
  border: 1px solid #2f3337;
  color: ${(props) => (props.selected ? "#fff" : props.theme.BoldText)};
  cursor: pointer;
  display: inline-block;
  font-family: Helvetica;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin: 0;
  max-width: 200px;
  overflow: hidden;
  padding: 4px 16px;
  position: relative;
  text-align: center;
  text-overflow: ellipsis;
  transition: background-color 0.3s, border-color 0.3s, box-shadow 0.3s,
    color 0.3s;
  white-space: nowrap;
  margin-right: 10px;
  margin-bottom: 10px;
  &:hover {
    background: ${(props) =>
      props.selected ? props.theme.BoldText : "#e8e8e8"};
  }
`;
const Ratings = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2px;
  align-items: center;
  margin-bottom: 10px;
`;
const Color = styled.div`
  margin-bottom: 25px;
`;

const Color__Title = styled.h1`
  color: #545658;
  font-size: 14px;
  margin-bottom: 10px;
`;

const Select = styled.select`
  align-items: center;
  background-color: #fff;
  border: 1px solid #dadcdf;
  border-radius: 4px;
  color: #545658;
  display: flex;
  font-size: 16px;
  height: 52px;
  justify-content: space-between;
  margin-bottom: 15px;
  padding: 2px 17px;
  text-align: left;
  width: 100%;
  margin: 0;
  /////////////////////////////////////// Improved Arrow
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: linear-gradient(45deg, transparent 50%, gray 50%),
    linear-gradient(135deg, gray 50%, transparent 50%),
    linear-gradient(to right, #ccc, #ccc);
  background-position: calc(100% - 20px) calc(1em + 2px),
    calc(100% - 15px) calc(1em + 2px), calc(100% - 2.5em) 0.5em;
  background-size: 5px 5px, 5px 5px, 1px 1.5em;
  background-repeat: no-repeat;
  &:focus {
    background-image: linear-gradient(45deg, green 50%, transparent 50%),
      linear-gradient(135deg, transparent 50%, green 50%),
      linear-gradient(to right, #ccc, #ccc);
    background-position: calc(100% - 15px) 1em, calc(100% - 20px) 1em,
      calc(100% - 2.5em) 0.5em;
    background-size: 5px 5px, 5px 5px, 1px 1.5em;
    background-repeat: no-repeat;
    border-color: green;
    outline: 0;
  }
  /////////////////////////////////////////////End Arrow
`;

const Option = styled.option``;

const Quantity = styled.div`
  margin-bottom: 25px;
`;
const Quantity__Title = styled.h1`
  color: #545658;
  font-size: 14px;
  margin-bottom: 10px;
`;

const AddToCart = styled.button`
  color: white;
  font-size: 16px;
  height: 44px;
  padding: 0 20px;
  background-color: #227553;
  cursor: pointer;
  width: 100%;
  border-radius: 10px;
  outline: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  margin-top: 25px;
`;
const Reviews = styled.span`
  font-size: 12px;
  margin-left: 5px;
  color: black;
`;
