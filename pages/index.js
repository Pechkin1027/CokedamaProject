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
      name: "Kokedama Plants",
      //description: "Sansevieria Zeylancia",
      img: "https://www.succulentsurprise.com.au/images/products/large/ksg6xpx66i.jpg",
      urlQuery: "KokedamaPlants",
    },
    {
      name: "Kokedama String Gardens",
      //description: "Goldon Pothos",
      img: "https://i.ibb.co/0GCNfky/String-Garden.jpg",
      urlQuery: "KokedamaStringGardens",
    },
    {
      name: "Decayed Wood Plant Arrangements",
      //description: "Aglaonema, Diffenbachia*, etc.",
      img: "https://i.ibb.co/NmV5RJs/Decayed.jpg",
      urlQuery: "DecayedWoodPlantArrangements",
    },
    {
      name: "All Items",
      //description: "All of our items",
      img: "https://i.ibb.co/SrDSvsd/Plants-01.jpg",
      urlQuery: "AllItems",
    },
    {
      name: "Terrariums",
      //description: "Potted Plants, Greeting Cards, and more",
      img: "https://i.ibb.co/zhmZcy7/Terarium.jpg",
      urlQuery: "Terrariums",
    },
    {
      name: "Decorative Planters",
      img: "https://i.ibb.co/C9STdsW/Cloth-Planters.jpg",
      urlQuery: "DecorativePlanters",
    },
  ];
  let grid1 = [AllProducts[2], AllProducts[1], AllProducts[6]];
  let grid2 = [AllProducts[5], AllProducts[4], AllProducts[3]];
  return (
    <PageLayout type={"HOME"}>
      <JumboSaleDisplay
        url="/category"
        img="https://i.ibb.co/SdwwgF3/shutterstock-1848217732.png"
        First
      />
      <div className="vision-section">
        <h2>Our Company's Mission</h2>
          <div className = "boxes">
            <div className="vision-box">
              <img src={"Awareness.png"} />
              <h2>Awareness</h2>
              <p>
                Create a favorable perception of interior plantscaping and
                increase awareness of careers working with plants.
              </p>
            </div>
            <div className="vision-box">
              <img src="Education.png" />
              <h2>Education</h2>
              <p>
                Engage and excite students and professionals in interior design
                fields about horticulture.
              </p>
            </div>
            <div className="vision-box">
              <img src="Empower.png" />
              <h2>Empowerment</h2>
              <p>
                Empower creative moms by creating and popularizing business
                opportunities.
              </p>
            </div>
            <div className="vision-box">
              <img src="Partnership.png" />
              <h2>Partnerships</h2>
              <p>
                Cultivate and strengthen partnerships and collaborations, while
                diversifying and broadening the base of advocates and supporters.
              </p>
            </div>
            <div className="vision-box">
              <img src="Eco Friendly.png" />
              <h2>Eco-Friendly</h2>
              <p>
                Popularize eco-friendly concepts in the interior design field by
                advocating the use of recycled materials.
              </p>
            </div>
            <div className="vision-box">
              <img src="Resource Dev.png" />
              <h2>Resource Development</h2>
              <p>
                Create educational resources such as plant databases, valuable
                tips, and guides for the community.
              </p>
            </div>
            <div className="vision-box">
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
        <div className = "bannerOne">
          <div className = "oneText">
            <h2>Our Vision</h2>
            <p>To build a community that appreciates and values eco-friendly interior designs and to raise awareness of the importance of eco-friendly interior decorations through raising awareness, education, workforce development, partnerships, and resource development.</p>
          </div>
          <form action = "/category?type=AllProducts">
              <input type = "submit" value = "Shop Now"/>
          </form>
        </div>
        <ProductGrid title={"Categories"} type={"CATEGORY"} data={category1} />
        <div className = "bannerTwo">
          <form action = "http://localhost:3000/category?type=MoneyPlants">
              <input type = "submit" value = "Shop Now"/>
          </form>
          <div className = "twoText">
            <h2>Our Goal</h2>
            <p>To promote eco-friendly interior designing and
          inspire people to pursue careers working with plants while finding
          meaningful creative work to financially support them and their
          families.</p>
          </div>
<<<<<<< HEAD
          <form action = "/category?type=AllProducts">
              <input type = "submit" value = "Shop Now"/>
          </form>
          <img src = "https://i.ibb.co/6N0r0ws/shutterstock-1711748359.jpg" />
=======
>>>>>>> 280da4c9cee987a128a2d2a5a4de4b4b39f4f23f
        </div>
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
