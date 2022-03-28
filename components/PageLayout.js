import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import styled from "styled-components";
import CheckoutNav from "./Checkout/CheckoutNav";
import Head from "next/head";

const PageLayout = (props) => {
  useEffect(() => {
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = "3af7257e-fb11-487d-970c-4b0618a5b25f";
    (() => {
      const d = document;
      const s = d.createElement("script");
      s.src = "https://client.crisp.chat/l.js";
      s.async = 1;
      d.getElementsByTagName("body")[0].appendChild(s);
    })();
  });
  return (
    <Wrapper>
      <Head>
        <title>Cokedama Interior Plantscaping</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      {props.Checkout ? <CheckoutNav /> : <NavBar />}
      <MainCont type={props.type}>{props.children}</MainCont>
      <Footer />
    </Wrapper>
  );
};

export default PageLayout;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 100%;
  height: 100%;
  background: white;
  position: relative;
`;
const MainCont = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background: white;
  flex-direction: column;
  line-height: 1.2;
  color: ${(props) => props.theme.BoldText};
  @media ${(props) => props.theme.laptop} {
    width: ${(props) => (props.type === "PRODUCT" ? "1000px" : "100%")};
  }
  @media ${(props) => props.theme.laptopL} {
    width: ${(props) =>
      props.type === "PRODUCT"
        ? "1220px"
        : props.type === "HOME"
        ? "1680px"
        : ""};
  }
`;
