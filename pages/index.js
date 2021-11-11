import React from "react";
import PageLayout from "../components/PageLayout";
import JumboSaleDisplay from "../components/Landing/JumboSaleDisplay";
import styled from "styled-components";
import ProductGrid from "../components/Landing/ProductGrid";
import CategoryGrid from "../components/Landing/CategoryGrid";
import { AllProducts } from "../data/Category";
export default function home() {
  let product1 = [
    AllProducts[0],
    AllProducts[3],
    AllProducts[5],
    AllProducts[8],
    AllProducts[10],
    AllProducts[16],
  ];
  let category1 = [
    {
      name: "extra 25% off",
      description: "Select Featured Brand Rugs*",
      img: "https://i.ibb.co/Xjm3rG7/Rugfb239f832.png",
      urlQuery: "Rugs",
    },
    {
      name: "extra 15% off",
      description: "Select Kitchen*",
      img: "https://i.ibb.co/svcHC49/2g094h8g43g9438.png",
      urlQuery: "Kitchen",
    },
    {
      name: "extra 25% off",
      description: "Select Bedding & Bath*",
      img: "https://i.ibb.co/GRgvgcs/02182021-HB4.png",
      urlQuery: "Bed & Bath",
    },
    {
      name: "extra 25% off",
      description: "Select Home Decor*",
      img: "https://i.ibb.co/rv2tZRH/02182021-HB5.png",
      urlQuery: "Decor",
    },
    {
      name: "extra 25% off",
      description: "Select Home Improvement*",
      img: "https://i.ibb.co/ZMSS7kY/02182021-HB6.png",
      urlQuery: "HomeImprovement",
    },
    {
      name: "huge savings",
      description: "On Fresh Inventory",
      img: "//ak1.ostkcdn.com/img/mxc/02222021-HB6v3.png",
      urlQuery: "",
    },
  ];
  let grid1 = [AllProducts[2], AllProducts[10], AllProducts[15]];
  let grid2 = [AllProducts[18], AllProducts[17], AllProducts[21]];
  return (
    <PageLayout type={"HOME"}>
      <JumboSaleDisplay
        url="/category"
        img={"https://i.ibb.co/yysmT17/31a37094e2293c1d6fcce001d50afe55.png"}
        First
      />
      <MainCont>
        <ProductGrid
          title={"Limited Time Deals"}
          type={"CATEGORY"}
          data={category1}
        />
        <ProductGrid
          title={"Things We Know You'll Love"}
          type={"PRODUCT"}
          data={product1}
        />
        <JumboSaleDisplay
          img="https://i.ibb.co/tHnsvfM/Couch.jpg"
          url="/category?type=Decor"
          title="Home decor"
          text="Limited time deals"
        />
        <CategoryGrid type={"SHOPNOW"} data={grid1} />
        <JumboSaleDisplay
          img="https://i.ibb.co/zX5km9T/021521-Rugs-Promo-Desktop.jpg"
          url="/category?type=Rugs"
          title="Rug Refresh"
          text="Out with the old"
        />
        <CategoryGrid type={"SHOPNOW"} data={grid2} />
        <CategoryGrid type={"SALE"} />
      </MainCont>
    </PageLayout>
  );
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
