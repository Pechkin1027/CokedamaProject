import React, { useState, useEffect } from "react";
import PageLayout from "../../components/PageLayout";
import styled from "styled-components";
import Header from "../../components/Collection/Header";
import MainSection from "../../components/Collection/MainSection";

export default function Collection({ AllProducts }) {
  const [sort, setSort] = useState("");
  const [group, setGroup] = useState("All Items");
  const [data, setData] = useState(AllProducts);
  const urlq = {
    KokedamaPlants: "Kokedama Plants",
    KokedamaStringGardens: "Kokedama String Gardens",
    DecayedWoodPlantArrangements: "Decayed Wood Plant Arrangements",
    Terrariums: "Terrariums",
    PlantArt: "Plant Art",
    DecorativePots: "Decorative Pots",
    DecorativePlanters: "Decorative Planters",
    PlantThemedPhotoFrames: "Plant Themed Photo Frames",
    PlantThemedGreetingCards: "Plant Themed Greeting Cards",
    PlantThemedHomeDecor: "Plant Themed Home Decor",
    AllItems: "All Items",
  };
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get("type");
    if (myParam) setGroup(urlq[myParam]);
  }, []);
  useEffect(() => {
    if (group === "All Items") {
      setData(AllProducts);
      return;
    }
    setData(AllProducts?.filter((info) => info.category === group));
  }, [group]);
  console.log(data);
  return (
    <PageLayout>
      <Wrapper>
        <Container>
          <Header name={group} sort={sort} setSort={setSort} />
          <MainSection
            name={group}
            sort={sort}
            setGroup={setGroup}
            group={group}
            data={data}
          />
        </Container>
      </Wrapper>
    </PageLayout>
  );
}
export async function getStaticProps() {
  const res = await fetch("https://cokedama.lk/api/posts");
  const data = await res.json();
  const AllProducts = data.map((info) => {
    const img = [];
    for (let i = 0; i < 5; i++) {
      const newImg = info[`img${i}`];
      if (newImg) {
        img.push(newImg);
      }
    }
    return { ...info, img };
  });
  console.log(AllProducts);
  return { props: { AllProducts } };
}
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Open Sans", sans-serif;
  margin-top: 40px;
  @media ${(props) => props.theme.tabletL} {
    margin-top: 80px;
    margin-bottom: 50px;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  max-width: 1440px;
  padding: 0 16px;
  width: 100%;
`;
