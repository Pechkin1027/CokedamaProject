import React from "react";
import PageLayout from "../components/PageLayout";
import JumboSaleDisplay from "../components/Landing/JumboSaleDisplay";
import styled from "styled-components";
import ProductGrid from "../components/Landing/ProductGrid";

export default function home() {
  let category1 = [
    {
      name: "Kokedama Plants",
      img:
        "https://www.succulentsurprise.com.au/images/products/large/ksg6xpx66i.jpg",
      urlQuery: "KokedamaPlants",
    },
    {
      name: "Kokedama String Gardens",
      img: "https://i.ibb.co/0GCNfky/String-Garden.jpg",
      urlQuery: "KokedamaStringGardens",
    },
    {
      name: "Decayed Wood Plant Arrangements",
      img: "https://i.ibb.co/NmV5RJs/Decayed.jpg",
      urlQuery: "DecayedWoodPlantArrangements",
    },
    {
      name: "Decorative Planters",
      img: "https://i.ibb.co/C9STdsW/Cloth-Planters.jpg",
      urlQuery: "DecorativePlanters",
    },
    {
      name: "Terrariums",
      img: "https://i.ibb.co/zhmZcy7/Terarium.jpg",
      urlQuery: "Terrariums",
    },
    {
      name: "All Items",
      img: "https://i.ibb.co/SrDSvsd/Plants-01.jpg",
      urlQuery: "AllItems",
    },
  ];
  return (
    <PageLayout type={"HOME"}>
      <JumboSaleDisplay
        url="/category"
        img="https://i.ibb.co/SdwwgF3/shutterstock-1848217732.png"
        First
      />
      <div className="bannerOne">
        <div className="oneText">
          <h2>Our Vision</h2>
          <p>
            To build a community that appreciates and values eco-friendly
            interior designs and to raise awareness of the importance of
            eco-friendly interior decorations through raising awareness,
            education, workforce development, partnerships, and resource
            development.
          </p>
        </div>
        <form action="/category?type=AllProducts">
          <input type="submit" value="Shop Now" />
        </form>
      </div>
      <ProductGrid title={"Categories"} type={"CATEGORY"} data={category1} />
      {/* <div className="bannerTwo">
        <form action="/category?type=AllProducts">
          <input type="submit" value="Shop Now" />
        </form>
        <div className="twoText">
          <h2>Our Goal</h2>
          <p>
            To promote eco-friendly interior designing and inspire people to
            pursue careers working with plants while finding meaningful creative
            work to financially support them and their families.
          </p>
        </div>
      </div> */}
      {/* <div className="vision-section">
        <h2>Our Company's Mission</h2>
        <div className="boxes">
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
      </div> */}
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
