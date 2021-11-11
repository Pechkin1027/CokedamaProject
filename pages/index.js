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
      name: "Snake Plants",
      description: "Sansevieria Zeylancia",
      img: "http://cokedama.herokuapp.com/media/products/2021/06/30/Picture4.jpg",
      urlQuery: "Snake Plants",
    },
    {
      name: "Money Plants",
      description: "Goldon Pothos",
      img: "http://cokedama.herokuapp.com/media/products/2021/06/30/Picture12.jpg",
      urlQuery: "Money Plants",
    },
    {
      name: "Chinese Evergreen Varieties",
      description: "Aglaonema",
      img: "http://cokedama.herokuapp.com/media/products/2021/06/30/Picture13_WN1qRLk.jpg",
      urlQuery: "Chinese Evergreen Varieties",
    },
    {
      name: "Dumb Cane Varieties",
      description: "Diffenbachia*",
      img: "https://i.ibb.co/xYMh8r0/CIP-P004-A0.jpg",
      urlQuery: "Dumb Cane Varieties",
    },
    {
      name: "Etc.",
      description: "All Other Products",
      img: "https://i.ibb.co/fSC6M90/CIP-P005-B.jpg",
      urlQuery: "Etc",
    },
    {
      name: "GROW a little love with little PLANTS",
      img: "http://cokedama.herokuapp.com/media/products/2021/06/28/stringgarden1.jpg",
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
