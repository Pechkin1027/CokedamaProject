import React from "react";
import styled from "styled-components";

export default function Overview({ data }) {
  return (
    <Wrapper>
      <Container>
        <Title>Video</Title>
        <InfoContainer>
          <Info>
            {/*
            <Video>{data.vid}</Video> 
            */}
            <iframe width="560" height="315" src="https://www.youtube.com/embed/ScMzIvxBSi4" 
            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
            clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </iframe>
            </Info>
        </InfoContainer>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0px;
`;

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.div`
  align-items: center;
  border-top: 1px solid #dadcdf;
  color: #2f3337;
  font-size: 20px;
  font-weight: 700;
  display: flex;
  height: 65px;
  justify-content: space-between;
  margin-bottom: 15px;
  text-align: left;
  width: 100%;
`;

const InfoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Column = styled.div`
  width: 47%;
  height: 100%;
  display: flex;
  flex-direction: column;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

const Policy = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  height: 100px;
`;

const iframe = styled.div`
  height: 60px;
  width: 60px;
  margin-right: 15px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const Policy__Title = styled.h2`
  color: #2f3337;
  display: inline-block;
  font-weight: 400;
  line-height: 22px;
  font-size: 16px;
  margin: 0;
`;

const Details = styled.p`
  color: #626669;
  font-size: 14px;
  line-height: 22px;
  margin: 0;
`;
