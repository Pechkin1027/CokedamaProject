import React from "react";
import styled from "styled-components";
import Link from "next/link";

const SaleCard = ({ data, mb, last }) => {
  return (
    <Link href={"/category"} passHref>
      <Wrapper mb={mb} last={last}>
        <ImgCont>
          <Img src={data.img} />
        </ImgCont>
      </Wrapper>
    </Link>
  );
};

export default SaleCard;

const Wrapper = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin: 0px 8px;
  margin-bottom: ${(props) => props.mb};
  background: ${(props) =>
    props.last ? props.theme.red : props.theme.lightGrey};
  cursor: pointer;
  @media ${(props) => props.theme.tablet} {
    width: 33.3%;
    margin-bottom: 0px;
    margin: 0px 16px;
  }
`;
const ImgCont = styled.div`
  padding: 20px 0px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${(props) => props.theme.tablet} {
    padding: 20px 10px;
  }
`;
const Img = styled.img`
  width: 100%;
`;
