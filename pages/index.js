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
  let grid1 = [AllProducts[2], AllProducts[1], AllProducts[6]];
  let grid2 = [AllProducts[5], AllProducts[4], AllProducts[3]];
  return (
    <PageLayout type={"HOME"}>
      <JumboSaleDisplay
        url="/category"
        img={"https://i.ibb.co/yysmT17/31a37094e2293c1d6fcce001d50afe55.png"}
        First
      />
      <div class="vision-section">
        <h2>Our Company's Mission</h2>
        <div class="vision-row1">
          <div class="vision-box">
            <img src={"Awareness.png"} />
            <h2>Awareness</h2>
            <p>
              Create a favorable perception of interior plantscaping and
              increase awareness of careers working with plants.
            </p>
          </div>
          <div class="vision-box">
            <img src="Education.png" />
            <h2>Education</h2>
            <p>
              Engage and excite students and professionals in interior design
              fields about horticulture.
            </p>
          </div>
          <div class="vision-box">
            <img src="Empower.png" />
            <h2>Empowerment</h2>
            <p>
              Empower creative moms by creating and popularizing business
              opportunities.
            </p>
          </div>
          <div class="vision-box">
            <img src="Partnership.png" />
            <h2>Partnerships</h2>
            <p>
              Cultivate and strengthen partnerships and collaborations, while
              diversifying and broadening the base of advocates and supporters.
            </p>
          </div>
        </div>
        <div class="vision-row2">
          <div class="vision-box">
            <img src="Eco Friendly.png" />
            <h2>Eco-Friendly</h2>
            <p>
              Popularize eco-friendly concepts in the interior design field by
              advocating the use of recycled materials.
            </p>
          </div>
          <div class="vision-box">
            <img src="Resource Dev.png" />
            <h2>Resource Development</h2>
            <p>
              Create educational resources such as plant databases, valuable
              tips, and guides for the community.
            </p>
          </div>
          <div class="vision-box">
            <img src="Workforce.png" />
            <h2>Workforce Developement</h2>
            <p>
              Increase the skilled workforce in plantscaping and develop a
              strong pipeline of future talent.
            </p>
          </div>
        </div>
      </div>
      <MainCont>
        <ProductGrid title={"Categories"} type={"CATEGORY"} data={category1} />
        <JumboSaleDisplay
          img="https://i.ibb.co/tHnsvfM/Couch.jpg"
          url="/category?type=Decor"
          title="Home decor"
          text="Limited time deals"
        />
        <JumboSaleDisplay
          img="https://i.ibb.co/zX5km9T/021521-Rugs-Promo-Desktop.jpg"
          url="/category?type=Rugs"
          title="Rug Refresh"
          text="Out with the old"
        />
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
