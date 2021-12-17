import React from "react";
import styled from "styled-components";
import PageLayout from "../../components/PageLayout";
import Product from "../../components/ProductPage/Product";
import OverView from "../../components/ProductPage/Overview";
import Returns from "../../components/ProductPage/Returns";
import { useRouter } from "next/router";

export default function ProductPage({ data = {} }) {
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
// export async function getStaticPaths() {
//   const res = await fetch("https://cokedama.lk/api/posts");
//   const data = await res.json();
//   const paths = data?.map((info) => ({
//     params: { pid: info.id + "" },
//   }));
//   return { paths, fallback: false };
// }

export async function getServerSideProps({ params }) {
  const res = await fetch("https://cokedama.lk/api/posts");
  const data = await res.json();
  const AllProducts = data?.map((info) => {
    const img = [];
    for (let i = 0; i < 5; i++) {
      const newImg = info[`img${i}`];
      if (newImg) {
        img.push(newImg);
      }
    }
    return { ...info, img };
  });
  const single = AllProducts?.filter((info) => info.id == params.pid)[0];
  return { props: { data: single } };
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
