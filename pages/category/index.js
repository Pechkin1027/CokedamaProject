import React, { useState, useEffect } from "react";
import PageLayout from "../../components/PageLayout";
import styled from "styled-components";
import Header from "../../components/Collection/Header";
import MainSection from "../../components/Collection/MainSection";

export default function Collection() {
  const [sort, setSort] = useState("");
  const [group, setGroup] = useState("Bed & Bath");

  const urlq = {
    Rugs: "Rugs",
    BedNBath: "Bed & Bath",
    Kitchen: "Kitchen",
    Decor: "Decor",
    HomeImprovement: "Home Improvement",
  };
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get("type");
    if (myParam) setGroup(urlq[myParam]);
  }, []);

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
          />
        </Container>
      </Wrapper>
    </PageLayout>
  );
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
