import React from "react";
import styled from "styled-components";
import PageLayout from "../../components/PageLayout";
import Product from "../../components/ProductPage/Product";
import OverView from "../../components/ProductPage/Overview";
import Returns from "../../components/ProductPage/Returns";
import { AllProducts } from "../../data/Category";
import { useRouter } from "next/router";

export default function ProductPage({ data }) {
  const router = useRouter();
  const handleAddToCart = (info) => {
    let Cart = JSON.parse(localStorage.getItem("Cart")) || [];
    Cart.push(info);
    localStorage.setItem("Cart", JSON.stringify(Cart));
    router.push("/checkout");
  };
  return (
    <PageLayout type={"PRODUCT"}>
      <MainCont>
        <Product data={data} handleAddToCart={handleAddToCart} />
        <OverView data={data} />
        <Returns />
      </MainCont>
    </PageLayout>
  );
}
export async function getStaticPaths() {
  const paths = AllProducts.map((info) => ({
    params: { pid: info.id },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  return { props: { data: AllProducts[params.pid] } };
}
const MainCont = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  height: 100%;
  justify-content: center;
  padding: 0 24px;
  @media ${(props) => props.theme.laptop} {
  }
`;
